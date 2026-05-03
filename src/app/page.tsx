import { Navbar } from "@/components/navbar";
import { Hero } from "@/components/hero";
import { EsperanzaStory } from "@/components/esperanza-story";
import { Services } from "@/components/services";
import { Gallery } from "@/components/gallery";
import { Contact } from "@/components/contact";
import { Footer } from "@/components/footer";

export default function Home() {
  return (
    <main className="relative bg-night">
      <Navbar />
      <Hero />
      <EsperanzaStory />
      <Services />
      <section id="galeria">
        <Gallery />
      </section>
      <Contact />
      <Footer />
    </main>
  );
}
