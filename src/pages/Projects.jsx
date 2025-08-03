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
      id: 1,
      image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=300&h=300&fit=crop&crop=center",
      title: "Industrial Automation",
      subtitle: "Manufacturing Robotics",
      description: "Advanced automation systems for manufacturing processes",
      category: "Manufacturing",
      fullDescription: "Our Industrial Automation project focuses on developing cutting-edge robotics systems for manufacturing environments. We're working on collaborative robots that can safely work alongside human operators, automated quality control systems, and intelligent production line optimization. The project involves computer vision, machine learning, and advanced control systems to create more efficient and flexible manufacturing processes.",
      technologies: ["Computer Vision", "Machine Learning", "ROS", "Python", "C++"],
      team: "12 researchers",
      duration: "2 years",
      status: "Active"
    },
    {
      id: 2,
      image: "https://images.unsplash.com/photo-1485827404703-89b55fcc595e?w=300&h=300&fit=crop&crop=center",
      title: "Collaborative Robots",
      subtitle: "Human-Robot Interaction",
      description: "Safe and efficient human-robot collaboration systems",
      category: "Collaboration",
      fullDescription: "The Collaborative Robots project explores safe and intuitive human-robot interaction in shared workspaces. We're developing advanced safety systems, intuitive control interfaces, and adaptive behavior algorithms that allow robots to work safely alongside humans. This includes force sensing, collision detection, and natural language processing for seamless communication.",
      technologies: ["Force Sensing", "Collision Detection", "NLP", "ROS", "Python"],
      team: "8 researchers",
      duration: "1.5 years",
      status: "Active"
    },
    {
      id: 3,
      image: "https://images.unsplash.com/photo-1574944985070-8b3beb80bc09?w=300&h=300&fit=crop&crop=center",
      title: "Agricultural Robotics",
      subtitle: "Smart Farming Solutions",
      description: "Precision agriculture and automated farming systems",
      category: "Agriculture",
      fullDescription: "Our Agricultural Robotics initiative focuses on developing autonomous systems for precision agriculture. We're working on robotic harvesters, automated crop monitoring systems, and intelligent irrigation controllers. The project combines computer vision, GPS navigation, and environmental sensors to optimize farming operations and reduce resource consumption.",
      technologies: ["Computer Vision", "GPS Navigation", "IoT Sensors", "ROS", "Python"],
      team: "10 researchers",
      duration: "2.5 years",
      status: "Active"
    },
    {
      id: 4,
      image: "https://images.unsplash.com/photo-1559757148-5c350d0d3c56?w=300&h=300&fit=crop&crop=center",
      title: "Medical Robotics",
      subtitle: "Healthcare Innovation",
      description: "Surgical assistance and medical device automation",
      category: "Healthcare",
      fullDescription: "The Medical Robotics project focuses on developing assistive technologies for healthcare applications. We're working on surgical assistance robots, rehabilitation devices, and automated medical equipment. Our systems incorporate haptic feedback, precise motion control, and advanced safety protocols to ensure patient safety and improve medical outcomes.",
      technologies: ["Haptic Feedback", "Motion Control", "Safety Systems", "ROS", "C++"],
      team: "15 researchers",
      duration: "3 years",
      status: "Active"
    },
    {
      id: 5,
      image: "https://images.unsplash.com/photo-1563013544-824ae1b704d3?w=300&h=300&fit=crop&crop=center",
      title: "Logistics Automation",
      subtitle: "Supply Chain Robotics",
      description: "Automated warehouse and distribution systems",
      category: "Logistics",
      fullDescription: "Our Logistics Automation project develops intelligent systems for warehouse and distribution operations. We're creating autonomous mobile robots for material handling, automated sorting systems, and intelligent inventory management solutions. The project focuses on improving efficiency, reducing costs, and enhancing safety in logistics operations.",
      technologies: ["SLAM", "Path Planning", "Computer Vision", "ROS", "Python"],
      team: "9 researchers",
      duration: "1.8 years",
      status: "Active"
    },
    {
      id: 6,
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=300&h=300&fit=crop&crop=center",
      title: "Energy Management",
      subtitle: "Sustainable Robotics",
      description: "Renewable energy monitoring and optimization",
      category: "Energy",
      fullDescription: "The Energy Management project focuses on developing robotic systems for renewable energy applications. We're working on automated solar panel cleaning robots, wind turbine inspection drones, and intelligent energy monitoring systems. Our goal is to improve the efficiency and reliability of renewable energy infrastructure through automation.",
      technologies: ["Drone Technology", "Computer Vision", "IoT", "ROS", "Python"],
      team: "7 researchers",
      duration: "1.2 years",
      status: "Active"
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
                onClick={() => handleProjectClick(project)}
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
                      Click for details
                    </span>
                  </div>
                </div>
                
                {/* Content */}
                <div className="p-8">
                  <h3 className="text-xl font-light text-gray-800 dark:text-gray-200 mb-2">{project.title}</h3>
                  <p className="text-sm font-light text-accent mb-4">{project.subtitle}</p>
                  <p className="text-sm font-light text-gray-600 dark:text-gray-400 leading-relaxed">{project.description}</p>
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