import { useState } from "react";
import { motion } from "framer-motion";
import { ExternalLink, Github, ArrowUpRight } from "lucide-react";
import { SectionLabel } from "./About";

export type Project = {
  id: string;
  title: string;
  year: string;
  category: ("Laravel" | "Full-Stack" | "API")[];
  desc: string;
  features: string[];
  stack: string[];
  featured?: boolean;
  accent: "violet" | "cyan" | "gold";
};

export const projects: Project[] = [
  {
    id: "ecommerce",
    title: "E-Commerce Platform",
    year: "2024–Now",
    category: ["Laravel", "Full-Stack"],
    desc: "Enterprise-grade multi-language e-commerce with reactive UI, OTP auth, RBAC, Redis caching and full RTL support.",
    features: [
      "Repository-Service architecture",
      "OTP authentication & RBAC",
      "EN/AR with full RTL",
      "Redis caching + server-side DataTables",
    ],
    stack: ["Laravel 12", "PHP 8.2", "Livewire 3.7", "Tailwind 4", "Alpine.js", "MySQL", "Redis"],
    featured: true,
    accent: "violet",
  },
  {
    id: "pos",
    title: "Laravel POS System",
    year: "2024",
    category: ["Laravel", "Full-Stack"],
    desc: "Real-time point-of-sale with inventory sync, 2FA, PDF receipts and live sales analytics.",
    features: ["Real-time inventory sync", "2FA via Fortify", "PDF receipt generation", "Sales analytics dashboard"],
    stack: ["Laravel 12", "Filament 4", "Livewire 3", "Tailwind 4", "Fortify", "Vite"],
    accent: "cyan",
  },
  {
    id: "blog",
    title: "Laravel Blog System",
    year: "2023",
    category: ["Laravel", "Full-Stack"],
    desc: "SEO-optimized blog with real-time notifications via Pusher, Redis caching and clean RBAC.",
    features: ["Real-time notifications (Pusher)", "Redis caching", "SEO optimized", "Role-based access"],
    stack: ["Laravel", "MySQL", "Redis", "Bootstrap", "AJAX", "Pusher"],
    accent: "gold",
  },
  {
    id: "doctor",
    title: "Doctor Booking System",
    year: "2023",
    category: ["Laravel", "API"],
    desc: "Appointment booking with separate doctor/patient portals, Stripe payments and advanced search.",
    features: ["Doctor & patient portals", "Stripe payments", "Search by specialty", "Schedule management"],
    stack: ["Laravel", "MySQL", "Stripe API", "Bootstrap"],
    accent: "violet",
  },
];

const filters = ["All", "Laravel", "Full-Stack", "API"] as const;

export function Projects() {
  const [filter, setFilter] = useState<(typeof filters)[number]>("All");
  const [flipped, setFlipped] = useState<string | null>(null);

  const visible = projects.filter((p) => filter === "All" || p.category.includes(filter as Project["category"][number]));

  return (
    <section id="projects" className="relative scroll-mt-24 py-32">
      <div className="absolute inset-0 bg-mesh opacity-30" />
      <div className="relative mx-auto max-w-7xl px-6">
        <SectionLabel>03 / Selected Work</SectionLabel>
        <div className="mb-12 flex flex-wrap items-end justify-between gap-6">
          <h2 className="max-w-2xl font-display text-4xl font-bold md:text-6xl">
            Projects that <span className="text-gradient">ship</span> &amp; <span className="text-gradient-gold">scale</span>.
          </h2>

          <div className="flex flex-wrap gap-2">
            {filters.map((f) => (
              <button
                key={f}
                onClick={() => setFilter(f)}
                className={`rounded-full border px-4 py-1.5 text-sm transition-all ${
                  filter === f
                    ? "border-cyan bg-cyan/10 text-cyan"
                    : "border-border text-muted-foreground hover:border-cyan/50 hover:text-foreground"
                }`}
              >
                {f}
              </button>
            ))}
          </div>
        </div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3 lg:auto-rows-[320px]">
          {visible.map((p, i) => (
            <ProjectCard
              key={p.id}
              p={p}
              i={i}
              flipped={flipped === p.id}
              onFlip={() => setFlipped(flipped === p.id ? null : p.id)}
            />
          ))}
        </div>

        <div className="mt-12 flex justify-center">
          <a
            href="https://github.com"
            target="_blank"
            rel="noreferrer"
            className="group inline-flex items-center gap-2 rounded-full border border-border bg-card/40 px-6 py-3 text-sm font-medium transition-all hover:border-cyan hover:text-cyan"
          >
            View all projects on GitHub
            <ArrowUpRight size={16} className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </a>
        </div>
      </div>
    </section>
  );
}

function ProjectCard({ p, i, flipped, onFlip }: { p: Project; i: number; flipped: boolean; onFlip: () => void }) {
  const accentMap = {
    violet: { bg: "from-violet/30 to-violet/5", text: "text-violet", border: "border-violet/40", glow: "oklch(0.58 0.25 295 / 50%)" },
    cyan: { bg: "from-cyan/30 to-cyan/5", text: "text-cyan", border: "border-cyan/40", glow: "oklch(0.85 0.18 200 / 50%)" },
    gold: { bg: "from-gold/30 to-gold/5", text: "text-gold", border: "border-gold/40", glow: "oklch(0.78 0.16 75 / 50%)" },
  }[p.accent];

  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.5, delay: i * 0.08 }}
      className={`group relative ${p.featured ? "lg:col-span-2 lg:row-span-2" : ""}`}
      style={{ perspective: 1200 }}
    >
      <div
        className="relative h-full min-h-[320px] w-full transition-transform duration-700"
        style={{ transformStyle: "preserve-3d", transform: flipped ? "rotateY(180deg)" : "rotateY(0)" }}
      >
        {/* Front */}
        <div
          className={`absolute inset-0 overflow-hidden rounded-3xl border ${accentMap.border} bg-card/60`}
          style={{ backfaceVisibility: "hidden" }}
        >
          <div className={`absolute inset-0 bg-gradient-to-br ${accentMap.bg} opacity-60`} />
          <div className="absolute inset-0 grid-bg opacity-40" />
          <div
            className="absolute -right-20 -top-20 h-60 w-60 rounded-full blur-3xl"
            style={{ background: accentMap.glow }}
          />

          <div className="relative flex h-full flex-col justify-between p-7">
            <div>
              <div className="mb-4 flex items-center justify-between">
                <span className={`font-mono text-xs ${accentMap.text}`}>{p.year}</span>
                {p.featured && (
                  <span className="rounded-full bg-gold/20 px-2.5 py-0.5 font-mono text-[10px] uppercase tracking-wider text-gold">
                    Featured
                  </span>
                )}
              </div>
              <h3 className={`mb-3 font-display font-bold leading-tight ${p.featured ? "text-4xl md:text-5xl" : "text-2xl"}`}>
                {p.title}
              </h3>
              <p className={`text-muted-foreground ${p.featured ? "max-w-xl text-base" : "text-sm"}`}>
                {p.desc}
              </p>
              <div className="mt-4 flex flex-wrap gap-1.5">
                {p.stack.slice(0, p.featured ? 7 : 4).map((s) => (
                  <span key={s} className="rounded-full border border-border bg-background/60 px-2.5 py-0.5 font-mono text-[10px] text-muted-foreground">
                    {s}
                  </span>
                ))}
                {p.stack.length > (p.featured ? 7 : 4) && (
                  <span className="px-2 py-0.5 font-mono text-[10px] text-cyan">
                    +{p.stack.length - (p.featured ? 7 : 4)}
                  </span>
                )}
              </div>
            </div>

            <div className="mt-6 flex items-center gap-3">
              <a href="https://github.com" target="_blank" rel="noreferrer" className="inline-flex items-center gap-1.5 rounded-full border border-border px-4 py-2 text-xs transition-colors hover:border-cyan hover:text-cyan">
                <Github size={12} /> Code
              </a>
              <button
                onClick={onFlip}
                className="ml-auto rounded-full border border-border px-3 py-2 font-mono text-[10px] uppercase tracking-wider text-muted-foreground transition-colors hover:border-cyan hover:text-cyan"
              >
                Details →
              </button>
            </div>
          </div>
        </div>

        {/* Back */}
        <div
          className="absolute inset-0 overflow-hidden rounded-3xl border border-cyan/40 bg-card/90 p-7"
          style={{ backfaceVisibility: "hidden", transform: "rotateY(180deg)" }}
        >
          <div className="absolute inset-0 bg-mesh opacity-50" />
          <div className="relative flex h-full flex-col">
            <h4 className="mb-4 font-display text-lg font-semibold">{p.title} — Highlights</h4>
            <ul className="mb-4 space-y-2 text-sm">
              {p.features.map((f) => (
                <li key={f} className="flex items-start gap-2 text-muted-foreground">
                  <span className="mt-1.5 h-1 w-1 flex-shrink-0 rounded-full bg-cyan" />
                  <span>{f}</span>
                </li>
              ))}
            </ul>
            <div className="mt-auto">
              <p className="mb-2 font-mono text-[10px] uppercase tracking-wider text-cyan">Full stack</p>
              <div className="flex flex-wrap gap-1.5">
                {p.stack.map((s) => (
                  <span key={s} className="rounded-full bg-background/60 px-2 py-0.5 font-mono text-[10px]">{s}</span>
                ))}
              </div>
              <button onClick={onFlip} className="mt-4 font-mono text-[10px] uppercase tracking-wider text-muted-foreground hover:text-cyan">
                ← Back
              </button>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
}
