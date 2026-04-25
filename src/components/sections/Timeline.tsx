import { motion } from "framer-motion";
import { SectionLabel } from "./About";

const events = [
  {
    year: "2025",
    title: "ITI Training",
    subtitle: "Full-Stack PHP Laravel Development",
    desc: "Intensive professional program covering modern Laravel 12, advanced architecture and team workflows.",
    tags: ["Laravel 12", "Livewire", "Filament"],
  },
  {
    year: "2024",
    title: "POS System + E-Commerce",
    subtitle: "Active production builds",
    desc: "Shipping enterprise-grade systems with real-time inventory, RBAC, OTP auth and multi-language RTL.",
    tags: ["Laravel", "Filament", "Redis"],
  },
  {
    year: "2024",
    title: "WE Telecom Training",
    subtitle: "Full-Stack PHP Laravel",
    desc: "Hands-on backend specialization with real-world project cycles.",
    tags: ["PHP 8", "MySQL", "REST"],
  },
  {
    year: "2023",
    title: "B.Sc. Graduation",
    subtitle: "Computer & Software Engineering — MUST",
    desc: "Misr University for Science and Technology. Foundations in CS, software engineering and systems.",
    tags: ["CS", "Engineering"],
  },
  {
    year: "2023",
    title: "Blog + Doctor Booking System",
    subtitle: "Full-stack production projects",
    desc: "Real-time Pusher notifications, Stripe payments, RBAC, SEO and clean architecture.",
    tags: ["Laravel", "Stripe", "Pusher"],
  },
  {
    year: "2023",
    title: "Self-driven mastery",
    subtitle: "Modern PHP 8 + Front-End — Udemy",
    desc: "Deep dive into PHP 8 features, OOP patterns, and modern front-end fundamentals.",
    tags: ["PHP 8", "JS", "CSS"],
  },
];

export function Timeline() {
  return (
    <section id="timeline" className="relative scroll-mt-24 py-32">
      <div className="absolute inset-0 grid-bg opacity-20" />
      <div className="relative mx-auto max-w-6xl px-6">
        <SectionLabel>04 / Journey</SectionLabel>
        <h2 className="mb-16 max-w-3xl font-display text-4xl font-bold md:text-6xl">
          A timeline of <span className="text-gradient">growth</span>.
        </h2>

        <div className="relative">
          {/* Vertical line */}
          <div className="absolute left-4 top-0 h-full w-px bg-gradient-to-b from-violet via-cyan to-gold opacity-50 md:left-1/2 md:-translate-x-1/2" />

          <div className="space-y-12">
            {events.map((e, i) => {
              const left = i % 2 === 0;
              return (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: left ? -40 : 40 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, margin: "-80px" }}
                  transition={{ duration: 0.6 }}
                  className={`relative grid gap-4 md:grid-cols-2 md:gap-12 ${left ? "" : "md:[direction:rtl]"}`}
                >
                  <div className={`md:[direction:ltr] ${left ? "md:text-right" : ""}`}>
                    <div className="ml-12 md:ml-0">
                      <div
                        className={`inline-flex items-center gap-2 rounded-full glass px-3 py-1 ${left ? "md:flex-row-reverse" : ""}`}
                      >
                        <span className="font-mono text-xs text-cyan">{e.year}</span>
                      </div>
                      <h3 className="mt-3 font-display text-2xl font-bold">{e.title}</h3>
                      <p className="font-mono text-xs text-violet">{e.subtitle}</p>
                      <p className="mt-3 text-sm text-muted-foreground">{e.desc}</p>
                      <div
                        className={`mt-3 flex flex-wrap gap-1.5 ${left ? "md:justify-end" : ""}`}
                      >
                        {e.tags.map((t) => (
                          <span
                            key={t}
                            className="rounded-full border border-border bg-background/60 px-2 py-0.5 font-mono text-[10px] text-muted-foreground"
                          >
                            {t}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>

                  {/* Dot */}
                  <div className="absolute left-4 top-2 -translate-x-1/2 md:left-1/2">
                    <div className="relative">
                      <div className="absolute inset-0 animate-ping rounded-full bg-cyan opacity-40" />
                      <div className="relative h-4 w-4 rounded-full bg-aurora ring-4 ring-background" />
                    </div>
                  </div>

                  <div />
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
