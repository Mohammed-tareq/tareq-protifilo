import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import { ArrowDown, Download, Github, Linkedin, Mail, Phone, Sparkles } from "lucide-react";
import { Magnetic } from "../Magnetic";
import { Link } from "@tanstack/react-router";

const roles = ["Laravel Developer", "Full-Stack Engineer", "PHP Artisan", "API Architect"];

export function Hero() {
  const [roleIdx, setRoleIdx] = useState(0);
  const [typed, setTyped] = useState("");
  const sceneRef = useRef<HTMLDivElement>(null);

  // Typewriter for greeting + rotating role
  useEffect(() => {
    const role = roles[roleIdx];
    let i = 0;
    setTyped("");
    const id = setInterval(() => {
      i++;
      setTyped(role.slice(0, i));
      if (i >= role.length) {
        clearInterval(id);
        setTimeout(() => setRoleIdx((r) => (r + 1) % roles.length), 2000);
      }
    }, 70);
    return () => clearInterval(id);
  }, [roleIdx]);

  // Parallax 3D scene
  useEffect(() => {
    const el = sceneRef.current;
    if (!el) return;
    const onMove = (e: MouseEvent) => {
      const rect = el.getBoundingClientRect();
      const x = (e.clientX - rect.left - rect.width / 2) / rect.width;
      const y = (e.clientY - rect.top - rect.height / 2) / rect.height;
      el.style.transform = `perspective(1200px) rotateX(${-y * 12}deg) rotateY(${x * 18}deg)`;
    };
    window.addEventListener("mousemove", onMove);
    return () => window.removeEventListener("mousemove", onMove);
  }, []);

  return (
    <section className="relative min-h-screen overflow-hidden pt-32 noise" id="home">
      <div className="absolute inset-0 bg-mesh opacity-80" />
      <div className="grid-bg absolute inset-0 opacity-30" />

      <div className="relative mx-auto grid max-w-7xl items-center gap-12 px-6 pb-24 lg:grid-cols-2">
        {/* Left content */}
        <div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="mb-6 inline-flex items-center gap-2 rounded-full glass px-4 py-1.5 font-mono text-xs"
          >
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-cyan opacity-75" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-cyan" />
            </span>
            <span className="text-muted-foreground">Available for work — Cairo, EG</span>
          </motion.div>

          <motion.p
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1, duration: 0.6 }}
            className="font-mono text-sm text-cyan"
          >
            <span className="text-muted-foreground">$</span> Hello, I'm
          </motion.p>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.8 }}
            className="mt-2 font-display text-6xl font-bold leading-[0.95] tracking-tight md:text-7xl lg:text-8xl"
          >
            <span className="text-gradient animate-gradient">Mohammed</span>
            <br />
            <span className="text-foreground">Tareq</span>
            <span className="text-gradient-gold">.</span>
          </motion.h1>

          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.6 }}
            className="mt-6 flex h-9 items-center gap-3 font-display text-2xl md:text-3xl"
          >
            <Sparkles className="text-gold" size={22} />
            <span className="text-foreground">{typed}</span>
            <span className="animate-blink text-cyan">|</span>
          </motion.div>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6, duration: 0.6 }}
            className="mt-6 max-w-lg text-base leading-relaxed text-muted-foreground md:text-lg"
          >
            I architect enterprise Laravel platforms — from real-time POS systems to
            multi-language e-commerce — with clean MVC, Repository-Service patterns,
            and Redis-cached performance.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8, duration: 0.6 }}
            className="mt-10 flex flex-wrap items-center gap-4"
          >
            <Magnetic>
              <a
                href="#projects"
                className="btn-shine inline-flex items-center gap-2 rounded-full bg-aurora px-7 py-3.5 font-medium text-background transition-transform hover:scale-105"
              >
                View My Work <ArrowDown size={16} />
              </a>
            </Magnetic>
            <Magnetic>
              <Link
                to="/download"
                className="inline-flex items-center gap-2 rounded-full border border-border bg-card/40 px-7 py-3.5 font-medium text-foreground backdrop-blur transition-all hover:border-cyan hover:text-cyan"
              >
                <Download size={16} /> Download CV
              </Link>
            </Magnetic>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1, duration: 0.6 }}
            className="mt-10 flex items-center gap-4"
          >
            {[
              { Icon: Github, href: "https://github.com/MohammedTareq", label: "GitHub" },
              { Icon: Linkedin, href: "https://www.linkedin.com/in/mohammed-tareq", label: "LinkedIn" },
              { Icon: Mail, href: "mailto:mohtareq1999m@gmail.com", label: "Email" },
              { Icon: Phone, href: "tel:+201151410813", label: "Phone" },
            ].map(({ Icon, href, label }) => (
              <a
                key={label}
                href={href}
                target="_blank"
                rel="noreferrer"
                aria-label={label}
                className="group flex h-12 w-12 items-center justify-center rounded-xl glass transition-all hover:-translate-y-1 hover:text-cyan hover:glow-cyan"
              >
                <Icon size={18} />
              </a>
            ))}
          </motion.div>
        </div>

        {/* Right 3D scene */}
        <div className="relative h-[480px] lg:h-[580px]">
          <div ref={sceneRef} className="relative h-full w-full transition-transform duration-200 will-change-transform" style={{ transformStyle: "preserve-3d" }}>
            {/* Glow orb */}
            <div className="absolute left-1/2 top-1/2 h-72 w-72 -translate-x-1/2 -translate-y-1/2 rounded-full bg-aurora opacity-40 blur-[100px]" />

            {/* Rotating ring */}
            <div className="absolute left-1/2 top-1/2 h-80 w-80 -translate-x-1/2 -translate-y-1/2 animate-spin-slow rounded-full border border-violet/40" style={{ transformStyle: "preserve-3d", transform: "translate(-50%,-50%) rotateX(70deg)" }}>
              <div className="absolute -top-2 left-1/2 h-4 w-4 -translate-x-1/2 rounded-full bg-cyan glow-cyan" />
            </div>
            <div className="absolute left-1/2 top-1/2 h-96 w-96 -translate-x-1/2 -translate-y-1/2 animate-spin-slow rounded-full border border-cyan/30" style={{ animationDuration: "45s", animationDirection: "reverse", transformStyle: "preserve-3d", transform: "translate(-50%,-50%) rotateX(70deg) rotateZ(30deg)" }}>
              <div className="absolute -top-1.5 left-1/2 h-3 w-3 -translate-x-1/2 rounded-full bg-violet glow-violet" />
            </div>

            {/* Central icosahedron-ish shape */}
            <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 animate-float" style={{ transformStyle: "preserve-3d" }}>
              <div className="relative h-48 w-48 animate-spin-slow" style={{ transformStyle: "preserve-3d", animationDuration: "20s" }}>
                {[
                  { rx: 0, ry: 0 }, { rx: 90, ry: 0 }, { rx: 0, ry: 90 },
                  { rx: 45, ry: 45 }, { rx: -45, ry: 45 }, { rx: 45, ry: -45 },
                ].map((r, i) => (
                  <div
                    key={i}
                    className="absolute inset-0 rounded-3xl border-2"
                    style={{
                      transform: `rotateX(${r.rx}deg) rotateY(${r.ry}deg)`,
                      borderColor: i % 2 === 0 ? "oklch(0.85 0.18 200 / 60%)" : "oklch(0.58 0.25 295 / 60%)",
                      background: i % 2 === 0
                        ? "linear-gradient(135deg, oklch(0.85 0.18 200 / 10%), transparent)"
                        : "linear-gradient(135deg, oklch(0.58 0.25 295 / 10%), transparent)",
                      boxShadow: i % 2 === 0 ? "0 0 30px oklch(0.85 0.18 200 / 30%)" : "0 0 30px oklch(0.58 0.25 295 / 30%)",
                    }}
                  />
                ))}
              </div>
            </div>

            {/* Floating tech badges */}
            {[
              { label: "Laravel", color: "var(--violet)", style: { top: "10%", left: "10%" } },
              { label: "PHP 8.2", color: "var(--cyan)", style: { top: "18%", right: "8%" } },
              { label: "Livewire", color: "var(--gold)", style: { bottom: "22%", left: "5%" } },
              { label: "MySQL", color: "var(--cyan)", style: { bottom: "12%", right: "12%" } },
              { label: "Redis", color: "var(--violet)", style: { top: "48%", right: "0%" } },
            ].map((b, i) => (
              <div
                key={b.label}
                className="absolute animate-float rounded-full glass px-4 py-2 font-mono text-xs"
                style={{
                  ...b.style,
                  animationDelay: `${i * 0.6}s`,
                  color: b.color,
                  borderColor: b.color,
                }}
              >
                {b.label}
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="pointer-events-none absolute bottom-6 left-1/2 -translate-x-1/2 flex-col items-center gap-2 text-muted-foreground hidden md:flex">
        <span className="font-mono text-[10px] uppercase tracking-[0.3em]">Scroll</span>
        <div className="h-10 w-[1px] animate-pulse bg-gradient-to-b from-cyan to-transparent" />
      </div>

      {/* Scanline */}
      <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-cyan/20" style={{ animation: "scanline 8s linear infinite" }} />
    </section>
  );
}
