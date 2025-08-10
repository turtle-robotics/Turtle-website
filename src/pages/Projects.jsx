import { Link } from 'react-router-dom'
import { useState, useEffect, useRef, useMemo } from 'react'
import { gsap } from 'gsap'
import { projects } from '../data/projects'

const Projects = () => {
  const [selectedProject, setSelectedProject] = useState(null)
  const [searchTerm, setSearchTerm] = useState('')
  const heroRef = useRef(null)

  // Filter and sort projects
  const filteredProjects = useMemo(() => {
    let filtered = projects
      .filter(project => 
        project.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        project.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
        project.subtitle.toLowerCase().includes(searchTerm.toLowerCase())
      )
      .sort((a, b) => a.title.localeCompare(b.title)) // Alphabetical order
    
    return filtered
  }, [searchTerm])

  useEffect(() => {
    const hero = heroRef.current
    if (!hero) return

    // Hero animations
    gsap.fromTo(hero.querySelectorAll('h1 span'),
      { y: 100, opacity: 0 },
      { 
        y: 0, 
        opacity: 1, 
        duration: 1.2, 
        stagger: 0.2, 
        ease: "power3.out" 
      }
    )

    gsap.fromTo(hero.querySelector('.hero-subtitle'),
      { y: 50, opacity: 0 },
      { 
        y: 0, 
        opacity: 1, 
        duration: 1, 
        delay: 0.8, 
        ease: "power3.out" 
      }
    )
  }, [])



  const handleProjectClick = (project) => {
    setSelectedProject(project)
  }

  const closeModal = () => {
    setSelectedProject(null)
  }

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section ref={heroRef} className="relative min-h-screen flex items-center justify-center px-4">
        <div className="absolute inset-0 bg-gradient-to-br from-gray-50 via-white to-gray-100 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900"></div>
        <div className="relative text-center max-w-6xl mx-auto z-10">
          <h1 className="text-6xl md:text-8xl lg:text-9xl font-extralight tracking-tight text-gray-800 dark:text-gray-200 mb-8">
            <span className="block">OUR</span>
            <span className="block text-yellow-600 dark:text-yellow-400">PROJECTS</span>
          </h1>
          
          <p className="hero-subtitle text-xl md:text-2xl font-light tracking-wide text-gray-600 dark:text-gray-400 mb-12 max-w-3xl mx-auto">
            Explore our cutting-edge robotics research projects that are pushing the boundaries of innovation and technology.
          </p>
        </div>
      </section>

      {/* Search Section */}
      <section className="py-8 px-4 bg-gradient-to-br from-gray-50 to-white dark:from-gray-800 dark:to-gray-900">
        <div className="max-w-7xl mx-auto">
          <div className="flex items-center justify-center mb-8">
            <div className="flex-1 max-w-md">
              <div className="relative">
                <input
                  type="text"
                  placeholder="Search projects..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-full px-4 py-3 pl-12 border border-gray-300 dark:border-gray-600 rounded-xl bg-white dark:bg-gray-800 text-gray-900 dark:text-gray-100 focus:ring-2 focus:ring-accent focus:border-transparent transition-all duration-200"
                />
                <svg className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                </svg>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Grid */}
      <section className="py-12 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProjects.map((project, index) => (
              <div 
                key={index}
                className="group glass-card pop-card rounded-2xl overflow-hidden hover:scale-[1.02] transition-all duration-500 shadow-soft cursor-pointer transform hover:rotate-[0.5deg] hover:shadow-xl"
                onClick={() => handleProjectClick(project)}
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
                    <span className="text-xs font-light text-white bg-yellow-600/90 dark:bg-yellow-500/90 px-3 py-1 rounded-full">
                      {project.category}
                    </span>
                    {project.tags?.slice(0, 2).map((tag, tagIndex) => (
                      <span key={tagIndex} className="text-xs font-light text-white bg-accent/80 px-2 py-1 rounded-full">
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
                  <h3 className="text-xl font-light text-gray-800 dark:text-gray-200 mb-2 group-hover:text-accent transition-colors duration-300">{project.title}</h3>
                  <p className="text-sm font-light text-yellow-600 dark:text-yellow-400 mb-3">{project.subtitle}</p>
                  <p className="text-sm font-light text-gray-600 dark:text-gray-400 leading-relaxed mb-4 line-clamp-3">{project.description}</p>
                  
                  {/* Project Lead */}
                  <p className="text-xs font-light text-gray-500 dark:text-gray-400 mb-3">
                    Lead: {project.lead}
                  </p>
                  
                  {/* Status and Duration */}
                  <div className="flex justify-between items-center mb-4">
                    <span className={`text-xs font-light px-2 py-1 rounded-full ${
                      project.status === 'Active' 
                        ? 'bg-green-100 dark:bg-green-900/20 text-green-700 dark:text-green-300'
                        : 'bg-yellow-100 dark:bg-yellow-900/20 text-yellow-700 dark:text-yellow-300'
                    }`}>
                      {project.status}
                    </span>
                    <span className="text-xs font-light text-gray-500 dark:text-gray-400">
                      {project.duration}
                    </span>
                  </div>
                  
                  {/* View Details Button */}
                  <div className="text-center">
                    <button className="inline-block text-accent hover:text-accent/80 transition-colors duration-200 text-sm font-light border border-accent/30 hover:border-accent px-4 py-2 rounded-lg">
                      View Details →
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Project Details Modal */}
      {selectedProject && (
        <div className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4">
          <div className="glass-card rounded-2xl max-w-4xl w-full max-h-[90vh] overflow-y-auto">
            {/* Modal Header */}
            <div className="p-8 border-b border-gray-200/50 dark:border-gray-700/50">
              <div className="flex justify-between items-start">
                <div>
                  <h2 className="text-3xl font-extralight text-gray-800 dark:text-gray-200 mb-2">{selectedProject.title}</h2>
                  <p className="text-lg font-light text-yellow-600 dark:text-yellow-400 mb-4">{selectedProject.subtitle}</p>
                  <span className="text-sm font-light text-white bg-yellow-600 dark:bg-yellow-500 px-3 py-1 rounded-full">
                    {selectedProject.category}
                  </span>
                </div>
                <button
                  onClick={closeModal}
                  className="text-gray-500 dark:text-gray-400 hover:text-gray-800 dark:hover:text-gray-200 transition-colors duration-200"
                >
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>
              </div>
            </div>

            {/* Modal Content */}
            <div className="p-8">
              <div className="grid lg:grid-cols-3 gap-8">
                {/* Image */}
                <div className="lg:col-span-1">
                  <div className="relative h-64 rounded-xl overflow-hidden mb-6">
                    <img
                      src={selectedProject.image}
                      alt={selectedProject.title}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  
                  {/* Project Stats */}
                  <div className="space-y-4">
                    <div className="flex justify-between items-center">
                      <span className="text-sm font-light text-gray-500 dark:text-gray-400">Team Size</span>
                      <span className="text-sm font-light text-gray-800 dark:text-gray-200">{selectedProject.team}</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-sm font-light text-gray-500 dark:text-gray-400">Duration</span>
                      <span className="text-sm font-light text-gray-800 dark:text-gray-200">{selectedProject.duration}</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-sm font-light text-gray-500 dark:text-gray-400">Status</span>
                      <span className={`text-sm font-light px-2 py-1 rounded-full ${
                        selectedProject.status === 'Active' 
                          ? 'bg-green-100 dark:bg-green-900/20 text-green-700 dark:text-green-300'
                          : 'bg-yellow-100 dark:bg-yellow-900/20 text-yellow-700 dark:text-yellow-300'
                      }`}>
                        {selectedProject.status}
                      </span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-sm font-light text-gray-500 dark:text-gray-400">Lead</span>
                      <span className="text-sm font-light text-gray-800 dark:text-gray-200">{selectedProject.lead}</span>
                    </div>
                  </div>
                </div>

                {/* Details */}
                <div className="lg:col-span-2 space-y-8">
                  {/* Project Overview */}
                  <div>
                    <h3 className="text-xl font-light text-gray-800 dark:text-gray-200 mb-4">Project Overview</h3>
                    <p className="text-sm font-light text-gray-600 dark:text-gray-400 leading-relaxed">
                      {selectedProject.fullDescription || selectedProject.description}
                    </p>
                  </div>

                  {/* Technologies */}
                  {selectedProject.technologies && (
                    <div>
                      <h3 className="text-xl font-light text-gray-800 dark:text-gray-200 mb-4">Technologies</h3>
                      <div className="flex flex-wrap gap-2">
                        {selectedProject.technologies?.map((tech, index) => (
                          <span
                            key={index}
                            className="text-xs font-light text-accent bg-accent/10 px-3 py-1 rounded-full"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>
                  )}

                  {/* Tags */}
                  {selectedProject.tags && (
                    <div>
                      <h3 className="text-xl font-light text-gray-800 dark:text-gray-200 mb-4">Tags</h3>
                      <div className="flex flex-wrap gap-2">
                        {selectedProject.tags.map((tag, index) => (
                          <span
                            key={index}
                            className="text-xs font-light text-yellow-600 dark:text-yellow-400 bg-yellow-100 dark:bg-yellow-900/20 px-3 py-1 rounded-full"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>
                    </div>
                  )}

                  {/* Goals */}
                  {selectedProject.goals && (
                    <div>
                      <h3 className="text-xl font-light text-gray-800 dark:text-gray-200 mb-4">Project Goals</h3>
                      <ul className="space-y-2">
                        {selectedProject.goals.map((goal, index) => (
                          <li key={index} className="flex items-start">
                            <span className="text-accent mr-3 mt-1">•</span>
                            <span className="text-sm font-light text-gray-600 dark:text-gray-400">{goal}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}

                  {/* Looking For */}
                  {selectedProject.lookingFor && (
                    <div>
                      <h3 className="text-xl font-light text-gray-800 dark:text-gray-200 mb-4">Looking For</h3>
                      <div className="flex flex-wrap gap-2">
                        {selectedProject.lookingFor.map((skill, index) => (
                          <span
                            key={index}
                            className="text-xs font-light text-gray-600 dark:text-gray-400 bg-gray-100 dark:bg-gray-800 px-3 py-1 rounded-full"
                          >
                            {skill}
                          </span>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              </div>
            </div>

            {/* Modal Footer */}
            <div className="p-8 border-t border-gray-200/50 dark:border-gray-700/50">
              <div className="flex justify-end gap-4">
                <button
                  onClick={closeModal}
                  className="px-6 py-3 text-gray-600 dark:text-gray-400 font-light hover:text-gray-800 dark:hover:text-gray-200 transition-colors duration-200"
                >
                  Close
                </button>
                <Link
                  to={`/projects/${selectedProject.id}`}
                  className="bg-gradient-to-r from-yellow-500 to-amber-500 text-white px-6 py-3 rounded-xl font-light tracking-wide hover:scale-105 transition-all duration-300"
                >
                  View Full Details
                </Link>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}

export default Projects 