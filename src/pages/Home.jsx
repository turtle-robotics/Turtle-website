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
          {/* AI Announcement Badge */}
          <div className="mb-6 flex justify-center">
            <div className="relative w-full max-w-xl px-2">
              <div className="absolute -inset-px rounded-2xl bg-gradient-to-r from-yellow-500/35 via-amber-400/25 to-yellow-500/35 blur-lg opacity-40"></div>
              <div className="relative mx-auto flex items-center justify-center gap-3 rounded-2xl px-4 py-2 bg-gradient-to-r from-yellow-500/10 via-amber-500/10 to-yellow-500/10 ring-1 ring-yellow-500/25 shadow-soft backdrop-blur">
                <span className="text-lg leading-none select-none">⚡</span>
                <p className="m-0 text-center text-sm md:text-base font-light text-gray-800 dark:text-gray-100">
                  <span className="bg-gradient-to-r from-yellow-500 to-amber-500 bg-clip-text text-transparent font-medium">Now with AI-powered project matching!</span>
                </p>
                <span className="text-lg leading-none animate-pulse select-none">✨</span>
              </div>
            </div>
          </div>
          <h1 className="text-6xl md:text-8xl lg:text-9xl font-extralight tracking-tight text-gray-800 dark:text-gray-200 mb-8">
            <span className="block">TURTLE</span>
            <span className="block text-yellow-600 dark:text-yellow-400">ROBOTICS</span>
          </h1>
          
          <p className="hero-subtitle text-xl md:text-2xl font-light tracking-wide text-gray-600 dark:text-gray-400 mb-12 max-w-3xl mx-auto">
            Pioneering robotics solutions and student leadership development at Texas A&M University
          </p>
          
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
            <Link 
              to="/projects" 
              className="hero-button bg-gradient-to-r from-yellow-500 to-amber-500 text-white px-10 py-5 rounded-xl font-light tracking-wide hover:scale-105 transition-all duration-300 shadow-premium"
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
            ABOUT <span className="text-yellow-600 dark:text-yellow-400">TURTLE</span>
          </h2>
          
          <div className="grid md:grid-cols-3 gap-8 mb-16">
            <div className="glass-card pop-card p-10 rounded-2xl text-center hover:scale-[1.03] transition-all duration-300">
              <div className="text-5xl mb-6">🎓</div>
              <h3 className="text-xl font-light mb-4 text-gray-800 dark:text-gray-200">Student Leadership</h3>
              <p className="text-gray-600 dark:text-gray-400 font-light leading-relaxed">Developing the next generation of robotics leaders through hands-on experience and mentorship.</p>
            </div>
            <div className="glass-card pop-card p-10 rounded-2xl text-center hover:scale-[1.03] transition-all duration-300">
              <div className="text-5xl mb-6">🔬</div>
              <h3 className="text-xl font-light mb-4 text-gray-800 dark:text-gray-200">Research Excellence</h3>
              <p className="text-gray-600 dark:text-gray-400 font-light leading-relaxed">Cutting-edge robotics research across multiple domains and applications.</p>
            </div>
            <div className="glass-card pop-card p-10 rounded-2xl text-center hover:scale-[1.03] transition-all duration-300">
              <div className="text-5xl mb-6">🏆</div>
              <h3 className="text-xl font-light mb-4 text-gray-800 dark:text-gray-200">Competition Success</h3>
              <p className="text-gray-600 dark:text-gray-400 font-light leading-relaxed">Competing and winning in prestigious robotics competitions.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Solutions Section */}
      <section className="py-24 px-4 bg-gradient-to-br from-gray-50 to-white dark:from-gray-800 dark:to-gray-900">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-extralight text-center mb-20 text-gray-800 dark:text-gray-200">
            OUR <span className="text-yellow-600 dark:text-yellow-400">PROGRAMS</span>
          </h2>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="glass-card p-10 rounded-2xl hover:scale-105 transition-all duration-300">
              <div className="text-5xl mb-6">🤖</div>
              <h3 className="text-xl font-light mb-4 text-gray-800 dark:text-gray-200">Research Projects</h3>
              <p className="text-gray-600 dark:text-gray-400 font-light leading-relaxed">22 advanced robotics research projects spanning industrial automation, medical robotics, and more.</p>
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
            READY TO <span className="text-yellow-600 dark:text-yellow-400">JOIN US</span>
          </h2>
          
          <a 
            href="https://forms.gle/8md4HbE4LCMRBf6UA"
            className="inline-block bg-gradient-to-r from-yellow-500 to-amber-500 text-white px-16 py-6 rounded-xl text-xl font-light tracking-wide hover:scale-105 transition-all duration-300 shadow-premium"
          >
            APPLY NOW
          </a>
        </div>
      </section>
      {/* Showcase Sticky Note */}
{/* Showcase Sticky Note */}
<a 
  href="/showcase"
  className="fixed bottom-8 right-8 z-50 group"
>
  <div className="relative bg-gradient-to-br from-yellow-50 to-amber-50 dark:from-gray-800 dark:to-gray-700 p-6 rounded-xl shadow-2xl hover:shadow-3xl transition-all duration-300 rotate-2 hover:rotate-0 max-w-xs border-2 border-yellow-400 dark:border-yellow-600">
    {/* Pin */}
    <div className="absolute -top-3 left-1/2 transform -translate-x-1/2 w-6 h-6 bg-red-900 dark:bg-yellow-600 rounded-full shadow-md"></div>
    
    <div className="text-xs font-bold text-yellow-600 dark:text-yellow-400 mb-2 uppercase tracking-wide">📌 Don't Miss!</div>
    <div className="text-xl font-extralight text-gray-800 dark:text-gray-200 mb-1">TURTLE Showcase</div>
    <div className="text-sm font-light text-gray-600 dark:text-gray-400 mb-1">November 21, 2025</div>
    <div className="text-sm font-light text-gray-600 dark:text-gray-400 mb-3">1:00-5:00 PM</div>
    <div className="text-xs text-yellow-600 dark:text-yellow-400 underline group-hover:text-yellow-700 dark:group-hover:text-yellow-300 font-medium">Click for more info →</div>
  </div>
</a>


    </div>
  )
}

export default Home 
