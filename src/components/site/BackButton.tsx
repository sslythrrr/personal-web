import { Link } from "@tanstack/react-router";
import { ArrowLeft } from "@phosphor-icons/react";

export function BackButton() {
  return (
    <Link
      to="/"
      className="inline-flex items-center gap-2 text-xs mono text-graphite hover:text-ink transition-colors mb-6 group w-fit py-1 px-2 -ml-2 rounded-lg hover:bg-secondary/60"
      aria-label="Back to Home"
    >
      <ArrowLeft
        size={14}
        weight="bold"
        className="transition-transform duration-200 group-hover:-translate-x-1"
      />
      <span>back to index</span>
    </Link>
  );
}
