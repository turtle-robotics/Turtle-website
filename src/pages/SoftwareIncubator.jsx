import ImageCarousel from "../components/ImageCarousel";
import ButtonLink from "../components/ButtonLink";
import TextLink from "../components/TextLink";

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
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center px-4 overflow-hidden">
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
            <span className="block">SOFTWARE</span>
            <span className="block">INCUBATOR</span>
            <span className="block text-accent">PROGRAM</span>
          </h1>

          <div className="founding-info mt-8">
            <p className="text-lg md:text-xl font-light text-gray-200 drop-shadow-md">
              Releasing Fall 2026
            </p>
          </div>
        </div>
      </section>

      {/* Mission Statement Section */}
      <section className="py-24 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl md:text-5xl lg:text-6xl text-center mb-20 text-gray-200">
            PREVIEW <span className="text-accent">WORKSHOP</span>
          </h2>

          <div className="glass-card p-12 rounded-2xl text-center">
            <p className="text-xl md:text-2xl font-light text-gray-400 leading-relaxed max-w-4xl mx-auto">
              TURTLE is thrilled to announce the launch of our Mechanical and
              Software Incubator. Building upon the success of the Hatchling
              Development Program, Incubator will provide hands-on opportunities
              to learn new technical and leadership skills. Join us at our
              upcoming preview workshops and RSVP for free{" "}
              <TextLink to="https://forms.gle/7VkJndrzrwp1askw7">here</TextLink>
              .
            </p>
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
            to join the Software Incubator Program and accelerate your robotics
            journey.
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

export default SoftwareIncubator;
