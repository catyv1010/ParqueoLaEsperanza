"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Grasshopper } from "@/components/grasshopper";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

const WA =
  "https://wa.me/50670207762?text=Hola!%20Quisiera%20consultar%20por%20tarifas%20de%20Parqueo%20y%20Lavacar%20La%20Esperanza";

const services = [
  {
    n: "01",
    title: "Parqueo",
    sub: "vigilado 24/7",
    desc: "Cámaras y personal capacitado. Por hora, día o mensualidad — consultá tarifas por WhatsApp.",
    price: "₡1,000",
    unit: "/ hora",
    note: "Plan diario y mensual: consultá",
    accent: "bg-emerald text-bone",
    accentText: "text-mint",
  },
  {
    n: "02",
    title: "Lavado Exterior",
    sub: "espuma + presión",
    desc: "Espuma activa, enjuague a presión y secado a mano. Cuida la pintura de tu vehículo.",
    price: "Desde ₡6,000",
    unit: "",
    note: "",
    accent: "bg-cream text-emerald-deep",
    accentText: "text-emerald",
  },
  {
    n: "03",
    title: "Lavado Interior",
    sub: "detalle profundo",
    desc: "Aspirado, tapicería, tablero y vidrios impecables. Tu carro vuelve a sentirse nuevo.",
    price: "Desde ₡6,000",
    unit: "",
    note: "",
    accent: "bg-emerald-deep text-bone",
    accentText: "text-mint",
  },
];

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
          y: 60,
          rotate: i % 2 === 0 ? -2 : 2,
          duration: 1.1,
          ease: "power3.out",
          scrollTrigger: { trigger: card, start: "top 85%" },
        });
      });
    }, root);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={root}
      id="servicios"
      className="relative overflow-hidden bg-cream py-24 lg:py-32"
    >
      <div className="mx-auto max-w-[1500px] px-6 lg:px-16">
        {/* Header */}
        <div className="grid grid-cols-12 items-end gap-6">
          <div className="svc-eyebrow col-span-12 flex items-center gap-4 lg:col-span-6">
            <span className="inline-block h-px w-12 bg-emerald" />
            <span className="tracking-eyebrow text-xs text-stone">
              Capítulo 03 — Servicios
            </span>
          </div>
          <div className="col-span-12 hidden text-right lg:col-span-6 lg:block">
            <span className="tracking-eyebrow text-xs text-stone">
              03 servicios principales
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

        {/* 3 large cards */}
        <div className="mt-16 grid grid-cols-1 gap-6 md:grid-cols-3 lg:gap-8">
          {services.map((s) => (
            <article
              key={s.n}
              className={`svc-card group relative flex aspect-[4/5] flex-col justify-between overflow-hidden rounded-3xl p-8 shadow-xl shadow-emerald-deep/10 transition-transform duration-500 hover:-translate-y-2 lg:p-10 ${s.accent}`}
            >
              {/* Decorative grasshopper */}
              <span
                className={`pointer-events-none absolute -right-10 -top-10 opacity-15 transition-transform duration-700 group-hover:rotate-12 group-hover:scale-110 ${s.accentText}`}
              >
                <Grasshopper className="h-56 w-56 lg:h-72 lg:w-72" />
              </span>

              <div className="relative flex items-start justify-between">
                <div className={`font-display text-5xl ${s.accentText}`}>
                  {s.n}
                </div>
                <div className="text-right">
                  <div className="font-display text-2xl lg:text-3xl">
                    {s.price}
                  </div>
                  {s.unit && (
                    <div className="text-[10px] tracking-eyebrow opacity-70">
                      {s.unit}
                    </div>
                  )}
                </div>
              </div>

              <div className="relative">
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
                {s.note && (
                  <a
                    href={WA}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-4 inline-flex items-center gap-2 text-xs font-medium underline decoration-2 underline-offset-4 opacity-90 transition-opacity hover:opacity-100"
                  >
                    {s.note} →
                  </a>
                )}
              </div>
            </article>
          ))}
        </div>

        {/* Closing CTA strip */}
        <div className="mt-16 flex flex-col items-start justify-between gap-6 rounded-3xl bg-gradient-to-br from-emerald-deep via-emerald to-emerald-2 p-10 text-bone shadow-xl shadow-emerald-deep/20 sm:flex-row sm:items-center lg:p-12">
          <div>
            <span className="tracking-eyebrow text-xs text-mint">
              Tarifas y planes
            </span>
            <p className="mt-3 max-w-xl font-display text-3xl italic leading-tight text-bone lg:text-4xl">
              ¿Plan diario, mensual o tarifa para empresa? Te respondemos por
              WhatsApp.
            </p>
          </div>
          <a
            href={WA}
            target="_blank"
            rel="noopener noreferrer"
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
          </a>
        </div>
      </div>
    </section>
  );
}
