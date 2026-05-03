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

      {/* verde → beige */}
      <SectionDivider variant="night-to-cream" />

      {/* 2. STORY — BEIGE */}
      <EsperanzaStory />

      <MarqueeDivider theme="cream" text="La Esperanza" />

      {/* beige → verde */}
      <SectionDivider variant="cream-to-night" />

      {/* 3. SERVICES — VERDE nocturno */}
      <Services />

      {/* verde → beige */}
      <SectionDivider variant="night-to-cream" />

      {/* 4. GALLERY — BEIGE */}
      <section id="galeria">
        <Gallery />
      </section>

      <MarqueeDivider theme="cream" text="Te esperamos" reverse />

      {/* 5. CONTACT — BEIGE (claro, elegante) */}
      <Contact />

      {/* beige → verde para footer */}
      <SectionDivider variant="cream-to-night" />

      {/* 6. FOOTER — VERDE */}
      <Footer />
    </main>
  );
}
