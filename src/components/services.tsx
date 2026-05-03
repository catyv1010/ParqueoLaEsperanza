"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Grasshopper } from "@/components/grasshopper";
import { Tilt } from "@/components/tilt";
import { Magnetic } from "@/components/magnetic";
import { CountUp } from "@/components/count-up";
import { WA } from "@/lib/links";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

export function Services() {
  const root = useRef<HTMLElement>(null);

  useEffect(() => {
    if (!root.current) return;
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

      gsap.utils.toArray<HTMLElement>(".svc-card").forEach((card, i) => {
        gsap.from(card, {
          opacity: 0,
          y: 80,
          rotate: i === 0 ? -3 : 3,
          duration: 1.2,
          ease: "expo.out",
          scrollTrigger: { trigger: card, start: "top 85%" },
        });

        // Grasshopper inside each card
        gsap.from(card.querySelector(".svc-bug"), {
          scale: 0,
          rotate: -120,
          opacity: 0,
          duration: 1.2,
          ease: "back.out(1.6)",
          scrollTrigger: { trigger: card, start: "top 80%" },
        });
      });
    }, root);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={root}
      id="servicios"
      className="relative overflow-hidden py-24 lg:py-32"
    >
      <div className="mx-auto max-w-[1500px] px-6 lg:px-16">
        <div className="grid grid-cols-12 items-end gap-6">
          <div className="svc-eyebrow col-span-12 flex items-center gap-4 lg:col-span-6">
            <span className="inline-block h-px w-12 bg-emerald" />
            <span className="tracking-eyebrow text-xs text-stone">
              Capítulo 03 — Servicios
            </span>
          </div>
          <div className="col-span-12 hidden text-right lg:col-span-6 lg:block">
            <span className="tracking-eyebrow text-xs text-stone">
              Simple, claro, honesto
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

        {/* TWO BIG cards */}
        <div className="mt-16 grid grid-cols-1 gap-8 md:grid-cols-2">
          {/* PARQUEO */}
          <Tilt max={6}>
            <article className="svc-card group relative flex aspect-[4/5] flex-col justify-between overflow-hidden rounded-3xl bg-gradient-to-br from-emerald-deep via-emerald to-emerald-2 p-10 text-bone shadow-xl shadow-emerald-deep/25 transition-shadow hover:shadow-2xl lg:aspect-[5/6] lg:p-14">
              <span className="svc-bug pointer-events-none absolute -right-10 -top-10 text-mint/25 transition-transform duration-700 group-hover:rotate-12 group-hover:scale-110">
                <Grasshopper className="h-72 w-72 lg:h-96 lg:w-96" />
              </span>

              <div className="relative flex items-start justify-between">
                <div className="font-display text-6xl italic text-mint lg:text-7xl">
                  01
                </div>
                <div className="text-right">
                  <div className="font-display text-4xl text-bone lg:text-5xl">
                    <span>₡</span>
                    <CountUp to={1000} format="comma" />
                  </div>
                  <div className="text-[10px] tracking-eyebrow text-mint">
                    por hora
                  </div>
                </div>
              </div>

              <div className="relative">
                <div className="text-[10px] tracking-eyebrow text-mint">
                  vigilado 24/7
                </div>
                <h3 className="mt-3 font-display text-6xl leading-tight lg:text-7xl">
                  Parqueo
                </h3>
                <p className="mt-5 max-w-md text-base leading-relaxed text-bone/85 lg:text-lg">
                  Cámaras, personal capacitado y entrada controlada. Por hora.
                  Para planes diarios o mensuales, consultá precio por
                  WhatsApp.
                </p>
                <Magnetic
                  href={WA}
                  target="_blank"
                  rel="noopener noreferrer"
                  strength={0.35}
                  className="mt-8 inline-flex items-center gap-2 text-xs font-medium text-mint underline decoration-2 underline-offset-4 transition-opacity hover:text-bone"
                >
                  Consultar plan diario o mensual →
                </Magnetic>
              </div>
            </article>
          </Tilt>

          {/* LAVADO */}
          <Tilt max={6}>
            <article className="svc-card group relative flex aspect-[4/5] flex-col justify-between overflow-hidden rounded-3xl bg-gradient-to-br from-mint via-teal to-emerald-2 p-10 text-emerald-deep shadow-xl shadow-emerald-deep/25 transition-shadow hover:shadow-2xl lg:aspect-[5/6] lg:p-14">
              <span className="svc-bug pointer-events-none absolute -right-10 -top-10 text-emerald-deep/15 transition-transform duration-700 group-hover:rotate-12 group-hover:scale-110">
                <Grasshopper className="h-72 w-72 lg:h-96 lg:w-96" />
              </span>

              <div className="relative flex items-start justify-between">
                <div className="font-display text-6xl italic text-emerald-deep lg:text-7xl">
                  02
                </div>
                <div className="text-right">
                  <div className="font-display text-3xl text-emerald-deep lg:text-4xl">
                    Desde
                  </div>
                  <div className="font-display text-4xl text-emerald-deep lg:text-5xl">
                    <span>₡</span>
                    <CountUp to={6000} format="comma" />
                  </div>
                </div>
              </div>

              <div className="relative">
                <div className="text-[10px] tracking-eyebrow text-emerald-deep/80">
                  espuma · presión · cariño
                </div>
                <h3 className="mt-3 font-display text-6xl leading-tight lg:text-7xl">
                  Lavado
                </h3>
                <p className="mt-5 max-w-md text-base leading-relaxed text-emerald-deep/85 lg:text-lg">
                  Espuma activa, enjuague a presión y secado a mano. Cuidamos
                  la pintura como si fuera nuestra. Tarifas desde ₡6,000 según
                  el vehículo.
                </p>
                <Magnetic
                  href={WA}
                  target="_blank"
                  rel="noopener noreferrer"
                  strength={0.35}
                  className="mt-8 inline-flex items-center gap-2 text-xs font-medium text-emerald-deep underline decoration-2 underline-offset-4 transition-opacity hover:text-emerald"
                >
                  Cotizá tu vehículo →
                </Magnetic>
              </div>
            </article>
          </Tilt>
        </div>

        {/* Closing CTA */}
        <div className="mt-16 flex flex-col items-start justify-between gap-6 rounded-3xl bg-gradient-to-br from-emerald-deep via-emerald to-emerald-2 p-10 text-bone shadow-xl shadow-emerald-deep/20 sm:flex-row sm:items-center lg:p-12">
          <div>
            <span className="tracking-eyebrow text-xs text-mint">
              Tarifas y planes
            </span>
            <p className="mt-3 max-w-xl font-display text-3xl italic leading-tight text-bone lg:text-4xl">
              ¿Plan mensual, tarifa para empresa o cotizar tu lavado?
            </p>
          </div>
          <Magnetic
            href={WA}
            target="_blank"
            rel="noopener noreferrer"
            strength={0.45}
            className="btn-magnet group inline-flex shrink-0 items-center gap-3 rounded-full bg-mint px-8 py-4 text-sm font-medium text-emerald-deep transition-colors hover:bg-bone"
          >
            Consultar por WhatsApp
            <svg
              viewBox="0 0 24 24"
              className="h-4 w-4 transition-transform duration-500 group-hover:translate-x-1"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
            >
              <path d="M5 12h14M13 5l7 7-7 7" />
            </svg>
          </Magnetic>
        </div>
      </div>
    </section>
  );
}
