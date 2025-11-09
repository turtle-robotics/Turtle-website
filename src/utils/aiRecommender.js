// In utils/aiRecommender.js, replace the fetch section with:

try {
  const catalog = buildCatalog(projects)
  const resp = await fetch('/api/recommend', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ query, catalog })
  })
  
  if (resp.ok) {
    const data = await resp.json()
    if (Array.isArray(data?.recommendations) && data.recommendations.length) {
      return { source: data.source || 'gemini', recommendations: data.recommendations }
    }
  }
} catch (e) {
  console.error('API error:', e)
}