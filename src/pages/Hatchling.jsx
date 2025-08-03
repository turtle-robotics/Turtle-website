import { Link } from 'react-router-dom'
import { useEffect, useRef } from 'react'
import { gsap } from 'gsap'
import Carousel from '../components/Carousel'
import CircularGallery from '../components/CircularGallery'

const Hatchling = () => {
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
            <span className="block">HATCHLING</span>
            <span className="block text-accent">PROGRAM</span>
          </h1>
          
          <p className="hero-subtitle text-xl md:text-2xl font-light tracking-wide text-gray-600 dark:text-gray-400 mb-12 max-w-3xl mx-auto">
            Our innovative robotics program designed to develop the next generation of robotics leaders and innovators.
          </p>
        </div>
      </section>

      {/* TURTLE Hatchling Program Section */}
      <section className="py-24 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-extralight text-center mb-20 text-gray-800 dark:text-gray-200">
            TURTLE <span className="text-accent">HATCHLING</span> PROGRAM
          </h2>
          
          <div className="glass-card p-12 rounded-2xl mb-16">
            <p className="text-xl font-light text-gray-600 dark:text-gray-400 leading-relaxed text-center max-w-4xl mx-auto">
              Our intensive accelerator program is designed to fast-track students' robotics skills through hands-on projects, expert mentorship, and cutting-edge resources.
            </p>
          </div>

          {/* Skills Checklist */}
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="glass-card p-8 rounded-2xl text-center hover:scale-105 transition-all duration-300">
              <div className="text-4xl mb-4">✔</div>
              <h3 className="text-lg font-light text-gray-800 dark:text-gray-200">Robotics Programming</h3>
            </div>
            <div className="glass-card p-8 rounded-2xl text-center hover:scale-105 transition-all duration-300">
              <div className="text-4xl mb-4">✔</div>
              <h3 className="text-lg font-light text-gray-800 dark:text-gray-200">Electronics</h3>
            </div>
            <div className="glass-card p-8 rounded-2xl text-center hover:scale-105 transition-all duration-300">
              <div className="text-4xl mb-4">✔</div>
              <h3 className="text-lg font-light text-gray-800 dark:text-gray-200">Soldering</h3>
            </div>
            <div className="glass-card p-8 rounded-2xl text-center hover:scale-105 transition-all duration-300">
              <div className="text-4xl mb-4">✔</div>
              <h3 className="text-lg font-light text-gray-800 dark:text-gray-200">Solidworks</h3>
            </div>
          </div>
        </div>
      </section>

      {/* Circular Gallery Section */}
      <section className="py-12 px-4 bg-gradient-to-br from-gray-50 to-white dark:from-gray-800 dark:to-gray-900">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-extralight text-center mb-8 text-gray-800 dark:text-gray-200">
            OUR <span className="text-accent">GALLERY</span>
          </h2>
          
          <div style={{ height: '900px', position: 'relative' }}>    
            <CircularGallery bend={3} textColor="#ffffff" borderRadius={0.05} scrollEase={0.02}/>
          </div>
        </div>
      </section>

      {/* Program Timeline Carousel */}
      <section className="py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-extralight text-center mb-12 text-gray-800 dark:text-gray-200">
            PROGRAM <span className="text-accent">TIMELINE</span>
          </h2>
          
          <div className="text-center mb-6">
            <p className="text-lg font-light text-gray-600 dark:text-gray-400 mb-3">
              Scroll through to explore our program phases
            </p>
            <div className="flex justify-center items-center gap-2 text-sm text-gray-500 dark:text-gray-400">
              <span>←</span>
              <span>Drag or click to navigate</span>
              <span>→</span>
            </div>
          </div>
          
          <div className="flex justify-center">
            <div style={{ height: '600px', position: 'relative' }}>
              <Carousel
                baseWidth={1200}  
                autoplay={true}
                autoplayDelay={3000}
                pauseOnHover={true}
                loop={true}
                round={false}
              />
            </div>
          </div>
        </div>
      </section>

      {/* Program Overview */}
      <section className="py-16 px-4 bg-gradient-to-br from-gray-50 to-white dark:from-gray-800 dark:to-gray-900">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-extralight text-center mb-12 text-gray-800 dark:text-gray-200">
            JOIN <span className="text-accent">HATCHLING</span>
          </h2>
          
          <div className="grid md:grid-cols-2 gap-12">
            <div className="glass-card p-10 rounded-2xl">
              <h3 className="text-2xl font-light text-gray-800 dark:text-gray-200 mb-6">Program Overview</h3>
              <p className="text-gray-600 dark:text-gray-400 font-light leading-relaxed mb-6">
                The Hatchling Program is our comprehensive leadership development initiative designed to nurture 
                the next generation of robotics innovators. Through hands-on project work, mentorship, and 
                structured learning experiences, participants develop both technical skills and leadership abilities.
              </p>
              <p className="text-gray-600 dark:text-gray-400 font-light leading-relaxed">
                Our program emphasizes collaborative learning, real-world problem solving, and the development 
                of communication and teamwork skills essential for success in robotics and engineering.
              </p>
            </div>
            
            <div className="glass-card p-10 rounded-2xl">
              <h3 className="text-2xl font-light text-gray-800 dark:text-gray-200 mb-6">What You'll Gain</h3>
              <ul className="space-y-4">
                <li className="flex items-start">
                  <span className="text-accent mr-3">•</span>
                  <span className="text-gray-600 dark:text-gray-400 font-light">Hands-on experience with cutting-edge robotics technology</span>
                </li>
                <li className="flex items-start">
                  <span className="text-accent mr-3">•</span>
                  <span className="text-gray-600 dark:text-gray-400 font-light">Mentorship from experienced robotics researchers</span>
                </li>
                <li className="flex items-start">
                  <span className="text-accent mr-3">•</span>
                  <span className="text-gray-600 dark:text-gray-400 font-light">Leadership development and team management skills</span>
                </li>
                <li className="flex items-start">
                  <span className="text-accent mr-3">•</span>
                  <span className="text-gray-600 dark:text-gray-400 font-light">Networking opportunities with industry professionals</span>
                </li>
                <li className="flex items-start">
                  <span className="text-accent mr-3">•</span>
                  <span className="text-gray-600 dark:text-gray-400 font-light">Portfolio of real robotics projects for your career</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Success Stories */}
      <section className="py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-extralight text-center mb-12 text-gray-800 dark:text-gray-200">
            SUCCESS <span className="text-accent">STORIES</span>
          </h2>
          
          <div className="grid md:grid-cols-2 gap-8">
            <div className="glass-card p-8 rounded-2xl">
              <h3 className="text-xl font-light text-gray-800 dark:text-gray-200 mb-4">Josh Vancura</h3>
              <p className="text-sm font-light text-accent mb-3">Hatchling Graduate → President</p>
              <p className="text-gray-600 dark:text-gray-400 font-light leading-relaxed">
                "The Hatchling Program gave me the foundation I needed to lead robotics projects and develop 
                innovative solutions. The mentorship and hands-on experience were invaluable to my growth."
              </p>
            </div>
            <div className="glass-card p-8 rounded-2xl">
              <h3 className="text-xl font-light text-gray-800 dark:text-gray-200 mb-4">Krishna Vamsi</h3>
              <p className="text-sm font-light text-accent mb-3">Hatchling Graduate → President</p>
              <p className="text-gray-600 dark:text-gray-400 font-light leading-relaxed">
                "Through the Hatchling Program, I developed both technical skills and leadership abilities. 
                The program's emphasis on real-world projects prepared me for success in robotics engineering."
              </p>
            </div>
            <div className="glass-card p-8 rounded-2xl">
              <h3 className="text-xl font-light text-gray-800 dark:text-gray-200 mb-4">Zachary Bucknor-Smartt</h3>
              <p className="text-sm font-light text-accent mb-3">Hatchling Graduate → President</p>
              <p className="text-gray-600 dark:text-gray-400 font-light leading-relaxed">
                "The Hatchling Program transformed my understanding of robotics and leadership. The collaborative 
                environment and mentorship opportunities were key to my development as a robotics leader."
              </p>
            </div>
            <div className="glass-card p-8 rounded-2xl">
              <h3 className="text-xl font-light text-gray-800 dark:text-gray-200 mb-4">Ian Lansdowne</h3>
              <p className="text-sm font-light text-accent mb-3">Hatchling Graduate → Current President</p>
              <p className="text-gray-600 dark:text-gray-400 font-light leading-relaxed">
                "The Hatchling Program provided me with the skills and confidence to lead Turtle Robotics into 
                its next chapter. The program's focus on both technical excellence and leadership development is unmatched."
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 px-4 bg-gradient-to-br from-gray-50 to-white dark:from-gray-800 dark:to-gray-900">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-extralight mb-12 text-gray-800 dark:text-gray-200">
            START YOUR <span className="text-accent">JOURNEY</span>
          </h2>
          
          <p className="text-xl font-light text-gray-600 dark:text-gray-400 mb-12 max-w-2xl mx-auto leading-relaxed">
            Ready to develop your robotics skills and leadership abilities? Join the Hatchling Program and 
            become part of the next generation of robotics innovators.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
            <Link 
              to="/apply" 
              className="bg-gradient-turtle text-white px-12 py-5 rounded-xl text-lg font-light tracking-wide hover:scale-105 transition-all duration-300 shadow-premium"
            >
              APPLY NOW
            </Link>
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

export default Hatchling 