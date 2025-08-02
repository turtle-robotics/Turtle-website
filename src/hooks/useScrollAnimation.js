import { useEffect, useRef } from 'react'
import { gsap } from 'gsap'

export const useScrollAnimation = (options = {}) => {
  const elementRef = useRef(null)
  const {
    trigger = "top 80%",
    end = "bottom 20%",
    toggleActions = "play none none reverse",
    y = 50,
    opacity = 0,
    duration = 1,
    ease = "power3.out",
    stagger = 0
  } = options

  useEffect(() => {
    const element = elementRef.current
    if (!element) return

    const targets = element.querySelectorAll('[data-animate]') || [element]

    gsap.fromTo(targets,
      { y, opacity },
      { 
        y: 0, 
        opacity: 1, 
        duration, 
        stagger, 
        ease,
        scrollTrigger: {
          trigger: element,
          start: trigger,
          end,
          toggleActions
        }
      }
    )

    return () => {
      // Cleanup ScrollTrigger
      gsap.killTweensOf(targets)
    }
  }, [trigger, end, toggleActions, y, opacity, duration, ease, stagger])

  return elementRef
} 