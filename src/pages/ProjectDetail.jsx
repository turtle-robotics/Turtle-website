import { useParams, Link } from 'react-router-dom'
import { useEffect, useState, useMemo } from 'react'
import { gsap } from 'gsap'
import { getProjectById } from '../data/projects'
import ImageCarousel from '../components/ImageCarousel'

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
    <div className="min-h-screen bg-white dark:bg-gray-900">
      {/* Removed top gallery per request */}

      <div className="max-w-6xl mx-auto px-4 py-10">
        {/* Back Button */}
        <Link 
          to="/projects" 
          className="inline-flex items-center text-yellow-600 dark:text-yellow-400 hover:text-yellow-500 dark:hover:text-yellow-300 transition-colors duration-200 mb-8"
        >
          <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
          </svg>
          Back to Projects
        </Link>

        {/* Project Header */}
        <div className="mb-12 text-center">
          <h1 className="project-title text-4xl md:text-6xl font-extralight tracking-tight text-gray-900 dark:text-white mb-3">
            {project.title}
          </h1>
          <p className="text-lg md:text-xl font-light text-yellow-600 dark:text-yellow-400 mb-4">
            {project.subtitle}
          </p>
          <div className="flex flex-wrap items-center justify-center gap-3">
            <span className="text-xs font-light text-white bg-yellow-600 dark:bg-yellow-500 px-3 py-1 rounded-full">{project.category}</span>
            {project.tags?.slice(0,4).map((tag, i) => (
              <span key={i} className="text-xs font-light text-gray-700 dark:text-gray-300 bg-gray-100 dark:bg-gray-800 px-3 py-1 rounded-full">{tag}</span>
            ))}
          </div>
          <div className="project-lead mt-6">
            <p className="text-base md:text-lg text-gray-700 dark:text-gray-300">
              Lead: {project.lead} <span className="text-yellow-600 dark:text-yellow-400 ml-2">({project.leadEmail || project.email})</span>
            </p>
          </div>
        </div>

        {/* Project Images Gallery under header */}
        {slides && slides.length > 0 && (
          <div className="project-section mb-12">
            <div className="rounded-2xl overflow-hidden border border-gray-200/50 dark:border-gray-700/50 glass-card" style={{ height: '360px' }}>
              <ImageCarousel images={slides} autoPlay={true} intervalMs={4500} />
            </div>
          </div>
        )}

        {/* Project Overview */}
        <div className="project-section mb-12 glass-card rounded-2xl p-8">
          <h2 className="text-2xl font-light text-gray-900 dark:text-white mb-4">Overview</h2>
          <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
            {project.fullDescription || project.description}
          </p>
        </div>

        {/* Goals */}
        <div className="project-section mb-12 glass-card rounded-2xl p-8">
          <h2 className="text-2xl font-light text-gray-900 dark:text-white mb-6">Goals</h2>
          <ul className="space-y-3">
            {project.goals.map((goal, index) => (
              <li key={index} className="flex items-start">
                <span className="text-yellow-600 dark:text-yellow-400 mr-3 mt-1">✓</span>
                <span className="text-gray-700 dark:text-gray-300">{goal}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Looking For */}
        <div className="project-section mb-12 glass-card rounded-2xl p-8">
          <h2 className="text-2xl font-light text-gray-900 dark:text-white mb-6">Looking For</h2>
          <ul className="space-y-3">
            {project.lookingFor.map((skill, index) => (
              <li key={index} className="flex items-start">
                <span className="text-yellow-600 dark:text-yellow-400 mr-3 mt-1">•</span>
                <span className="text-gray-700 dark:text-gray-300">{skill}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Project Updates */}
        <div className="project-section mb-12">
          <h2 className="text-2xl font-light text-gray-900 dark:text-white mb-6 text-center">Project Updates</h2>
          {project.updates && project.updates.length > 0 ? (
            <div className="space-y-6">
              {project.updates.map((update, index) => (
                <div key={index} className="glass-card rounded-2xl p-6">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-sm text-gray-500 dark:text-gray-400">{formatDate(update.date)}</span>
                    <span className="text-xs font-light text-white bg-yellow-600 dark:bg-yellow-500 px-3 py-1 rounded-full">Update</span>
                  </div>
                  <h3 className="text-lg font-light text-gray-900 dark:text-white mb-2">{update.title}</h3>
                  <p className="text-gray-700 dark:text-gray-300">{update.content}</p>
                </div>
              ))}
            </div>
          ) : (
            <div className="glass-card rounded-2xl p-6 text-center">
              <p className="text-gray-700 dark:text-gray-300 mb-3">No updates have been posted yet.</p>
              <a
                href={`mailto:turtlerobotics@gmail.com?subject=Project%20Update%20-%20${encodeURIComponent(project.title)}&body=Title:%20%0ADate:%20YYYY-MM-DD%0ADescription:%20`}
                className="inline-block text-accent hover:text-accent/80 border border-accent/30 hover:border-accent rounded-lg px-4 py-2 text-sm"
              >
                Submit an update
              </a>
            </div>
          )}
        </div>

        {/* Apply Button */}
        <div className="mt-12 pt-8 border-t border-gray-200 dark:border-gray-700">
          <Link 
            to="/apply" 
            className="inline-block bg-gradient-to-r from-yellow-500 to-amber-500 text-white px-8 py-3 rounded-lg font-medium hover:scale-105 transition-all duration-300"
          >
            Apply to Join This Project
          </Link>
        </div>
      </div>
    </div>
  )
}

export default ProjectDetail 