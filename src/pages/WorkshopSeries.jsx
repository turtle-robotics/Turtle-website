import { useEffect, useRef } from "react";
import { gsap } from "gsap";

const WorkshopSeries = () => {
  const heroRef = useRef(null);

  useEffect(() => {
    const hero = heroRef.current;
    if (!hero) return;

    // Hero animations
    gsap.fromTo(
      hero.querySelectorAll("h1 span"),
      { y: 100, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        duration: 1.2,
        stagger: 0.2,
        ease: "power3.out",
      },
    );

    gsap.fromTo(
      hero.querySelector(".launching-text"),
      { y: 50, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        duration: 1,
        delay: 0.8,
        ease: "power3.out",
      },
    );

    gsap.fromTo(
      hero.querySelector(".description"),
      { y: 30, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        duration: 1,
        delay: 1.2,
        ease: "power3.out",
      },
    );
  }, []);

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section
        ref={heroRef}
        className="relative min-h-screen flex items-center justify-center px-4"
      >
        <div className="absolute inset-0 bg-gradient-to-br from-gray-50 via-white to-gray-100 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900"></div>
        <div className="relative text-center max-w-6xl mx-auto z-10">
          <h1 className="text-6xl md:text-8xl lg:text-9xl tracking-tight text-gray-800 dark:text-gray-200 mb-8">
            <span className="block">WORKSHOP</span>
            <span className="block text-accent">SERIES</span>
          </h1>

          <div className="launching-text mb-8">
            <div className="inline-block bg-yellow-500 text-black px-8 py-4 rounded-2xl text-2xl md:text-3xl font-light">
              Launching Fall 2025
            </div>
          </div>

          <p className="description text-xl md:text-2xl font-light tracking-wide text-gray-600 dark:text-gray-400 mb-12 max-w-3xl mx-auto">
            Our upcoming series of intensive robotics workshops designed to
            provide focused, hands-on learning experiences in specific robotics
            domains.
          </p>
        </div>
      </section>

      {/* Coming Soon Section */}
      <section className="py-24 px-4">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl lg:text-6xl mb-20 text-gray-800 dark:text-gray-200">
            COMING <span className="text-accent">SOON</span>
          </h2>

          <div className="glass-card p-16 rounded-2xl max-w-4xl mx-auto">
            <div className="text-8xl mb-8">🚀</div>
            <h3 className="text-3xl font-light text-gray-800 dark:text-gray-200 mb-6">
              Workshop Series in Development
            </h3>
            <p className="text-xl font-light text-gray-600 dark:text-gray-400 leading-relaxed mb-8">
              We're currently designing a comprehensive workshop series that
              will complement our existing Hatchling program. These workshops
              will focus on specialized robotics topics and provide intensive,
              focused learning experiences.
            </p>
            <p className="text-lg font-light text-gray-600 dark:text-gray-400">
              Stay tuned for announcements about workshop topics, schedules, and
              registration details.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-24 px-4 bg-gradient-to-br from-gray-50 to-white dark:from-gray-800 dark:to-gray-900">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl lg:text-6xl mb-12 text-gray-800 dark:text-gray-200">
            GET <span className="text-accent">NOTIFIED</span>
          </h2>

          <p className="text-xl font-light text-gray-600 dark:text-gray-400 mb-12 max-w-2xl mx-auto leading-relaxed">
            Want to be among the first to know when our Workshop Series
            launches? Send us a message and we'll keep you updated.
          </p>

          <a
            href="mailto:turtlerobotics@gmail.com?subject=Workshop%20Series%20Updates&body=Hello,%20I'm%20interested%20in%20receiving%20updates%20about%20the%20Workshop%20Series%20launching%20in%20Fall%202025.%20Please%20add%20me%20to%20your%20notification%20list."
            className="inline-block bg-yellow-500 text-black px-12 py-5 rounded-xl text-lg font-light tracking-wide hover:scale-105 transition-all duration-300 shadow-lg"
          >
            GET UPDATES
          </a>
        </div>
      </section>
    </div>
  );
};

export default WorkshopSeries;
