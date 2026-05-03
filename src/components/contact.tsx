"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { LOCATION, WA } from "@/lib/links";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

export function Contact() {
  const root = useRef<HTMLElement>(null);

  useEffect(() => {
    if (!root.current) return;
    const ctx = gsap.context(() => {
      gsap.from(".ct-eyebrow > *", {
        y: 20,
        opacity: 0,
        duration: 0.8,
        stagger: 0.06,
        ease: "power3.out",
        scrollTrigger: { trigger: ".ct-eyebrow", start: "top 85%" },
      });

      gsap.from(".ct-title .char", {
        yPercent: 110,
        rotate: 6,
        duration: 1.1,
        stagger: 0.02,
        ease: "expo.out",
        scrollTrigger: { trigger: ".ct-title", start: "top 80%" },
      });

      gsap.fromTo(
        ".ct-map",
        { clipPath: "inset(0% 100% 0% 0%)" },
        {
          clipPath: "inset(0% 0% 0% 0%)",
          duration: 1.6,
          ease: "expo.inOut",
          scrollTrigger: { trigger: ".ct-map", start: "top 85%" },
        }
      );

      gsap.from(".ct-row", {
        opacity: 0,
        y: 30,
        duration: 0.7,
        stagger: 0.07,
        ease: "power3.out",
        scrollTrigger: { trigger: ".ct-info", start: "top 80%" },
      });
    }, root);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={root}
      id="contacto"
      className="relative overflow-hidden mesh-beige py-28 lg:py-40"
    >
      {/* Atmosphere blobs cream */}
      <div
        aria-hidden
        className="absolute -left-32 bottom-0 h-[500px] w-[500px] rounded-full bg-emerald/10 blur-[180px]"
      />
      <div
        aria-hidden
        className="absolute -right-32 top-0 h-[420px] w-[420px] rounded-full bg-mint/15 blur-[180px]"
      />

      <div className="relative mx-auto max-w-[1500px] px-6 lg:px-16">
        <div className="ct-eyebrow flex items-center gap-4">
          <span className="inline-block h-px w-12 bg-emerald" />
          <span className="tracking-eyebrow text-xs text-stone">
            Capítulo 05 — Visitanos
          </span>
        </div>

        <h2 className="ct-title mt-6 font-display text-[12vw] leading-[0.92] text-ink sm:text-[8vw] lg:text-7xl xl:text-8xl">
          <span className="char-mask">
            {"Estamos".split("").map((c, i) => (
              <span key={i} className="char">
                {c}
              </span>
            ))}
          </span>{" "}
          <span className="char-mask italic text-stone">
            {"listos".split("").map((c, i) => (
              <span key={i} className="char">
                {c}
              </span>
            ))}
          </span>{" "}
          <span className="char-mask glow-emerald italic">
            {"hoy.".split("").map((c, i) => (
              <span key={i} className="char">
                {c}
              </span>
            ))}
          </span>
        </h2>

        <div className="mt-16 grid grid-cols-12 gap-8 lg:gap-12">
          {/* MAP COLUMN — map + button stacked */}
          <div className="col-span-12 flex flex-col gap-4 lg:col-span-6">
            <div className="ct-map relative aspect-[4/5] overflow-hidden rounded-3xl bg-cream shadow-[0_30px_80px_rgba(14,52,34,0.18)] ring-1 ring-emerald/15 lg:aspect-auto lg:min-h-[600px]">
              <iframe
                src={LOCATION.embed}
                className="map-emerald absolute inset-0 h-full w-full"
                style={{ border: 0 }}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                allowFullScreen
                title="Parqueo y Lavacar La Esperanza · Cartago"
              />

              {/* Address card — top-left opaco para tapar el control nativo de Google */}
              <div className="pointer-events-none absolute left-6 right-6 top-6 sm:right-auto sm:max-w-xs">
                <div className="rounded-2xl border border-emerald/25 bg-bone p-5 shadow-[0_12px_32px_rgba(14,52,34,0.22)]">
                  <div className="flex items-center gap-2 text-[10px] tracking-eyebrow text-emerald">
                    <span className="relative flex h-2 w-2">
                      <span className="absolute inline-flex h-full w-full rounded-full bg-emerald pulse-mint" />
                      <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald" />
                    </span>
                    Ubicación
                  </div>
                  <div className="mt-2 font-display text-2xl italic leading-tight text-emerald-deep">
                    Parqueo La Esperanza
                  </div>
                  <div className="mt-2 text-xs text-stone">
                    Cartago, Costa Rica
                  </div>
                  <div className="mt-1 font-mono text-[10px] text-mist">
                    {LOCATION.lat}, {LOCATION.lng}
                  </div>
                </div>
              </div>
            </div>

            {/* Open in Maps button — DEBAJO del mapa, no absolute, full width siempre */}
            <a
              href={LOCATION.url}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-magnet group inline-flex items-center justify-center gap-3 rounded-full bg-emerald px-6 py-4 text-sm font-medium text-bone shadow-[0_12px_28px_rgba(14,52,34,0.3)] transition-all hover:bg-emerald-deep hover:shadow-[0_12px_36px_rgba(14,52,34,0.45)]"
            >
              Abrir en Google Maps
              <svg
                viewBox="0 0 24 24"
                className="h-4 w-4 transition-transform duration-500 group-hover:translate-x-1"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
              >
                <path d="M14 3h7v7M10 14L21 3M21 14v7H3V3h7" />
              </svg>
            </a>
          </div>

          {/* Info column */}
          <div className="ct-info col-span-12 lg:col-span-6">
            <div className="border-t border-emerald/15">
              <a
                href="tel:+50670207762"
                className="ct-row group flex items-center justify-between border-b border-emerald/15 py-6 transition-colors hover:bg-paper/60"
              >
                <div>
                  <div className="text-[10px] tracking-eyebrow text-stone">
                    Teléfono
                  </div>
                  <div className="mt-1 font-display text-3xl text-ink lg:text-4xl">
                    +506 7020-7762
                  </div>
                </div>
                <span className="font-display text-2xl text-stone transition-all group-hover:translate-x-1 group-hover:text-emerald">
                  →
                </span>
              </a>

              <a
                href="tel:+50688322660"
                className="ct-row group flex items-center justify-between border-b border-emerald/15 py-6 transition-colors hover:bg-paper/60"
              >
                <div>
                  <div className="text-[10px] tracking-eyebrow text-stone">
                    Línea 2
                  </div>
                  <div className="mt-1 font-display text-3xl text-ink lg:text-4xl">
                    +506 8832-2660
                  </div>
                </div>
                <span className="font-display text-2xl text-stone transition-all group-hover:translate-x-1 group-hover:text-emerald">
                  →
                </span>
              </a>

              <a
                href={WA}
                target="_blank"
                rel="noopener noreferrer"
                className="ct-row group flex items-center justify-between border-b border-emerald/15 py-6 transition-colors hover:bg-paper/60"
              >
                <div>
                  <div className="text-[10px] tracking-eyebrow text-stone">
                    WhatsApp · respuesta inmediata
                  </div>
                  <div className="mt-1 font-display text-3xl italic text-ink lg:text-4xl">
                    Escribinos
                  </div>
                </div>
                <span className="font-display text-2xl text-stone transition-all group-hover:translate-x-1 group-hover:text-emerald">
                  →
                </span>
              </a>

              <a
                href={LOCATION.url}
                target="_blank"
                rel="noopener noreferrer"
                className="ct-row group flex items-center justify-between border-b border-emerald/15 py-6 transition-colors hover:bg-paper/60"
              >
                <div>
                  <div className="text-[10px] tracking-eyebrow text-stone">
                    Dirección
                  </div>
                  <div className="mt-1 font-display text-3xl text-ink lg:text-4xl">
                    Cartago, CR
                  </div>
                </div>
                <span className="font-display text-2xl text-stone transition-all group-hover:translate-x-1 group-hover:text-emerald">
                  →
                </span>
              </a>

              <div className="ct-row flex items-center justify-between border-b border-emerald/15 py-6">
                <div>
                  <div className="text-[10px] tracking-eyebrow text-stone">
                    Horario
                  </div>
                  <div className="mt-1 font-display text-3xl text-ink lg:text-4xl">
                    6am — 9pm
                  </div>
                  <div className="mt-2 flex items-center gap-2 text-xs text-emerald">
                    <span className="relative flex h-1.5 w-1.5">
                      <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-teal opacity-75" />
                      <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-emerald" />
                    </span>
                    Lunes a Domingo · Abierto ahora
                  </div>
                </div>
              </div>
            </div>

            <div className="ct-row mt-10 flex flex-col items-stretch gap-3 sm:flex-row">
              <a
                href="tel:+50670207762"
                className="btn-magnet inline-flex flex-1 items-center justify-center gap-3 rounded-full bg-emerald px-8 py-4 text-sm font-medium text-bone shadow-[0_8px_24px_rgba(14,52,34,0.25)] transition-all hover:bg-emerald-deep"
              >
                Llamar ahora
              </a>
              <a
                href={WA}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex flex-1 items-center justify-center gap-3 rounded-full border border-emerald/30 px-8 py-4 text-sm font-medium text-emerald transition-colors hover:bg-emerald hover:text-bone"
              >
                WhatsApp
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
