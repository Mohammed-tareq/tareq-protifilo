import { Link, useLocation } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import { Magnetic } from "./Magnetic";

const links = [
  { to: "/", label: "Home" },
  { to: "/projects", label: "Projects" },
  { to: "/download", label: "Resume" },
];

export function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const loc = useLocation();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => { setOpen(false); }, [loc.pathname]);

  return (
    <>
      <header
        className={`fixed left-0 right-0 top-0 z-50 transition-all duration-500 ${
          scrolled ? "py-3" : "py-5"
        }`}
      >
        <nav
          className={`mx-auto flex max-w-7xl items-center justify-between px-6 transition-all duration-500 ${
            scrolled ? "glass-strong rounded-2xl py-3" : "py-2"
          }`}
          style={scrolled ? { marginInline: "auto", maxWidth: "min(1200px, calc(100% - 24px))" } : {}}
        >
          <Link to="/" className="group relative flex items-center gap-2">
            <div className="relative flex h-10 w-10 items-center justify-center rounded-xl bg-aurora font-display text-sm font-bold text-background animate-gradient">
              MT
              <div className="absolute inset-0 rounded-xl bg-aurora opacity-0 blur-md transition-opacity duration-300 group-hover:opacity-70" />
            </div>
            <span className="hidden font-display text-sm font-medium text-foreground/90 sm:block">
              Mohammed<span className="text-cyan">.</span>
            </span>
          </Link>

          <ul className="hidden items-center gap-1 md:flex">
            {[
              { href: "#about", label: "About" },
              { href: "#skills", label: "Skills" },
              { href: "#projects", label: "Projects" },
              { href: "#certifications", label: "Certs" },
              { href: "#timeline", label: "Experience" },
              { href: "#contact", label: "Contact" },
            ].map((l) => (
              <li key={l.href}>
                <a
                  href={loc.pathname === "/" ? l.href : `/${l.href}`}
                  className="relative px-4 py-2 text-sm text-muted-foreground transition-colors hover:text-foreground"
                >
                  {l.label}
                </a>
              </li>
            ))}
            {links.slice(1).map((l) => (
              <li key={l.to}>
                <Link
                  to={l.to}
                  className="relative px-4 py-2 text-sm text-muted-foreground transition-colors hover:text-foreground"
                  activeProps={{ className: "relative px-4 py-2 text-sm text-cyan" }}
                >
                  {l.label}
                </Link>
              </li>
            ))}
          </ul>

          <div className="hidden md:block">
            <Magnetic>
              <a
                href="#contact"
                className="btn-shine relative inline-flex items-center gap-2 rounded-full bg-aurora px-5 py-2.5 text-sm font-medium text-background transition-transform hover:scale-105"
              >
                Hire Me
                <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-background" />
              </a>
            </Magnetic>
          </div>

          <button
            className="flex h-10 w-10 items-center justify-center rounded-lg glass md:hidden"
            onClick={() => setOpen(!open)}
            aria-label="Toggle menu"
          >
            {open ? <X size={20} /> : <Menu size={20} />}
          </button>
        </nav>
      </header>

      {/* Mobile overlay */}
      <div
        className={`fixed inset-0 z-40 bg-background/95 backdrop-blur-xl transition-all duration-500 md:hidden ${
          open ? "pointer-events-auto opacity-100" : "pointer-events-none opacity-0"
        }`}
      >
        <div className="flex h-full flex-col items-center justify-center gap-8">
          {[
            { href: "#about", label: "About" },
            { href: "#skills", label: "Skills" },
            { href: "#projects", label: "Projects" },
            { href: "#certifications", label: "Certs" },
            { href: "#timeline", label: "Experience" },
            { href: "#contact", label: "Contact" },
          ].map((l) => (
            <a
              key={l.href}
              href={loc.pathname === "/" ? l.href : `/${l.href}`}
              onClick={() => setOpen(false)}
              className="font-display text-3xl font-semibold text-foreground transition-colors hover:text-cyan"
            >
              {l.label}
            </a>
          ))}
          {links.slice(1).map((l) => (
            <Link
              key={l.to}
              to={l.to}
              className="font-display text-3xl font-semibold text-foreground transition-colors hover:text-cyan"
            >
              {l.label}
            </Link>
          ))}
        </div>
      </div>
    </>
  );
}
