import { Link } from "react-router-dom";
import { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import ImageCarousel from "../components/ImageCarousel";
import ButtonLink from "../components/ButtonLink";

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

    gsap.fromTo(
      hero.querySelector(".founding-info"),
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

  // Check localStorage for slides visibility
  const [slidesVisible, setSlidesVisible] = useState(() => {
    const stored = localStorage.getItem("hatchlingSlidesVisible");
    return stored === null ? true : stored === "true";
  });

  useEffect(() => {
    const handler = () => {
      const stored = localStorage.getItem("hatchlingSlidesVisible");
      setSlidesVisible(stored === null ? true : stored === "true");
    };
    window.addEventListener("storage", handler);
    return () => window.removeEventListener("storage", handler);
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
          src="/assets/GeneralPhotos/Fall_2025_CSTAT_Hatchling_Group_Photo.webp"
          alt="Hatchling Program Background"
          className="absolute inset-0 w-full h-full object-cover object-center brightness-50"
        />

        {/* Overlay for light contrast */}
        <div className="absolute inset-0 bg-black/25"></div>

        {/* Text only — no box */}
        <div className="relative text-center z-10 max-w-6xl mx-auto -translate-y-36">
          <h1 className="text-5xl md:text-7xl lg:text-8xl tracking-tight text-white drop-shadow-2xl">
            <span className="block">HATCHLING</span>
            <span className="block">DEVELOPMENT</span>
            <span className="block text-accent">PROGRAM</span>
          </h1>

          <div className="founding-info mt-8">
            <p className="text-lg md:text-xl font-light text-gray-200 drop-shadow-md">
              Founded 2015 • External Expansion 2025
            </p>
          </div>
        </div>
      </section>

      {/* Mission Statement Section */}
      <section className="py-24 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl md:text-5xl lg:text-6xl text-center mb-20 text-gray-200">
            OUR <span className="text-accent">MISSION</span>
          </h2>

          <div className="glass-card p-12 rounded-2xl text-center">
            <p className="text-xl md:text-2xl font-light text-gray-400 leading-relaxed max-w-4xl mx-auto">
              Founded in the fall of 2015, Hatchling is our premier development
              program that introduces foundational technical, soft, and
              engineering skills
            </p>
          </div>
        </div>
      </section>

      {/* Trusted Organizations Section */}
      <section className="py-24 px-4 bg-gradient-to-br from-gray-800 to-gray-900">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl md:text-5xl lg:text-6xl text-center mb-20 text-gray-200">
            CURRENTLY <span className="text-accent">TRUSTED AT</span>
          </h2>

          <div className="flex flex-col md:flex-row items-center justify-center gap-4 mb-8">
            <div className="glass-card p-8 rounded-2xl text-center transition-all duration-300 bg-gradient-to-br from-yellow-500/20 to-amber-500/20 border-2 border-yellow-500/30">
              <div className="text-5xl mb-4">🏢</div>
              <h3 className="text-3xl font-light text-gray-200 mb-2">3</h3>
              <p className="text-lg font-light text-gray-400">Organizations</p>
            </div>

            <div className="text-2xl font-light text-gray-400">across</div>

            <div className="glass-card p-8 rounded-2xl text-center transition-all duration-300 bg-gradient-to-br from-yellow-500/20 to-amber-500/20 border-2 border-yellow-500/30">
              <div className="text-5xl mb-4">🎓</div>
              <h3 className="text-3xl font-light text-gray-200 mb-2">2</h3>
              <p className="text-lg font-light text-gray-400">Universities</p>
            </div>
          </div>

          <div className="text-center">
            <p className="text-lg font-light text-gray-400 max-w-3xl mx-auto mb-12"></p>

            {/* Bring Hatchling to Your Organization */}
            <div className="glass-card p-8 rounded-2xl max-w-2xl mx-auto">
              <h3 className="text-2xl font-light text-gray-200 mb-4">
                Bring the Hatchling Mission to Your Student Organization
              </h3>
              <p className="text-gray-400 font-light mb-6">
                Interested in expanding robotics education at your university?
                Let's discuss how we can bring the Hatchling program to your
                campus.
              </p>
              <a
                href="mailto:turtlerobotics@gmail.com?subject=Hatchling%20Program%20Inquiry&body=Hello,%20I'm%20interested%20in%20bringing%20the%20Hatchling%20program%20to%20my%20student%20organization.%20Please%20provide%20more%20information%20about%20partnership%20opportunities."
                className="inline-block bg-yellow-500 text-black px-8 py-3 rounded-xl text-lg font-light tracking-wide hover:scale-105 transition-all duration-300 shadow-lg"
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
          <h2 className="text-4xl md:text-5xl lg:text-6xl text-center mb-20 text-gray-200">
            HATCHLING <span className="text-accent">GALLERY</span>
          </h2>

          <div className="rounded-2xl overflow-hidden border border-gray-700/50 glass-card w-full max-w-7xl mx-auto">
            <ImageCarousel
              images={[
                "/assets/20250427_202459_BFD66E.JPEG",
                "/assets/20250426_155351.jpg",
                "/assets/image_2025-09-30_002708253.png",
                "/assets/image_2025-09-30_002910095.png",
                "/assets/image_2025-09-30_002458601.png",
              ]}
              autoPlay={false}
              intervalMs={4000}
              aspectRatio="4/3"
              maxHeight="98vh"
            />
          </div>
        </div>
      </section>

      {/* Learning Objectives and Schedule Section */}
      <section className="py-24 px-4 bg-gradient-to-br from-gray-800 to-gray-900">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl md:text-5xl lg:text-6xl text-center mb-20 text-gray-200">
            LEARNING <span className="text-accent">OBJECTIVES</span> & SCHEDULE
          </h2>

          {/* Learning Objectives - Full Width on Top */}
          <div className="mb-16">
            <h3 className="text-3xl font-light text-gray-200 mb-8 text-center">
              Core Learning Objectives
            </h3>
            <p className="text-lg text-gray-400 text-center mb-8 max-w-4xl mx-auto">
              Hatchlings graduate from the program with a community, passion for
              engineering, and the following skills:
            </p>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="glass-card p-8 rounded-xl">
                <h4 className="text-xl font-light text-accent mb-4">
                  SolidWorks (CAD) Competency
                </h4>
                <ul className="space-y-3 text-gray-400 font-light">
                  <li className="flex items-start">
                    <span className="text-accent mr-3 mt-1">•</span>
                    <span>Design custom parts and modify assemblies</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-accent mr-3 mt-1">•</span>
                    <span>
                      Reading and designing around manufacturing constraints
                    </span>
                  </li>
                </ul>
              </div>

              <div className="glass-card p-8 rounded-xl">
                <h4 className="text-xl font-light text-accent mb-4">
                  Electronics
                </h4>
                <ul className="space-y-3 text-gray-400 font-light">
                  <li className="flex items-start">
                    <span className="text-accent mr-3 mt-1">•</span>
                    <span>
                      Evaluating hardware specifications and datasheets
                    </span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-accent mr-3 mt-1">•</span>
                    <span>Circuit design and implementation</span>
                  </li>
                </ul>
              </div>

              <div className="glass-card p-8 rounded-xl">
                <h4 className="text-xl font-light text-accent mb-4">
                  Programming
                </h4>
                <ul className="space-y-3 text-gray-400 font-light">
                  <li className="flex items-start">
                    <span className="text-accent mr-3 mt-1">•</span>
                    <span>Utilize Git/GitHub</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-accent mr-3 mt-1">•</span>
                    <span>Control hardware via a microcontroller</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-accent mr-3 mt-1">•</span>
                    <span>Python and C++</span>
                  </li>
                </ul>
              </div>

              <div className="glass-card p-8 rounded-xl">
                <h4 className="text-xl font-light text-accent mb-4">
                  Manufacturing
                </h4>
                <ul className="space-y-3 text-gray-400 font-light">
                  <li className="flex items-start">
                    <span className="text-accent mr-3 mt-1">•</span>
                    <span>Soldering and Crimping</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-accent mr-3 mt-1">•</span>
                    <span>Additive manufacturing</span>
                  </li>
                </ul>
              </div>

              <div className="glass-card p-8 rounded-xl">
                <h4 className="text-xl font-light text-accent mb-4">
                  Problem Solving & Critical Thinking
                </h4>
                <ul className="space-y-3 text-gray-400 font-light">
                  <li className="flex items-start">
                    <span className="text-accent mr-3 mt-1">•</span>
                    <span>
                      Teams go through the design process from concept creation
                      to testing
                    </span>
                  </li>
                </ul>
              </div>

              <div className="glass-card p-8 rounded-xl">
                <h4 className="text-xl font-light text-accent mb-4">
                  Community & Passion
                </h4>
                <ul className="space-y-3 text-gray-400 font-light">
                  <li className="flex items-start">
                    <span className="text-accent mr-3 mt-1">•</span>
                    <span>Build lasting connections with fellow engineers</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-accent mr-3 mt-1">•</span>
                    <span>
                      Develop passion for engineering through hands-on
                      experience
                    </span>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          {/* Program Schedule - Horizontal Scrollable Timeline */}
          <div>
            <h3 className="text-3xl font-light text-gray-200 mb-8 text-center">
              10-Week Program Schedule
            </h3>
            <div className="relative">
              {/* Scrollable Timeline Container */}
              <div className="flex gap-4 overflow-x-auto pb-6 custom-scrollbar">
                {/* Week 1 */}
                <div className="glass-card p-6 rounded-xl min-w-[280px] flex-shrink-0">
                  <div className="text-2xl font-light text-accent mb-3">
                    Week 1
                  </div>
                  <h4 className="text-lg font-light text-gray-200 mb-3">
                    Introductions
                  </h4>
                  <ul className="space-y-2 text-sm text-gray-400 font-light">
                    <li>• Learn about Hatchling and learning objectives</li>
                    <li>• Meet the Director team</li>
                    <li>• Meet Hatchling Peers</li>
                    <li>• Install software</li>
                  </ul>
                </div>

                {/* Week 2 */}
                <div className="glass-card p-6 rounded-xl min-w-[280px] flex-shrink-0">
                  <div className="text-2xl font-light text-accent mb-3">
                    Week 2
                  </div>
                  <h4 className="text-lg font-light text-gray-200 mb-3">
                    SolidWorks (CAD) Foundation
                  </h4>
                  <ul className="space-y-2 text-sm text-gray-400 font-light">
                    <li>• What is CAD?</li>
                    <li>• Engineering Drawing navigation</li>
                    <li>• Navigating SolidWorks</li>
                    <li>• Introduce design intent</li>
                  </ul>
                </div>

                {/* Week 3 */}
                <div className="glass-card p-6 rounded-xl min-w-[280px] flex-shrink-0">
                  <div className="text-2xl font-light text-accent mb-3">
                    Week 3
                  </div>
                  <h4 className="text-lg font-light text-gray-200 mb-3">
                    SolidWorks 3D
                  </h4>
                  <ul className="space-y-2 text-sm text-gray-400 font-light">
                    <li>
                      • SolidWorks big 3 features: extrude, revolve, and
                      finishing operations
                    </li>
                    <li>• Origin selection and symmetry</li>
                    <li>• Important tools</li>
                  </ul>
                </div>

                {/* Week 4 */}
                <div className="glass-card p-6 rounded-xl min-w-[280px] flex-shrink-0">
                  <div className="text-2xl font-light text-accent mb-3">
                    Week 4
                  </div>
                  <h4 className="text-lg font-light text-gray-200 mb-3">
                    Tools, Project, and Process
                  </h4>
                  <ul className="space-y-2 text-sm text-gray-400 font-light">
                    <li>• Design Process</li>
                    <li>• Additive Manufacturing with best practices</li>
                    <li>• Tool safety and usage</li>
                    <li>• Available project resources</li>
                    <li className="text-accent font-medium">
                      • Project Milestone: Project Introduction
                    </li>
                  </ul>
                </div>

                {/* Week 5 */}
                <div className="glass-card p-6 rounded-xl min-w-[280px] flex-shrink-0">
                  <div className="text-2xl font-light text-accent mb-3">
                    Week 5
                  </div>
                  <h4 className="text-lg font-light text-gray-200 mb-3">
                    Design Review and C++
                  </h4>
                  <ul className="space-y-2 text-sm text-gray-400 font-light">
                    <li>
                      • Syntax, variables, loops, if-else statements, and
                      classes
                    </li>
                    <li>• Signal processing</li>
                    <li>• Design review</li>
                    <li className="text-accent font-medium">
                      • Project Milestone: Design Review
                    </li>
                  </ul>
                </div>

                {/* Week 6 */}
                <div className="glass-card p-6 rounded-xl min-w-[280px] flex-shrink-0">
                  <div className="text-2xl font-light text-accent mb-3">
                    Week 6
                  </div>
                  <h4 className="text-lg font-light text-gray-200 mb-3">
                    SolidWorks Assembly
                  </h4>
                  <ul className="space-y-2 text-sm text-gray-400 font-light">
                    <li>• Mates</li>
                    <li>• Sub-Assemblies</li>
                    <li>• Component states and configurations</li>
                    <li>• COTS usage</li>
                    <li>• Tolerance vs Clearance</li>
                    <li>• Gear ratios</li>
                  </ul>
                </div>

                {/* Week 7 */}
                <div className="glass-card p-6 rounded-xl min-w-[280px] flex-shrink-0">
                  <div className="text-2xl font-light text-accent mb-3">
                    Week 7
                  </div>
                  <h4 className="text-lg font-light text-gray-200 mb-3">
                    Programming and Git/GitHub
                  </h4>
                  <ul className="space-y-2 text-sm text-gray-400 font-light">
                    <li>• Importance of Git</li>
                    <li>• Git commands and VSCODE integration</li>
                    <li>• Documentation reading for hardware control</li>
                    <li className="text-accent font-medium">
                      • Project Milestone: Assembly Review
                    </li>
                  </ul>
                </div>

                {/* Week 8 */}
                <div className="glass-card p-6 rounded-xl min-w-[280px] flex-shrink-0">
                  <div className="text-2xl font-light text-accent mb-3">
                    Week 8
                  </div>
                  <h4 className="text-lg font-light text-gray-200 mb-3">
                    Electronics and Soldering
                  </h4>
                  <ul className="space-y-2 text-sm text-gray-400 font-light">
                    <li>• Circuit components and terminology</li>
                    <li>• Pulse Width Modulation</li>
                    <li>
                      • Microcontroller (MCU) vs Single-Board Controller (SBC)
                    </li>
                    <li>• Linux</li>
                    <li>• Communication Protocols</li>
                    <li>• Soldering, Crimping and multimeter usage</li>
                    <li>• Documentation navigation</li>
                  </ul>
                </div>

                {/* Week 9 */}
                <div className="glass-card p-6 rounded-xl min-w-[280px] flex-shrink-0">
                  <div className="text-2xl font-light text-accent mb-3">
                    Week 9
                  </div>
                  <h4 className="text-lg font-light text-gray-200 mb-3">
                    Prototype Week
                  </h4>
                  <ul className="space-y-2 text-sm text-gray-400 font-light">
                    <li>• Project work week</li>
                    <li className="text-accent font-medium">
                      • Project Milestone: Prototype Review
                    </li>
                  </ul>
                </div>

                {/* Week 10 */}
                <div className="glass-card p-6 rounded-xl min-w-[280px] flex-shrink-0">
                  <div className="text-2xl font-light text-accent mb-3">
                    Week 10
                  </div>
                  <h4 className="text-lg font-light text-gray-200 mb-3">
                    Build Week
                  </h4>
                  <ul className="space-y-2 text-sm text-gray-400 font-light">
                    <li>• Project work week</li>
                    <li className="text-accent font-medium">
                      • Project Milestone: Build
                    </li>
                  </ul>
                </div>
              </div>

              {/* Scroll Indicator */}
              <div className="text-center mt-4">
                <p className="text-sm text-gray-400">
                  ← Scroll to see all 10 weeks →
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Published Materials Section */}
      <section className="py-24 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl md:text-5xl lg:text-6xl text-center mb-20 text-gray-200">
            PUBLISHED <span className="text-accent">MATERIALS</span>
          </h2>

          {/* Weekly Content PDFs (toggleable) */}
          {slidesVisible && (
            <div className="mb-16">
              <h3 className="text-3xl font-light text-gray-200 mb-8 text-center">
                Weekly Content Materials
              </h3>
              <div className="glass-card p-8 rounded-2xl max-w-2xl mx-auto">
                <div className="text-center mb-6">
                  <div className="text-5xl mb-4">📚</div>
                  <h4 className="text-xl font-light text-gray-200 mb-2">
                    Select Week to Download
                  </h4>
                  <p className="text-gray-400 font-light">
                    Choose a week to download the corresponding content
                    materials
                  </p>
                </div>

                {(() => {
                  const pdfMap = {
                    1: "/pdfs/Hatchling Week 1 - Introduction.pptx.pdf",
                    2: "/pdfs/Hatchling Week 2 - SolidWorks (CAD) Foundation.pptx.pdf",
                    3: "/pdfs/Hatchling Week 3 - SolidWorks 3D.pptx.pdf",
                    4: "/pdfs/Hatchling Week 4 - Tools, Project, and Process.pptx.pdf",
                    5: "/pdfs/Hatchling Week 5 - Design Review and C++.pptx.pdf",
                    6: "/pdfs/Hatchling Week 6 - SolidWorks Assembly.pptx.pdf",
                    7: "/pdfs/Hatchling Week 7 - Programming and Git GitHub.pptx.pdf",
                    8: "/pdfs/Hatchling Week 8 - Electronics and Soldering.pptx.pdf",
                  };

                  return (
                    <div className="flex flex-col sm:flex-row gap-4 items-center justify-center mb-6">
                      <select
                        id="weekSelector"
                        className="glass-card border border-gray-700 px-4 py-3 rounded-lg text-gray-200 bg-gray-800 focus:outline-none focus:ring-2 focus:ring-yellow-500 focus:border-transparent"
                        onChange={(e) => {
                          const selectedWeek = e.target.value;
                          const downloadBtn =
                            document.getElementById("downloadBtn");
                          if (selectedWeek && downloadBtn) {
                            const filePath = pdfMap[selectedWeek];
                            downloadBtn.href = encodeURI(filePath); // 👈 Encodes spaces and '+'
                            downloadBtn.style.display = "inline-block";
                          }
                        }}
                      >
                        <option value="">Select a week...</option>
                        <option value="1">Week 1: Introductions</option>
                        <option value="2">Week 2: SolidWorks Foundation</option>
                      </select>

                      <a
                        id="downloadBtn"
                        href="#"
                        download
                        className="bg-yellow-500 text-black px-6 py-3 rounded-lg text-sm font-light transition-all duration-300 hidden"
                      >
                        Download PDF
                      </a>
                    </div>
                  );
                })()}

                <div className="text-center">
                  <p className="text-sm text-gray-400">
                    Available for weeks 1–8 • Each PDF contains comprehensive
                    content for that week
                  </p>
                </div>
              </div>
            </div>
          )}

          {/* Additional Materials */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="glass-card p-8 rounded-2xl text-center transition-all duration-300">
              <div className="text-5xl mb-6">📝</div>
              <h3 className="text-xl font-light text-gray-200 mb-6">
                Hatchling Syllabus
              </h3>
              <a
                href="/pdfs/Hatchling_Syllabus.pdf"
                download
                className="inline-block bg-yellow-500 text-black px-6 py-3 rounded-lg text-sm font-light  hover:scale-105 transition-all duration-300"
              >
                Download Notes
              </a>
            </div>

            <div className="glass-card p-8 rounded-2xl text-center transition-all duration-300">
              <div className="text-5xl mb-6">🎨</div>
              <h3 className="text-xl font-light text-gray-200 mb-6">
                CAD Examples
              </h3>
              <a
                href="/pdfs/Hatchling CAD Examples.zip"
                download
                className="inline-block bg-yellow-500 text-black px-6 py-3 rounded-lg text-sm font-light  hover:scale-105 transition-all duration-300"
              >
                Download Examples
              </a>
            </div>

            <div className="glass-card p-8 rounded-2xl text-center transition-all duration-300">
              <div className="text-5xl mb-6">⚡</div>
              <h3 className="text-xl font-light text-gray-200 mb-6">
                Project Tips & Controller Resources
              </h3>
              <a
                href="/pdfs/controller-info-code.pdf"
                download
                className="inline-block bg-yellow-500 text-black px-6 py-3 rounded-lg text-sm font-light hover:scale-105 transition-all duration-300"
              >
                Download Guide
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Stats, Impact, and Accolades Section */}
      <section className="py-24 px-4 bg-gradient-to-br from-gray-800 to-gray-900">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl md:text-5xl lg:text-6xl text-center mb-20 text-gray-200">
            STATS & <span className="text-accent">IMPACT</span>
          </h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
            <div className="glass-card p-8 rounded-2xl text-center transition-all duration-300">
              <div className="text-4xl font-light text-accent mb-2">75%</div>
              <div className="text-lg font-light text-gray-200 mb-2">
                Weekly Attendance
              </div>
              <div className="text-sm text-gray-400">
                Through 8 weeks of lecture
              </div>
            </div>

            <div className="glass-card p-8 rounded-2xl text-center transition-all duration-300">
              <div className="text-4xl font-light text-accent mb-2">70%</div>
              <div className="text-lg font-light text-gray-200 mb-2">
                New Engineers
              </div>
              <div className="text-sm text-gray-400">
                70% of members enter without prior robotics experience
              </div>
            </div>

            <div className="glass-card p-8 rounded-2xl text-center transition-all duration-300">
              <div className="text-4xl font-light text-accent mb-2">95%</div>
              <div className="text-lg font-light text-gray-200 mb-2">
                Recommendation Rate
              </div>
              <div className="text-sm text-gray-400">
                Would recommend to others
              </div>
            </div>

            <div className="glass-card p-8 rounded-2xl text-center transition-all duration-300">
              <div className="text-4xl font-light text-accent mb-2">782</div>
              <div className="text-lg font-light text-gray-200 mb-2">
                Social Connection
              </div>
              <div className="text-sm text-gray-400">All time Members</div>
            </div>
          </div>

          {/* Impact Stories */}
          <div className="grid md:grid-cols-2 gap-8 mb-16">
            <div className="glass-card p-8 rounded-2xl">
              <h3 className="text-2xl font-light text-gray-200 mb-6">
                Professional Development
              </h3>
              <ul className="space-y-3 text-gray-400 font-light">
                <li className="flex items-start">
                  <span className="text-accent mr-3 mt-1">•</span>
                  <span>Internships and Research Positions</span>
                </li>
                <li className="flex items-start">
                  <span className="text-accent mr-3 mt-1">•</span>
                  <span>SolidWorks certifications (CSWA and CSWP)</span>
                </li>
                <li className="flex items-start">
                  <span className="text-accent mr-3 mt-1">•</span>
                  <span>Project Leads and Sub-Team Leads</span>
                </li>
              </ul>
            </div>

            <div className="glass-card p-8 rounded-2xl">
              <h3 className="text-2xl font-light text-gray-200 mb-6">
                Leadership & Growth
              </h3>
              <ul className="space-y-3 text-gray-400 font-light">
                <li className="flex items-start">
                  <span className="text-accent mr-3 mt-1">•</span>
                  <span>Student Organization Presidents & Officers</span>
                </li>
                <li className="flex items-start">
                  <span className="text-accent mr-3 mt-1">•</span>
                  <span>Hatchling Directors</span>
                </li>
                <li className="flex items-start">
                  <span className="text-accent mr-3 mt-1">•</span>
                  <span>Social connection with peers</span>
                </li>
              </ul>
            </div>
          </div>

          {/* More Info Section with Embedded PDF */}
          <div className="text-center">
            <h3 className="text-3xl font-light text-gray-200 mb-8">
              More Info
            </h3>
            <div className="glass-card p-8 rounded-2xl max-w-4xl mx-auto">
              <div className="text-5xl mb-6">📊</div>
              <h4 className="text-xl font-light text-gray-200 mb-4">
                Detailed Program Impact Report
              </h4>
              <p className="text-gray-400 font-light mb-6">
                View our comprehensive impact report with detailed statistics,
                success stories, and program outcomes.
              </p>

              {/* Embedded PDF Viewer */}

              <div className="w-full h-96 rounded-xl overflow-hidden border border-gray-700 custom-scrollbar">
                <iframe
                  src="/pdfs/Fall 2025 (10th year) Hatchling Impact Report.pptx.pdf#toolbar=0&navpanes=0&scrollbar=1"
                  className="w-full h-full custom-scrollbar"
                  title="Hatchling Impact Report"
                  frameBorder="0"
                >
                  <p className="p-4 text-gray-400">
                    Your browser does not support PDF embedding.
                    <a
                      href="/pdfs/hatchling-impact-report.pdf"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-accent hover:underline ml-2"
                    >
                      Click here to view the PDF
                    </a>
                  </p>
                </iframe>
              </div>

              <div className="mt-4">
                <a
                  href="/pdfs/hatchling-impact-report.pdf"
                  download
                  className="inline-block bg-yellow-500 text-black px-6 py-3 rounded-lg text-sm font-light  hover:scale-105 transition-all duration-300"
                >
                  Download Full Report
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-24 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl lg:text-6xl mb-12 text-gray-200">
            READY TO <span className="text-accent">JOIN</span>?
          </h2>

          <p className="text-xl font-light text-gray-400 mb-12 max-w-2xl mx-auto leading-relaxed">
            Become part of the next generation of robotics innovators. Apply now
            to join the Hatchling Program and accelerate your robotics journey.
          </p>

          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
            <ButtonLink to="/apply" style="primary" sizeVariant="large">
              APPLY NOW
            </ButtonLink>
            <ButtonLink to="/about" style="primary" sizeVariant="large">
              LEARN MORE
            </ButtonLink>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Hatchling;
