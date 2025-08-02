import { useEffect, useRef } from 'react'
import { gsap } from 'gsap'
import StatisticsCard from '../components/StatisticsCard'

const About = () => {
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

  const statistics = [
    { count: 13, label: "Advanced Research Projects", description: "Cutting-edge robotics initiatives" },
    { count: 2, label: "Competition Teams", description: "Robotics competition teams" },
    { count: 150, label: "Student Researchers", description: "150+ active researchers" },
    { count: 110, label: "Hatchling Members", description: "Program participants" }
  ]

  const currentLeadership = [
    {
      role: "President",
      name: "Ian Lansdowne",
      period: "Fall 2025 - Present",
      description: "Leading Turtle Robotics into its next chapter of innovation and growth"
    },
    {
      role: "Internal Vice President",
      name: "Ian Wilhite",
      period: "Fall 2025 - Present",
      description: "Managing internal operations and team coordination"
    },
    {
      role: "External Vice President",
      name: "Malcolm Ferguson",
      period: "Fall 2025 - Present",
      description: "Overseeing external relations and partnerships"
    },
    {
      role: "Project Vice President",
      name: "Samantha Woravka",
      period: "Fall 2025 - Present",
      description: "Leading project development and technical initiatives"
    },
    {
      role: "Development Vice President",
      name: "Kalen Jaroszewski",
      period: "Fall 2025 - Present",
      description: "Driving innovation and research advancement"
    },
    {
      role: "Treasurer",
      name: "Raquel Garcia",
      period: "Fall 2024 - Present",
      description: "Managing financial operations and budgeting"
    }
  ]

  const historicalLeadership = {
    president: [
      { period: "Fall 2013 - Spring 2015", name: "Kenny Chour" },
      { period: "Fall 2015 - Spring 2016", name: "Mark Wager" },
      { period: "Fall 2016 - Spring 2017", name: "Sam Terrill" },
      { period: "Fall 2017", name: "Josh Vancura → Hatchling" },
      { period: "Spring 2018", name: "Ahmad Jawad" },
      { period: "Fall 2018 - Spring 2020", name: "Krishna Vamsi → Hatchling" },
      { period: "Fall 2020 - Spring 2023", name: "Bret Topham" },
      { period: "Fall 2023 - Spring 2025", name: "Zachary Bucknor-Smartt → Hatchling" },
      { period: "Fall 2025 - Present", name: "Ian Lansdowne" }
    ],
    internalVP: [
      { period: "Fall 2013 - Spring 2015", name: "Ivan Cortes" },
      { period: "Fall 2015 - Spring 2016", name: "Jim McCabe" },
      { period: "Fall 2016 - Spring 2017", name: "Abigail Dowd → Hatchling" },
      { period: "Fall 2017", name: "Ahmad Jawad" },
      { period: "Spring 2018", name: "Olawale Salaudeen" },
      { period: "Fall 2018", name: "Joanna Steele" },
      { period: "Spring 2019 - Spring 2020", name: "Chris Geisheker" },
      { period: "Fall 2020 - Spring 2022", name: "Jordan Nunn → Hatchling" },
      { period: "Fall 2022 - Spring 2023", name: "Rishi Jangale → Hatchling" },
      { period: "Fall 2023 - Spring 2024", name: "Brendan Wyatt" },
      { period: "Fall 2024 - Spring 2025", name: "Ian Lansdowne" },
      { period: "Fall 2025 - Present", name: "Ian Wilhite → Hatchling" }
    ],
    externalVP: [
      { period: "Fall 2013 - Spring 2015", name: "Deepak Dhankani" },
      { period: "Fall 2015 - Spring 2016", name: "Nathan Glaser" },
      { period: "Fall 2016 - Spring 2017", name: "Josh VanCura → Hatchling" },
      { period: "Fall 2017", name: "Olawale Salaudeen" },
      { period: "Spring 2018", name: "Connor Landrum" },
      { period: "Fall 2018 - Spring 2019", name: "Praneeth Nagula → Hatchling" },
      { period: "Fall 2019", name: "Adam Armendariz → Hatchling" },
      { period: "Spring 2020 - Spring 2022", name: "Colin Sander → Hatchling" },
      { period: "Fall 2022 - Spring 2023", name: "Amrit Nanda" },
      { period: "Fall 2023 - Spring 2025", name: "Ian Farrar → Hatchling" },
      { period: "Fall 2025 - Present", name: "Malcolm Ferguson" }
    ],
    projectVP: [
      { period: "Fall 2022 - Spring 2023", name: "Brendan Wyatt" },
      { period: "Fall 2023 - Spring 2024", name: "Reagan Hoffmann" },
      { period: "Fall 2024 - Spring 2025", name: "Willem Bannick → Hatchling" },
      { period: "Fall 2025 - Present", name: "Samantha Woravka" }
    ],
    developmentVP: [
      { period: "Fall 2025 - Present", name: "Kalen Jaroszewski → Hatchling" }
    ],
    treasurer: [
      { period: "Spring 2013 - Spring 2015", name: "Deepak Dhankani" },
      { period: "Fall 2015", name: "Ivan Cortez" },
      { period: "Spring 2016 - Spring 2017", name: "Spencer Capps → Hatchling" },
      { period: "Fall 2017 - Spring 2018", name: "Kurtis Davis → Hatchling" },
      { period: "Fall 2018 - Spring 2020", name: "Nicholas Arackal → Hatchling" },
      { period: "Fall 2020 - Spring 2021", name: "Osmani Perez → Hatchling" },
      { period: "Fall 2021 - Spring 2024", name: "Thomas Dawson → Hatchling" },
      { period: "Fall 2024 - Present", name: "Raquel Garcia → Hatchling" }
    ],
    facultyAdvisor: [
      { period: "Fall 2013 - Fall 2014", name: "Aaron Ames" },
      { period: "Spring 2015 - Fall 2020", name: "Pilwon Hur" },
      { period: "Spring 2021 - Present", name: "Sivakumar Rathinam" }
    ]
  }

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

      {/* Current Leadership Section */}
      <section className="py-24 px-4">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-extralight text-center mb-20 text-gray-800 dark:text-gray-200">
            OUR <span className="text-accent">TEAM</span>
          </h2>
          <div className="text-center mb-16">
            <h3 className="text-2xl font-light text-gray-800 dark:text-gray-200 mb-4">Current Leadership</h3>
            <p className="text-lg font-light text-accent">Class Year 2025-26</p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {currentLeadership.map((leader, index) => (
              <div key={index} className="glass-card p-8 rounded-2xl hover:scale-105 transition-all duration-300">
                <h3 className="text-xl font-light text-accent mb-2">{leader.role}</h3>
                <h4 className="text-lg font-light text-gray-800 dark:text-gray-200 mb-2">{leader.name}</h4>
                <p className="text-sm font-light text-gray-600 dark:text-gray-400 mb-4">{leader.period}</p>
                <p className="text-sm font-light text-gray-600 dark:text-gray-400 leading-relaxed">{leader.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Historical Leadership Section */}
      <section className="py-24 px-4 bg-gradient-to-br from-gray-50 to-white dark:from-gray-800 dark:to-gray-900">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-extralight text-center mb-20 text-gray-800 dark:text-gray-200">
            OUR <span className="text-accent">HISTORY</span>
          </h2>
          <div className="grid lg:grid-cols-2 gap-12">
            {/* President History */}
            <div className="glass-card p-8 rounded-2xl">
              <h3 className="text-2xl font-light text-gray-800 dark:text-gray-200 mb-6">Presidents</h3>
              <div className="space-y-3">
                {historicalLeadership.president.map((president, index) => (
                  <div key={index} className="flex justify-between items-center py-2 border-b border-gray-200/50 dark:border-gray-700/50 last:border-b-0">
                    <span className="text-sm font-light text-gray-600 dark:text-gray-400">{president.period}</span>
                    <span className="text-sm font-light text-gray-800 dark:text-gray-200">{president.name}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Internal VP History */}
            <div className="glass-card p-8 rounded-2xl">
              <h3 className="text-2xl font-light text-gray-800 dark:text-gray-200 mb-6">Internal Vice Presidents</h3>
              <div className="space-y-3">
                {historicalLeadership.internalVP.map((vp, index) => (
                  <div key={index} className="flex justify-between items-center py-2 border-b border-gray-200/50 dark:border-gray-700/50 last:border-b-0">
                    <span className="text-sm font-light text-gray-600 dark:text-gray-400">{vp.period}</span>
                    <span className="text-sm font-light text-gray-800 dark:text-gray-200">{vp.name}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* External VP History */}
            <div className="glass-card p-8 rounded-2xl">
              <h3 className="text-2xl font-light text-gray-800 dark:text-gray-200 mb-6">External Vice Presidents</h3>
              <div className="space-y-3">
                {historicalLeadership.externalVP.map((vp, index) => (
                  <div key={index} className="flex justify-between items-center py-2 border-b border-gray-200/50 dark:border-gray-700/50 last:border-b-0">
                    <span className="text-sm font-light text-gray-600 dark:text-gray-400">{vp.period}</span>
                    <span className="text-sm font-light text-gray-800 dark:text-gray-200">{vp.name}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Project VP History */}
            <div className="glass-card p-8 rounded-2xl">
              <h3 className="text-2xl font-light text-gray-800 dark:text-gray-200 mb-6">Project Vice Presidents</h3>
              <div className="space-y-3">
                {historicalLeadership.projectVP.map((vp, index) => (
                  <div key={index} className="flex justify-between items-center py-2 border-b border-gray-200/50 dark:border-gray-700/50 last:border-b-0">
                    <span className="text-sm font-light text-gray-600 dark:text-gray-400">{vp.period}</span>
                    <span className="text-sm font-light text-gray-800 dark:text-gray-200">{vp.name}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Development VP History */}
            <div className="glass-card p-8 rounded-2xl">
              <h3 className="text-2xl font-light text-gray-800 dark:text-gray-200 mb-6">Development Vice Presidents</h3>
              <div className="space-y-3">
                {historicalLeadership.developmentVP.map((vp, index) => (
                  <div key={index} className="flex justify-between items-center py-2 border-b border-gray-200/50 dark:border-gray-700/50 last:border-b-0">
                    <span className="text-sm font-light text-gray-600 dark:text-gray-400">{vp.period}</span>
                    <span className="text-sm font-light text-gray-800 dark:text-gray-200">{vp.name}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Treasurer History */}
            <div className="glass-card p-8 rounded-2xl">
              <h3 className="text-2xl font-light text-gray-800 dark:text-gray-200 mb-6">Treasurers</h3>
              <div className="space-y-3">
                {historicalLeadership.treasurer.map((treasurer, index) => (
                  <div key={index} className="flex justify-between items-center py-2 border-b border-gray-200/50 dark:border-gray-700/50 last:border-b-0">
                    <span className="text-sm font-light text-gray-600 dark:text-gray-400">{treasurer.period}</span>
                    <span className="text-sm font-light text-gray-800 dark:text-gray-200">{treasurer.name}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Faculty Advisors */}
          <div className="mt-12">
            <div className="glass-card p-8 rounded-2xl max-w-2xl mx-auto">
              <h3 className="text-2xl font-light text-gray-800 dark:text-gray-200 mb-6 text-center">Faculty Advisors</h3>
              <div className="space-y-3">
                {historicalLeadership.facultyAdvisor.map((advisor, index) => (
                  <div key={index} className="flex justify-between items-center py-2 border-b border-gray-200/50 dark:border-gray-700/50 last:border-b-0">
                    <span className="text-sm font-light text-gray-600 dark:text-gray-400">{advisor.period}</span>
                    <span className="text-sm font-light text-gray-800 dark:text-gray-200">{advisor.name}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-24 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-extralight mb-12 text-gray-800 dark:text-gray-200">
            OUR <span className="text-accent">MISSION</span>
          </h2>
          <p className="text-xl font-light text-gray-600 dark:text-gray-400 leading-relaxed">
            To advance robotics technology through innovative research, foster student leadership development, 
            and create a collaborative environment where students can explore cutting-edge robotics solutions 
            while building the skills needed for successful careers in robotics and automation.
          </p>
        </div>
      </section>
    </div>
  )
}

export default About 