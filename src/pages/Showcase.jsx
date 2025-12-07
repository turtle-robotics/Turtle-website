import { useEffect, useState } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import ShowcaseProjectInterestForm from '../components/ShowcaseProjectInterestForm';

gsap.registerPlugin(ScrollTrigger);

const ENABLE_SHOWCASE_COUNTDOWN = false;

function Showcase() {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0
  });
  const [showConfetti, setShowConfetti] = useState(false);

  useEffect(() => {
    gsap.fromTo(
      '.showcase-hero',
      { opacity: 0, y: 50 },
      { opacity: 1, y: 0, duration: 1, ease: 'power3.out' }
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
        showcaseSecond
      );
      const distance = showcaseDate.getTime() - now.getTime();

      if (distance > 0) {
        setTimeLeft({
          days: Math.floor(distance / (1000 * 60 * 60 * 24)),
          hours: Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
          minutes: Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60)),
          seconds: Math.floor((distance % (1000 * 60)) / 1000)
        });
        setShowConfetti(false);
      } else {
        setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0 });
        setShowConfetti(true);
      }
    };

    updateCountdown();
    const interval = setInterval(updateCountdown, 1000);

    return () => clearInterval(interval);
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
                backgroundColor: ['#fbbf24', '#ef4444', '#3b82f6', '#10b981', '#8b5cf6'][Math.floor(Math.random() * 5)]
              }}
            />
          ))}
        </div>
      )}

      {/* BACKGROUND SECTION WRAPPER */}
      <div
        className="relative w-full aspect-[5/4] bg-contain bg-top bg-no-repeat flex items-center justify-center"
        style={{
          backgroundImage: "url('/assets/turtlerobotcollage.png')",
        }}
      >
        {/* Stronger gradient overlay for better readability */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-black/60 pointer-events-none rounded-3xl"></div>

        <section className="
          showcase-hero 
          relative
          px-6 py-8 md:py-12 
          text-center 
          w-[90%] sm:w-[80%] md:w-[65%] lg:w-[55%] 
          mx-auto
        ">

          {/* Title with text shadow for better readability */}
          <h1 className="text-6xl sm:text-7xl md:text-8xl lg:text-9xl font-extralight tracking-tight mb-6 text-white drop-shadow-[0_4px_12px_rgba(0,0,0,0.8)]">
            TURTLE Showcase
          </h1>

          {ENABLE_SHOWCASE_COUNTDOWN ? (
            <>
              {/* Date with better contrast */}
              <p className="inline-block text-2xl sm:text-3xl md:text-4xl font-light text-yellow-400 mb-4 px-3 py-1 bg-black/70 rounded-lg drop-shadow-lg">
                November 21, 2025
              </p>

              {/* Time with text shadow */}
              <p className="text-xl sm:text-2xl md:text-3xl font-light text-white mb-4 drop-shadow-[0_2px_8px_rgba(0,0,0,0.9)]">
                1:00 PM - 5:00 PM
              </p>

              {/* Location with better contrast */}
              <p className="inline-flex items-center justify-center text-lg sm:text-xl md:text-2xl font-light text-yellow-400 mb-10 px-3 py-1 bg-black/70 rounded-lg mx-auto gap-2 drop-shadow-lg">
                <svg className="w-5 h-5 text-yellow-400 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
                <a 
                  href="https://maps.app.goo.gl/r3EgEtRvYB727rX6A"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-yellow-300 transition-colors underline decoration-yellow-400"
                >
                  Zachry Engineering Education Complex, Virginia C Brown Atrium
                </a>
              </p>

              {/* Countdown with better mobile handling */}
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 sm:gap-4 md:gap-6 max-w-3xl mx-auto mb-8">
                {['Days', 'Hours', 'Minutes', 'Seconds'].map((label, index) => (
                  <div key={label} className="bg-black/60 backdrop-blur-sm rounded-xl sm:rounded-2xl p-3 sm:p-4 md:p-6 border border-yellow-500/30 shadow-2xl">
                    <div className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extralight text-yellow-400 mb-1 sm:mb-2">
                      {String(Object.values(timeLeft)[index]).padStart(2, '0')}
                    </div>
                    <div className="text-xs sm:text-sm font-light text-white uppercase tracking-wide">
                      {label}
                    </div>
                  </div>
                ))}
              </div>
              
              {/* Description with better readability */}
              <p className="text-base sm:text-lg md:text-xl font-light text-white mt-4 max-w-2xl mx-auto drop-shadow-[0_2px_8px_rgba(0,0,0,0.9)] leading-relaxed px-4 py-2 bg-black/40 rounded-lg">
                The biggest TURTLE event of the semester is right around the corner! Join us to see the amazing robotics projects our teams have accomplished this semester!
              </p>
            </>
          ) : (
            <p className="text-3xl sm:text-4xl md:text-5xl font-light text-yellow-400 mb-10 drop-shadow-lg">
              Tune in next semester!
            </p>
          )}
          
        </section>
      </div>

      {/* FAQ SECTION */}
      <section className="py-10 px-4 bg-white dark:bg-gray-800">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-extralight text-center mb-10 text-gray-800 dark:text-gray-200">
            Frequently Asked <span className="text-yellow-600 dark:text-yellow-400">Questions</span>
          </h2>

          <div className="space-y-4">
            <details className="group bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-700 dark:to-gray-600 rounded-2xl p-6 cursor-pointer">
              <summary className="flex justify-between items-center font-light text-xl text-gray-800 dark:text-gray-200 list-none">
                <span>What is Showcase?</span>
                <span className="transition group-open:rotate-180">
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </span>
              </summary>
              <p className="mt-4 text-gray-600 dark:text-gray-400 font-light leading-relaxed">
                Project Showcase is a several hour come-and-go event for presenting what TURTLE has accomplished this semester. At showcase all 21 advanced projects as well as HATCHLING set up tables to present their projects, progress, and plans for the future.
              </p>
            </details>

            <details className="group bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-700 dark:to-gray-600 rounded-2xl p-6 cursor-pointer">
              <summary className="flex justify-between items-center font-light text-xl text-gray-800 dark:text-gray-200 list-none">
                <span>Who is invited to Project Showcase?</span>
                <span className="transition group-open:rotate-180">
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </span>
              </summary>
              <p className="mt-4 text-gray-600 dark:text-gray-400 font-light leading-relaxed">
                Everyone is welcome! Project Showcase is a public event open to all — students, professors, families, friends, and anyone interested in robotics or engineering.
              </p>
            </details>

            {/* FAQ about where showcase location is */}
            {ENABLE_SHOWCASE_COUNTDOWN && (
              <details className="group bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-700 dark:to-gray-600 rounded-2xl p-6 cursor-pointer">
                <summary className="flex justify-between items-center font-light text-xl text-gray-800 dark:text-gray-200 list-none">
                  <span>Where is the Virginia Brown Atrium?</span>
                  <span className="transition group-open:rotate-180">
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                  </span>
                </summary>
                <p className="mt-4 text-gray-600 dark:text-gray-400 font-light leading-relaxed">
                  This is the seating area just inside the first floor Zachry entrance, across from the E-Quad.
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