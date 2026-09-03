import { Link } from "react-router-dom";
import { useState, useMemo } from "react";
import { projects } from "../data/projects";
import ButtonLink from "../components/ButtonLink";
import Hero from "../components/Hero";
import PageSection from "../components/PageSection";

const Projects = () => {
  const [searchTerm, setSearchTerm] = useState("");

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

  return (
    <div className="min-h-screen">
      <Hero
        heading="OUR PROJECTS"
        subheading="Explore our cutting-edge robotics research projects that are pushing
            the boundaries of innovation and technology."
      ></Hero>

      {/* Projects Grid */}
      <PageSection colorVariant="B">
        <div className="flex flex-col items-center gap-4 mb-8">
          <div className="flex-1 max-w-md">
            <div className="relative">
              <input
                type="text"
                placeholder="Search projects..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
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
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
          {filteredProjects.map((project, index) => (
            <Link
              key={index}
              to={"/projects/" + project.id}
              className="group glass-card pop-card flex h-full flex-col overflow-hidden rounded-2xl shadow-soft cursor-pointer transform transition-all duration-500 hover:scale-[1.02] hover:rotate-[0.5deg] hover:shadow-xl"
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
                  <span className="text-xs font-light text-black bg-yellow-500/90 px-3 py-1 rounded-full">
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
              <div className="flex flex-1 flex-col p-6">
                {/* Fixed-height heading area */}
                <div className="h-[5.5rem]">
                  <h3 className="text-xl font-light text-gray-200 mb-2 leading-tight group-hover:text-accent transition-colors duration-300 line-clamp-2">
                    {project.title}
                  </h3>

                  <p className="text-sm font-light text-yellow-400 leading-snug line-clamp-2">
                    {project.subtitle}
                  </p>
                </div>

                {/* Fixed-height description area */}
                <p className="h-[4.5rem] text-sm font-light text-gray-400 leading-relaxed line-clamp-3">
                  {project.description}
                </p>

                {/* Bottom-aligned metadata and CTA */}
                <div className="mt-auto pt-4">
                  {/* Project Lead */}
                  <p className="text-xs font-light text-gray-400 mb-3">
                    Lead: {project.lead}
                  </p>

                  {/* Status and Duration */}
                  <div className="flex items-center justify-between mb-4">
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
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </PageSection>
    </div>
  );
};

export default Projects;
