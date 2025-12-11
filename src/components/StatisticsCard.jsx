/**
 * StatisticsCard Component
 *
 * Displays a statistic with animated counter that triggers on scroll.
 * Features glass morphism design with hover effects.
 *
 * @param {number} count - The final count value to animate to
 * @param {string} label - Title text for the statistic
 * @param {string} description - Descriptive text explaining the statistic
 */
import { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";

const StatisticsCard = ({ count, label, description }) => {
  const cardRef = useRef(null);
  const counterRef = useRef(null);
  const [displayCount, setDisplayCount] = useState(0);

  useEffect(() => {
    const card = cardRef.current;
    const counter = counterRef.current;
    if (!card || !counter) return;

    // Animate card entrance with fade and slide up
    gsap.fromTo(
      card,
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
          toggleActions: "play none none reverse",
        },
      },
    );

    // Animated counter
    gsap.to(
      {},
      {
        duration: 1,
        onUpdate: function () {
          const progress = this.progress();
          const currentCount = Math.floor(count * progress);
          setDisplayCount(currentCount);
        },
        scrollTrigger: {
          trigger: card,
          start: "top 80%",
          end: "bottom 20%",
          toggleActions: "play none none reverse",
        },
      },
    );
  }, [count]);

  return (
    <div
      ref={cardRef}
      className="group relative p-10 rounded-2xl glass-card duration-300"
    >
      <div className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-gradient-to-br from-accent/5 to-transparent" />

      {/* Content */}
      <div className="relative z-10">
        <div
          className="text-5xl font-extralight text-accent mb-6"
          ref={counterRef}
        >
          {displayCount}+
        </div>
        <h3 className="text-xl font-light text-text mb-3">{label}</h3>
        <p className="text-sm font-light text-muted leading-relaxed">
          {description}
        </p>
      </div>
    </div>
  );
};

export default StatisticsCard;
