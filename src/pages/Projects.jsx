import { Link } from 'react-router-dom'
import { useState, useEffect, useRef } from 'react'
import { gsap } from 'gsap'

const Projects = () => {
  const [selectedProject, setSelectedProject] = useState(null)
  const heroRef = useRef(null)

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

  const projects = [
    {
      id: 'snout',
      image: "https://picsum.photos/seed/snout/300/300",
      title: "SNOUT",
      subtitle: "Olfactory Sensing Robot",
      description: "A robotic vehicle equipped with advanced olfactory sensors for detecting and identifying scents in various applications.",
      category: "Robotics",
      fullDescription: "SNOUT will design a robotic vehicle equipped with advanced olfactory sensors. The robot will use its 'sense of smell' to detect and identify scents for applications ranging from harmful drugs, environmental monitoring, gas leak detection, and search and rescue operations.",
      technologies: ["IMS Sensors", "Machine Learning", "Robotics", "Embedded Systems", "Circuit Design"],
      team: "5-8 members",
      duration: "2 semesters",
      status: "Active",
      lead: "Anirudh Subramanian"
    },
    {
      id: 'project-1',
      image: "https://picsum.photos/seed/1/300/300",
      title: "Project 1",
      subtitle: "Placeholder Subtitle",
      description: "This is a placeholder description for Project 1",
      category: "Category 1",
      fullDescription: "This is a placeholder full description for Project 1. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
      technologies: ["Technology 1", "Technology 2", "Technology 3", "Technology 4", "Technology 5"],
      team: "Placeholder team size",
      duration: "Placeholder duration",
      status: "Active",
      lead: "John Doe"
    },
    {
      id: 'project-2',
      image: "https://picsum.photos/seed/2/300/300",
      title: "Project 2",
      subtitle: "Placeholder Subtitle",
      description: "This is a placeholder description for Project 2",
      category: "Category 2",
      fullDescription: "This is a placeholder full description for Project 2. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
      technologies: ["Technology 1", "Technology 2", "Technology 3", "Technology 4", "Technology 5"],
      team: "Placeholder team size",
      duration: "Placeholder duration",
      status: "Active",
      lead: "Jane Smith"
    },
    {
      id: 'project-3',
      image: "https://picsum.photos/seed/3/300/300",
      title: "Project 3",
      subtitle: "Placeholder Subtitle",
      description: "This is a placeholder description for Project 3",
      category: "Category 3",
      fullDescription: "This is a placeholder full description for Project 3. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
      technologies: ["Technology 1", "Technology 2", "Technology 3", "Technology 4", "Technology 5"],
      team: "Placeholder team size",
      duration: "Placeholder duration",
      status: "Active",
      lead: "Bob Johnson"
    },
    {
      id: 'project-4',
      image: "https://picsum.photos/seed/4/300/300",
      title: "Project 4",
      subtitle: "Placeholder Subtitle",
      description: "This is a placeholder description for Project 4",
      category: "Category 4",
      fullDescription: "This is a placeholder full description for Project 4. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
      technologies: ["Technology 1", "Technology 2", "Technology 3", "Technology 4", "Technology 5"],
      team: "Placeholder team size",
      duration: "Placeholder duration",
      status: "Active",
      lead: "Alice Brown"
    },
    {
      id: 'project-5',
      image: "https://picsum.photos/seed/5/300/300",
      title: "Project 5",
      subtitle: "Placeholder Subtitle",
      description: "This is a placeholder description for Project 5",
      category: "Category 5",
      fullDescription: "This is a placeholder full description for Project 5. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
      technologies: ["Technology 1", "Technology 2", "Technology 3", "Technology 4", "Technology 5"],
      team: "Placeholder team size",
      duration: "Placeholder duration",
      status: "Active",
      lead: "Charlie Wilson"
    }
  ]

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
            <span className="block text-accent">PROJECTS</span>
          </h1>
          
          <p className="hero-subtitle text-xl md:text-2xl font-light tracking-wide text-gray-600 dark:text-gray-400 mb-12 max-w-3xl mx-auto">
            Explore our cutting-edge robotics research projects that are pushing the boundaries of innovation and technology.
          </p>
        </div>
      </section>

      {/* Projects Grid */}
      <section className="py-12 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <div 
                key={index}
                className="group glass-card rounded-2xl overflow-hidden hover:scale-105 transition-all duration-300 shadow-soft cursor-pointer"
              >
                {/* Image */}
                <div className="relative h-48 overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                  <div className="absolute bottom-4 left-4">
                    <span className="text-xs font-light text-white bg-accent/80 px-3 py-1 rounded-full">
                      {project.category}
                    </span>
                  </div>
                  <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <span className="text-xs font-light text-white bg-black/50 px-2 py-1 rounded">
                      View details
                    </span>
                  </div>
                </div>
                
                {/* Content */}
                <div className="p-8">
                  <h3 className="text-xl font-light text-gray-800 dark:text-gray-200 mb-2">{project.title}</h3>
                  <p className="text-sm font-light text-accent mb-4">{project.subtitle}</p>
                  <p className="text-sm font-light text-gray-600 dark:text-gray-400 leading-relaxed mb-4">{project.description}</p>
                  
                  {/* Project Lead */}
                  <p className="text-xs font-light text-gray-500 dark:text-gray-400 mb-4">
                    Lead: {project.lead}
                  </p>
                  
                  {/* View Details Button */}
                  <Link 
                    to={`/projects/${project.id}`}
                    className="inline-block text-accent hover:text-accent/80 transition-colors duration-200 text-sm font-light"
                  >
                    View Project Details →
                  </Link>
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
                  <p className="text-lg font-light text-accent mb-4">{selectedProject.subtitle}</p>
                  <span className="text-sm font-light text-white bg-accent px-3 py-1 rounded-full">
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
              <div className="grid md:grid-cols-2 gap-8">
                {/* Image */}
                <div className="relative h-64 rounded-xl overflow-hidden">
                  <img
                    src={selectedProject.image}
                    alt={selectedProject.title}
                    className="w-full h-full object-cover"
                  />
                </div>

                {/* Details */}
                <div className="space-y-6">
                  <div>
                    <h3 className="text-xl font-light text-gray-800 dark:text-gray-200 mb-3">Project Overview</h3>
                    <p className="text-sm font-light text-gray-600 dark:text-gray-400 leading-relaxed">
                      {selectedProject.fullDescription}
                    </p>
                  </div>

                  <div>
                    <h3 className="text-xl font-light text-gray-800 dark:text-gray-200 mb-3">Technologies</h3>
                    <div className="flex flex-wrap gap-2">
                      {selectedProject.technologies.map((tech, index) => (
                        <span
                          key={index}
                          className="text-xs font-light text-accent bg-accent/10 px-3 py-1 rounded-full"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className="grid grid-cols-3 gap-4">
                    <div>
                      <h4 className="text-sm font-light text-gray-500 dark:text-gray-400 mb-1">Team Size</h4>
                      <p className="text-sm font-light text-gray-800 dark:text-gray-200">{selectedProject.team}</p>
                    </div>
                    <div>
                      <h4 className="text-sm font-light text-gray-500 dark:text-gray-400 mb-1">Duration</h4>
                      <p className="text-sm font-light text-gray-800 dark:text-gray-200">{selectedProject.duration}</p>
                    </div>
                    <div>
                      <h4 className="text-sm font-light text-gray-500 dark:text-gray-400 mb-1">Status</h4>
                      <p className="text-sm font-light text-green-600 dark:text-green-400">{selectedProject.status}</p>
                    </div>
                  </div>
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
                  to="/apply"
                  className="bg-gradient-turtle text-white px-6 py-3 rounded-xl font-light tracking-wide hover:scale-105 transition-all duration-300"
                >
                  Join This Project
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