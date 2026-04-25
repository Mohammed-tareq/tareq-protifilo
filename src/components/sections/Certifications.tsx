import { motion } from "framer-motion";
import { Award, ExternalLink, Calendar, Clock } from "lucide-react";
import { SectionLabel } from "./About";

type Cert = {
  id: string;
  title: string;
  instructor: string;
  date: string;
  hours: string;
  url: string;
  category: "Laravel" | "Backend" | "Frontend" | "Data" | "Architecture";
};

const certs: Cert[] = [
  {
    id: "UC-ed374002-cf69-49b2-9901-4f6bcdcd7bc2",
    title: "Mastering Laravel Multi-Tenancy: Single & Multi-Databases",
    instructor: "Mahmoud Anwar",
    date: "Mar 23, 2026",
    hours: "7.5h",
    url: "https://ude.my/UC-ed374002-cf69-49b2-9901-4f6bcdcd7bc2",
    category: "Laravel",
  },
  {
    id: "UC-166111a3-625b-4812-8394-78a6922feeb5",
    title: "Laravel Queues in Practice: Jobs, Batching & Workers",
    instructor: "Mahmoud Anwar",
    date: "Mar 28, 2026",
    hours: "8h",
    url: "https://ude.my/UC-166111a3-625b-4812-8394-78a6922feeb5",
    category: "Laravel",
  },
  {
    id: "UC-516a350b-4f9a-4623-9c64-742c27d1ca86",
    title: "Laravel Real-time Guide: Pusher, Websockets, Echo and More!",
    instructor: "Mahmoud Anwar",
    date: "Dec 30, 2025",
    hours: "6.5h",
    url: "https://ude.my/UC-516a350b-4f9a-4623-9c64-742c27d1ca86",
    category: "Laravel",
  },
  {
    id: "UC-0033c567-c44f-45bd-9df6-44d5f22880b8",
    title: "Mastering Laravel Eloquent ORM: Novice to Expert Guide",
    instructor: "Mahmoud Anwar",
    date: "Nov 23, 2025",
    hours: "19.5h",
    url: "https://ude.my/UC-0033c567-c44f-45bd-9df6-44d5f22880b8",
    category: "Laravel",
  },
  {
    id: "UC-5e5bf177-3223-409f-b849-87fac1885bae",
    title: "Laravel Socialite — The Complete Guide (Arabic)",
    instructor: "Mahmoud Anwar",
    date: "Nov 23, 2025",
    hours: "1.5h",
    url: "https://ude.my/UC-5e5bf177-3223-409f-b849-87fac1885bae",
    category: "Laravel",
  },
  {
    id: "UC-efe21159-ebaf-46db-987f-cb5bbc6608eb",
    title: "The Complete Guide to OOP & SOLID Principles in TS (Arabic)",
    instructor: "Muhammad Naga (Codeawy)",
    date: "Nov 10, 2025",
    hours: "9h",
    url: "https://ude.my/UC-efe21159-ebaf-46db-987f-cb5bbc6608eb",
    category: "Architecture",
  },
  {
    id: "UC-a785bc90-a301-43ce-9a65-bdd905d3bc65",
    title: "Python for Data Science and Machine Learning",
    instructor: "Hassan Fulaih",
    date: "Sept 17, 2024",
    hours: "17.5h",
    url: "https://ude.my/UC-a785bc90-a301-43ce-9a65-bdd905d3bc65",
    category: "Data",
  },
  {
    id: "UC-db47fb29-2e3e-400f-9883-24a4519d1cc2",
    title: "The C++ Learning Guide",
    instructor: "Hassan Fulaih",
    date: "Sept 17, 2024",
    hours: "10h",
    url: "https://ude.my/UC-db47fb29-2e3e-400f-9883-24a4519d1cc2",
    category: "Backend",
  },
  {
    id: "UC-bc4d1143-5819-447b-bf8a-0470e2504050",
    title: "The PHP 8 Learning Guide",
    instructor: "Hassan Fulaih",
    date: "Sept 16, 2024",
    hours: "7h",
    url: "https://ude.my/UC-bc4d1143-5819-447b-bf8a-0470e2504050",
    category: "Backend",
  },
  {
    id: "UC-dadc6fa7-4c75-42d9-8c05-6630e900dd1c",
    title: "The Web Front End Learning Guide",
    instructor: "Hassan Fulaih",
    date: "Aug 31, 2024",
    hours: "10h",
    url: "https://ude.my/UC-dadc6fa7-4c75-42d9-8c05-6630e900dd1c",
    category: "Frontend",
  },
];

const accentByCategory: Record<Cert["category"], { text: string; border: string; bg: string; glow: string }> = {
  Laravel: { text: "text-violet", border: "border-violet/40", bg: "from-violet/20 to-violet/5", glow: "oklch(0.58 0.25 295 / 40%)" },
  Backend: { text: "text-cyan", border: "border-cyan/40", bg: "from-cyan/20 to-cyan/5", glow: "oklch(0.85 0.18 200 / 40%)" },
  Frontend: { text: "text-gold", border: "border-gold/40", bg: "from-gold/20 to-gold/5", glow: "oklch(0.78 0.16 75 / 40%)" },
  Data: { text: "text-cyan", border: "border-cyan/40", bg: "from-cyan/20 to-cyan/5", glow: "oklch(0.85 0.18 200 / 40%)" },
  Architecture: { text: "text-gold", border: "border-gold/40", bg: "from-gold/20 to-gold/5", glow: "oklch(0.78 0.16 75 / 40%)" },
};

export function Certifications() {
  const totalHours = certs.reduce((sum, c) => sum + parseFloat(c.hours), 0);

  return (
    <section id="certifications" className="relative scroll-mt-24 py-32">
      <div className="absolute inset-0 bg-mesh opacity-30" />
      <div className="relative mx-auto max-w-7xl px-6">
        <SectionLabel>04 / Certifications</SectionLabel>

        <div className="mb-12 flex flex-wrap items-end justify-between gap-6">
          <h2 className="max-w-2xl font-display text-4xl font-bold md:text-6xl">
            Always <span className="text-gradient">learning</span>, always <span className="text-gradient-gold">building</span>.
          </h2>
          <div className="flex gap-4 font-mono text-sm">
            <div className="rounded-2xl border border-border bg-card/40 px-4 py-3">
              <div className="text-2xl font-bold text-cyan">{certs.length}</div>
              <div className="text-xs uppercase tracking-wider text-muted-foreground">Certificates</div>
            </div>
            <div className="rounded-2xl border border-border bg-card/40 px-4 py-3">
              <div className="text-2xl font-bold text-violet">{totalHours}h</div>
              <div className="text-xs uppercase tracking-wider text-muted-foreground">Total hours</div>
            </div>
          </div>
        </div>

        <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {certs.map((c, i) => {
            const accent = accentByCategory[c.category];
            return (
              <motion.a
                key={c.id}
                href={c.url}
                target="_blank"
                rel="noreferrer"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.45, delay: i * 0.05 }}
                className={`group relative overflow-hidden rounded-2xl border ${accent.border} bg-card/60 p-6 transition-all hover:-translate-y-1 hover:bg-card/80`}
              >
                <div className={`absolute inset-0 bg-gradient-to-br ${accent.bg} opacity-50`} />
                <div
                  className="absolute -right-16 -top-16 h-40 w-40 rounded-full opacity-0 blur-3xl transition-opacity duration-500 group-hover:opacity-100"
                  style={{ background: accent.glow }}
                />

                <div className="relative flex h-full flex-col">
                  <div className="mb-4 flex items-center justify-between">
                    <div className={`flex h-10 w-10 items-center justify-center rounded-xl border ${accent.border} bg-background/40 ${accent.text}`}>
                      <Award size={18} />
                    </div>
                    <span className={`rounded-full border ${accent.border} bg-background/40 px-2.5 py-0.5 font-mono text-[10px] uppercase tracking-wider ${accent.text}`}>
                      {c.category}
                    </span>
                  </div>

                  <h3 className="mb-2 font-display text-base font-semibold leading-snug text-foreground">
                    {c.title}
                  </h3>
                  <p className="mb-4 text-xs text-muted-foreground">by {c.instructor}</p>

                  <div className="mt-auto flex items-center justify-between border-t border-border/40 pt-3">
                    <div className="flex items-center gap-3 font-mono text-[10px] text-muted-foreground">
                      <span className="inline-flex items-center gap-1">
                        <Calendar size={10} /> {c.date}
                      </span>
                      <span className="inline-flex items-center gap-1">
                        <Clock size={10} /> {c.hours}
                      </span>
                    </div>
                    <ExternalLink size={14} className={`${accent.text} opacity-0 transition-opacity group-hover:opacity-100`} />
                  </div>
                </div>
              </motion.a>
            );
          })}
        </div>

        <p className="mt-10 text-center font-mono text-xs text-muted-foreground">
          Issued by <span className="text-foreground">Udemy</span> · Click any card to verify
        </p>
      </div>
    </section>
  );
}
