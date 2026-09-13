import { Link, useRouterState } from "@tanstack/react-router";

const nav = [
  { to: "/", label: "Home" },
  { to: "/about", label: "About" },
  { to: "/career", label: "Career" },
  { to: "/projects", label: "Projects" },
  { to: "/toolbox", label: "Toolbox" },
];

export function Header() {
  const pathname = useRouterState({ select: (s) => s.location.pathname });
  return (
    <header className="sticky top-0 z-40 border-b border-border/70 bg-background/80 backdrop-blur">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-5 py-3">
        <Link to="/" className="flex items-center gap-2 group">
          <span className="grid h-8 w-8 place-items-center rounded-md border border-border bg-card mono text-[13px] font-bold">
            pn
          </span>
          <span className="text-sm mono text-graphite group-hover:text-ink">
            panji.notebook
          </span>
        </Link>
        <nav className="flex items-center gap-1">
          {nav.map((n) => {
            const active = n.to === "/" ? pathname === "/" : pathname.startsWith(n.to);
            return (
              <Link
                key={n.to}
                to={n.to}
                className={
                  "relative rounded-md px-3 py-1.5 text-sm transition-colors " +
                  (active
                    ? "text-ink"
                    : "text-graphite hover:text-ink hover:bg-secondary")
                }
              >
                {active && (
                  <span className="absolute inset-x-2 bottom-0.5 h-[6px] -z-10 rounded-sm bg-highlight/80" />
                )}
                {n.label}
              </Link>
            );
          })}
        </nav>
      </div>
    </header>
  );
}

export function Footer() {
  return (
    <footer className="mx-auto max-w-6xl px-5 py-10 text-xs mono text-graphite">
      <div className="flex flex-wrap items-center justify-between gap-3 border-t border-border/70 pt-6">
        <p>© {new Date().getFullYear()} Tubagus Panji Anugrah. Handwritten in code.</p>
        <p>an.tubagusp@gmail.com</p>
      </div>
    </footer>
  );
}
