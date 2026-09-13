import { createFileRoute } from "@tanstack/react-router";
import { skillGroups as toolbox } from "@/data/panji";
import { PaperCard } from "@/components/site/Paper";
import { BackButton } from "@/components/site/BackButton";

export const Route = createFileRoute("/toolbox")({
  head: () => ({
    meta: [
      { title: "Toolbox | Panji Anugrah" },
    ],
  }),
  component: ToolboxPage,
});

const getSlug = (name: string) => {
  const map: Record<string, string> = {
    "katalon": "/katalon.svg",
    "katalon studio": "/katalon.svg",
    "playwright": "/playwright.svg",
    "selenium": "selenium",
    "apache jmeter": "apachejmeter",
    "k6": "k6",
    "postman": "postman",
    "notion": "notion",
    "google sheets": "googlesheets",
    "google spreadsheet": "googlesheets",
    "javascript": "javascript",
    "typescript": "typescript",
    "kotlin": "kotlin",
    "flutter": "flutter",
    "dart": "dart",
    "jetpack compose": "android", // proxy
    "android": "android",
    "node.js": "nodedotjs",
    "express": "express",
    "flask": "flask",
    "python": "python",
    "pandas": "pandas",
    "numpy": "numpy",
    "tensorflow": "tensorflow",
    "tflite": "tensorflow", // proxy
    "mysql": "mysql",
    "android studio": "androidstudio",
    "vscode": "visualstudiocode",
    "figma": "figma",
    "git": "git",
    "github": "github",
    "powerbi": "powerbi",
    "looker": "looker",
  };
  return map[name.toLowerCase()] || "";
};

function ToolboxPage() {
  return (
    <div className="mx-auto max-w-4xl px-5 md:px-10 py-8 md:py-12 pb-24 relative">
      <BackButton />

      <header className="mb-8">
        <h1 className="text-3xl md:text-4xl font-semibold tracking-tight mb-2 text-ink">
          Tools & <span className="ink-underline">Technologies</span>
        </h1>
        <p className="text-[15px] text-graphite max-w-xl leading-relaxed">
          Tools, frameworks, and testing libraries I use across projects and daily workflows.
        </p>
      </header>

      <div className="space-y-4">
        {toolbox.map((section) => (
          <PaperCard key={section.label} className="p-5 md:p-6">
            <h2 className="mono text-[11px] font-semibold text-graphite uppercase tracking-wider mb-3">
              {section.label}
            </h2>
            <div className="flex flex-wrap gap-2">
              {section.items.map((item) => {
                const slug = getSlug(item);
                return (
                  <div
                    key={item}
                    className="inline-flex items-center gap-2 rounded-lg border border-border/70 bg-secondary/40 px-3 py-1.5 hover:border-ink/20 transition-colors"
                  >
                    {slug && (
                      <img
                        src={slug.startsWith("/") ? slug : `https://cdn.simpleicons.org/${slug}/525252`}
                        alt={item}
                        className="w-4 h-4 opacity-75 shrink-0"
                        onError={(e) => {
                          (e.target as HTMLImageElement).style.display = "none";
                        }}
                      />
                    )}
                    <span className="mono text-xs font-medium text-ink">
                      {item}
                    </span>
                  </div>
                );
              })}
            </div>
          </PaperCard>
        ))}
      </div>
    </div>
  );
}
