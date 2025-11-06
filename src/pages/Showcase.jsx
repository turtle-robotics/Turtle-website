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
    <div className="min-h-screen pt-20 flex items-center justify-center">
      {/* Hero Section */}
      <section className="showcase-hero px-6 py-20 text-center max-w-5xl mx-auto">
        <h1 className="text-8xl md:text-9xl font-extralight tracking-tight mb-6 text-gray-800 dark:text-gray-200">
          Showcase
        </h1>
        <p className="text-3xl md:text-4xl font-light text-yellow-600 dark:text-yellow-400 mb-12">
          November 21, 2025 • 1:00 PM
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
          Join us for an exciting showcase of our latest robotics projects and innovations
        </p>

        <div className="mt-12">
          <p className="text-2xl font-light text-gray-600 dark:text-gray-400">
            More details coming soon...
          </p>
        </div>
      </section>
    </div>
  );
}

export default Showcase;