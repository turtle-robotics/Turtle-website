import { useEffect, useRef } from "react";
import { gsap } from "gsap";

/**
 * Encapsulates the standard hero section GSAP entrance animations.
 * Animates all `h1 span` children and the `.hero-subtitle` element.
 *
 * @returns {React.RefObject} heroRef – attach to the hero `<section>` element.
 */
export const useHeroAnimation = () => {
  const heroRef = useRef(null);

  useEffect(() => {
    const hero = heroRef.current;
    if (!hero) return;

    gsap.fromTo(
      hero.querySelectorAll("h1 span"),
      { y: 100, opacity: 0 },
      { y: 0, opacity: 1, duration: 1.2, stagger: 0.2, ease: "power3.out" },
    );

    gsap.fromTo(
      hero.querySelector(".hero-subtitle"),
      { y: 50, opacity: 0 },
      { y: 0, opacity: 1, duration: 1, delay: 0.8, ease: "power3.out" },
    );
  }, []);

  return heroRef;
};
