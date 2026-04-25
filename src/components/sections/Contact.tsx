import { motion } from "framer-motion";
import { Mail, Phone, MapPin } from "lucide-react";
import { SectionLabel } from "./About";

export function Contact() {
  const cards = [
    { Icon: Mail, label: "Email", value: "mohtareq1999m@gmail.com", href: "mailto:mohtareq1999m@gmail.com" },
    { Icon: Phone, label: "Phone", value: "+20 115 141 0813", href: "tel:+201151410813" },
    { Icon: MapPin, label: "Location", value: "Cairo, Egypt", href: "#" },
  ];

  return (
    <section id="contact" className="relative scroll-mt-24 py-32">
      <div className="absolute inset-0 bg-mesh opacity-40" />
      <div className="relative mx-auto max-w-3xl px-6">
        <SectionLabel>05 / Contact</SectionLabel>
        <h2 className="mb-16 max-w-3xl font-display text-4xl font-bold md:text-6xl">
          Let's build something <span className="text-gradient">amazing</span> together.
        </h2>

        <div className="space-y-4">
          {cards.map(({ Icon, label, value, href }) => (
            <motion.a
              key={label}
              href={href}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="group flex items-center gap-4 rounded-2xl border border-border bg-card/40 p-5 transition-all hover:-translate-y-1 hover:border-cyan/60 hover:bg-card/70 hover:shadow-[0_15px_40px_-15px_oklch(0.85_0.18_200_/_50%)]"
            >
              <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-xl bg-aurora text-background transition-transform group-hover:scale-110">
                <Icon size={20} />
              </div>
              <div className="min-w-0">
                <p className="font-mono text-[10px] uppercase tracking-widest text-muted-foreground">{label}</p>
                <p className="truncate font-display text-base">{value}</p>
              </div>
            </motion.a>
          ))}

          <div className="rounded-2xl border border-border bg-card/40 p-6">
            <p className="font-mono text-xs text-muted-foreground">
              <span className="text-cyan">$</span> status: <span className="text-gold">open to opportunities</span>
            </p>
            <p className="mt-2 text-sm text-muted-foreground">
              I respond within 24 hours. Coffee in Cairo or async on Slack — both work.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
