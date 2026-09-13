import { createFileRoute } from "@tanstack/react-router";
import { education, certifications } from "@/data/panji";
import { PaperCard } from "@/components/site/Paper";
import { BackButton } from "@/components/site/BackButton";
import { ArrowUpRight } from "@phosphor-icons/react";

export const Route = createFileRoute("/education")({
  head: () => ({
    meta: [
      { title: "Education & Certifications | Panji Anugrah" },
    ],
  }),
  component: EducationPage,
});

function EducationPage() {
  return (
    <div className="mx-auto max-w-4xl px-5 md:px-10 py-8 md:py-12 pb-24 relative">
      <BackButton />

      <header className="mb-8">
        <h1 className="text-3xl md:text-4xl font-semibold tracking-tight mb-2 text-ink">
          Education & <span className="ink-underline">Certifications</span>
        </h1>
        <p className="text-[15px] text-graphite max-w-xl leading-relaxed">
          Academic degree, undergraduate thesis, and technical certifications.
        </p>
      </header>

      <div className="space-y-10">
        {/* Education Degree */}
        <PaperCard className="p-6 md:p-7">
          <div className="flex flex-col sm:flex-row sm:items-baseline sm:justify-between gap-2 mb-2">
            <div>
              <h2 className="text-xl font-semibold text-ink">{education.degree}</h2>
              <p className="text-sm text-graphite mt-0.5">{education.institution}</p>
            </div>
            <span className="mono text-xs text-graphite bg-secondary px-2.5 py-1 rounded-md shrink-0 w-fit">
              {education.period}
            </span>
          </div>

          <div className="mt-3 flex items-center gap-2">
            <span className="mono text-xs text-ink/90 font-medium bg-butter/40 border border-border/50 px-2.5 py-0.5 rounded-md">
              GPA {education.gpa}
            </span>
          </div>

          <div className="mt-6 pt-5 border-t border-border/50">
            <p className="mono text-[10px] text-graphite mb-1.5 uppercase tracking-wider">
              Undergraduate Thesis
            </p>
            <p className="text-[14px] font-medium leading-relaxed text-ink/90 italic">
              "{education.thesis}"
            </p>
          </div>
        </PaperCard>

        {/* Certifications Grid */}
        <div>
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-lg font-semibold text-ink">Certifications</h2>
            <span className="mono text-xs text-graphite">{certifications.length} verified</span>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {certifications.map((c) => (
              <a
                key={c.name}
                href={c.url}
                target="_blank"
                rel="noreferrer"
                className="group p-4 rounded-xl border border-border/80 bg-card hover:border-ink/25 transition-colors flex items-start justify-between gap-3"
              >
                <div>
                  <h3 className="text-[13.5px] font-medium text-ink group-hover:underline underline-offset-4 decoration-border leading-snug">
                    {c.name}
                  </h3>
                  <p className="mono text-[11px] text-graphite mt-1">
                    {c.issuer}
                  </p>
                </div>
                <ArrowUpRight
                  size={15}
                  weight="light"
                  className="text-graphite/40 group-hover:text-ink transition-colors shrink-0 mt-0.5"
                />
              </a>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
