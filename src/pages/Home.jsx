import { useEffect, useRef } from 'react'
import { Link } from 'react-router-dom'
import { gsap } from 'gsap'
import SponsorTicker from '../components/SponsorTicker'

const Home = () => {
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

    gsap.fromTo(hero.querySelectorAll('.hero-button'),
      { y: 30, opacity: 0 },
      { 
        y: 0, 
        opacity: 1, 
        duration: 0.8, 
        stagger: 0.2, 
        delay: 1.2, 
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
            <span className="block">TURTLE</span>
            <span className="block text-accent">ROBOTICS</span>
          </h1>
          
          <p className="hero-subtitle text-xl md:text-2xl font-light tracking-wide text-gray-600 dark:text-gray-400 mb-12 max-w-3xl mx-auto">
            Pioneering robotics solutions and student leadership development at Texas A&M University
          </p>
          
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
            <Link 
              to="/projects" 
              className="hero-button bg-gradient-turtle text-white px-10 py-5 rounded-xl font-light tracking-wide hover:scale-105 transition-all duration-300 shadow-premium"
            >
              EXPLORE PROJECTS
            </Link>
            <Link 
              to="/about" 
              className="hero-button glass-card text-gray-800 dark:text-gray-200 px-10 py-5 rounded-xl font-light tracking-wide hover:scale-105 transition-all duration-300"
            >
              LEARN MORE
            </Link>
          </div>
        </div>
        
        {/* Sponsor Ticker */}
        <div className="absolute bottom-16 left-0 right-0">
          <SponsorTicker />
        </div>
      </section>

      {/* About Section */}
      <section className="py-24 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-extralight text-center mb-20 text-gray-800 dark:text-gray-200">
            ABOUT <span className="text-accent">TURTLE</span>
          </h2>
          
          <div className="grid md:grid-cols-3 gap-8 mb-16">
            <div className="glass-card p-10 rounded-2xl text-center hover:scale-105 transition-all duration-300">
              <div className="text-5xl mb-6">🎓</div>
              <h3 className="text-xl font-light mb-4 text-gray-800 dark:text-gray-200">Student Leadership</h3>
              <p className="text-gray-600 dark:text-gray-400 font-light leading-relaxed">Developing the next generation of robotics leaders through hands-on experience and mentorship.</p>
            </div>
            <div className="glass-card p-10 rounded-2xl text-center hover:scale-105 transition-all duration-300">
              <div className="text-5xl mb-6">🔬</div>
              <h3 className="text-xl font-light mb-4 text-gray-800 dark:text-gray-200">Research Excellence</h3>
              <p className="text-gray-600 dark:text-gray-400 font-light leading-relaxed">Cutting-edge robotics research across multiple domains and applications.</p>
            </div>
            <div className="glass-card p-10 rounded-2xl text-center hover:scale-105 transition-all duration-300">
              <div className="text-5xl mb-6">🏆</div>
              <h3 className="text-xl font-light mb-4 text-gray-800 dark:text-gray-200">Competition Success</h3>
              <p className="text-gray-600 dark:text-gray-400 font-light leading-relaxed">Competing and winning in prestigious robotics competitions worldwide.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Solutions Section */}
      <section className="py-24 px-4 bg-gradient-to-br from-gray-50 to-white dark:from-gray-800 dark:to-gray-900">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-extralight text-center mb-20 text-gray-800 dark:text-gray-200">
            OUR <span className="text-accent">PROGRAMS</span>
          </h2>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="glass-card p-10 rounded-2xl hover:scale-105 transition-all duration-300">
              <div className="text-5xl mb-6">🤖</div>
              <h3 className="text-xl font-light mb-4 text-gray-800 dark:text-gray-200">Research Projects</h3>
              <p className="text-gray-600 dark:text-gray-400 font-light leading-relaxed">13 advanced robotics research projects spanning industrial automation, medical robotics, and more.</p>
            </div>
            <div className="glass-card p-10 rounded-2xl hover:scale-105 transition-all duration-300">
              <div className="text-5xl mb-6">🏁</div>
              <h3 className="text-xl font-light mb-4 text-gray-800 dark:text-gray-200">Competition Teams</h3>
              <p className="text-gray-600 dark:text-gray-400 font-light leading-relaxed">Two competitive robotics teams representing Texas A&M in national and international competitions.</p>
            </div>
            <div className="glass-card p-10 rounded-2xl hover:scale-105 transition-all duration-300">
              <div className="text-5xl mb-6">👥</div>
              <h3 className="text-xl font-light mb-4 text-gray-800 dark:text-gray-200">Leadership Training</h3>
              <p className="text-gray-600 dark:text-gray-400 font-light leading-relaxed">Comprehensive leadership development program for 110+ Hatchling members.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-24 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-extralight mb-12 text-gray-800 dark:text-gray-200">
            READY TO <span className="text-accent">JOIN US</span>
          </h2>
          
          <Link 
            to="/apply" 
            className="inline-block bg-gradient-turtle text-white px-16 py-6 rounded-xl text-xl font-light tracking-wide hover:scale-105 transition-all duration-300 shadow-premium"
          >
            APPLY NOW
          </Link>
        </div>
      </section>
    </div>
  )
}

export default Home 