import { createFileRoute } from "@tanstack/react-router";
import { Hero } from "@/components/sections/Hero";
import { About } from "@/components/sections/About";
import { Skills } from "@/components/sections/Skills";
import { Projects } from "@/components/sections/Projects";
import { Certifications } from "@/components/sections/Certifications";
import { Timeline } from "@/components/sections/Timeline";
import { Contact } from "@/components/sections/Contact";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Mohammed Tareq — Laravel Developer & Full-Stack Engineer" },
      {
        name: "description",
        content:
          "Cairo-based Laravel & Full-Stack engineer building enterprise platforms with Livewire, Filament, Redis & MySQL.",
      },
      { property: "og:title", content: "Mohammed Tareq — Laravel Developer" },
      {
        property: "og:description",
        content:
          "Enterprise Laravel platforms: e-commerce, POS, real-time systems with clean architecture.",
      },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <>
      <Hero />
      <About />
      <Skills />
      <Projects />
      <Certifications />
      <Timeline />
      <Contact />
    </>
  );
}
