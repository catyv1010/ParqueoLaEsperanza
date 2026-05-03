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

      // Word fill on scroll
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

      // Bug parallax
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

      // Watermark word slow scroll
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
    }, root);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={root}
      className="relative overflow-hidden bg-night py-32 lg:py-48"
    >
      {/* Background watermark */}
      <span
        aria-hidden
        className="es-watermark pointer-events-none absolute -bottom-10 left-0 select-none whitespace-nowrap font-display text-[28vw] italic leading-none text-mint/[0.04] lg:text-[20rem]"
      >
        esperanza
      </span>

      {/* Mesh blob */}
      <div
        aria-hidden
        className="absolute right-0 top-1/4 h-[500px] w-[500px] rounded-full bg-emerald/15 blur-[160px]"
      />

      <div className="relative mx-auto max-w-[1400px] px-6 lg:px-16">
        <div className="es-eyebrow flex items-center gap-4">
          <span className="inline-block h-px w-12 bg-mint" />
          <span className="tracking-eyebrow text-xs text-mint/70">
            Capítulo 02 — Por qué La Esperanza
          </span>
        </div>

        <div className="mt-12 grid grid-cols-12 items-start gap-10 lg:gap-16">
          {/* Big floating chapulín */}
          <div className="es-bug-wrap col-span-12 flex justify-center lg:col-span-4 lg:justify-start">
            <div className="es-bug relative">
              <div className="absolute inset-0 -z-10 scale-150 rounded-full bg-mint/15 blur-3xl" />
              <span className="text-mint animate-float drop-shadow-[0_0_40px_rgba(116,198,157,0.4)]">
                <Grasshopper className="h-56 w-56 lg:h-80 lg:w-80" />
              </span>
            </div>
          </div>

          {/* Story text */}
          <div className="col-span-12 lg:col-span-8">
            <p className="font-display text-3xl leading-[1.25] sm:text-4xl lg:text-[3.2rem] lg:leading-[1.18]">
              {STORY.map((item, i) => (
                <span
                  key={i}
                  className={`es-word scroll-fill-word ${
                    item.accent ? "is-accent italic" : ""
                  }`}
                  style={{ marginRight: "0.25em" }}
                >
                  {item.w}
                </span>
              ))}
            </p>

            <div className="mt-12 flex items-center gap-4">
              <span className="inline-block h-px w-8 bg-mint/40" />
              <span className="tracking-eyebrow text-[10px] text-mint/60">
                — el equipo La Esperanza, Cartago
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
