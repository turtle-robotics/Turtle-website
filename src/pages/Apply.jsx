import { Link } from 'react-router-dom'
import { useEffect, useRef } from 'react'
import { gsap } from 'gsap'

const Apply = () => {
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

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section ref={heroRef} className="relative min-h-screen flex items-center justify-center px-4">
        <div className="absolute inset-0 bg-gradient-to-br from-gray-50 via-white to-gray-100 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900"></div>
        <div className="relative text-center max-w-6xl mx-auto z-10">
          <h1 className="text-6xl md:text-8xl lg:text-9xl font-extralight tracking-tight text-gray-800 dark:text-gray-200 mb-8">
            <span className="block">APPLY</span>
            <span className="block text-accent">NOW</span>
          </h1>
          
          <p className="hero-subtitle text-xl md:text-2xl font-light tracking-wide text-gray-600 dark:text-gray-400 mb-12 max-w-3xl mx-auto">
            Join our team of robotics innovators and help shape the future of automation technology.
          </p>
        </div>
      </section>

      {/* Application Process */}
      <section className="py-24 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-extralight text-center mb-20 text-gray-800 dark:text-gray-200">
            JOIN OUR <span className="text-accent">TEAM</span>
          </h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            <div className="glass-card p-10 rounded-2xl text-center hover:scale-105 transition-all duration-300">
              <div className="text-5xl mb-6">📝</div>
              <h3 className="text-xl font-light mb-4 text-gray-800 dark:text-gray-200">Submit Application</h3>
              <p className="text-gray-600 dark:text-gray-400 font-light leading-relaxed">Complete our online application form with your background, skills, and interests in robotics.</p>
            </div>
            <div className="glass-card p-10 rounded-2xl text-center hover:scale-105 transition-all duration-300">
              <div className="text-5xl mb-6">🤝</div>
              <h3 className="text-xl font-light mb-4 text-gray-800 dark:text-gray-200">Interview Process</h3>
              <p className="text-gray-600 dark:text-gray-400 font-light leading-relaxed">Meet with our team leaders to discuss your goals and how you can contribute to our projects.</p>
            </div>
            <div className="glass-card p-10 rounded-2xl text-center hover:scale-105 transition-all duration-300">
              <div className="text-5xl mb-6">🚀</div>
              <h3 className="text-xl font-light mb-4 text-gray-800 dark:text-gray-200">Start Contributing</h3>
              <p className="text-gray-600 dark:text-gray-400 font-light leading-relaxed">Begin working on exciting robotics projects and develop your skills with our team.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Requirements Section */}
      <section className="py-24 px-4 bg-gradient-to-br from-gray-50 to-white dark:from-gray-800 dark:to-gray-900">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-extralight text-center mb-20 text-gray-800 dark:text-gray-200">
            WHAT WE <span className="text-accent">LOOK FOR</span>
          </h2>
          
          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <h3 className="text-2xl font-light text-gray-800 dark:text-gray-200 mb-6">Technical Skills</h3>
              <ul className="space-y-4">
                <li className="flex items-start">
                  <span className="text-accent mr-3">•</span>
                  <span className="text-gray-600 dark:text-gray-400 font-light">Programming experience (Python, C++, ROS)</span>
                </li>
                <li className="flex items-start">
                  <span className="text-accent mr-3">•</span>
                  <span className="text-gray-600 dark:text-gray-400 font-light">Understanding of robotics fundamentals</span>
                </li>
                <li className="flex items-start">
                  <span className="text-accent mr-3">•</span>
                  <span className="text-gray-600 dark:text-gray-400 font-light">Experience with hardware and electronics</span>
                </li>
                <li className="flex items-start">
                  <span className="text-accent mr-3">•</span>
                  <span className="text-gray-600 dark:text-gray-400 font-light">Knowledge of control systems and algorithms</span>
                </li>
              </ul>
            </div>
            
            <div>
              <h3 className="text-2xl font-light text-gray-800 dark:text-gray-200 mb-6">Personal Qualities</h3>
              <ul className="space-y-4">
                <li className="flex items-start">
                  <span className="text-accent mr-3">•</span>
                  <span className="text-gray-600 dark:text-gray-400 font-light">Strong problem-solving abilities</span>
                </li>
                <li className="flex items-start">
                  <span className="text-accent mr-3">•</span>
                  <span className="text-gray-600 dark:text-gray-400 font-light">Excellent teamwork and communication</span>
                </li>
                <li className="flex items-start">
                  <span className="text-accent mr-3">•</span>
                  <span className="text-gray-600 dark:text-gray-400 font-light">Passion for robotics and innovation</span>
                </li>
                <li className="flex items-start">
                  <span className="text-accent mr-3">•</span>
                  <span className="text-gray-600 dark:text-gray-400 font-light">Commitment to learning and growth</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-24 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-extralight text-center mb-20 text-gray-800 dark:text-gray-200">
            WHY JOIN <span className="text-accent">TURTLE</span>
          </h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="glass-card p-8 rounded-2xl text-center hover:scale-105 transition-all duration-300">
              <div className="text-4xl mb-4">🎓</div>
              <h3 className="text-lg font-light mb-3 text-gray-800 dark:text-gray-200">Hands-on Experience</h3>
              <p className="text-sm font-light text-gray-600 dark:text-gray-400">Work on real robotics projects with cutting-edge technology</p>
            </div>
            <div className="glass-card p-8 rounded-2xl text-center hover:scale-105 transition-all duration-300">
              <div className="text-4xl mb-4">👥</div>
              <h3 className="text-lg font-light mb-3 text-gray-800 dark:text-gray-200">Team Collaboration</h3>
              <p className="text-sm font-light text-gray-600 dark:text-gray-400">Learn from experienced researchers and fellow students</p>
            </div>
            <div className="glass-card p-8 rounded-2xl text-center hover:scale-105 transition-all duration-300">
              <div className="text-4xl mb-4">🏆</div>
              <h3 className="text-lg font-light mb-3 text-gray-800 dark:text-gray-200">Competition Success</h3>
              <p className="text-sm font-light text-gray-600 dark:text-gray-400">Compete in prestigious robotics competitions worldwide</p>
            </div>
            <div className="glass-card p-8 rounded-2xl text-center hover:scale-105 transition-all duration-300">
              <div className="text-4xl mb-4">💼</div>
              <h3 className="text-lg font-light mb-3 text-gray-800 dark:text-gray-200">Career Development</h3>
              <p className="text-sm font-light text-gray-600 dark:text-gray-400">Build skills that prepare you for robotics industry careers</p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-24 px-4 bg-gradient-to-br from-gray-50 to-white dark:from-gray-800 dark:to-gray-900">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-extralight mb-12 text-gray-800 dark:text-gray-200">
            READY TO <span className="text-accent">APPLY</span>
          </h2>
          
          <p className="text-xl font-light text-gray-600 dark:text-gray-400 mb-12 max-w-2xl mx-auto leading-relaxed">
            Take the first step towards joining our robotics research team. We're excited to see what you can contribute to our innovative projects.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
            <a 
              href="mailto:turtle.robotics@tamu.edu" 
              className="bg-gradient-turtle text-white px-12 py-5 rounded-xl text-lg font-light tracking-wide hover:scale-105 transition-all duration-300 shadow-premium"
            >
              CONTACT US
            </a>
            <Link 
              to="/about" 
              className="glass-card text-gray-800 dark:text-gray-200 px-12 py-5 rounded-xl text-lg font-light tracking-wide hover:scale-105 transition-all duration-300"
            >
              LEARN MORE
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Apply 