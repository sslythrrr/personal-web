import { motion, useInView, useScroll, useTransform } from "framer-motion";
import { useRef, useState, useCallback, useEffect } from "react";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription, DialogTrigger } from "./ui/dialog";
import { ExternalLink, ChevronLeft, ChevronRight } from "lucide-react";
import useEmblaCarousel from "embla-carousel-react";

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

const certifications = [
  // --- TIER 1: Top Issuer & Professional Certs ---
  {
    title: "Associate Data Scientist",
    issuer: "DataCamp",
    date: "2024",
    credentialUrl: "#",
  },
  {
    title: "Software Engineering for Web Developers",
    issuer: "DataCamp",
    date: "2024",
    credentialUrl: "#",
  },
  {
    title: "Backend Development",
    issuer: "IBM SkillsBuild",
    date: "2024",
    credentialUrl: "#",
  },
  {
    title: "SQL Associate",
    issuer: "DataCamp",
    date: "2024",
    credentialUrl: "#",
  },
  {
    title: "AI Engineer for Developer",
    issuer: "DataCamp",
    date: "2024",
    credentialUrl: "#",
  },
  {
    title: "Agile Explorer",
    issuer: "IBM SkillsBuild",
    date: "2024",
    credentialUrl: "#",
  },
  {
    title: "MongoDB for Developer",
    issuer: "Udemy",
    date: "2024",
    credentialUrl: "#",
  },

  // --- TIER 2: Advanced Technical Skills (Backend/Mobile Focus) ---
  {
    title: "Belajar Menguasai Nest Js",
    issuer: "KelasFullStack",
    date: "2024",
    credentialUrl: "#",
  },
  {
    title: "Implementasi Middleware pada Express.js",
    issuer: "KelasFullStack",
    date: "2024",
    credentialUrl: "#",
  },
  {
    title: "Belajar RESTful dengan Express.js",
    issuer: "KelasFullStack",
    date: "2024",
    credentialUrl: "#",
  },
  {
    title: "Belajar Membuat Aplikasi Android untuk Pemula",
    issuer: "Dicoding",
    date: "2024",
    credentialUrl: "#",
  },

  // --- TIER 3: Fundamentals & Essentials ---
  {
    title: "Belajar Dasar Node.js dan NPM",
    issuer: "KelasFullStack",
    date: "2024",
    credentialUrl: "#",
  },
  {
    title: "Belajar MongoDB",
    issuer: "KelasFullStack",
    date: "2024",
    credentialUrl: "#",
  },
  {
    title: "Belajar React 101",
    issuer: "KelasFullStack",
    date: "2024",
    credentialUrl: "#",
  },
  {
    title: "Belajar PHP Intermediate",
    issuer: "KelasFullStack",
    date: "2024",
    credentialUrl: "#",
  },
  {
    title: "Web Development Fundamentals",
    issuer: "IBM SkillsBuild",
    date: "2024",
    credentialUrl: "#",
  },
  {
    title: "Belajar Dasar AI",
    issuer: "Dicoding",
    date: "2024",
    credentialUrl: "#",
  },
];

const Experience = () => {
  const containerRef = useRef(null);
  const ref = useRef(null);
  const certRef = useRef(null);
  const isInView = useInView(ref, { margin: "-100px" });
  const isCertInView = useInView(certRef, { margin: "-100px", once: true });

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });

  const lineHeight = useTransform(scrollYProgress, [0.1, 0.9], ["0%", "100%"]);

  const [openIndex, setOpenIndex] = useState<number | null>(null);
  const [currentCertIndex, setCurrentCertIndex] = useState(0);

  const [emblaRef, emblaApi] = useEmblaCarousel({ 
    loop: false, 
    align: "start",
    dragFree: true,
    containScroll: "trimSnaps",
  });

  const scrollPrev = useCallback(() => {
    if (emblaApi) emblaApi.scrollPrev();
  }, [emblaApi]);

  const scrollNext = useCallback(() => {
    if (emblaApi) emblaApi.scrollNext();
  }, [emblaApi]);

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
            transition={{ duration: 0.7, delay: 0.5 }}
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
          <div className="mt-12 md:mt-20" ref={certRef}>
            {/* Decorative divider */}
            <motion.div 
              className="flex items-center gap-4 mb-8 md:mb-12"
              initial={{ opacity: 0 }}
              animate={isCertInView ? { opacity: 1 } : {}}
              transition={{ duration: 0.7, delay: 0.2 }}
            >
              <div className="h-px flex-1 bg-gradient-to-r from-border to-transparent" />
              <span className="text-[10px] uppercase tracking-[0.2em] text-muted-foreground/40">
                Continuous Learning
              </span>
              <div className="h-px flex-1 bg-gradient-to-l from-border to-transparent" />
            </motion.div>
            {/* Certifications Horizontal Scroll - Double Row */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={isCertInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.7, delay: 0.3 }}
            >
              <div className="overflow-hidden" ref={emblaRef}>
                <div className="flex -ml-3 cursor-grab active:cursor-grabbing">
                  {certifications.map((cert, index) => (
                    <motion.div
                      key={index}
                      className="flex-shrink-0 w-[280px] md:w-[320px] pl-3"
                      initial={{ opacity: 0, x: 60 }}
                      animate={isCertInView ? { opacity: 1, x: 0 } : {}}
                      transition={{ 
                        duration: 0.6, 
                        delay: 0.4 + index * 0.08,
                        ease: [0.22, 1, 0.36, 1]
                      }}
                    >
                      <div className="group h-full">
                        <div className="flex flex-col p-4 md:p-5 h-[140px]
                                      border border-border/40 rounded-lg
                                      transition-all duration-300
                                      hover:border-border/60">
                          
                          {/* Content */}
                          <div className="flex-1">
                            <h3 className="text-base md:text-[14px] font-xs leading-snug 
                                         text-foreground/90 line-clamp-2 mb-2">
                              {cert.title}
                            </h3>
                            
                            <p className="text-sm text-muted-foreground/60">
                              {cert.issuer} • {cert.date}
                            </p>
                          </div>

                          {/* Link */}
                          {cert.credentialUrl && (
                            <div className="flex justify-center w-full pt-3 border-t border-border/20">
                              <a
                                href={cert.credentialUrl}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="inline-flex items-center gap-1.5 text-xs font-medium
                                         text-accent/70 hover:text-accent 
                                         transition-all duration-300
                                         hover:gap-2"
                                onClick={(e) => e.stopPropagation()}
                              >
                                <span className="relative">
                                  View Credential
                                  <span className="absolute -bottom-0.5 left-0 w-0 h-px bg-accent 
                                               group-hover:w-full transition-all duration-300" />
                                </span>
                                <ExternalLink className="w-3 h-3 transition-transform duration-300 group-hover:translate-x-0.5" />
                              </a>
                            </div>
                          )}
                        </div>
                      </div>
                    </motion.div>
                  ))}
                  {/* End spacer */}
                  <div className="flex-shrink-0 w-3" />
                </div>
              </div>

              {/* Navigation dots - mobile only */}
              <motion.div
                className="flex md:hidden justify-center items-center gap-3 mt-6"
                initial={{ opacity: 0 }}
                animate={isCertInView ? { opacity: 1 } : {}}
                transition={{ duration: 0.5, delay: 0.6 }}
              >
                <button
                  onClick={scrollPrev}
                  className="p-1.5 text-foreground/50 active:text-foreground transition-colors"
                  aria-label="Previous"
                >
                  <ChevronLeft className="w-4 h-4" />
                </button>
                <div className="flex gap-1">
                  {certifications.map((_, index) => (
                    <button
                      key={index}
                      onClick={() => emblaApi?.scrollTo(index)}
                      className={`w-1 h-1 rounded-full transition-all duration-300 ${
                        currentCertIndex === index
                          ? "bg-accent w-3"
                          : "bg-foreground/20"
                      }`}
                      aria-label={`Go to certification ${index + 1}`}
                    />
                  ))}
                </div>
                <button
                  onClick={scrollNext}
                  className="p-1.5 text-foreground/50 active:text-foreground transition-colors"
                  aria-label="Next"
                >
                  <ChevronRight className="w-4 h-4" />
                </button>
              </motion.div>
            </motion.div>

          </div>

        </div>
      </section>
  );
};

export default Experience;