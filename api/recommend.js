// /api/recommend.js
export default async function handler(req, res) {
  // Set CORS headers
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'POST, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');

  // Handle preflight
  if (req.method === 'OPTIONS') {
    res.status(200).end();
    return;
  }

  if (req.method !== 'POST') {
    res.status(405).json({ error: 'Method not allowed' });
    return;
  }

  try {
    const { query, catalog } = req.body || {};
    if (!query || !Array.isArray(catalog)) {
      res.status(400).json({ error: 'Missing query or catalog' });
      return;
    }

    const apiKey = process.env.GEMINI_API_KEY || process.env.GOOGLE_GEMINI_API_KEY;
    const model = process.env.GEMINI_MODEL || 'gemini-1.5-flash-latest';
    
    if (!apiKey) {
      res.status(500).json({ error: 'Server not configured' });
      return;
    }

    const messages = [
      {
        role: 'system',
        content:
          'You are an assistant that recommends the single best project (and optionally 2 alternates) for a student based on their interests and skills. Return ONLY strict JSON with the shape {"recommendations":[{"id":"<project-id>","reason":"<1-2 sentences>","confidence":0.0-1.0}]} ordered by confidence. Use the project catalog provided.',
      },
      { 
        role: 'user', 
        content: `Student query: ${JSON.stringify(query)}\nProject catalog JSON: ${JSON.stringify(catalog)}` 
      },
    ];

    const contents = messages.map((m) => ({ 
      role: m.role === 'system' ? 'user' : m.role, 
      parts: [{ text: m.content }] 
    }));

    const r = await fetch(
      `https://generativelanguage.googleapis.com/v1beta/models/${model}:generateContent?key=${apiKey}`,
      {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ contents, generationConfig: { temperature: 0.2 } }),
      }
    );

    if (!r.ok) {
      const text = await r.text();
      console.error('Gemini error:', text);
      res.status(502).json({ error: 'Gemini error', detail: text });
      return;
    }

    const data = await r.json();
    const text = data?.candidates?.[0]?.content?.parts?.map((p) => p.text).join('\n') || '';
    const match = text.match(/\{[\s\S]*\}/);
    const jsonText = match ? match[0] : text;
    
    let parsed;
    try {
      parsed = JSON.parse(jsonText);
    } catch (_) {
      parsed = { recommendations: [] };
    }

    res.status(200).json({ source: 'gemini', ...parsed });
  } catch (e) {
    console.error('Server error:', e);
    res.status(500).json({ error: 'Server error', detail: e.message });
  }
}