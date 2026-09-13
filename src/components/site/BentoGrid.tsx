import { Link } from "@tanstack/react-router";
import { PaperCard } from "@/components/site/Paper";
import { profile, experiences, projects, education } from "@/data/panji";
import {
  GithubLogo,
  LinkedinLogo,
  Envelope,
  ArrowSquareOut,
  ArrowRight,
  ArrowUpRight,
  FilePdf,
} from "@phosphor-icons/react";
import { motion, useReducedMotion } from "motion/react";

const tools = [
  { name: "Playwright", slug: "/playwright.svg" },
  { name: "k6", slug: "k6" },
  { name: "Postman", slug: "postman" },
  { name: "Flutter", slug: "flutter" },
  { name: "Kotlin", slug: "kotlin" },
  { name: "Python", slug: "python" },
  { name: "Notion", slug: "notion" },
  { name: "Android", slug: "android" },
];

export function BentoGrid() {
  const reduce = useReducedMotion();
  const topExperiences = experiences.slice(0, 3);
  const topProjects = projects.slice(0, 3);

  return (
    <div className="flex min-h-[100dvh] w-full flex-col items-center justify-center p-4 sm:p-6 md:px-10 md:py-6">
      <div className="mx-auto grid w-full max-w-[1152px] gap-3 grid-cols-1 md:grid-cols-3 md:grid-rows-[auto_auto_auto]">
        
        {/* TILE 1: BIO */}
        <div className="md:col-span-1 md:row-span-2 flex h-full">
          <PaperCard className="relative overflow-hidden w-full h-full flex flex-col justify-end p-6 md:p-7">
            <div className="relative z-10 flex flex-col gap-4">
              <div className="flex items-center gap-2">
                <span className="relative flex h-2.5 w-2.5">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-500"></span>
                </span>
                <span className="text-xs font-medium text-emerald-600/80 uppercase tracking-wide">Open to work</span>
              </div>
              
              <div>
                <h1 className="text-4xl md:text-5xl font-semibold tracking-tight text-ink mb-1">
                  Panji Anugrah
                </h1>
                <p className="text-sm text-graphite">QA Engineer · Mobile Dev</p>
              </div>

              <p className="text-[15px] text-ink/80 leading-relaxed mt-2">
                QA engineer specializing in manual and automation testing with Playwright. Built apps during university, now I help teams test and ship reliable software.
              </p>
              
              <div className="mt-2 inline-flex items-center gap-1.5 rounded-md border border-border/70 bg-secondary/50 px-2.5 py-1 text-xs mono text-graphite w-fit">
                <span className="h-1.5 w-1.5 rounded-full bg-graphite/40" />
                <span>Bogor, Indonesia</span>
              </div>
            </div>
          </PaperCard>
        </div>

        {/* TILE 2: Contact */}
        <div className="md:col-span-1 md:row-span-1 flex h-full">
          <PaperCard className="h-full w-full flex flex-col">
            <h2 className="text-xl font-semibold mt-1 mb-3">Let's connect</h2>
            <div className="flex flex-col gap-1 mt-auto">
              <a href={profile.socials.github} target="_blank" rel="noreferrer" className="flex items-center gap-2 rounded-lg px-2 py-1.5 -mx-2 transition-colors hover:bg-secondary/70 group">
                <GithubLogo className="text-graphite group-hover:text-ink" size={16} weight="light" />
                <span className="text-sm font-medium">@sslythrrr</span>
                <ArrowSquareOut size={12} className="ml-auto text-graphite/50 group-hover:text-graphite" weight="light" />
              </a>
              <a href={profile.socials.linkedin} target="_blank" rel="noreferrer" className="flex items-center gap-2 rounded-lg px-2 py-1.5 -mx-2 transition-colors hover:bg-secondary/70 group">
                <LinkedinLogo className="text-graphite group-hover:text-ink" size={16} weight="light" />
                <span className="text-sm font-medium">/panji-anugrah</span>
                <ArrowSquareOut size={12} className="ml-auto text-graphite/50 group-hover:text-graphite" weight="light" />
              </a>
              <a href={`mailto:${profile.email}`} className="flex items-center gap-2 rounded-lg px-2 py-1.5 -mx-2 transition-colors hover:bg-secondary/70 group">
                <Envelope className="text-graphite group-hover:text-ink" size={16} weight="light" />
                <span className="text-sm font-medium">{profile.email}</span>
                <ArrowSquareOut size={12} className="ml-auto text-graphite/50 group-hover:text-graphite" weight="light" />
              </a>
            </div>
          </PaperCard>
        </div>

        {/* TILE 3: Work Exp */}
        <div className="md:col-span-1 md:row-span-2 flex h-full">
          <PaperCard className="relative h-full w-full flex flex-col overflow-hidden">
            <div className="absolute inset-0 grid-lines opacity-40 pointer-events-none" />
            <div className="relative z-10 flex flex-col h-full">
              <h2 className="text-2xl font-semibold tracking-tight mb-4">Work</h2>
              <div className="space-y-3.5 flex-1 divide-y divide-border/40">
                {topExperiences.map((exp, i) => (
                  <div key={i} className={i > 0 ? "pt-3.5" : ""}>
                    <div className="flex items-baseline justify-between gap-2">
                      <h3 className="text-[13px] font-semibold text-ink leading-snug">{exp.role}</h3>
                      <span className="mono text-[10px] text-graphite/80 shrink-0">{exp.period.split("—")[0].trim()}</span>
                    </div>
                    <p className="mono text-[10px] text-graphite mt-0.5">{exp.company}</p>
                    <p className="text-[12.5px] text-graphite leading-relaxed mt-1">
                      {i === 0 && "QA across 6 client projects. Playwright WhatsApp automation, load testing with k6 & JMeter, AI Trainer."}
                      {i === 1 && "Assisting Flutter mobile programming practicum courses for two vocational classes."}
                      {i === 2 && "Built Monfori Lens: batch image processing for 200-800 images & white-box testing."}
                    </p>
                  </div>
                ))}
              </div>
              <Link to="/career" className="mt-4 flex items-center gap-1 text-xs mono text-graphite hover:text-ink transition-colors">
                <span>view full timeline</span>
                <ArrowRight size={12} weight="light" />
              </Link>
            </div>
          </PaperCard>
        </div>

        {/* TILE 4: Resume */}
        <a
          href="/resume-panji-anugrah.pdf"
          target="_blank"
          rel="noreferrer"
          className="md:col-span-1 md:row-span-1 block h-full outline-none group"
        >
          <PaperCard
            tint="butter"
            className="h-full w-full flex flex-col items-center justify-center text-center gap-2.5 group-hover:border-amber-300/80 transition-colors"
          >
            <FilePdf size={30} weight="light" className="text-ink/80 group-hover:text-ink transition-colors" />
            <div>
              <p className="text-base font-semibold text-ink">Download Resume</p>
              <p className="mono text-[11px] text-graphite mt-0.5">PDF · Updated Mar 2026</p>
            </div>
          </PaperCard>
        </a>

        {/* TILE 5: Toolbox */}
        <div className="md:col-span-1 flex h-full">
          <PaperCard className="h-full w-full flex flex-col">
            <h2 className="text-lg font-semibold mb-2">Stack</h2>
            <div className="grid grid-cols-4 gap-y-3 gap-x-2">
              {tools.map(t => (
                <div key={t.name} className="flex flex-col items-center gap-1.5">
                  <img
                    src={t.slug.startsWith("/") ? t.slug : `https://cdn.simpleicons.org/${t.slug}/525252`}
                    alt={t.name}
                    className="h-5 w-5 opacity-75"
                    onError={e => { (e.target as HTMLImageElement).style.opacity = "0"; }}
                  />
                  <span className="mono text-[10px] text-graphite font-medium text-center leading-tight">{t.name}</span>
                </div>
              ))}
            </div>
            <Link to="/toolbox" className="mt-auto pt-4 inline-flex items-center gap-1 text-[11px] mono text-graphite hover:text-ink transition-colors w-fit">
              <span>all tools</span> <ArrowRight size={11} weight="light" />
            </Link>
          </PaperCard>
        </div>

        {/* TILE 6: Projects */}
        <div className="md:col-span-1 flex h-full">
          <PaperCard className="h-full w-full flex flex-col">
            <h2 className="text-lg font-semibold mb-2">Projects</h2>
            <div className="flex flex-col gap-2.5 flex-1 justify-center">
              {topProjects.map((proj, i) => (
                <a key={i} href={proj.repo} target="_blank" rel="noreferrer" className="group flex flex-col gap-0.5">
                  <div className="flex items-center gap-2">
                    <h3 className="text-[13px] font-medium group-hover:text-ink transition-colors line-clamp-1">{proj.title}</h3>
                    <ArrowSquareOut size={12} weight="light" className="text-graphite/40 group-hover:text-graphite transition-colors shrink-0" />
                  </div>
                  <p className="mono text-[10px] text-graphite truncate">{proj.category.join(", ")}</p>
                </a>
              ))}
            </div>
            <Link to="/projects" className="mt-auto pt-3 inline-flex items-center gap-1 text-[11px] mono text-graphite hover:text-ink transition-colors w-fit">
              <span>all projects</span> <ArrowRight size={11} weight="light" />
            </Link>
          </PaperCard>
        </div>

        {/* TILE 7: Education */}
        <Link to="/education" className="md:col-span-1 flex h-full outline-none group">
          <motion.div
            whileHover={reduce ? {} : { scale: 1.02, y: -3 }}
            whileTap={reduce ? {} : { scale: 0.98 }}
            transition={{
              scale: { type: "spring", stiffness: 380, damping: 28 },
              y: { type: "spring", stiffness: 380, damping: 28 }
            }}
            className="w-full h-full"
          >
            <PaperCard className="h-full w-full flex flex-col justify-center">
              <div className="flex items-baseline justify-between gap-1">
                <h2 className="text-[15px] font-semibold tracking-tight">{education.degree}</h2>
                <span className="mono text-[10px] text-graphite font-medium">Cum Laude</span>
              </div>
              <p className="text-sm text-graphite mt-0.5">{education.institution}</p>
              <p className="mono text-[11px] text-graphite mt-2 border-l border-border/60 pl-2">
                Sep 2021 – Jul 2025 · GPA 3.89
              </p>
              <p className="text-[12px] text-graphite/80 mt-3 italic leading-relaxed flex-1">
                "{education.thesis}"
              </p>
              <div className="mt-4 pt-3 flex items-center gap-1 text-[11px] mono text-graphite group-hover:text-ink transition-colors w-fit border-t border-border/40">
                <span>view credentials</span> <ArrowRight size={11} weight="light" />
              </div>
            </PaperCard>
          </motion.div>
        </Link>

      </div>
    </div>
  );
}
