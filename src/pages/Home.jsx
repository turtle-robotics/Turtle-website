/**
 * Home Page Component
 *
 * Landing page featuring:
 * - Animated hero section with title and CTA buttons
 * - Impact statistics cards (students, projects, competitions, institutions)
 * - Scrolling project showcase ticker
 * - Sponsor logo ticker
 * - Quick navigation cards to key sections
 */
import { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import { gsap } from "gsap";
import SponsorTicker from "../components/SponsorTicker";
import ProjectTicker from "../components/ProjectTicker";
import { projects } from "../data/projects";

// Feature flag for showcase popup functionality
const ENABLE_SHOWCASE_POPUPS = false;

const Home = () => {
  const heroRef = useRef(null);
  const cardsRef = useRef(null);
  const [showMobilePopup, setShowMobilePopup] = useState(true);

  /**
   * Hero section entrance animations
   * Uses GSAP to stagger-animate title, subtitle, and CTA buttons
   * Deferred with requestAnimationFrame to avoid layout thrashing
   */
  useEffect(() => {
    const hero = heroRef.current;
    if (!hero) return;

    // Defer animations to let browser finish initial render and layout
    const animationTimeout = requestAnimationFrame(() => {
      // Animate title words (TURTLE, ROBOTICS)
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

      // Animate subtitle text
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

      // Animate CTA buttons
      gsap.fromTo(
        hero.querySelectorAll(".hero-button"),
        { y: 30, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.8,
          stagger: 0.2,
          delay: 1.2,
          ease: "power3.out",
        },
      );
    });

    return () => cancelAnimationFrame(animationTimeout);
  }, []);

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section
        ref={heroRef}
        className="relative min-h-screen flex items-center justify-center px-4"
      >
        <div className="absolute inset-0 bg-background"></div>
        <div className="absolute inset-0 bg-gradient-to-br from-gray-50 via-white to-gray-100 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900"></div>
        <div className="relative text-center max-w-6xl mx-auto z-10">
          <div className="glass-card p-16 rounded-3xl">
            <h1 className="text-6xl md:text-8xl lg:text-9xl font-extralight tracking-tight text-text mb-8">
              <span className="block">TURTLE</span>
              <span className="block text-accent">ROBOTICS</span>
            </h1>

            <p className="hero-subtitle text-xl md:text-2xl font-light tracking-wide text-muted mb-12 max-w-3xl mx-auto">
              Pioneering robotics solutions and student leadership development
              at Texas A&M University
            </p>

            <div className="flex flex-col sm:flex-row gap-6 justify-center items-center relative z-50">
              <Link
                to="/projects"
                className="inline-flex bg-gradient-turtle text-gradient-foreground px-10 py-5 rounded-xl font-normal tracking-wide hover:scale-105 transition-transform duration-300"
              >
                EXPLORE PROJECTS
              </Link>
              <Link
                to="/about"
                className="inline-flex glass-card text-accent px-10 py-5 rounded-xl font-normal tracking-wide hover:scale-105 transition-transform duration-300 bg-surface"
              >
                LEARN MORE
              </Link>
            </div>
          </div>
        </div>

        {/* Project Ticker - positioned at bottom */}
        <div className="absolute bottom-0 left-0 right-0 z-10">
          <ProjectTicker projects={projects} />
        </div>
      </section>

      {/* About Section */}
      <section className="py-24 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-extralight text-center mb-20 text-text">
            ABOUT <span className="text-accent">TURTLE</span>
          </h2>

          <div ref={cardsRef} className="grid md:grid-cols-3 gap-8 mb-16">
            <glassify
              frequency="0.01"
              octaves="3"
              scale="45"
              blur="3"
              brightness="1.4"
            >
              <div className="glass-card p-10 rounded-2xl text-center transition-shadow duration-300 h-full flex flex-col">
                <div className="text-5xl mb-6">🎓</div>
                <h3 className="text-xl font-light mb-4 text-text">
                  Student Leadership
                </h3>
                <p className="text-muted font-light leading-relaxed flex-grow">
                  Developing the next generation of robotics leaders through
                  hands-on experience and mentorship.
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
              <div className="glass-card p-10 rounded-2xl text-center transition-shadow duration-300 h-full flex flex-col">
                <div className="text-5xl mb-6">🔬</div>
                <h3 className="text-xl font-light mb-4 text-text">
                  Research Excellence
                </h3>
                <p className="text-muted font-light leading-relaxed flex-grow">
                  Cutting-edge robotics research across multiple domains and
                  applications.
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
              <div className="glass-card p-10 rounded-2xl text-center transition-shadow duration-300 h-full flex flex-col">
                <div className="text-5xl mb-6">🏆</div>
                <h3 className="text-xl font-light mb-4 text-text">
                  Competition Success
                </h3>
                <p className="text-muted font-light leading-relaxed flex-grow">
                  Competing and winning in prestigious robotics competitions.
                </p>
              </div>
            </glassify>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-24 px-4 bg-background">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-extralight mb-12 text-text">
            READY TO <span className="text-accent">JOIN US</span>
          </h2>

          <a
            href="https://forms.gle/8md4HbE4LCMRBf6UA"
            className="inline-block bg-gradient-turtle text-gradient-foreground px-16 py-6 rounded-xl text-xl font-light tracking-wide hover:scale-105 transition-transform duration-300 shadow-premium"
          >
            APPLY NOW
          </a>
        </div>
      </section>

      {/* Showcase Popup - Mobile */}
      {ENABLE_SHOWCASE_POPUPS && showMobilePopup && (
        <div className="md:hidden fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4">
          <div className="relative bg-gradient-to-br from-surface to-background p-8 rounded-2xl shadow-2xl border-2 border-accent max-w-sm w-full">
            <button
              onClick={(e) => {
                e.preventDefault();
                e.stopPropagation();
                setShowMobilePopup(false);
              }}
              className="absolute top-4 right-4 w-8 h-8 bg-text text-background rounded-full flex items-center justify-center hover:opacity-80 transition-opacity shadow-lg text-xl font-light"
              aria-label="Close"
            >
              ×
            </button>

            <a
              href="/showcase"
              className="block text-center"
              onClick={() => setShowMobilePopup(false)}
            >
              <div className="mx-auto mb-4 w-8 h-8 bg-accent rounded-full shadow-md"></div>
              <div className="text-sm font-bold text-accent mb-3 uppercase tracking-wide">
                📌 Don't Miss This Event!
              </div>
              <div className="text-4xl font-extralight text-text mb-4 leading-tight">
                TURTLE Showcase
              </div>
              <div className="text-xl font-light text-muted mb-2">
                November 21, 2025
              </div>
              <div className="text-xl font-light text-muted mb-2">
                1:00 PM - 5:00 PM
              </div>
              <div className="text-base font-light text-muted mb-6">
                Zachry Engineering Building
                <br />
                Virginia C Brown Atrium
              </div>
              <div className="bg-gradient-turtle text-gradient-foreground px-8 py-3 rounded-xl font-light tracking-wide inline-block">
                Learn More →
              </div>
            </a>
          </div>
        </div>
      )}

      {/* Showcase Popup - Desktop */}
      {ENABLE_SHOWCASE_POPUPS && (
        <a
          href="/showcase"
          className="hidden md:block fixed bottom-8 right-8 z-40 group"
        >
          <div className="relative bg-gradient-to-br from-surface to-background p-6 rounded-xl shadow-xl transition-shadow duration-300 rotate-2 w-64 border-2 border-accent">
            <div className="absolute -top-3 left-1/2 transform -translate-x-1/2 w-7 h-7 bg-accent rounded-full shadow-md"></div>
            <div className="text-xs font-bold text-accent mb-2 uppercase tracking-wide">
              📌 Don't Miss!
            </div>
            <div className="text-2xl font-extralight text-text mb-2">
              TURTLE Showcase
            </div>
            <div className="text-base font-light text-muted mb-1">
              November 21, 2025
            </div>
            <div className="text-base font-light text-muted mb-3">
              1:00-5:00 PM
            </div>
            <div className="text-xs text-accent underline group-hover:brightness-110 font-medium">
              Click for more info →
            </div>
          </div>
        </a>
      )}
    </div>
  );
};

export default Home;
