import { Link } from "react-router-dom";
import { useState, useEffect, useRef, useMemo } from "react";
import { gsap } from "gsap";
import { projects } from "../data/projects";
import { recommendProjects } from "../utils/aiRecommender";
import ButtonLink from "../components/ButtonLink";

const Projects = () => {
  const [selectedProject, setSelectedProject] = useState(null);
  const [searchTerm, setSearchTerm] = useState("");
  const [aiResult, setAiResult] = useState(null);
  const [isLoadingAI, setIsLoadingAI] = useState(false);
  const [aiAutoMode, setAiAutoMode] = useState(false);
  const debounceRef = useRef(null);
  const heroRef = useRef(null);

  // Filter and sort projects
  const filteredProjects = useMemo(() => {
    let filtered = projects
      .filter(
        (project) =>
          project.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
          project.description
            .toLowerCase()
            .includes(searchTerm.toLowerCase()) ||
          project.subtitle.toLowerCase().includes(searchTerm.toLowerCase()),
      )
      .sort((a, b) => a.title.localeCompare(b.title)); // Alphabetical order

    return filtered;
  }, [searchTerm]);

  const handleAIRecommend = async () => {
    const query = searchTerm.trim();
    if (!query) return;
    setIsLoadingAI(true);
    setAiResult(null);
    try {
      const result = await recommendProjects(projects, query);
      setAiResult(result);
    } catch (e) {
      setAiResult({ source: "local", recommendations: [] });
    } finally {
      setIsLoadingAI(false);
    }
  };

  // Auto trigger AI on Enter in search bar
  const onSearchKeyDown = (e) => {
    if (e.key === "Enter") {
      handleAIRecommend();
    }
  };

  // Auto AI mode when no direct matches
  useEffect(() => {
    if (debounceRef.current) {
      clearTimeout(debounceRef.current);
      debounceRef.current = null;
    }
    const query = searchTerm.trim();
    if (query.length >= 3 && filteredProjects.length === 0) {
      setAiAutoMode(true);
      debounceRef.current = setTimeout(() => {
        handleAIRecommend();
      }, 500);
    } else {
      setAiAutoMode(false);
      // keep previous aiResult but don't show auto badge
    }
    return () => {
      if (debounceRef.current) clearTimeout(debounceRef.current);
    };
  }, [searchTerm, filteredProjects.length]);

  useEffect(() => {
    const hero = heroRef.current;
    if (!hero) return;

    // Hero animations
    gsap.fromTo(
      hero.querySelectorAll("h1 span"),
      { y: 100, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        duration: 1.2,
        stagger: 0.2,
        ease: "power3.out",
      },
    );

    gsap.fromTo(
      hero.querySelector(".hero-subtitle"),
      { y: 50, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        duration: 1,
        delay: 0.8,
        ease: "power3.out",
      },
    );
  }, []);

  const closeModal = () => {
    setSelectedProject(null);
  };

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section
        ref={heroRef}
        className="relative min-h-screen flex items-center justify-center px-4"
      >
        <div className="absolute inset-0 bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900"></div>
        <div className="relative text-center max-w-6xl mx-auto z-10">
          <h1 className="text-6xl md:text-8xl lg:text-9xl tracking-tight text-gray-200 mb-8">
            <span className="block">OUR</span>
            <span className="block text-yellow-400">PROJECTS</span>
          </h1>

          <p className="hero-subtitle text-xl md:text-2xl font-light tracking-wide text-gray-400 mb-12 max-w-3xl mx-auto">
            Explore our cutting-edge robotics research projects that are pushing
            the boundaries of innovation and technology.
          </p>
        </div>
      </section>

      {/* Search Section */}
      <section className="py-8 px-4 bg-gradient-to-br from-gray-800 to-gray-900">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col items-center gap-4 mb-8">
            <div className="flex-1 max-w-md">
              <div className="relative">
                <input
                  type="text"
                  placeholder="Search projects..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  onKeyDown={onSearchKeyDown}
                  className="w-full px-4 py-3 pl-12 border border-gray-600 rounded-xl bg-gray-800 text-gray-100 focus:ring-2 focus:ring-accent focus:border-transparent transition-all duration-200"
                />
                <svg
                  className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                  />
                </svg>
              </div>
            </div>
            <div className="relative w-full max-w-3xl px-2">
              <div className="absolute -inset-px rounded-2xl bg-gradient-to-r from-yellow-500/35 via-amber-400/25 to-yellow-500/35 blur-lg opacity-40"></div>
              <div className="relative mx-auto flex items-center justify-center gap-3 rounded-2xl px-4 py-3 bg-gradient-to-r from-yellow-500/10 via-amber-500/10 to-yellow-500/10 ring-1 ring-yellow-500/25 shadow-soft backdrop-blur">
                <span className="text-lg leading-none select-none">⚡</span>
                <p className="m-0 text-center text-sm md:text-base font-light text-gray-100">
                  <span className="bg-gradient-to-r from-yellow-500 to-amber-500 bg-clip-text text-transparent font-medium">
                    Powered by AI
                  </span>
                  <span>
                    {" "}
                    — type what you enjoy and we’ll match a project for you.
                  </span>
                  <span className="opacity-90">
                    {" "}
                    e.g. “I want to learn reinforcement learning”
                  </span>
                </p>
                <span className="text-lg leading-none select-none">✨</span>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <button
                onClick={handleAIRecommend}
                className="bg-yellow-500 text-black px-4 py-2 rounded-lg text-sm font-light tracking-wide hover:scale-105 transition-all duration-300 shadow-premium disabled:opacity-60"
                disabled={isLoadingAI}
              >
                {isLoadingAI ? "Thinking…" : "Ask AI to Match Me"}
              </button>
              {aiAutoMode && (
                <span className="inline-flex items-center gap-2 text-xs md:text-sm text-yellow-300 bg-yellow-900/30 px-3 py-1 rounded-full">
                  <svg
                    className="w-3.5 h-3.5 animate-spin"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <circle
                      className="opacity-25"
                      cx="12"
                      cy="12"
                      r="10"
                      stroke="currentColor"
                      strokeWidth="3"
                    ></circle>
                    <path
                      className="opacity-75"
                      fill="currentColor"
                      d="M4 12a8 8 0 018-8v3a5 5 0 00-5 5H4z"
                    ></path>
                  </svg>
                  AI Mode
                </span>
              )}
            </div>
            {aiAutoMode && aiResult && (
              <div className="glass-card rounded-2xl p-4 max-w-3xl w-full">
                <div className="text-sm text-gray-300 mb-2">
                  Recommendation Source: {aiResult.source}
                </div>
                {aiResult.recommendations &&
                aiResult.recommendations.length > 0 ? (
                  <div className="space-y-2">
                    {aiResult.recommendations.map((r, i) => {
                      const p = projects.find((pr) => pr.id === r.id);
                      if (!p) return null;
                      return (
                        <div
                          key={i}
                          className="flex items-start justify-between gap-4"
                        >
                          <div>
                            <Link
                              to={`/projects/${p.id}`}
                              className="text-accent hover:text-accent/80 font-light"
                            >
                              {p.title}
                            </Link>
                            <div className="text-xs text-gray-400">
                              {r.reason}
                            </div>
                          </div>
                          {typeof r.confidence === "number" && (
                            <span className="text-xs text-gray-400">
                              {Math.round(r.confidence * 100)}% match
                            </span>
                          )}
                        </div>
                      );
                    })}
                  </div>
                ) : (
                  <div className="text-sm text-gray-300">
                    No AI recommendation. Try different keywords.
                  </div>
                )}
              </div>
            )}
          </div>
        </div>
      </section>

      {/* Projects Grid */}
      <section className="py-12 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
            {filteredProjects.map((project, index) => (
              <Link
                key={index}
                className="group glass-card pop-card rounded-2xl overflow-hidden hover:scale-[1.02] transition-all duration-500 shadow-soft cursor-pointer transform hover:rotate-[0.5deg] hover:shadow-xl"
                to={"/projects/" + project.id}
              >
                {/* Image */}
                <div className="relative h-56 overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-125"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                  <div className="absolute bottom-4 left-4 flex flex-wrap gap-2">
                    <span className="text-xs font-light text-white bg-yellow-500/90 px-3 py-1 rounded-full">
                      {project.category}
                    </span>
                    {project.tags?.slice(0, 2).map((tag, tagIndex) => (
                      <span
                        key={tagIndex}
                        className="text-xs font-light text-white bg-gray-500/80 px-2 py-1 rounded-full"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                  <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <span className="text-xs font-light text-white bg-black/70 px-3 py-1 rounded-full">
                      Click to expand
                    </span>
                  </div>
                </div>

                {/* Content */}
                <div className="p-6">
                  <h3 className="text-xl font-light text-gray-200 mb-2 group-hover:text-accent transition-colors duration-300">
                    {project.title}
                  </h3>
                  <p className="text-sm font-light text-yellow-400 mb-3">
                    {project.subtitle}
                  </p>
                  <p className="text-sm font-light text-gray-400 leading-relaxed mb-4 line-clamp-3">
                    {project.description}
                  </p>

                  {/* Project Lead */}
                  <p className="text-xs font-light text-gray-400 mb-3">
                    Lead: {project.lead}
                  </p>

                  {/* Status and Duration */}
                  <div className="flex justify-between items-center mb-4">
                    <span
                      className={`text-xs font-light px-2 py-1 rounded-full ${
                        project.status === "Active"
                          ? "bg-green-900/20 text-green-300"
                          : "bg-yellow-900/20 text-yellow-300"
                      }`}
                    >
                      {project.status}
                    </span>
                    <span className="text-xs font-light text-gray-400">
                      {project.duration}
                    </span>
                  </div>

                  {/* View Details Button */}
                  <div className="flex gap-1">
                    <ButtonLink
                      className="flex-none"
                      style="primary-outline"
                      sizeVariant="small"
                      to={"/projects/" + project.id}
                    >
                      View Details →
                    </ButtonLink>
                    {project.status !== "Archived" && (
                      <ButtonLink
                        className="flex-none"
                        sizeVariant="small"
                        to="/apply"
                      >
                        Apply
                      </ButtonLink>
                    )}
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Removed modal: clicking a card navigates to /projects/:id */}
    </div>
  );
};

export default Projects;
