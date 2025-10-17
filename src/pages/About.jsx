import { useEffect, useRef, useState } from 'react'
import { gsap } from 'gsap'
import StatisticsCard from '../components/StatisticsCard'

const About = () => {
  const heroRef = useRef(null)
  const [openCurrent, setOpenCurrent] = useState(null) // Current Leadership accordion
  const [openHistorical, setOpenHistorical] = useState(null) // Historical Leadership accordion

  useEffect(() => {
    const hero = heroRef.current
    if (!hero) return

    gsap.fromTo(
      hero.querySelectorAll('h1 span'),
      { y: 100, opacity: 0 },
      { y: 0, opacity: 1, duration: 1.2, stagger: 0.2, ease: "power3.out" }
    )

    gsap.fromTo(
      hero.querySelector('.hero-subtitle'),
      { y: 50, opacity: 0 },
      { y: 0, opacity: 1, duration: 1, delay: 0.8, ease: "power3.out" }
    )
  }, [])

  const statistics = [
    { count: 22, label: "Advanced Research Projects", description: "Cutting-edge robotics initiatives" },
    { count: 2, label: "Competition Teams", description: "Robotics competition teams" },
    { count: 250, label: "Student Researchers", description: "250+ active researchers" },
    { count: 110, label: "Hatchling Members", description: "Program participants" }
  ]

  const currentLeadership = [
    { role: 'President', name: 'Ian Lansdowne', period: 'Fall 2025 - Spring 2026', description: 'Leading Turtle Robotics into its next chapter of innovation and growth' },
    { role: 'External Vice President', name: 'Yousuf Shafiu', period: 'Fall 2025 - Spring 2026', description: 'Overseeing external relations and partnerships' },
    { role: 'Internal Vice President', name: 'Ian Wilhite', period: 'Fall 2025 - Spring 2026', description: 'Managing internal operations and team coordination' },
    { role: 'Project Vice President', name: 'Sam Woravka', period: 'Fall 2025 - Spring 2026', description: 'Leading project development and technical initiatives' },
    { role: 'Development Vice President', name: 'Kalen Jaroszewski', period: 'Fall 2025 - Spring 2026', description: 'Driving innovation and research advancement' },
    { role: 'Treasurer', name: 'Raquel Garcia', period: 'Fall 2025 - Spring 2026', description: 'Managing financial operations and budgeting' },
    // ...other current leaders
  ]

  const historicalLeadership = {
    President: [
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
    "Internal VP": [
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
    // ...other historical roles
  }

  const toggleCurrent = (index) => setOpenCurrent(openCurrent === index ? null : index)
  const toggleHistorical = (role) => setOpenHistorical(openHistorical === role ? null : role)

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

      {/* Current Leadership Accordion */}
      <section className="py-24 px-4">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-extralight text-center mb-20 text-gray-800 dark:text-gray-200">
            OUR <span className="text-accent">TEAM</span>
          </h2>

          {currentLeadership.map((leader, index) => (
            <div key={index} className="glass-card rounded-2xl mb-4">
              <button
                onClick={() => toggleCurrent(index)}
                className="w-full flex justify-between items-center p-6"
              >
                <div>
                  <h3 className="text-lg font-light text-accent">{leader.role}</h3>
                  <h4 className="text-base font-light text-gray-800 dark:text-gray-200">{leader.name}</h4>
                  <p className="text-xs font-light text-gray-600 dark:text-gray-400">{leader.period}</p>
                </div>
                <span className="text-accent font-bold text-2xl">{openCurrent === index ? '−' : '+'}</span>
              </button>
              {openCurrent === index && (
                <div className="px-6 pb-6 text-gray-600 dark:text-gray-400 text-sm font-light">
                  {leader.description}
                </div>
              )}
            </div>
          ))}
        </div>
      </section>

      {/* Historical Leadership Accordion */}
      <section className="py-24 px-4 bg-gray-50 dark:bg-gray-900">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-extralight text-center mb-12 text-gray-800 dark:text-gray-200">
            HISTORICAL <span className="text-accent">LEADERSHIP</span>
          </h2>
          {Object.entries(historicalLeadership).map(([role, records], idx) => (
            <div key={idx} className="glass-card rounded-2xl mb-4">
              <button
                onClick={() => toggleHistorical(role)}
                className="w-full flex justify-between items-center p-6"
              >
                <h3 className="text-lg font-light text-accent">{role}</h3>
                <span className="text-accent font-bold text-2xl">{openHistorical === role ? '−' : '+'}</span>
              </button>
              {openHistorical === role && (
                <div className="px-6 pb-6 text-gray-600 dark:text-gray-400 text-sm font-light">
                  <ul>
                    {records.map((record, rIdx) => (
                      <li key={rIdx} className="mb-2">
                        <span className="font-semibold">{record.period}:</span> {record.name}
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </div>
          ))}
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-24 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-extralight mb-8 text-gray-800 dark:text-gray-200">
            OUR <span className="text-accent">MISSION</span>
          </h2>
          <p className="text-lg md:text-xl text-gray-600 dark:text-gray-400 font-light leading-relaxed">
            Turtle Robotics exists to provide students at Texas A&M University the resources, mentorship, and opportunities to explore advanced robotics projects, compete at a high level, and grow as future engineers and innovators.
          </p>
        </div>
      </section>

    </div>
  )
}

export default About
