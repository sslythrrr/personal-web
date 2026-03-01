import { useState, useRef, useCallback, useEffect, useMemo } from "react";
import { motion, useInView, AnimatePresence, useScroll, useTransform } from "framer-motion";
import ProjectModal from "./ProjectModal";

const projects = [
  {
    id: 1,
    title: "Noteturne",
    period: "Nov 2025 - Dec 2025",
    categories: ["Mobile"],
    description:
      "Android note app with custom Enigma-inspired encryption using unique seed-based cipher for secure storage and cross-device sharing via QR or file export",
    highlights: [
      "Built custom Enigma-inspired cipher with 5 rotors and hex encoding to handle Unicode text",
      "Designed seed-based encryption ensuring consistent decryption when notes are shared across devices",
      "Implemented QR code and file-based sharing system for encrypted note transfer between users",
    ],
    tags: ["Kotlin", "Android", "Jetpack Compose", "Cryptography"],
    github: "https://github.com/sslythrrr/",
    images: [
      "/project/noteturne/1.webp",
      "/project/noteturne/2.webp",
      "/project/noteturne/3.webp",
      "/project/noteturne/4.webp",
      "/project/noteturne/5.webp",
      "/project/noteturne/6.webp",
      "/project/noteturne/7.webp",
    ],
  }
  , {
    id: 2,
    title: "Smart Gallery",
    period: "Mar 2025 - Jul 2025",
    categories: ["Mobile", "Deep Learning"],
    description:
      "Android gallery app with advanced NLP search and computer vision capabilities for intelligent photo management.",
    highlights: [
      "Fine-tuned three separate DistilBERT models for Intent Classification, NER, and Semantic Similarity",
      "Integrated MobileNetV3 for multi-label classification and ML Kit for OCR-based retrieval",
      "Architected system to run quantized models locally using TensorFlow Lite",
    ],
    tags: ["Kotlin", "Android", "NLP", "DistilBERT", "MobileNetV3", "Computer Vision", "TFLite", "Jetpack Compose"],
    github: "https://github.com/sslythrrr/smart-gallery",
    images: [
      "/project/smart-gallery/1.webp",
      "/project/smart-gallery/2.webp",
      "/project/smart-gallery/3.webp",
      "/project/smart-gallery/4.webp",
    ],
  },
  {
    id: 3,
    title: "Inventory Management System",
    period: "Nov 2024 - Apr 2025",
    categories: ["Web", "Deep Learning"],
    description:
      "A smart inventory management platform featuring an integrated NLP chatbot for search and a dynamic auction system for stock optimization.",
    highlights: [
      "Integrated IndoBERT Intent and NER model for chatbot to handle natural language queries and automate user support",
      "Multi-role access system with distinct operational dashboards",
      "Developed real-time auction module as determined by Admin and approval from Supervisor",
      "Built real-time dashboards to visualize inventory status",
      "Manage and print report documents in XLSX format",
    ],
    tags: ["Node.js", "Express.js", "MySQL", "NLP", "IndoBERT", "TensorFlow.js"],
    github: "https://github.com/sslythrrr/inventas-inventory-management",
    images: [
      "/project/inventas/1.webp",
      "/project/inventas/2.webp",
      "/project/inventas/3.webp",
      "/project/inventas/4.webp",
      "/project/inventas/5.webp",
      "/project/inventas/6.webp",
      "/project/inventas/7.webp",
    ],
  },
  {
    id: 4,
    title: "Steam Genre & Retention Forecasting",
    period: "Dec 2024 - Jan 2025",
    categories: ["Data Science"],
    description:
      "Comprehensive analysis of 14,213 Steam games to forecast market trends and player retention patterns.",
    highlights: [
      "Implemented Facebook Prophet and STL Decomposition for Q1-Q4 2025 forecasting",
      "Identified 1,846% YoY growth potential in 'Early Access' genre",
      "Applied Pearson Correlation Matrices for cross-genre synergy analysis",
    ],
    tags: ["Python", "Prophet", "STL", "Pandas", "NumPy", "Matplotlib"],
    github: "https://github.com/sslythrrr/",
    images: [
      "/project/time-series/1.webp",
      "/project/time-series/2.webp",
    ],
  },
  {
    id: 5,
    title: "Monfori Lens",
    period: "Aug 2024 - Sep 2024",
    categories: ["Mobile"],
    description:
      "Production-ready batch image processing application for field reporting efficiency.",
    highlights: [
      "Handles 200-800 images per distribution cycle",
      "Quick Sort algorithm for timestamp-based sorting",
      "100% User Acceptance during internship deployment",
    ],
    tags: ["Flutter", "Dart", "Android", "Quick Sort Algorithms"],
    github: "https://github.com/sslythrrr/monfori-lens",
    images: [
      "/project/monfori-lens/1.webp",
      "/project/monfori-lens/2.webp",
      "/project/monfori-lens/3.webp",
      "/project/monfori-lens/4.webp",
    ],
  },
  {
    id: 6,
    title: "Employee Management Dashboard",
    period: "Jul 2024 - Aug 2024",
    categories: ["Web"],
    description:
      "Internal HR dashboard for company announcements and division-based task management with proof submission.",
    highlights: [
      "Implemented role-based access control with division-specific task visibility",
      "Built task assignment system for HR with employee proof submission",
      "Developed announcement broadcasting system for company-wide updates",
    ],
    tags: ["Node.js", "Express.js", "MySQL"],
    github: "https://github.com/sslythrrr/employee-management-dashboard",
    images: [
      "/project/announcement-hotel/1.webp",
    ],
  }
  ,
  {
    id: 7,
    title: "Village Information System",
    period: "Apr 2024 - Jul 2024",
    categories: ["Web"],
    description:
      "Centralized village information system for administrative workflow digitalization.",
    highlights: [
      "Built monolithic full-stack application with Node.js and Express.js",
      "Admin panel with CRUD operations for village services",
      "Delivered platform for Desa Tegal, Kecamatan Kemang",
    ],
    tags: ["Node.js", "Express.js", "MySQL"],
    github: "https://github.com/sslythrrr/village-information-system",
    images: [
      "/project/village-system/1.webp",
      "/project/village-system/2.webp",
      "/project/village-system/3.webp",
      "/project/village-system/4.webp",
      "/project/village-system/5.webp",
      "/project/village-system/6.webp",
      "/project/village-system/7.webp",
    ],
  },
  {
    id: 8,
    title: "Promethee Infrastructure",
    period: "Jun 2024 - Jul 2024",
    categories: ["Web", "Decision Support System"],
    description:
      "Web-based village infrastructure decision support system using PROMETHEE II multi-criteria analysis.",
    highlights: [
      "Interactive alternative comparison with dynamic criteria weighting",
      "Promethee II algorithm implementation in JavaScript",
      "Visible results with clear ranking and net flow scores",
    ],
    tags: ["Decision Support System", "Python", "Flask", "JavaScript", "Promethee II"],
    github: "https://github.com/sslythrrr/PROMETHEE-infrastructure-prioritization",
    images: [
      "/project/promethee-pembangunan/1.webp",
    ],
  },
  {
    id: 9,
    title: "Smartphone Recommendation",
    period: "May 2024 - Jun 2024",
    categories: ["Web", "Decision Support System"],
    description:
      "Web-based recommendation engine combining unsupervised learning with multi-criteria decision making.",
    highlights: [
      "K-Means clustering for objective hardware specs",
      "AHP for subjective preference ranking",
      "Interactive Flask web interface",
    ],
    tags: ["Decision Support System", "Python", "Flask", "K-Means", "AHP"],
    github: "https://github.com/sslythrrr/AHP-clustering-smartphone",
    images: [
      "/project/smartphone-recommendation/1.webp",
    ],
  },
  {
    id: 10,
    title: "System Dynamics: Indonesia Fuel Projection",
    period: "Nov 2023 - Jan 2024",
    categories: ["Data Science", "Dynamic Simulation"],
    description:
      "Complex system dynamics model projecting Indonesia's fuel availability through 2028.",
    highlights: [
      "Constructed Causal Loop Diagrams and Stock-Flow maps using iThink",
      "Validated with Python against 7 years historical data",
      "Projected supply deficit with low Mean Absolute Deviation",
    ],
    tags: ["Python", "iThink", "System Dynamics", "NumPy", "Matplotlib"],
    github: "https://github.com/sslythrrr/",
    images: [
      "/project/system-dynamic/1.webp",
      "/project/system-dynamic/2.webp",
    ],
  },
  {
    id: 11,
    title: "Steam ETL & Analysis",
    period: "Mar 2023 - May 2023",
    categories: ["Data Engineering", "Data Science"],
    description:
      "End-to-end data engineering solution designed to harvest and analyze real-time gaming metrics, transforming raw Steam data into actionable market insights.",
    highlights: [
      "Built a high-concurrency asynchronous crawler (Python/Aiohttp) handling 60+ simultaneous requests",
      "Processed daily player metrics to identify viral trends and retention rates for top titles",
      "Implemented Pareto-based filtering to optimize data processing, capturing 99% of the active player base",
    ],
    tags: ["Python", "Aiohttp", "AsyncIO", "ETL", "Pandas", "Web Scraping"],
    github: "https://github.com/sslythrrr/steam-games-analysis",
    images: [
      "/project/etl-pipeline/1.webp",
    ],
  },
  {
    id: 12,
    title: "Store it!",
    period: "Dec 2022 - Jan 2023",
    categories: ["Desktop"],
    description:
      "Desktop based simple inventory management application.",
    highlights: [
      "CRUD operations for inventory items",
      "Search and summary dashboard features",
    ],
    tags: ["Flutter", "MySQL"],
    github: "https://github.com/sslythrrr/inventory-management-flutter",
    images: [
      "/project/storeit/1.webp",
      "/project/storeit/2.webp",
      "/project/storeit/3.webp",
      "/project/storeit/4.webp",
      "/project/storeit/5.webp",
      "/project/storeit/6.webp",
      "/project/storeit/7.webp",
    ],
  },
];

const allCategories = [
  "All",
  "Mobile",
  "Web",
  "Desktop",
  "Data Science",
  "Data Engineering",
  "Deep Learning",
  "Decision Support System",
  "Dynamic Simulation"
];

// Extract all unique tech tags for filtering
const getAllTechTags = () => {
  const allTags = new Set<string>();
  projects.forEach(project => {
    project.tags.forEach(tag => allTags.add(tag));
  });
  return Array.from(allTags).sort();
};


// Consistent dark gradient for all thumbnails
const darkGradient = 'from-[#18181b] via-[#23232a] to-[#101014]';

const getProjectGradient = () => darkGradient;

const Projects = () => {
  // Preload image utility
  const preloadImage = (src: string) => {
    if (!src) return;
    const img = new window.Image();
    img.src = src;
  };

  const [activeFilters, setActiveFilters] = useState<string[]>(["All"]);
  const [selectedProject, setSelectedProject] = useState<typeof projects[0] | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const containerRef = useRef(null);
  const ref = useRef(null);
  const isInView = useInView(ref, { margin: "-100px" });

  // Scroll container ref for arrow buttons
  const scrollContainerRef = useRef<HTMLDivElement>(null);

  const handleScrollUp = () => {
    if (!scrollContainerRef.current) return;
    scrollContainerRef.current.scrollBy({
      top: -300,
      behavior: 'smooth'
    });
  };

  const handleScrollDown = () => {
    if (!scrollContainerRef.current) return;
    scrollContainerRef.current.scrollBy({
      top: 300,
      behavior: 'smooth'
    });
  };

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });

  const sectionOpacity = useTransform(scrollYProgress, [0, 0.2, 0.5, 0.8, 1], [0.3, 1, 1, 1, 0.3]);

  const toggleFilter = (filter: string) => {
    if (filter === "All") {
      setActiveFilters(["All"]);
    } else {
      let newFilters = activeFilters.filter((f) => f !== "All");
      if (newFilters.includes(filter)) {
        newFilters = newFilters.filter((f) => f !== filter);
      } else {
        newFilters.push(filter);
      }
      setActiveFilters(newFilters.length === 0 ? ["All"] : newFilters);
    }
  };

  const filteredProjects = useMemo(() => {
    return projects.filter((project) => {
      // Category filter
      const matchesCategory = activeFilters.includes("All") ||
        project.categories.some((cat) => activeFilters.includes(cat));

      return matchesCategory;
    });
  }, [activeFilters]);

  const openProjectModal = (project: typeof projects[0]) => {
    setSelectedProject(project);
    setIsModalOpen(true);
  };

  return (
    <>
      <section id="projects" className="pt-16 pb-20 md:pt-20 md:pb-28 px-6 overflow-hidden" ref={containerRef}>
        <motion.div className="max-w-7xl mx-auto" ref={ref} style={{ opacity: sectionOpacity }}>
          <motion.h2
            className="text-section font-display mb-6 text-center md:mb-12"
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          >
            Projects
          </motion.h2>

          {/* Filter Buttons */}
          <motion.div
            className="flex flex-wrap gap-1 mb-6"
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
          >
            {allCategories.map((category) => (
              <button
                key={category}
                onClick={() => toggleFilter(category)}
                className={`px-3 py-2 md:py-1.5 text-xs font-medium rounded-full border transition-all duration-300 hoverable ${activeFilters.includes(category)
                  ? "bg-foreground text-background border-foreground"
                  : "bg-transparent text-foreground/60 border-foreground/20 hover:border-foreground/40"
                  }`}
                aria-label={`Filter projects by ${category}`}
                aria-pressed={activeFilters.includes(category)}
              >
                {category}
              </button>
            ))}
          </motion.div>

          {/* Project Count */}
          <motion.div
            className="text-sm text-muted-foreground mb-4"
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <span className="text-foreground font-medium">{filteredProjects.length}</span> projects
          </motion.div>

          {/* Vertical Scrollable Grid with Arrow Controls */}
          <div className="relative">
            {/* Scroll Controls - Clustered at top right */}
            <div className="absolute -top-12 right-0 z-10 flex gap-2">
              {/* Scroll Up Arrow */}
              <button
                onClick={handleScrollUp}
                className="p-2 bg-background/80 hover:bg-background border border-border rounded-full transition-all duration-200 hoverable group"
                aria-label="Scroll up"
              >
                <svg
                  className="w-4 h-4 text-foreground/60 group-hover:text-foreground transition-colors"
                  fill="none"
                  strokeWidth="2"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 15l7-7 7 7" />
                </svg>
              </button>

              {/* Scroll Down Arrow */}
              <button
                onClick={handleScrollDown}
                className="p-2 bg-background/80 hover:bg-background border border-border rounded-full transition-all duration-200 hoverable group"
                aria-label="Scroll down"
              >
                <svg
                  className="w-4 h-4 text-foreground/60 group-hover:text-foreground transition-colors"
                  fill="none"
                  strokeWidth="2"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                </svg>
              </button>
            </div>

            <motion.div
              ref={scrollContainerRef}
              className="h-[500px] md:h-[500px] overflow-y-auto overflow-x-hidden pr-2 project-scrollbar"
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.7, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
            >
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3 md:gap-4">
                {filteredProjects.map((project, index) => (
                  <motion.div
                    key={project.id}
                    initial={{ opacity: 0, y: 20 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{
                      duration: 0.5,
                      delay: Math.min(index * 0.08, 0.4),
                      ease: [0.22, 1, 0.36, 1]
                    }}
                  >
                    <button
                      onClick={() => openProjectModal(project)}
                      className="w-full text-left group"
                      aria-label={`View details of ${project.title} project - ${project.categories.join(', ')}`}
                    >
                      <article className="bg-card roundedoverflow-hidden transition-all duration-300 hover:translate-y-[-4px]">
                        {/* Thumbnail - hidden on mobile, visible on md+ */}
                        <div
                          className={`hidden md:flex aspect-[16/9] bg-gradient-to-br ${getProjectGradient()} relative overflow-hidden items-center justify-center`}
                        >
                          {project.images && project.images.length > 0 ? (
                            <>
                              {/* Blurred background image for depth */}
                              <img
                                src={project.images[0]}
                                alt=""
                                className="absolute inset-0 w-full h-full object-cover scale-110 blur-lg opacity-50 pointer-events-none select-none"
                                aria-hidden="true"
                              />
                              {/* Uniform dark overlay for all */}
                              <div className="absolute inset-0 bg-gradient-to-br from-black/80 via-[#18181b]/100 to-black/90 opacity-100 pointer-events-none select-none" />
                              {/* Main image centered, fit contain, with shadow */}
                              <img
                                src={project.images[0]}
                                alt={`${project.title} - ${project.categories.join(', ')} project showcasing ${project.tags.slice(0, 3).join(', ')}`}
                                className="relative z-10 max-h-[93%] max-w-[88%] object-contain"
                                decoding="async"
                              />
                            </>
                          ) : (
                            <div className="absolute inset-0 flex items-center justify-center">
                              <span className="text-lg font-display font-semibold text-foreground/10 group-hover:text-foreground/20 transition-colors duration-300">
                                {project.title.split(" ")[0]}
                              </span>
                            </div>
                          )}
                        </div>

                        {/* Compact Content - smaller padding */}
                        <div className="p-3">
                          <h3 className="text-xs md:text-sm font-display font-semibold leading-tight mb-1 group-hover:text-foreground transition-colors truncate">
                            {project.title}
                          </h3>
                          <p className="text-[10px] md:text-xs text-muted-foreground mb-1.5">
                            {project.period}
                          </p>
                          {/* Description */}
                          <p className="text-[10px] md:text-xs text-foreground/70 mb-1.5 line-clamp-1">
                            {project.description}
                          </p>
                          {/* Skill Tags */}
                          <div className="flex flex-wrap gap-1">
                            {project.tags.slice(0, 2).map((tag) => (
                              <span key={tag} className="px-1.5 py-0.5 text-[9px] md:text-[10px] bg-foreground/5 text-foreground/50 rounded truncate max-w-[80px]">
                                {tag}
                              </span>
                            ))}
                            {project.tags.length > 2 && (
                              <span className="px-1.5 py-0.5 text-[9px] md:text-[10px] text-foreground/30">
                                +{project.tags.length - 2}
                              </span>
                            )}
                          </div>
                        </div>
                      </article>
                    </button>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </motion.div>
      </section>
      {/* Project Modal */}
      <ProjectModal
        project={selectedProject}
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
      />
    </>
  );
};

export default Projects;