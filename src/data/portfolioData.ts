import type { PortfolioData } from '../types/portfolio';

/**
 * PORTFOLIO DATA CONFIGURATION
 * 
 * Replace placeholders like [Your Name], [Your Degree], [Your University] with your actual details.
 * You can also use the interactive "Personalize" button on the website to preview changes live!
 */
export const initialPortfolioData: PortfolioData = {
  personal: {
    name: "Polcyrie V. Manalang", // Replace with [Your Name]
    roleHeadline: "A Fresh Graduate Ready to Learn, Grow, and Make an Impact.",
    heroSubtitle: "Passionate about building intuitive web experiences, clean user interfaces, and solving real-world challenges through modern technology.",
    bioIntro: "Hello! I am a recent Bachelor of Science in Information Technology graduate driven by a deep curiosity for how great digital products are built. As an emerging developer, I bring boundless energy, fresh technical knowledge, a collaborative spirit, and a rapid ability to master new tools and frameworks.",
    fullBio: [
      "During my academic years, I focused on modern web development, software architecture, and user-centered design. I thrive at the intersection of aesthetic design and robust engineering—crafting interfaces that are not only pleasing to the eye, but also performant and accessible to everyone.",
      "Beyond technical coursework, my university experience taught me the value of resilient teamwork, constructive code reviews, and empathetic problem-solving. Whether leading team sprint retrospectives for our capstone or mentoring junior students in introductory programming labs, I enjoy contributing to positive, high-energy team cultures."
    ],
    careerGoals: "My immediate objective is to join a supportive engineering or product team as an entry-level software engineer, frontend developer, or web designer. I am eager to learn from experienced mentors, contribute clean and maintainable code to production systems, and continuously grow into a dependable, well-rounded engineer.",
    location: "Talavera, Nueva Ecija / Open to Relocation & Remote Roles",
    // Profile Photo: Use a URL or place your image in the 'public' folder (e.g. '/profile.jpg')
    avatarImage: "/picture.jpg",
    email: "polcyriemanalang91@example.com", // Replace with [Your Email]
    phone: "0926-6531-281",
    availability: "Available for Full-time Roles & Internships",
    socialLinks: {
      github: "https://github.com/example-graduate",
      linkedin: "https://www.linkedin.com/in/polcyrie-manalang-80b9853ba",
      portfolio: "https://polcyriemanalang-portfolio.dev"
    }
  },

  education: [
    {
      degree: "Bachelor of Science in Information Technology",
      institution: "Nueva Ecija University of Science and Technology (NEUST) - MGT, Talavera Off Campus",
      period: "2022 – 2026",
      description: "A comprehensive four-year program focused on software engineering principles, algorithms, database systems, web technologies, and human-computer interaction. The curriculum emphasizes both theoretical foundations and practical applications, preparing students to design, develop, and manage modern information systems.",
      relevantCoursework: [
        "Data Structures & Algorithms",
        "Modern Web Application Development",
        "Object-Oriented Software Design",
        "Relational & NoSQL Database Systems",
        "Human-Computer Interaction (HCI)",
        "Software Quality Assurance & Testing",
        "Computer Systems & Networking"
      ]
    },
  ],

  skillCategories: [
    {
      name: "Frontend Development",
      iconName: "Layout",
      skills: [
        { name: "React / React Hooks", level: "Proficient", isTop: true },
        { name: "TypeScript", level: "Intermediate", isTop: true },
        { name: "JavaScript (ES6+)", level: "Proficient", isTop: true },
        { name: "HTML5 & Semantic Markup", level: "Proficient" },
        { name: "CSS3 / Modern Layouts (Flex & Grid)", level: "Proficient" },
        { name: "Tailwind CSS", level: "Proficient", isTop: true },
        { name: "Responsive Web Design", level: "Proficient" },
        { name: "Next.js Basics", level: "Intermediate" }
      ]
    },
    {
      name: "Backend & Databases",
      iconName: "Database",
      skills: [
        { name: "Node.js & Express", level: "Intermediate", isTop: true },
        { name: "RESTful API Design", level: "Proficient", isTop: true },
        { name: "PostgreSQL", level: "Intermediate" },
        { name: "MongoDB ", level: "Intermediate" },
        { name: "Authentication (JWT & OAuth basics)", level: "Intermediate" }
      ]
    },
    {
      name: "Tools, Testing & Workflow",
      iconName: "Wrench",
      skills: [
        { name: "Git & GitHub Version Control", level: "Proficient", isTop: true },
        { name: "VS Code & Debugging Tools", level: "Proficient" },
        { name: "Postman API Testing", level: "Intermediate" },
        { name: "Vite & Modern Bundlers", level: "Intermediate" },
        { name: "npm / package management", level: "Proficient" },
        { name: "Basic CI/CD & Vercel Deployment", level: "Intermediate" }
      ]
    },
    {
      name: "Design & User Experience",
      iconName: "Palette",
      skills: [
        { name: "Figma (Wireframing & Prototyping)", level: "Proficient", isTop: true },
        { name: "UI/UX Principles", level: "Intermediate", isTop: true },
        { name: "Design System Fundamentals", level: "Intermediate" },
        { name: "WCAG Accessibility Guidelines", level: "Intermediate" },
        { name: "User Flow & Information Architecture", level: "Intermediate" }
      ]
    },
    {
      name: "Transferable Soft Skills",
      iconName: "Users",
      skills: [
        { name: "Quick Learner & High Adaptability", level: "Proficient", isTop: true },
        { name: "Empathetic Team Collaboration", level: "Proficient", isTop: true },
        { name: "Clear Technical Communication", level: "Proficient" },
        { name: "Problem Solving & Analytical Thinking", level: "Proficient" },
        { name: "Attention to Detail", level: "Proficient" },
        { name: "Open to Feedback & Growth", level: "Proficient" }
      ]
    }
  ],

  certifications: [
    {
      title: "IT Specialist - Database ",
      issuer: "Certifort",
      date: "December 12, 2025",
      credentialUrl: "wa96q-FaGW",
      badge: "Professional Certificate"
    },
    {
      title: "Contact Center Services NCII",
      issuer: "Technical Education and Skills Development Authority (TESDA)",
      date: "November 2, 2023",
      credentialUrl: "TwuDm9eLid",
      badge: "Verified Certificate"
    },
  ],

  activities: [
    {
      role: "Capstone Project Leadeer",
      organization: "University Activity",
      period: "Sept 2025  May 2026",
      description: "A Barangay Management System that stores resident information and generates certificates efficiently.",
      highlight: "A Barangay Management System that stores resident information and generates certificates efficiently. "
    },
    { 
      role: "Lead Developer ",
      organization: "Personal Project - Photography Reservation System",
      period: "February 2026",
      description: "A Photography Reservation System that manages photo shoot bookings to prevent schedule conflicts.",
      highlight: "A Photography Reservation System that organizes photo shoot bookings to avoid schedule conflicts."
    },
    {
      role: "Lead Developer ",
      organization: "Personal Project - NEUST Library Management System",
      period: "February 2026",
      description: "A Library Management System that records books and manages borrowing and returning with ease.",
      highlight: "A Library Management System that stores book records and efficiently manages borrowing and returning transactions. "
    }
  ],

  projects: [
    {
      id: "smart-campus",
      title: "SmartCampus Hub - Student Facility & Academic Portal",
      subtitle: "Senior Capstone Project",
      category: "Capstone",
      featured: true,
      description: "A centralized web platform enabling university students to reserve study labs, track academic milestones, and discover campus events in real time.",
      detailedDescription: "Conceived and developed as our senior year capstone project to address fragmented campus scheduling systems. The platform delivers a unified student dashboard with instant lab capacity visualization, automated booking collision detection, and personalized course event notifications.",
      keyFeatures: [
        "Real-time room and study pod reservation with conflict prevention algorithms",
        "Role-based authentication system supporting Students, Faculty, and Lab Administrators",
        "Interactive campus map with live equipment availability status",
        "Automated email confirmation and calendar (.ics) sync integration"
      ],
      learningOutcomes: [
        "Architected modular React state management using modern hooks and context",
        "Designed relational database schema in PostgreSQL with comprehensive foreign key constraints",
        "Collaborated with cross-functional stakeholders including university IT staff to test real-world user flows"
      ],
      technologies: ["React", "TypeScript", "Tailwind CSS", "Node.js", "Express", "PostgreSQL", "JWT"],
      image: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&w=1000&q=80",
      demoUrl: "https://example.com/demo/smartcampus",
      githubUrl: "https://github.com/example-graduate/smartcampus-hub"
    },
    {
      id: "ecotrack-exchange",
      title: "EcoTrack - Community Recyclables & Sustainability Exchange",
      subtitle: "Academic Team Project & Hackathon Finalist",
      category: "Full-Stack",
      featured: true,
      description: "A community sustainability platform connecting households with verified local eco-drop centers and encouraging green habits through interactive reward tracking.",
      detailedDescription: "Built for our University Sustainability Innovation Sprint. EcoTrack simplifies municipal waste sorting by providing an intelligent item search guide, drop-off appointment booking, and a verified community impact leaderboard.",
      keyFeatures: [
        "Searchable interactive directory of recyclable materials and disposal criteria",
        "Geolocation-enabled center finder with operating hours and accepted materials",
        "Personal carbon offset calculator and earned badge profile showcase",
        "Accessible, high-contrast UI meeting WCAG 2.1 AA standards"
      ],
      learningOutcomes: [
        "Integrated third-party mapping APIs and geolocation services",
        "Implemented secure RESTful endpoints and optimized JSON payloads",
        "Mastered mobile-first responsive layout techniques using Tailwind CSS"
      ],
      technologies: ["React", "JavaScript", "Tailwind CSS", "Supabase", "Leaflet Maps", "Vite"],
      image: "https://images.unsplash.com/photo-1532996122724-e3c354a0b15b?auto=format&fit=crop&w=1000&q=80",
      demoUrl: "https://example.com/demo/ecotrack",
      githubUrl: "https://github.com/example-graduate/ecotrack-exchange"
    },
    {
      id: "aura-habits",
      title: "Aura - Minimalist Mindful Habit & Task Companion",
      subtitle: "Personal Project",
      category: "Frontend",
      featured: true,
      description: "A calm, distraction-free productivity web application crafted around warm minimalist aesthetics, keyboard shortcuts, and local storage persistence.",
      detailedDescription: "Designed and built independently to explore offline-first web development and serene user interface design. Aura offers customizable daily routines, streak visualizers, and mindful journaling prompts without intrusive notifications.",
      keyFeatures: [
        "Offline-first client-side storage with zero required account creation",
        "Gentle daily progress rings and weekly streak consistency visualizers",
        "Keyboard-friendly navigation with quick-add hotkeys",
        "Custom warm theme engine matching circadian natural light rhythms"
      ],
      learningOutcomes: [
        "Refined deep mastery of CSS animations and smooth transitions",
        "Implemented resilient local data serialization, migration, and export to JSON",
        "Conducted informal usability tests with 15 fellow students to iterate on spacing and typography"
      ],
      technologies: ["React", "TypeScript", "Tailwind CSS", "Lucide Icons", "LocalStorage API"],
      image: "https://images.unsplash.com/photo-1484480974693-6ca0a78fb36b?auto=format&fit=crop&w=1000&q=80",
      demoUrl: "https://example.com/demo/aura-habits",
      githubUrl: "https://github.com/example-graduate/aura-habit-tracker"
    },
    {
      id: "asset-audit-dashboard",
      title: "Internal IT Asset & Equipment Audit Dashboard",
      subtitle: "Practicum & Academic Internship Project",
      category: "Full-Stack",
      featured: false,
      description: "An internal management portal developed during summer internship to automate departmental laptop and lab equipment check-ins.",
      detailedDescription: "Created to replace error-prone manual spreadsheets. The portal allows lab technicians to log equipment condition, assign devices to student researchers, and flag overdue returns.",
      keyFeatures: [
        "Barcode / asset tag fast search and status filter",
        "Automated return due-date reminders via email trigger",
        "Audit history log with timestamped condition notes",
        "One-click report generation with CSV/PDF data export"
      ],
      learningOutcomes: [
        "Experienced enterprise-style codebases and standardized code formatting",
        "Practiced defensive programming and strict form validation patterns",
        "Demonstrated a 45% reduction in manual reconciliation time for the department"
      ],
      technologies: ["React", "REST API", "Tailwind CSS", "Express", "PostgreSQL", "Chart.js"],
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=1000&q=80",
      demoUrl: "https://example.com/demo/asset-dashboard",
      githubUrl: "https://github.com/example-graduate/asset-audit-system"
    },
    {
      id: "artisan-design-system",
      title: "Artisan Pantry - E-Commerce Design System & Prototype",
      subtitle: "UI/UX Case Study & Coursework",
      category: "UI/UX",
      featured: false,
      description: "A comprehensive Figma design system and interactive prototype for an organic specialty food boutique, translated into accessible React components.",
      detailedDescription: "A semester-long study in design tokens, color hierarchy, and human interface guidelines. Began with low-fidelity wireframing, conducted card-sorting tests, and delivered an atomic component library.",
      keyFeatures: [
        "30+ documented atomic design components (buttons, modals, cards, badges)",
        "WCAG 2.1 AA compliant color palette tested for high readability",
        "Interactive high-fidelity Figma prototype covering complete checkout flow",
        "Live component playground built in React with Tailwind CSS"
      ],
      learningOutcomes: [
        "Deepened understanding of design tokens, modular CSS, and design-to-code workflow",
        "Conducted 5 user testing sessions to uncover and resolve checkout navigation friction",
        "Documented comprehensive component props and accessibility guidelines"
      ],
      technologies: ["Figma", "React", "Tailwind CSS", "Accessibility (a11y)", "Design Systems"],
      image: "https://images.unsplash.com/photo-1556742049-0a67c5574f73?auto=format&fit=crop&w=1000&q=80",
      demoUrl: "https://example.com/demo/artisan-pantry",
      githubUrl: "https://github.com/example-graduate/artisan-design-system"
    },
    {
      id: "scholar-link",
      title: "ScholarLink - Student Peer Tutoring Network",
      subtitle: "Hackathon Finalist Project",
      category: "Academic",
      featured: false,
      description: "A collaborative web tool designed to connect students needing study support with qualified student mentors in their specific courses.",
      detailedDescription: "Developed during the 48-hour Campus Innovation Hackathon. ScholarLink won 2nd place for Educational Impact by introducing subject-based study circles and instant schedule matching.",
      keyFeatures: [
        "Course-code matching algorithm pairing students with available mentors",
        "Built-in session scheduler with calendar sync",
        "Post-session feedback and peer endorsement system",
        "Clean, responsive layout accessible on both mobile and laptop browsers"
      ],
      learningOutcomes: [
        "Rapid prototyping and MVP prioritization under strict time constraints",
        "Effective asynchronous state handling and form error handling",
        "Pitching technical ideas concisely to faculty judges and industry sponsors"
      ],
      technologies: ["React", "JavaScript", "Tailwind CSS", "Firebase Auth", "Lucide Icons"],
      image: "https://images.unsplash.com/photo-1523240795612-9a054b0db644?auto=format&fit=crop&w=1000&q=80",
      demoUrl: "https://example.com/demo/scholarlink",
      githubUrl: "https://github.com/example-graduate/scholarlink"
    }
  ]
};
