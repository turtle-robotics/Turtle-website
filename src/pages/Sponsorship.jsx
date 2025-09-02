import { useEffect, useRef } from 'react'
import { gsap } from 'gsap'
import { Link } from 'react-router-dom'

const Sponsorship = () => {
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

    // Animate sections
    gsap.fromTo('.sponsor-section',
      { y: 50, opacity: 0 },
      { 
        y: 0, 
        opacity: 1, 
        duration: 0.8, 
        stagger: 0.2, 
        ease: "power2.out",
        scrollTrigger: {
          trigger: '.sponsor-section',
          start: 'top 80%'
        }
      }
    )
  }, [])

  const sponsorshipTiers = [
    {
      name: "Bronze Sponsor",
      amount: "$500",
      color: "from-yellow-600 to-amber-600",
      benefits: [
        "Logo placement on website",
        "Recognition at events",
        "Showcase Advertisement",
        "Social media post"
      ]
    },
    {
      name: "Silver Sponsor",
      amount: "$1,500",
      color: "from-yellow-500 to-amber-500",
      benefits: [
        "All Bronze benefits",
        "Resume Bank",
        "Recuiter Paneling",
        "Annual report recognition",
        "Exclusive workshop access"
      ]
    },
    {
      name: "Gold Sponsor",
      amount: "$3,000",
      color: "from-yellow-400 to-yellow-500",
      benefits: [
        "All Bronze benefits",
        "All Silver benefits",
        "Direct team collaboration",
        "Priority recruitment access",
        "Custom research opportunities",
        "Recruiter Table at Showcase"
      ]
    },
    {
      name: "Platinum Sponsor",
      amount: "$5,000",
      color: "from-yellow-300 to-yellow-400",
      benefits: [
        "All Bronze benefits",
        "All Silver benefits",
        "All Gold benefits",
        "Logo on an Advanced Project",
        "Custom internship programs",
        "Industry conference speaking",
        "Patent collaboration rights"
      ]
    }
  ]

  const impactStats = [
    { number: "50+", label: "Students Impacted" },
    { number: "15+", label: "Projects Completed" },
    { number: "8", label: "Industry Partners" },
    { number: "3", label: "Years of Innovation" }
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-white to-gray-100 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900">
      {/* Hero Section */}
      <section ref={heroRef} className="relative min-h-screen flex items-center justify-center px-4">
        <div className="absolute inset-0 bg-gradient-to-br from-gray-100/50 via-white to-gray-100/50 dark:from-gray-900/50 dark:via-gray-800/50 dark:to-gray-900/50"></div>
        <div className="relative text-center max-w-6xl mx-auto z-10">
                     <h1 className="text-6xl md:text-8xl lg:text-9xl font-extralight tracking-tight text-gray-800 dark:text-gray-200 mb-8">
             <span className="block">SPONSOR</span>
             <span className="block text-yellow-600 dark:text-yellow-400">TURTLE</span>
           </h1>
          
          <p className="hero-subtitle text-xl md:text-2xl font-light tracking-wide text-gray-600 dark:text-gray-400 mb-12 max-w-3xl mx-auto">
            Partner with the next generation of robotics innovators. Support cutting-edge research and shape the future of autonomous systems.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link 
              to="#sponsorship-tiers"
              className="bg-gradient-to-r from-yellow-500 to-amber-500 text-white px-8 py-4 rounded-xl font-medium hover:scale-105 transition-all duration-300 shadow-lg"
            >
              View Sponsorship Tiers
            </Link>
                         <a 
               href="mailto:turtlerobotics@gmail.com?subject=Sponsorship%20Inquiry&body=Hello,%20I'm%20interested%20in%20sponsoring%20TURTLE%20Robotics.%20Please%20provide%20more%20information%20about%20sponsorship%20opportunities%20and%20benefits."
               className="border-2 border-yellow-500 text-yellow-600 dark:text-yellow-400 px-8 py-4 rounded-xl font-medium hover:bg-yellow-500 hover:text-white transition-all duration-300"
             >
               Contact Us
             </a>
          </div>
        </div>
      </section>

      {/* Impact Stats */}
      <section className="py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {impactStats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-4xl md:text-5xl font-bold text-yellow-600 dark:text-yellow-400 mb-2">
                  {stat.number}
                </div>
                <div className="text-sm font-light text-gray-600 dark:text-gray-400">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Sponsor Section */}
      <section className="py-16 px-4 bg-white dark:bg-gray-800">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
                         <h2 className="text-4xl md:text-5xl font-extralight text-gray-800 dark:text-gray-200 mb-8">
               Why Sponsor <span className="text-yellow-600 dark:text-yellow-400">TURTLE</span>?
             </h2>
            <p className="text-xl font-light text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
              Join us in advancing robotics technology while gaining access to top engineering talent and innovative research opportunities.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="sponsor-section text-center p-8 rounded-2xl bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-700 dark:to-gray-600">
                             <div className="w-16 h-16 bg-gradient-to-r from-yellow-500 to-amber-500 rounded-full flex items-center justify-center mx-auto mb-6">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                </svg>
              </div>
              <h3 className="text-2xl font-light text-gray-800 dark:text-gray-200 mb-4">Innovation Access</h3>
              <p className="text-gray-600 dark:text-gray-400">
                Get early access to cutting-edge robotics research and potential patent opportunities.
              </p>
            </div>

            <div className="sponsor-section text-center p-8 rounded-2xl bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-700 dark:to-gray-600">
                             <div className="w-16 h-16 bg-gradient-to-r from-yellow-500 to-amber-500 rounded-full flex items-center justify-center mx-auto mb-6">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
              </div>
              <h3 className="text-2xl font-light text-gray-800 dark:text-gray-200 mb-4">Talent Pipeline</h3>
              <p className="text-gray-600 dark:text-gray-400">
                Connect with top engineering students for internships and full-time positions.
              </p>
            </div>

            <div className="sponsor-section text-center p-8 rounded-2xl bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-700 dark:to-gray-600">
              <div className="w-16 h-16 bg-gradient-to-r from-yellow-500 to-amber-500 rounded-full flex items-center justify-center mx-auto mb-6">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h3 className="text-2xl font-light text-gray-800 dark:text-gray-200 mb-4">Brand Recognition</h3>
              <p className="text-gray-600 dark:text-gray-400">
                Enhance your brand visibility among future engineers and industry leaders.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Sponsorship Tiers */}
      <section id="sponsorship-tiers" className="py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
                         <h2 className="text-4xl md:text-5xl font-extralight text-gray-800 dark:text-gray-200 mb-8">
               Sponsorship <span className="text-yellow-600 dark:text-yellow-400">Tiers</span>
             </h2>
            <p className="text-xl font-light text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
              Choose the sponsorship level that best fits your organization's goals and budget.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {sponsorshipTiers.map((tier, index) => (
              <div key={index} className="sponsor-section group">
                <div className={`bg-gradient-to-br ${tier.color} p-8 rounded-2xl text-white shadow-lg hover:scale-105 transition-all duration-300`}>
                  <h3 className="text-2xl font-light mb-2">{tier.name}</h3>
                  <div className="text-3xl font-bold mb-6">{tier.amount}</div>
                  <ul className="space-y-3">
                    {tier.benefits.map((benefit, benefitIndex) => (
                      <li key={benefitIndex} className="flex items-start">
                        <span className="text-yellow-200 mr-3 mt-1">✓</span>
                        <span className="text-sm">{benefit}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Current Projects */}
      <section className="py-16 px-4 bg-white dark:bg-gray-800">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
                         <h2 className="text-4xl md:text-5xl font-extralight text-gray-800 dark:text-gray-200 mb-8">
               Current <span className="text-yellow-600 dark:text-yellow-400">Projects</span>
             </h2>
            <p className="text-xl font-light text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
              Your sponsorship directly supports these innovative robotics projects.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="sponsor-section p-8 rounded-2xl bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-700 dark:to-gray-600">
              <h3 className="text-2xl font-light text-gray-800 dark:text-gray-200 mb-4">SNOUT - Olfactory Sensing Robot</h3>
              <p className="text-gray-600 dark:text-gray-400 mb-4">
                Advanced robotic vehicle equipped with olfactory sensors for chemical detection and identification.
              </p>
              <div className="flex flex-wrap gap-2">
                                 <span className="text-xs bg-yellow-200 text-yellow-800 px-3 py-1 rounded-full">IMS Sensors</span>
                 <span className="text-xs bg-yellow-200 text-yellow-800 px-3 py-1 rounded-full">Machine Learning</span>
                 <span className="text-xs bg-yellow-200 text-yellow-800 px-3 py-1 rounded-full">Robotics</span>
              </div>
            </div>

            <div className="sponsor-section p-8 rounded-2xl bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-700 dark:to-gray-600">
              <h3 className="text-2xl font-light text-gray-800 dark:text-gray-200 mb-4">Autonomous Navigation Systems</h3>
              <p className="text-gray-600 dark:text-gray-400 mb-4">
                Development of advanced pathfinding and obstacle avoidance algorithms for mobile robots.
              </p>
              <div className="flex flex-wrap gap-2">
                                 <span className="text-xs bg-yellow-200 text-yellow-800 px-3 py-1 rounded-full">Computer Vision</span>
                 <span className="text-xs bg-yellow-200 text-yellow-800 px-3 py-1 rounded-full">SLAM</span>
                 <span className="text-xs bg-yellow-200 text-yellow-800 px-3 py-1 rounded-full">Control Systems</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-16 px-4">
        <div className="max-w-4xl mx-auto text-center">
                     <h2 className="text-4xl md:text-5xl font-extralight text-gray-800 dark:text-gray-200 mb-8">
             Ready to <span className="text-yellow-600 dark:text-yellow-400">Partner</span>?
           </h2>
          <p className="text-xl font-light text-gray-600 dark:text-gray-400 mb-8 max-w-2xl mx-auto">
            Let's discuss how your organization can support the future of robotics innovation while gaining valuable benefits.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
                         <a 
               href="mailto:turtlerobotics@gmail.com?subject=Partnership%20Discussion&body=Hello,%20I'd%20like%20to%20discuss%20how%20our%20organization%20can%20support%20TURTLE%20Robotics%20innovation%20while%20gaining%20valuable%20benefits.%20Please%20contact%20me%20to%20schedule%20a%20discussion."
               className="bg-gradient-to-r from-yellow-500 to-amber-500 text-white px-8 py-4 rounded-xl font-medium hover:scale-105 transition-all duration-300 shadow-lg"
             >
               Contact Our Team
             </a>
            <a 
              href="mailto:turtle.robotics@tamu.edu"
              className="border-2 border-yellow-500 text-yellow-600 dark:text-yellow-400 px-8 py-4 rounded-xl font-medium hover:bg-yellow-500 hover:text-white transition-all duration-300"
            >
              Email Us
            </a>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Sponsorship 
