import { useParams, Link } from 'react-router-dom'
import { useEffect, useState } from 'react'
import { gsap } from 'gsap'
import { getProjectById } from '../data/projects'

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

  return (
    <div className="min-h-screen bg-white dark:bg-gray-900">
      <div className="max-w-6xl mx-auto px-4 py-16">
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
        <div className="mb-12">
          <h1 className="project-title text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">
            {project.title}
          </h1>
          <p className="text-xl text-yellow-600 dark:text-yellow-400 mb-6">
            {project.subtitle}
          </p>

          {/* Project Lead */}
          <div className="project-lead mb-8">
            <p className="text-lg text-gray-700 dark:text-gray-300">
              Project Lead: {project.lead} 
              <span className="text-yellow-600 dark:text-yellow-400 ml-2">({project.leadEmail || project.email})</span>
            </p>
          </div>
        </div>

        {/* Project Images Gallery */}
        {project.images && project.images.length > 0 && (
          <div className="project-section mb-12">
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
              Project Gallery
            </h2>
            <div className="space-y-4">
              {/* Main Image */}
              <div className="relative h-96 rounded-xl overflow-hidden">
                <img
                  src={project.images[activeImageIndex]}
                  alt={`${project.title} - Image ${activeImageIndex + 1}`}
                  className="w-full h-full object-cover"
                />
              </div>
              
              {/* Thumbnail Navigation */}
              {project.images.length > 1 && (
                <div className="flex space-x-2 overflow-x-auto">
                  {project.images.map((image, index) => (
                    <button
                      key={index}
                      onClick={() => setActiveImageIndex(index)}
                      className={`flex-shrink-0 w-20 h-20 rounded-lg overflow-hidden ${
                        index === activeImageIndex ? 'ring-2 ring-yellow-500' : ''
                      }`}
                    >
                      <img
                        src={image}
                        alt={`Thumbnail ${index + 1}`}
                        className="w-full h-full object-cover"
                      />
                    </button>
                  ))}
                </div>
              )}
            </div>
          </div>
        )}

        {/* Project Description */}
        <div className="project-section mb-12">
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
            Project Description
          </h2>
          <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
            {project.description}
          </p>
        </div>

        {/* Fall 2025 Goals */}
        <div className="project-section mb-12">
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
            Fall 2025 Goals
          </h2>
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
        <div className="project-section mb-12">
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
            Looking For
          </h2>
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
        {project.updates && project.updates.length > 0 && (
          <div className="project-section mb-12">
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
              Project Updates
            </h2>
            <div className="space-y-6">
              {project.updates.map((update, index) => (
                <div key={index} className="border-l-4 border-yellow-500 pl-6">
                  <div className="flex items-center mb-2">
                    <span className="text-sm text-gray-500 dark:text-gray-400">
                      {formatDate(update.date)}
                    </span>
                  </div>
                  <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                    {update.title}
                  </h3>
                  <p className="text-gray-700 dark:text-gray-300">
                    {update.content}
                  </p>
                </div>
              ))}
            </div>
          </div>
        )}

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