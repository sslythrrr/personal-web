import type { ReactNode } from "react";

export function PaperCard({
  children,
  className = "",
  tint,
  as: Tag = "div",
}: {
  children: ReactNode;
  className?: string;
  tint?: "mint" | "blush" | "sky" | "butter" | "highlight";
  as?: React.ElementType;
}) {
  const tintBg =
    tint === "mint"
      ? "bg-mint/40"
      : tint === "blush"
        ? "bg-blush/40"
        : tint === "sky"
          ? "bg-sky/40"
          : tint === "butter"
            ? "bg-butter/50"
            : tint === "highlight"
              ? "bg-highlight/60"
              : "bg-card";
  return (
    <Tag
      className={
        "relative rounded-2xl border border-border p-5 transition-[border-color] " +
        "shadow-[0_1px_1px_rgba(0,0,0,0.02)] " +
        tintBg +
        " " +
        className
      }
    >
      {children}
    </Tag>
  );
}

export function Label({ children }: { children: ReactNode }) {
  return (
    <span className="mono text-[10px] uppercase tracking-[0.14em] text-graphite">
      {children}
    </span>
  );
}

export function Pill({
  children,
  tone = "default",
}: {
  children: ReactNode;
  tone?: "default" | "ink" | "outline";
}) {
  const cls =
    tone === "ink"
      ? "bg-ink text-primary-foreground"
      : tone === "outline"
        ? "bg-transparent border border-border text-graphite"
        : "bg-secondary text-ink border border-border/70";
  return (
    <span className={"inline-flex items-center rounded-full px-2.5 py-0.5 text-[11px] mono " + cls}>
      {children}
    </span>
  );
}

export function Scribble({ className = "" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 200 14"
      className={"pointer-events-none " + className}
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
    >
      <path d="M2 8 C 30 2, 60 12, 90 6 S 150 12, 198 5" />
    </svg>
  );
}
