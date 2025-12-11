/**
 * AI Project Recommender Utility
 *
 * Recommends projects based on user queries using an LLM if configured
 * with a robust local keyword-matching fallback.
 */

/**
 * Builds a simplified catalog of projects for AI processing
 * @param {Array} projects - Full project objects array
 * @returns {Array} Simplified project catalog with essential fields
 */
function buildCatalog(projects) {
  return projects.map((p) => ({
    id: p.id,
    title: p.title,
    subtitle: p.subtitle,
    description: p.fullDescription || p.description,
    tags: p.tags || [],
    technologies: p.technologies || [],
    category: p.category,
  }));
}

/**
 * Local keyword-based project matching algorithm
 * Scores projects based on keyword matches with boost for specific phrases
 *
 * @param {string} query - User search query
 * @param {Array} projects - Array of project objects to search
 * @returns {Array} Scored and sorted project recommendations
 */
function localHeuristic(query, projects) {
  const q = (query || "").toLowerCase();
  const terms = q.split(/[^a-z0-9+]+/).filter(Boolean); // Split into searchable terms

  // Score each project based on keyword matches
  const scored = projects.map((p) => {
    const hay = [
      p.title,
      p.subtitle,
      p.description,
      (p.tags || []).join(" "),
      (p.technologies || []).join(" "),
      p.category,
    ]
      .join(" ")
      .toLowerCase();
    let score = 0;
    for (const t of terms) {
      if (!t) continue;
      const re = new RegExp(
        `\\b${t.replace(/[.*+?^${}()|[\\]\\\\]/g, "\\$&")}\\b`,
        "g",
      );
      const matches = hay.match(re);
      score += matches ? matches.length : 0;
    }
    // Phrase boosts
    if (q.includes("reinforcement learning") && hay.includes("reinforcement"))
      score += 2;
    if (q.includes("control") && hay.includes("control")) score += 1;
    if (q.includes("computer vision") && hay.includes("vision")) score += 1;
    return {
      id: p.id,
      reason: "Matched tags/description",
      confidence: Math.min(1, score / 10),
      score,
    };
  });
  scored.sort((a, b) => b.score - a.score);
  return scored.slice(0, 3);
}

export async function recommendProjects(projects, query) {
  const catalog = buildCatalog(projects);

  // Call secure serverless Gemini proxy
  try {
    const resp = await fetch("/api/recommend", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ query, catalog }),
    });

    if (resp.ok) {
      const data = await resp.json();
      if (Array.isArray(data?.recommendations) && data.recommendations.length) {
        return {
          source: data.source || "gemini",
          recommendations: data.recommendations,
        };
      }
    }
  } catch (e) {
    console.error("API error:", e);
    // fall through to local heuristic
  }

  // Fallback heuristic
  const recs = localHeuristic(query, projects);
  return { source: "local", recommendations: recs };
}
