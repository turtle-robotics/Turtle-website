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
        hours: Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)-10),
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
    <div className="min-h-screen">

      {/* BACKGROUND SECTION WRAPPER */}
      <div
        className="relative w-full aspect-[5/4] bg-contain bg-top bg-no-repeat flex items-center justify-center"
        style={{
          backgroundImage: "url('/assets/turtlegraphicshowcase.png')",
        }}
      >
        {/* Gradient overlay behind text */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-black/10 to-black/30 pointer-events-none rounded-3xl"></div>

        <section className="
          showcase-hero 
          relative
          px-6 py-8 md:py-12 
          text-center 
          w-[90%] sm:w-[80%] md:w-[65%] lg:w-[55%] 
          mx-auto
        ">

          {/* Title */}
          <h1 className="text-8xl md:text-9xl font-extralight tracking-tight mb-6 text-white dark:text-gray-200">
            TURTLE Showcase
          </h1>

         {/* Date with tight white box in light mode */}
<p className="inline-block text-3xl md:text-4xl font-light text-yellow-500 dark:text-yellow-400 mb-4 px-1 py-0.5 bg-white/50 dark:bg-black/30 rounded">
  November 21, 2025
</p>


          {/* Time */}
          <p className="text-2xl md:text-3xl font-light text-white dark:text-gray-400 mb-4">
            1:00 PM - 5:00 PM
          </p>

         {/* Location - tighter box with more opaque background */}
<p className="inline-flex items-center justify-center text-xl md:text-2xl font-light text-yellow-500 dark:text-yellow-400 mb-10 px-1 py-0.5 bg-white/50  dark:bg-black/70 rounded mx-auto gap-1">
  <svg className="w-5 h-5 text-yellow-500 dark:text-yellow-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
  </svg>
  <a 
    href="https://maps.app.goo.gl/r3EgEtRvYB727rX6A"
    target="_blank"
    rel="noopener noreferrer"
    className="hover:text-yellow-400 dark:hover:text-yellow-400 transition-colors underline decoration-yellow-400"
  >
    Zachry Engineering Education Complex, Virginia C Brown Atrium
  </a>
</p>


          {/* Countdown */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-3xl mx-auto mb-8">
            {['Days', 'Hours', 'Minutes', 'Seconds'].map((label, index) => (
              <div key={label} className="bg-white/30 dark:bg-gray-800/30 rounded-2xl p-6 border border-gray-200 dark:border-gray-700 shadow-lg">
                <div className="text-5xl md:text-6xl font-extralight text-yellow-600 dark:text-yellow-400 mb-2">
                  {Object.values(timeLeft)[index]}
                </div>
                <div className="text-sm font-light text-white uppercase tracking-wide">
                  {label}
                </div>
              </div>
            ))}
          </div>

          {/* Description */}
          <p className="text-xl font-light text-white dark:text-white mt-4 max-w-2xl mx-auto">
            The biggest TURTLE event of the semester is right around the corner! Join us to see the amazing robotics projects our teams have accomplished this semester!
          </p>
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
                <span>Who can attend Project Showcase?</span>
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
