import { createRouter, useRouter, Link } from "@tanstack/react-router";
import { routeTree } from "./routeTree.gen";
import { Home, RefreshCw, Flame } from "lucide-react";

function DefaultErrorComponent({ error, reset }: { error: Error; reset: () => void }) {
  const router = useRouter();

  return (
    <div className="relative flex min-h-screen flex-col items-center justify-center overflow-hidden bg-background px-4">
      <div className="absolute inset-0 bg-mesh opacity-50" />
      <div className="absolute -top-40 left-1/2 h-[500px] w-[500px] -translate-x-1/2 rounded-full bg-destructive/20 blur-[120px] animate-pulse-glow" />
      <div className="absolute inset-0 grid-bg opacity-20" />

      <div className="relative z-10 max-w-2xl text-center">
        <div className="mb-6 inline-flex h-20 w-20 items-center justify-center rounded-2xl border border-destructive/40 bg-destructive/10">
          <Flame className="text-destructive animate-pulse" size={36} />
        </div>
        <h1
          className="font-display text-[8rem] font-bold leading-none md:text-[12rem]"
          style={{
            background: "linear-gradient(135deg, oklch(0.78 0.16 75), oklch(0.6 0.24 25))",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
            backgroundClip: "text",
          }}
        >
          500
        </h1>
        <h2 className="mt-2 font-display text-2xl font-semibold md:text-3xl">
          Internal Server Error — Even Laravel throws exceptions sometimes.
        </h2>
        <p className="mt-3 font-mono text-sm text-muted-foreground">
          I'm on it. Try refreshing or come back soon.
        </p>

        {/* Faux progress */}
        <div className="mx-auto mt-6 max-w-sm">
          <div className="mb-2 flex justify-between font-mono text-[10px] uppercase tracking-widest text-muted-foreground">
            <span>Fixing the bug</span>
            <span className="text-cyan">67%</span>
          </div>
          <div className="h-1.5 overflow-hidden rounded-full bg-border">
            <div
              className="h-full w-2/3 animate-pulse rounded-full"
              style={{
                background: "linear-gradient(90deg, oklch(0.78 0.16 75), oklch(0.6 0.24 25))",
              }}
            />
          </div>
        </div>

        {error?.message && (
          <pre className="mx-auto mt-6 max-h-32 max-w-md overflow-auto rounded-xl border border-destructive/30 bg-destructive/5 p-3 text-left font-mono text-[11px] text-destructive">
            {error.message}
          </pre>
        )}

        <div className="mt-8 flex flex-wrap justify-center gap-3">
          <button
            onClick={() => {
              router.invalidate();
              reset();
            }}
            className="btn-shine inline-flex items-center gap-2 rounded-full bg-aurora px-6 py-3 text-sm font-medium text-background transition-transform hover:scale-105"
          >
            <RefreshCw size={16} /> Try again
          </button>
          <Link
            to="/"
            className="inline-flex items-center gap-2 rounded-full border border-border bg-card/40 px-6 py-3 text-sm transition-colors hover:border-cyan hover:text-cyan"
          >
            <Home size={16} /> Go home
          </Link>
        </div>
      </div>
    </div>
  );
}

export const getRouter = () => {
  const router = createRouter({
    routeTree,
    context: {},
    scrollRestoration: true,
    defaultPreloadStaleTime: 0,
    defaultErrorComponent: DefaultErrorComponent,
  });

  return router;
};
