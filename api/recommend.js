import { useEffect, useRef, useState } from 'react'
import { gsap } from 'gsap'
import StatisticsCard from '../components/StatisticsCard'

const About = () => {
  const heroRef = useRef(null)

  useEffect(() => {
    const hero = heroRef.current
    if (!hero) return

    gsap.fromTo(
      hero.querySelectorAll('h1 span'),
      { y: 100, opacity: 0 },
      { y: 0, opacity: 1, duration: 1.2, stagger: 0.2, ease: 'power3.out' }
    )

    gsap.fromTo(
      hero.querySelector('.hero-subtitle'),
      { y: 50, opacity: 0 },
      { y: 0, opacity: 1, duration: 1, delay: 0.8, ease: 'power3.out' }
    )
  }, [])

  const statistics = [
    { count: 22, label: 'Advanced Research Projects', description: 'Cutting-edge robotics initiatives' },
    { count: 2, label: 'Competition Teams', description: 'Robotics competition teams' },
    { count: 250, label: 'Student Researchers', description: '250+ active researchers' },
    { count: 110, label: 'Hatchling Members', description: 'Program participants' },
  ]

  const currentLeadership = [
    // Executive roles
    { role: 'President', name: 'Ian Lansdowne', period: 'Fall 2025 - Spring 2026', description: 'Leading Turtle Robotics into its next chapter of innovation and growth' },
    { role: 'External Vice President', name: 'Yousuf Shafiu', period: 'Fall 2025 - Spring 2026', description: 'Overseeing external relations and partnerships' },
    { role: 'Internal Vice President', name: 'Ian Wilhite', period: 'Fall 2025 - Spring 2026', description: 'Managing internal operations and team coordination' },
    { role: 'Project Vice President', name: 'Sam Woravka', period: 'Fall 2025 - Spring 2026', description: 'Leading project development and technical initiatives' },
    { role: 'Development Vice President', name: 'Kalen Jaroszewski', period: 'Fall 2025 - Spring 2026', description: 'Driving innovation and research advancement' },
    { role: 'Treasurer', name: 'Raquel Garcia', period: 'Fall 2025 - Spring 2026', description: 'Managing financial operations and budgeting' },

  // External Branch
    { role: 'Corporate Relations Officer', name: 'James Lee', period: 'Fall 2025 - Spring 2026', description: 'Building and maintaining corporate partnerships' },
    { role: 'Public Relations Officer', name: 'Isaac Cabello', period: 'Fall 2025 - Spring 2026', description: 'Managing club communications and public presence' },
    { role: 'Sponsorship Committee', name: 'Jacob Fuerst', period: 'Fall 2025 - Spring 2026', description: 'Sponsorship strategy and outreach' },
    { role: 'Sponsorship Committee', name: 'Julia Sopala', period: 'Fall 2025 - Spring 2026', description: 'Sponsorship strategy and outreach' },
    { role: 'Sponsorship Committee', name: 'Preston Nguyen', period: 'Fall 2025 - Spring 2026', description: 'Sponsorship strategy and outreach' },
    { role: 'Sponsorship Committee', name: 'Yousuf Shafiu', period: 'Fall 2025 - Spring 2026', description: 'Sponsorship strategy and outreach' },
    { role: 'Public Relations Committee', name: 'Alexis Bunta', period: 'Fall 2025 - Spring 2026', description: 'Content and media support' },
    { role: 'Public Relations Committee', name: 'Noah Sherman', period: 'Fall 2025 - Spring 2026', description: 'Content and media support' },
    { role: 'Public Relations Committee', name: 'Renee Zhu', period: 'Fall 2025 - Spring 2026', description: 'Content and media support' },

  // Web Branch
    { role: 'Webmaster', name: 'Saksham Mohan', period: 'Fall 2025 - Spring 2026', description: 'Maintaining and developing the organization\'s web presence' },
    { role: 'Web Development Committee', name: 'Jackson Marshall', period: 'Fall 2025 - Spring 2026', description: 'Full-stack development and site maintenance' },

  // Internal Branch
    { role: 'Logistics Officer', name: 'Ryo Kato', period: 'Fall 2025 - Spring 2026', description: 'Events, scheduling, and operations' },
    { role: 'Finance Officer', name: 'Eddy Silva', period: 'Fall 2025 - Spring 2026', description: 'Financial planning and reimbursements' },
    { role: 'Lab Quality Officer', name: 'Haider Mahdi', period: 'Fall 2025 - Spring 2026', description: 'Safety and quality standards in the lab' },
    { role: 'Lab Quality Committee', name: 'Caleb Santiago', period: 'Fall 2025 - Spring 2026', description: 'Lab quality and safety support' },
    { role: 'Lab Quality Committee', name: 'Dalys Guajardo', period: 'Fall 2025 - Spring 2026', description: 'Lab quality and safety support' },
    { role: 'Lab Quality Committee', name: 'Mya Tinsay', period: 'Fall 2025 - Spring 2026', description: 'Lab quality and safety support' },
    { role: 'Lab Quality Committee', name: 'Thomas Lopez', period: 'Fall 2025 - Spring 2026', description: 'Lab quality and safety support' },
    { role: 'Lab Quality Committee', name: 'Victor Cardona', period: 'Fall 2025 - Spring 2026', description: 'Lab quality and safety support' },

  // Projects Branch
    { role: 'Documentation Officer', name: 'Emily Tredemeyer', period: 'Fall 2025 - Spring 2026', description: 'Documentation standards and archives' },
    { role: 'Design Review Officer', name: 'Aidan Briggs', period: 'Fall 2025 - Spring 2026', description: 'Project design reviews and guidance' },
    { role: 'Design Review Officer', name: 'Evan Chan', period: 'Fall 2025 - Spring 2026', description: 'Project design reviews and guidance' },
    { role: 'Design Review Officer', name: 'Jonathon Foltyn', period: 'Fall 2025 - Spring 2026', description: 'Project design reviews and guidance' },
    { role: 'Design Review Officer', name: 'Micah Guttman', period: 'Fall 2025 - Spring 2026', description: 'Project design reviews and guidance' },
    { role: 'Design Review Officer', name: 'Will McGarity', period: 'Fall 2025 - Spring 2026', description: 'Project design reviews and guidance' },

  // Development Branch
    { role: 'Workshop Officer', name: 'Vedant Soni', period: 'Fall 2025 - Spring 2026', description: 'Workshops and technical training' },
    { role: 'Hatchling Director', name: 'Alejandro Avila', period: 'Fall 2025 - Spring 2026', description: 'Hatchling leadership and mentorship' },
    { role: 'Hatchling Director', name: 'Ethan Real', period: 'Fall 2025 - Spring 2026', description: 'Hatchling leadership and mentorship' },
    { role: 'Hatchling Director', name: 'Gael Mamenta', period: 'Fall 2025 - Spring 2026', description: 'Hatchling leadership and mentorship' },
    { role: 'Hatchling Director', name: 'Karthik Jayakumar', period: 'Fall 2025 - Spring 2026', description: 'Hatchling leadership and mentorship' },
    { role: 'Hatchling Director', name: 'Mohid Ismail', period: 'Fall 2025 - Spring 2026', description: 'Hatchling leadership and mentorship' },
    { role: 'Hatchling Director', name: 'Nathan Mersino', period: 'Fall 2025 - Spring 2026', description: 'Hatchling leadership and mentorship' },
    { role: 'Hatchling Director', name: 'William Shan', period: 'Fall 2025 - Spring 2026', description: 'Hatchling leadership and mentorship' },
  ]

  const historicalLeadership = {
    president: ['Past President 1', 'Past President 2'],
    internalVP: ['Past Internal VP 1', 'Past Internal VP 2'],
    externalVP: ['Past External VP 1', 'Past External VP 2'],
    projectVP: ['Past Project VP 1', 'Past Project VP 2'],
    developmentVP: ['Past Development VP 1', 'Past Development VP 2'],
    treasurer: ['Past Treasurer 1', 'Past Treasurer 2'],
    facultyAdvisor: ['Past Faculty Advisor 1', 'Past Faculty Advisor 2']
  }

  const [openSection, setOpenSection] = useState({
    executive: true,
    external: true,
    internal: true,
    web: true,
    projects: true,
    development: true,
    presidentHistory: true,
    internalVPHistory: true,
    externalVPHistory: true,
    projectVPHistory: true,
    developmentVPHistory: true,
    treasurerHistory: true,
    facultyAdvisorHistory: true,
  })

  const toggleSection = (section) => {
    setOpenSection(prev => ({ ...prev, [section]: !prev[section] }))
  }

  const renderLeadership = (roles) =>
    currentLeadership
      .filter(l => roles.includes(l.role))
      .map((leader, index) => (
        <div key={index} className="glass-card p-6 rounded-2xl hover:scale-105 transition-all duration-300">
          <h3 className="text-lg font-light text-accent mb-2">{leader.role}</h3>
          <h4 className="text-base font-light text-gray-800 dark:text-gray-200 mb-2">{leader.name}</h4>
          <p className="text-xs font-light text-gray-600 dark:text-gray-400 mb-3">{leader.period}</p>
          <p className="text-xs font-light text-gray-600 dark:text-gray-400 leading-relaxed">{leader.description}</p>
        </div>
      ))

  return (
    <div className="min-h-screen">

      {/* Hero Section */}
      <section ref={heroRef} className="relative min-h-screen flex items-center justify-center px-4">
        <div className="absolute inset-0 bg-gradient-to-br from-gray-50 via-white to-gray-100 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900"></div>
        <div className="relative text-center max-w-6xl mx-auto z-10">
          <h1 className="text-6xl md:text-8xl lg:text-9xl font-extralight tracking-tight text-gray-800 dark:text-gray-200 mb-8">
            <span className="block">ABOUT</span>
            <span className="block text-accent">TURTLE</span>
          </h1>
          <p className="hero-subtitle text-xl md:text-2xl font-light tracking-wide text-gray-600 dark:text-gray-400 mb-12 max-w-3xl mx-auto">
            Turtle Robotics is a student-led research lab at Texas A&M University, pioneering innovative robotics solutions and developing the next generation of robotics leaders.
          </p>
        </div>
      </section>

      {/* Statistics Section */}
      <section className="py-24 px-4 bg-gradient-to-br from-gray-50 to-white dark:from-gray-800 dark:to-gray-900">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-extralight text-center mb-20 text-gray-800 dark:text-gray-200">
            OUR <span className="text-accent">IMPACT</span>
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {statistics.map((stat, index) => (
              <StatisticsCard key={index} {...stat} />
            ))}
          </div>
        </div>
      </section>

      {/* Leadership Section */}
      <section className="py-24 px-4">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-extralight text-center mb-20 text-gray-800 dark:text-gray-200">
            OUR <span className="text-accent">TEAM</span>
          </h2>

          {/* Executive Roles Accordion */}
          <div className="mb-12">
            <button onClick={() => toggleSection('executive')} className="w-full text-left font-light text-xl text-gray-800 dark:text-gray-200 mb-4">
              Executive Roles {openSection.executive ? '▲' : '▼'}
            </button>
            {openSection.executive && <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">{renderLeadership(['President','External Vice President','Internal Vice President','Project Vice President','Development Vice President','Treasurer'])}</div>}
          </div>

          {/* External Branch Accordion */}
          <div className="mb-12">
            <button onClick={() => toggleSection('external')} className="w-full text-left font-light text-xl text-gray-800 dark:text-gray-200 mb-4">
              External Branch {openSection.external ? '▲' : '▼'}
            </button>
            {openSection.external && <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">{renderLeadership(['Corporate Relations Officer','Public Relations Officer','Sponsorship Committee','Public Relations Committee'])}</div>}
          </div>

          {/* Internal Branch Accordion */}
          <div className="mb-12">
            <button onClick={() => toggleSection('internal')} className="w-full text-left font-light text-xl text-gray-800 dark:text-gray-200 mb-4">
              Internal Branch {openSection.internal ? '▲' : '▼'}
            </button>
            {openSection.internal && <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">{renderLeadership(['Logistics Officer','Finance Officer','Lab Quality Officer','Lab Quality Committee'])}</div>}
          </div>

          {/* Web Branch Accordion */}
          <div className="mb-12">
            <button onClick={() => toggleSection('web')} className="w-full text-left font-light text-xl text-gray-800 dark:text-gray-200 mb-4">
              Web Branch {openSection.web ? '▲' : '▼'}
            </button>
            {openSection.web && <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">{renderLeadership(['Webmaster','Web Development Committee'])}</div>}
          </div>

          {/* Projects Branch Accordion */}
          <div className="mb-12">
            <button onClick={() => toggleSection('projects')} className="w-full text-left font-light text-xl text-gray-800 dark:text-gray-200 mb-4">
              Projects Branch {openSection.projects ? '▲' : '▼'}
            </button>
            {openSection.projects && <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">{renderLeadership(['Documentation Officer','Design Review Officer'])}</div>}
          </div>

          {/* Development Branch Accordion */}
          <div className="mb-12">
            <button onClick={() => toggleSection('development')} className="w-full text-left font-light text-xl text-gray-800 dark:text-gray-200 mb-4">
              Development Branch {openSection.development ? '▲' : '▼'}
            </button>
            {openSection.development && <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">{renderLeadership(['Workshop Officer','Hatchling Director'])}</div>}
          </div>
        </div>
      </section>

      {/* Historical Leadership Accordion */}
      <section className="py-24 px-4">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-extralight text-center mb-20 text-gray-800 dark:text-gray-200">
            HISTORICAL <span className="text-accent">LEADERSHIP</span>
          </h2>

          {Object.entries(historicalLeadership).map(([key, officers]) => (
            <div key={key} className="mb-12">
              <button onClick={() => toggleSection(key + 'History')} className="w-full text-left font-light text-xl text-gray-800 dark:text-gray-200 mb-4">
                {`Past ${key.charAt(0).toUpperCase() + key.slice(1)}`} {openSection[key + 'History'] ? '▲' : '▼'}
              </button>
              {openSection[key + 'History'] && (
                <ul className="list-disc ml-6">
                  {officers.map((officer, i) => (
                    <li key={i} className="mb-2">{officer}</li>
                  ))}
                </ul>
              )}
            </div>
          ))}
        </div>
      </section>

    </div>
  )
}

export default About
//