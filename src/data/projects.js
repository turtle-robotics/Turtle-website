export const projects = [
  {
    id: 'snout',
    image: "https://picsum.photos/seed/snout/300/300",
    title: "SNOUT",
    subtitle: "Olfactory Sensing Robot",
    description: "A robotic vehicle equipped with advanced olfactory sensors for detecting and identifying scents in various applications.",
    category: "Robotics",
    fullDescription: "SNOUT will design a robotic vehicle equipped with advanced olfactory sensors. The robot will use its 'sense of smell' to detect and identify scents for applications ranging from harmful drugs, environmental monitoring, gas leak detection, and search and rescue operations. This robot will pick up new smells and classify them independently. This adaptability, combined with integrated navigation, will enable it to operate in harsh conditions autonomously.",
    technologies: ["IMS Sensors", "Machine Learning", "Robotics", "Embedded Systems", "Circuit Design"],
    team: "5-8 members",
    duration: "2 semesters",
    status: "Active",
    lead: "Anirudh Subramanian",
    leadEmail: "asubramanian@tamu.edu",
    goals: [
      "Develop a functional IMS sensor module that converts airborne chemicals into electrical signals.",
      "Prototype the SNOUT robotic platform, such as the intake, drift tube, detector, and electronics, onto a mobile chassis.",
      "Begin training a machine learning model (Random Forest Classifier) to identify and classify chemical compounds based on IMS data such as drift time and ion intensity.",
      "Test SNOUT in controlled environments with known chemicals to evaluate detection accuracy."
    ],
    lookingFor: [
      "Embedded Systems",
      "Circuit Design",
      "CAD Designing",
      "Machine Learning",
      "Students in CHEN, ECEN, ESET, CSCE, or related majors"
    ],
    images: [
      "https://picsum.photos/seed/snout1/800/600",
      "https://picsum.photos/seed/snout2/800/600",
      "https://picsum.photos/seed/snout3/800/600"
    ],
    updates: [
      {
        date: "2024-12-01",
        title: "Project Kickoff",
        content: "Initial team formation and project scope definition completed."
      },
      {
        date: "2024-11-15",
        title: "Sensor Research",
        content: "Completed preliminary research on IMS sensor technologies and specifications."
      }
    ]
  },
  {
    id: 'autonomous-navigation',
    image: "https://picsum.photos/seed/nav/300/300",
    title: "Autonomous Navigation",
    subtitle: "Advanced Pathfinding Systems",
    description: "Development of sophisticated navigation algorithms for mobile robots in complex environments.",
    category: "Computer Vision",
    fullDescription: "This project focuses on developing advanced autonomous navigation systems for mobile robots. The goal is to create robust pathfinding algorithms that can handle complex environments, dynamic obstacles, and real-time decision making. The system will integrate computer vision, SLAM (Simultaneous Localization and Mapping), and machine learning to achieve reliable autonomous operation.",
    technologies: ["Computer Vision", "SLAM", "ROS", "Python", "C++", "Machine Learning"],
    team: "4-6 members",
    duration: "3 semesters",
    status: "Active",
    lead: "Sarah Chen",
    leadEmail: "schen@tamu.edu",
    goals: [
      "Implement real-time SLAM algorithms for indoor and outdoor environments",
      "Develop robust obstacle detection and avoidance systems",
      "Create efficient pathfinding algorithms for complex terrains",
      "Integrate machine learning for adaptive navigation behavior"
    ],
    lookingFor: [
      "Computer Vision",
      "Robotics",
      "Machine Learning",
      "Students in CSCE, ECEN, or related majors"
    ],
    images: [
      "https://picsum.photos/seed/nav1/800/600",
      "https://picsum.photos/seed/nav2/800/600"
    ],
    updates: [
      {
        date: "2024-12-01",
        title: "Algorithm Development",
        content: "Completed initial SLAM algorithm implementation and testing."
      }
    ]
  },
  {
    id: 'medical-robotics',
    image: "https://picsum.photos/seed/medical/300/300",
    title: "Medical Robotics",
    subtitle: "Surgical Assistance Systems",
    description: "Innovative robotic systems designed to assist in medical procedures and rehabilitation.",
    category: "Medical Robotics",
    fullDescription: "This project explores the development of robotic systems for medical applications, including surgical assistance, rehabilitation, and patient care. The focus is on creating safe, precise, and user-friendly robotic systems that can enhance medical procedures and improve patient outcomes.",
    technologies: ["Robotics", "Control Systems", "Medical Devices", "Safety Systems", "Human-Robot Interaction"],
    team: "6-8 members",
    duration: "4 semesters",
    status: "Planning",
    lead: "Dr. Michael Rodriguez",
    leadEmail: "mrodriguez@tamu.edu",
    goals: [
      "Design and prototype surgical assistance robotic systems",
      "Implement safety protocols and fail-safe mechanisms",
      "Develop intuitive human-robot interfaces",
      "Conduct preliminary testing in controlled environments"
    ],
    lookingFor: [
      "Mechanical Engineering",
      "Control Systems",
      "Biomedical Engineering",
      "Students in MEEN, BMEN, or related majors"
    ],
    images: [
      "https://picsum.photos/seed/medical1/800/600"
    ],
    updates: [
      {
        date: "2024-11-20",
        title: "Project Planning",
        content: "Initial project scope and team formation in progress."
      }
    ]
  },
  {
    id: 'swarm-robotics',
    image: "https://picsum.photos/seed/swarm/300/300",
    title: "Swarm Robotics",
    subtitle: "Multi-Agent Coordination",
    description: "Research into coordinated behavior of multiple robots working together as a unified system.",
    category: "Distributed Systems",
    fullDescription: "This project investigates swarm robotics, where multiple simple robots work together to accomplish complex tasks. The research focuses on developing algorithms for coordination, communication, and collective decision-making among robot swarms.",
    technologies: ["Distributed Systems", "Multi-Agent Systems", "Communication Protocols", "Python", "ROS"],
    team: "4-6 members",
    duration: "2 semesters",
    status: "Active",
    lead: "Alex Thompson",
    leadEmail: "athompson@tamu.edu",
    goals: [
      "Develop coordination algorithms for robot swarms",
      "Implement efficient communication protocols",
      "Create collective decision-making mechanisms",
      "Test swarm behavior in various scenarios"
    ],
    lookingFor: [
      "Distributed Systems",
      "Multi-Agent Systems",
      "Robotics",
      "Students in CSCE, ECEN, or related majors"
    ],
    images: [
      "https://picsum.photos/seed/swarm1/800/600",
      "https://picsum.photos/seed/swarm2/800/600"
    ],
    updates: [
      {
        date: "2024-12-01",
        title: "Swarm Formation",
        content: "Successfully implemented basic swarm formation algorithms."
      }
    ]
  },
  {
    id: 'industrial-automation',
    image: "https://picsum.photos/seed/industrial/300/300",
    title: "Industrial Automation",
    subtitle: "Smart Manufacturing Systems",
    description: "Advanced automation systems for manufacturing and industrial applications.",
    category: "Industrial Robotics",
    fullDescription: "This project focuses on developing intelligent automation systems for industrial applications. The goal is to create robotic systems that can adapt to changing production requirements, improve efficiency, and reduce human intervention in manufacturing processes.",
    technologies: ["Industrial Robotics", "PLC Programming", "Computer Vision", "IoT", "Machine Learning"],
    team: "5-7 members",
    duration: "3 semesters",
    status: "Active",
    lead: "Emily Davis",
    leadEmail: "edavis@tamu.edu",
    goals: [
      "Design adaptive manufacturing systems",
      "Implement computer vision for quality control",
      "Develop IoT integration for monitoring",
      "Create predictive maintenance systems"
    ],
    lookingFor: [
      "Industrial Engineering",
      "Control Systems",
      "Computer Vision",
      "Students in IEEN, MEEN, or related majors"
    ],
    images: [
      "https://picsum.photos/seed/industrial1/800/600",
      "https://picsum.photos/seed/industrial2/800/600"
    ],
    updates: [
      {
        date: "2024-11-25",
        title: "System Integration",
        content: "Completed integration of vision system with robotic arm."
      }
    ]
  }
]

// Helper function to get project by ID
export const getProjectById = (id) => {
  return projects.find(project => project.id === id) || projects[0]
}

export const statistics = [
  { 
    count: 13, 
    label: "Advanced Research Projects", 
    description: "Cutting-edge robotics initiatives" 
  },
  { 
    count: 2, 
    label: "Competition Teams", 
    description: "Robotics competition teams" 
  },
  { 
    count: 150, 
    label: "Student Researchers", 
    description: "150+ active researchers" 
  },
  { 
    count: 110, 
    label: "Hatchling Members", 
    description: "Program participants" 
  }
] 