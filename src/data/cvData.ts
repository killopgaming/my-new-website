export interface Education {
  qualification: string;
  institution: string;
  board: string;
  timeline: string;
  percentageOrStatus: string;
  location: string;
  notes?: string;
}

export interface Experience {
  role: string;
  organization: string;
  timeline: string;
  location: string;
  type: 'Internship' | 'Volunteering';
  description: string[];
}

export interface Extracurricular {
  title: string;
  eventOrRole: string;
  organization: string;
  timeline: string;
  bullets: string[];
}

export interface SkillCategory {
  category: string;
  skills: {
    name: string;
    level: string;
    description: string;
  }[];
}

export const DEV_PROFILE = {
  fullName: 'Dev Chhangani',
  tagline: 'Programmer · Robotics Builder · IoT & Embedded Developer',
  email: 'dev.chhangani1@gmail.com',
  phone: '+91 6377580643',
  location: 'Jodhpur, Rajasthan, India',
  dob: '11/11/2008',
  linkedinUrl: 'https://www.linkedin.com/in/dev-chhangani-a91b0334a',
  githubUrl: 'https://github.com/killopgaming',
  summary: `I’m a passionate programmer with interests in Computer Science, Mathematics, Physics, AI, and Robotics. I enjoy building projects, exploring new technologies, and continuously expanding my technical skills.

I have experience with HTML, CSS, JavaScript, and GitHub, and I enjoy creating practical solutions through coding. Beyond academics, I actively participate in workshops, collaborative projects, and activities that help me develop leadership, communication, and problem-solving skills.

Currently exploring higher education opportunities and looking to connect with students, professionals, entrepreneurs, and technology enthusiasts. I’m always eager to learn, collaborate, and contribute to meaningful projects.`,
  aboutStory: `I’m a passionate programmer with interests in Computer Science, Mathematics, Physics, AI, and Robotics. I enjoy building projects, exploring new technologies, and continuously expanding my technical skills.

I have experience with HTML, CSS, JavaScript, and GitHub, and I enjoy creating practical solutions through coding. Beyond academics, I actively participate in workshops, collaborative projects, and activities that help me develop leadership, communication, and problem-solving skills.

My journey started with hands-on electronics and Arduino hardware, evolving into full-stack web engineering, Python automation, and physical robotic manipulators like BHUJHA. Currently exploring higher education opportunities and looking to connect with students, professionals, entrepreneurs, and technology enthusiasts. Always eager to learn, collaborate, and contribute to meaningful projects.`,
  indeedVolunteerStory: {
    title: 'A month of learning, practice, and growing digital confidence with our dedicated volunteer Dev Chhangani',
    school: 'Govt. Vishist Purv Senior Secondary School, Shastri Nagar, Jodhpur',
    cohort: '50 students of Grade XI',
    duration: '15+ hours of hands-on learning',
    topics: ['MS Office (Word, Excel, PowerPoint)', 'Basics of AI', 'Public Presentation'],
    description: 'Dev conducted 15+ hours of practical hands-on learning covering MS Office (Word, Excel, PowerPoint) and basics of AI, for 50 students to help them develop foundational digital skills and greater confidence in navigating the digital world. After completing the course, students shared their learning through PowerPoint presentations in front of the school principal and teachers.',
    quote: 'Here’s to making digital learning more accessible, one classroom at a time.',
    hashtags: ['#INDEEDFoundation', '#DigitalLiteracy', '#ComputerLiteracy', '#GovernmentSchools', '#DigitalEmpowerment']
  },
  interests: ['Robotics & Kinematics', 'IoT & Embedded C/C++', 'Web Development', 'CAD & 3D Prototyping', 'Teaching & Mentorship', 'Music & Drums'],
  stats: [
    { label: 'Projects Built', value: '8+' },
    { label: 'Core Languages', value: '3+' },
    { label: 'Verified Certificates', value: '38' },
    { label: 'Engineering Dedication', value: '100%' }
  ]
};

export const EDUCATION_LIST: Education[] = [
  {
    qualification: 'Senior Secondary (12th)',
    institution: 'NWAC (Northwest Accreditation Commission)',
    board: 'NWAC',
    timeline: 'May 2026 – May 2027',
    percentageOrStatus: 'Pursuing',
    location: 'Jodhpur, Rajasthan, India',
    notes: 'Focus on Mathematics, Physics, and Computer Science foundation.'
  },
  {
    qualification: 'Secondary (10th)',
    institution: 'Alma Mater School, Cambridge IGCSE',
    board: 'Cambridge IGCSE',
    timeline: 'May 2024 – May 2025',
    percentageOrStatus: '55%',
    location: 'Jodhpur, Rajasthan, India',
    notes: 'International General Certificate of Secondary Education curriculum.'
  }
];

export const EXPERIENCE_LIST: Experience[] = [
  {
    role: 'Student Intern, Robotics Program',
    organization: 'ROBOAI HUB',
    timeline: 'Jul 2026 – Present',
    location: 'Jodhpur, Rajasthan, India',
    type: 'Internship',
    description: [
      'Participating in an intensive robotics internship focused on practical hands-on learning and exploration of modern robotics technologies.',
      'Developing and strengthening practical engineering skills in Python programming, microcontroller interfacing, and physical robotics mechanisms.',
      'Experimenting with sensor fusion, motor driver protocols, and rapid physical prototyping.'
    ]
  },
  {
    role: 'Computer Literacy & AI Volunteer',
    organization: 'IN-DEED Foundation',
    timeline: 'Aug 2026 – Sep 2026',
    location: 'Jodhpur, Rajasthan, India',
    type: 'Volunteering',
    description: [
      'Conducted 15+ hours of practical, hands-on digital training in Microsoft Word, Excel, PowerPoint, and artificial intelligence fundamentals for 50 Grade XI students at Government Vishisht Purva Senior Secondary School, Shastri Nagar, Jodhpur.',
      'Helped underprivileged students develop foundational computer literacy and confidence in using modern technology.',
      'Guided student teams in structuring and delivering capstone PowerPoint presentations directly to the school principal.',
      'Contributed to digital empowerment and technology awareness through accessible, interactive classroom learning.'
    ]
  }
];

export const EXTRACURRICULAR_LIST: Extracurricular[] = [
  {
    title: 'MUN: Design Head',
    eventOrRole: 'AMS MUN 2026',
    organization: 'Alma Mater School, Jodhpur',
    timeline: '2026',
    bullets: [
      'Spearheaded visual identity, branding, and design language for the Model United Nations conference.',
      'Designed official event materials including logos, delegate place cards, chit pads, background guides, and event signage.'
    ]
  },
  {
    title: 'Sports Squad Captain',
    eventOrRole: 'Alma Mater School Annual Sports Day',
    organization: 'Alma Mater School',
    timeline: 'Dec 2025',
    bullets: [
      'Served as Sports Squad Captain during the school’s competitive annual Sports Day.',
      'Led, motivated, and coordinated team participation across track and field events, fostering camaraderie and athletic discipline.'
    ]
  },
  {
    title: 'Assistant Director: AIR Play',
    eventOrRole: 'School Theatrical Production',
    organization: 'Alma Mater School',
    timeline: 'Dec 2025 – Jul 2026',
    bullets: [
      'Assisted the director in blocking complex theatrical scenes and coordinating stage activities.',
      'Contributed to live sound cues, backstage stage direction, and production event management.'
    ]
  }
];

export const SKILLS_CATEGORIES: SkillCategory[] = [
  {
    category: 'Programming Languages',
    skills: [
      { name: 'Python', level: 'Advanced / Core', description: 'Algorithmic development, automation scripts, CS50P, data analysis & robotics logic.' },
      { name: 'C', level: 'Intermediate', description: 'Low-level memory management, embedded microcontrollers, and foundational computing (verified: standard C).' },
      { name: 'C++', level: 'Intermediate', description: 'Object-oriented embedded firmware for ESP32 and Arduino robotics hardware.' },
      { name: 'Bash / Shell', level: 'Proficient', description: 'Command-line scripting, environment setup, automation, and Git terminal workflows.' }
    ]
  },
  {
    category: 'Web Development',
    skills: [
      { name: 'HTML5 & CSS3', level: 'Advanced', description: 'Semantic markup, Flexbox, CSS Grid, mobile-first responsiveness, and accessibility.' },
      { name: 'JavaScript (ES6+)', level: 'Advanced', description: 'Asynchronous event handling, modern DOM manipulation, promises, and modular JS.' },
      { name: 'Django', level: 'Working Knowledge', description: 'Python-based web framework for backend endpoints, MVC routing, and templates.' },
      { name: 'Tailwind CSS & UI', level: 'Advanced', description: 'Utility-first styling, responsive design systems, and dark terminal aesthetic.' }
    ]
  },
  {
    category: 'Robotics & Hardware',
    skills: [
      { name: 'ESP32 & Microcontrollers', level: 'Hands-on', description: 'Dual-core processing, PWM generation, I2C bus communication, and sensor reading.' },
      { name: 'PCA9685 PWM Driver', level: 'Hands-on', description: '16-channel 12-bit PWM servo control with external power regulation.' },
      { name: 'Autodesk Fusion 360', level: 'Certified (2026)', description: 'Parametric 3D CAD modeling, joint tolerance design, and mechanical assemblies.' },
      { name: '3D Printing & Fabrication', level: 'Experienced', description: 'FDM printing with PETG/PLA, infill optimization, and mechanical assembly.' }
    ]
  },
  {
    category: 'Tools & Technologies',
    skills: [
      { name: 'Git & GitHub', level: 'Proficient', description: 'Version control, branch management, collaborative repositories, and documentation.' },
      { name: 'VS Code', level: 'Primary IDE', description: 'Custom developer workflow, linting, debugging, and terminal integration.' },
      { name: 'Microsoft Office', level: 'Instructor / Expert', description: 'Word, Excel, PowerPoint; taught 50+ students in volunteer program.' }
    ]
  }
];
