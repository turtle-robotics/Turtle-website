import { useParams, Link } from 'react-router-dom'
import { useEffect, useState, useMemo } from 'react'
import { gsap } from 'gsap'
import { getProjectById } from '../data/projects'
import ImageCarousel from '../components/ImageCarousel'
import ButtonLink from '../components/ButtonLink'

const ProjectDetail = () => {
  const { projectId } = useParams()
  const [activeImageIndex, setActiveImageIndex] = useState(0)

  const project = getProjectById(projectId)

  useEffect(() => {
    // GSAP animations
    gsap.fromTo('.project-title', 
      { opacity: 0, y: -50 },
      { opacity: 1, y: 0, duration: 0.8, ease: 'power2.out' }
    )
    
    gsap.fromTo('.project-lead', 
      { opacity: 0, y: -30 },
      { opacity: 1, y: 0, duration: 0.8, delay: 0.2, ease: 'power2.out' }
    )
    
    gsap.fromTo('.project-section', 
      { opacity: 0, y: 30 },
      { opacity: 1, y: 0, duration: 0.8, delay: 0.4, ease: 'power2.out' }
    )
  }, [projectId])

  const formatDate = (dateString) => {
    const date = new Date(dateString)
    return date.toLocaleDateString('en-US', { 
      year: 'numeric', 
      month: 'long', 
      day: 'numeric' 
    })
  }

  const slides = useMemo(() => {
    const imgs = project.images && project.images.length ? project.images : [project.image]
    return imgs
  }, [project])

  return (
    <div className="min-h-screen bg-gray-900">
      <div className="max-w-6xl mx-auto px-4 py-10">
        {/* Back Button */}
        <Link 
          to="/projects" 
          className="inline-flex items-center text-yellow-400 hover:text-yellow-300 transition-colors duration-200 mb-8"
        >
          <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
          </svg>
          Back to Projects
        </Link>

        {/* Project Header */}
        <div className="mb-12 text-center">
          <h1 className="project-title text-4xl md:text-6xl font-extralight tracking-tight text-white mb-3">
            {project.title}
          </h1>
          <p className="text-lg md:text-xl font-light text-yellow-400 mb-4">
            {project.subtitle}
          </p>
          <div className="flex flex-wrap items-center justify-center gap-3">
            <span className="text-xs font-light text-white bg-yellow-500 px-3 py-1 rounded-full">{project.category}</span>
            {project.tags?.slice(0,4).map((tag, i) => (
              <span key={i} className="text-xs font-light text-gray-300 bg-gray-800 px-3 py-1 rounded-full">{tag}</span>
            ))}
          </div>
          <div className="project-lead mt-6">
            <p className="text-base md:text-lg text-gray-300">
              Lead: {project.lead} <span className="text-yellow-400 ml-2">({project.leadEmail || project.email})</span>
            </p>
          </div>

          {/* Website Link */}
          {project.website && (
            <div className="mt-6">
              <a
                href={project.website.url}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-yellow-400 hover:bg-yellow-500 text-gray-900 font-light px-6 py-3 rounded-lg transition-all duration-300 hover:shadow-xl"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" />
                </svg>
                {project.website.label}
              </a>
            </div>
          )}
        </div>

        {/* Project Images Gallery under header */}
        {slides && slides.length > 0 && (
          <div className="project-section mb-12">
            <div className="rounded-2xl overflow-hidden border border-gray-700/50 glass-card w-full max-w-7xl mx-auto">
              <ImageCarousel images={slides} autoPlay={true} intervalMs={4500} aspectRatio="4/3" maxHeight="98vh" />
            </div>
          </div>
        )}

        {/* Project Overview */}
        <div className="project-section mb-12 glass-card rounded-2xl p-8">
          <h2 className="text-2xl font-light text-white mb-4">Overview</h2>
          <p className="text-gray-300 leading-relaxed">
            {project.fullDescription || project.description}
          </p>
            {/* Early Application Box for VEST project */}
            {project.id === 'vest' && project.earlyApplication && (
              <div className="mt-8 p-4 rounded-xl bg-yellow-100 dark:bg-yellow-900/40 border border-yellow-400 text-yellow-900 dark:text-yellow-200 text-base font-medium text-center shadow-soft">
                <span className="font-semibold">Early Application:</span> {project.earlyApplication}
              </div>
            )}
        </div>

        {/* Goals */}
        <div className="project-section mb-12 glass-card rounded-2xl p-8">
          <h2 className="text-2xl font-light text-white mb-6">Goals</h2>
          <ul className="space-y-3">
            {project.goals.map((goal, index) => (
              <li key={index} className="flex items-start">
                <span className="text-yellow-400 mr-3 mt-1">✓</span>
                <span className="text-gray-300">{goal}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Looking For */}
        <div className="project-section mb-12 glass-card rounded-2xl p-8">
          <h2 className="text-2xl font-light text-white mb-6">Looking For</h2>
          <ul className="space-y-3">
            {project.lookingFor.map((skill, index) => (
              <li key={index} className="flex items-start">
                <span className="text-yellow-400 mr-3 mt-1">•</span>
                <span className="text-gray-300">{skill}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Project Updates */}
        <div className="project-section mb-12">
          <h2 className="text-2xl font-light text-white mb-6 text-center">Project Updates</h2>
          {project.updates && project.updates.length > 0 ? (
            <div className="space-y-6">
              {project.updates.map((update, index) => (
                <div key={index} className="glass-card rounded-2xl p-6">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-sm text-gray-400">{formatDate(update.date)}</span>
                    <span className="text-xs font-light text-white bg-yellow-500 px-3 py-1 rounded-full">Update</span>
                  </div>
                  <h3 className="text-lg font-light text-white mb-2">{update.title}</h3>
                  <p className="text-gray-300">{update.content}</p>
                </div>
              ))}
            </div>
          ) : (
            <div className="glass-card rounded-2xl p-6 text-center">
              <p className="text-gray-300 mb-3">No updates have been posted yet.</p>
            </div>
          )}
        </div>

        {/* Apply Button */}
        <div className="mt-12 pt-8 border-t border-gray-700">
          <ButtonLink to="/apply" style="primary" sizeVariant="default">
            Apply to Join This Project
          </ButtonLink>
        </div>
      </div>
    </div>
  )
}

export default ProjectDetail