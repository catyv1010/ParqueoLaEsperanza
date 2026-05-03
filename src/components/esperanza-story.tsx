"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

const STORY = [
  { w: "La" },
  { w: "esperanza", accent: true },
  { w: "es" },
  { w: "ese" },
  { w: "símbolo" },
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

      // Watermark slow horizontal
      gsap.to(".es-watermark", {
        xPercent: -10,
        ease: "none",
        scrollTrigger: {
          trigger: root.current,
          start: "top bottom",
          end: "bottom top",
          scrub: true,
        },
      });

      // Decorative line draw on scroll
      gsap.fromTo(
        ".es-line",
        { scaleX: 0 },
        {
          scaleX: 1,
          ease: "expo.inOut",
          duration: 1.4,
          scrollTrigger: { trigger: ".es-line", start: "top 85%" },
        }
      );
    }, root);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={root}
      className="relative overflow-hidden mesh-beige py-32 lg:py-44"
    >
      {/* Watermark gigante outline emerald */}
      <span
        aria-hidden
        className="es-watermark text-outline-emerald pointer-events-none absolute -bottom-6 left-0 select-none whitespace-nowrap font-display text-[28vw] italic leading-none opacity-25 lg:text-[20rem]"
      >
        esperanza
      </span>

      {/* Decorative blob */}
      <div
        aria-hidden
        className="absolute -right-20 top-20 h-[420px] w-[420px] rounded-full bg-emerald/10 blur-[160px]"
      />

      <div className="relative mx-auto max-w-[1200px] px-6 lg:px-12">
        <div className="es-eyebrow flex items-center gap-4">
          <span className="es-line inline-block h-px w-12 bg-emerald origin-left" />
          <span className="tracking-eyebrow text-xs text-stone">
            Capítulo 02 — Por qué La Esperanza
          </span>
        </div>

        <div className="mt-16 max-w-4xl">
          <p className="font-display text-2xl leading-[1.32] sm:text-3xl lg:text-[2.6rem] lg:leading-[1.25]">
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

          <div className="mt-14 flex items-center gap-4">
            <span className="inline-block h-px w-8 bg-emerald/40" />
            <span className="tracking-eyebrow text-[10px] text-stone">
              — el equipo La Esperanza, Cartago
            </span>
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
