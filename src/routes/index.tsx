import { createFileRoute } from "@tanstack/react-router";

import { BentoGrid } from "@/components/site/BentoGrid";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Panji Anugrah — Personal Website" },
      {
        name: "description",
        content: "Built things during university. Now I test them. Computer Science graduate working in software quality.",
      },
    ],
  }),
  component: BentoGrid,
});
