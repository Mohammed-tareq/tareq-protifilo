import { createFileRoute } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { Download, Eye, Link as LinkIcon, ArrowLeft, FileText, Calendar, Briefcase } from "lucide-react";
import { Link } from "@tanstack/react-router";
import { useState } from "react";
import { ParticleField } from "@/components/ParticleField";
import { toast } from "sonner";
import { Magnetic } from "@/components/Magnetic";

export const Route = createFileRoute("/download")({
  head: () => ({
    meta: [
      { title: "Resume — Mohammed Tareq" },
      { name: "description", content: "Download Mohammed Tareq's CV — Laravel Developer & Full-Stack Engineer based in Cairo." },
      { property: "og:title", content: "Resume — Mohammed Tareq" },
      { property: "og:description", content: "Get the CV: 2+ years of Laravel & full-stack experience." },
    ],
  }),
  component: DownloadPage,
});

function Confetti({ show }: { show: boolean }) {
  if (!show) return null;
  return (
    <div className="pointer-events-none fixed inset-0 z-[100]">
      {Array.from({ length: 60 }).map((_, i) => {
        const colors = ["oklch(0.58 0.25 295)", "oklch(0.85 0.18 200)", "oklch(0.78 0.16 75)"];
        return (
          <span
            key={i}
            className="absolute top-1/2 left-1/2 h-2 w-2"
            style={{
              background: colors[i % 3],
              transform: `rotate(${Math.random() * 360}deg)`,
              animation: `confetti-${i % 4} 1.6s ease-out forwards`,
              ["--tx" as never]: `${(Math.random() - 0.5) * 600}px`,
              ["--ty" as never]: `${(Math.random() - 0.5) * 600}px`,
            }}
          />
        );
      })}
      <style>{`
        @keyframes confetti-0 { to { transform: translate(var(--tx), var(--ty)) rotate(720deg); opacity: 0; } }
        @keyframes confetti-1 { to { transform: translate(var(--tx), var(--ty)) rotate(-720deg); opacity: 0; } }
        @keyframes confetti-2 { to { transform: translate(var(--tx), var(--ty)) rotate(540deg); opacity: 0; } }
        @keyframes confetti-3 { to { transform: translate(var(--tx), var(--ty)) rotate(-540deg); opacity: 0; } }
      `}</style>
    </div>
  );
}

function DownloadPage() {
  const [confetti, setConfetti] = useState(false);

  const handleDownload = () => {
    setConfetti(true);
    toast.success("Download started! Thanks for your interest.");
    setTimeout(() => setConfetti(false), 1700);
  };

  const copyLink = () => {
    if (typeof window !== "undefined") {
      navigator.clipboard?.writeText(window.location.href);
      toast.success("Link copied to clipboard!");
    }
  };

  return (
    <div className="relative min-h-screen overflow-hidden pt-32">
      <ParticleField density={80} />
      <div className="absolute inset-0 bg-mesh opacity-50" />

      <Confetti show={confetti} />

      <div className="relative mx-auto max-w-6xl px-6 py-12">
        <motion.p initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} className="text-center font-mono text-xs uppercase tracking-[0.3em] text-cyan">
          // Curriculum Vitae
        </motion.p>
        <motion.h1 initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }} className="mt-4 text-center font-display text-5xl font-bold leading-tight md:text-7xl">
          My <span className="text-gradient">Resume</span>
        </motion.h1>
        <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.3 }} className="mx-auto mt-4 max-w-xl text-center text-muted-foreground">
          A complete overview of my skills, projects and experience as a Laravel & Full-Stack engineer.
        </motion.p>

        {/* Stats */}
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.5 }} className="mx-auto mt-10 grid max-w-3xl grid-cols-3 gap-4">
          {[
            { Icon: Calendar, l: "Last Updated", v: "2025" },
            { Icon: Briefcase, l: "Experience", v: "2+ Years" },
            { Icon: FileText, l: "Pages", v: "2" },
          ].map((s) => (
            <div key={s.l} className="rounded-2xl border border-border bg-card/40 p-4 text-center">
              <s.Icon className="mx-auto mb-2 text-cyan" size={18} />
              <div className="font-display text-xl font-bold">{s.v}</div>
              <div className="font-mono text-[10px] uppercase tracking-wider text-muted-foreground">{s.l}</div>
            </div>
          ))}
        </motion.div>

        {/* CV Mockup */}
        <div className="mt-16 grid items-center gap-12 lg:grid-cols-2">
          <motion.div
            initial={{ opacity: 0, scale: 0.9, rotateY: -15 }}
            animate={{ opacity: 1, scale: 1, rotateY: -8 }}
            transition={{ duration: 0.8 }}
            className="relative mx-auto"
            style={{ perspective: 1500 }}
          >
            <div className="absolute -inset-8 rounded-3xl bg-aurora opacity-30 blur-3xl" />
            <div
              className="relative aspect-[3/4] w-full max-w-sm animate-float overflow-hidden rounded-2xl border border-border bg-card shadow-[0_40px_80px_-20px_rgba(0,0,0,0.6)]"
              style={{ transform: "rotateY(-8deg) rotateX(4deg)", transformStyle: "preserve-3d" }}
            >
              {/* Faux CV content */}
              <div className="absolute inset-0 bg-gradient-to-br from-background to-surface p-6">
                <div className="border-b border-border pb-3">
                  <h3 className="font-display text-xl font-bold">Mohammed Tareq</h3>
                  <p className="font-mono text-[10px] text-cyan">Laravel Developer · Cairo, EG</p>
                </div>
                <div className="mt-4 space-y-2">
                  {Array.from({ length: 14 }).map((_, i) => (
                    <div key={i} className="h-1.5 rounded bg-border" style={{ width: `${50 + (i % 5) * 10}%` }} />
                  ))}
                </div>
                <div className="mt-4 grid grid-cols-2 gap-1">
                  {["Laravel", "Livewire", "Filament", "Redis", "MySQL", "PHP 8"].map((t) => (
                    <span key={t} className="rounded bg-aurora/20 px-1.5 py-0.5 font-mono text-[8px] text-cyan">{t}</span>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div initial={{ opacity: 0, x: 30 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.8, delay: 0.2 }}>
            <p className="font-mono text-xs uppercase tracking-widest text-cyan">// Get the file</p>
            <h2 className="mt-3 font-display text-3xl font-bold md:text-4xl">
              Ready when you are.
            </h2>
            <p className="mt-3 text-muted-foreground">
              The PDF includes my full project breakdowns, technical stack, training history and contact details.
            </p>

            <div className="mt-8 space-y-3">
              <Magnetic strength={0.2}>
                <a
                  href="#"
                  onClick={(e) => { e.preventDefault(); handleDownload(); }}
                  className="btn-shine relative flex w-full animate-pulse-glow items-center justify-center gap-3 overflow-hidden rounded-2xl bg-aurora px-8 py-5 font-display text-lg font-semibold text-background transition-transform hover:scale-[1.02]"
                >
                  <Download size={22} /> Download CV — PDF
                </a>
              </Magnetic>

              <div className="flex gap-3">
                <a href="#" target="_blank" rel="noreferrer" className="flex flex-1 items-center justify-center gap-2 rounded-2xl border border-border bg-card/40 px-5 py-3 text-sm transition-colors hover:border-cyan hover:text-cyan">
                  <Eye size={16} /> View Online
                </a>
                <button onClick={copyLink} className="flex flex-1 items-center justify-center gap-2 rounded-2xl border border-border bg-card/40 px-5 py-3 text-sm transition-colors hover:border-cyan hover:text-cyan">
                  <LinkIcon size={16} /> Copy Link
                </button>
              </div>
            </div>

            <Link to="/" className="mt-8 inline-flex items-center gap-2 font-mono text-xs text-muted-foreground hover:text-cyan">
              <ArrowLeft size={14} /> Back to Portfolio
            </Link>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
