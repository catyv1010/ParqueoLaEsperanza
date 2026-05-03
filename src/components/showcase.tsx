"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

const slides = [
  {
    n: "01",
    eyebrow: "Parqueo seguro",
    title: "Tranquilidad las 24 horas.",
    body: "Cámaras de seguridad, personal capacitado y entrada controlada. Tu vehículo descansa, vos descansás.",
    img: "https://images.unsplash.com/photo-1573348722427-f1d6819fdf98?w=1800&q=85&auto=format&fit=crop",
  },
  {
    n: "02",
    eyebrow: "Lavado profesional",
    title: "Brillo que se nota.",
    body: "Espuma activa, enjuague a presión y secado a mano con productos premium que cuidan la pintura.",
    img: "https://images.unsplash.com/photo-1607861716497-e65ab29fc7ac?w=1800&q=85&auto=format&fit=crop",
  },
  {
    n: "03",
    eyebrow: "Protección cerámica",
    title: "Cuidado que dura meses.",
    body: "Sellado cerámico que repele agua, polvo y rayos UV. Tu auto luce como nuevo por más tiempo.",
    img: "https://images.unsplash.com/photo-1605559424843-9e4c228bf1c2?w=1800&q=85&auto=format&fit=crop",
  },
];

export function Showcase() {
  const root = useRef<HTMLElement>(null);

  useEffect(() => {
    if (!root.current) return;
    const ctx = gsap.context(() => {
      const panels = gsap.utils.toArray<HTMLElement>(".showcase-panel");
      const total = panels.length;

      // Pin section for total scroll length
      ScrollTrigger.create({
        trigger: root.current,
        start: "top top",
        end: () => `+=${window.innerHeight * total}`,
        pin: true,
        pinSpacing: true,
        anticipatePin: 1,
      });

      // Cross-fade panels by scroll progress
      panels.forEach((panel, i) => {
        const start = i / total;
        const end = (i + 1) / total;

        if (i === 0) {
          gsap.set(panel, { opacity: 1, scale: 1 });
        } else {
          gsap.set(panel, { opacity: 0, scale: 1.05 });
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
              scale: 1 + (1 - Math.abs(0.5 - p) * 2) * 0.04,
              duration: 0.2,
              overwrite: "auto",
            });

            // Update active text
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

            // Update progress dots
            const dots = root.current?.querySelectorAll(".showcase-dot");
            dots?.forEach((d, di) => {
              d.classList.toggle("is-active", di === i);
            });
          },
        });
      });

      // Initial first text active
      const firstText = root.current?.querySelector(".showcase-text");
      if (firstText) gsap.set(firstText, { opacity: 1, y: 0 });
      gsap.set(
        gsap.utils.toArray(".showcase-text").slice(1) as HTMLElement[],
        { opacity: 0, y: 30 }
      );
    }, root);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={root}
      className="relative h-[100svh] overflow-hidden bg-ink"
    >
      {/* Image stack */}
      <div className="absolute inset-0">
        {slides.map((s, i) => (
          <div
            key={s.n}
            className="showcase-panel absolute inset-0 will-change-[opacity,transform]"
          >
            <Image
              src={s.img}
              alt={s.title}
              fill
              sizes="100vw"
              className="object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-ink/85 via-ink/40 to-ink/20" />
            <div className="absolute inset-0 bg-gradient-to-t from-ink/60 via-transparent to-transparent" />
          </div>
        ))}
      </div>

      {/* Text stack */}
      <div className="relative z-10 mx-auto flex h-full max-w-[1500px] flex-col justify-center px-6 lg:px-16">
        <div className="mb-10 flex items-center gap-4 text-bone">
          <span className="inline-block h-px w-12 bg-terra" />
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
              <div className="flex items-center gap-3 text-bone/75">
                <span className="font-display text-2xl italic text-terra-2">
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

          {/* Spacer to give the first child a height */}
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
              <span className="dot-fill absolute inset-0 origin-left scale-x-0 bg-terra transition-transform duration-700" />
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
