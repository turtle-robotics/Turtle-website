import { useParams, Link } from 'react-router-dom'
import { useEffect } from 'react'
import { gsap } from 'gsap'

const ProjectDetail = () => {
  const { projectId } = useParams()

  // Sample project data - this would typically come from a database or API
  const projectData = {
    'snout': {
      title: 'SNOUT',
      lead: 'Anirudh Subramanian',
      email: 'asubramanian@tamu.edu',
      description: 'SNOUT will design a robotic vehicle equipped with advanced olfactory sensors. The robot will use its "sense of smell" to detect and identify scents for applications ranging from harmful drugs, environmental monitoring, gas leak detection, and search and rescue operations. This robot will pick up new smells and classify them independently. This adaptability, combined with integrated navigation, will enable it to operate in harsh conditions autonomously.',
      goals: [
        'Develop a functional IMS sensor module that converts airborne chemicals into electrical signals.',
        'Prototype the SNOUT robotic platform, such as the intake, drift tube, detector, and electronics, onto a mobile chassis.',
        'Begin training a machine learning model (Random Forest Classifier) to identify and classify chemical compounds based on IMS data such as drift time and ion intensity.',
        'Test SNOUT in controlled environments with known chemicals to evaluate detection accuracy.'
      ],
             lookingFor: [
         'Embedded Systems',
         'Circuit Design',
         'CAD Designing',
         'Machine Learning',
         'Students in CHEN, ECEN, ESET, CSCE, or related majors'
       ]
    },
    'project-1': {
      title: 'PROJECT 1',
      lead: 'John Doe',
      email: 'jdoe@tamu.edu',
      description: 'This is a placeholder project description for Project 1. It will be replaced with actual project details when available.',
      goals: [
        'Complete initial research phase',
        'Develop prototype components',
        'Test core functionality',
        'Document findings and results'
      ],
      lookingFor: [
        'Software Development',
        'Hardware Design',
        'Data Analysis'
      ]
    },
    'project-2': {
      title: 'PROJECT 2',
      lead: 'Jane Smith',
      email: 'jsmith@tamu.edu',
      description: 'This is a placeholder project description for Project 2. It will be replaced with actual project details when available.',
      goals: [
        'Define project scope and requirements',
        'Create initial design concepts',
        'Build proof of concept',
        'Validate technical approach'
      ],
      lookingFor: [
        'Mechanical Engineering',
        'Control Systems',
        'Machine Learning'
      ]
    }
  }

  const project = projectData[projectId] || projectData['project-1']

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

  return (
    <div className="min-h-screen bg-white dark:bg-gray-900">
      <div className="max-w-4xl mx-auto px-4 py-16">
        {/* Back Button */}
        <Link 
          to="/projects" 
          className="inline-flex items-center text-accent hover:text-accent/80 transition-colors duration-200 mb-8"
        >
          <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
          </svg>
          Back to Projects
        </Link>

        {/* Project Title */}
        <h1 className="project-title text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">
          {project.title}
        </h1>

        {/* Project Lead */}
        <div className="project-lead mb-12">
          <p className="text-lg text-gray-700 dark:text-gray-300">
            Project Lead: {project.lead} 
            <span className="text-accent ml-2">({project.email})</span>
          </p>
        </div>

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
                <span className="text-accent mr-3 mt-1">✓</span>
                <span className="text-gray-700 dark:text-gray-300">{goal}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Looking For */}
        <div className="project-section">
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
            Looking For
          </h2>
          <ul className="space-y-3">
            {project.lookingFor.map((skill, index) => (
              <li key={index} className="flex items-start">
                <span className="text-accent mr-3 mt-1">•</span>
                <span className="text-gray-700 dark:text-gray-300">{skill}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Apply Button */}
        <div className="mt-12 pt-8 border-t border-gray-200 dark:border-gray-700">
          <Link 
            to="/apply" 
            className="inline-block bg-gradient-turtle text-white px-8 py-3 rounded-lg font-medium hover:scale-105 transition-all duration-300"
          >
            Apply to Join This Project
          </Link>
        </div>
      </div>
    </div>
  )
}

export default ProjectDetail 