import { useState, type FormEvent } from "react";
import { motion } from "framer-motion";
import { Mail, Phone, MapPin, Send, Check, Loader2 } from "lucide-react";
import { SectionLabel } from "./About";
import { toast } from "sonner";

export function Contact() {
  const [state, setState] = useState<"idle" | "loading" | "success">("idle");
  const [form, setForm] = useState({ name: "", email: "", message: "" });

  const onSubmit = (e: FormEvent) => {
    e.preventDefault();
    setState("loading");
    setTimeout(() => {
      setState("success");
      toast.success("Message sent! I'll get back to you soon.");
      setTimeout(() => {
        setState("idle");
        setForm({ name: "", email: "", message: "" });
      }, 2200);
    }, 1400);
  };

  const cards = [
    { Icon: Mail, label: "Email", value: "mohtareq1999m@gmail.com", href: "mailto:mohtareq1999m@gmail.com" },
    { Icon: Phone, label: "Phone", value: "+20 115 141 0813", href: "tel:+201151410813" },
    { Icon: MapPin, label: "Location", value: "Cairo, Egypt", href: "#" },
  ];

  return (
    <section id="contact" className="relative scroll-mt-24 py-32">
      <div className="absolute inset-0 bg-mesh opacity-40" />
      <div className="relative mx-auto max-w-6xl px-6">
        <SectionLabel>05 / Contact</SectionLabel>
        <h2 className="mb-16 max-w-3xl font-display text-4xl font-bold md:text-6xl">
          Let's build something <span className="text-gradient">amazing</span> together.
        </h2>

        <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr]">
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

          {/* Form */}
          <motion.form
            onSubmit={onSubmit}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="relative overflow-hidden rounded-3xl border border-border bg-card/40 p-8"
          >
            <div className="pointer-events-none absolute -right-20 -top-20 h-60 w-60 rounded-full bg-violet/30 blur-[80px]" />
            <div className="pointer-events-none absolute -bottom-20 -left-20 h-60 w-60 rounded-full bg-cyan/20 blur-[80px]" />

            <div className="relative space-y-5">
              <FloatingInput label="Your name" value={form.name} onChange={(v) => setForm({ ...form, name: v })} required />
              <FloatingInput label="Email address" type="email" value={form.email} onChange={(v) => setForm({ ...form, email: v })} required />
              <FloatingTextarea label="Tell me about your project" value={form.message} onChange={(v) => setForm({ ...form, message: v })} required />

              <button
                type="submit"
                disabled={state !== "idle"}
                className="btn-shine relative inline-flex w-full items-center justify-center gap-2 overflow-hidden rounded-full bg-aurora px-7 py-4 font-medium text-background transition-transform hover:scale-[1.02] disabled:opacity-90"
              >
                {state === "idle" && (<><Send size={16} /> Send Message</>)}
                {state === "loading" && (<><Loader2 size={16} className="animate-spin" /> Sending...</>)}
                {state === "success" && (<><Check size={16} /> Message sent!</>)}
              </button>
            </div>
          </motion.form>
        </div>
      </div>
    </section>
  );
}

function FloatingInput({ label, value, onChange, type = "text", required }: { label: string; value: string; onChange: (v: string) => void; type?: string; required?: boolean }) {
  return (
    <div className="relative">
      <input
        type={type}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        required={required}
        placeholder=" "
        className="peer w-full rounded-xl border border-border bg-background/40 px-4 pb-2 pt-6 text-foreground outline-none transition-colors focus:border-cyan"
      />
      <label className="pointer-events-none absolute left-4 top-4 font-mono text-xs text-muted-foreground transition-all peer-focus:top-1.5 peer-focus:text-[10px] peer-focus:text-cyan peer-[:not(:placeholder-shown)]:top-1.5 peer-[:not(:placeholder-shown)]:text-[10px]">
        {label}
      </label>
    </div>
  );
}

function FloatingTextarea({ label, value, onChange, required }: { label: string; value: string; onChange: (v: string) => void; required?: boolean }) {
  return (
    <div className="relative">
      <textarea
        value={value}
        onChange={(e) => onChange(e.target.value)}
        required={required}
        placeholder=" "
        rows={4}
        className="peer w-full resize-none rounded-xl border border-border bg-background/40 px-4 pb-2 pt-6 text-foreground outline-none transition-colors focus:border-cyan"
      />
      <label className="pointer-events-none absolute left-4 top-4 font-mono text-xs text-muted-foreground transition-all peer-focus:top-1.5 peer-focus:text-[10px] peer-focus:text-cyan peer-[:not(:placeholder-shown)]:top-1.5 peer-[:not(:placeholder-shown)]:text-[10px]">
        {label}
      </label>
    </div>
  );
}
