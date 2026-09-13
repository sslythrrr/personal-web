import { createFileRoute } from "@tanstack/react-router";
import { useMemo, useState } from "react";
import { PaperCard } from "@/components/site/Paper";
import { projects } from "@/data/panji";
import { BackButton } from "@/components/site/BackButton";
import { MagnifyingGlass, ArrowSquareOut } from "@phosphor-icons/react";

export const Route = createFileRoute("/projects")({
  head: () => ({
    meta: [
      { title: "Projects | Panji Anugrah" },
      {
        name: "description",
        content:
          "Projects by Panji Anugrah — mobile apps, web systems, and data experiments built across university and personal tinkering.",
      },
    ],
  }),
  component: ProjectsPage,
});

function ProjectsPage() {
  const categories = useMemo(() => {
    const s = new Set<string>();
    projects.forEach((p) => p.category.forEach((c) => s.add(c)));
    return ["All", ...Array.from(s)];
  }, []);
  const [filter, setFilter] = useState("All");
  const [query, setQuery] = useState("");

  const filtered = projects.filter((p) => {
    const inCat = filter === "All" || p.category.includes(filter);
    const q = query.trim().toLowerCase();
    const inQ =
      !q ||
      p.title.toLowerCase().includes(q) ||
      p.description.toLowerCase().includes(q) ||
      p.tech.some((t) => t.toLowerCase().includes(q));
    return inCat && inQ;
  });

  return (
    <div className="mx-auto max-w-5xl px-5 md:px-10 py-8 md:py-12 pb-24 relative">
      <BackButton />

      <header className="mb-8">
        <h1 className="text-3xl md:text-4xl font-semibold tracking-tight mb-2 text-ink">
          Projects & <span className="ink-underline">Experiments</span>
        </h1>
        <p className="text-[15px] text-graphite max-w-xl leading-relaxed">
          Mobile apps, applied ML models, and small tools built during university and personal tinkering.
        </p>
      </header>

      {/* Controls */}
      <div className="mb-6 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
        <div className="flex flex-wrap gap-1.5">
          {categories.map((c) => (
            <button
              key={c}
              onClick={() => setFilter(c)}
              className={
                "rounded-md border px-3 py-1 text-xs mono transition-colors " +
                (filter === c
                  ? "bg-ink text-paper border-ink"
                  : "border-border/80 bg-card text-graphite hover:text-ink hover:border-ink/30")
              }
            >
              {c}
            </button>
          ))}
        </div>
        <div className="relative w-full sm:w-60">
          <input
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="search projects…"
            className="w-full rounded-lg border border-border/80 bg-card px-3 py-1.5 pl-8 text-xs mono text-ink placeholder:text-graphite/60 focus:outline-none focus:border-ink/50 transition-colors"
          />
          <span className="absolute left-2.5 top-1/2 -translate-y-1/2 text-graphite/60">
            <MagnifyingGlass size={14} weight="light" />
          </span>
        </div>
      </div>

      {/* Grid */}
      {filtered.length === 0 ? (
        <PaperCard className="text-center py-16">
          <p className="mono text-xs text-graphite">no matching projects found.</p>
        </PaperCard>
      ) : (
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {filtered.map((p) => (
            <div key={p.title} className="flex h-full">
              <PaperCard className="flex w-full flex-col p-5 hover:border-ink/30 transition-colors">
                <div className="flex items-start justify-between gap-2 mb-2">
                  <div className="flex flex-wrap gap-1">
                    {p.category.map((c) => (
                      <span
                        key={c}
                        className="mono text-[10px] text-graphite bg-secondary px-2 py-0.5 rounded"
                      >
                        {c}
                      </span>
                    ))}
                  </div>
                  {p.repo && (
                    <a
                      href={p.repo}
                      target="_blank"
                      rel="noreferrer"
                      className="flex items-center gap-1 mono text-[11px] text-graphite hover:text-ink transition-colors"
                      aria-label={`${p.title} repository`}
                    >
                      repo <ArrowSquareOut size={12} weight="light" />
                    </a>
                  )}
                </div>

                <h3 className="text-[15px] font-semibold text-ink tracking-tight mt-1">
                  {p.title}
                </h3>
                <p className="mono text-[10px] text-graphite/80 mt-0.5">{p.period}</p>

                <p className="mt-2.5 text-[13px] text-ink/80 leading-relaxed flex-1">
                  {p.description}
                </p>

                <div className="mt-4 pt-3 flex flex-wrap gap-1.5 border-t border-border/50">
                  {p.tech.map((t) => (
                    <span
                      key={t}
                      className="mono text-[10px] text-graphite/90 bg-secondary/60 px-1.5 py-0.5 rounded"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </PaperCard>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
