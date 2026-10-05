export interface Project {
  id: string;
  title: string;
  tagline: string;
  category: 'Robotics & Embedded' | 'Web Engineering' | 'Software Systems' | 'Education & Community';
  featured: boolean;
  status: 'Deployed' | 'Assembled & Operational' | 'Operational' | 'Active Exploration' | 'Completed';
  image?: string;
  githubUrl: string;
  liveUrl?: string;
  overview: string;
  keyHighlights: string[];
  techStack: string[];
  specifications?: {
    dof?: string;
    controller?: string;
    actuators?: string;
    power?: string;
    firmware?: string;
    chassis?: string;
  };
  deepDive: {
    problemStatement: string;
    engineeringSolution: string;
    hardwareSoftwareArchitecture: string;
    learningsAndOutcomes: string;
  };
}

export const PROJECTS: Project[] = [
  {
    id: 'bhujha-robotic-arm',
    title: 'BHUJHA — Final Prototype (6-DOF Robotic Arm)',
    tagline: 'A robotic arm built with mechanics, electronics and a lot of patience.',
    category: 'Robotics & Embedded',
    featured: true,
    status: 'Assembled & Operational',
    image: '/src/assets/images/bhujha_real_prototype_1791168871723.jpg',
    githubUrl: 'https://github.com/killopgaming',
    overview: 'BHUJHA is an articulated 6-Degree-of-Freedom (6-DOF) robotic arm engineered with custom 3D-printed linkages, high-torque metal-gear servo motors, and a dual-microcontroller architecture. An ESP32 acts as the main controller handling kinematics and trajectory execution, while an Arduino Nano with MPU6050 motion sensor and flex sensors enables intuitive gesture control. Powered by a regulated 12V supply and 5V battery pack with HC-05 Bluetooth telemetry.',
    keyHighlights: [
      '6 Degrees of Freedom: Base Joint, Shoulder Joint, Elbow Joint, Wrist Joint 1, Wrist Joint 2, and Gripper End-Effector for complete spatial articulation.',
      'Dual-Microcontroller Architecture: ESP32 serves as the main motion controller; Arduino Nano interfaces with MPU6050 motion sensor and flex sensors for gesture-driven teleoperation.',
      'Actuator Powerhouse: 6× MG996R high-torque metal-gear servo motors providing reliable payload retention across pick, move, and hold cycles.',
      'Wireless Teleoperation: HC-05 Bluetooth module allowing wireless serial commands and real-time motion streaming.',
      'Modular 3D-Printed Structure: Custom white 3D-printed arm linkages, friction-fit joint hubs, and heavy-duty cylindrical base embossed with "BHUJHA".',
      'Centralized Control Electronics: Enclosed transparent chassis housing motor drivers (L298N), buck regulators, battery pack, and isolated logic wiring.'
    ],
    techStack: [
      'ESP32 (Main Controller)',
      'Arduino Nano (Gesture Control)',
      '6× MG996R Servo Motors',
      'MPU6050 Motion Sensor',
      'Flex Sensor',
      'HC-05 Bluetooth Module',
      'L298N Motor Driver',
      '3D Printed Arm & Base',
      '12V & 5V Dual Power'
    ],
    specifications: {
      dof: '6 Degrees of Freedom (Base, Shoulder, Elbow, Wrist 1, Wrist 2, Gripper)',
      controller: 'ESP32 (Main System) + Arduino Nano (Gesture Tracking)',
      actuators: '6× MG996R High-Torque Metal Gear Servos',
      power: '12V Power for stable operation + 5V Battery Pack for logic',
      firmware: 'Embedded C/C++ with sensor fusion & PWM driver libraries',
      chassis: 'White 3D-printed structural links + Embossed cylindrical base'
    },
    deepDive: {
      problemStatement: 'Commercial educational robotic arms are either prohibitively expensive closed-source systems or flimsy kits with insufficient degrees of freedom that cannot replicate realistic human upper-limb dexterity.',
      engineeringSolution: 'Built a 6-DOF articulated robotic arm from scratch, combining parametric 3D printed mechanical linkages with 6× MG996R servos and dual microcontrollers (ESP32 for system master loop, Arduino Nano for gesture sensing via MPU6050 & flex sensors).',
      hardwareSoftwareArchitecture: 'Hardware layer features dual power rails (12V main power for high-torque servo stability and isolated 5V battery pack for logic). HC-05 Bluetooth provides wireless command transmission, while L298N driver and PWM channels orchestrate smooth pick, move, and hold trajectories.',
      learningsAndOutcomes: 'Mastered joint balance kinematics, multi-channel high-current power distribution, MPU6050 IMU calibration, flex sensor analog signal conditioning, and durable 3D print mechanical assembly.'
    }
  },
  {
    id: 'portfolio-website',
    title: 'Personal Portfolio & Evidence Proof Engine',
    tagline: 'Interactive developer terminal proving CV credentials through real verifiable manifests, project breakdowns, and live certificate inspection',
    category: 'Web Engineering',
    featured: true,
    status: 'Deployed',
    image: '/src/assets/images/robotics_lab_workbench_1791167326196.jpg',
    githubUrl: 'https://github.com/killopgaming',
    liveUrl: 'https://github.com/killopgaming',
    overview: 'A zero-compromise developer portfolio engineered to replace claims with proof. Built with a dark developer terminal visual identity (#0a0a0f), high-contrast accessibility (WCAG AA), typewriter role switcher, interactive 31-item certificate proof manifest, and an end-to-end recruitment inquiry portal directly integrated with Dev Chhangani.',
    keyHighlights: [
      'Evidence-First Architecture: 31 cross-referenced certificates and awards with live verification IDs, credential links, and modal visualizers.',
      'Curated Robotics & Web Portfolios: In-depth technical breakdowns of BHUJHA 5-DOF arm and software workflows.',
      'Resilient Offline-Ready UI: Guaranteed visibility fallback ensuring content never vanishes during print, PDF generation, or slow networks.',
      'Direct Recruiter Portal: Structured inquiry portal with validated contact channels and custom message payloads.'
    ],
    techStack: [
      'React 19',
      'TypeScript',
      'Tailwind CSS v4',
      'Vite',
      'Lucide Icons',
      'JetBrains Mono',
      'Inter Typography'
    ],
    specifications: {
      dof: 'Full Responsive Layout (Mobile, Tablet, 1440px Ultra-Wide)',
      controller: 'React Component State & Custom Hook Controllers',
      actuators: 'Tailwind CSS transitions & Keyframe Terminal Animations',
      power: '100% Client-Side Static Execution (Zero backend dependency)',
      firmware: 'Modern ES2022 TypeScript codebase with strict typing',
      chassis: 'Developer Terminal Design Language (#0a0a0f, Cyan #00f5ff, Violet #7c3aed)'
    },
    deepDive: {
      problemStatement: 'Traditional developer portfolios only state keywords without evidence, hiding the real depth of work and leaving recruiters guessing about credential validity.',
      engineeringSolution: 'Created an extensible JSON manifest system where every certificate and project is an immutable proof record with authentic issuer credentials, exact date stamps, and verifiable links.',
      hardwareSoftwareArchitecture: 'Client-side SPA with zero-dependency rendering, tabbed certificate explorer, high-speed instant search filter, and responsive modal viewers.',
      learningsAndOutcomes: 'Gained advanced fluency in responsive web design, WCAG AA dark-mode contrast calculation, UX accessibility, and clean component isolation.'
    }
  },
  {
    id: 'cs50-python-coursework',
    title: 'Python Programming Coursework & Algorithmic Problem Sets',
    tagline: 'Comprehensive algorithmic implementations, unit tests, and software problem sets under Harvard CS50P',
    category: 'Software Systems',
    featured: false,
    status: 'Operational',
    githubUrl: 'https://github.com/killopgaming',
    overview: 'CS50 Python exercises, problem sets, and algorithmic systems developed as part of Harvard University CS50P (twttr.py, playback.py, faces.py, lines.py, scourgify.py, etc.). Demonstrates rigorous problem-solving, clean code conventions, regular expressions, and unit testing with pytest.',
    keyHighlights: [
      'Comprehensive problem sets covering data structures, text parsing, file input/output, and regex pattern matching.',
      'Automated unit testing with pytest to ensure code reliability across diverse input sets.',
      'Object-oriented programming modules implementing custom class models, validation properties, and operator overloading.'
    ],
    techStack: ['Python 3', 'Pytest', 'Regular Expressions', 'File I/O', 'OOP', 'Algorithms'],
    deepDive: {
      problemStatement: 'Writing solid software requires moving beyond simple scripts to modular, readable, well-tested code that adheres to industry standards.',
      engineeringSolution: 'Constructed maintainable Python packages with automated unit tests for every function, handling edge cases and format anomalies cleanly.',
      hardwareSoftwareArchitecture: 'Python 3 runtime environment with custom pytest test fixtures and standard library modules.',
      learningsAndOutcomes: 'Mastered algorithmic time complexity, unit testing strategies, exception handling, and Pythonic code structure.'
    }
  },
  {
    id: 'nvidia-omniverse-work',
    title: 'NVIDIA Omniverse / Kit App Simulation Work',
    tagline: 'Exploration of Omniverse Kit App templates, custom extensions, and physics-based robotic simulations',
    category: 'Robotics & Embedded',
    featured: false,
    status: 'Active Exploration',
    githubUrl: 'https://github.com/killopgaming',
    overview: 'Explored the NVIDIA Omniverse Kit App template, building custom releases and learning extension/dependency workflows. Tested digital twin concepts and physics-based simulation for robotic joints and mechanical collision hulls before physical 3D fabrication.',
    keyHighlights: [
      'Configured Omniverse Kit App environment and learned modular extension architecture.',
      'Simulated joint kinematics and torque requirements in a realistic physics simulation environment.',
      'Integrated CAD meshes into USD (Universal Scene Description) assets for digital twin visualization.'
    ],
    techStack: ['NVIDIA Omniverse', 'USD (Universal Scene Description)', 'Python Scripting', 'Physics Simulation', 'CAD Meshes'],
    deepDive: {
      problemStatement: 'Physical prototyping without preliminary simulation risks mechanical interference and motor overload.',
      engineeringSolution: 'Leveraged Omniverse simulation tools to inspect joint limits and test movement sequences virtually.',
      hardwareSoftwareArchitecture: 'Omniverse Kit SDK with Python bindings for custom runtime extensions.',
      learningsAndOutcomes: 'Acquired hands-on experience with modern 3D simulation pipelines, USD scene composition, and robotics simulation workflows.'
    }
  },
  {
    id: 'indeed-ai-literacy',
    title: 'Digital Literacy & AI Education Initiative',
    tagline: '15+ hours hands-on training empowering 50 Grade XI students in MS Office and AI fundamentals',
    category: 'Education & Community',
    featured: false,
    status: 'Completed',
    githubUrl: 'https://github.com/killopgaming',
    overview: 'A month-long educational volunteering initiative conducted with IN-DEED Foundation at Govt. Vishist Purv Senior Secondary School, Shastri Nagar, Jodhpur. Trained 50 Grade XI students in practical computer literacy, MS Word, Excel, PowerPoint, and artificial intelligence fundamentals.',
    keyHighlights: [
      'Designed and delivered a structured 15+ hour hands-on curriculum tailored for students with little prior computer access.',
      'Mentored students to build digital confidence and create capstone PowerPoint presentations presented to the school principal.',
      'Demystified modern AI tools and basic computational concepts through accessible, interactive classroom learning.'
    ],
    techStack: ['Educational Leadership', 'MS Office (Word, Excel, PPT)', 'AI Basics', 'Public Speaking', 'Curriculum Design'],
    deepDive: {
      problemStatement: 'Students in government schools frequently lack structured hands-on computer exposure, creating a digital divide as technology advances rapidly.',
      engineeringSolution: 'Developed an interactive, practical syllabus where each concept was reinforced with real computer practice and collaborative group work.',
      hardwareSoftwareArchitecture: 'Classroom computer lab environment with structured lesson plans and hands-on exercises.',
      learningsAndOutcomes: 'Developed strong communication, empathy, and leadership skills while empowering 50 students with foundational digital literacy.'
    }
  },
  {
    id: 'drum-tracker-analyzer',
    title: 'Drum Rhythm & Tempo Acoustic Analyzer',
    tagline: 'Audio analysis tool exploring percussion rhythm, BPM tracking, and strike accuracy',
    category: 'Software Systems',
    featured: false,
    status: 'Active Exploration',
    githubUrl: 'https://github.com/killopgaming',
    overview: 'Connecting musical expertise as a Trinity College London certified drummer (Distinction in Rock & Pop) with software engineering. Exploring Web Audio API, frequency analysis, and vibration sensor inputs to measure rhythm accuracy, tempo drift, and strike timing consistency.',
    keyHighlights: [
      'Acoustic signal analysis measuring drum hit transients and dynamic peak velocity.',
      'Real-time BPM calculation with visual tempo deviation feedback.',
      'Combines musical rhythm discipline with signal processing algorithms.'
    ],
    techStack: ['JavaScript / TypeScript', 'Web Audio API', 'Signal Processing', 'FFT Frequency Analysis', 'IoT Vibration Sensors'],
    deepDive: {
      problemStatement: 'Drummers practicing independently lack quantitative objective feedback on millisecond timing variations and velocity consistency.',
      engineeringSolution: 'Prototyping an audio transient detection algorithm that flags micro-timing errors and tempo drift in real time.',
      hardwareSoftwareArchitecture: 'Client-side Web Audio API audio stream analysis combined with optional piezoelectric sensor inputs.',
      learningsAndOutcomes: 'Deepened knowledge of time-domain to frequency-domain signal processing, audio buffers, and latency minimization.'
    }
  },
  {
    id: 'bodhi-b-venture',
    title: 'B-Venture Tech Innovation Model',
    tagline: '1st Position winning venture presentation at Bodhi Fest 2024 combining technology with sustainable impact',
    category: 'Software Systems',
    featured: false,
    status: 'Completed',
    githubUrl: 'https://github.com/killopgaming',
    overview: 'Secured 1st Position in the B-Venture competition at Bodhi Fest 2024 among competing regional schools. Developed an innovative technology and entrepreneurial concept addressing real-world operational challenges with sustainable engineering principles.',
    keyHighlights: [
      'Formulated a viable technical roadmap and business value proposition evaluated by an expert judging panel.',
      'Presented dynamic prototype models demonstrating market viability, technical feasibility, and social impact.',
      'Demonstrated high-pressure public pitching, analytical thinking, and persuasive communication.'
    ],
    techStack: ['Entrepreneurship', 'Tech Innovation', 'System Modeling', 'Strategic Pitching', 'Market Analysis'],
    deepDive: {
      problemStatement: 'Bridging the gap between conceptual technical ideas and sustainable, real-world business execution.',
      engineeringSolution: 'Built a multi-disciplinary framework addressing technical architecture, operational costs, and scalability.',
      hardwareSoftwareArchitecture: 'Interactive prototype demonstration and financial/architectural modeling.',
      learningsAndOutcomes: 'Honed executive presentation skills, competitive problem solving, and interdisciplinary collaboration.'
    }
  },
  {
    id: 'embedded-hardware-lab',
    title: 'IoT & PCA9685 Embedded Hardware Prototyping',
    tagline: 'Microcontroller experimentation with I2C protocols, PWM servo modulation, and sensor integration',
    category: 'Robotics & Embedded',
    featured: false,
    status: 'Operational',
    githubUrl: 'https://github.com/killopgaming',
    overview: 'A collection of experimental firmware routines and bench tests exploring ESP32 dual-core task scheduling, PCA9685 16-channel 12-bit PWM generation, sensor calibration, and serial telemetry.',
    keyHighlights: [
      'Configured I2C bus communication operating at 400kHz standard fast mode with multiple slave devices.',
      'Built automated test scripts in C++ validating servo microsecond pulse bounds and anti-stall safeguards.',
      'Tested voltage regulation and transient response under sudden multi-motor load transitions.'
    ],
    techStack: ['ESP32', 'PCA9685', 'I2C Protocol', 'Embedded C++', 'Oscilloscope Calibration', 'PWM Control'],
    deepDive: {
      problemStatement: 'Servo motors demand precise, jitter-free timing signals that can be degraded when shared with networking or heavy compute loops.',
      engineeringSolution: 'Offloaded all PWM timing to dedicated PCA9685 hardware registers while ESP32 manages high-level logic.',
      hardwareSoftwareArchitecture: 'Dual power rail configuration with external bench supply and optoisolated logic lines.',
      learningsAndOutcomes: 'Mastered hardware-level troubleshooting, oscilloscope verification of PWM signals, and power decoupling strategies.'
    }
  }
];
