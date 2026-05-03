"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Grasshopper } from "@/components/grasshopper";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

const STORY = [
  { w: "La" },
  { w: "esperanza", accent: true },
  { w: "es" },
  { w: "ese" },
  { w: "chapulín" },
  { w: "verde", accent: true },
  { w: "que" },
  { w: "trae" },
  { w: "buena" },
  { w: "suerte", accent: true },
  { w: "en" },
  { w: "Costa" },
  { w: "Rica." },
  { w: "Calma," },
  { w: "paciencia" },
  { w: "y" },
  { w: "cuidado", accent: true },
  { w: "—" },
  { w: "exactamente" },
  { w: "lo" },
  { w: "que" },
  { w: "sentimos" },
  { w: "por" },
  { w: "cada" },
  { w: "carro", accent: true },
  { w: "que" },
  { w: "nos" },
  { w: "confías.", accent: true },
];

export function EsperanzaStory() {
  const root = useRef<HTMLElement>(null);

  useEffect(() => {
    if (!root.current) return;
    const ctx = gsap.context(() => {
      gsap.from(".es-eyebrow > *", {
        y: 20,
        opacity: 0,
        duration: 0.8,
        stagger: 0.06,
        ease: "power3.out",
        scrollTrigger: { trigger: ".es-eyebrow", start: "top 85%" },
      });

      gsap.from(".es-bug", {
        scale: 0,
        rotate: -120,
        opacity: 0,
        duration: 1.4,
        ease: "back.out(1.5)",
        scrollTrigger: { trigger: ".es-bug-wrap", start: "top 80%" },
      });

      gsap.utils.toArray<HTMLElement>(".es-word").forEach((w) => {
        ScrollTrigger.create({
          trigger: w,
          start: "top 78%",
          end: "top 55%",
          scrub: true,
          onUpdate: (self) => {
            w.classList.toggle("is-on", self.progress > 0.3);
          },
        });
      });

      // Bug parallax + rotation
      gsap.to(".es-bug", {
        yPercent: -25,
        rotate: 12,
        ease: "none",
        scrollTrigger: {
          trigger: root.current,
          start: "top bottom",
          end: "bottom top",
          scrub: true,
        },
      });

      // Watermark slow horizontal
      gsap.to(".es-watermark", {
        xPercent: -8,
        ease: "none",
        scrollTrigger: {
          trigger: root.current,
          start: "top bottom",
          end: "bottom top",
          scrub: true,
        },
      });

      // Morphing blob slow rotation
      gsap.to(".es-blob", {
        rotate: 360,
        duration: 60,
        repeat: -1,
        ease: "none",
      });
    }, root);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={root}
      className="relative overflow-hidden mesh-beige py-32 lg:py-48"
    >
      {/* Watermark gigante */}
      <span
        aria-hidden
        className="es-watermark text-outline-emerald pointer-events-none absolute -bottom-10 left-0 select-none whitespace-nowrap font-display text-[28vw] italic leading-none opacity-20 lg:text-[20rem]"
      >
        esperanza
      </span>

      {/* Morphing blob decorativo */}
      <div
        aria-hidden
        className="es-blob morph-shape absolute -right-20 top-20 h-[420px] w-[420px] bg-gradient-to-br from-emerald/15 via-mint/20 to-transparent blur-3xl"
      />

      <div className="relative mx-auto max-w-[1400px] px-6 lg:px-16">
        <div className="es-eyebrow flex items-center gap-4">
          <span className="inline-block h-px w-12 bg-emerald" />
          <span className="tracking-eyebrow text-xs text-stone">
            Capítulo 02 — Por qué La Esperanza
          </span>
        </div>

        <div className="mt-12 grid grid-cols-12 items-start gap-10 lg:gap-16">
          {/* Big chapulín verde */}
          <div className="es-bug-wrap col-span-12 flex justify-center lg:col-span-4 lg:justify-start">
            <div className="es-bug relative">
              <div className="absolute inset-0 -z-10 scale-150 rounded-full bg-emerald/20 blur-3xl" />
              <span className="text-emerald animate-float drop-shadow-[0_0_40px_rgba(31,92,64,0.35)]">
                <Grasshopper className="h-56 w-56 lg:h-80 lg:w-80" variant="solid" />
              </span>
            </div>
          </div>

          {/* Story text — gris ink que se ilumina en emerald */}
          <div className="col-span-12 lg:col-span-8">
            <p className="font-display text-3xl leading-[1.25] text-ink/15 sm:text-4xl lg:text-[3.2rem] lg:leading-[1.18]">
              {STORY.map((item, i) => (
                <span
                  key={i}
                  className={`es-word inline-block transition-[color,text-shadow] duration-300 ${
                    item.accent ? "italic" : ""
                  }`}
                  style={{
                    marginRight: "0.25em",
                    color: "rgba(13, 20, 16, 0.18)",
                  }}
                  data-accent={item.accent ? "1" : "0"}
                >
                  {item.w}
                </span>
              ))}
            </p>

            <div className="mt-12 flex items-center gap-4">
              <span className="inline-block h-px w-8 bg-emerald/40" />
              <span className="tracking-eyebrow text-[10px] text-stone">
                — el equipo La Esperanza, Cartago
              </span>
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        :global(.es-word.is-on) {
          color: rgba(13, 20, 16, 0.95) !important;
        }
        :global(.es-word.is-on[data-accent="1"]) {
          color: var(--color-emerald) !important;
          text-shadow: 0 0 24px rgba(31, 92, 64, 0.25);
        }
      `}</style>
    </section>
  );
}
