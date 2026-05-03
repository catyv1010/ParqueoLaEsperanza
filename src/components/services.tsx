"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Grasshopper } from "@/components/grasshopper";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

const services = [
  {
    n: "01",
    title: "Parqueo",
    sub: "vigilado 24/7",
    desc: "Cámaras y personal capacitado. Por hora, día, noche o mensualidad.",
    price: "₡1,000",
    unit: "/ hora",
    accent: "bg-emerald text-bone",
    accentText: "text-mint",
  },
  {
    n: "02",
    title: "Lavado Exterior",
    sub: "espuma + presión",
    desc: "Espuma activa, enjuague a presión y secado a mano. Cuida la pintura.",
    price: "₡4,000",
    unit: "",
    accent: "bg-cream text-emerald-deep",
    accentText: "text-emerald",
  },
  {
    n: "03",
    title: "Lavado Interior",
    sub: "detalle profundo",
    desc: "Aspirado, tapicería, tablero y vidrios impecables. Aroma a elegir.",
    price: "₡5,500",
    unit: "",
    accent: "bg-emerald-deep text-bone",
    accentText: "text-mint",
  },
  {
    n: "04",
    title: "Premium Cerámico",
    sub: "protección por meses",
    desc: "Encerado, pulido y sellado cerámico que repele agua y polvo.",
    price: "₡18,000",
    unit: "",
    accent: "bg-mint text-emerald-deep",
    accentText: "text-emerald-deep",
  },
  {
    n: "05",
    title: "Lavado de Motor",
    sub: "desengrase técnico",
    desc: "Limpieza profesional del motor con productos especializados.",
    price: "₡8,000",
    unit: "",
    accent: "bg-emerald-2 text-bone",
    accentText: "text-mint",
  },
  {
    n: "06",
    title: "Express",
    sub: "30 minutos",
    desc: "Lavado completo rápido sin perder calidad. Cuando andás corriendo.",
    price: "₡3,500",
    unit: "",
    accent: "bg-paper text-emerald-deep",
    accentText: "text-emerald",
  },
];

export function Services() {
  const root = useRef<HTMLElement>(null);
  const track = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!root.current || !track.current) return;
    const ctx = gsap.context(() => {
      gsap.from(".svc-eyebrow > *", {
        y: 20,
        opacity: 0,
        duration: 0.8,
        stagger: 0.06,
        ease: "power3.out",
        scrollTrigger: { trigger: ".svc-eyebrow", start: "top 85%" },
      });

      gsap.from(".svc-title .char", {
        yPercent: 110,
        rotate: 6,
        duration: 1.1,
        stagger: 0.02,
        ease: "expo.out",
        scrollTrigger: { trigger: ".svc-title", start: "top 80%" },
      });

      const isDesktop = window.matchMedia("(min-width: 1024px)").matches;

      if (isDesktop && track.current && root.current) {
        const totalWidth = track.current.scrollWidth - window.innerWidth;
        gsap.to(track.current, {
          x: -totalWidth,
          ease: "none",
          scrollTrigger: {
            trigger: root.current,
            start: "top top",
            end: () => `+=${totalWidth}`,
            scrub: 0.5,
            pin: true,
            anticipatePin: 1,
            invalidateOnRefresh: true,
          },
        });
      } else {
        gsap.utils.toArray<HTMLElement>(".svc-card").forEach((card) => {
          gsap.from(card, {
            opacity: 0,
            y: 40,
            duration: 0.9,
            ease: "power3.out",
            scrollTrigger: { trigger: card, start: "top 88%" },
          });
        });
      }
    }, root);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={root}
      id="servicios"
      className="relative overflow-hidden bg-cream py-24 lg:h-screen lg:py-0"
    >
      {/* Header */}
      <div className="relative z-10 mx-auto max-w-[1500px] px-6 pt-12 lg:absolute lg:left-1/2 lg:top-12 lg:w-full lg:-translate-x-1/2 lg:px-16">
        <div className="grid grid-cols-12 items-end gap-6">
          <div className="svc-eyebrow col-span-12 flex items-center gap-4 lg:col-span-6">
            <span className="inline-block h-px w-12 bg-emerald" />
            <span className="tracking-eyebrow text-xs text-stone">
              Capítulo 03 — Servicios
            </span>
          </div>
          <div className="col-span-12 hidden text-right lg:col-span-6 lg:block">
            <span className="tracking-eyebrow text-xs text-stone">
              06 servicios — desliza →
            </span>
          </div>

          <h2 className="svc-title col-span-12 mt-6 font-display text-[12vw] leading-[0.92] text-ink sm:text-[8vw] lg:mt-8 lg:text-7xl xl:text-8xl">
            <span className="char-mask">
              {"Cuidamos".split("").map((c, i) => (
                <span key={i} className="char">
                  {c}
                </span>
              ))}
            </span>{" "}
            <span className="char-mask italic text-stone">
              {"cada".split("").map((c, i) => (
                <span key={i} className="char">
                  {c}
                </span>
              ))}
            </span>{" "}
            <span className="char-mask italic text-emerald">
              {"detalle.".split("").map((c, i) => (
                <span key={i} className="char">
                  {c}
                </span>
              ))}
            </span>
          </h2>
        </div>
      </div>

      {/* Track */}
      <div className="lg:flex lg:h-screen lg:items-center">
        <div
          ref={track}
          className="flex flex-col gap-6 px-6 pt-10 lg:flex-row lg:gap-8 lg:px-0 lg:pl-[10vw] lg:pr-[40vw] lg:pt-40"
        >
          {services.map((s) => (
            <article
              key={s.n}
              className={`svc-card group relative flex shrink-0 flex-col justify-between overflow-hidden rounded-3xl p-8 shadow-lg shadow-emerald-deep/10 transition-transform duration-500 hover:-translate-y-1 lg:h-[60vh] lg:w-[42vw] lg:max-w-[640px] lg:p-12 ${s.accent}`}
            >
              {/* Decorative grasshopper watermark */}
              <span
                className={`pointer-events-none absolute -right-6 -top-6 opacity-15 ${s.accentText}`}
              >
                <Grasshopper className="h-44 w-44 lg:h-64 lg:w-64" />
              </span>

              {/* Top: number + price */}
              <div className="relative flex items-start justify-between">
                <div className={`font-display text-5xl ${s.accentText}`}>
                  {s.n}
                </div>
                <div className="text-right">
                  <div className="font-display text-3xl">{s.price}</div>
                  {s.unit && (
                    <div className="text-[10px] tracking-eyebrow opacity-70">
                      {s.unit}
                    </div>
                  )}
                </div>
              </div>

              {/* Bottom: title + desc */}
              <div className="relative mt-12">
                <div
                  className={`text-[10px] tracking-eyebrow opacity-80 ${s.accentText}`}
                >
                  {s.sub}
                </div>
                <h3 className="mt-2 font-display text-5xl leading-tight lg:text-6xl">
                  {s.title}
                </h3>
                <p className="mt-4 max-w-sm text-sm leading-relaxed opacity-85 lg:text-base">
                  {s.desc}
                </p>
              </div>
            </article>
          ))}

          {/* End-of-track CTA */}
          <div className="flex shrink-0 flex-col items-start justify-center gap-6 rounded-3xl bg-gradient-to-br from-emerald-deep via-emerald to-emerald-2 p-10 text-bone shadow-lg shadow-emerald-deep/20 lg:h-[60vh] lg:w-[36vw] lg:max-w-[500px] lg:p-12">
            <span className="tracking-eyebrow text-xs text-mint">
              ¿Necesitás más?
            </span>
            <p className="font-display text-3xl italic leading-tight text-bone lg:text-4xl">
              Plan mensual o tarifa para empresa.
            </p>
            <a
              href="#contacto"
              className="btn-magnet inline-flex items-center gap-3 rounded-full bg-mint px-7 py-4 text-sm font-medium text-emerald-deep transition-colors hover:bg-bone"
            >
              Cotizar
              <svg
                viewBox="0 0 24 24"
                className="h-4 w-4"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
              >
                <path d="M5 12h14M13 5l7 7-7 7" />
              </svg>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
