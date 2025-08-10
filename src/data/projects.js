export const projects = [
  // Alphabetical by title
  {
    id: 'ache',
    image: 'https://picsum.photos/seed/ache/300/300',
    title: 'ACHE',
    subtitle: 'Artificial Cardiovascular and Hemodynamics Experiment',
    description: 'Designing a soft total artificial heart that mimics the function of the human heart through compliant actuation and realistic pumping cycles.',
    category: 'Biomedical Robotics',
    tags: ['Biomedical', 'Soft Robotics', 'Actuators', 'Simulation', 'Fluids'],
    status: 'Active',
    duration: 'Fall 2025',
    lead: 'Jacob Fuerst',
    leadEmail: 'jacob1st@tamu.edu',
    goals: [
      'Research Total Artificial Hearts, soft robotics, and actuation methods',
      'Develop a basic fluid simulation to demonstrate blood flow',
      'Prototype an initial heart chamber to showcase the pumping cycle'
    ],
    lookingFor: [
      'Biomedical-focused robotics interest',
      'CAD for the heart model (SolidWorks)',
      'Controls for flow rates and output',
      'Fluid dynamics and simulation (ANSYS)'
    ],
    images: ['https://picsum.photos/seed/ache1/800/600']
  },
  {
    id: 'amps',
    image: 'https://picsum.photos/seed/amps/300/300',
    title: 'AMPS',
    subtitle: 'Adaptive Magnetic Power System',
    description: 'Exploring power electronics by building a modular system that retrofits a manual bicycle to generate and manage power like an e-bike.',
    category: 'Power Electronics',
    tags: ['Power Electronics', 'Energy Harvesting', 'Generators', 'Embedded', 'Arduino', 'CAD'],
    status: 'Active',
    duration: 'Fall 2025',
    lead: 'Emiliano Grajales-Mora',
    leadEmail: 'j_grajalesmora@tamu.edu',
    goals: [
      'Build an axial generator + driven gear system for AC→DC experiments using Arduino',
      'Prototype power generation module and mechanical integration',
      'Validate ideas with oscilloscope and efficiency measurements'
    ],
    lookingFor: [
      'ELEN, CPEN, MEEN, ETID preferred (all majors welcome)',
      'Generators and power drives',
      'Wiring and cable management',
      'CAD for prototyping',
      'AC→DC conversion and management, programming/simulation (C, Matlab)'
    ],
    images: ['https://picsum.photos/seed/amps1/800/600']
  },
  {
    id: 'ankl',
    image: 'https://picsum.photos/seed/ankl/300/300',
    title: 'ANKL',
    subtitle: '6-DOF Prosthetic Ankle',
    description: 'A Stewart-platform-based prosthetic ankle to restore full range of motion to below-the-knee amputees.',
    category: 'Biomedical Robotics',
    tags: ['Prosthetics', 'Controls', 'Stewart Platform', 'CAD', 'Simulation', 'Python', 'C++'],
    status: 'Active',
    duration: 'Fall 2025',
    lead: 'James Lee',
    leadEmail: 'jlee915@tamu.edu',
    goals: [
      'Develop and implement improved control algorithms to reduce drift',
      'Build a fully functional test bench for electronics and hardware',
      'Complete a functional Stewart Platform for showcase'
    ],
    lookingFor: [
      '3D CAD (SolidWorks or equivalent)',
      'Electronics hardware and wiring',
      'Machining',
      'Robotics programming (Python/C++)',
      'GitHub experience',
      'Dynamic systems and controls'
    ],
    images: ['https://picsum.photos/seed/ankl1/800/600']
  },
  {
    id: 'beest',
    image: 'https://picsum.photos/seed/beest/300/300',
    title: 'BEEST',
    subtitle: 'Electromechanical Strandbeest',
    description: 'Raspberry-Pi-powered Strandbeest robot using Jansen linkages with automated turtle-like exterior shell.',
    category: 'Mechatronics',
    tags: ['Raspberry Pi', 'Python', 'Mechanisms', 'Jansen Linkage', 'Mechatronics', '3D Printing'],
    status: 'Active',
    duration: 'Fall 2025',
    lead: 'Lorenzo Hidalgo',
    leadEmail: 'lhidalgo@tamu.edu',
    goals: [
      'Redesign gears to allow free rotation with bearings and fix self-torquing',
      'Advance automated exterior shell design and manufacturing',
      'Streamline Raspberry Pi startup and finalize head automation code using Pygame'
    ],
    lookingFor: [
      'Part design and assemblies (SolidWorks)',
      'Python experience',
      'Raspberry Pi interest/experience',
      '3D printing and laser cutting'
    ],
    images: ['https://picsum.photos/seed/beest1/800/600']
  },
  {
    id: 'blnc',
    image: 'https://picsum.photos/seed/blnc/300/300',
    title: 'BLNC',
    subtitle: 'Self-Balancing Rovers for Extreme Terrain',
    description: 'Autonomous, self-balancing robots exploring unstable rover architectures on two wheels and a sphere.',
    category: 'Controls & Mobility',
    tags: ['Controls', 'Self-Balancing', 'Modeling', 'Mobile Robotics', 'Python'],
    status: 'Active',
    duration: 'Fall 2025',
    lead: 'Jonathon Foltyn',
    leadEmail: 'jonathonfoltyn@tamu.edu',
    goals: [
      'Explore control algorithms for a V1 balancing robot',
      'Model and design a ball-balancing robot (BB-8-like)',
      'Model a self-correcting two-wheel robot with varying inertia'
    ],
    lookingFor: [
      'System modeling and controller development',
      'System design and SolidWorks CAD',
      'Robotics programming with Python'
    ],
    images: ['https://picsum.photos/seed/blnc1/800/600']
  },
  {
    id: 'cmbt',
    image: 'https://picsum.photos/seed/cmbt/300/300',
    title: 'CMBT',
    subtitle: 'Combat Robotics',
    description: 'Designing and competing with kinetic fighting robots, primarily in the 3lb class, plus a 30lb platform.',
    category: 'Competition Robotics',
    tags: ['Combat', 'CAD', 'Manufacturing', 'Electronics', 'Testing'],
    status: 'Active',
    duration: 'Fall 2025',
    lead: 'Kian Dunkin',
    leadEmail: 'kian.dunkin@tamu.edu',
    goals: [
      'Complete CAD of current 3lb design and run durability/weight optimizations',
      'Perform electronics stress tests and design a testing enclosure',
      'Test full robot functionality and organize spring 2026 competition'
    ],
    lookingFor: [
      '3D modeling (SolidWorks preferred)',
      'Creative thinking and teamwork',
      'Passion for combat robotics'
    ],
    images: ['https://picsum.photos/seed/cmbt1/800/600']
  },
  {
    id: 'cntr',
    image: 'https://picsum.photos/seed/cntr/300/300',
    title: 'CNTR',
    subtitle: 'VR-Controlled Modular Humanoid',
    description: 'A modular, VR-controlled humanoid robot designed for hazardous or inaccessible environments with swappable arm modules.',
    category: 'Humanoids',
    tags: ['Humanoid', 'VR', 'Teleoperation', 'Unity', 'Embedded', 'Motion Control', 'Modular'],
    status: 'Active',
    duration: 'Fall 2025',
    lead: 'Jack Bluethmann',
    leadEmail: 'j.bluethmann1@tamu.edu',
    goals: [
      'Design interchangeable arm fixture',
      'Design first modular arm',
      'Create circuit and VR control testbeds'
    ],
    lookingFor: [
      'Mechanical design, electronics, coding, control systems',
      'CAD and 3D printing',
      'Component selection for efficient power',
      'Unity experience for VR control (nice to have)'
    ],
    images: ['https://picsum.photos/seed/cntr1/800/600']
  },
  {
    id: 'dron',
    image: 'https://picsum.photos/seed/dron/300/300',
    title: 'DRON',
    subtitle: 'Disaster Response Observation Network',
    description: 'UAV swarm platform to assist first responders with visual data, mapping, and minimal human input.',
    category: 'Aerial Robotics',
    tags: ['UAV', 'Swarm', 'SLAM', 'Unity', 'ROS2', 'OpenCV'],
    status: 'Active',
    duration: 'Fall 2025',
    lead: 'Ian Wilhite',
    leadEmail: 'Ian.wilhite0@tamu.edu',
    goals: [
      'Flight testing with manual controls',
      'vSLAM implementation for collected data',
      'Maintain Unity visualization stack'
    ],
    lookingFor: [
      'GitHub, Python, C/C++, ROS2, Unity, OpenCV',
      'Spec sheet understanding, oscilloscope usage',
      'Ground control software (QGC) interest',
      'SolidWorks assembly experience'
    ],
    images: ['https://picsum.photos/seed/dron1/800/600']
  },
  {
    id: 'eden',
    image: 'https://picsum.photos/seed/eden/300/300',
    title: 'EDEN',
    subtitle: 'AI-Enabled Humanoid Research',
    description: 'Building an AI-enabled humanoid with ROS 2 and machine learning for adaptive end-to-end robotic systems.',
    category: 'Humanoids',
    tags: ['Humanoid', 'ROS2', 'Reinforcement Learning', 'IMU', 'Actuators', 'Machine Learning', 'C++', 'Python'],
    status: 'Active',
    duration: 'Fall 2025',
    lead: 'Vedant Soni',
    leadEmail: 'ved.soni@tamu.edu',
    goals: [
      'Build a simple test/training chassis and establish software stack',
      'Integrate actuators and IMU on Ubuntu 22.04 + ROS 2',
      'Implement deep RL for fundamental movement patterns'
    ],
    lookingFor: [
      'CAD & 3D printing prototyping',
      'Electronics integration & troubleshooting',
      'ROS 2 control loop development and sensors',
      'Embedded C++/Python',
      'RL implementation and control theory'
    ],
    images: ['https://picsum.photos/seed/eden1/800/600']
  },
  {
    id: 'fash',
    image: 'https://picsum.photos/seed/fash/300/300',
    title: 'FASH',
    subtitle: 'Fashionable Assistive System for Health',
    description: 'Designing assistive robotic garments, starting with a wearable corset for posture, sensing, and biomechanical feedback.',
    category: 'Wearable Robotics',
    tags: ['Wearables', 'Sensors', 'Embedded', 'Biomechanics', 'PyBullet', 'Fashion Tech', 'CAD'],
    status: 'Active',
    duration: 'Fall 2025',
    lead: 'Aarathi Devakumar',
    leadEmail: 'aarathi_devakumar13@tamu.edu',
    goals: [
      'Research sensors and materials',
      'Create an embedded testbed',
      'Develop a PyBullet simulation of the back/corset system'
    ],
    lookingFor: [
      'MEEN, ECEN, ESET, MXET, BMEN (all interested welcome)',
      'Fashion design basics (sewing, stitching) plus',
      'CAD, torque, gear ratios, prototyping, testing',
      'Embedded systems, circuit design, sensors',
      'Python or C++ experience'
    ],
    images: ['https://picsum.photos/seed/fash1/800/600']
  },
  {
    id: 'germ',
    image: 'https://picsum.photos/seed/germ/300/300',
    title: 'GERM',
    subtitle: 'Self-Regulating Aeroponics Box',
    description: 'Automated plant growth box using aeroponics, LEDs, and climate control with redesigned, water-resistant internals.',
    category: 'Automation',
    tags: ['Automation', 'Aeroponics', 'PCB', 'Controls', 'IoT', 'Mechanical'],
    status: 'Active',
    duration: 'Fall 2025',
    lead: 'Jordan Durst',
    leadEmail: 'jordandurst@tamu.edu',
    goals: [
      'Redesign lighting to reduce heat damage',
      'Improve cable management and simultaneous system operation',
      'Water-resistant redesign and begin first grow cycle'
    ],
    lookingFor: [
      'Mechanical Design (SolidWorks)',
      'Electrical circuit/PCB design',
      'Controls & algorithms for lighting, fan, and pump'
    ],
    images: ['https://picsum.photos/seed/germ1/800/600']
  },
  {
    id: 'larm',
    image: 'https://picsum.photos/seed/larm/300/300',
    title: 'LARM',
    subtitle: 'Lab Assisting Robotic Manipulator',
    description: 'An autonomous 6-DOF arm for wet-lab tasks like injection, pouring, and stirring using IK and motion planning.',
    category: 'Manipulation',
    tags: ['Manipulator', 'IK', 'Motion Planning', 'Robotics Arm', 'CAD', 'Electronics'],
    status: 'Active',
    duration: 'Fall 2025',
    lead: 'Dharmik Patel',
    leadEmail: 'dharmik.p45@tamu.edu',
    goals: [
      'Design lower arm segment and motor mounts',
      'Design a liquid-capable gripper and rotating base',
      'Demonstrate basic positioning and mixing demo',
      'Optimize power solution safety and organization'
    ],
    lookingFor: [
      'CAD experience (many 3D printed parts)',
      'Electronics and wiring robustness',
      'Interest in kinematics and motion planning',
      'Interest in medical/lab applications'
    ],
    images: ['https://picsum.photos/seed/larm1/800/600']
  },
  {
    id: 'maze',
    image: 'https://picsum.photos/seed/maze/300/300',
    title: 'MAZE',
    subtitle: 'Autonomous Lidar Maze Robot',
    description: 'Fully autonomous robot that maps and navigates randomly generated mazes using Lidar and fast marching tree algorithms.',
    category: 'Autonomy',
    tags: ['Lidar', 'Path Planning', 'ROS2', 'C++', 'Kinematics', 'Autonomy'],
    status: 'Active',
    duration: 'Fall 2025',
    lead: 'David Boosi',
    leadEmail: 'djb2005@tamu.edu',
    goals: [
      'Finalize hardware stack for current CAD',
      'Update planning software for differential drive base',
      'Develop kinematics and RPLidar software for movement'
    ],
    lookingFor: [
      'C++ programming and algorithms',
      'ROS 2 development',
      'Controls, path planning, and kinematics',
      'Lidar, microcontrollers, and robotics hardware'
    ],
    images: ['https://picsum.photos/seed/maze1/800/600']
  },
  {
    id: 'olsn',
    image: 'https://picsum.photos/seed/olsn/300/300',
    title: 'OLSN',
    subtitle: 'Custom Pediatric Prosthetic Hand',
    description: 'Affordable, custom prosthetic hand for a local child using active EMG mechanism and passive ratcheting backup.',
    category: 'Biomedical Robotics',
    tags: ['Prosthetics', 'EMG', 'Biomedical', 'CAD', 'Embedded'],
    status: 'Active',
    duration: 'Fall 2025',
    lead: 'Will McGarity',
    leadEmail: 'wmgarity777@tamu.edu',
    goals: [
      'Polish full hand design for ergonomics',
      'Create sleeve/mounting using 3D scan',
      'Make parametric model for growth adjustments',
      'Provide active and passive prototype to patient'
    ],
    lookingFor: [
      'Passion for prosthetics',
      'Biomedical integration knowledge',
      'Mechanical CAD to parameterize models',
      'Electrical knowledge of EMG sensors'
    ],
    images: ['https://picsum.photos/seed/olsn1/800/600']
  },
  {
    id: 'orio',
    image: 'https://picsum.photos/seed/orio/300/300',
    title: 'ORIO',
    subtitle: '3D-Printed Equatorial Mount',
    description: 'An equatorial star tracker mount to follow celestial targets for long exposures using stepper motors and microcontroller control.',
    category: 'Astronomy Robotics',
    tags: ['Astronomy', 'Stepper Motors', 'Arduino', 'Tracking', '3D Printing', 'CAD'],
    status: 'Active',
    duration: 'Fall 2025',
    lead: 'Dalys Guajardo',
    leadEmail: 'dalys@tamu.edu',
    goals: [
      'Research mechanical and electrical configurations',
      'Identify electrical components and model mechanisms',
      'Assemble electrical configurations for prototypes'
    ],
    lookingFor: [
      'ELEN, MEEN, MXET, ESET, CSPE (all considered)',
      'Interest in astronomy/astrophotography',
      'SolidWorks, basic mechanisms, 3D printing',
      'Basic circuits and Arduino/Raspberry Pi',
      'Stepper motor knowledge'
    ],
    images: ['https://picsum.photos/seed/orio1/800/600']
  },
  {
    id: 'pobs',
    image: 'https://picsum.photos/seed/pobs/300/300',
    title: 'POBS',
    subtitle: 'Positive Operative Buoyancy Submersible',
    description: 'Surface-floating submersible with motor-driven depth control for aquatic data collection and outreach/competition platforms.',
    category: 'Marine Robotics',
    tags: ['Marine Robotics', 'Submarine', 'Controls', 'Simulation', 'ROS2', 'Waterproofing', 'CAD'],
    status: 'Active',
    duration: 'Fall 2025',
    lead: 'Malcolm Ferguson',
    leadEmail: 'malcolm@tamu.edu',
    goals: [
      'Launch POBS research vessel and outreach Mini-Turtle',
      'Advance racing submarine toward launch',
      'Develop aquatic simulation environments in Ansys'
    ],
    lookingFor: [
      'AERO, CSCP, CPEN, ELEN, EVEN, MEEN, MSEN, MXET, OCEN (all welcome)',
      'Electronics (especially waterproofing)',
      'Controls and fluid dynamics',
      'ROS2 and Raspberry Pi',
      'Advanced CAD (SolidWorks 2024)',
      'Fluid simulation experience (Ansys, etc.)'
    ],
    images: ['https://picsum.photos/seed/pobs1/800/600']
  },
  {
    id: 'quad',
    image: 'https://picsum.photos/seed/quad/300/300',
    title: 'QUAD',
    subtitle: 'Quadruped Walking Robot',
    description: 'A legged quadruped using brushless motors and cycloidal gearboxes to explore dynamic locomotion and balance.',
    category: 'Legged Robotics',
    tags: ['Quadruped', 'Legged Locomotion', 'Control', 'BLDC', 'Cycloidal Gearbox', 'Python', 'CAD'],
    status: 'Active',
    duration: 'Fall 2025',
    lead: 'Ian Lansdowne',
    leadEmail: 'ianl@tamu.edu',
    goals: [
      'Build a full-sized quadruped platform',
      'Design and assemble legs and chassis',
      'Program and develop coordinated leg control algorithms'
    ],
    lookingFor: [
      'Mechanical design (SolidWorks)',
      'Control systems and algorithms',
      'Robotics programming (Python)'
    ],
    images: ['https://picsum.photos/seed/quad1/800/600']
  },
  {
    id: 'snout',
    image: 'https://picsum.photos/seed/snout/300/300',
    title: 'SNOUT',
    subtitle: 'Olfactory Sensing Robot',
    description: 'A robotic vehicle equipped with advanced olfactory sensors to detect and identify scents in varied applications.',
    category: 'Sensing & Perception',
    tags: ['Sensors', 'IMS', 'Machine Learning', 'Embedded', 'Robotics'],
    status: 'Active',
    duration: 'Fall 2025',
    lead: 'Anirudh Subramanian',
    leadEmail: 'asubramanian@tamu.edu',
    goals: [
      'Develop a functional IMS sensor module',
      'Prototype intake, drift tube, detector, and electronics on a mobile chassis',
      'Begin training a Random Forest Classifier on IMS data',
      'Evaluate detection accuracy in controlled environments'
    ],
    lookingFor: [
      'Embedded Systems',
      'Circuit Design',
      'CAD Designing',
      'Python/C++ programming',
      'Machine Learning',
      'Students in CHEN, ECEN, ESET, CSCE, or related majors'
    ],
    images: [
      'https://picsum.photos/seed/snout1/800/600',
      'https://picsum.photos/seed/snout2/800/600'
    ]
  },
  {
    id: 'star',
    image: 'https://picsum.photos/seed/star/300/300',
    title: 'STAR',
    subtitle: 'Survey and Terrain Analysis Robot',
    description: 'Advanced object-avoidance robot navigating challenging terrain using stereo vision and embedded compute.',
    category: 'Computer Vision',
    tags: ['Stereo Vision', 'TDA4VM', 'RTOS', 'PCB', 'Object Avoidance', 'CV/ML', 'C'],
    status: 'Active',
    duration: 'Fall 2025',
    lead: 'Brighton Sikarskie',
    leadEmail: 'brighton.sikarskie@tamu.edu',
    goals: [
      'Design and verify PWBs, order/solder PCBs, and test PCBAs',
      'Write low-level libraries for SK-TDA4VM board',
      'Begin CV model development'
    ],
    lookingFor: [
      'ESET, CPEN, ECEN, CSCP, MXET',
      'Power engineers (430W total system)',
      'PCB designers (6V and 5V lines pending)',
      'RTOS developers for low-level C libraries',
      'CV/ML engineers for stereo cameras',
      'Soldering help for complex boards',
      'EE review and PID control',
      'Comprehensive testing and validation'
    ],
    images: ['https://picsum.photos/seed/star1/800/600']
  },
  {
    id: 'swrm',
    image: 'https://picsum.photos/seed/swrm/300/300',
    title: 'SWRM',
    subtitle: 'Swarm Robotics for Collective Behavior',
    description: 'Exploring ground-level swarm robotics operating as single units and synchronized collectives for art and functional tasks.',
    category: 'Multi-Robot Systems',
    tags: ['Swarm Robotics', 'Microcontrollers', 'Python', 'C++', '3D Printing', 'Mechanisms', 'Communication'],
    status: 'Active',
    duration: 'Fall 2025',
    lead: 'Bennett Moorman',
    leadEmail: 'btmoorman04@tamu.edu',
    goals: [
      'Define design goals and parameters for first iteration',
      'Prototype first robot emphasizing connection and communication',
      'Explore swarm communication and coordination approaches'
    ],
    lookingFor: [
      'MEEN or strong mechanics/SolidWorks (3D printing focus)',
      'ESET/CPEN/CSCE/ECEN or microcontroller + Python/C++ background',
      'Interest and willingness to learn'
    ],
    images: ['https://picsum.photos/seed/swrm1/800/600']
  },
  {
    id: 'vest',
    image: 'https://picsum.photos/seed/vest/300/300',
    title: 'VEST',
    subtitle: 'Canine Vital Signs Wearable',
    description: 'Autonomous wearable monitoring canine vitals with alerts, GPS, and smartphone connectivity.',
    category: 'Wearable Robotics',
    tags: ['Wearables', 'Biosensors', 'Signal Processing', 'Wireless', 'Mobile App', 'JavaScript', 'Python'],
    status: 'Active',
    duration: 'Fall 2025',
    lead: 'Ethan Guerrero',
    leadEmail: 'ethanjg2814@tamu.edu',
    goals: [
      'Study canine physiology and signal processing basics',
      'Design vest to meet user (dog) needs and perform literature reviews',
      'Iterative prototyping and hardware testing',
      'Develop detection/alert algorithms and sensor circuits',
      'Learn JavaScript for app and interface design'
    ],
    lookingFor: [
      'Biomedical engineering (biosensors, physiology)',
      'Electrical engineering (circuits, microcontrollers)',
      'Python and/or JavaScript',
      'Interest in animal health and wearables',
      'Signal processing and data filtering'
    ],
    images: ['https://picsum.photos/seed/vest1/800/600']
  },
  {
    id: 'virt',
    image: 'https://picsum.photos/seed/virt/300/300',
    title: 'VIRT',
    subtitle: 'Vision-Integrated Robotic Turret',
    description: 'A harmless sentry turret that uses an FPGA-driven CV system to find, track, and follow a target.',
    category: 'Embedded Vision',
    tags: ['FPGA', 'Computer Vision', 'Turret', 'Motor Control', 'Verilog', 'Embedded'],
    status: 'Active',
    duration: 'Fall 2025',
    lead: 'Raquel Garcia',
    leadEmail: 'raquelgarcia@tamu.edu',
    goals: [
      'Finish camera-to-HDMI configuration',
      'Prototype simple color-filtering CV on FPGA',
      'Program motor controls and assemble larger chassis'
    ],
    lookingFor: [
      'Verilog/C for low-level hardware',
      'Mechanical design with motor system knowledge',
      'Motor controls'
    ],
    images: ['https://picsum.photos/seed/virt1/800/600']
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