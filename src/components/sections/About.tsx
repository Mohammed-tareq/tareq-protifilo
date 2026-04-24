import { motion, useInView } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import { Code2, Zap, Layers, Rocket } from "lucide-react";
import portrait from "@/assets/mohammed-tareq-anime.jpg";
import portraitVideo from "@/assets/mohammed-tareq.mp4";

function Counter({ end, suffix = "", duration = 1500 }: { end: number; suffix?: string; duration?: number }) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true });
  const [val, setVal] = useState(0);

  useEffect(() => {
    if (!inView) return;
    let raf = 0;
    const start = performance.now();
    const tick = (t: number) => {
      const p = Math.min((t - start) / duration, 1);
      setVal(Math.floor(end * (1 - Math.pow(1 - p, 3))));
      if (p < 1) raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [inView, end, duration]);

  return <span ref={ref}>{val}{suffix}</span>;
}

const values = [
  { Icon: Code2, title: "Clean Architecture", desc: "Repository-Service pattern, SOLID, MVC done right." },
  { Icon: Zap, title: "Performance First", desc: "Redis caching, query optimization, server-side DataTables." },
  { Icon: Layers, title: "Full-Stack Reach", desc: "From DB schema to reactive UI with Livewire & Alpine." },
  { Icon: Rocket, title: "Production Ready", desc: "RBAC, OTP auth, multi-language, RTL — shipped, not theorized." },
];

export function About() {
  return (
    <section id="about" className="relative scroll-mt-24 py-32">
      <div className="absolute inset-0 bg-mesh opacity-30" />
      <div className="relative mx-auto max-w-7xl px-6">
        <SectionLabel>01 / About</SectionLabel>

        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-16 max-w-3xl font-display text-4xl font-bold leading-tight md:text-6xl"
        >
          A backend engineer who <span className="text-gradient">obsesses</span> over
          architecture &amp; <span className="text-gradient-gold">user experience</span>.
        </motion.h2>

        <div className="grid gap-12 lg:grid-cols-[1fr_1.4fr] lg:gap-20">
          {/* Photo placeholder */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="relative mx-auto w-full max-w-sm"
          >
            <div className="relative aspect-[4/5] overflow-hidden rounded-3xl glass animate-pulse-glow">
              <video
                src={portraitVideo}
                poster={portrait}
                autoPlay
                loop
                muted
                playsInline
                preload="metadata"
                className="absolute inset-0 h-full w-full object-cover"
                aria-label="Animated portrait of Mohammed Tareq"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background via-background/20 to-transparent" />
              <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between font-mono text-[10px] uppercase tracking-wider text-cyan">
                <span>~/cairo/egypt</span>
                <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-cyan" />
              </div>
              {/* corner accents */}
              <div className="absolute left-3 top-3 h-6 w-6 border-l-2 border-t-2 border-cyan" />
              <div className="absolute right-3 top-3 h-6 w-6 border-r-2 border-t-2 border-cyan" />
              <div className="absolute bottom-3 left-3 h-6 w-6 border-b-2 border-l-2 border-cyan" />
              <div className="absolute bottom-3 right-3 h-6 w-6 border-b-2 border-r-2 border-cyan" />
            </div>

            {/* Stats */}
            <div className="mt-6 grid grid-cols-3 gap-3">
              {[
                { n: 4, s: "+", l: "Projects" },
                { n: 2, s: "+", l: "Years" },
                { n: 10, s: "+", l: "Tech" },
              ].map((s) => (
                <div key={s.l} className="rounded-2xl glass p-4 text-center">
                  <div className="font-display text-2xl font-bold text-gradient">
                    <Counter end={s.n} suffix={s.s} />
                  </div>
                  <div className="font-mono text-[10px] uppercase tracking-wider text-muted-foreground">{s.l}</div>
                </div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <p className="text-lg leading-relaxed text-muted-foreground">
              I'm <span className="text-foreground">Mohammed Tareq</span>, a Computer &amp; Software Engineering
              graduate from MUST (2023). I build production Laravel systems that scale —
              from enterprise e-commerce platforms with multi-language RTL support to real-time
              POS systems with 2FA and PDF generation.
            </p>
            <p className="mt-4 text-lg leading-relaxed text-muted-foreground">
              My toolbox: <span className="font-mono text-cyan">Laravel 12</span>,{" "}
              <span className="font-mono text-cyan">Livewire 3</span>,{" "}
              <span className="font-mono text-cyan">Filament</span>,{" "}
              <span className="font-mono text-cyan">Redis</span>, and a deep love for the
              Repository-Service pattern. I ship code that's auditable, testable, and performant.
            </p>

            <h3 className="mt-10 mb-4 font-display text-sm uppercase tracking-[0.3em] text-cyan">
              What I bring to the table
            </h3>
            <div className="grid gap-3 sm:grid-cols-2">
              {values.map((v) => (
                <div
                  key={v.title}
                  className="group rounded-2xl border border-border bg-card/30 p-5 transition-all hover:-translate-y-1 hover:border-cyan/50 hover:bg-card/60"
                >
                  <div className="mb-3 inline-flex h-10 w-10 items-center justify-center rounded-xl bg-aurora text-background">
                    <v.Icon size={18} />
                  </div>
                  <h4 className="mb-1 font-display font-semibold">{v.title}</h4>
                  <p className="text-sm text-muted-foreground">{v.desc}</p>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

export function SectionLabel({ children }: { children: React.ReactNode }) {
  return (
    <div className="mb-6 inline-flex items-center gap-3 font-mono text-xs uppercase tracking-[0.3em] text-cyan">
      <span className="h-px w-10 bg-cyan" />
      {children}
    </div>
  );
}
