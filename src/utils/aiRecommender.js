// Recommends projects using an LLM if configured, with a robust local fallback.

const getEnv = (key, fallback = undefined) => {
  try {
    return import.meta.env[key] ?? fallback
  } catch (_) {
    return fallback
  }
}

function buildCatalog(projects) {
  return projects.map((p) => ({
    id: p.id,
    title: p.title,
    subtitle: p.subtitle,
    description: p.fullDescription || p.description,
    tags: p.tags || [],
    technologies: p.technologies || [],
    category: p.category,
  }))
}

function buildPrompt(query, projects) {
  const catalog = buildCatalog(projects)
  return [
    {
      role: 'system',
      content:
        'You are an assistant that recommends the single best project (and optionally 2 alternates) for a student based on their interests and skills. Return ONLY strict JSON with the shape {"recommendations":[{"id":"<project-id>","reason":"<1-2 sentences>","confidence":0.0-1.0}]} ordered by confidence. Use the project catalog provided.',
    },
    {
      role: 'user',
      content:
        'Student query: ' +
        JSON.stringify(query) +
        '\nProject catalog JSON: ' +
        JSON.stringify(catalog),
    },
  ]
}

async function callOpenRouter(messages, model, apiKey) {
  const body = {
    model: model || 'openrouter/auto',
    messages,
    temperature: 0.2,
  }
  const res = await fetch('https://openrouter.ai/api/v1/chat/completions', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${apiKey}`,
      'X-Title': 'TurtleWebsite Project Recommender',
    },
    body: JSON.stringify(body),
  })
  if (!res.ok) throw new Error(`OpenRouter error ${res.status}`)
  const data = await res.json()
  const content = data?.choices?.[0]?.message?.content || ''
  return content
}

async function callHuggingFace(messages, model, apiKey) {
  const prompt = messages.map((m) => `${m.role.toUpperCase()}: ${m.content}`).join('\n\n')
  const res = await fetch(`https://api-inference.huggingface.co/models/${model}`, {
    method: 'POST',
    headers: {
      Authorization: `Bearer ${apiKey}`,
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ inputs: prompt, options: { wait_for_model: true } }),
  })
  if (!res.ok) throw new Error(`HF error ${res.status}`)
  const data = await res.json()
  const content = Array.isArray(data) ? data[0]?.generated_text || '' : data?.generated_text || ''
  return content
}

function safeParseRecommendations(text) {
  try {
    // Extract JSON block if model added prose
    const match = text.match(/\{[\s\S]*\}/)
    const jsonText = match ? match[0] : text
    const obj = JSON.parse(jsonText)
    const recs = Array.isArray(obj?.recommendations) ? obj.recommendations : []
    return recs
  } catch (_) {
    return []
  }
}

function localHeuristic(query, projects) {
  const q = (query || '').toLowerCase()
  const terms = q.split(/[^a-z0-9+]+/).filter(Boolean)
  const scored = projects.map((p) => {
    const hay = [
      p.title,
      p.subtitle,
      p.description,
      (p.tags || []).join(' '),
      (p.technologies || []).join(' '),
      p.category,
    ]
      .join(' ')
      .toLowerCase()
    let score = 0
    for (const t of terms) {
      if (!t) continue
      const re = new RegExp(`\\b${t.replace(/[.*+?^${}()|[\\]\\\\]/g, '\\$&')}\\b`, 'g')
      const matches = hay.match(re)
      score += matches ? matches.length : 0
    }
    // Phrase boosts
    if (q.includes('reinforcement learning') && hay.includes('reinforcement')) score += 2
    if (q.includes('control') && hay.includes('control')) score += 1
    if (q.includes('computer vision') && hay.includes('vision')) score += 1
    return { id: p.id, reason: 'Matched tags/description', confidence: Math.min(1, score / 10), score }
  })
  scored.sort((a, b) => b.score - a.score)
  return scored.slice(0, 3)
}

export async function recommendProjects(projects, query) {
  const messages = buildPrompt(query, projects)
  const openrouterKey = getEnv('VITE_OPENROUTER_API_KEY')
  const openrouterModel = getEnv('VITE_OPENROUTER_MODEL', 'openrouter/auto')
  const hfKey = getEnv('VITE_HF_TOKEN')
  const hfModel = getEnv('VITE_HF_MODEL')
  const geminiKey = getEnv('VITE_GEMINI_API_KEY')
  const geminiModel = getEnv('VITE_GEMINI_MODEL', 'gemini-1.5-flash-latest')

  // Try OpenRouter
  if (openrouterKey) {
    try {
      const content = await callOpenRouter(messages, openrouterModel, openrouterKey)
      const recs = safeParseRecommendations(content)
      if (recs.length) return { source: 'openrouter', recommendations: recs }
    } catch (e) {
      // fall through
    }
  }

  // Try Google Gemini
  async function callGemini(messages, model, apiKey) {
    // Convert to Gemini contents format
    const contents = messages.map((m) => ({ role: m.role === 'system' ? 'user' : m.role, parts: [{ text: m.content }] }))
    const res = await fetch(`https://generativelanguage.googleapis.com/v1beta/models/${model}:generateContent?key=${apiKey}`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ contents, generationConfig: { temperature: 0.2 } }),
    })
    if (!res.ok) throw new Error(`Gemini error ${res.status}`)
    const data = await res.json()
    const text = data?.candidates?.[0]?.content?.parts?.map((p) => p.text).join('\n') || ''
    return text
  }

  if (geminiKey) {
    try {
      const content = await callGemini(messages, geminiModel, geminiKey)
      const recs = safeParseRecommendations(content)
      if (recs.length) return { source: 'gemini', recommendations: recs }
    } catch (e) {
      // fall through
    }
  }

  // Try HuggingFace
  if (hfKey && hfModel) {
    try {
      const content = await callHuggingFace(messages, hfModel, hfKey)
      const recs = safeParseRecommendations(content)
      if (recs.length) return { source: 'huggingface', recommendations: recs }
    } catch (e) {
      // fall through
    }
  }

  // Fallback heuristic
  const recs = localHeuristic(query, projects)
  return { source: 'local', recommendations: recs }
}

