import { Link } from 'react-router-dom'
import { useEffect, useRef } from 'react'
import { gsap } from 'gsap'
import ImageCarousel from '../components/ImageCarousel'

const Hatchling = () => {
  const heroRef = useRef(null)

  useEffect(() => {
    const hero = heroRef.current
    if (!hero) return

    // Hero animations
    gsap.fromTo(hero.querySelectorAll('h1 span'),
      { y: 100, opacity: 0 },
      { 
        y: 0, 
        opacity: 1, 
        duration: 1.2, 
        stagger: 0.2, 
        ease: "power3.out" 
      }
    )

    gsap.fromTo(hero.querySelector('.hero-subtitle'),
      { y: 50, opacity: 0 },
      { 
        y: 0, 
        opacity: 1, 
        duration: 1, 
        delay: 0.8, 
        ease: "power3.out" 
      }
    )

    gsap.fromTo(hero.querySelector('.founding-info'),
      { y: 30, opacity: 0 },
      { 
        y: 0, 
        opacity: 1, 
        duration: 1, 
        delay: 1.2, 
        ease: "power3.out" 
      }
    )
  }, [])

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section ref={heroRef} className="relative min-h-screen flex items-center justify-center px-4">
        <div className="absolute inset-0 bg-gradient-to-br from-gray-50 via-white to-gray-100 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900"></div>
        <div className="relative text-center max-w-6xl mx-auto z-10">
          <h1 className="text-6xl md:text-8xl lg:text-9xl font-extralight tracking-tight text-gray-800 dark:text-gray-200 mb-8">
            <span className="block">HATCHLING</span>
            <span className="block text-accent">PROGRAM</span>
          </h1>
          
          <div className="founding-info mb-8">
            <p className="text-lg md:text-xl font-light text-gray-600 dark:text-gray-400">
              Founded 2015 • External Expansion 2025
            </p>
          </div>
          
          <p className="hero-subtitle text-xl md:text-2xl font-light tracking-wide text-gray-600 dark:text-gray-400 mb-12 max-w-3xl mx-auto">
            Our innovative robotics program designed to develop the next generation of robotics leaders and innovators.
          </p>
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
               Fostering growth in undergraduate engineers by providing the tools, support, and real-world experience they need to build strong communication, problem-solving, and engineering skills. We achieve this through carefully designed technical lectures paired with a collaborative, hands-on, semester-long project that encourages teamwork and practical application of knowledge.
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
              <h3 className="text-3xl font-light text-gray-800 dark:text-gray-200 mb-2">4</h3>
              <p className="text-lg font-light text-gray-600 dark:text-gray-400">Organizations</p>
            </div>
            
            <div className="text-2xl font-light text-gray-600 dark:text-gray-400">across</div>
            
            <div className="glass-card p-8 rounded-2xl text-center hover:scale-105 transition-all duration-300 bg-gradient-to-br from-yellow-400/20 to-amber-400/20 dark:from-yellow-500/20 dark:to-amber-500/20 border-2 border-yellow-400/30 dark:border-yellow-500/30">
              <div className="text-5xl mb-4">🎓</div>
              <h3 className="text-3xl font-light text-gray-800 dark:text-gray-200 mb-2">2</h3>
              <p className="text-lg font-light text-gray-600 dark:text-gray-400">Universities</p>
            </div>
            </div>
          
                     <div className="text-center">
             <p className="text-lg font-light text-gray-600 dark:text-gray-400 max-w-3xl mx-auto mb-12">
               Partnering with leading companies, research institutions, and academic partners to expand 
               our robotics education program across multiple universities and organizations.
             </p>
             
             {/* Bring Hatchling to Your Organization */}
             <div className="glass-card p-8 rounded-2xl max-w-2xl mx-auto">
               <h3 className="text-2xl font-light text-gray-800 dark:text-gray-200 mb-4">
                 Bring the Hatchling Mission to Your Student Organization
               </h3>
               <p className="text-gray-600 dark:text-gray-400 font-light mb-6">
                 Interested in expanding robotics education at your university? Let's discuss how we can 
                 bring the Hatchling program to your campus.
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
          
          <div className="rounded-2xl overflow-hidden border border-gray-200/50 dark:border-gray-700/50 glass-card" style={{ height: '400px' }}>
            <ImageCarousel 
              images={[
                'https://picsum.photos/seed/hatchling1/1200/600',
                'https://picsum.photos/seed/hatchling2/1200/600',
                'https://picsum.photos/seed/hatchling3/1200/600',
                'https://picsum.photos/seed/hatchling4/1200/600',
                'https://picsum.photos/seed/hatchling5/1200/600',
                'https://picsum.photos/seed/hatchling6/1200/600'
              ]} 
              autoPlay={true} 
              intervalMs={4000} 
            />
              </div>
        </div>
      </section>

      {/* Learning Objectives and Schedule Section */}
      <section className="py-24 px-4 bg-gradient-to-br from-gray-50 to-white dark:from-gray-800 dark:to-gray-900">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-extralight text-center mb-20 text-gray-800 dark:text-gray-200">
            LEARNING <span className="text-accent">OBJECTIVES</span> & SCHEDULE
          </h2>
          
                     {/* Learning Objectives - Full Width on Top */}
           <div className="mb-16">
             <h3 className="text-3xl font-light text-gray-800 dark:text-gray-200 mb-8 text-center">Core Learning Objectives</h3>
             <p className="text-lg text-gray-600 dark:text-gray-400 text-center mb-8 max-w-4xl mx-auto">
               Hatchlings graduate from the program with a community, passion for engineering, and the following skills:
             </p>
             <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
               <div className="glass-card p-8 rounded-xl">
                 <h4 className="text-xl font-light text-accent mb-4">SolidWorks (CAD) Competency</h4>
                 <ul className="space-y-3 text-gray-600 dark:text-gray-400 font-light">
                   <li className="flex items-start">
                     <span className="text-accent mr-3 mt-1">•</span>
                     <span>Design custom parts and modify assemblies</span>
                   </li>
                   <li className="flex items-start">
                     <span className="text-accent mr-3 mt-1">•</span>
                     <span>Reading and designing around manufacturing constraints</span>
                   </li>
                 </ul>
               </div>
               
               <div className="glass-card p-8 rounded-xl">
                 <h4 className="text-xl font-light text-accent mb-4">Electronics</h4>
                 <ul className="space-y-3 text-gray-600 dark:text-gray-400 font-light">
                   <li className="flex items-start">
                     <span className="text-accent mr-3 mt-1">•</span>
                     <span>Evaluating hardware specifications and datasheets</span>
                   </li>
                   <li className="flex items-start">
                     <span className="text-accent mr-3 mt-1">•</span>
                     <span>Circuit design and implementation</span>
                   </li>
                 </ul>
               </div>
               
               <div className="glass-card p-8 rounded-xl">
                 <h4 className="text-xl font-light text-accent mb-4">Programming</h4>
                 <ul className="space-y-3 text-gray-600 dark:text-gray-400 font-light">
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
                 <h4 className="text-xl font-light text-accent mb-4">Manufacturing</h4>
                 <ul className="space-y-3 text-gray-600 dark:text-gray-400 font-light">
                   <li className="flex items-start">
                     <span className="text-accent mr-3 mt-1">•</span>
                     <span>Soldering</span>
                   </li>
                   <li className="flex items-start">
                     <span className="text-accent mr-3 mt-1">•</span>
                     <span>Additive manufacturing</span>
                   </li>
                 </ul>
               </div>
               
               <div className="glass-card p-8 rounded-xl">
                 <h4 className="text-xl font-light text-accent mb-4">Problem Solving & Critical Thinking</h4>
                 <ul className="space-y-3 text-gray-600 dark:text-gray-400 font-light">
                   <li className="flex items-start">
                     <span className="text-accent mr-3 mt-1">•</span>
                     <span>Teams go through the design process from concept creation to testing</span>
                   </li>
                 </ul>
            </div>
            
               <div className="glass-card p-8 rounded-xl">
                 <h4 className="text-xl font-light text-accent mb-4">Community & Passion</h4>
                 <ul className="space-y-3 text-gray-600 dark:text-gray-400 font-light">
                   <li className="flex items-start">
                     <span className="text-accent mr-3 mt-1">•</span>
                     <span>Build lasting connections with fellow engineers</span>
                   </li>
                   <li className="flex items-start">
                     <span className="text-accent mr-3 mt-1">•</span>
                     <span>Develop passion for engineering through hands-on experience</span>
                   </li>
                 </ul>
              </div>
            </div>
          </div>

                     {/* Program Schedule - Horizontal Scrollable Timeline */}
           <div>
             <h3 className="text-3xl font-light text-gray-800 dark:text-gray-200 mb-8 text-center">10-Week Program Schedule</h3>
             <div className="relative">
               {/* Scrollable Timeline Container */}
               <div className="flex gap-4 overflow-x-auto pb-6 scrollbar-hide">
                 {/* Week 1 */}
                 <div className="glass-card p-6 rounded-xl min-w-[280px] flex-shrink-0">
                   <div className="text-2xl font-light text-accent mb-3">Week 1</div>
                   <h4 className="text-lg font-light text-gray-800 dark:text-gray-200 mb-3">Introductions</h4>
                   <ul className="space-y-2 text-sm text-gray-600 dark:text-gray-400 font-light">
                     <li>• Learn about Hatchling and learning objectives</li>
                     <li>• Meet the Director team</li>
                     <li>• Meet Hatchling Piers</li>
                     <li>• Install software</li>
                   </ul>
                 </div>
                 
                 {/* Week 2 */}
                 <div className="glass-card p-6 rounded-xl min-w-[280px] flex-shrink-0">
                   <div className="text-2xl font-light text-accent mb-3">Week 2</div>
                   <h4 className="text-lg font-light text-gray-800 dark:text-gray-200 mb-3">SolidWorks (CAD) Foundation</h4>
                   <ul className="space-y-2 text-sm text-gray-600 dark:text-gray-400 font-light">
                     <li>• What is CAD?</li>
                     <li>• Engineering Drawing navigation</li>
                     <li>• Navigating SolidWorks</li>
                     <li>• Introduce design intent</li>
                   </ul>
                 </div>
                 
                 {/* Week 3 */}
                 <div className="glass-card p-6 rounded-xl min-w-[280px] flex-shrink-0">
                   <div className="text-2xl font-light text-accent mb-3">Week 3</div>
                   <h4 className="text-lg font-light text-gray-800 dark:text-gray-200 mb-3">SolidWorks 3D</h4>
                   <ul className="space-y-2 text-sm text-gray-600 dark:text-gray-400 font-light">
                     <li>• SolidWorks big 3 features: extrude, revolve, and finishing operations</li>
                     <li>• Origin selection and symmetry</li>
                     <li>• Important tools</li>
                   </ul>
                 </div>
                 
                 {/* Week 4 */}
                 <div className="glass-card p-6 rounded-xl min-w-[280px] flex-shrink-0">
                   <div className="text-2xl font-light text-accent mb-3">Week 4</div>
                   <h4 className="text-lg font-light text-gray-800 dark:text-gray-200 mb-3">Tools, Project, and Process</h4>
                   <ul className="space-y-2 text-sm text-gray-600 dark:text-gray-400 font-light">
                     <li>• Design Process</li>
                     <li>• Additive Manufacturing with best practices</li>
                     <li>• Tool safety and usage</li>
                     <li>• Available project resources</li>
                     <li className="text-accent font-medium">• Project Milestone: Project Introduction</li>
                   </ul>
                 </div>
                 
                 {/* Week 5 */}
                 <div className="glass-card p-6 rounded-xl min-w-[280px] flex-shrink-0">
                   <div className="text-2xl font-light text-accent mb-3">Week 5</div>
                   <h4 className="text-lg font-light text-gray-800 dark:text-gray-200 mb-3">Design Review and C++</h4>
                   <ul className="space-y-2 text-sm text-gray-600 dark:text-gray-400 font-light">
                     <li>• Syntax, variables, loops, if-else statements, and classes</li>
                     <li>• Signal processing</li>
                     <li>• Design review</li>
                     <li className="text-accent font-medium">• Project Milestone: Design Review</li>
                   </ul>
                 </div>
                 
                 {/* Week 6 */}
                 <div className="glass-card p-6 rounded-xl min-w-[280px] flex-shrink-0">
                   <div className="text-2xl font-light text-accent mb-3">Week 6</div>
                   <h4 className="text-lg font-light text-gray-800 dark:text-gray-200 mb-3">SolidWorks Assembly</h4>
                   <ul className="space-y-2 text-sm text-gray-600 dark:text-gray-400 font-light">
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
                   <div className="text-2xl font-light text-accent mb-3">Week 7</div>
                   <h4 className="text-lg font-light text-gray-800 dark:text-gray-200 mb-3">Programming and Git/GitHub</h4>
                   <ul className="space-y-2 text-sm text-gray-600 dark:text-gray-400 font-light">
                     <li>• Importance of Git</li>
                     <li>• Git commands and VSCODE integration</li>
                     <li>• Documentation reading for hardware control</li>
                     <li className="text-accent font-medium">• Project Milestone: Assembly Review</li>
                   </ul>
                 </div>
                 
                 {/* Week 8 */}
                 <div className="glass-card p-6 rounded-xl min-w-[280px] flex-shrink-0">
                   <div className="text-2xl font-light text-accent mb-3">Week 8</div>
                   <h4 className="text-lg font-light text-gray-800 dark:text-gray-200 mb-3">Electronics and Soldering</h4>
                   <ul className="space-y-2 text-sm text-gray-600 dark:text-gray-400 font-light">
                     <li>• Circuit components and terminology</li>
                     <li>• Pulse Width Modulation</li>
                     <li>• Microcontroller (MCU) vs Single-Board Controller (SBC)</li>
                     <li>• Linux</li>
                     <li>• Communication Protocols</li>
                     <li>• Soldering, Crimping and multimeter usage</li>
                     <li>• Documentation navigation</li>
                   </ul>
                 </div>
                 
                 {/* Week 9 */}
                 <div className="glass-card p-6 rounded-xl min-w-[280px] flex-shrink-0">
                   <div className="text-2xl font-light text-accent mb-3">Week 9</div>
                   <h4 className="text-lg font-light text-gray-800 dark:text-gray-200 mb-3">Prototype Week</h4>
                   <ul className="space-y-2 text-sm text-gray-600 dark:text-gray-400 font-light">
                     <li>• Project work week</li>
                     <li className="text-accent font-medium">• Project Milestone: Prototype Review</li>
                   </ul>
                 </div>
                 
                 {/* Week 10 */}
                 <div className="glass-card p-6 rounded-xl min-w-[280px] flex-shrink-0">
                   <div className="text-2xl font-light text-accent mb-3">Week 10</div>
                   <h4 className="text-lg font-light text-gray-800 dark:text-gray-200 mb-3">Build Week</h4>
                   <ul className="space-y-2 text-sm text-gray-600 dark:text-gray-400 font-light">
                     <li>• Project work week</li>
                     <li className="text-accent font-medium">• Project Milestone: Build</li>
                   </ul>
                 </div>
            </div>
               
               {/* Scroll Indicator */}
               <div className="text-center mt-4">
                 <p className="text-sm text-gray-500 dark:text-gray-400">
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
           <h2 className="text-4xl md:text-5xl lg:text-6xl font-extralight text-center mb-20 text-gray-800 dark:text-gray-200">
             PUBLISHED <span className="text-accent">MATERIALS</span>
          </h2>
          
                       {/* Weekly Content PDFs */}
            <div className="mb-16">
              <h3 className="text-3xl font-light text-gray-800 dark:text-gray-200 mb-8 text-center">Weekly Content Materials</h3>
              <div className="glass-card p-8 rounded-2xl max-w-2xl mx-auto">
                <div className="text-center mb-6">
                  <div className="text-5xl mb-4">📚</div>
                  <h4 className="text-xl font-light text-gray-800 dark:text-gray-200 mb-2">Select Week to Download</h4>
                  <p className="text-gray-600 dark:text-gray-400 font-light">
                    Choose a week to download the corresponding content materials
                  </p>
                </div>
                
                <div className="flex flex-col sm:flex-row gap-4 items-center justify-center mb-6">
                  <select 
                    id="weekSelector"
                    className="glass-card border border-gray-200 dark:border-gray-700 px-4 py-3 rounded-lg text-gray-800 dark:text-gray-200 bg-white dark:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-yellow-500 focus:border-transparent"
                    onChange={(e) => {
                      const selectedWeek = e.target.value;
                      const downloadBtn = document.getElementById('downloadBtn');
                      if (selectedWeek && downloadBtn) {
                        downloadBtn.href = `/pdfs/week-${selectedWeek}-content.pdf`;
                        downloadBtn.style.display = 'inline-block';
                      }
                    }}
                  >
                    <option value="">Select a week...</option>
                    <option value="1">Week 1: Introductions</option>
                    <option value="2">Week 2: SolidWorks Foundation</option>
                    <option value="3">Week 3: SolidWorks 3D</option>
                    <option value="4">Week 4: Tools & Process</option>
                    <option value="5">Week 5: Design Review & C++</option>
                    <option value="6">Week 6: SolidWorks Assembly</option>
                    <option value="7">Week 7: Programming & Git</option>
                    <option value="8">Week 8: Electronics & Soldering</option>
                  </select>
                  
                  <a 
                    id="downloadBtn"
                    href="#"
                    download
                    className="bg-gradient-to-r from-yellow-500 to-amber-500 text-white px-6 py-3 rounded-lg text-sm font-light hover:from-yellow-600 hover:to-amber-600 transition-all duration-300 hidden"
                  >
                    Download PDF
                  </a>
                </div>
                
                <div className="text-center">
                  <p className="text-sm text-gray-500 dark:text-gray-400">
                    Available for weeks 1-8 • Each PDF contains comprehensive content for that week
                  </p>
            </div>
          </div>
        </div>
           
           {/* Additional Materials */}
           <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
             <div className="glass-card p-8 rounded-2xl text-center hover:scale-105 transition-all duration-300">
               <div className="text-5xl mb-6">📝</div>
               <h3 className="text-xl font-light text-gray-800 dark:text-gray-200 mb-4">Hatchling Notes</h3>
               <p className="text-gray-600 dark:text-gray-400 font-light leading-relaxed mb-4">
                 Comprehensive program notes and reference materials
               </p>
               <a 
                 href="/pdfs/hatchling-notes.pdf"
                 download
                 className="inline-block bg-gradient-to-r from-yellow-500 to-amber-500 text-white px-6 py-3 rounded-lg text-sm font-light hover:from-yellow-600 hover:to-amber-600 transition-all duration-300"
               >
                 Download Notes
               </a>
             </div>
             
             <div className="glass-card p-8 rounded-2xl text-center hover:scale-105 transition-all duration-300">
               <div className="text-5xl mb-6">🎨</div>
               <h3 className="text-xl font-light text-gray-800 dark:text-gray-200 mb-4">CAD Examples</h3>
               <p className="text-gray-600 dark:text-gray-400 font-light leading-relaxed mb-4">
                 Sample SolidWorks models and design examples
               </p>
               <a 
                 href="/pdfs/cad-examples.pdf"
                 download
                 className="inline-block bg-gradient-to-r from-yellow-500 to-amber-500 text-white px-6 py-3 rounded-lg text-sm font-light hover:from-yellow-600 hover:to-amber-600 transition-all duration-300"
               >
                 Download Examples
               </a>
          </div>
          
             <div className="glass-card p-8 rounded-2xl text-center hover:scale-105 transition-all duration-300">
               <div className="text-5xl mb-6">⚡</div>
               <h3 className="text-xl font-light text-gray-800 dark:text-gray-200 mb-4">Controller Info & Code</h3>
               <p className="text-gray-600 dark:text-gray-400 font-light leading-relaxed mb-4">
                 Microcontroller documentation and sample code
               </p>
               <a 
                 href="/pdfs/controller-info-code.pdf"
                 download
                 className="inline-block bg-gradient-to-r from-yellow-500 to-amber-500 text-white px-6 py-3 rounded-lg text-sm font-light hover:from-yellow-600 hover:to-amber-600 transition-all duration-300"
               >
                 Download Guide
               </a>
            </div>
          </div>
        </div>
      </section>

      {/* Stats and Impact Section */}
      <section className="py-24 px-4 bg-gradient-to-br from-gray-50 to-white dark:from-gray-800 dark:to-gray-900">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-extralight text-center mb-20 text-gray-800 dark:text-gray-200">
            STATS & <span className="text-accent">IMPACT</span>
          </h2>
          
                     <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
             <div className="glass-card p-8 rounded-2xl text-center hover:scale-105 transition-all duration-300">
               <div className="text-4xl font-light text-accent mb-2">75%</div>
               <div className="text-lg font-light text-gray-800 dark:text-gray-200 mb-2">Weekly Attendance</div>
               <div className="text-sm text-gray-600 dark:text-gray-400">Average of 75 members weekly</div>
             </div>
             
             <div className="glass-card p-8 rounded-2xl text-center hover:scale-105 transition-all duration-300">
               <div className="text-4xl font-light text-accent mb-2">70%</div>
               <div className="text-lg font-light text-gray-800 dark:text-gray-200 mb-2">New Engineers</div>
               <div className="text-sm text-gray-600 dark:text-gray-400">70% of members enter without prior engineering skills</div>
             </div>
             
             <div className="glass-card p-8 rounded-2xl text-center hover:scale-105 transition-all duration-300">
               <div className="text-4xl font-light text-accent mb-2">95%</div>
               <div className="text-lg font-light text-gray-800 dark:text-gray-200 mb-2">Recommendation Rate</div>
               <div className="text-sm text-gray-600 dark:text-gray-400">Would recommend to others</div>
             </div>
             
             <div className="glass-card p-8 rounded-2xl text-center hover:scale-105 transition-all duration-300">
               <div className="text-4xl font-light text-accent mb-2">100%</div>
               <div className="text-lg font-light text-gray-800 dark:text-gray-200 mb-2">Social Connection</div>
               <div className="text-sm text-gray-600 dark:text-gray-400">Peers and mentors</div>
             </div>
           </div>
          
                     {/* Impact Stories */}
           <div className="grid md:grid-cols-2 gap-8 mb-16">
            <div className="glass-card p-8 rounded-2xl">
               <h3 className="text-2xl font-light text-gray-800 dark:text-gray-200 mb-6">Professional Development</h3>
               <ul className="space-y-3 text-gray-600 dark:text-gray-400 font-light">
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
                   <span>Advanced Project Leads and Sub-Team Leads</span>
                 </li>
               </ul>
            </div>
             
            <div className="glass-card p-8 rounded-2xl">
               <h3 className="text-2xl font-light text-gray-800 dark:text-gray-200 mb-6">Leadership & Growth</h3>
               <ul className="space-y-3 text-gray-600 dark:text-gray-400 font-light">
                 <li className="flex items-start">
                   <span className="text-accent mr-3 mt-1">•</span>
                   <span>Hatchling Directors</span>
                 </li>
                 <li className="flex items-start">
                   <span className="text-accent mr-3 mt-1">•</span>
                   <span>PhD candidates</span>
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
             <h3 className="text-3xl font-light text-gray-800 dark:text-gray-200 mb-8">More Info</h3>
             <div className="glass-card p-8 rounded-2xl max-w-4xl mx-auto">
               <div className="text-5xl mb-6">📊</div>
               <h4 className="text-xl font-light text-gray-800 dark:text-gray-200 mb-4">
                 Detailed Program Impact Report
               </h4>
               <p className="text-gray-600 dark:text-gray-400 font-light mb-6">
                 View our comprehensive impact report with detailed statistics, success stories, and program outcomes.
               </p>
               
               {/* Embedded PDF Viewer */}
               <div className="w-full h-96 rounded-xl overflow-hidden border border-gray-200 dark:border-gray-700">
                 <iframe
                   src="/pdfs/hatchling-impact-report.pdf#toolbar=0&navpanes=0&scrollbar=0"
                   className="w-full h-full"
                   title="Hatchling Impact Report"
                   frameBorder="0"
                 >
                   <p className="p-4 text-gray-600 dark:text-gray-400">
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
                   className="inline-block bg-gradient-to-r from-yellow-500 to-amber-500 text-white px-6 py-3 rounded-lg text-sm font-light hover:from-yellow-600 hover:to-amber-600 transition-all duration-300"
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
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-extralight mb-12 text-gray-800 dark:text-gray-200">
            READY TO <span className="text-accent">JOIN</span>?
          </h2>
          
          <p className="text-xl font-light text-gray-600 dark:text-gray-400 mb-12 max-w-2xl mx-auto leading-relaxed">
            Become part of the next generation of robotics innovators. Apply now to join the Hatchling Program 
            and accelerate your robotics journey.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
            <Link 
              to="/apply" 
              className="bg-gradient-turtle text-white px-12 py-5 rounded-xl text-lg font-light tracking-wide hover:scale-105 transition-all duration-300 shadow-premium"
            >
              APPLY NOW
            </Link>
            <Link 
              to="/about" 
              className="glass-card text-gray-800 dark:text-gray-200 px-12 py-5 rounded-xl text-lg font-light tracking-wide hover:scale-105 transition-all duration-300"
            >
              LEARN MORE
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Hatchling 
