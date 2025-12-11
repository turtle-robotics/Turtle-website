/**
 * ProjectDetail Page Component
 *
 * Detailed view of a single TURTLE Robotics project.
 * Displays:
 * - Project title, subtitle, and description
 * - Project lead information
 * - Image carousel with multiple project photos
 * - Technical details (technologies, timeline)
 * - Team members and contributors
 * - Links back to projects listing
 */
import { useParams, Link } from "react-router-dom";
import { useEffect, useState, useMemo } from "react";
import { gsap } from "gsap";
import { getProjectById } from "../data/projects";
import ImageCarousel from "../components/ImageCarousel";

const ProjectDetail = () => {
  const { projectId } = useParams();
  const [activeImageIndex, setActiveImageIndex] = useState(0);

  // Fetch project data by ID from static projects array
  const project = getProjectById(projectId);

  /**
   * Project detail page entrance animations
   * Animates title, lead info, and sections in sequence
   */
  useEffect(() => {
    // GSAP animations for project detail reveal
    gsap.fromTo(
      ".project-title",
      { opacity: 0, y: -50 },
      { opacity: 1, y: 0, duration: 0.8, ease: "power2.out" },
    );

    gsap.fromTo(
      ".project-lead",
      { opacity: 0, y: -30 },
      { opacity: 1, y: 0, duration: 0.8, delay: 0.2, ease: "power2.out" },
    );

    gsap.fromTo(
      ".project-section",
      { opacity: 0, y: 30 },
      { opacity: 1, y: 0, duration: 0.8, delay: 0.4, ease: "power2.out" },
    );
  }, [projectId]);

  /**
   * Format date string to readable format
   * @param {string} dateString - ISO date string
   * @returns {string} Formatted date (e.g., "January 15, 2025")
   */
  const formatDate = (dateString) => {
    const date = new Date(dateString);
    return date.toLocaleDateString("en-US", {
      year: "numeric",
      month: "long",
      day: "numeric",
    });
  };

  const slides = useMemo(() => {
    const imgs =
      project.images && project.images.length
        ? project.images
        : [project.image];
    return imgs;
  }, [project]);

  return (
    <div className="min-h-screen bg-background">
      {/* Removed top gallery per request */}

      <div className="max-w-6xl mx-auto px-4 py-10">
        {/* Back Button */}
        <Link
          to="/projects"
          className="inline-flex items-center text-primary-1 hover:text-primary-1/80 transition-colors duration-200 mb-8"
        >
          <svg
            className="w-4 h-4 mr-2"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M15 19l-7-7 7-7"
            />
          </svg>
          Back to Projects
        </Link>

        {/* Project Header */}
        <div className="mb-12 text-center">
          <h1 className="project-title text-4xl md:text-6xl font-extralight tracking-tight text-secondary-3 mb-3">
            {project.title}
          </h1>
          <p className="text-lg md:text-xl font-light text-primary-1 mb-4">
            {project.subtitle}
          </p>
          <div className="flex flex-wrap items-center justify-center gap-3">
            <span className="text-xs font-light text-gradient-foreground bg-accent px-3 py-1 rounded-full">
              {project.category}
            </span>
            {project.tags?.slice(0, 4).map((tag, i) => (
              <span
                key={i}
                className="text-xs font-light text-secondary-3 bg-background border border-border px-3 py-1 rounded-full"
              >
                {tag}
              </span>
            ))}
          </div>
          <div className="project-lead mt-6">
            <p className="text-base md:text-lg text-secondary-3">
              Lead: {project.lead}{" "}
              <span className="text-primary-1 ml-2">
                ({project.leadEmail || project.email})
              </span>
            </p>
          </div>
        </div>

        {/* Project Images Gallery under header */}
        {slides && slides.length > 0 && (
          <div className="project-section mb-12">
            <div className="rounded-2xl overflow-hidden border border-border glass-card h-[360px]">
              <ImageCarousel
                images={slides}
                autoPlay={true}
                intervalMs={4500}
              />
            </div>
          </div>
        )}

        {/* Project Overview */}
        <div className="project-section mb-12 glass-card rounded-2xl p-8">
          <h2 className="text-2xl font-light text-secondary-3 mb-4">
            Overview
          </h2>
          <p className="text-secondary-2 leading-relaxed">
            {project.fullDescription || project.description}
          </p>
        </div>

        {/* Goals */}
        <div className="project-section mb-12 glass-card rounded-2xl p-8">
          <h2 className="text-2xl font-light text-secondary-3 mb-6">Goals</h2>
          <ul className="space-y-3">
            {project.goals.map((goal, index) => (
              <li key={index} className="flex items-start">
                <span className="text-primary-1 mr-3 mt-1">✓</span>
                <span className="text-secondary-2">{goal}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Looking For */}
        <div className="project-section mb-12 glass-card rounded-2xl p-8">
          <h2 className="text-2xl font-light text-secondary-3 mb-6">
            Looking For
          </h2>
          <ul className="space-y-3">
            {project.lookingFor.map((skill, index) => (
              <li key={index} className="flex items-start">
                <span className="text-primary-1 mr-3 mt-1">•</span>
                <span className="text-secondary-2">{skill}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Project Updates */}
        <div className="project-section mb-12">
          <h2 className="text-2xl font-light text-secondary-3 mb-6 text-center">
            Project Updates
          </h2>
          {project.updates && project.updates.length > 0 ? (
            <div className="space-y-6">
              {project.updates.map((update, index) => (
                <div key={index} className="glass-card rounded-2xl p-6">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-sm text-secondary-2">
                      {formatDate(update.date)}
                    </span>
                    <span className="text-xs font-light text-gradient-foreground bg-accent px-3 py-1 rounded-full">
                      Update
                    </span>
                  </div>
                  <h3 className="text-lg font-light text-secondary-3 mb-2">
                    {update.title}
                  </h3>
                  <p className="text-secondary-2">{update.content}</p>
                </div>
              ))}
            </div>
          ) : (
            <div className="glass-card rounded-2xl p-6 text-center">
              <p className="text-secondary-2 mb-3">
                No updates have been posted yet.
              </p>
              <a
                href={`mailto:turtlerobotics@gmail.com?subject=Project%20Update%20-%20${encodeURIComponent(project.title)}&body=Title:%20%0ADate:%20YYYY-MM-DD%0ADescription:%20`}
                className="inline-block text-primary-1 hover:text-primary-1/80 border border-primary-1/30 hover:border-primary-1 rounded-lg px-4 py-2 text-sm"
              >
                Submit an update
              </a>
            </div>
          )}
        </div>

        {/* Apply Button */}
        <div className="mt-12 pt-8 border-t border-border">
          <Link
            to="/apply"
            className="inline-block bg-gradient-basic text-gradient-foreground px-8 py-3 rounded-lg font-medium hover:scale-105 transition-transform duration-300"
          >
            Apply to Join This Project
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ProjectDetail;
