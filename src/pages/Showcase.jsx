import { useEffect, useState } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

function Showcase() {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0
  });

  useEffect(() => {
    // Hero animation
    gsap.fromTo(
      '.showcase-hero',
      { opacity: 0, y: 50 },
      { opacity: 1, y: 0, duration: 1, ease: 'power3.out' }
    );

    // Countdown timer
    const showcaseDate = new Date('2025-11-21T13:00:00').getTime();

    const updateCountdown = () => {
      const now = new Date().getTime();
      const distance = showcaseDate - now;

      if (distance > 0) {
        setTimeLeft({
          days: Math.floor(distance / (1000 * 60 * 60 * 24)),
          hours: Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
          minutes: Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60)),
          seconds: Math.floor((distance % (1000 * 60)) / 1000)
        });
      } else {
        setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0 });
      }
    };

    updateCountdown();
    const interval = setInterval(updateCountdown, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="min-h-screen pt-20">
      {/* Hero Section */}
      <section className="showcase-hero px-6 py-20 text-center max-w-5xl mx-auto">
        <h1 className="text-8xl md:text-9xl font-extralight tracking-tight mb-6 text-gray-800 dark:text-gray-200">
          TURTLE Showcase
        </h1>
        <p className="text-3xl md:text-4xl font-light text-yellow-600 dark:text-yellow-400 mb-4">
          November 21, 2025
        </p>
        <p className="text-2xl md:text-3xl font-light text-gray-600 dark:text-gray-400 mb-4">
          1:00 PM - 5:00 PM
        </p>
        <p className="text-xl md:text-2xl font-light text-gray-600 dark:text-gray-400 mb-12 flex items-center justify-center gap-2">
          <svg className="w-6 h-6 text-yellow-600 dark:text-yellow-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
          </svg>
          <a 
            href="https://maps.app.goo.gl/r3EgEtRvYB727rX6A"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-yellow-600 dark:hover:text-yellow-400 transition-colors underline decoration-red-900 dark:decoration-yellow-400"
          >
            Zachry Engineering Education Complex, Virginia C Brown Atrium
          </a>
        </p>
                
        {/* Countdown Timer */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-3xl mx-auto mb-12">
          <div className="bg-white/50 dark:bg-gray-800/50 backdrop-blur-lg rounded-2xl p-6 border border-gray-200 dark:border-gray-700 shadow-lg">
            <div className="text-5xl md:text-6xl font-extralight text-yellow-600 dark:text-yellow-400 mb-2">
              {timeLeft.days}
            </div>
            <div className="text-sm font-light text-gray-600 dark:text-gray-400 uppercase tracking-wide">
              Days
            </div>
          </div>
          
          <div className="bg-white/50 dark:bg-gray-800/50 backdrop-blur-lg rounded-2xl p-6 border border-gray-200 dark:border-gray-700 shadow-lg">
            <div className="text-5xl md:text-6xl font-extralight text-yellow-600 dark:text-yellow-400 mb-2">
              {timeLeft.hours}
            </div>
            <div className="text-sm font-light text-gray-600 dark:text-gray-400 uppercase tracking-wide">
              Hours
            </div>
          </div>
          
          <div className="bg-white/50 dark:bg-gray-800/50 backdrop-blur-lg rounded-2xl p-6 border border-gray-200 dark:border-gray-700 shadow-lg">
            <div className="text-5xl md:text-6xl font-extralight text-yellow-600 dark:text-yellow-400 mb-2">
              {timeLeft.minutes}
            </div>
            <div className="text-sm font-light text-gray-600 dark:text-gray-400 uppercase tracking-wide">
              Minutes
            </div>
          </div>
          
          <div className="bg-white/50 dark:bg-gray-800/50 backdrop-blur-lg rounded-2xl p-6 border border-gray-200 dark:border-gray-700 shadow-lg">
            <div className="text-5xl md:text-6xl font-extralight text-yellow-600 dark:text-yellow-400 mb-2">
              {timeLeft.seconds}
            </div>
            <div className="text-sm font-light text-gray-600 dark:text-gray-400 uppercase tracking-wide">
              Seconds
            </div>
          </div>
        </div>
        
        <p className="text-xl font-light text-gray-600 dark:text-gray-400 mt-8 max-w-2xl mx-auto">
          The biggest TURTLE event of the semester is right around the corner! Join us to see the amazing robotics projects our teams have accomplished this semester!
        </p>
      </section>

      {/* Q&A Section */}
      <section className="py-16 px-4 bg-white dark:bg-gray-800">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-extralight text-center mb-12 text-gray-800 dark:text-gray-200">
            Frequently Asked <span className="text-yellow-600 dark:text-yellow-400">Questions</span>
          </h2>
          
          <div className="space-y-4">
            {/* Q1 */}
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

            {/* Q2 */}
            <details className="group bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-700 dark:to-gray-600 rounded-2xl p-6 cursor-pointer">
              <summary className="flex justify-between items-center font-light text-xl text-gray-800 dark:text-gray-200 list-none">
                <span>What do I wear?</span>
                <span className="transition group-open:rotate-180">
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </span>
              </summary>
              <p className="mt-4 text-gray-600 dark:text-gray-400 font-light leading-relaxed">
                We recommend business casual attire and TURTLE apparel if you have it, but we understand that it is during the school day, so it is not strictly required.
              </p>
            </details>

            {/* Q3 */}
            <details className="group bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-700 dark:to-gray-600 rounded-2xl p-6 cursor-pointer">
              <summary className="flex justify-between items-center font-light text-xl text-gray-800 dark:text-gray-200 list-none">
                <span>Who goes to Project Showcase?</span>
                <span className="transition group-open:rotate-180">
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </span>
              </summary>
              <p className="mt-4 text-gray-600 dark:text-gray-400 font-light leading-relaxed">
                You! All TURTLE members are encouraged to attend Project Showcase. In addition, we invite professors and industry to come see and encourage you to invite your favorite professors and your friends who are interested in robotics.
              </p>
            </details>

            {/* Q4 */}
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
          </div>
        </div>
      </section>
    </div>
  );
}

export default Showcase;