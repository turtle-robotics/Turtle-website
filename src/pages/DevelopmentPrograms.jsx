import React, { useEffect, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import { gsap } from 'gsap';

const DevelopmentPrograms = () => {
  const navigate = useNavigate();
  const heroRef = useRef(null);

  useEffect(() => {
    const hero = heroRef.current;
    if (!hero) return;

    gsap.fromTo(
      hero.querySelectorAll('h1 span'),
      { y: 100, opacity: 0 },
      { y: 0, opacity: 1, duration: 1.2, stagger: 0.2, ease: 'power3.out' }
    );

    gsap.fromTo(
      hero.querySelector('.hero-subtitle'),
      { y: 50, opacity: 0 },
      { y: 0, opacity: 1, duration: 1, delay: 0.8, ease: 'power3.out' }
    );
  }, []);

  const programs = [
    {
      id: 'hatchling',
      title: 'Hatchling',
      tagline: 'Hatchling',
      year: 'Founded 2015',
      description: 'Our premier development program that introduces foundational technical, soft, and engineering skills.',
      link: '/hatchling',
      image: '/assets/hatchling_development.JPG'
    },
    {
      id: 'workshop-series',
      title: 'Workshop Series',
      tagline: 'Workship Series',
      year: 'Coming Soon',
      description: 'A platform for members to gain presentation experience and learn new technical and leadership skills',
      link: '/workshop-series',
      image: '/assets/Workshop_Photo.jpg'
    }
  ];

  return (
    <div className="min-h-screen relative">
      {/* Sticky Tab Bar */}
      <div className="fixed top-20 left-0 right-0 z-40 bg-gray-900/90 backdrop-blur-xl border-b border-gray-700/50 shadow-lg">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-center gap-4 py-4">
            {programs.map((program) => (
              <button
                key={program.id}
                onClick={() => navigate(program.link)}
                className="px-6 py-2 rounded-lg text-sm font-light tracking-wide transition-all duration-300 bg-gray-800/50 hover:bg-gray-700 text-gray-300 hover:text-yellow-400 border border-gray-700 hover:border-yellow-400/50"
              >
                {program.title}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Hero Section */}
      <section ref={heroRef} className="relative min-h-screen flex items-center justify-center px-4 pt-20">
        <div className="absolute inset-0 bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900"></div>
        <div className="relative text-center max-w-6xl mx-auto z-10">
          <h1 className="text-6xl md:text-8xl lg:text-9xl font-extralight tracking-tight text-gray-200 mb-8">
            <span className="block">DEVELOPMENT</span>
            <span className="block text-yellow-400">PROGRAMS</span>
          </h1>
          <p className="hero-subtitle text-xl md:text-2xl font-light tracking-wide text-gray-400 mb-12 max-w-3xl mx-auto">
            To provide the resources and environment that enables undergraduate engineers to grow outside the classroom through technical lectures and collaborative, hands-on semester projects
          </p>
        </div>
      </section>

      {/* Program Sections */}
      {programs.map((program, index) => (
        <section
          key={program.id}
          className="py-24 px-4 bg-gradient-to-br from-gray-800 to-gray-900"
        >
          <div className="max-w-7xl mx-auto">
            {/* Section Title */}
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-extralight text-center mb-12 text-gray-200">
              {program.title.toUpperCase()}
            </h2>

            {/* Large Glass Card */}
            <div className="relative h-[600px] rounded-3xl overflow-hidden shadow-2xl">
              {/* Background Image */}
              <div 
                className="absolute inset-0 bg-cover bg-center"
                style={{ backgroundImage: `url(${program.image})` }}
              />

              {/* Glass Overlay Content */}
              <div className="absolute inset-0 flex items-end p-8 md:p-12">
                <div className="backdrop-blur-xl bg-white/10 dark:bg-gray-900/30 border border-white/20 dark:border-gray-700/50 rounded-2xl p-8 md:p-10 w-full max-w-2xl">
                  <p className="text-xs font-light tracking-widest text-yellow-400 mb-3 uppercase">
                    {program.year}
                  </p>
                  
                  <h3 className="text-4xl md:text-5xl font-extralight text-white mb-3">
                    {program.tagline}
                  </h3>
                  
                  <p className="text-base md:text-lg font-light text-white/90 mb-6">
                    {program.description}
                  </p>
                  
                  <button
                    onClick={() => navigate(program.link)}
                    className="bg-yellow-400 hover:bg-yellow-500 text-gray-900 font-light py-3 px-8 rounded-lg transition-all duration-300 hover:shadow-xl"
                  >
                    Learn More
                  </button>
                </div>
              </div>
            </div>
          </div>
        </section>
      ))}

      {/* Call to Action Section */}
      <section className="py-24 px-4 bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-5xl md:text-7xl font-extralight text-gray-200 mb-6">
            Ready to Start Your <span className="text-yellow-400">Journey?</span>
          </h2>
          <p className="text-xl font-light text-gray-400 mb-12 max-w-2xl mx-auto">
            Join TURTLE and gain the skills needed to excel in robotics
          </p>
          <button
            onClick={() => navigate('/apply')}
            className="bg-yellow-400 hover:bg-yellow-500 text-gray-900 font-light py-4 px-12 rounded-lg transition-all duration-300 hover:shadow-xl text-lg"
          >
            Apply Now
          </button>
        </div>
      </section>
    </div>
  );
};

export default DevelopmentPrograms;