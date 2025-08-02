import { useEffect, useRef, useState } from 'react'
import { gsap } from 'gsap'

const StatisticsCard = ({ count, label, description }) => {
  const cardRef = useRef(null)
  const counterRef = useRef(null)
  const [displayCount, setDisplayCount] = useState(0)

  useEffect(() => {
    const card = cardRef.current
    const counter = counterRef.current
    if (!card || !counter) return

    // GSAP animation for card entrance
    gsap.fromTo(card,
      { y: 50, opacity: 0 },
      { 
        y: 0, 
        opacity: 1, 
        duration: 1, 
        ease: "power3.out",
        scrollTrigger: {
          trigger: card,
          start: "top 80%",
          end: "bottom 20%",
          toggleActions: "play none none reverse"
        }
      }
    )

    // Animated counter
    gsap.to({}, {
      duration: 2,
      onUpdate: function() {
        const progress = this.progress()
        const currentCount = Math.floor(count * progress)
        setDisplayCount(currentCount)
      },
      scrollTrigger: {
        trigger: card,
        start: "top 80%",
        end: "bottom 20%",
        toggleActions: "play none none reverse"
      }
    })
  }, [count])

  return (
    <div
      ref={cardRef}
      className="group relative p-10 rounded-2xl glass-card border border-gray-200/50 hover:border-accent/30 transition-all duration-300 hover:scale-105 spotlight"
    >
      {/* Spotlight effect */}
      <div className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-gradient-to-br from-accent/5 to-transparent" />
      
      {/* Content */}
      <div className="relative z-10">
        <div className="text-5xl font-extralight text-accent mb-6" ref={counterRef}>
          {displayCount}+
        </div>
        <h3 className="text-xl font-light text-gray-800 mb-3">{label}</h3>
        <p className="text-sm font-light text-gray-600 leading-relaxed">{description}</p>
      </div>
      
      {/* Border glow on hover */}
      <div className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 border border-accent/20 shadow-soft" />
    </div>
  )
}

export default StatisticsCard 