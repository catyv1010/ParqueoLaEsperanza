"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Grasshopper } from "@/components/grasshopper";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

const promesas = [
  {
    n: "01",
    eyebrow: "Parqueo vigilado",
    title: "Tranquilidad las 24 horas.",
    body: "Cámaras, personal capacitado y entrada controlada. Tu carro descansa seguro, vos descansás tranquilo.",
    bg: "from-emerald-deep via-emerald to-emerald-2",
    align: "left" as const,
  },
  {
    n: "02",
    eyebrow: "Lavacar profesional",
    title: "Brillo que se nota.",
    body: "Espuma activa, enjuague a presión y secado a mano con productos premium que cuidan la pintura.",
    bg: "from-emerald via-emerald-2 to-teal",
    align: "right" as const,
  },
  {
    n: "03",
    eyebrow: "Hecho con cariño tico",
    title: "Atención que se siente.",
    body: "Más de 10 años cuidando carros en Cartago. Cada cliente es parte de la familia.",
    bg: "from-emerald-2 via-teal to-mint",
    align: "left" as const,
  },
];

export function Promesa() {
  const root = useRef<HTMLElement>(null);

  useEffect(() => {
    if (!root.current) return;
    const ctx = gsap.context(() => {
      gsap.utils.toArray<HTMLElement>(".promesa-panel").forEach((p, i) => {
        const fromX = i % 2 === 0 ? -80 : 80;

        // Panel slide-in
        gsap.from(p, {
          opacity: 0,
          x: fromX,
          duration: 1.2,
          ease: "expo.out",
          scrollTrigger: { trigger: p, start: "top 80%" },
        });

        // Title chars stagger
        gsap.from(p.querySelectorAll(".promesa-char"), {
          yPercent: 110,
          opacity: 0,
          rotate: 5,
          duration: 1.1,
          stagger: 0.022,
          ease: "expo.out",
          scrollTrigger: { trigger: p, start: "top 75%" },
        });

        // Grasshopper bounce
        gsap.from(p.querySelector(".promesa-bug"), {
          scale: 0,
          rotate: -90,
          opacity: 0,
          duration: 1.2,
          ease: "back.out(1.5)",
          scrollTrigger: { trigger: p, start: "top 75%" },
        });

        // Big number reveal
        gsap.from(p.querySelector(".promesa-bigN"), {
          yPercent: 30,
          opacity: 0,
          duration: 1.4,
          ease: "expo.out",
          scrollTrigger: { trigger: p, start: "top 80%" },
        });

        // Body text
        gsap.from(p.querySelector(".promesa-body"), {
          y: 20,
          opacity: 0,
          duration: 0.9,
          ease: "power3.out",
          delay: 0.3,
          scrollTrigger: { trigger: p, start: "top 75%" },
        });

        // Bug parallax on scroll past
        gsap.to(p.querySelector(".promesa-bug"), {
          yPercent: -30,
          rotate: 8,
          ease: "none",
          scrollTrigger: {
            trigger: p,
            start: "top bottom",
            end: "bottom top",
            scrub: true,
          },
        });
      });
    }, root);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={root} className="relative">
      {promesas.map((p) => (
        <div
          key={p.n}
          className={`promesa-panel relative flex min-h-[80vh] items-center overflow-hidden bg-gradient-to-br ${p.bg} py-24 lg:min-h-screen lg:py-32`}
        >
          {/* Giant chapter number watermark */}
          <span className="promesa-bigN pointer-events-none absolute -right-12 top-1/2 -translate-y-1/2 select-none font-display text-[35rem] leading-none text-bone/[0.05] sm:text-[45rem]">
            {p.n}
          </span>

          {/* Grasshopper deco */}
          <span
            className={`promesa-bug pointer-events-none absolute hidden text-mint/40 lg:block ${
              p.align === "left"
                ? "right-[8%] top-[20%]"
                : "left-[8%] bottom-[20%]"
            }`}
          >
            <Grasshopper className="h-64 w-64 xl:h-80 xl:w-80" />
          </span>

          {/* Content */}
          <div className="relative z-10 mx-auto w-full max-w-[1500px] px-6 lg:px-16">
            <div
              className={`max-w-2xl ${
                p.align === "right" ? "ml-auto text-right" : ""
              }`}
            >
              <div
                className={`flex items-center gap-3 text-bone/85 ${
                  p.align === "right" ? "justify-end" : ""
                }`}
              >
                <span className="font-display text-2xl italic text-mint">
                  {p.n}
                </span>
                <span className="tracking-eyebrow text-xs">{p.eyebrow}</span>
              </div>

              <h2 className="mt-6 font-display text-[12vw] leading-[0.95] text-bone sm:text-[7vw] lg:text-7xl xl:text-8xl">
                {p.title.split("").map((c, i) => (
                  <span key={i} className="char-mask inline-block">
                    <span className="promesa-char inline-block">
                      {c === " " ? " " : c}
                    </span>
                  </span>
                ))}
              </h2>

              <p className="promesa-body mt-8 max-w-lg text-base leading-relaxed text-bone/85 lg:text-lg">
                {p.body}
              </p>
            </div>
          </div>
        </div>
      ))}
    </section>
  );
}
