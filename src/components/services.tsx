"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

const services = [
  {
    n: "001",
    title: "Estacionamiento",
    sub: "Vigilado 24/7",
    desc: "Cámaras, personal capacitado y entrada controlada. Tu vehículo seguro de día y de noche.",
    price: "₡1,000",
    unit: "/ hora",
  },
  {
    n: "002",
    title: "Lavado Exterior",
    sub: "Brillo profundo",
    desc: "Productos premium que protegen la pintura. Espuma activa, enjuague a presión y secado a mano.",
    price: "Desde ₡4,000",
    unit: "",
  },
  {
    n: "003",
    title: "Lavado Interior",
    sub: "Detalle profundo",
    desc: "Aspirado profundo, limpieza de tapicería, tablero y vidrios. Aromas finos a elegir.",
    price: "Desde ₡5,500",
    unit: "",
  },
  {
    n: "004",
    title: "Lavado Premium",
    sub: "Ceramic shield",
    desc: "Encerado, pulido y protección cerámica que repele agua y polvo durante meses.",
    price: "Desde ₡18,000",
    unit: "",
  },
  {
    n: "005",
    title: "Lavado de Motor",
    sub: "Desengrase técnico",
    desc: "Limpieza profesional del motor con productos especializados. Cuida cables y conexiones.",
    price: "Desde ₡8,000",
    unit: "",
  },
  {
    n: "006",
    title: "Servicio Express",
    sub: "30 minutos",
    desc: "Lavado completo rápido sin perder calidad. Ideal cuando andás corriendo.",
    price: "Desde ₡3,500",
    unit: "",
  },
];

export function Services() {
  const root = useRef<HTMLElement>(null);

  useEffect(() => {
    if (!root.current) return;
    const ctx = gsap.context(() => {
      gsap.from(".svc-eyebrow > *", {
        opacity: 0,
        y: 30,
        duration: 1,
        ease: "power3.out",
        stagger: 0.08,
        scrollTrigger: {
          trigger: ".svc-eyebrow",
          start: "top 85%",
        },
      });

      gsap.from(".svc-title-word", {
        yPercent: 110,
        opacity: 0,
        duration: 1.2,
        ease: "expo.out",
        stagger: 0.06,
        scrollTrigger: {
          trigger: ".svc-title",
          start: "top 80%",
        },
      });

      gsap.utils.toArray<HTMLElement>(".svc-row").forEach((row) => {
        gsap.from(row, {
          opacity: 0,
          y: 60,
          duration: 1.1,
          ease: "power3.out",
          scrollTrigger: {
            trigger: row,
            start: "top 88%",
          },
        });
      });
    }, root);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={root}
      id="servicios"
      className="relative overflow-hidden bg-ink py-32 lg:py-48"
    >
      {/* Ambient glow */}
      <div className="pointer-events-none absolute -left-20 top-1/3 h-[500px] w-[500px] rounded-full bg-teal/10 blur-[120px]" />
      <div className="pointer-events-none absolute -right-20 bottom-1/4 h-[400px] w-[400px] rounded-full bg-amber/10 blur-[120px]" />

      <div className="relative mx-auto max-w-[1400px] px-6 lg:px-12">
        {/* Header */}
        <div className="grid grid-cols-12 items-end gap-6">
          <div className="svc-eyebrow col-span-12 flex items-center gap-4 md:col-span-6">
            <span className="inline-block h-px w-12 bg-amber/60" />
            <span className="tracking-eyebrow text-xs text-amber/80">
              Capítulo 02 — Servicios
            </span>
          </div>
          <div className="col-span-12 hidden text-right md:col-span-6 md:block">
            <span className="tracking-eyebrow text-xs text-mute">
              06 servicios · todo en un solo lugar
            </span>
          </div>

          <h2 className="svc-title col-span-12 mt-10 font-display text-[12vw] leading-[0.9] text-bone sm:text-[8vw] lg:text-[7rem]">
            <span className="block overflow-hidden">
              <span className="svc-title-word inline-block">Cuidamos</span>
            </span>
            <span className="block overflow-hidden italic text-bone-dim">
              <span className="svc-title-word inline-block">cada</span>{" "}
              <span className="svc-title-word inline-block text-amber">
                detalle.
              </span>
            </span>
          </h2>
        </div>

        {/* Service rows */}
        <div className="mt-24 border-t border-white/10">
          {services.map((s) => (
            <article
              key={s.n}
              className="svc-row group relative grid grid-cols-12 items-center gap-6 border-b border-white/10 py-10 transition-colors duration-500 hover:bg-white/[0.02] lg:py-12"
            >
              {/* Hover bar */}
              <span className="pointer-events-none absolute left-0 top-0 h-px w-0 bg-amber transition-all duration-700 group-hover:w-full" />

              <div className="col-span-2 lg:col-span-1">
                <span className="font-display text-2xl text-mute transition-colors duration-500 group-hover:text-amber">
                  {s.n}
                </span>
              </div>

              <div className="col-span-10 lg:col-span-4">
                <h3 className="font-display text-3xl text-bone lg:text-4xl">
                  {s.title}
                </h3>
                <span className="mt-1 inline-block text-xs tracking-eyebrow text-teal-glow">
                  {s.sub}
                </span>
              </div>

              <div className="col-span-12 lg:col-span-5">
                <p className="text-sm leading-relaxed text-bone-dim lg:text-base">
                  {s.desc}
                </p>
              </div>

              <div className="col-span-12 text-left lg:col-span-2 lg:text-right">
                <div className="font-display text-2xl text-bone">{s.price}</div>
                {s.unit && (
                  <div className="text-xs text-mute">{s.unit}</div>
                )}
              </div>
            </article>
          ))}
        </div>

        {/* Tarifas footer note */}
        <div id="tarifas" className="mt-16 flex flex-col items-start justify-between gap-6 sm:flex-row sm:items-center">
          <p className="max-w-md text-sm leading-relaxed text-mute">
            Tarifas referenciales. Tenemos planes mensuales y nocturnos
            especiales para residentes y empresas. Consultá por cotización
            personalizada.
          </p>
          <a
            href="#contacto"
            className="group inline-flex items-center gap-3 rounded-full border border-bone/20 px-6 py-3 text-sm text-bone transition-colors hover:border-amber/60 hover:text-amber"
          >
            Cotizar mensualidad
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
