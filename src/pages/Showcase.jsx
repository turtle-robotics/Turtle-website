/**
 * Showcase Page Component
 *
 * Landing page for the annual TURTLE Robotics project showcase event.
 * Features:
 * - Live countdown to showcase date (toggleable via ENABLE_SHOWCASE_COUNTDOWN)
 * - Event details (date, time, location)
 * - What to expect at the showcase
 * - Interest form for RSVPs
 * - Confetti animation when countdown reaches zero
 * - Event highlights and past showcase information
 */
import { useEffect, useMemo, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import ShowcaseProjectInterestForm from "../components/ShowcaseProjectInterestForm";

gsap.registerPlugin(ScrollTrigger);

// Feature flag: Toggle countdown display
const ENABLE_SHOWCASE_COUNTDOWN = false;

const getCssVar = (name, fallback) => {
  if (typeof window === "undefined") return fallback;
  const value = getComputedStyle(document.documentElement).getPropertyValue(
    name,
  );
  return value?.trim() || fallback;
};

function Showcase() {
  // Countdown state
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });
  const [showConfetti, setShowConfetti] = useState(false);

  // Pull confetti colors from the active palette so theme changes apply automatically
  const confettiColors = useMemo(
    () => [
      getCssVar("--color-accent", "#fbbf24"),
      getCssVar("--color-secondary", "#ef4444"),
      getCssVar("--color-gradient-start", "#3b82f6"),
      getCssVar("--color-gradient-end", "#10b981"),
      getCssVar("--color-text", "#8b5cf6"),
    ],
    [],
  );

  useEffect(() => {
    gsap.fromTo(
      ".showcase-hero h1",
      { opacity: 0, y: 50 },
      { opacity: 1, y: 0, duration: 1, ease: "power3.out" },
    );

    // Local time: Nov 21, 2025 at 1 PM
    const showcaseYear = 2025;
    const showcaseMonth = 10; // November (0-indexed)
    const showcaseDay = 21;
    const showcaseHour = 13;
    const showcaseMinute = 0;
    const showcaseSecond = 0;

    const updateCountdown = () => {
      const now = new Date();
      const showcaseDate = new Date(
        showcaseYear,
        showcaseMonth,
        showcaseDay,
        showcaseHour,
        showcaseMinute,
        showcaseSecond,
      );
      const distance = showcaseDate.getTime() - now.getTime();

      if (distance > 0) {
        setTimeLeft({
          days: Math.floor(distance / (1000 * 60 * 60 * 24)),
          hours: Math.floor(
            (distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60),
          ),
          minutes: Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60)),
          seconds: Math.floor((distance % (1000 * 60)) / 1000),
        });
        setShowConfetti(false);
      } else {
        setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0 });
        setShowConfetti(true);
      }
    };

    updateCountdown();
    const interval = setInterval(updateCountdown, 1000);

    return () => {
      clearInterval(interval);
    };
  }, []);

  return (
    <div className="min-h-screen">
      {/* Confetti Effect */}
      {ENABLE_SHOWCASE_COUNTDOWN && showConfetti && (
        <div className="fixed inset-0 pointer-events-none z-50 overflow-hidden">
          {[...Array(100)].map((_, i) => (
            <div
              key={i}
              className="confetti"
              style={{
                left: `${Math.random() * 100}%`,
                animationDelay: `${Math.random() * 3}s`,
                animationDuration: `${3 + Math.random() * 2}s`,
                backgroundColor:
                  confettiColors[
                    Math.floor(Math.random() * confettiColors.length)
                  ],
              }}
            />
          ))}
        </div>
      )}

      <div
        className="relative w-full aspect-[5/4] bg-contain bg-top bg-no-repeat flex items-center justify-center"
        style={{
          backgroundImage: "url('/assets/turtlerobotcollage.png')",
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-black/60 pointer-events-none rounded-3xl"></div>

        <section className="showcase-hero relative w-[95%] sm:w-[90%] md:w-[75%] lg:w-[65%] mx-auto">
          <div className="glass-card rounded-3xl p-8 md:p-12 text-center">
            <h1 className="text-6xl sm:text-7xl md:text-8xl lg:text-9xl font-extralight tracking-tight text-secondary-3 mb-8">
              <span className="block">PROJECT</span>
              <span className="block text-primary-1">SHOWCASE</span>
            </h1>

            {ENABLE_SHOWCASE_COUNTDOWN ? (
              <>
                <p className="inline-block text-2xl sm:text-3xl md:text-4xl font-light text-primary-1 mb-4 px-3 py-1 bg-black/70 rounded-lg drop-shadow-lg">
                  November 21, 2025
                </p>

                <p className="text-xl sm:text-2xl md:text-3xl font-normal text-secondary-3 mb-4 drop-shadow-md text-shadow">
                  1:00 PM - 5:00 PM
                </p>

                <p className="inline-flex items-center justify-center text-lg sm:text-xl md:text-2xl font-normal text-primary-1 mb-10 px-3 py-1 bg-black/70 rounded-lg mx-auto gap-2 drop-shadow-lg text-shadow">
                  <svg
                    className="w-5 h-5 text-primary-1 flex-shrink-0"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                    />
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                    />
                  </svg>
                  <a
                    href="https://maps.app.goo.gl/r3EgEtRvYB727rX6A"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-primary-1/80 transition-colors underline decoration-accent"
                  >
                    Zachry Engineering Education Complex, Virginia C Brown
                    Atrium
                  </a>
                </p>

                <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 sm:gap-4 md:gap-6 max-w-3xl mx-auto mb-8">
                  {["Days", "Hours", "Minutes", "Seconds"].map(
                    (label, index) => (
                      <div
                        key={label}
                        className="bg-black/60 backdrop-blur-sm rounded-xl sm:rounded-2xl p-3 sm:p-4 md:p-6 border border-primary-1/30 shadow-lg"
                      >
                        <div className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extralight text-primary-1 mb-1 sm:mb-2">
                          {String(Object.values(timeLeft)[index]).padStart(
                            2,
                            "0",
                          )}
                        </div>
                        <div className="text-xs sm:text-sm font-light text-secondary-3 uppercase tracking-wide">
                          {label}
                        </div>
                      </div>
                    ),
                  )}
                </div>

                <p className="text-base sm:text-lg md:text-xl font-normal text-secondary-3 mt-4 max-w-2xl mx-auto drop-shadow-md leading-relaxed px-4 py-2 bg-black/40 rounded-lg">
                  The biggest TURTLE event of the semester is right around the
                  corner! Join us to see the amazing robotics projects our teams
                  have accomplished this semester!
                </p>
              </>
            ) : (
              <p className="text-3xl sm:text-4xl md:text-5xl font-normal text-secondary-2 mb-10 drop-shadow-lg">
                Tune in next semester!
              </p>
            )}
          </div>
        </section>
      </div>

      {/* FAQ SECTION */}
      <section className="py-10 px-4 bg-background">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-extralight text-center mb-10 text-secondary-3">
            Frequently Asked <span className="text-primary-1">Questions</span>
          </h2>

          <div className="space-y-4">
            <details className="group bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-700 dark:to-gray-600 rounded-2xl p-6 cursor-pointer">
              <summary className="flex justify-between items-center font-light text-xl text-primary-1 list-none">
                <span>What is Showcase?</span>
                <span className="transition group-open:rotate-180">
                  <svg
                    className="w-6 h-6"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M19 9l-7 7-7-7"
                    />
                  </svg>
                </span>
              </summary>
              <p className="mt-4 text-secondary-1 font-light leading-relaxed">
                Project Showcase is a several hour come-and-go event for
                presenting what TURTLE has accomplished this semester. At
                showcase all 21 advanced projects as well as HATCHLING set up
                tables to present their projects, progress, and plans for the
                future.
              </p>
            </details>

            <details className="group bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-700 dark:to-gray-600 rounded-2xl p-6 cursor-pointer">
              <summary className="flex justify-between items-center font-light text-xl text-primary-1 list-none">
                <span>Who is invited to Project Showcase?</span>
                <span className="transition group-open:rotate-180">
                  <svg
                    className="w-6 h-6"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M19 9l-7 7-7-7"
                    />
                  </svg>
                </span>
              </summary>
              <p className="mt-4 text-secondary-1 font-light leading-relaxed">
                Everyone is welcome! Project Showcase is a public event open to
                all — students, professors, families, friends, and anyone
                interested in robotics or engineering.
              </p>
            </details>

            {/* FAQ about where showcase location is */}
            {ENABLE_SHOWCASE_COUNTDOWN && (
              <details className="group bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-700 dark:to-gray-600 rounded-2xl p-6 cursor-pointer">
                <summary className="flex justify-between items-center font-light text-xl text-secondary-3 list-none">
                  <span>Where is the Virginia Brown Atrium?</span>
                  <span className="transition group-open:rotate-180">
                    <svg
                      className="w-6 h-6"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M19 9l-7 7-7-7"
                      />
                    </svg>
                  </span>
                </summary>
                <p className="mt-4 text-secondary-2 font-light leading-relaxed">
                  This is the seating area just inside the first floor Zachry
                  entrance, across from the E-Quad.
                </p>
              </details>
            )}
          </div>
        </div>
      </section>

      {/* SHOWCASE PROJECT INTEREST FORM SECTION */}
      <ShowcaseProjectInterestForm />

      <style jsx>{`
        @keyframes confetti-fall {
          0% {
            transform: translateY(-100vh) rotate(0deg);
            opacity: 1;
          }
          100% {
            transform: translateY(100vh) rotate(720deg);
            opacity: 0;
          }
        }

        .confetti {
          position: absolute;
          width: 10px;
          height: 10px;
          top: -10px;
          animation: confetti-fall linear infinite;
        }
      `}</style>
    </div>
  );
}

export default Showcase;
