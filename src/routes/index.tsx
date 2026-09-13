import { createFileRoute } from "@tanstack/react-router";

import { BentoGrid } from "@/components/site/BentoGrid";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Panji Anugrah — Personal Website" },
      {
        name: "description",
        content: "I bridge the gap between how systems are built and how people actually use them. Computer Science graduate focused on software quality and product workflows. Based in West Java, Indonesia.",
      },
    ],
  }),
  component: BentoGrid,
});
