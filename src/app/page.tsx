import { Navbar } from "@/components/navbar";
import { Hero } from "@/components/hero";
import { EsperanzaStory } from "@/components/esperanza-story";
import { Promesa } from "@/components/promesa";
import { Services } from "@/components/services";
import { Gallery } from "@/components/gallery";
import { Contact } from "@/components/contact";
import { Footer } from "@/components/footer";

export default function Home() {
  return (
    <main className="relative">
      <Navbar />
      <Hero />
      <EsperanzaStory />
      <Promesa />
      <Services />
      <section id="galeria">
        <Gallery />
      </section>
      <Contact />
      <Footer />
    </main>
  );
}
