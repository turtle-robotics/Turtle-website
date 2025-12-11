/**
 * useScrollAnimation Hook
 *
 * Custom hook for scroll-triggered GSAP animations.
 * Animates elements when they enter the viewport.
 *
 * @param {Object} options - Animation configuration
 * @param {string} options.trigger - ScrollTrigger start position (default: 'top 80%')
 * @param {string} options.end - ScrollTrigger end position (default: 'bottom 20%')
 * @param {string} options.toggleActions - ScrollTrigger actions (default: 'play none none reverse')
 * @param {number} options.y - Initial Y offset (default: 50)
 * @param {number} options.opacity - Initial opacity (default: 0)
 * @param {number} options.duration - Animation duration (default: 1)
 * @param {string} options.ease - GSAP easing function (default: 'power3.out')
 * @param {number} options.stagger - Stagger delay for multiple elements (default: 0)
 * @returns {React.RefObject} Ref to attach to animated element
 *
 * @example
 * const ref = useScrollAnimation({ y: 100, duration: 1.5 });
 * return <div ref={ref}><div data-animate>Content</div></div>;
 */
import { useEffect, useRef } from "react";
import { gsap } from "gsap";

export const useScrollAnimation = (options = {}) => {
  const elementRef = useRef(null);
  const {
    trigger = "top 80%",
    end = "bottom 20%",
    toggleActions = "play none none reverse",
    y = 50,
    opacity = 0,
    duration = 1,
    ease = "power3.out",
    stagger = 0,
  } = options;

  useEffect(() => {
    const element = elementRef.current;
    if (!element) return;

    const targets = element.querySelectorAll("[data-animate]") || [element];

    gsap.fromTo(
      targets,
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
          toggleActions,
        },
      },
    );

    return () => {
      // Cleanup ScrollTrigger
      gsap.killTweensOf(targets);
    };
  }, [trigger, end, toggleActions, y, opacity, duration, ease, stagger]);

  return elementRef;
};
