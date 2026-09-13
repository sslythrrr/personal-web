import { createFileRoute } from "@tanstack/react-router";
import { PaperCard } from "@/components/site/Paper";
import { experiences } from "@/data/panji";
import { BackButton } from "@/components/site/BackButton";

export const Route = createFileRoute("/career")({
  head: () => ({
    meta: [
      { title: "Work Experience | Panji Anugrah" },
    ],
  }),
  component: CareerPage,
});

function CareerPage() {
  return (
    <div className="mx-auto max-w-4xl px-5 md:px-10 py-8 md:py-12 pb-24 relative">
      <BackButton />

      <header className="mb-8">
        <h1 className="text-3xl md:text-4xl font-semibold tracking-tight mb-2 text-ink">
          Work <span className="ink-underline">History</span>
        </h1>
        <p className="text-[15px] text-graphite max-w-xl leading-relaxed">
          Roles, internships, and university projects where I built, tested, and shipped.
        </p>
      </header>

      <div className="space-y-4">
        {experiences.map((e) => (
          <PaperCard key={e.company + e.role} className="p-5 md:p-7">
            <div className="flex flex-col sm:flex-row sm:items-baseline sm:justify-between gap-2 mb-2">
              <div>
                <h2 className="text-lg md:text-xl font-semibold text-ink">{e.role}</h2>
                <p className="text-sm text-graphite mt-0.5">
                  <span className="font-medium text-ink/90">{e.company}</span>
                  <span className="mx-2 text-border">·</span>
                  <span className="mono text-xs">{e.location}</span>
                </p>
              </div>
              <span className="mono text-xs text-graphite bg-secondary px-2.5 py-1 rounded-md shrink-0 w-fit">
                {e.period}
              </span>
            </div>

            <p className="text-[14.5px] text-ink/80 leading-relaxed mt-4">
              {e.responsibilities}
            </p>

            <div className="mt-5 pt-4 border-t border-border/50 flex flex-wrap gap-1.5">
              {e.skills.map((s) => (
                <span
                  key={s}
                  className="mono text-[11px] text-graphite bg-secondary/70 border border-border/40 px-2 py-0.5 rounded-md"
                >
                  {s}
                </span>
              ))}
            </div>
          </PaperCard>
        ))}
      </div>
    </div>
  );
}
