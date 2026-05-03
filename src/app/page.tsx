import { Navbar } from "@/components/navbar";
import { Hero } from "@/components/hero";
import { EsperanzaStory } from "@/components/esperanza-story";
import { Services } from "@/components/services";
import { Gallery } from "@/components/gallery";
import { Contact } from "@/components/contact";
import { Footer } from "@/components/footer";
import { SectionDivider } from "@/components/section-divider";
import { MarqueeDivider } from "@/components/marquee-divider";

export default function Home() {
  return (
    <main className="relative bg-night">
      <Navbar />

      {/* 1. HERO — VERDE nocturno */}
      <Hero />

      {/* Transición verde → beige */}
      <SectionDivider variant="night-to-cream" />

      {/* 2. STORY — BEIGE */}
      <EsperanzaStory />

      {/* Marquee divider en beige */}
      <MarqueeDivider theme="cream" text="La Esperanza" />

      {/* Transición beige → verde */}
      <SectionDivider variant="cream-to-night" />

      {/* 3. SERVICES — VERDE nocturno */}
      <Services />

      {/* Transición verde → beige */}
      <SectionDivider variant="night-to-cream" />

      {/* 4. GALLERY — BEIGE */}
      <section id="galeria">
        <Gallery />
      </section>

      {/* Marquee divider en beige */}
      <MarqueeDivider theme="cream" text="Te esperamos" reverse />

      {/* Transición beige → verde */}
      <SectionDivider variant="cream-to-night" />

      {/* 5. CONTACT — VERDE nocturno */}
      <Contact />

      {/* Marquee divider en verde — antes del footer */}
      <MarqueeDivider theme="night" text="La Esperanza" />

      {/* 6. FOOTER — VERDE */}
      <Footer />
    </main>
  );
}
