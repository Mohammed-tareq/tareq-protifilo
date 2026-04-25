import { Outlet, Link, createRootRoute, HeadContent, Scripts } from "@tanstack/react-router";
import { Toaster } from "sonner";
import { SpeedInsights } from "@vercel/speed-insights/react";

import { ScrollProgress } from "@/components/ScrollProgress";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { Preloader } from "@/components/Preloader";
import { Home, FolderKanban, Mail } from "lucide-react";

import appCss from "../styles.css?url";

function NotFoundComponent() {
  return (
    <div className="relative flex min-h-screen flex-col items-center justify-center overflow-hidden bg-background px-4">
      <div className="absolute inset-0 bg-mesh opacity-50" />
      <div className="absolute inset-0 grid-bg opacity-30" />

      {/* Matrix-ish falling chars */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden opacity-20">
        {Array.from({ length: 20 }).map((_, i) => (
          <div
            key={i}
            className="absolute top-0 font-mono text-xs text-cyan"
            style={{
              left: `${(i / 20) * 100}%`,
              animation: `scanline ${4 + (i % 5)}s linear ${-i * 0.3}s infinite`,
            }}
          >
            {Array.from({ length: 12 }).map((_, j) => (
              <div key={j}>
                {["{", "}", "<", ">", "$", "0", "1", "λ", "/", "*"][((i + j) * 7) % 10]}
              </div>
            ))}
          </div>
        ))}
      </div>

      <div className="relative z-10 max-w-2xl text-center">
        <h1
          className="font-display text-[10rem] font-bold leading-none text-gradient md:text-[14rem]"
          style={{
            textShadow: "3px 0 0 oklch(0.6 0.24 25 / 60%), -3px 0 0 oklch(0.85 0.18 200 / 60%)",
          }}
        >
          <span className="inline-block animate-glitch">404</span>
        </h1>
        <h2 className="mt-4 font-display text-2xl font-semibold md:text-3xl">
          Oops! This page got lost in a merge conflict.
        </h2>
        <p className="mt-3 font-mono text-sm text-cyan">
          <span className="text-muted-foreground">$</span> git status:{" "}
          <span className="text-destructive">page not found</span>
        </p>

        <div className="mt-10 flex flex-wrap justify-center gap-3">
          <Link
            to="/"
            className="btn-shine inline-flex items-center gap-2 rounded-full bg-aurora px-6 py-3 text-sm font-medium text-background transition-transform hover:scale-105"
          >
            <Home size={16} /> Go Home
          </Link>
          <Link
            to="/projects"
            className="inline-flex items-center gap-2 rounded-full border border-border bg-card/40 px-6 py-3 text-sm transition-colors hover:border-cyan hover:text-cyan"
          >
            <FolderKanban size={16} /> View Projects
          </Link>
          <a
            href="/#contact"
            className="inline-flex items-center gap-2 rounded-full border border-border bg-card/40 px-6 py-3 text-sm transition-colors hover:border-cyan hover:text-cyan"
          >
            <Mail size={16} /> Contact Me
          </a>
        </div>
      </div>
    </div>
  );
}

export const Route = createRootRoute({
  head: () => ({
    meta: [
      { charSet: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { title: "Mohammed Tareq — Laravel Developer & Full-Stack Engineer" },
      {
        name: "description",
        content:
          "Cairo-based Laravel & Full-Stack engineer crafting enterprise PHP platforms — Livewire, Filament, Redis, MySQL.",
      },
      { name: "author", content: "Mohammed Tareq" },
      { property: "og:title", content: "Mohammed Tareq — Laravel Developer" },
      {
        property: "og:description",
        content:
          "Enterprise Laravel platforms: e-commerce, POS, real-time systems with clean architecture.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "stylesheet", href: appCss }],
  }),
  shellComponent: RootShell,
  component: RootComponent,
  notFoundComponent: NotFoundComponent,
});

function RootShell({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className="dark">
      <head>
        <HeadContent />
      </head>
      <body>
        {children}
        <Scripts />
        <SpeedInsights />
      </body>
    </html>
  );
}

function RootComponent() {
  return (
    <>
      <Preloader />

      <ScrollProgress />
      <Navbar />
      <main>
        <Outlet />
      </main>
      <Footer />
      <Toaster theme="dark" position="bottom-right" />
    </>
  );
}
