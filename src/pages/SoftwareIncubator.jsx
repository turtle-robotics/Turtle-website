import ButtonLink from "../components/ButtonLink";
import TextLink from "../components/TextLink";
import Hero from "../components/Hero";
import PageSection from "../components/PageSection";

const SoftwareIncubator = () => {
  const learningObjectiveGroups = [
    {
      groupName: "Robotics Environments",
      objectives: [
        "Operate in a Linux environment",
        "Handle Git workflows for team environments",
        "ROS 2 node design & integration",
      ],
    },
    {
      groupName: "Classic Controls",
      objectives: [
        "Apply PID and LQR control to robotic systems",
        "Implement basic sensor fusion and filters for state estimation",
      ],
    },
    {
      groupName: "Robot Modeling",
      objectives: [
        "Derive forward and backwards kinematics equations",
        "Electromechanical characterization",
      ],
    },
    {
      groupName: "Embedded Systems",
      objectives: [
        "Determine appropriate microcontroller or single board computer for application",
        "Manage low-level Data",
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
      subheading: "Introductions",
      objectives: [
        "SI Overview",
        "Meet the Director Team and Peers",
        "Intro to Robotics",
        "SO-ARM101 Introductions",
        "Install Software",
      ],
    },
    {
      heading: "Week 2",
      subheading: "Git and Linux",
      objectives: ["Git Workflow", "Linux Environment"],
    },
    {
      heading: "Week 3",
      subheading: "Transformations in Python",
      objectives: ["Python Numpy", "Matrices as Vector Transformations"],
    },
    {
      heading: "Week 4",
      subheading: "Embedded Systems",
      objectives: [
        "Microcontrollers",
        "Single-Board Computers",
        "Low-level Data",
        "IOT",
      ],
    },
    {
      heading: "Week 5",
      subheading: "Kinematics",
      objectives: ["Forward", "Inverse", "Velocity"],
    },
    {
      heading: "Week 6",
      subheading: "Electromechanical Systems",
      objectives: [
        "Actuator Control",
        "Sensor Properties",
        "System Integration",
      ],
    },
    {
      heading: "Week 7",
      subheading: "Classic Control Theory",
      objectives: ["PID Controllers", "Open vs Closed Loop", "LQR"],
    },
    {
      heading: "Week 8",
      subheading: "Sensor Fusion and Perception",
      objectives: ["Filters", "Mapping"],
    },
    {
      heading: "Week 9",
      subheading: "Path and Motion Planning",
      objectives: ["Numerical Methods", "Path Planning"],
    },
    {
      heading: "Week 10",
      subheading: "ROS and Robotics Softwares",
      objectives: ["ROS2", "Docker"],
    },
  ];

  return (
    <div className="min-h-screen">
      <Hero
        heading="SOFTWARE INCUBATOR PROGRAM"
        subheading="Releasing Fall 2026"
        backgroundImage="/assets/GeneralPhotos/Fall_2025_CSTAT_Hatchling_Group_Photo.webp"
        backgroundAltText="Hatchling Program Background"
      ></Hero>

      {/* Learning Objectives and Schedule Section */}
      <PageSection heading="LEARNING OBJECTIVES & SCHEDULE" colorVariant="A">
        {/* Learning Objectives - Full Width on Top */}
        <div className="mb-16">
          <h3 className="text-3xl font-light text-gray-200 mb-8 text-center">
            Core Learning Objectives
          </h3>
          <p className="text-lg text-gray-400 text-center mb-8 max-w-4xl mx-auto">
            Software Incubator Members graduate from the program with a
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
            to join the Software Incubator Program and accelerate your robotics
            journey.
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

export default SoftwareIncubator;
