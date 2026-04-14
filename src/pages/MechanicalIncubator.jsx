import ButtonLink from "../components/ButtonLink";
import TextLink from "../components/TextLink";
import Hero from "../components/Hero";
import PageSection from "../components/PageSection";

const MechanicalIncubator = () => {
  const learningObjectiveGroups = [
    {
      groupName: "ANSYS (FEA) Competency",
      objectives: [
        "Simplify models and improve mesh quality",
        "Execute standard static and basic transient simulation workflows",
        "Validate simulation results using engineering principles",
      ],
    },
    {
      groupName: "Electromechanical Design",
      objectives: [
        "Design and assemble multi-subsystem robotic systems",
        "Quantitatively justify design decisions",
      ],
    },
    {
      groupName: "Manufacturing",
      objectives: [
        "Apply design for manufacturing and assembly (DFx) principles",
        "Specify geometric dimensioning and tolerancing (GD&T) for parts and assemblies",
      ],
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
      subheading: "Introductions and SolidWorks",
      objectives: [
        "MI Overview",
        "Meet the Director Team and Peers",
        "Intro to Robotics",
        "Advanced SolidWorks",
        "Install Software",
      ],
    },
    {
      heading: "Week 2",
      subheading: "Technical Interview Concepts",
      objectives: [
        "Free Body Diagrams",
        "Solid Mechanics",
        "Thermal Analysis",
        "Basic Materials",
      ],
    },
    {
      heading: "Week 3",
      subheading: "ANSYS (FEA) Foundations",
      objectives: [
        "What is Computer-Aided Engineering (CAE)?",
        "Navigating ANSYS",
        "Static Analysis Workflow",
      ],
    },
    {
      heading: "Week 4",
      subheading: "Mechanical Design",
      objectives: [
        "Design Requirements (Scoping)",
        "Scoping Your Design (Questions and Common Pitfalls)",
        "Mechanisms/Linkages (how it works, applications)",
        "Gears & Power Transmission",
        "Chain & Belt Drives",
        "Bearings",
        "Screws & Fasteners",
        "Design for Assembly",
        "Material Selection (metals, polymers & composites)",
        "More Resources",
      ],
    },
    {
      heading: "Week 5",
      subheading: "Electromechanical Systems",
      objectives: [
        "Actuators",
        "Sensors",
        "Batteries",
        "System Integration",
        "COTS Selection",
      ],
    },
    {
      heading: "Week 6",
      subheading: "Materials/Manufacturing/GD&T",
      objectives: [
        "Materials Continued",
        "Manufacturing Processes",
        "Design for Manufacturing (DFM)",
        "Geometric Design and Manufacturing (GD&T)",
      ],
    },
    {
      heading: "Week 7",
      subheading: "Design Review and Lab Time",
      objectives: ["Design Review", "Project Work Week"],
    },
    {
      heading: "Week 8",
      subheading: "Lab Time",
      objectives: ["Project Work Week"],
    },
    {
      heading: "Week 9",
      subheading: "FEA Continued",
      objectives: [
        "Part Simplification",
        "Advanced Meshing",
        "Simulation Validation",
      ],
    },
    {
      heading: "Week 10",
      subheading: "FEA Transient",
      objectives: [
        "Part Simplification",
        "Advanced Meshing",
        "Simulation Validation",
      ],
    },
  ];

  return (
    <div className="min-h-screen">
      <Hero
        heading="MECHANICAL INCUBATOR PROGRAM"
        subheading="Releasing Fall 2026"
        backgroundImage="/assets/GeneralPhotos/Fall_2025_CSTAT_Hatchling_Group_Photo.webp"
        backgroundAltText="Hatchling Program Background"
      ></Hero>

      {/* Mission Statement Section */}
      <PageSection heading="PREVIEW WORKSHOP" colorVariant="B">
        <div className="glass-card p-12 rounded-2xl text-center">
          <p className="text-xl md:text-2xl font-light text-gray-400 leading-relaxed max-w-4xl mx-auto">
            TURTLE is thrilled to announce the launch of our Mechanical and
            Software Incubator. Building upon the success of the Hatchling
            Development Program, Incubator will provide hands-on opportunities
            to learn new technical and leadership skills. Join us at our
            upcoming preview workshops and RSVP for free{" "}
            <TextLink to="https://forms.gle/7VkJndrzrwp1askw7">here</TextLink>.
          </p>
        </div>
      </PageSection>

      {/* Learning Objectives and Schedule Section */}
      <PageSection heading="LEARNING OBJECTIVES & SCHEDULE" colorVariant="A">
        {/* Learning Objectives - Full Width on Top */}
        <div className="mb-16">
          <h3 className="text-3xl font-light text-gray-200 mb-8 text-center">
            Core Learning Objectives
          </h3>
          <p className="text-lg text-gray-400 text-center mb-8 max-w-4xl mx-auto">
            Mechanical Incubator Members graduate from the program with a
            community, passion for engineering, and the following skills:
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

      {/* Call to Action */}
      <PageSection heading="READY TO JOIN" colorVariant="B">
        <div className="max-w-4xl mx-auto text-center">
          <p className="text-xl font-light text-gray-400 mb-12 max-w-2xl mx-auto leading-relaxed">
            Become part of the next generation of robotics innovators. Apply now
            to join the Mechanical Incubator Program and accelerate your
            robotics journey.
          </p>

          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
            <ButtonLink to="/apply" style="primary" sizeVariant="large">
              Apply Now
            </ButtonLink>
            <ButtonLink to="/about" style="primary" sizeVariant="large">
              Learn More
            </ButtonLink>
          </div>
        </div>
      </PageSection>
    </div>
  );
};

export default MechanicalIncubator;
