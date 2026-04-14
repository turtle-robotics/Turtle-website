import { useEffect, useState } from "react";
import ImageCarousel from "../components/ImageCarousel";
import ButtonLink from "../components/ButtonLink";
import Hero from "../components/Hero";
import PageSection from "../components/PageSection";

const Hatchling = () => {
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

  const learningObjectiveGroups = [
    {
      groupName: "SolidWorks (CAD) Competency",
      objectives: [
        "Design custom parts and modify assemblies",
        "Design around manufacturing constraints",
      ],
    },
    {
      groupName: "Electronics",
      objectives: [
        "Evaluating hardware specifications and datasheets",
        "Circuit design and implementation",
      ],
    },
    {
      groupName: "Programming",
      objectives: [
        "Utilize Git and GitHub",
        "Control hardware via a microcontroller",
        "Python and C++",
      ],
    },
    {
      groupName: "Manufacturing",
      objectives: ["Soldering and crimping", "Additive manufacturing"],
    },
    {
      groupName: "Problem Solving and Critical Thinking",
      objectives: [
        "Work in teams throughout a full design process from concept creation to testing",
      ],
    },
    {
      groupName: "Community & Passion",
      objectives: [
        "Build lasting connections with fellow engineers",
        "Develop a passion for engineering through hands-on experience",
      ],
    },
  ];

  const programScheduleItems = [
    {
      heading: "Week 1",
      subheading: "Introductions",
      objectives: [
        "Hatchling Overview",
        "Meet the Director Team and Peers",
        "Install software",
      ],
    },
    {
      heading: "Week 2",
      subheading: "SolidWorks (CAD) Foundation",
      objectives: [
        "What is Computer-Aided Design (CAD)?",
        "Engineering Drawing Navigation",
        "Navigating SolidWorks",
        "Design Intent",
      ],
    },
    {
      heading: "Week 3",
      subheading: "SolidWorks 3D",
      objectives: [
        "SolidWorks Big 3 Features: Extrude, Revolve, and Finishing operations",
        "Origin Selection and Symmetry",
        "Important Tools",
      ],
    },
    {
      heading: "Week 4",
      subheading: "Tools, Project, and Process",
      objectives: [
        "Design Process",
        "Additive Manufacturing: Best Practices",
        "Tool Safety and Usage",
        "Project Introduction",
      ],
      milestone: "Project Introduction",
    },
    {
      heading: "Week 5",
      subheading: "Design Review and C++",
      objectives: [
        "Syntax, Variables, Loops, If-else Statements, and Classes",
        "Signal Processing",
        "Design Review",
      ],
      milestone: "Design Review",
    },
    {
      heading: "Week 6",
      subheading: "SolidWorks Assembly",
      objectives: [
        "Mates",
        "Sub-Assemblies",
        "Component States and Configurations",
        "Using COTS Parts",
        "Tolerance vs Clearance",
        "Gear ratios",
      ],
    },
    {
      heading: "Week 7",
      subheading: "Programming and Git/GitHub",
      objectives: [
        "Importance of Git",
        "Git Commands and VS Code Integration",
        "Hardware Control with Documentation",
      ],
      milestone: "Assembly Review",
    },
    {
      heading: "Week 8",
      subheading: "Electronics and Soldering",
      objectives: [
        "Circuit Components and Terminology",
        "Pulse Width Modulation",
        "Microcontroller (MCU) vs Single-Board Controller (SBC)",
        "Linux",
        "Communication Protocols",
        "Soldering, Crimping, and Multimeter usage",
        "Documentation Navigation",
      ],
    },
    {
      heading: "Week 9",
      subheading: "Prototype Week",
      objectives: ["Project work week"],
      milestone: "Prototype Review",
    },
    {
      heading: "Week 10",
      subheading: "Build Week",
      objectives: ["Project Work Week"],
      milestone: "Build",
    },
  ];

  return (
    <div className="min-h-screen">
      <Hero
        heading="HATCHLING DEVELOPMENT PROGRAM"
        subheading="Founded 2015 • External Expansion 2025"
        backgroundImage="/assets/GeneralPhotos/Fall_2025_CSTAT_Hatchling_Group_Photo.webp"
        backgroundAltText="Hatchling Program Background"
      ></Hero>

      {/* Mission Statement Section */}
      <PageSection heading="OUR MISSION" colorVariant="A">
        <div className="glass-card p-12 rounded-2xl text-center">
          <p className="text-xl md:text-2xl font-light text-gray-400 leading-relaxed max-w-4xl mx-auto">
            Founded in the fall of 2015, Hatchling is our premier development
            program that introduces foundational technical, soft, and
            engineering skills
          </p>
        </div>
      </PageSection>

      {/* Trusted Organizations Section */}
      <PageSection heading="CURRENTLY TRUSTED AT" colorVariant="B">
        <div className="flex flex-col md:flex-row items-center justify-center gap-4 mb-8">
          <div className="glass-card p-8 rounded-2xl text-center transition-all duration-300">
            <div className="text-5xl mb-4">🏢</div>
            <h3 className="text-3xl font-light text-gray-200 mb-2">3</h3>
            <p className="text-lg font-light text-gray-400">Organizations</p>
          </div>

          <div className="text-2xl font-light text-gray-400">across</div>

          <div className="glass-card p-8 rounded-2xl text-center transition-all duration-300">
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
      </PageSection>

      {/* Scrolling Pictures Section */}
      <PageSection heading="HATCHLING GALLERY" colorVariant="A">
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
      </PageSection>

      {/* Learning Objectives and Schedule Section */}
      <PageSection heading="LEARNING OBJECTIVES & SCHEDULE" colorVariant="B">
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
            {learningObjectiveGroups.map((group) => (
              <div className="glass-card p-8 rounded-xl">
                <h4 className="text-xl font-light text-accent mb-4">
                  {group.groupName}
                </h4>
                <ul className="space-y-3 text-gray-400 font-light">
                  {group.objectives.map((objective) => (
                    <li className="flex items-start" key={objective}>
                      <span className="text-accent mr-3 mt-1">•</span>
                      <span>{objective}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
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
              {programScheduleItems.map((item) => (
                <div className="glass-card p-6 rounded-xl min-w-[280px] flex-shrink-0">
                  <div className="text-2xl font-light text-accent mb-3">
                    {item.heading}
                  </div>
                  <h4 className="text-lg font-light text-gray-200 mb-3">
                    {item.subheading}
                  </h4>
                  <ul className="space-y-2 text-sm text-gray-400 font-light">
                    {item.objectives.map((objective) => (
                      <li>• {objective}</li>
                    ))}
                    {item.milestone ? (
                      <li className="text-accent font-medium">
                        • Project Milestone: {item.milestone}
                      </li>
                    ) : null}
                  </ul>
                </div>
              ))}
            </div>

            {/* Scroll Indicator */}
            <div className="text-center mt-4">
              <p className="text-sm text-gray-400">
                ← Scroll to see all 10 weeks →
              </p>
            </div>
          </div>
        </div>
      </PageSection>

      {/* Published Materials Section */}
      <PageSection heading="PUBLISHED MATERIALS" colorVariant="A">
        {/* Weekly Content PDFs (toggleable) */}
        {slidesVisible && (
          <div className="mb-16">
            <div className="glass-card p-8 rounded-2xl max-w-2xl mx-auto">
              <div className="text-center mb-6">
                <div className="text-5xl mb-4">📚</div>
                <h4 className="text-xl font-light text-gray-200 mb-2">
                  Slides
                </h4>
              </div>

              {(() => {
                const pdfMap = {
                  1: "/pdfs/Hatchling Week 1 - Introduction.pptx.pdf",
                  2: "/pdfs/Hatchling Week 2 - SolidWorks (CAD) Foundation.pptx.pdf",
                  3: "/pdfs/Hatchling Week 3 - SolidWorks 3D.pptx.pdf",
                  4: "/pdfs/Hatchling Week 4 - Tools, Project, and Process.pptx.pdf",
                  5: "/pdfs/Hatchling Week 5 - Design Review and Cpp.pptx.pdf",
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
                      <option value="3">Week 3: SolidWorks 3D</option>
                      <option value="4">
                        Week 4: Tools, Project, and Process
                      </option>
                      <option value="5">Week 5: Design Review and C++</option>
                      <option value="6">Week 6: SolidWorks Assembly</option>
                      <option value="7">
                        Week 7: Programming and Git GitHub
                      </option>
                      <option value="8">
                        Week 8: Electronics and Soldering
                      </option>
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
            <ButtonLink to="/pdfs/Hatchling_Syllabus.pdf" reloadDocument>
              Download Syllabus
            </ButtonLink>
          </div>

          <div className="glass-card p-8 rounded-2xl text-center transition-all duration-300">
            <div className="text-5xl mb-6">🎨</div>
            <h3 className="text-xl font-light text-gray-200 mb-6">
              CAD Examples
            </h3>
            <ButtonLink to="https://drive.google.com/drive/u/0/folders/1vNfWDbjknwccCOt5aOBdxUWnFxSLPm2S">
              Download Examples
            </ButtonLink>
          </div>

          <div className="glass-card p-8 rounded-2xl text-center transition-all duration-300">
            <div className="text-5xl mb-6">⚡</div>
            <h3 className="text-xl font-light text-gray-200 mb-6">
              Project Tips & Controller Resources
            </h3>
            <ButtonLink to="https://drive.google.com/drive/u/0/folders/1Rw4qrWXRxz9cDLFNZvCBoV22xy_KlB8y">
              Download Guide
            </ButtonLink>
          </div>
        </div>
      </PageSection>

      {/* Stats, Impact, and Accolades Section */}
      <PageSection heading="STATS & IMPACT" colorVariant="B">
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
          <h3 className="text-3xl font-light text-gray-200 mb-8">More Info</h3>
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
      </PageSection>

      {/* Call to Action */}
      <PageSection heading="READY TO JOIN" colorVariant="A">
        <div className="max-w-4xl mx-auto text-center">
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
      </PageSection>
    </div>
  );
};

export default Hatchling;
