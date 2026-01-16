export const projects = [
  {
    id: 'dirt',
    image: '/assets/DIRT/DirtTtempCoverpic.webp',
    title: 'DIRT',
    subtitle: 'Diagnostic Inspection Robot for Terrain',
    description: "To ensure that A&M continues to prosper in agriculture research and technology, soil quality must be ensured. DIRT aims to design a robust rover that can traverse varying terrains to take more frequent and more accurate soil measurements. DIRT will perform tests using a deep spectroscopy probe to get the most thorough reading of soil quality.",
    category: 'Agricultural Robotics',
    tags: ['Agriculture', 'Rover', 'Spectroscopy', 'Soil Science', 'Robotics', 'CAD', 'PCB', 'Embedded'],
    status: 'Active',
    duration: 'Spring 2026',
    lead: 'Anagha Dharmavaram',
    leadEmail: 'anagha2325@tamu.edu',
    goals: [
      'Design a robust rover chassis for varied terrain',
      'Develop deep spectroscopy probe integration',
      'Enable frequent and accurate soil measurements',
      'Support A&M agricultural research with advanced data',
      'Iterate on mechanical, software, and electrical subsystems'
    ],
    lookingFor: [
      'Mechanical: CAD, chassis design, mechanical prototyping (~4 positions)',
      'Software: Rover coding, data handling, automation (~2-3 positions)',
      'Electrical: PCB design, wiring, sensor integration (~1-2 positions)'
    ],
    images: [
      '/assets/DIRT/DirtTtempCoverpic.webp'
    ]
  },
  // Alphabetical by title
  {
    id: 'ache',
    image: '/assets/ACHE/Ache-Card.webp',
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
    images: [
      '/assets/ACHE/Ache-Cover.webp',
      '/SCPosters/ACHE_SC_25_11.pptx.webp',
      '/assets/ACHE/Ache-Hero-1.webp',
      '/assets/ACHE/Ache-Hero-2.webp',
      '/assets/ACHE/Ache-Hero-3.webp'
    ]
  },
  {
    id: 'amps',
    image: '/assets/AMPS/AMPS-Card.webp',
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
    images: [
      '/assets/AMPS/Amps-Cover.webp',
      '/SCPosters/AMPS_SC_25_11.pptx.webp',
      '/assets/AMPS/Amps-Hero-1.webp',
      '/assets/AMPS/Amps-Hero-2.webp',
      '/assets/AMPS/Amps-Hero-3.webp',
      '/assets/AMPS/Amps-Hero-4.webp'
    ]
  },
  {
    id: 'ankl',
    image: '/assets/ANKL/Anklecoverpic.jpg',
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
    images: [
      '/SCPosters/ANKL_SC_25_11.pptx.webp',
      '/assets/ANKL/Ankl-Hero-1.webp',
      '/assets/ANKL/Ankl-Hero-2.webp',
      '/assets/ANKL/Ankl-Hero-3.webp'
    ]
  },
  {
    id: 'beest',
    image: '/assets/BEEST/BEEST-Card.webp',
    title: 'BEEST',
    subtitle: 'Electromechanical Strandbeest',
    description: 'Raspberry-Pi-powered Strandbeest robot using Jansen linkages with automated TURTLE-like exterior shell.',
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
    images: [
      '/assets/BEEST/BEEST-Cover.webp',
      '/SCPosters/BEEST_SC_25_11.pptx.webp',
      '/assets/BEEST/BEEST-Hero-1.webp',
      '/assets/BEEST/BEEST-Hero-2.webp',
      '/assets/BEEST/BEEST-Hero-3.webp'
    ]
  },
  {
    id: 'blnc',
    image: '/assets/BLNC/BLNC-Card.webp',
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
    images: [
      '/assets/BLNC/BLNC-Cover.webp',
      '/SCPosters/BLNC_SC_25_11.pptx.webp',
      '/assets/BLNC/BLNC-Hero-1.webp',
      '/assets/BLNC/BLNC-Hero-2.webp'
    ]
  },
  {
    id: 'cmbt',
    image: '/assets/CMBT/CMBT-Card.webp',
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
    images: [
      '/SCPosters/CMBT_SC_25_11.pptx.webp',
      '/assets/CMBT/CMBT-Hero-1.webp',
      '/assets/CMBT/CMBT-Hero-2.webp',
      '/assets/CMBT/CMBT-Hero-3.webp',
      '/assets/CMBT/CMBT-Hero-4.webp'
    ]
  },
  {
    id: 'cntr',
    image: '/assets/CNTR/CNTR-Card.webp',
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
    images: [
      '/assets/CNTR/CNTR-Cover.webp',
      '/SCPosters/CNTR_SC_25_11.pptx.webp',
      '/assets/CNTR/CNTR-Hero-1.webp'
    ]
  },
  {
    id: 'dron',
    image: '/assets/DRON/DRON-Card.webp',
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
    images: [
      '/SCPosters/DRON_SC_25_11.pptx.webp',
      '/assets/DRON/DRON-Hero-1.webp',
      '/assets/DRON/DRON-Hero-2.webp'
    ]
  },
{
  id: 'eden',
  image: '/assets/EDEN/EDENcover.png',
  title: 'EDEN',
  subtitle: 'AI-Enabled Humanoid Research',
  description: 'Building an AI-enabled humanoid with ROS 2 and machine learning for adaptive end-to-end robotic systems.',
  category: 'Humanoids',
  tags: ['Humanoid', 'ROS2', 'Reinforcement Learning', 'IMU', 'Actuators', 'Machine Learning', 'C++', 'Python'],
  status: 'Active',
  duration: 'Fall 2025',
  lead: 'Vedant Soni',
  leadEmail: 'ved.soni@tamu.edu',
  website: {
    url: 'https://eden-orpin.vercel.app/',
    label: 'Visit our website'
  },
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
  images: [
    '/SCPosters/EDEN_SC_25_11.pptx.webp'
  ]
},
  {
    id: 'fash',
    image: '/assets/FASH/FASH-Card.webp',
    title: 'FASH',
    subtitle: 'Fashionable Assistive System for Health',
    description: 'To explore how fashion design can be integrated into wearable engineering and robotics as a means of expression and performance',
    category: 'Wearable Robotics',
    tags: ['Wearables', 'Sensors', 'Embedded', 'Biomechanics', 'PyBullet', 'Fashion Tech', 'CAD'],
    status: 'Active',
    duration: 'Fall 2025',
    lead: 'Aarathi Devakumar',
    leadEmail: 'aarathi_devakumar13@tamu.edu',
    goals: [
     "Develop a full scale model of our wing prototype from last semester",
"Research linear actuators for potential flying/lifting capabilities",
"Develop wing lighting system with bluetooth controls"
    ],
    lookingFor: [
      'MEEN, ECEN, ESET, MXET, BMEN (all interested welcome)',
      'Fashion design basics (sewing, stitching) plus',
      'CAD, torque, gear ratios, prototyping, testing',
      'Embedded systems, circuit design, sensors',
      'Python or C++ experience'
    ],
    images: [
      '/SCPosters/FASH_SC_25_11.webp',
      '/assets/FASH/FashAarathiPic.jpg',
      '/assets/FASH/FASHGroupPic.jpg',
      '/assets/FASH/FashgroupPic2.jpg',
      '/assets/FASH/FashPolaroidPIc.jpg',
    ]
  },
  {
    id: 'germ',
    image: '/assets/GERM/GERM-Card.webp',
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
    images: [
      '/SCPosters/GERM_SC_25_11.pptx.webp',
      '/assets/GERM/GERM-Hero-1.webp',
      '/assets/GERM/GERM-Hero-2.webp',
      '/assets/GERM/GERM-Hero-3.webp'
    ]
  },
  {
    id: 'larm',
    image: '/assets/LARM/LARM-Card.webp',
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
    images: [
      '/SCPosters/LARM_SC_25_11.pptx.webp',
      '/assets/LARM/LARM-Hero-1.webp',
      '/assets/LARM/LARM-Hero-2.webp',
      '/assets/LARM/LARM-Hero-3.webp',
      '/assets/LARM/LARM-Hero-4.webp'
    ]
  },
  {
    id: 'maze',
    image: '/assets/MAZE/MAZE-Card.webp',
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
    images: [
      '/assets/MAZE/MAZE-Cover.webp',
      '/SCPosters/MAZE_SC_25_11.webp',
      '/assets/MAZE/MAZE-Hero-1.webp',
      '/assets/MAZE/MAZE-Hero-2.webp'
    ]
  },
  {
    id: 'olsn',
    image: '/assets/OLSN/OLSN-Card.webp',
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
    images: [
      '/SCPosters/OLSN_SC_25_11.pptx.webp'
    ]
  },
  {
    id: 'orio',
    image: '/assets/ORIO/ORIO-Card.webp',
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
    images: [
      '/assets/ORIO/ORIO-Cover.webp',
      '/SCPosters/ORIO_SC_25_11.pptx.webp',
      '/assets/ORIO/ORIO-Hero-1.webp',
      '/assets/ORIO/ORIO-Hero-2.webp',
      '/assets/ORIO/ORIO-Hero-3.webp'
    ]
  },
  {
    id: 'pobs',
    image: '/assets/POBS/POBS-Card.webp',
    title: 'POBS',
    subtitle: 'Positive Operative Buoyancy Submersible',
    description: 'Surface-floating submersible with motor-driven depth control for aquatic data collection and outreach/competition platforms.',
    category: 'Marine Robotics',
    tags: ['Marine Robotics', 'Submarine', 'Controls', 'Simulation', 'ROS2', 'Waterproofing', 'CAD'],
    status: 'Active',
    duration: 'Fall 2025',
    lead: 'Aidan Briggs',
    leadEmail: 'aidanbriggs@tamu.edu',
    goals: [
      'Launch POBS research vessel and outreach Mini-TURTLE',
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
    images: [
      '/assets/POBS/POBS-Cover.webp',
      '/SCPosters/POBS_SC_25_11.pptx.webp',
      '/assets/POBS/POBS-Hero-1.webp',
      '/assets/POBS/POBS-Hero-2.webp',
      '/assets/POBS/POBS-Hero-3.webp'
    ]
  },
  {
    id: 'quad',
    image: '/assets/QUAD/QUAD-Card.webp',
    title: 'QUAD',
    subtitle: 'Quadruped Walking Robot',
    description: 'A legged quadruped using brushless motors and cycloidal gearboxes to explore dynamic locomotion and balance.',
    category: 'Legged Robotics',
    tags: ['Quadruped', 'Legged Locomotion', 'Control', 'BLDC', 'Cycloidal Gearbox', 'Python', 'CAD'],
    status: 'Archived',
    duration: '',
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
    images: [
      '/SCPosters/QUAD Poster Fall 2025_page-0001.webp',
      '/assets/QUAD/QUAD-Hero-1.webp',
      '/assets/QUAD/QUAD-Hero-2.webp',
      '/assets/QUAD/QUAD-Hero-3.webp'
    ]
  },
  {
    id: 'snout',
    image: '/assets/SNOUT/SNOUT-Card.webp',
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
      '/SCPosters/SNOUT_SC_25_11.pptx.webp',
      '/assets/SNOUT/SNOUT-Hero-1.webp',
      '/assets/SNOUT/SNOUT-Hero-2.webp'
    ]
  },
  {
    id: 'swrm',
    image: '/assets/SWRM/SWRM-Card.webp',
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
    images: [
      '/assets/SWRM/SWRM-Cover.webp',
      '/SCPosters/SWRM_SC_25_11.pptx.webp',
      '/assets/SWRM/SWRM-Hero-1.webp',
      '/assets/SWRM/SWRM-Hero-2.webp'
    ]
  },
  {
    id: 'vest',
    image: '/assets/VEST/VEST-Card.webp',
    title: 'VEST',
      subtitle: 'Noninvasive Canine Health Monitoring Vest',
      description: "The VEST project is a noninvasive wearable vest for dogs that enables continuous monitoring of health and physiological condition across breeds and sizes. It tracks body temperature, respiratory rate, and heart rate, and uses a robotics-based auto-tightening mechanism for proper sensor contact. Data is sent in real time to a mobile app for owners and veterinarians, enabling early detection of health issues.",
        description: "The VEST project is a noninvasive wearable vest for dogs that enables continuous monitoring of health and physiological condition across breeds and sizes. It tracks body temperature, respiratory rate, and heart rate, and uses a robotics-based auto-tightening mechanism for proper sensor contact. Data is sent in real time to a mobile app for owners and veterinarians, enabling early detection of health issues.\n\nMotivation: Inspired by real cases—a team member's Pomeranian with tracheomalacia, where early respiratory monitoring could have enabled timely intervention, and the loss of Reveille IX, Texas A&M's mascot, to pneumonia, where continuous vital sign tracking could have provided unmistakable evidence for earlier treatment. These experiences highlight the need for objective, real-time monitoring to improve canine health outcomes.",
      purpose: "Develop a vest that provides reliable, real-time vital sign monitoring for dogs, ensuring comfort and adaptability for all breeds and sizes, and supporting early intervention for health complications.",
      background: "Inspired by: 1) A team member's Pomeranian with tracheomalacia (early respiratory monitoring could have helped). 2) The passing of Reveille IX, Texas A&M mascot, from pneumonia (continuous vital sign tracking could have enabled earlier intervention).",
      motivation: "This project was motivated by personal experiences with canine health challenges, including a team member's Pomeranian diagnosed with tracheomalacia and the loss of Reveille IX, Texas A&M's mascot, to pneumonia. Both cases highlighted the need for continuous, objective monitoring of vital signs to enable earlier intervention and better outcomes for dogs.",
      problem: "Owners and vets rely on subjective observation and periodic exams, missing real-time data. VEST enables continuous monitoring, early warnings, and accessible health data for all breeds and sizes.",
      roles: [
        'Project Leader: Oversees operations, budget, design reviews, meetings, networking, recruitment.',
        'Front-End Team: Mobile app UI, data visualization, API integration.',
        'Back-End Team: Vital sign monitoring, data management, machine learning, wireless protocols.',
        'Electrical Team: Hardware, signal processing, PCB, battery optimization, validation.',
        'Design Team: Vest structure, auto-tightening, comfort, durability, hardware integration.'
      ],
      positionsAvailable: [
        'Front-End Coder (1 position)',
        'Electrical Member (1 position)',
        'Design Members (2 positions)'
      ],
      requirements: [
        'Passion for animals and impact',
        'Independent learning',
        'Leadership and collaboration',
        'Problem-solving mindset',
        'Evidence-based thinking',
        '12–14 hours/week commitment',
        'Open to all grade levels and majors',
        'Official TURTLE club membership required for project credit'
      ],
      qualifications: [
        'Front-End: Mobile/web app experience, UI interest, data presentation',
        'Back-End: Coding experience, data management, software integration',
        'Electrical: Circuits/electronics experience, sensor interest, troubleshooting',
        'Design: Sewing/3D printing/materials experience, prototyping, ergonomic design'
      ],
      application: "Contact Ethan Guerrero (ethanjg2814@tamu.edu) with: Brief statement of interest, preferred team(s) and relevant experience, resume, confirmation of 12–14 hour/week availability, commitment to TURTLE. Applications reviewed on a rolling basis; early applications encouraged.",
        earlyApplication: "Interested or have questions? Reach out to Ethan Guerrero (ethanjg2814@tamu.edu) any time to learn more or express your interest—early contact is encouraged!",
      category: 'Wearable Robotics',
      tags: ['Wearables', 'Biosensors', 'Signal Processing', 'Wireless', 'Mobile App', 'JavaScript', 'Python', 'Animal Health', 'Robotics', 'Hardware', 'Machine Learning'],
      status: 'Active',
      duration: 'Fall 2025',
      lead: 'Ethan Guerrero',
      leadEmail: 'ethanjg2814@tamu.edu',
      goals: [
        'Develop a noninvasive vest for continuous canine vital sign monitoring',
        'Implement robotics-based auto-tightening for sensor contact',
        'Transmit real-time data to a mobile app for owners/vets',
        'Enable early detection of health complications',
        'Ensure comfort and adaptability for all breeds and sizes',
        'Integrate hardware, software, and design for robust system',
        'Conduct literature reviews and evidence-based design decisions'
      ],
      lookingFor: [
        'Front-End: Mobile/web app development, UI/UX, data visualization',
        'Back-End: Coding, data management, software integration, machine learning',
        'Electrical: Circuits, electronics, sensor integration, troubleshooting',
        'Design: Sewing, 3D printing, prototyping, ergonomic design',
        'Passion for animal health and technology',
        'Open to all majors and grade levels'
      ],
      images: [
        '/SCPosters/REVISDED_VEST_POSTER.pptx.webp'
        ]
    },
  {
    id: 'virt',
    image: '/assets/VIRT/VIRT-Card.webp',
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
    images: [
      '/SCPosters/VIRT_SC_25_11_v2_PRINT_THIS.pptx.webp'
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