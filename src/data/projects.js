export const projectCategories = [
  "All Projects",
  "Full Stack Development",
  "Data Analytics",
  "AI & Cybersecurity"
];

export const projects = [
  {
    id: "student-management-portal",
    title: "Student Management Portal",
    category: "Full Stack Development",
    shortDescription: "A web application designed to organize student records and simplify student information management.",
    fullDescription: "The Student Management Portal provides an intuitive digital interface for managing academic records. Designed with modular full stack architecture, it streamlines administrative tasks by facilitating student registration, profile tracking, and academic record maintenance with structured data verification.",
    technologies: ["React.js", "JavaScript", "Node.js", "Express.js", "SQLite", "Tailwind CSS", "REST APIs"],
    features: [
      "Student registration and digital onboarding workflow",
      "Comprehensive CRUD operations for student records",
      "Dynamic search and multi-parameter filtering",
      "Client-side and server-side form validation",
      "Fully responsive interface optimized for mobile and desktop"
    ],
    image: "/images/projects/student-portal.svg",
    githubUrl: "https://github.com/AnjaliH-er", // Editable placeholder link
    liveUrl: null, // Set to live URL when deployed
    featured: true,
    highlights: "Practical CRUD Application • Relational Data Storage • Clean RESTful API"
  },
  {
    id: "cybershield-ai",
    title: "CyberShield AI",
    category: "AI & Cybersecurity",
    shortDescription: "An application exploring machine learning-based text classification through a practical web interface.",
    fullDescription: "CyberShield AI is an experimental cybersecurity and machine learning project exploring text classification algorithms. The tool processes incoming textual content (such as messages or email excerpts), evaluates lexical indicators, and flags suspicious or spam patterns through a clean, interactive user interface.",
    technologies: ["Python", "Flask", "Machine Learning", "NLP Basics", "HTML5/CSS3", "JavaScript"],
    features: [
      "Text preprocessing and tokenization pipeline",
      "Spam and suspicious-message classification models",
      "Interactive prediction interface with confidence metrics",
      "Practical demonstration of ML model integration into web apps",
      "Defensive awareness dashboard for educational exploration"
    ],
    image: "/images/projects/cybershield-ai.svg",
    githubUrl: "https://github.com/AnjaliH-er",
    liveUrl: null,
    featured: true,
    highlights: "ML Text Classification • Python Flask Engine • Interactive Security Tool"
  },
  {
    id: "blinkit-sales-dashboard",
    title: "Blinkit Sales Dashboard",
    category: "Data Analytics",
    shortDescription: "A sales analytics dashboard designed to explore business performance, product categories, and relevant sales trends.",
    fullDescription: "Developed to translate raw retail transaction data into actionable business intelligence, this analytics dashboard models sales figures, item categories, outlet types, and revenue distributions. Users can dissect metrics through interactive slicers and KPI scorecards.",
    technologies: ["Power BI", "DAX", "Microsoft Excel", "Data Visualization", "SQL"],
    features: [
      "Executive KPI summary cards for revenue, order volume, and average ticket size",
      "Interactive filters by outlet location, size, and tier",
      "Category-level breakdown and product performance comparisons",
      "Visual sales trends illustrating seasonal and distribution dynamics",
      "Clean visual hierarchy built for data-driven decision making"
    ],
    image: "/images/projects/blinkit-dashboard.svg",
    githubUrl: "https://github.com/AnjaliH-er",
    liveUrl: null,
    featured: true,
    highlights: "Power BI BI Reporting • DAX Aggregations • Retail Sales Insights"
  },
  {
    id: "library-management-system",
    title: "Library Management System",
    category: "Full Stack Development",
    shortDescription: "An application designed to organize library records and support book and member management.",
    fullDescription: "Built to replace manual record registers with a structured digital system, the Library Management System tracks inventory availability, member accounts, book checkouts, and returns with systematic database verification.",
    technologies: ["Full Stack Web", "JavaScript", "Node.js", "Express.js", "SQL / Relational DB", "CSS3"],
    features: [
      "Book cataloging with author, ISBN, and genre indexing",
      "Library member registration and activity tracking",
      "Issue and return tracking with date calculations",
      "Search and filtering by title, availability, or member ID",
      "Relational database integration ensuring transactional integrity"
    ],
    image: "/images/projects/library-system.svg",
    githubUrl: "https://github.com/AnjaliH-er",
    liveUrl: null,
    featured: false,
    highlights: "Inventory Management • Checkout Tracking • Database Integrity"
  },
  {
    id: "smart-parking-system",
    title: "Smart Parking Management System",
    category: "Full Stack Development",
    shortDescription: "A dashboard-based application for monitoring parking slot availability and managing parking bookings.",
    fullDescription: "The Smart Parking Management System addresses urban parking allocation challenges by simulating real-time slot availability, enabling spot reservations, and providing facility managers with an operational administrative dashboard.",
    technologies: ["Web Technologies", "JavaScript", "Backend Logic", "Database Management", "Responsive UI"],
    features: [
      "Real-time visual map of parking slots (Available vs. Occupied)",
      "Vehicle-type-based slot allocation (Two-wheelers / Four-wheelers)",
      "Booking management and reservation confirmation workflow",
      "Admin dashboard with occupancy statistics and slot controls",
      "Intuitive user flow designed for quick reservations"
    ],
    image: "/images/projects/smart-parking.svg",
    githubUrl: "https://github.com/AnjaliH-er",
    liveUrl: null,
    featured: false,
    highlights: "Real-time Slot State • Admin Control Dashboard • Reservation Logic"
  }
];
