export const profile = {
  name: "Tubagus Panji Anugrah",
  alias: "Panji",
  role: "Software Quality Assurance",
  location: "West Java, Indonesia",
  current: "QA Intern @ Qiscus",
  email: "an.tubagusp@gmail.com",
  website: "https://panjianugrah.me",
  socials: {
    linkedin: "https://linkedin.com/in/panji-anugrah",
    github: "https://github.com/sslythrrr",
    instagram: "https://instagram.com/tubaguspn",
  },
  bio: "I bridge the gap between how systems are built and how people actually use them. Background in computer science, currently focused on software quality, product workflows, and keeping releases predictable.",
};

export const education = {
  institution: "Universitas Pakuan",
  degree: "Bachelor of Computer Science",
  period: "Sep 2021 — Jul 2025",
  location: "Bogor, West Java",
  gpa: "3.89 / 4.00 (Cum Laude)",
  thesis:
    "Smart Gallery: Integrating Natural Language Processing And Computer Vision For Efficient Image Management",
};

export type Experience = {
  company: string;
  role: string;
  period: string;
  location: string;
  responsibilities: string;
  skills: string[];
};

export const experiences: Experience[] = [
  {
    company: "Qiscus",
    role: "Quality Assurance (Intern)",
    period: "Mar 2026 — Present",
    location: "Yogyakarta, DIY (Hybrid)",
    responsibilities:
      "Contributed across diverse client projects (healthcare, event, internal) and internal products. Executed functional, exploratory, sanity, regression, and load testing. Planned test scenarios, managed bug ticketing through Notion, and supported team workflows with API validation and automation.",
    skills: ["Manual Testing", "Test Scenarios", "Playwright", "k6", "Apache JMeter", "Postman", "Notion", "UAT", "Regression Testing"],
  },
  {
    company: "Universitas Pakuan",
    role: "Mobile Programming Laboratory Assistant",
    period: "Mar 2026",
    location: "Bogor (Hybrid)",
    responsibilities:
      "Assisted mobile programming practicum courses using Flutter for two vocational classes through video sessions, and improved course modules prepared by the lecturer.",
    skills: ["Flutter", "Mobile Programming", "Teaching", "UI/UX", "Course Modules"],
  },
  {
    company: "Monfori Nusantara",
    role: "Mobile Developer (Intern)",
    period: "Aug 2024 — Sep 2024",
    location: "Bogor (Hybrid)",
    responsibilities:
      "Collaborated directly with the laboratory manager to discover and define field workflow requirements. Developed Monfori Lens (Flutter) to streamline tissue culture documentation, performed white-box and device performance testing on lab smartphones, engineered batch image processing, and facilitated UAT before deployment.",
    skills: ["Flutter", "Dart", "Android", "Requirements Discovery", "White-box Testing", "Performance Testing", "UAT"],
  },
  {
    company: "Universitas Pakuan (Community Service)",
    role: "Web Developer",
    period: "Apr 2024 — Jul 2024",
    location: "Bogor (Hybrid)",
    responsibilities:
      "Led a small development team building a village information website for Tegal Village, Bogor. Gathered requirements from village officials, and developed the UI, core features, and database schema using Vanilla JavaScript, Node.js, Express, and MySQL.",
    skills: ["JavaScript", "Node.js", "Express", "MySQL", "Web Development"],
  },
];

export type Project = {
  title: string;
  category: string[];
  period: string;
  description: string;
  highlights: string[];
  tech: string[];
  repo: string;
};

export const projects: Project[] = [
  {
    title: "Noteturne",
    category: ["Mobile"],
    period: "Nov — Dec 2025",
    description:
      "Android note app with a custom Enigma-inspired cipher, seed-based encryption, and QR / file sharing.",
    highlights: [
      "5-rotor Enigma-inspired cipher with hex encoding for Unicode",
      "Seed-based encryption for consistent decryption",
      "QR + file-based sharing",
    ],
    tech: ["Kotlin", "Android", "Jetpack Compose", "Cryptography"],
    repo: "https://github.com/sslythrrr/",
  },
  {
    title: "Smart Gallery",
    category: ["Mobile", "Deep Learning"],
    period: "Mar — Jul 2025",
    description:
      "Android gallery with NLP search and computer vision for smarter photo management. Also my thesis.",
    highlights: [
      "Fine-tuned 3 DistilBERT models: intent, NER, semantic similarity",
      "MobileNetV3 multi-label + ML Kit OCR retrieval",
      "Quantized models running locally via TFLite",
    ],
    tech: ["Kotlin", "DistilBERT", "MobileNetV3", "TFLite", "Compose"],
    repo: "https://github.com/sslythrrr/smart-gallery",
  },
  {
    title: "Inventas",
    category: ["Web", "Deep Learning"],
    period: "Nov 2024 — Apr 2025",
    description:
      "Smart inventory platform with an NLP chatbot and a dynamic auction system for stock optimization.",
    highlights: [
      "IndoBERT intent + NER for natural queries",
      "Multi-role dashboards",
      "Real-time auction module",
    ],
    tech: ["Node.js", "Express", "MySQL", "IndoBERT", "TensorFlow.js"],
    repo: "https://github.com/sslythrrr/inventas-inventory-management",
  },
  {
    title: "Steam Genre & Retention Forecasting",
    category: ["Data Science"],
    period: "Dec 2024 — Jan 2025",
    description:
      "Analysis of 14,213 Steam games to forecast market trends and player retention.",
    highlights: [
      "Prophet + STL decomposition for Q1–Q4 2025",
      "Spotted 1,846% YoY growth in Early Access",
    ],
    tech: ["Python", "Prophet", "STL", "Pandas"],
    repo: "https://github.com/sslythrrr/",
  },
  {
    title: "Monfori Lens",
    category: ["Mobile"],
    period: "Aug — Sep 2024",
    description:
      "Production Flutter app for batch image processing in field reporting.",
    highlights: ["Handles 200–800 images per cycle", "Quick Sort by EXIF timestamps"],
    tech: ["Flutter", "Dart", "Android"],
    repo: "https://github.com/sslythrrr/monfori-lens",
  },
  {
    title: "Employee Management Dashboard",
    category: ["Web"],
    period: "Jul — Aug 2024",
    description:
      "Internal HR dashboard for announcements and division-based task management with proof submission.",
    highlights: ["RBAC with division-scoped tasks", "Announcement broadcasting"],
    tech: ["Node.js", "Express", "MySQL"],
    repo: "https://github.com/sslythrrr/employee-management-dashboard",
  },
  {
    title: "Village Information System",
    category: ["Web"],
    period: "Apr — Jul 2024",
    description:
      "Centralized system to digitalize village administrative workflows. Delivered to Desa Tegal.",
    highlights: ["Monolithic full-stack app", "Admin CRUD panel"],
    tech: ["Node.js", "Express", "MySQL"],
    repo: "https://github.com/sslythrrr/village-information-system",
  },
  {
    title: "Promethee Infrastructure",
    category: ["Web", "DSS"],
    period: "Jun — Jul 2024",
    description:
      "Village infrastructure DSS using PROMETHEE II multi-criteria analysis.",
    highlights: ["Dynamic criteria weighting", "PROMETHEE II in JS"],
    tech: ["Python", "Flask", "JavaScript"],
    repo: "https://github.com/sslythrrr/PROMETHEE-infrastructure-prioritization",
  },
  {
    title: "Smartphone Recommendation",
    category: ["Web", "DSS"],
    period: "May — Jun 2024",
    description:
      "Recommender combining unsupervised learning and multi-criteria decision making.",
    highlights: ["K-Means on hardware specs", "AHP for subjective ranking"],
    tech: ["Python", "Flask", "K-Means", "AHP"],
    repo: "https://github.com/sslythrrr/AHP-clustering-smartphone",
  },
  {
    title: "Indonesia Fuel Projection",
    category: ["Data Science"],
    period: "Nov 2023 — Jan 2024",
    description:
      "System dynamics model projecting Indonesia's fuel availability through 2028.",
    highlights: ["Causal loop + stock-flow in iThink", "Validated against 7 yrs data"],
    tech: ["Python", "iThink", "NumPy"],
    repo: "https://github.com/sslythrrr/",
  },
  {
    title: "Steam ETL & Analysis",
    category: ["Data Engineering"],
    period: "Mar — May 2023",
    description:
      "End-to-end ETL to harvest and analyze real-time Steam gaming metrics.",
    highlights: [
      "Async crawler handling 60+ concurrent requests",
      "Pareto-based filtering for pipeline efficiency",
    ],
    tech: ["Python", "Aiohttp", "AsyncIO", "Pandas"],
    repo: "https://github.com/sslythrrr/steam-games-analysis",
  },
  {
    title: "Store it!",
    category: ["Desktop"],
    period: "Dec 2022 — Jan 2023",
    description: "Desktop inventory management app.",
    highlights: ["CRUD inventory", "Search + summary dashboard"],
    tech: ["Flutter", "MySQL"],
    repo: "https://github.com/sslythrrr/inventory-management-flutter",
  },
];

export const skillGroups = [
  { label: "Testing & QA", items: ["Katalon", "Playwright", "Apache JMeter", "k6", "Postman", "Notion", "Manual Testing", "Test Scenarios", "UAT", "Regression Testing"] },
  { label: "Design & Product", items: ["Figma", "Notion", "Google Sheets", "Requirements Discovery"] },
  { label: "Mobile", items: ["Flutter", "Kotlin", "Dart", "Android"] },
  { label: "Web / Backend", items: ["JavaScript", "TypeScript", "Node.js", "Express", "Flask"] },
  { label: "Data / AI", items: ["Python", "Pandas", "NumPy", "TensorFlow", "TFLite"] },
  { label: "Database", items: ["MySQL"] },
  { label: "Dev Tools", items: ["Git", "GitHub", "VSCode", "Android Studio"] },
];

export const certifications = [
  { name: "Data Scientist Associate", issuer: "DataCamp", url: "https://www.datacamp.com/certificate/DSA0012350" },
  { name: "AI Engineer for Developer Associate", issuer: "DataCamp", url: "https://www.datacamp.com/certificate/AIEDA0018" },
  { name: "Python Data Associate", issuer: "DataCamp", url: "https://www.datacamp.com/certificate/PDA001989" },
  { name: "Back-end Development", issuer: "IBM SkillsBuild", url: "https://www.credly.com/badges/1633188b" },
  { name: "Front-end Web Development", issuer: "IBM SkillsBuild", url: "https://www.credly.com/badges/1a327638" },
  { name: "Agile Explorer", issuer: "IBM SkillsBuild", url: "https://www.credly.com/badges/114c7a23" },
  { name: "Belajar Dasar AI", issuer: "Dicoding", url: "https://www.dicoding.com/certificates/6RPNGN3W" },
  { name: "Node.js & NPM", issuer: "KelasFullStack", url: "https://codepolitan.com/c/8GAOACK" },
  { name: "RESTful with Express.js", issuer: "KelasFullStack", url: "https://codepolitan.com/c/PZ0E2GN" },
  { name: "Dasar Express.js", issuer: "KelasFullStack", url: "https://codepolitan.com/c/EK61RON" },
  { name: "MongoDB di JavaScript", issuer: "KelasFullStack", url: "https://codepolitan.com/c/GWO0Z9C" },
  { name: "Middleware Express.js", issuer: "KelasFullStack", url: "https://codepolitan.com/c/E9R3D5B" },
  { name: "OOP di JavaScript", issuer: "KelasFullStack", url: "https://codepolitan.com/c/HQFUCRV" },
  { name: "JavaScript Asynchronous", issuer: "KelasFullStack", url: "https://codepolitan.com/c/715QST9" },
  { name: "JavaScript DOM", issuer: "KelasFullStack", url: "https://codepolitan.com/c/FOHUFHP" },
];

export const about = {
  bio: [
    "Quality Assurance engineer with hands-on experience in manual and automation testing using Playwright, performance & load testing with Apache JMeter and k6.",
    "Computer Science graduate from Universitas Pakuan (GPA 3.89, Cum Laude). During university, I built mobile apps, developed full-stack web platforms, and trained ML models. Now, I focus on software quality and making sure applications actually behave."
  ],
  philosophies: [
    { title: "Test Early, Ship Confidently", description: "Finding bugs early saves time, money, and headaches." },
    { title: "Automate the Mundane", description: "If a test is repetitive and deterministic, it belongs in a script." },
    { title: "Keep it Simple", description: "Complexity is the enemy of reliability." }
  ],
  avatarUrl: "/profile.webp",
  email: "an.tubagusp@gmail.com",
  social: {
    github: "https://github.com/sslythrrr",
    linkedin: "https://linkedin.com/in/panji-anugrah"
  },
  status: "Open for opportunities"
};
