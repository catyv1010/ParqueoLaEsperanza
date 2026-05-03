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
          rotate: i === 0 ? -2 : 2,
          duration: 1.2,
          ease: "expo.out",
          scrollTrigger: { trigger: card, start: "top 85%" },
        });

        gsap.from(card.querySelector(".svc-bug"), {
          scale: 0,
          rotate: -120,
          opacity: 0,
          duration: 1.2,
          ease: "back.out(1.6)",
          scrollTrigger: { trigger: card, start: "top 80%" },
        });

        gsap.from(card.querySelectorAll(".svc-detail"), {
          opacity: 0,
          x: -20,
          duration: 0.6,
          stagger: 0.08,
          ease: "power3.out",
          scrollTrigger: { trigger: card, start: "top 75%" },
        });
      });

      gsap.from(".svc-cta", {
        opacity: 0,
        y: 40,
        duration: 1,
        ease: "expo.out",
        scrollTrigger: { trigger: ".svc-cta", start: "top 85%" },
      });
    }, root);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={root}
      id="servicios"
      className="relative overflow-hidden bg-night py-28 lg:py-40"
    >
      {/* Background atmosphere */}
      <div
        aria-hidden
        className="absolute -left-32 top-1/3 h-[500px] w-[500px] rounded-full bg-emerald/20 blur-[180px]"
      />
      <div
        aria-hidden
        className="absolute -right-32 bottom-0 h-[420px] w-[420px] rounded-full bg-mint/10 blur-[180px]"
      />

      <div className="relative mx-auto max-w-[1500px] px-6 lg:px-16">
        <div className="grid grid-cols-12 items-end gap-6">
          <div className="svc-eyebrow col-span-12 flex items-center gap-4 lg:col-span-6">
            <span className="inline-block h-px w-12 bg-mint" />
            <span className="tracking-eyebrow text-xs text-mint/70">
              Capítulo 03 — Servicios
            </span>
          </div>
          <div className="col-span-12 hidden text-right lg:col-span-6 lg:block">
            <span className="tracking-eyebrow text-xs text-mint/50">
              Simple · claro · honesto
            </span>
          </div>

          <h2 className="svc-title col-span-12 mt-6 font-display text-[12vw] leading-[0.92] text-bone sm:text-[8vw] lg:mt-8 lg:text-7xl xl:text-8xl">
            <span className="char-mask">
              {"Cuidamos".split("").map((c, i) => (
                <span key={i} className="char">
                  {c}
                </span>
              ))}
            </span>{" "}
            <span className="char-mask italic text-bone/50">
              {"cada".split("").map((c, i) => (
                <span key={i} className="char">
                  {c}
                </span>
              ))}
            </span>{" "}
            <span className="char-mask glow-mint italic">
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
          <Tilt max={5}>
            <article className="svc-card ring-glow group relative flex aspect-[4/5] flex-col justify-between overflow-hidden rounded-3xl bg-gradient-to-br from-night-2 via-emerald-deep to-night-3 p-10 text-bone transition-all duration-500 hover:shadow-[0_0_60px_rgba(116,198,157,0.25)] lg:aspect-[5/6] lg:p-14">
              <span className="svc-bug pointer-events-none absolute -right-12 -top-12 text-mint/15 transition-transform duration-700 group-hover:rotate-12 group-hover:scale-110">
                <Grasshopper className="h-72 w-72 lg:h-96 lg:w-96" variant="solid" />
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
                  <div className="text-[10px] tracking-eyebrow text-mint/70">
                    por hora
                  </div>
                </div>
              </div>

              <div className="relative">
                <div className="text-[10px] tracking-eyebrow text-mint/70">
                  vigilado 24/7
                </div>
                <h3 className="mt-3 font-display text-6xl leading-tight text-bone lg:text-7xl">
                  Parqueo
                </h3>
                <p className="mt-5 max-w-md text-base leading-relaxed text-bone/75 lg:text-lg">
                  Cámaras, personal capacitado y entrada controlada. Por hora.
                  Para planes diarios o mensuales, consultá precio por
                  WhatsApp.
                </p>

                <ul className="mt-6 space-y-2 text-sm text-bone/70">
                  <li className="svc-detail flex items-center gap-3">
                    <span className="h-1 w-4 bg-mint" />
                    <span>Cubierto · 100% del lote</span>
                  </li>
                  <li className="svc-detail flex items-center gap-3">
                    <span className="h-1 w-4 bg-mint" />
                    <span>Cámaras 24/7 + personal</span>
                  </li>
                  <li className="svc-detail flex items-center gap-3">
                    <span className="h-1 w-4 bg-mint" />
                    <span>Sala de espera</span>
                  </li>
                </ul>

                <Magnetic
                  href={WA}
                  target="_blank"
                  rel="noopener noreferrer"
                  strength={0.35}
                  className="mt-8 inline-flex items-center gap-2 text-xs font-medium text-mint underline decoration-2 underline-offset-4 transition-colors hover:text-bone"
                >
                  Plan diario o mensual →
                </Magnetic>
              </div>
            </article>
          </Tilt>

          {/* LAVADO */}
          <Tilt max={5}>
            <article className="svc-card ring-glow group relative flex aspect-[4/5] flex-col justify-between overflow-hidden rounded-3xl bg-gradient-to-br from-night-3 via-emerald to-night-2 p-10 text-bone transition-all duration-500 hover:shadow-[0_0_60px_rgba(116,198,157,0.25)] lg:aspect-[5/6] lg:p-14">
              <span className="svc-bug pointer-events-none absolute -right-12 -top-12 text-mint/15 transition-transform duration-700 group-hover:rotate-12 group-hover:scale-110">
                <Grasshopper className="h-72 w-72 lg:h-96 lg:w-96" variant="solid" />
              </span>

              <div className="relative flex items-start justify-between">
                <div className="font-display text-6xl italic text-mint lg:text-7xl">
                  02
                </div>
                <div className="text-right">
                  <div className="font-display text-3xl text-bone/80 lg:text-4xl">
                    desde
                  </div>
                  <div className="font-display text-4xl text-bone lg:text-5xl">
                    <span>₡</span>
                    <CountUp to={6000} format="comma" />
                  </div>
                </div>
              </div>

              <div className="relative">
                <div className="text-[10px] tracking-eyebrow text-mint/70">
                  espuma · presión · cariño
                </div>
                <h3 className="mt-3 font-display text-6xl leading-tight text-bone lg:text-7xl">
                  Lavacar
                </h3>
                <p className="mt-5 max-w-md text-base leading-relaxed text-bone/75 lg:text-lg">
                  Espuma activa, enjuague a presión y secado a mano. Cuidamos
                  la pintura como si fuera nuestra. Tarifa según el vehículo.
                </p>

                <ul className="mt-6 space-y-2 text-sm text-bone/70">
                  <li className="svc-detail flex items-center gap-3">
                    <span className="h-1 w-4 bg-mint" />
                    <span>Espuma activa premium</span>
                  </li>
                  <li className="svc-detail flex items-center gap-3">
                    <span className="h-1 w-4 bg-mint" />
                    <span>Enjuague a presión</span>
                  </li>
                  <li className="svc-detail flex items-center gap-3">
                    <span className="h-1 w-4 bg-mint" />
                    <span>Secado a mano</span>
                  </li>
                </ul>

                <Magnetic
                  href={WA}
                  target="_blank"
                  rel="noopener noreferrer"
                  strength={0.35}
                  className="mt-8 inline-flex items-center gap-2 text-xs font-medium text-mint underline decoration-2 underline-offset-4 transition-colors hover:text-bone"
                >
                  Cotizá tu vehículo →
                </Magnetic>
              </div>
            </article>
          </Tilt>
        </div>

        {/* Closing CTA */}
        <div className="svc-cta ring-glow mt-16 flex flex-col items-start justify-between gap-6 overflow-hidden rounded-3xl bg-gradient-to-br from-emerald-deep via-night-3 to-night p-10 sm:flex-row sm:items-center lg:p-14">
          <div>
            <span className="tracking-eyebrow text-xs text-mint/70">
              Tarifas y planes
            </span>
            <p className="mt-3 max-w-xl font-display text-3xl italic leading-tight text-bone lg:text-4xl">
              ¿Plan mensual, tarifa empresa, o cotizar tu lavado?
            </p>
          </div>
          <Magnetic
            href={WA}
            target="_blank"
            rel="noopener noreferrer"
            strength={0.45}
            className="btn-magnet group inline-flex shrink-0 items-center gap-3 rounded-full bg-mint px-8 py-4 text-sm font-medium text-night shadow-[0_0_36px_rgba(116,198,157,0.35)] transition-all hover:shadow-[0_0_56px_rgba(116,198,157,0.6)]"
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
