import { useNavigate } from "react-router-dom";
import ButtonLink from "../components/ButtonLink";

const DevelopmentPrograms = () => {
  const navigate = useNavigate();

  const programs = [
    {
      id: "hatchling",
      title: "Hatchling",
      tagline: "Hatchling",
      year: "Founded 2015",
      description:
        "Our premier development program that introduces foundational technical, soft, and engineering skills.",
      link: "/hatchling",
      image: "/assets/hatchling_development.JPG",
    },
    {
      id: "software-incubator",
      title: "Software Incubator",
      tagline: "tag",
      year: "Releasing Fall 2026",
      description:
        "Software Incubator is a sequel to Hatchling, focused on the robotic application of kinematics, sensor fusion, control theory, and more",
      link: "/software-incubator",
      image: "/assets/SI_Photo.JPG",
    },
    {
      id: "mechanical-incubator",
      title: "Mechanical Incubator",
      tagline: "tag",
      year: "Releasing Fall 2026",
      description:
        "Mechanical Incubator is a sequel to Hatchling, focused on the robotic application of Ansys FEA, DFMA, GD&T, Electromechanical Design, and more",
      link: "/mechanical-incubator",
      image: "/assets/MI_Photo.png",
    },
    {
      id: "workshop-series",
      title: "Workshop Series",
      tagline: "Workshop Series",
      year: "Coming Soon",
      description:
        "A platform for members to gain presentation experience and learn new technical and leadership skills",
      link: "/#",
      image: "/assets/Workshop_Photo.jpg",
      disabled: true,
    },
  ];

  return (
    <div className="min-h-screen relative">
      {/* Sticky Tab Bar */}
      <div className="fixed top-20 left-0 right-0 z-40 bg-gray-900/90 backdrop-blur-xl border-b border-gray-700/50 shadow-lg">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-center gap-4 py-4">
            {programs
              .filter((program) => !program.disabled)
              .map((program) => (
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
      <section className="relative min-h-screen flex items-center justify-center px-4 pt-20">
        <div className="absolute inset-0 bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900"></div>
        <div className="relative text-center max-w-6xl mx-auto z-10">
          <h1 className="text-6xl md:text-8xl lg:text-9xl tracking-tight text-gray-200 mb-8">
            <span className="block">DEVELOPMENT</span>
            <span className="block text-yellow-400">PROGRAMS</span>
          </h1>
          <p className="hero-subtitle text-xl md:text-2xl font-light tracking-wide text-gray-400 mb-12 max-w-3xl mx-auto">
            To provide the resources and environment that enables undergraduate
            engineers to grow outside the classroom through technical lectures
            and collaborative, hands-on semester projects
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
            <h2 className="text-4xl md:text-5xl lg:text-6xl text-center mb-12 text-gray-200">
              {/* {program.title.toUpperCase()} */}
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
                <div className="backdrop-blur-xl bg-gray-900/30 border border-gray-700/50 rounded-2xl p-8 md:p-10 w-full max-w-2xl">
                  <p className="text-xs font-light tracking-widest text-yellow-400 mb-3 uppercase">
                    {program.year}
                  </p>

                  <h3 className="text-4xl md:text-5xl text-white mb-3">
                    {/* {program.tagline} */}
                    {program.title.toUpperCase()}
                  </h3>

                  <p className="text-base md:text-lg font-light text-white/90 mb-6">
                    {program.description}
                  </p>

                  {!program.disabled && (
                    <ButtonLink to={program.link}>Learn More</ButtonLink>
                  )}
                </div>
              </div>
            </div>
          </div>
        </section>
      ))}

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

      {/* Call to Action Section */}
      <section className="py-24 px-4 bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-5xl md:text-7xl text-gray-200 mb-6">
            Ready to Start Your{" "}
            <span className="text-yellow-400">Journey?</span>
          </h2>
          <p className="text-xl font-light text-gray-400 mb-12 max-w-2xl mx-auto">
            Join TURTLE and gain the skills needed to excel in robotics
          </p>
          <ButtonLink sizeVariant="large" to="/apply">
            Apply Now
          </ButtonLink>
        </div>
      </section>
    </div>
  );
};

export default DevelopmentPrograms;
