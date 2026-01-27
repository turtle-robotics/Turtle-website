import { useEffect, useRef, useState } from 'react'
import { Analytics } from '@vercel/analytics/react'
import { Link } from 'react-router-dom'
import { gsap } from 'gsap'
import SponsorTicker from '../components/SponsorTicker'
import ProjectTicker from '../components/ProjectTicker'
import { projects } from '../data/projects'
import ButtonLink from '../components/ButtonLink'

const ENABLE_SHOWCASE_POPUPS = false;

const Home = () => {
  const heroRef = useRef(null)
  const [showMobilePopup, setShowMobilePopup] = useState(true)

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

    gsap.fromTo(hero.querySelectorAll('.hero-button'),
      { y: 30, opacity: 0 },
      { 
        y: 0, 
        opacity: 1, 
        duration: 0.8, 
        stagger: 0.2, 
        delay: 1.2, 
        ease: "power3.out",
        clearProps: "transform"
      }
    )
  }, [])

  return (
    <>
      <Analytics />
      <div className="min-h-screen">
      {/* Hero Section */}
<section ref={heroRef} className="relative min-h-screen flex items-center justify-center px-4">
  <div className="absolute inset-0 bg-gradient-to-br from-gray-50 via-white to-gray-100 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900"></div>
  
  <div className="relative text-center max-w-6xl mx-auto z-10">
    <h1 className="text-6xl md:text-8xl lg:text-9xl font-extralight tracking-tight text-gray-800 dark:text-gray-200 mb-8">
      <span className="block">TURTLE</span>
      <span className="block text-yellow-600 dark:text-yellow-400">ROBOTICS</span>
    </h1>
    
    <p className="hero-subtitle text-xl md:text-2xl font-light tracking-wide text-gray-600 dark:text-gray-400 mb-12 max-w-3xl mx-auto">
      Pioneering robotics solutions and student leadership development at Texas A&M University
    </p>
    
    <div className="flex flex-col sm:flex-row gap-6 justify-center items-center relative z-50">
      <ButtonLink className="hero-button" to="/projects" sizeVariant="large" style="primary">EXPLORE PROJECTS</ButtonLink>
      <ButtonLink className="hero-button" to="/about" sizeVariant="large" style="primary-outline">LEARN MORE</ButtonLink>
    </div>
  </div>
  
{/* Project Ticker - positioned at bottom */}
<div className="absolute bottom-0 left-0 right-0 z-10">
  <ProjectTicker projects={projects} />
</div>
</section>

      {/* About Section */}
      <section className="py-24 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-extralight text-center mb-20 text-gray-800 dark:text-gray-200">
            ABOUT <span className="text-yellow-600 dark:text-yellow-400">TURTLE</span>
          </h2>
          <div className="grid md:grid-cols-3 gap-8 mb-16">
            <div className="glass-card p-10 rounded-2xl text-center transition-all duration-300">
              <div className="text-5xl mb-6">🎓</div>
              <h3 className="text-xl font-light mb-4 text-gray-800 dark:text-gray-200">Student Leadership</h3>
              <p className="text-gray-600 dark:text-gray-400 font-light leading-relaxed">Developing the next generation of robotics leaders through hands-on experience and mentorship.</p>
            </div>
            <div className="glass-card p-10 rounded-2xl text-center transition-all duration-300">
              <div className="text-5xl mb-6">🔬</div>
              <h3 className="text-xl font-light mb-4 text-gray-800 dark:text-gray-200">Research Excellence</h3>
              <p className="text-gray-600 dark:text-gray-400 font-light leading-relaxed">Cutting-edge robotics research across multiple domains and applications.</p>
            </div>
            <div className="glass-card p-10 rounded-2xl text-center transition-all duration-300">
              <div className="text-5xl mb-6">⚙️</div>
              <h3 className="text-xl font-light mb-4 text-gray-800 dark:text-gray-200">Engineering Development</h3>
              <p className="text-gray-600 dark:text-gray-400 font-light leading-relaxed">Hands-on engineering experience through real-world robotics projects, technical workshops, and collaborative problem solving.</p>
            </div>
          </div>
        </div>
        {/* Competition Accolades - Large Rectangle */}
        <div className="glass-card p-10 rounded-2xl text-center transition-all duration-300 mt-8 max-w-3xl mx-auto">
          <div className="text-5xl mb-6">🏆</div>
          <h3 className="text-2xl font-light mb-4 text-gray-800 dark:text-gray-200">Competition Accolades</h3>
          <ul className="text-gray-600 dark:text-gray-400 font-light leading-relaxed space-y-3 flex flex-col items-center justify-center max-w-xl mx-auto pl-0">
            <li className="flex items-center justify-center"><span className="text-yellow-600 dark:text-yellow-400 mr-3 text-lg">&#8226;</span><span className="text-center">1st Place at TAMU Project Showcase '21</span></li>
            <li className="flex items-center justify-center"><span className="text-yellow-600 dark:text-yellow-400 mr-3 text-lg">&#8226;</span><span className="text-center">3rd Place at TAMU Innovation Expo '25</span></li>
            <li className="flex items-center justify-center"><span className="text-yellow-600 dark:text-yellow-400 mr-3 text-lg">&#8226;</span><span className="text-center">Awardee at Texas Robot Combat Texas Cup '25</span></li>
          </ul>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-24 px-4 bg-gradient-to-br from-gray-50 to-white dark:from-gray-800 dark:to-gray-900">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-extralight mb-12 text-gray-800 dark:text-gray-200">
            READY TO <span className="text-yellow-600 dark:text-yellow-400">JOIN US</span>
          </h2>
          <ButtonLink  sizeVariant="xl" style="primary" to="https://forms.gle/59pUiPUCpDrgBCqn7">APPLY NOW</ButtonLink>
        </div>
      </section>

      {/* Showcase Popup - Mobile */}
      {ENABLE_SHOWCASE_POPUPS && showMobilePopup && (
        <div className="md:hidden fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4">
          <div className="relative bg-gradient-to-br from-yellow-50 to-amber-50 dark:from-gray-800 dark:to-gray-700 p-8 rounded-2xl shadow-2xl border-2 border-yellow-400 dark:border-yellow-600 max-w-sm w-full">
            <button
              onClick={(e) => {
                e.preventDefault()
                e.stopPropagation()
                setShowMobilePopup(false)
              }}
              className="absolute top-4 right-4 w-8 h-8 bg-gray-800 dark:bg-gray-200 text-white dark:text-gray-800 rounded-full flex items-center justify-center hover:bg-gray-700 dark:hover:bg-gray-300 transition-colors shadow-lg text-xl font-light"
              aria-label="Close"
            >
              ×
            </button>
            
            <a 
              href="/showcase"
              className="block text-center"
              onClick={() => setShowMobilePopup(false)}
            >
              <div className="mx-auto mb-4 w-8 h-8 bg-red-900 dark:bg-yellow-600 rounded-full shadow-md"></div>
              <div className="text-sm font-bold text-yellow-600 dark:text-yellow-400 mb-3 uppercase tracking-wide">📌 Don't Miss This Event!</div>
              <div className="text-4xl font-extralight text-gray-800 dark:text-gray-200 mb-4 leading-tight">TURTLE Showcase</div>
              <div className="text-xl font-light text-gray-600 dark:text-gray-400 mb-2">November 21, 2025</div>
              <div className="text-xl font-light text-gray-600 dark:text-gray-400 mb-2">1:00 PM - 5:00 PM</div>
              <div className="text-base font-light text-gray-600 dark:text-gray-400 mb-6">Zachry Engineering Building<br/>Virginia C Brown Atrium</div>
              <div className="bg-yellow-500 text-black px-8 py-3 rounded-xl font-light tracking-wide inline-block">
                Learn More →
              </div>
            </a>
          </div>
        </div>
      )}
      
      {/* Showcase Popup - Desktop */}
      {ENABLE_SHOWCASE_POPUPS && (
        <a 
          href="/showcase"
          className="hidden md:block fixed bottom-8 right-8 z-40 group"
        >
          <div className="relative bg-gradient-to-br from-yellow-50 to-amber-50 dark:from-gray-800 dark:to-gray-700 p-6 rounded-xl shadow-xl hover:shadow-2xl transition-all duration-300 rotate-2 hover:rotate-0 w-64 border-2 border-yellow-400 dark:border-yellow-600">
            <div className="absolute -top-3 left-1/2 transform -translate-x-1/2 w-7 h-7 bg-red-900 dark:bg-yellow-600 rounded-full shadow-md"></div>
            <div className="text-xs font-bold text-yellow-600 dark:text-yellow-400 mb-2 uppercase tracking-wide">📌 Don't Miss!</div>
            <div className="text-2xl font-extralight text-gray-800 dark:text-gray-200 mb-2">TURTLE Showcase</div>
            <div className="text-base font-light text-gray-600 dark:text-gray-400 mb-1">November 21, 2025</div>
            <div className="text-base font-light text-gray-600 dark:text-gray-400 mb-3">1:00-5:00 PM</div>
            <div className="text-xs text-yellow-600 dark:text-yellow-400 underline group-hover:text-yellow-700 dark:group-hover:text-yellow-300 font-medium">Click for more info →</div>
          </div>
        </a>
      )}
      
      {/* Calendar Section */}
      <section className="py-24 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-extralight text-center mb-10 text-gray-800 dark:text-gray-200">
            Calendar
          </h2>
          <div className="flex justify-center">
            <div className="rounded-2xl border-4 border-gray-300 dark:border-gray-700 shadow-xl bg-white/60 dark:bg-gray-900/60 p-4">
              <iframe
                src="https://calendar.google.com/calendar/embed?src=turtlerobotics%40gmail.com&ctz=America%2FChicago"
                style={{ border: 0, borderRadius: '1rem', background: 'transparent' }}
                width="1300"
                height="1200"
                frameBorder="0"
                scrolling="no"
                title="TURTLE Google Calendar"
              ></iframe>
            </div>
          </div>
        </div>
      </section>
      
      </div>
    </>
  )
}

export default Home