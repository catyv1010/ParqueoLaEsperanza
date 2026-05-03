"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Grasshopper } from "@/components/grasshopper";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

const slides = [
  {
    n: "01",
    eyebrow: "Parqueo vigilado",
    title: "Tranquilidad las 24 horas.",
    body: "Cámaras, personal capacitado y entrada controlada. Tu carro descansa seguro, vos descansás tranquilo.",
    bg: "from-emerald-deep via-emerald to-emerald-2",
  },
  {
    n: "02",
    eyebrow: "Lavacar profesional",
    title: "Brillo que se nota.",
    body: "Espuma activa, enjuague a presión y secado a mano con productos premium que cuidan la pintura.",
    bg: "from-emerald via-emerald-2 to-teal",
  },
  {
    n: "03",
    eyebrow: "Detalle interior",
    title: "Cuidado en cada rincón.",
    body: "Aspirado profundo, limpieza de tapicería, tablero y vidrios. Tu carro vuelve a sentirse nuevo.",
    bg: "from-emerald-2 via-teal to-mint",
  },
];

export function Showcase() {
  const root = useRef<HTMLElement>(null);

  useEffect(() => {
    if (!root.current) return;
    const ctx = gsap.context(() => {
      const panels = gsap.utils.toArray<HTMLElement>(".showcase-panel");
      const total = panels.length;

      ScrollTrigger.create({
        trigger: root.current,
        start: "top top",
        end: () => `+=${window.innerHeight * total}`,
        pin: true,
        pinSpacing: true,
        anticipatePin: 1,
      });

      panels.forEach((panel, i) => {
        const start = i / total;
        const end = (i + 1) / total;

        if (i === 0) {
          gsap.set(panel, { opacity: 1, scale: 1 });
        } else {
          gsap.set(panel, { opacity: 0, scale: 1.02 });
        }

        ScrollTrigger.create({
          trigger: root.current,
          start: () => `top+=${start * window.innerHeight * total} top`,
          end: () => `top+=${end * window.innerHeight * total} top`,
          scrub: 0.6,
          onUpdate: (self) => {
            const p = self.progress;
            gsap.to(panel, {
              opacity: p < 0.5 ? p * 2 : 2 - p * 2,
              scale: 1 + (1 - Math.abs(0.5 - p) * 2) * 0.02,
              duration: 0.2,
              overwrite: "auto",
            });

            const textPanels =
              root.current?.querySelectorAll(".showcase-text");
            textPanels?.forEach((t, ti) => {
              const isActive = ti === i;
              gsap.to(t, {
                opacity: isActive ? 1 : 0,
                y: isActive ? 0 : 30,
                duration: 0.4,
                overwrite: "auto",
              });
            });

            const grasshoppers =
              root.current?.querySelectorAll(".showcase-bug");
            grasshoppers?.forEach((g, gi) => {
              gsap.to(g, {
                opacity: gi === i ? 0.5 : 0,
                rotate: gi === i ? 0 : -20,
                duration: 0.4,
                overwrite: "auto",
              });
            });

            const dots = root.current?.querySelectorAll(".showcase-dot");
            dots?.forEach((d, di) => {
              d.classList.toggle("is-active", di === i);
            });
          },
        });
      });

      const firstText = root.current?.querySelector(".showcase-text");
      if (firstText) gsap.set(firstText, { opacity: 1, y: 0 });
      gsap.set(
        gsap.utils.toArray(".showcase-text").slice(1) as HTMLElement[],
        { opacity: 0, y: 30 }
      );
      const firstBug = root.current?.querySelector(".showcase-bug");
      if (firstBug) gsap.set(firstBug, { opacity: 0.5, rotate: 0 });
      gsap.set(
        gsap.utils.toArray(".showcase-bug").slice(1) as HTMLElement[],
        { opacity: 0, rotate: -20 }
      );
    }, root);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={root}
      className="relative h-[100svh] overflow-hidden bg-emerald-deep"
    >
      {/* Color stack */}
      <div className="absolute inset-0">
        {slides.map((s, i) => (
          <div
            key={s.n}
            className={`showcase-panel absolute inset-0 bg-gradient-to-br ${s.bg}`}
          >
            {/* Decorative giant chapter number */}
            <span className="pointer-events-none absolute -right-10 -top-10 select-none font-display text-[40rem] leading-none text-bone/[0.05]">
              {s.n}
            </span>
            {/* Decorative grasshopper */}
            <span className="showcase-bug pointer-events-none absolute right-[8%] top-[30%] hidden text-mint/40 lg:block">
              <Grasshopper className="h-72 w-72 xl:h-96 xl:w-96" />
            </span>
          </div>
        ))}
      </div>

      {/* Text */}
      <div className="relative z-10 mx-auto flex h-full max-w-[1500px] flex-col justify-center px-6 lg:px-16">
        <div className="mb-10 flex items-center gap-4 text-bone">
          <span className="inline-block h-px w-12 bg-mint" />
          <span className="tracking-eyebrow text-xs text-bone/85">
            Capítulo 02 — La promesa
          </span>
        </div>

        <div className="relative max-w-2xl">
          {slides.map((s) => (
            <div
              key={s.n}
              className="showcase-text absolute inset-0 will-change-[opacity,transform]"
              style={{ position: "absolute", top: 0, left: 0 }}
            >
              <div className="flex items-center gap-3 text-bone/85">
                <span className="font-display text-2xl italic text-mint">
                  {s.n}
                </span>
                <span className="tracking-eyebrow text-xs">{s.eyebrow}</span>
              </div>
              <h2 className="mt-6 font-display text-[12vw] leading-[0.95] text-bone sm:text-[7vw] lg:text-7xl xl:text-8xl">
                {s.title}
              </h2>
              <p className="mt-8 max-w-lg text-base leading-relaxed text-bone/85 lg:text-lg">
                {s.body}
              </p>
            </div>
          ))}

          {/* Spacer */}
          <div className="invisible">
            <div className="h-6" />
            <h2 className="mt-6 font-display text-[12vw] leading-[0.95] sm:text-[7vw] lg:text-7xl xl:text-8xl">
              Spacer text spacer text
            </h2>
            <p className="mt-8 max-w-lg text-base lg:text-lg">
              Lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem
              ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum.
            </p>
          </div>
        </div>

        {/* Progress dots */}
        <div className="mt-12 flex items-center gap-3">
          {slides.map((s, i) => (
            <div
              key={s.n}
              className={`showcase-dot relative h-1 w-10 overflow-hidden bg-bone/20 transition-colors ${
                i === 0 ? "is-active" : ""
              }`}
            >
              <span className="dot-fill absolute inset-0 origin-left scale-x-0 bg-mint transition-transform duration-700" />
            </div>
          ))}
        </div>
      </div>

      <style jsx>{`
        :global(.showcase-dot.is-active .dot-fill) {
          transform: scaleX(1);
        }
      `}</style>
    </section>
  );
}
