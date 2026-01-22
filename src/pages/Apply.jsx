import { Link } from 'react-router-dom'
import { useEffect, useRef } from 'react'
import { gsap } from 'gsap'


const Apply = () => {
  const heroRef = useRef(null)

  // ✅ Toggle this to open/close applications
  const applicationsOpen = true // change to false when clsoed

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

  return (
    <div className="min-h-screen">
      {/* Hero Section with Background Image */}
      <section ref={heroRef} className="relative min-h-screen flex items-center justify-center px-4 overflow-hidden">
        {/* Background Image */}
        <img
          src="/assets/GeneralPhotos/ApplyNowJpg.webp"
          alt="Apply Now Background"
          className="absolute inset-0 w-full h-full object-cover object-center brightness-110 dark:brightness-95 z-0"
        />
        {/* Overlay for contrast */}
        <div className="absolute inset-0 bg-black/25 dark:bg-black/25 z-0"></div>
        <div className="relative text-center max-w-6xl mx-auto z-10">
          {/* Removed glass-card wrapper */}
          {applicationsOpen ? (
            <h1 className="text-6xl md:text-8xl lg:text-9xl font-extralight tracking-tight text-white drop-shadow-2xl mb-8">
              <span className="block">APPLY</span>
              <span className="block text-accent">NOW</span>
            </h1>
          ) : (
            <h1 className="text-6xl md:text-8xl lg:text-9xl font-extralight tracking-tight text-red-500 dark:text-red-400 mb-8">
              <span className="block">APPLICATIONS CLOSED</span>
            </h1>
          )}

          <p className="hero-subtitle text-xl md:text-2xl font-light tracking-wide text-gray-100 dark:text-gray-200 mb-12 max-w-3xl mx-auto drop-shadow-md">
            {applicationsOpen
              ? "Fill out this form to join Hatchling or Advanced Project teams at TURTLE."
              : "Applications are currently closed. Please check back soon for future openings."}
          </p>
          {applicationsOpen && (
            <a 
              href="https://forms.gle/59pUiPUCpDrgBCqn7"
              className="inline-block bg-gradient-to-r from-yellow-500 to-amber-500 text-white px-16 py-6 rounded-xl text-xl font-light tracking-wide hover:scale-105 transition-all duration-300 shadow-premium mb-6"
              style={{marginTop: '2rem'}}
            >
              APPLY NOW
            </a>
          )}
        </div>
      </section>

      {/* Application Process */}
      <section className="py-24 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-extralight text-center mb-20 text-gray-800 dark:text-gray-200">
            JOIN TURTLE
          </h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            <div className="glass-card pop-card p-10 rounded-2xl text-center hover:scale-[1.03] transition-all duration-300">
              <div className="text-5xl mb-6">📝</div>
              <h3 className="text-xl font-light mb-4 text-gray-800 dark:text-gray-200">Submit Application</h3>
              <p className="text-gray-600 dark:text-gray-400 font-light leading-relaxed">Complete our online application form to join Hatchlings or Advanced Project teams.</p>
            </div>
            <div className="glass-card pop-card p-10 rounded-2xl text-center hover:scale-[1.03] transition-all duration-300">
              <div className="text-5xl mb-6">🤝</div>
              <h3 className="text-xl font-light mb-4 text-gray-800 dark:text-gray-200">Open House</h3>
              <p className="text-gray-600 dark:text-gray-400 font-light leading-relaxed">Meet with our team leaders to discuss your goals and project preferences.</p>
            </div>
            <div className="glass-card pop-card p-10 rounded-2xl text-center hover:scale-[1.03] transition-all duration-300">
              <div className="text-5xl mb-6">🚀</div>
              <h3 className="text-xl font-light mb-4 text-gray-800 dark:text-gray-200">Start Contributing</h3>
              <p className="text-gray-600 dark:text-gray-400 font-light leading-relaxed">Begin working on exciting robotics projects with TURTLE.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section (previous version, commented for future use)
      <section className="py-24 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-extralight mb-12 text-white drop-shadow-2xl">
            READY TO <span className="text-yellow-400 dark:text-yellow-300">JOIN US</span>
          </h2>
          {applicationsOpen ? (
            <a 
              href="https://forms.gle/59pUiPUCpDrgBCqn7"
              className="inline-block bg-gradient-to-r from-yellow-500 to-amber-500 text-white px-16 py-6 rounded-xl text-xl font-light tracking-wide hover:scale-105 transition-all duration-300 shadow-premium"
            >
              APPLY NOW
            </a>
          ) : (
            <div className="inline-block bg-gray-300 dark:bg-gray-700 text-gray-700 dark:text-gray-300 px-16 py-6 rounded-xl text-xl font-light tracking-wide cursor-not-allowed shadow-inner">
              APPLICATIONS CLOSED
            </div>
          )}
        </div>
      </section>
      */}
      {/* Contact Section (current) */}
      <section className="py-24 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-extralight mb-12 text-white drop-shadow-2xl">
            CONTACT <span className="text-yellow-400 dark:text-yellow-300">TURTLE</span>
          </h2>
          <p className="text-xl text-gray-200 dark:text-gray-300 mb-8">
            For any questions, email us at
            <a href="mailto:turtlerobotics@gmaill.com" className="text-accent underline ml-2">turtlerobotics@gmaill.com</a>
          </p>
        </div>
      </section>

      {/* What We Look For Section */}
      <section className="py-24 px-4 bg-gradient-to-br from-gray-50 to-white dark:from-gray-800 dark:to-gray-900">
        <div className="max-w-6xl mx-auto">

          {/* Main Heading */}
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-extralight text-center mb-16 text-gray-800 dark:text-gray-200">
            WHAT WE <span className="text-accent">LOOK FOR</span>
          </h2>

          {/* Hatchling Subsection */}
          <div className="mb-20 text-center max-w-4xl mx-auto">
            <h3 className="text-2xl md:text-3xl font-light text-gray-800 dark:text-gray-200 mb-6">
              Hatchling
            </h3>
            <p className="text-lg font-light text-gray-600 dark:text-gray-400 leading-relaxed">
              No skills or prior experience required. The Hatchling Program is designed for students of all
              backgrounds who are eager to learn, explore robotics, and grow alongside a supportive team.
            </p>
          </div>

          {/* Advanced Projects Subsection */}
          <div>
            <h3 className="text-2xl md:text-3xl font-light text-gray-800 dark:text-gray-200 mb-12 text-center">
              Advanced Projects
            </h3>

            <div className="grid md:grid-cols-2 gap-12">
              <div>
                <h4 className="text-xl font-light text-gray-800 dark:text-gray-200 mb-6">
                  Technical Skills
                </h4>
                <ul className="space-y-4">
                  <li className="flex items-start"><span className="text-accent mr-3">•</span><span className="text-gray-600 dark:text-gray-400 font-light">Programming experience (Python, C++, ROS)</span></li>
                  <li className="flex items-start"><span className="text-accent mr-3">•</span><span className="text-gray-600 dark:text-gray-400 font-light">Understanding of robotics fundamentals</span></li>
                  <li className="flex items-start"><span className="text-accent mr-3">•</span><span className="text-gray-600 dark:text-gray-400 font-light">Experience with hardware and electronics</span></li>
                  <li className="flex items-start"><span className="text-accent mr-3">•</span><span className="text-gray-600 dark:text-gray-400 font-light">Knowledge of control systems and algorithms</span></li>
                </ul>
              </div>
              <div>
                <h4 className="text-xl font-light text-gray-800 dark:text-gray-200 mb-6">
                  Personal Qualities
                </h4>
                <ul className="space-y-4">
                  <li className="flex items-start"><span className="text-accent mr-3">•</span><span className="text-gray-600 dark:text-gray-400 font-light">Strong problem-solving abilities</span></li>
                  <li className="flex items-start"><span className="text-accent mr-3">•</span><span className="text-gray-600 dark:text-gray-400 font-light">Excellent teamwork and communication</span></li>
                  <li className="flex items-start"><span className="text-accent mr-3">•</span><span className="text-gray-600 dark:text-gray-400 font-light">Passion for robotics and innovation</span></li>
                  <li className="flex items-start"><span className="text-accent mr-3">•</span><span className="text-gray-600 dark:text-gray-400 font-light">Commitment to learning and growth</span></li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>


    </div>
  )
}

export default Apply
