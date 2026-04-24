import { Link } from "@tanstack/react-router";
import { Github, Linkedin, Mail, ArrowUp } from "lucide-react";

export function Footer() {
  return (
    <footer className="relative border-t border-border/40 bg-surface/30">
      <div className="mx-auto grid max-w-7xl gap-10 px-6 py-16 md:grid-cols-3">
        <div>
          <Link to="/" className="inline-flex items-center gap-2">
            <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-aurora font-display text-sm font-bold text-background">
              MT
            </div>
            <span className="font-display text-lg">Mohammed Tareq</span>
          </Link>
          <p className="mt-4 max-w-xs text-sm text-muted-foreground">
            Crafting performant Laravel applications and full-stack experiences from Cairo.
          </p>
        </div>

        <div>
          <h4 className="mb-4 font-display text-sm uppercase tracking-widest text-cyan">Navigate</h4>
          <ul className="space-y-2 text-sm text-muted-foreground">
            <li><a href="#about" className="hover:text-foreground">About</a></li>
            <li><a href="#skills" className="hover:text-foreground">Skills</a></li>
            <li><a href="#projects" className="hover:text-foreground">Projects</a></li>
            <li><Link to="/download" className="hover:text-foreground">Resume</Link></li>
          </ul>
        </div>

        <div>
          <h4 className="mb-4 font-display text-sm uppercase tracking-widest text-cyan">Connect</h4>
          <div className="flex gap-3">
            {[
              { Icon: Github, href: "https://github.com/Mohammed-tareq?tab=repositories" },
              { Icon: Linkedin, href: "https://www.linkedin.com/in/mohammed-t-603177250/" },
              { Icon: Mail, href: "mailto:mohtareq1999m@gmail.com" },
            ].map(({ Icon, href }, i) => (
              <a
                key={i}
                href={href}
                target="_blank"
                rel="noreferrer"
                className="flex h-11 w-11 items-center justify-center rounded-xl glass transition-all hover:-translate-y-1 hover:text-cyan"
              >
                <Icon size={18} />
              </a>
            ))}
          </div>
          <p className="mt-4 font-mono text-xs text-muted-foreground">
            mohtareq1999m@gmail.com
          </p>
        </div>
      </div>

      <div className="border-t border-border/30">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-4 px-6 py-6 sm:flex-row">
          <p className="font-mono text-xs text-muted-foreground">
            © 2025 Mohammed Tareq — Built with <span className="text-destructive">❤</span> &amp; <span className="text-cyan">Laravel</span> spirit
          </p>
          <button
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            className="flex items-center gap-2 rounded-full glass px-4 py-2 text-xs transition-transform hover:-translate-y-1"
          >
            <ArrowUp size={14} /> Back to top
          </button>
        </div>
      </div>
    </footer>
  );
}
