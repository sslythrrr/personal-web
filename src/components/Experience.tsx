import { motion, useInView, useScroll, useTransform } from "framer-motion";
import { useRef, useState, useCallback, useEffect } from "react";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription, DialogTrigger } from "./ui/dialog";
import { ExternalLink, ChevronLeft, ChevronRight, ChevronDown } from "lucide-react";
import useEmblaCarousel from "embla-carousel-react";
import { useIsMobile } from "@/hooks/use-mobile";

const experiences = [
  {
    title: "Mobile Developer",
    company: "Monfori Nusantara",
    period: "Aug 2024 - Sep 2024",
    duration: "2 months",
    location: "Bogor Regency, West Java, Indonesia · Hybrid",
    description: [
      "Built a production-ready Flutter application to streamline field documentation workflows for lab operations.",
      "Developed batch image processing system handling 200-800 images per distribution cycle",
      "Implemented EXIF-based sorting with Quick Sort algorithm for timestamp organization",
      "Integrated automated renaming rules and ZIP compression for operational data distribution",
      "Delivered tool with 100% User Acceptance during internship tenure",
    ],
    tags: ["Flutter", "Dart", "Android", "Mobile Development"],
  },
  {
    title: "Web Developer",
    company: "Universitas Pakuan",
    period: "Apr 2024 - Jul 2024",
    duration: "4 months",
    location: "Bogor Regency, West Java, Indonesia · Hybrid",
    description: [
      "Participated in Student Community Service (KKN Tematik) program at Desa Tegal, Kecamatan Kemang.",
      "Conducted field observations and stakeholder interviews with Village Secretary",
      "Designed and developed Village Information System to digitalize public services",
      "Built monolithic full-stack application using Node.js, Express.js, and MySQL",
      "Mapped business processes and determined functional requirements through direct audits",
    ],
    tags: ["Node.js", "Express.js", "MySQL", "Web Development"],
  },
];

interface Certification {
  title: string;
  issuer: string;
  credentialUrl: string;
}

const certifications: Certification[] = [
  { title: "Data Scientist Associate", issuer: "DataCamp", credentialUrl: "https://www.datacamp.com/certificate/DSA0012350995545" },
  { title: "AI Engineer for Developer Associate", issuer: "DataCamp", credentialUrl: "https://www.datacamp.com/certificate/AIEDA0018448242954" },
  { title: "Python Data Associate", issuer: "DataCamp", credentialUrl: "https://www.datacamp.com/certificate/PDA0019893611877" },
  { title: "Back-end Development", issuer: "IBM SkillsBuild", credentialUrl: "https://www.credly.com/badges/1633188b-00ea-4c01-ab68-c1d14996a879/linked_in_profile" },
  { title: "Front-end Web Development", issuer: "IBM SkillsBuild", credentialUrl: "https://www.credly.com/badges/1a327638-98ca-457b-bf8c-6697cc9f90e0/linked_in_profile" },
  { title: "Agile Explorer", issuer: "IBM SkillsBuild", credentialUrl: "https://www.credly.com/badges/114c7a23-09a6-421c-82e3-7d224c92deac/linked_in_profile" },
  { title: "Belajar Dasar Node.js dan NPM", issuer: "KelasFullStack", credentialUrl: "https://codepolitan.com/c/8GAOACK" },
  { title: "Belajar RESTful dengan Express.js", issuer: "KelasFullStack", credentialUrl: "https://codepolitan.com/c/PZ0E2GN" },
  { title: "Belajar Dasar Express.js", issuer: "KelasFullStack", credentialUrl: "https://codepolitan.com/c/EK61RON" },
  { title: "Belajar Menggunakan MongoDB di JavaScript", issuer: "KelasFullStack", credentialUrl: "https://codepolitan.com/c/GWO0Z9C" },
  { title: "Implementasi Middleware pada Express.js", issuer: "KelasFullStack", credentialUrl: "https://codepolitan.com/c/E9R3D5B" },
  { title: "Belajar Dasar AI", issuer: "Dicoding", credentialUrl: "https://www.dicoding.com/certificates/6RPNGN3W9Z2M" },
  { title: "Belajar Konsep OOP di JavaScript", issuer: "KelasFullStack", credentialUrl: "https://codepolitan.com/c/HQFUCRV" },
  { title: "Belajar JavaScript Asynchronous", issuer: "KelasFullStack", credentialUrl: "https://codepolitan.com/c/715QST9" },
  { title: "Belajar JavaScript DOM", issuer: "KelasFullStack", credentialUrl: "https://codepolitan.com/c/FOHUFHP" },
];

const Experience = () => {
  const containerRef = useRef(null);
  const ref = useRef(null);
  const certRef = useRef(null);
  const isInView = useInView(ref, { margin: "-100px" });
  const [showCertsModal, setShowCertsModal] = useState(false);
  const isMobile = useIsMobile();
  const INITIAL_DISPLAY = isMobile ? 3 : 6;

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });

  const lineHeight = useTransform(scrollYProgress, [0.1, 0.9], ["0%", "100%"]);


  const displayedCerts = certifications.slice(0, INITIAL_DISPLAY);
  const remainingCount = certifications.length - INITIAL_DISPLAY;

  const [openIndex, setOpenIndex] = useState<number | null>(null);
  const [currentCertIndex, setCurrentCertIndex] = useState(0);

  const [emblaRef, emblaApi] = useEmblaCarousel({
    loop: false,
    align: "start",
    dragFree: true,
    containScroll: "trimSnaps",
  });

  const onSelect = useCallback(() => {
    if (!emblaApi) return;
    setCurrentCertIndex(emblaApi.selectedScrollSnap());
  }, [emblaApi]);

  useEffect(() => {
    if (!emblaApi) return;
    onSelect();
    emblaApi.on("select", onSelect);
    return () => {
      emblaApi.off("select", onSelect);
    };
  }, [emblaApi, onSelect]);

  return (
    <section id="experience" className="pt-16 pb-20 md:pt-20 md:pb-28 px-6" ref={containerRef}>
      <div className="max-w-5xl mx-auto" ref={ref}>
        <motion.h2
          className="text-section font-display mb-16 md:mb-20"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
        >
          Experience
        </motion.h2>

        {/* Timeline */}
        <div className="relative">
          {/* Timeline Line - Hidden on mobile */}
          <div className="hidden md:block absolute left-1/2 top-0 bottom-[-60px] w-px bg-secondary -translate-x-1/2 overflow-hidden">
            <motion.div
              className="absolute top-0 left-0 right-0 bg-gradient-to-b from-accent via-foreground/50 to-transparent"
              style={{ height: lineHeight }}
            />
          </div>

          <div className="space-y-12 md:space-y-0">
            {experiences.map((exp, index) => (
              <Dialog key={exp.title + exp.company} open={openIndex === index} onOpenChange={(open) => setOpenIndex(open ? index : null)}>
                <motion.div
                  className={`relative md:flex ${index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
                    } md:gap-8`}
                  initial={{ opacity: 0, x: index % 2 === 0 ? -80 : 80, y: 30 }}
                  animate={isInView ? { opacity: 1, x: 0, y: 0 } : {}}
                  transition={{
                    duration: 0.8,
                    delay: index * 0.2,
                    ease: [0.22, 1, 0.36, 1]
                  }}
                >
                  {/* Content */}
                  <div className={`md:w-1/2 ${index % 2 === 0 ? "md:pr-12 md:text-right" : "md:pl-12"}`}>
                    <DialogTrigger asChild>
                      <motion.div
                        className="bg-card border border-secondary rounded-lg p-3 md:p-4 card-hover cursor-pointer"
                        whileHover={{
                          y: -8,
                          transition: { duration: 0.3, ease: "easeOut" }
                        }}
                      >
                        <div className={`flex flex-col ${index === 0 ? 'md:items-end' : ''}`}>
                          <h3 className="text-lg md:text-xl font-display font-semibold mb-0 flex items-center gap-1">
                            {exp.title}
                            {(index === 1 || index === 0) && (
                              <span className="ml-2 font-mono px-2 py-0.5 rounded align-middle" style={{ fontSize: '0.75em', fontWeight: 500, color: '#888' }}>
                                {index === 0 ? '- Intern' : '- Volunteer'}
                              </span>
                            )}
                          </h3>
                        </div>
                        <p className="text-accent font-medium mb-2">{exp.company}</p>

                        <div className={`flex flex-wrap gap-2 text-xs text-muted-foreground mb-2 ${index % 2 === 0 ? "md:justify-end" : ""
                          }`}>
                          <span className="flex items-center gap-1.5">
                            {exp.period}
                          </span>
                          <span>
                            |
                          </span>
                          <span className="flex items-center gap-1.5">
                            {exp.location.split(" · ")[0]}
                          </span>
                        </div>

                        <div className={`text-foreground/70 text-xs mb-2.5 ${index % 2 === 0 ? "md:text-right" : ""
                          }`}>
                          <span className="line-clamp-1">{exp.description[0]}</span>
                          <span className="text-foreground/50 italic text-[11px]">more...</span>
                        </div>

                        <div className={`flex flex-wrap gap-1 ${index % 2 === 0 ? "md:justify-end" : ""
                          }`}>
                          {exp.tags.map((tag, tagIndex) => (
                            <motion.span
                              key={tag}
                              className="tech-tag text-xs"
                              initial={{ opacity: 0, scale: 0.8 }}
                              animate={isInView ? { opacity: 1, scale: 1 } : {}}
                              transition={{
                                duration: 0.4,
                                delay: index * 0.2 + tagIndex * 0.05 + 0.4
                              }}
                            >
                              {tag}
                            </motion.span>
                          ))}
                        </div>
                      </motion.div>
                    </DialogTrigger>
                  </div>

                  {/* Spacer for alternating layout */}
                  <div className="hidden md:block md:w-1/2" />
                </motion.div>

                {/* Modal Popup for full description */}
                <DialogContent className="max-w-xl">
                  <DialogHeader>
                    <DialogTitle>
                      {exp.title} <span className="text-accent font-medium">- {exp.company}</span>
                    </DialogTitle>
                    <DialogDescription>
                      <div className="flex flex-wrap gap-2 text-sm text-muted-foreground mb-4 mt-2">
                        <span className="flex items-center gap-1.5">
                          {exp.period}
                        </span>
                        <span className="flex items-center gap-1.5">
                          |
                        </span>
                        <span className="flex items-center gap-1.5">
                          {exp.location}
                        </span>
                      </div>
                    </DialogDescription>
                  </DialogHeader>
                  <ul className="list-disc pl-6 space-y-2 text-foreground/80 text-base mb-6 mt-2">
                    {exp.description.map((item, i) => (
                      <li key={i}>{item}</li>
                    ))}
                  </ul>
                  <div className="flex flex-wrap gap-2 mt-2">
                    {exp.tags.map((tag) => (
                      <span key={tag} className="tech-tag text-xs bg-secondary px-2 py-1 rounded">
                        {tag}
                      </span>
                    ))}
                  </div>
                </DialogContent>
              </Dialog>
            ))}
          </div>
        </div>

        {/* Education Section - Foundation */}
        <motion.div
          className="mt-16 md:mt-20"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, delay: 0.3 }}
        >
          <div className="max-w-3xl mx-auto">
            {/* Education Banner */}
            <div className="relative p-5 md:p-6 bg-card/10 border-y border-border/40">
              <div className="flex flex-col items-center text-center space-y-3">
                <div className="flex items-center justify-center gap-2.5">
                  <h3 className="text-lg md:text-xl font-display font-semibold text-foreground">
                    Universitas Pakuan
                  </h3>
                </div>

                <div className="space-y-2">
                  <p className="text-sm md:text-base text-muted-foreground">
                    Bachelor of Computer Science · <span className="text-accent font-semibold">3.89/4.00</span> <span className="text-accent/40 italic text-xs">(Cum Laude)</span>
                  </p>
                  <p className="text-xs md:text-sm text-muted-foreground/60">
                    Sep 2021 - Jul 2025 · Bogor, West Java, Indonesia
                  </p>
                  <p className="text-xs text-muted-foreground/50 italic max-w-2xl pt-1">
                    "Smart Gallery: Integrating Natural Language Processing And Computer Vision For Efficient Image Management"
                  </p>
                </div>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Certifications Subsection */}
        <div className="mt-12 md:mt-20 mb-2 md:mb-8" ref={certRef}>
          {/* Decorative divider */}
          <motion.div
            className="flex items-center gap-4 mb-8 md:mb-12"
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : {}}
            transition={{ duration: 0.3, delay: 0.2 }}
          >
            <div className="h-px flex-1 bg-gradient-to-r from-border to-transparent" />
            <span className="text-[10px] uppercase tracking-[0.2em] text-muted-foreground/40">
              Continuous Learning
            </span>
            <div className="h-px flex-1 bg-gradient-to-l from-border to-transparent" />
          </motion.div>
          {/* Certifications Grid - Compact Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
            {displayedCerts.map((cert, index) => (
              <motion.a
                key={cert.title}
                href={cert.credentialUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="group relative flex items-center gap-3 p-4 
                           bg-secondary/20 rounded-lg
                           hover:bg-secondary/40 hoverable"
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
                whileHover={{ y: -2 }}
              >
                {/* Content */}
                <div className="flex-1 min-w-0">
                  <h4 className="text-sm font-medium text-foreground/90 leading-snug
                                 group-hover:text-foreground transition-colors duration-300
                                 line-clamp-1">
                    {cert.title}
                  </h4>
                  <div className="flex items-center gap-2 mt-1.5">
                    <span className="text-xs text-muted-foreground/60 truncate">
                      {cert.issuer}
                    </span>
                  </div>
                </div>

                {/* Arrow Icon */}
                <ExternalLink className="flex-shrink-0 w-3.5 h-3.5 text-muted-foreground/30
                                         group-hover:text-accent group-hover:translate-x-0.5 group-hover:-translate-y-0.5
                                         transition-all duration-300 mt-0.5" />
              </motion.a>
            ))}
          </div>

          {/* View All Certificates Button */}
          {remainingCount > 0 && (
            <motion.div
              className="mt-6 flex justify-center"
              initial={{ opacity: 0 }}
              animate={isInView ? { opacity: 1 } : {}}
              transition={{ duration: 0.5, delay: 0.3 }}
            >
              <Dialog open={showCertsModal} onOpenChange={setShowCertsModal}>
                <DialogTrigger asChild>
                  <button
                    className="group inline-flex items-center gap-2 px-5 py-2.5 
                               text-xs font-medium text-muted-foreground
                               border border-border/40 rounded-full
                               bg-secondary/10 backdrop-blur-sm
                               hover:border-accent/40 hover:text-foreground
                               hover:bg-secondary/30
                               transition-all duration-300 hoverable"
                  >
                    <span>View All</span>
                    <ChevronDown className="w-3.5 h-3.5 transition-transform duration-300 group-hover:translate-y-0.5" />
                  </button>
                </DialogTrigger>
                <DialogContent className="max-w-5xl max-h-[80vh] overflow-y-auto">
                  <DialogHeader>
                    <DialogTitle>Courses</DialogTitle>
                  </DialogHeader>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 mt-4">
                    {certifications.map((cert) => (
                      <a
                        key={cert.title}
                        href={cert.credentialUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="group relative flex items-center gap-3 p-4 
                                   bg-secondary/20 rounded-lg
                                   hover:bg-secondary/40 transition-all duration-300"
                      >
                        {/* Content */}
                        <div className="flex-1 min-w-0">
                          <h4 className="text-sm font-medium text-foreground/90 leading-snug
                                         group-hover:text-foreground transition-colors duration-300
                                         line-clamp-1">
                            {cert.title}
                          </h4>
                          <div className="flex items-center gap-2 mt-1.5">
                            <span className="text-xs text-muted-foreground/60 truncate">
                              {cert.issuer}
                            </span>
                          </div>
                        </div>

                        {/* Arrow Icon */}
                        <ExternalLink className="flex-shrink-0 w-3.5 h-3.5 text-muted-foreground/30
                                                 group-hover:text-accent group-hover:translate-x-0.5 group-hover:-translate-y-0.5
                                                 transition-all duration-300 mt-0.5" />
                      </a>
                    ))}
                  </div>
                </DialogContent>
              </Dialog>
            </motion.div>
          )}

        </div>

      </div>
    </section>
  );
};

export default Experience;