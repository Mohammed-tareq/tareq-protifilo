import { useEffect, useState } from "react";

const phrases = ["Laravel", "PHP 8", "Livewire", "Filament", "MySQL", "Redis"];

export function Preloader() {
  const [progress, setProgress] = useState(0);
  const [done, setDone] = useState(false);
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    let i = 0;
    const id = setInterval(() => {
      i += Math.random() * 12 + 4;
      if (i >= 100) {
        i = 100;
        clearInterval(id);
        setTimeout(() => setDone(true), 350);
      }
      setProgress(i);
    }, 80);
    const phraseId = setInterval(() => setCurrent((c) => (c + 1) % phrases.length), 280);
    return () => { clearInterval(id); clearInterval(phraseId); };
  }, []);

  return (
    <div
      className={`fixed inset-0 z-[9999] flex flex-col items-center justify-center bg-background transition-all duration-700 ${
        done ? "pointer-events-none -translate-y-full opacity-0" : ""
      }`}
    >
      <div className="absolute inset-0 bg-mesh opacity-50" />
      <div className="relative">
        <svg width="140" height="140" viewBox="0 0 140 140" className="overflow-visible">
          <defs>
            <linearGradient id="mt-grad" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="oklch(0.58 0.25 295)" />
              <stop offset="100%" stopColor="oklch(0.85 0.18 200)" />
            </linearGradient>
          </defs>
          <text
            x="50%" y="58%"
            textAnchor="middle"
            dominantBaseline="middle"
            fontFamily="Space Grotesk"
            fontSize="68"
            fontWeight="700"
            fill="none"
            stroke="url(#mt-grad)"
            strokeWidth="1.5"
            strokeDasharray="400"
            strokeDashoffset="400"
            style={{ animation: "draw 2s ease forwards" }}
          >
            MT
          </text>
        </svg>
        <div
          className="absolute inset-0 flex items-center justify-center font-display text-6xl font-bold text-gradient"
          style={{ opacity: progress / 100 }}
        >
          MT
        </div>
      </div>

      <div className="mt-10 w-64">
        <div className="mb-3 flex justify-between font-mono text-xs text-muted-foreground">
          <span>Loading</span>
          <span className="text-cyan">{Math.floor(progress)}%</span>
        </div>
        <div className="h-[2px] overflow-hidden rounded-full bg-border">
          <div
            className="h-full bg-aurora transition-all duration-100"
            style={{ width: `${progress}%`, boxShadow: "0 0 10px oklch(0.85 0.18 200 / 80%)" }}
          />
        </div>
        <div className="mt-4 text-center font-mono text-xs text-muted-foreground">
          <span className="text-violet">$</span> initializing{" "}
          <span className="text-cyan">{phrases[current]}</span>
          <span className="animate-blink">_</span>
        </div>
      </div>
    </div>
  );
}
