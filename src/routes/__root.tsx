import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import {
  Outlet,
  Link,
  createRootRouteWithContext,
  useRouter,
  HeadContent,
  Scripts,
} from "@tanstack/react-router";
import { useEffect, useLayoutEffect, type ReactNode } from "react";

import "@fontsource/plus-jakarta-sans/400.css";
import "@fontsource/plus-jakarta-sans/500.css";
import "@fontsource/plus-jakarta-sans/600.css";
import "@fontsource/plus-jakarta-sans/700.css";
import "@fontsource/jetbrains-mono/400.css";
import "@fontsource/jetbrains-mono/500.css";
import "@fontsource/jetbrains-mono/600.css";
import "@fontsource/caveat/500.css";
import "@fontsource/caveat/600.css";

import appCss from "../styles.css?url";
function NotFoundComponent() {
  return (
    <div className="mx-auto flex min-h-[70vh] max-w-xl flex-col items-center justify-center px-6 text-center">
      <span className="mono text-xs text-graphite">404 · page-not-found.md</span>
      <h1 className="mt-3 text-5xl font-semibold tracking-tight">
        This page wandered off.
      </h1>
      <p className="mt-3 text-sm text-graphite">
        Maybe it's a typo, maybe I'm still writing it.
      </p>
      <Link
        to="/"
        className="mt-6 inline-flex items-center rounded-md border border-border bg-card px-4 py-2 text-sm hover:bg-secondary"
      >
        ← Back to the notebook
      </Link>
    </div>
  );
}

function ErrorComponent({ error, reset }: { error: Error; reset: () => void }) {
  console.error(error);
  const router = useRouter();

  return (
    <div className="mx-auto flex min-h-[70vh] max-w-xl flex-col items-center justify-center px-6 text-center">
      <span className="mono text-xs text-graphite">error · try-again.log</span>
      <h1 className="mt-3 text-3xl font-semibold tracking-tight">
        Something didn't load.
      </h1>
      <p className="mt-3 text-sm text-graphite">
        Give it another shot or head back home.
      </p>
      <div className="mt-6 flex gap-2">
        <button
          onClick={() => {
            router.invalidate();
            reset();
          }}
          className="rounded-md bg-ink px-4 py-2 text-sm text-primary-foreground"
        >
          Try again
        </button>
        <a href="/" className="rounded-md border border-border bg-card px-4 py-2 text-sm">
          Go home
        </a>
      </div>
    </div>
  );
}

export const Route = createRootRouteWithContext<{ queryClient: QueryClient }>()({
  head: () => ({
    meta: [
      { charSet: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      {
        title: "Panji Anugrah — Personal Website",
      },
      {
        name: "description",
        content:
          "Built things during university. Now I test them. Computer Science graduate working in software quality.",
      },
      { name: "author", content: "Tubagus Panji Anugrah" },
      {
        name: "keywords",
        content: "Panji Anugrah, Tubagus Panji Anugrah, QA Engineer, Quality Assurance, Software Testing, QA Automation, Playwright, Selenium, Mobile Development, Kotlin, Flutter, Android, Bogor, Indonesia"
      },
      { property: "og:title", content: "Panji Anugrah — Personal Website" },
      {
        property: "og:description",
        content:
          "Built things during university. Now I test them. Computer Science graduate working in software quality.",
      },
      { property: "og:type", content: "website" },
      { property: "og:image", content: "https://panjianugrah.me/profile.webp" },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: "Panji Anugrah — Personal Website" },
      {
        name: "twitter:description",
        content:
          "Built things during university. Now I test them. Computer Science graduate working in software quality.",
      },
      { name: "twitter:image", content: "https://panjianugrah.me/profile.webp" },
    ],
    links: [
      { rel: "canonical", href: "https://panjianugrah.me" },
      { rel: "stylesheet", href: appCss },
      { rel: "icon", href: "/icon.png", type: "image/png" },
    ],
  }),
  shellComponent: RootShell,
  component: RootComponent,
  notFoundComponent: NotFoundComponent,
  errorComponent: ErrorComponent,
});

function RootShell({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <head>
        <HeadContent />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Person",
              name: "Tubagus Panji Anugrah",
              alternateName: ["Panji Anugrah", "Tubagus Panji"],
              url: "https://panjianugrah.me",
              image: "https://panjianugrah.me/icon.png",
              jobTitle: "Computer Science Graduate | Software Engineer | AI/ML | QA Automation",
              worksFor: {
                "@type": "Organization",
                name: "Freelance / Open to Work"
              },
              alumniOf: {
                "@type": "CollegeOrUniversity",
                name: "Universitas Pakuan"
              },
              description: "Mobile Developer, QA Automation, and Data Scientist based in Indonesia.",
              sameAs: [
                "https://www.linkedin.com/in/panji-anugrah",
                "https://github.com/sslythrrr",
                "https://instagram.com/tubaguspn",
                "https://facebook.com/panji.anoegrah"
              ],
              knowsAbout: ["Mobile Development", "QA Automation", "Data Engineering", "Machine Learning", "Natural Language Processing", "Data Science"]
            })
          }}
        />
      </head>
      <body>
        {children}
        <Scripts />
      </body>
    </html>
  );
}


function RootComponent() {
  const { queryClient } = Route.useRouteContext();
  const routerState = useRouter();
  const pathname = routerState.state.location.pathname;

  useLayoutEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return (
    <QueryClientProvider client={queryClient}>
      <div className="relative min-h-[100dvh] w-full overflow-x-hidden bg-background text-foreground">
        <Outlet />
      </div>
    </QueryClientProvider>
  );
}
