import { Link } from "react-router-dom";
import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import ImageCarousel from "../components/ImageCarousel";

const Hatchling = () => {
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
      }
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
      }
    );

    gsap.fromTo(
      hero.querySelector(".founding-info"),
      { y: 30, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        duration: 1,
        delay: 1.2,
        ease: "power3.out",
      }
    );
  }, []);

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section
        ref={heroRef}
        className="relative min-h-screen flex items-center justify-center px-4 overflow-hidden"
      >
        {/* Background Image */}
        <img
          src="/assets/hatchling.jpg" // 👈 Replace this with your actual image file path
          alt="Hatchling Team"
          className="absolute inset-0 w-full h-full object-cover object-center brightness-90 dark:brightness-75"
        />

        {/* Semi-transparent overlay */}
        <div className="absolute inset-0 bg-black/40 dark:bg-black/50"></div>

        {/* Text + Logo Overlay */}
        <div className="relative text-center z-10 max-w-6xl mx-auto">
          <div className="inline-block bg-[#0b214f]/90 dark:bg-[#132c66]/90 px-12 py-6 rounded-xl shadow-xl">
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-extralight tracking-tight text-white">
              <span className="block">HATCHLING</span>
              <span className="block">DEVELOPMENT</span>
              <span className="block">PROGRAM</span>
            </h1>
          </div>

          <div className="founding-info mt-8">
            <p className="text-lg md:text-xl font-light text-gray-100">
              Founded 2015 • External Expansion 2025
            </p>
          </div>
        </div>
      </section>

      {/* Mission Statement Section */}
      <section className="py-24 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-extralight text-center mb-20 text-gray-800 dark:text-gray-200">
            OUR <span className="text-accent">MISSION</span>
          </h2>

          <div className="glass-card p-12 rounded-2xl text-center">
            <p className="text-xl md:text-2xl font-light text-gray-600 dark:text-gray-400 leading-relaxed max-w-4xl mx-auto">
              Fostering growth in undergraduate engineers by providing the
              tools, support, and real-world experience they need to build
              strong communication, problem-solving, and engineering skills. We
              achieve this through carefully designed technical lectures paired
              with a collaborative, hands-on, semester-long project that
              encourages teamwork and practical application of knowledge.
            </p>
          </div>
        </div>
      </section>

      {/* Trusted Organizations Section */}
      <section className="py-24 px-4 bg-gradient-to-br from-gray-50 to-white dark:from-gray-800 dark:to-gray-900">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-extralight text-center mb-20 text-gray-800 dark:text-gray-200">
            CURRENTLY <span className="text-accent">TRUSTED AT</span>
          </h2>

          <div className="flex flex-col md:flex-row items-center justify-center gap-4 mb-8">
            <div className="glass-card p-8 rounded-2xl text-center hover:scale-105 transition-all duration-300 bg-gradient-to-br from-yellow-400/20 to-amber-400/20 dark:from-yellow-500/20 dark:to-amber-500/20 border-2 border-yellow-400/30 dark:border-yellow-500/30">
              <div className="text-5xl mb-4">🏢</div>
              <h3 className="text-3xl font-light text-gray-800 dark:text-gray-200 mb-2">
                4
              </h3>
              <p className="text-lg font-light text-gray-600 dark:text-gray-400">
                Organizations
              </p>
            </div>

            <div className="text-2xl font-light text-gray-600 dark:text-gray-400">
              across
            </div>

            <div className="glass-card p-8 rounded-2xl text-center hover:scale-105 transition-all duration-300 bg-gradient-to-br from-yellow-400/20 to-amber-400/20 dark:from-yellow-500/20 dark:to-amber-500/20 border-2 border-yellow-400/30 dark:border-yellow-500/30">
              <div className="text-5xl mb-4">🎓</div>
              <h3 className="text-3xl font-light text-gray-800 dark:text-gray-200 mb-2">
                2
              </h3>
              <p className="text-lg font-light text-gray-600 dark:text-gray-400">
                Universities
              </p>
            </div>
          </div>

          <div className="text-center">
            <p className="text-lg font-light text-gray-600 dark:text-gray-400 max-w-3xl mx-auto mb-12">
              Partnering with leading companies, research institutions, and
              academic partners to expand our robotics education program across
              multiple universities and organizations.
            </p>

            {/* Bring Hatchling to Your Organization */}
            <div className="glass-card p-8 rounded-2xl max-w-2xl mx-auto">
              <h3 className="text-2xl font-light text-gray-800 dark:text-gray-200 mb-4">
                Bring the Hatchling Mission to Your Student Organization
              </h3>
              <p className="text-gray-600 dark:text-gray-400 font-light mb-6">
                Interested in expanding robotics education at your university?
                Let's discuss how we can bring the Hatchling program to your
                campus.
              </p>
              <a
                href="mailto:turtlerobotics@gmail.com?subject=Hatchling%20Program%20Inquiry&body=Hello,%20I'm%20interested%20in%20bringing%20the%20Hatchling%20program%20to%20my%20student%20organization.%20Please%20provide%20more%20information%20about%20partnership%20opportunities."
                className="inline-block bg-gradient-to-r from-yellow-500 to-amber-500 text-white px-8 py-3 rounded-xl text-lg font-light tracking-wide hover:scale-105 transition-all duration-300 shadow-lg"
              >
                Inquire Now
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Scrolling Pictures Section */}
      <section className="py-24 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-extralight text-center mb-20 text-gray-800 dark:text-gray-200">
            HATCHLING <span className="text-accent">GALLERY</span>
          </h2>

          <div
            className="rounded-2xl overflow-hidden border border-gray-200/50 dark:border-gray-700/50 glass-card"
            style={{ height: "400px" }}
          >
            <ImageCarousel
              images={[
                "/assets/20250427_202459_BFD66E.JPEG",
                "/assets/20250426_155351.jpg",
                "/assets/image_2025-09-30_002708253.png",
                "/assets/image_2025-09-30_002910095.png",
                "/assets/image_2025-09-30_002458601.png",
              ]}
              autoPlay={true}
              intervalMs={4000}
            />
          </div>
        </div>
      </section>
    </div>
  );
};

export default Hatchling;
