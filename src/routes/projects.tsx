import { createFileRoute } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { useState } from "react";
import { ExternalLink, Github, Calendar, Layers } from "lucide-react";
import { projects, type Project } from "@/components/sections/Projects";
import { ParticleField } from "@/components/ParticleField";

export const Route = createFileRoute("/projects")({
  head: () => ({
    meta: [
      { title: "Projects — Mohammed Tareq" },
      { name: "description", content: "A detailed look at production Laravel platforms, POS systems and full-stack builds by Mohammed Tareq." },
      { property: "og:title", content: "Projects — Mohammed Tareq" },
      { property: "og:description", content: "E-Commerce, POS, Blog and Doctor Booking — full architecture details." },
    ],
  }),
  component: ProjectsPage,
});

function ProjectsPage() {
  const [year, setYear] = useState<string>("All");
  const [tech, setTech] = useState<string>("All");

  const allYears = ["All", ...Array.from(new Set(projects.map((p) => p.year)))];
  const allTech = ["All", ...Array.from(new Set(projects.flatMap((p) => p.stack)))].slice(0, 12);

  const filtered = projects.filter(
    (p) => (year === "All" || p.year === year) && (tech === "All" || p.stack.includes(tech))
  );

  return (
    <div className="relative min-h-screen pt-32">
      {/* Hero banner */}
      <section className="relative overflow-hidden border-b border-border/40 py-20">
        <div className="absolute inset-0 bg-mesh opacity-60" />
        <ParticleField density={50} />
        <div className="relative mx-auto max-w-7xl px-6 text-center">
          <motion.p initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} className="mb-4 font-mono text-xs uppercase tracking-[0.3em] text-cyan">
            // Portfolio archive
          </motion.p>
          <motion.h1 initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }} className="font-display text-5xl font-bold leading-tight md:text-7xl">
            All <span className="text-gradient">Projects</span>
          </motion.h1>
          <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.3 }} className="mx-auto mt-4 max-w-xl text-muted-foreground">
            From enterprise e-commerce to real-time POS — architecture, decisions and stack details.
          </motion.p>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-16">
        {/* Filters */}
        <div className="mb-12 grid gap-6 rounded-2xl border border-border bg-card/40 p-6 md:grid-cols-2">
          <FilterRow label="Year" Icon={Calendar} options={allYears} value={year} onChange={setYear} />
          <FilterRow label="Tech" Icon={Layers} options={allTech} value={tech} onChange={setTech} />
        </div>

        {/* Detailed cards */}
        <div className="space-y-6">
          {filtered.map((p, i) => (
            <DetailCard key={p.id} p={p} i={i} />
          ))}
          {filtered.length === 0 && (
            <p className="py-20 text-center font-mono text-sm text-muted-foreground">
              No projects match your filters.
            </p>
          )}
        </div>
      </section>
    </div>
  );
}

function FilterRow({ label, Icon, options, value, onChange }: { label: string; Icon: React.ComponentType<{ size?: number }>; options: string[]; value: string; onChange: (v: string) => void }) {
  return (
    <div>
      <div className="mb-3 flex items-center gap-2 font-mono text-xs uppercase tracking-widest text-cyan">
        <Icon size={12} /> {label}
      </div>
      <div className="flex flex-wrap gap-2">
        {options.map((o) => (
          <button
            key={o}
            onClick={() => onChange(o)}
            className={`rounded-full border px-3 py-1 text-xs transition-all ${
              value === o ? "border-cyan bg-cyan/10 text-cyan" : "border-border text-muted-foreground hover:border-cyan/50"
            }`}
          >
            {o}
          </button>
        ))}
      </div>
    </div>
  );
}

function DetailCard({ p, i }: { p: Project; i: number }) {
  return (
    <motion.article
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.5, delay: i * 0.05 }}
      className="group relative overflow-hidden rounded-3xl border border-border bg-card/40 p-8 transition-all hover:border-cyan/50 md:p-10"
    >
      <div className="absolute -right-32 -top-32 h-80 w-80 rounded-full bg-violet/15 blur-[100px] transition-opacity group-hover:opacity-100" />
      <div className="relative grid gap-8 lg:grid-cols-[1fr_2fr]">
        <div>
          <p className="font-mono text-xs text-cyan">{p.year}</p>
          <h2 className="mt-2 font-display text-3xl font-bold leading-tight md:text-4xl">{p.title}</h2>
          <div className="mt-3 flex flex-wrap gap-1.5">
            {p.category.map((c) => (
              <span key={c} className="rounded-full border border-border bg-background/50 px-2 py-0.5 font-mono text-[10px] text-muted-foreground">{c}</span>
            ))}
          </div>
          <div className="mt-6 flex flex-wrap gap-3">
            <a href="https://github.com" target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 rounded-full border border-border px-4 py-2 text-xs hover:border-cyan hover:text-cyan">
              <Github size={12} /> Code
            </a>
          </div>
        </div>

        <div>
          <p className="leading-relaxed text-muted-foreground">{p.desc}</p>

          <h3 className="mt-6 mb-3 font-mono text-[10px] uppercase tracking-widest text-cyan">Key features</h3>
          <ul className="grid gap-2 sm:grid-cols-2">
            {p.features.map((f) => (
              <li key={f} className="flex items-start gap-2 text-sm text-muted-foreground">
                <span className="mt-1.5 h-1 w-1 flex-shrink-0 rounded-full bg-cyan" />
                {f}
              </li>
            ))}
          </ul>

          <h3 className="mt-6 mb-3 font-mono text-[10px] uppercase tracking-widest text-cyan">Stack</h3>
          <div className="flex flex-wrap gap-1.5">
            {p.stack.map((s) => (
              <span key={s} className="rounded-full border border-border bg-background/60 px-2.5 py-1 font-mono text-[11px] text-foreground/90">{s}</span>
            ))}
          </div>
        </div>
      </div>
    </motion.article>
  );
}
