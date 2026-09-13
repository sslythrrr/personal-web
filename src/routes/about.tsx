import { createFileRoute } from "@tanstack/react-router";
import { PaperCard } from "@/components/site/Paper";
import { about } from "@/data/panji";
import { BackButton } from "@/components/site/BackButton";
import { EnvelopeSimple, GithubLogo, LinkedinLogo } from "@phosphor-icons/react";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About | Panji Anugrah" },
    ],
  }),
  component: AboutPage,
});

function AboutPage() {
  return (
    <div className="mx-auto max-w-4xl px-5 md:px-10 py-8 md:py-12 pb-24 relative">
      <BackButton />

      <div className="grid grid-cols-1 md:grid-cols-[1fr_280px] gap-8 items-start">
        <div className="space-y-6">
          <div>
            <h1 className="text-3xl md:text-4xl font-semibold tracking-tight">
              Hi, I'm <span className="ink-underline">Panji</span>.
            </h1>
            <div className="mt-6 space-y-4 text-[15px] text-graphite/90 leading-relaxed">
              {about.bio.map((paragraph, i) => (
                <p key={i}>{paragraph}</p>
              ))}
            </div>
          </div>

          <div>
            <h2 className="text-lg font-semibold mt-10 mb-3 text-ink">Core Philosophy</h2>
            <div className="grid gap-3">
              {about.philosophies.map((phil) => (
                <PaperCard key={phil.title} className="p-4 sm:p-5">
                  <h3 className="font-semibold text-sm text-ink">{phil.title}</h3>
                  <p className="text-sm text-graphite mt-1">{phil.description}</p>
                </PaperCard>
              ))}
            </div>
          </div>
        </div>

        <div className="md:sticky md:top-12 space-y-4">
          <div className="rounded-2xl border border-border bg-card p-2">
            <img
              src={about.avatarUrl}
              alt="Panji Anugrah"
              className="w-full h-auto aspect-square rounded-xl object-cover grayscale hover:grayscale-0 transition-all duration-500"
              loading="lazy"
            />
          </div>
          
          <PaperCard className="p-4 flex flex-col gap-2.5">
            <h3 className="mono text-xs text-graphite mb-1">connect</h3>
            <a href={`mailto:${about.email}`} className="flex items-center gap-2 text-xs mono text-ink hover:underline underline-offset-4 decoration-border w-fit">
              <EnvelopeSimple size={15} /> {about.email}
            </a>
            <a href={about.social.github} target="_blank" rel="noreferrer" className="flex items-center gap-2 text-xs mono text-ink hover:underline underline-offset-4 decoration-border w-fit">
              <GithubLogo size={15} /> GitHub
            </a>
            <a href={about.social.linkedin} target="_blank" rel="noreferrer" className="flex items-center gap-2 text-xs mono text-ink hover:underline underline-offset-4 decoration-border w-fit">
              <LinkedinLogo size={15} /> LinkedIn
            </a>
          </PaperCard>

          <PaperCard tint="mint" className="p-4">
            <div className="flex items-center gap-2 mb-1.5">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-ink opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-ink"></span>
              </span>
              <h3 className="mono text-[11px] text-graphite">status</h3>
            </div>
            <p className="text-xs font-medium text-ink">{about.status}</p>
          </PaperCard>
        </div>
      </div>
    </div>
  );
}
