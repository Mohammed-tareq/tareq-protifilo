import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { SectionLabel } from "./About";

type Cat = "Backend" | "Frontend" | "Database" | "Tools";

const catalog: Record<Cat, { name: string; level: number }[]> = {
  Backend: [
    { name: "PHP 8.2+", level: 95 },
    { name: "Laravel 12", level: 95 },
    { name: "Livewire 3", level: 90 },
    { name: "Filament", level: 85 },
    { name: "RESTful APIs", level: 90 },
    { name: "OOP / MVC / Repository-Service", level: 92 },
  ],
  Frontend: [
    { name: "JavaScript", level: 85 },
    { name: "Alpine.js", level: 85 },
    { name: "Tailwind CSS 4", level: 90 },
    { name: "Bootstrap", level: 88 },
    { name: "AJAX / JSON", level: 90 },
    { name: "HTML5 / CSS3", level: 95 },
  ],
  Database: [
    { name: "MySQL", level: 92 },
    { name: "MongoDB", level: 75 },
    { name: "Redis", level: 85 },
    { name: "Yajra DataTables", level: 85 },
  ],
  Tools: [
    { name: "Git / GitHub", level: 90 },
    { name: "Vite", level: 85 },
    { name: "Node.js", level: 78 },
    { name: "Agile / Scrum", level: 85 },
    { name: "Laravel Fortify", level: 80 },
    { name: "Pusher", level: 78 },
  ],
};

const cats = Object.keys(catalog) as Cat[];

export function Skills() {
  const [active, setActive] = useState<Cat>("Backend");

  return (
    <section id="skills" className="relative scroll-mt-24 overflow-hidden py-32">
      <div className="absolute inset-0 grid-bg opacity-30" />
      {/* Orbiting tech logos */}
      <div className="pointer-events-none absolute inset-0 flex items-center justify-center">
        <div className="relative h-[400px] w-[400px] opacity-20">
          {["L", "P", "M", "R", "F", "T"].map((c, i) => (
            <div
              key={c}
              className="absolute left-1/2 top-1/2 flex h-12 w-12 items-center justify-center rounded-full border border-violet/40 font-display text-xl text-violet"
              style={{
                animation: `orbit 25s linear infinite`,
                animationDelay: `${-i * 4}s`,
              }}
            >
              {c}
            </div>
          ))}
        </div>
      </div>

      <div className="relative mx-auto max-w-7xl px-6">
        <SectionLabel>02 / Skills</SectionLabel>
        <h2 className="mb-12 max-w-3xl font-display text-4xl font-bold md:text-6xl">
          Tools I use to <span className="text-gradient">build</span> &amp; <span className="text-gradient-gold">ship</span>.
        </h2>

        {/* Tabs */}
        <div className="mb-10 flex flex-wrap gap-2">
          {cats.map((c) => (
            <button
              key={c}
              onClick={() => setActive(c)}
              className={`relative rounded-full border px-5 py-2 text-sm font-medium transition-all ${
                active === c
                  ? "border-transparent bg-aurora text-background"
                  : "border-border text-muted-foreground hover:border-cyan hover:text-foreground"
              }`}
            >
              {c}
            </button>
          ))}
        </div>

        <AnimatePresence mode="wait">
          <motion.div
            key={active}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.4 }}
            className="grid gap-4 md:grid-cols-2 lg:grid-cols-3"
          >
            {catalog[active].map((s, i) => (
              <motion.div
                key={s.name}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.05 }}
                className="group relative overflow-hidden rounded-2xl border border-border bg-card/40 p-6 transition-all hover:-translate-y-1 hover:border-cyan/60 hover:shadow-[0_20px_60px_-20px_oklch(0.85_0.18_200_/_50%)]"
                style={{ transformStyle: "preserve-3d" }}
              >
                <div className="absolute inset-0 -z-0 bg-gradient-to-br from-violet/0 to-cyan/0 opacity-0 transition-opacity duration-500 group-hover:from-violet/10 group-hover:to-cyan/10 group-hover:opacity-100" />
                <div className="relative flex items-center justify-between">
                  <h4 className="font-display text-lg font-semibold">{s.name}</h4>
                  <span className="font-mono text-xs text-cyan">{s.level}%</span>
                </div>
                <div className="relative mt-4 h-1.5 overflow-hidden rounded-full bg-border">
                  <motion.div
                    initial={{ width: 0 }}
                    animate={{ width: `${s.level}%` }}
                    transition={{ duration: 1, delay: i * 0.05, ease: "easeOut" }}
                    className="h-full bg-aurora"
                    style={{ boxShadow: "0 0 12px oklch(0.85 0.18 200 / 60%)" }}
                  />
                </div>
              </motion.div>
            ))}
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
}
