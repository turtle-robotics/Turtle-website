/**
 * Apply Page Component
 *
 * Application portal for joining TURTLE Robotics projects.
 * Features:
 * - Toggle for opening/closing application periods
 * - Different content for open vs closed application periods
 * - Links to program descriptions (Hatchling, Workshop Series)
 * - Contact form for questions
 * - Information about application requirements and process
 */
import { Link } from "react-router-dom";
import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import ContactForm from "../components/ContactForm";

const Apply = () => {
  const heroRef = useRef(null);

  // Feature flag: Toggle this to open/close application periods
  const applicationsOpen = false; // Set to true when applications are open

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
      hero.querySelector(".hero-subtitle"),
      { y: 50, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        duration: 1,
        delay: 0.8,
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
        <div className="absolute inset-0 bg-primary-2 opacity-40"></div>
        <div className="relative text-center max-w-6xl mx-auto z-10">
          <div className="glass-card p-16 rounded-3xl">
            {applicationsOpen ? (
              <h1 className="text-6xl md:text-8xl lg:text-9xl font-extralight tracking-tight text-secondary-3 mb-8">
                <span className="block">APPLY</span>
                <span className="block text-primary-1">NOW</span>
              </h1>
            ) : (
              <h1 className="text-6xl md:text-8xl lg:text-9xl font-extralight tracking-tight text-primary-1 mb-8">
                <span className="block">APPLICATIONS CLOSED</span>
              </h1>
            )}

            <p className="hero-subtitle text-xl md:text-2xl font-normal tracking-wide text-secondary-2 mb-12 max-w-3xl mx-auto">
              {applicationsOpen
                ? "Fill out this form to join Hatchlings or Advanced Project teams at Turtle Robotics."
                : "Applications are currently closed. Please check back soon for future openings."}
            </p>
          </div>
        </div>
      </section>

      {/* Application Process */}
      <section className="py-24 px-4 bg-background">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-extralight text-center mb-20 text-secondary-3">
            JOIN TURTLE <span className="text-primary-1">ROBOTICS</span>
          </h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            <glassify
              frequency="0.01"
              octaves="3"
              scale="45"
              blur="3"
              brightness="1.4"
            >
              <div className="glass-card p-10 rounded-2xl text-center transition-shadow duration-300 h-full flex flex-col bg-primary-1 border border-secondary-3">
                <div className="text-5xl mb-6">📝</div>
                <h3 className="text-xl font-normal mb-4 text-secondary-5">
                  Submit Application
                </h3>
                <p className="text-primary-2 font-normal leading-relaxed flex-grow">
                  Complete our online application form to join Hatchlings or
                  Advanced Project teams.
                </p>
              </div>
            </glassify>
            <glassify
              frequency="0.01"
              octaves="3"
              scale="45"
              blur="3"
              brightness="1.4"
            >
              <div className="glass-card p-10 rounded-2xl text-center transition-shadow duration-300 h-full flex flex-col bg-primary-1 border border-secondary-3">
                <div className="text-5xl mb-6">🤝</div>
                <h3 className="text-xl font-normal mb-4 text-secondary-5">
                  Open House
                </h3>
                <p className="text-primary-2 font-normal leading-relaxed flex-grow">
                  Meet with our team leaders to discuss your goals and project
                  preferences.
                </p>
              </div>
            </glassify>
            <glassify
              frequency="0.01"
              octaves="3"
              scale="45"
              blur="3"
              brightness="1.4"
            >
              <div className="glass-card p-10 rounded-2xl text-center transition-shadow duration-300 h-full flex flex-col bg-primary-1 border border-secondary-3">
                <div className="text-5xl mb-6">🚀</div>
                <h3 className="text-xl font-normal mb-4 text-secondary-5">
                  Start Contributing
                </h3>
                <p className="text-primary-2 font-normal leading-relaxed flex-grow">
                  Begin working on exciting robotics projects with Turtle
                  Robotics.
                </p>
              </div>
            </glassify>
          </div>
        </div>
      </section>

      {/* Requirements Section */}
      <section className="py-24 px-4 bg-background">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-extralight text-center mb-20 text-secondary-3">
            WHAT WE <span className="text-primary-1">LOOK FOR</span>
          </h2>

          <div className="grid md:grid-cols-2 gap-8">
            {/* Technical Skills Card */}
            <div className="glass-card p-8 rounded-2xl transition-shadow duration-300">
              <div className="flex items-center justify-center gap-4 mb-8">
                <h3 className="text-3xl font-light text-primary-1">
                  Technical Skills
                </h3>
              </div>
              <ul className="space-y-5">
                <li className="flex items-start gap-3 group">
                  <span className="text-primary-1 text-xl mt-0.5 group-hover:scale-125 transition-transform">
                    ✓
                  </span>
                  <span className="text-secondary-2 font-normal text-lg">
                    Programming experience (Python, C++, ROS)
                  </span>
                </li>
                <li className="flex items-start gap-3 group">
                  <span className="text-primary-1 text-xl mt-0.5 group-hover:scale-125 transition-transform">
                    ✓
                  </span>
                  <span className="text-secondary-2 font-normal text-lg">
                    Understanding of robotics fundamentals
                  </span>
                </li>
                <li className="flex items-start gap-3 group">
                  <span className="text-primary-1 text-xl mt-0.5 group-hover:scale-125 transition-transform">
                    ✓
                  </span>
                  <span className="text-secondary-2 font-normal text-lg">
                    Experience with hardware and electronics
                  </span>
                </li>
                <li className="flex items-start gap-3 group">
                  <span className="text-primary-1 text-xl mt-0.5 group-hover:scale-125 transition-transform">
                    ✓
                  </span>
                  <span className="text-secondary-2 font-normal text-lg">
                    Knowledge of control systems and algorithms
                  </span>
                </li>
              </ul>
            </div>

            {/* Personal Qualities Card */}
            <div className="glass-card p-8 rounded-2xl transition-shadow duration-300">
              <div className="flex items-center justify-center gap-4 mb-8">
                <h3 className="text-3xl font-light text-primary-1">
                  Personal Qualities
                </h3>
              </div>
              <ul className="space-y-5">
                <li className="flex items-start gap-3 group">
                  <span className="text-primary-1 text-xl mt-0.5 group-hover:scale-125 transition-transform">
                    ✓
                  </span>
                  <span className="text-secondary-2 font-normal text-lg">
                    Strong problem-solving abilities
                  </span>
                </li>
                <li className="flex items-start gap-3 group">
                  <span className="text-primary-1 text-xl mt-0.5 group-hover:scale-125 transition-transform">
                    ✓
                  </span>
                  <span className="text-secondary-2 font-normal text-lg">
                    Excellent teamwork and communication
                  </span>
                </li>
                <li className="flex items-start gap-3 group">
                  <span className="text-primary-1 text-xl mt-0.5 group-hover:scale-125 transition-transform">
                    ✓
                  </span>
                  <span className="text-secondary-2 font-normal text-lg">
                    Passion for robotics and innovation
                  </span>
                </li>
                <li className="flex items-start gap-3 group">
                  <span className="text-primary-1 text-xl mt-0.5 group-hover:scale-125 transition-transform">
                    ✓
                  </span>
                  <span className="text-secondary-2 font-normal text-lg">
                    Commitment to learning and growth
                  </span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-24 px-4 bg-background">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-extralight mb-12 text-secondary-3">
            READY TO <span className="text-primary-1">JOIN US?</span>
          </h2>

          {applicationsOpen ? (
            <a
              href="https://forms.gle/8md4HbE4LCMRBf6UA"
              className="inline-block bg-gradient-basic text-gradient-foreground px-16 py-6 rounded-xl text-xl font-light tracking-wide hover:scale-105 transition-transform duration-300 shadow-premium"
            >
              APPLY NOW
            </a>
          ) : (
            <div className="inline-block bg-secondary-3 text-secondary-4 px-16 py-6 rounded-xl text-xl font-normal tracking-wide cursor-not-allowed shadow-inner border border-secondary-3">
              APPLICATIONS CLOSED
            </div>
          )}
        </div>
      </section>
    </div>
  );
};

export default Apply;
