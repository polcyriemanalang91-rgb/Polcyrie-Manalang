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
    email: "polcyriemanalang91@gmail.com", // Replace with [Your Email]
    phone: "0926-6531-281",
    availability: "Available for Full-time Roles & Internships", 
    socialLinks: {
      github: "https://github.com/polcyriemanalang91-rgb",
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
        { name: "React", level: "Intermediate", isTop: true },
        { name: "HTML5 / CSS3 ", level: "Intermediate", isTop: true },
        { name: "JavaScript (ES6+)", level: "Proficient", isTop: true },
        { name: "HTML5 & Semantic Markup", level: "Proficient" },
        { name: "CSS3 / Modern Layouts (Flex & Grid)", level: "Proficient" },
        { name: "Tailwind CSS", level: "Proficient", isTop: true },
        { name: "Responsive Web Design", level: "Proficient" },
        { name: "Laravel (Blade Templates) ", level: "Intermediate" }
      ]
    },
    {
      name: "Backend & Databases",
      iconName: "Database",
      skills: [
        { name: "PHP", level: "Intermediate", isTop: true },
        { name: "RESTful API Design", level: "Proficient", isTop: true },
        { name: "XAMPP (Apache, MySQL, PHP)", level: "Intermediate" },
        { name: "MongoDB ", level: "Intermediate" },
        { name: "Authentication (JWT & OAuth basics)", level: "Intermediate" },
        { name: "SSMS (SQL Server Management Studio)", level: "Intermediate" }
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
        { name: "Claude & Copilot (AI-assisted coding tools)", level: "Proficient" },
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
      id: "Barangay-Management-System",
      title: " Pulong San Miguel Barangay Management System",
      subtitle: "Senior Capstone Project",
      category: "Capstone",
      featured: true,
      description: "The Pulong San Miguel Barangay Management System centralizes resident records and automates certificate issuance, reducing paperwork, improving accuracy, and streamlining services for officials and residents.",
      detailedDescription: "The Pulong San Miguel Barangay Management System is a digital solution designed to store, organize, and manage civilian information within the barangay. It streamlines administrative tasks by automating the generation of various certificates such as residency, indigency, and clearance. This system reduces manual paperwork, improves accuracy, and enhances service delivery for both barangay officials and residents.",
      keyFeatures: [
        "Centralized Civilian Database",
        "Certificate Generation",
        "User-Friendly Interface",
        "Data Accuracy & Transparency",
        "Time-Saving Automation",
        "Scalability"
      ],
      learningOutcomes: [
        "Developed practical skills in structuring, normalizing, and maintaining a secure civilian information database for real-world use.",
        "Gained experience in connecting front-end interfaces with back-end logic to deliver functional certificate generation features.",
        "Strengthened ability to analyze community needs, translate them into system solutions, and build confidence in applying IT knowledge to governance challenges."
      ],
      technologies: ["Visual Studio", "PHP", "JavaScript", "CSS", "XAMPP"],
      image: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&w=1000&q=80",
      demoUrl: "https://example.com/demo/smartcampus",
      githubUrl: "https://github.com/polcyriemanalang91-rgb/smartcampus-hub"
    },
    {
      id: "Photography-Reservation-System",
      title: "Photography Reservation System",
      subtitle: "Academic Team Project",
      category: "Full-Stack",
      featured: true,
      description: "A Photography Reservation System that simplifies photo shoot bookings, prevents schedule conflicts, and offers optional in-system payments for convenience.",
      detailedDescription: "The Photography Reservation System is designed to streamline the process of booking photo shoot sessions. It ensures conflict-free scheduling by allowing clients to reserve slots in advance and provides an integrated payment option for added convenience. This system enhances efficiency for both photographers and clients by reducing manual errors and offering a centralized platform for managing appointments.",
      keyFeatures: [
        "Reservation Management ",
        "Conflict-Free Scheduling",
        "Integrated Payment Option",
        "Centralized Calendar View",
        "Instant Notifications",
        "User-Friendly Interface"
      ],
      learningOutcomes: [
        "Gained experience in creating ERDs and implementing relationships in SQL.",
        "Applied coding practices to build functional modules like booking forms and payment integration.",
        "Strengthened knowledge in Java, NetBeans, and GUI development."
      ],
      technologies: ["NetBeans", "Java SE", "Swing (JFrame)", "JDBC", "MySQL", "Claude AI"],
      image: "https://remi-portrait.com/wp-content/uploads/2026/02/Photography.webp",
      demoUrl: "https://example.com/demo/ecotrack",
      githubUrl: "https://github.com/polcyriemanalang91-rgb/ecotrack-exchange"
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
      githubUrl: "https://github.com/polcyriemanalang91-rgb/aura-habit-tracker"
    },
    {
      id: "NEUST Management System",
      title: "NEUST Management System",
      subtitle: "Academic Project",
      category: "Full-Stack",
      featured: false,
      description: "The NEUST Management System is a library software that stores book records, manages student borrowing, and generates reports such as book lists and student borrowing summaries—improving efficiency and accuracy in library operations.",
      detailedDescription: "The NEUST Management System is a software application designed to streamline library operations by storing book records and managing student borrowing activities. It provides a centralized database where librarians can record book details, track borrowing transactions, and generate reports such as book lists and student borrowing summaries. This system enhances efficiency, reduces manual errors, and ensures accurate monitoring of library resources.",
      keyFeatures: [
        "Centralized Book Storage ",
        "Borrowing & Returning Management",
        "Automated Availability Updates",
        "Student Borrowing Records",
        "Book List Generation",
        "User-Friendly Interface"
      ],
      learningOutcomes: [
        "Gained hands-on experience in designing and implementing a relational database to store book and student records, strengthening SQL and ERD knowledge.",
        "Learned how to translate real-world library processes into a functional system, improving skills in Java, NetBeans, and logical workflow design.",
        "Developed confidence in building a complete management system, preparing for future IT roles by showcasing practical knowledge in software development and documentation.",
      ],
      technologies: ["NetBeans", "MySQL", "JDBC", "Swing", "Java SE", "Claude AI"],
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=1000&q=80",
      demoUrl: "https://example.com/demo/asset-dashboard",
      githubUrl: "https://github.com/polcyriemanalang91-rgb/asset-audit-system"
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
      githubUrl: "https://github.com/polcyriemanalang91-rgb/scholarlink"
    }
  ]
};
