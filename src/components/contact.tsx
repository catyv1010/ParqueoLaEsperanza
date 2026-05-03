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
      className="spotlight relative overflow-hidden bg-night py-28 lg:py-40"
    >
      <div
        aria-hidden
        className="absolute -left-32 bottom-0 h-[500px] w-[500px] rounded-full bg-mint/10 blur-[180px]"
      />

      <div className="relative mx-auto max-w-[1500px] px-6 lg:px-16">
        <div className="ct-eyebrow flex items-center gap-4">
          <span className="inline-block h-px w-12 bg-mint" />
          <span className="tracking-eyebrow text-xs text-mint/70">
            Capítulo 05 — Visitanos
          </span>
        </div>

        <h2 className="ct-title mt-6 font-display text-[12vw] leading-[0.92] text-bone sm:text-[8vw] lg:text-7xl xl:text-8xl">
          <span className="char-mask">
            {"Estamos".split("").map((c, i) => (
              <span key={i} className="char">
                {c}
              </span>
            ))}
          </span>{" "}
          <span className="char-mask italic text-bone/50">
            {"listos".split("").map((c, i) => (
              <span key={i} className="char">
                {c}
              </span>
            ))}
          </span>{" "}
          <span className="char-mask glow-mint italic">
            {"hoy.".split("").map((c, i) => (
              <span key={i} className="char">
                {c}
              </span>
            ))}
          </span>
        </h2>

        <div className="mt-16 grid grid-cols-12 gap-8 lg:gap-12">
          {/* MAP */}
          <div className="ct-map ring-glow-strong relative col-span-12 aspect-[4/5] overflow-hidden rounded-3xl bg-night-2 lg:col-span-6 lg:aspect-auto lg:min-h-[680px]">
            <iframe
              src={LOCATION.embed}
              className="map-night absolute inset-0 h-full w-full"
              style={{ border: 0 }}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              allowFullScreen
              title="Parqueo y Lavacar La Esperanza · Cartago"
            />

            {/* Top overlay gradient para mejorar contraste de la card */}
            <div className="pointer-events-none absolute inset-x-0 top-0 h-40 bg-gradient-to-b from-night/60 to-transparent" />
            <div className="pointer-events-none absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-night/70 to-transparent" />

            {/* Floating address card */}
            <div className="pointer-events-none absolute left-6 top-6 right-6 sm:right-auto sm:max-w-xs">
              <div className="rounded-2xl border border-mint/25 bg-night/85 p-5 backdrop-blur-xl shadow-[0_0_32px_rgba(0,0,0,0.6)]">
                <div className="flex items-center gap-2 text-[10px] tracking-eyebrow text-mint">
                  <span className="relative flex h-2 w-2">
                    <span className="absolute inline-flex h-full w-full rounded-full bg-mint pulse-mint" />
                    <span className="relative inline-flex h-2 w-2 rounded-full bg-mint" />
                  </span>
                  Ubicación
                </div>
                <div className="mt-2 font-display text-2xl italic leading-tight text-bone">
                  Parqueo La Esperanza
                </div>
                <div className="mt-2 text-xs text-bone/60">
                  Cartago, Costa Rica
                </div>
                <div className="mt-1 font-mono text-[10px] text-mint/50">
                  {LOCATION.lat}, {LOCATION.lng}
                </div>
              </div>
            </div>

            {/* Open in Maps button */}
            <a
              href={LOCATION.url}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-magnet group absolute bottom-6 left-6 right-6 inline-flex items-center justify-center gap-3 rounded-full bg-mint px-6 py-3.5 text-sm font-medium text-night shadow-[0_0_28px_rgba(116,198,157,0.4)] transition-all hover:shadow-[0_0_48px_rgba(116,198,157,0.65)] sm:left-auto sm:right-6 sm:w-auto"
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
            <div className="border-t border-mint/15">
              <a
                href="tel:+50670207762"
                className="ct-row group flex items-center justify-between border-b border-mint/15 py-6 transition-colors hover:bg-night-2/40"
              >
                <div>
                  <div className="text-[10px] tracking-eyebrow text-mint/60">
                    Teléfono
                  </div>
                  <div className="mt-1 font-display text-3xl text-bone lg:text-4xl">
                    +506 7020-7762
                  </div>
                </div>
                <span className="font-display text-2xl text-bone/40 transition-all group-hover:translate-x-1 group-hover:text-mint">
                  →
                </span>
              </a>

              <a
                href="tel:+50688322660"
                className="ct-row group flex items-center justify-between border-b border-mint/15 py-6 transition-colors hover:bg-night-2/40"
              >
                <div>
                  <div className="text-[10px] tracking-eyebrow text-mint/60">
                    Línea 2
                  </div>
                  <div className="mt-1 font-display text-3xl text-bone lg:text-4xl">
                    +506 8832-2660
                  </div>
                </div>
                <span className="font-display text-2xl text-bone/40 transition-all group-hover:translate-x-1 group-hover:text-mint">
                  →
                </span>
              </a>

              <a
                href={WA}
                target="_blank"
                rel="noopener noreferrer"
                className="ct-row group flex items-center justify-between border-b border-mint/15 py-6 transition-colors hover:bg-night-2/40"
              >
                <div>
                  <div className="text-[10px] tracking-eyebrow text-mint/60">
                    WhatsApp · respuesta inmediata
                  </div>
                  <div className="mt-1 font-display text-3xl italic text-bone lg:text-4xl">
                    Escribinos
                  </div>
                </div>
                <span className="font-display text-2xl text-bone/40 transition-all group-hover:translate-x-1 group-hover:text-mint">
                  →
                </span>
              </a>

              <a
                href={LOCATION.url}
                target="_blank"
                rel="noopener noreferrer"
                className="ct-row group flex items-center justify-between border-b border-mint/15 py-6 transition-colors hover:bg-night-2/40"
              >
                <div>
                  <div className="text-[10px] tracking-eyebrow text-mint/60">
                    Dirección
                  </div>
                  <div className="mt-1 font-display text-3xl text-bone lg:text-4xl">
                    Cartago, CR
                  </div>
                </div>
                <span className="font-display text-2xl text-bone/40 transition-all group-hover:translate-x-1 group-hover:text-mint">
                  →
                </span>
              </a>

              <div className="ct-row flex items-center justify-between border-b border-mint/15 py-6">
                <div>
                  <div className="text-[10px] tracking-eyebrow text-mint/60">
                    Horario
                  </div>
                  <div className="mt-1 font-display text-3xl text-bone lg:text-4xl">
                    6am — 9pm
                  </div>
                  <div className="mt-2 flex items-center gap-2 text-xs text-mint">
                    <span className="relative flex h-1.5 w-1.5">
                      <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-mint-glow opacity-75" />
                      <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-mint" />
                    </span>
                    Lunes a Domingo · Abierto ahora
                  </div>
                </div>
              </div>
            </div>

            <div className="ct-row mt-10 flex flex-col items-stretch gap-3 sm:flex-row">
              <a
                href="tel:+50670207762"
                className="btn-magnet inline-flex flex-1 items-center justify-center gap-3 rounded-full bg-mint px-8 py-4 text-sm font-medium text-night shadow-[0_0_28px_rgba(116,198,157,0.3)] transition-all hover:shadow-[0_0_48px_rgba(116,198,157,0.55)]"
              >
                Llamar ahora
              </a>
              <a
                href={WA}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex flex-1 items-center justify-center gap-3 rounded-full border border-mint/40 px-8 py-4 text-sm font-medium text-mint transition-colors hover:bg-mint hover:text-night"
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
