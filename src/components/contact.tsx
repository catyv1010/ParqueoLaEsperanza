"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

const WA = "https://wa.me/50670207762?text=Hola!%20Me%20interesa%20informaci%C3%B3n%20sobre%20Parqueo%20y%20Lavacar%20La%20Esperanza";

export function Contact() {
  const root = useRef<HTMLElement>(null);

  useEffect(() => {
    if (!root.current) return;
    const ctx = gsap.context(() => {
      gsap.from(".ct-eyebrow > *", {
        opacity: 0,
        y: 30,
        duration: 1,
        ease: "power3.out",
        stagger: 0.08,
        scrollTrigger: { trigger: ".ct-eyebrow", start: "top 85%" },
      });

      gsap.from(".ct-word", {
        yPercent: 110,
        opacity: 0,
        duration: 1.2,
        ease: "expo.out",
        stagger: 0.06,
        scrollTrigger: { trigger: ".ct-title", start: "top 80%" },
      });

      gsap.from(".ct-card", {
        opacity: 0,
        y: 40,
        duration: 1,
        ease: "power3.out",
        stagger: 0.1,
        scrollTrigger: { trigger: ".ct-grid", start: "top 80%" },
      });
    }, root);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={root}
      id="contacto"
      className="relative overflow-hidden bg-midnight py-32 lg:py-48"
    >
      {/* Glow */}
      <div className="pointer-events-none absolute left-1/2 top-0 h-[600px] w-[600px] -translate-x-1/2 rounded-full bg-amber/8 blur-[140px]" />

      <div className="relative mx-auto max-w-[1400px] px-6 lg:px-12">
        {/* Header */}
        <div className="ct-eyebrow flex items-center gap-4">
          <span className="inline-block h-px w-12 bg-amber/60" />
          <span className="tracking-eyebrow text-xs text-amber/80">
            Capítulo 03 — Visitanos
          </span>
        </div>

        <h2 className="ct-title mt-10 font-display text-[12vw] leading-[0.9] text-bone sm:text-[9vw] lg:text-[8rem]">
          <span className="block overflow-hidden">
            <span className="ct-word inline-block">Estamos</span>{" "}
            <span className="ct-word inline-block italic text-bone-dim">
              listos
            </span>
          </span>
          <span className="block overflow-hidden">
            <span className="ct-word inline-block italic text-bone-dim">
              para
            </span>{" "}
            <span className="ct-word inline-block text-amber">atenderte.</span>
          </span>
        </h2>

        <div className="ct-grid mt-20 grid grid-cols-12 gap-6">
          {/* Info cards */}
          <div className="col-span-12 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:col-span-7">
            <a
              href="tel:+50670207762"
              className="ct-card group relative flex flex-col justify-between overflow-hidden rounded-3xl border border-white/10 bg-ink/40 p-8 transition-all duration-500 hover:border-amber/40 hover:bg-ink/60"
            >
              <span className="pointer-events-none absolute -right-16 -top-16 h-40 w-40 rounded-full bg-teal/10 blur-3xl transition-opacity duration-700 group-hover:bg-amber/20" />
              <span className="relative tracking-eyebrow text-xs text-mute">
                Llamanos
              </span>
              <div className="relative mt-12">
                <div className="font-display text-2xl text-bone lg:text-3xl">
                  +506 7020-7762
                </div>
                <div className="mt-1 text-sm text-bone-dim">
                  +506 8832-2660
                </div>
              </div>
            </a>

            <a
              href={WA}
              target="_blank"
              rel="noopener noreferrer"
              className="ct-card group relative flex flex-col justify-between overflow-hidden rounded-3xl border border-white/10 bg-ink/40 p-8 transition-all duration-500 hover:border-teal/40 hover:bg-ink/60"
            >
              <span className="pointer-events-none absolute -right-16 -top-16 h-40 w-40 rounded-full bg-teal/15 blur-3xl" />
              <span className="relative tracking-eyebrow text-xs text-mute">
                WhatsApp
              </span>
              <div className="relative mt-12">
                <div className="font-display text-2xl text-bone lg:text-3xl">
                  Escribinos
                </div>
                <div className="mt-1 text-sm text-bone-dim">
                  Respuesta inmediata
                </div>
              </div>
            </a>

            <div className="ct-card relative flex flex-col justify-between overflow-hidden rounded-3xl border border-white/10 bg-ink/40 p-8 sm:col-span-2">
              <span className="tracking-eyebrow text-xs text-mute">
                Horario
              </span>
              <div className="mt-12 grid grid-cols-2 gap-4">
                <div>
                  <div className="font-display text-xl text-bone lg:text-2xl">
                    Lunes — Domingo
                  </div>
                  <div className="mt-1 text-sm text-bone-dim">
                    Sin descanso
                  </div>
                </div>
                <div>
                  <div className="font-display text-xl text-bone lg:text-2xl">
                    6:00am — 9:00pm
                  </div>
                  <div className="mt-1 flex items-center gap-2 text-sm text-teal-glow">
                    <span className="relative flex h-1.5 w-1.5">
                      <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-teal opacity-75" />
                      <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-teal" />
                    </span>
                    Abierto ahora
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Big CTA card */}
          <div className="ct-card relative col-span-12 flex flex-col justify-between overflow-hidden rounded-3xl border border-amber/20 bg-gradient-to-br from-amber/15 via-amber/5 to-transparent p-10 lg:col-span-5">
            <div className="pointer-events-none absolute -bottom-20 -right-20 h-80 w-80 rounded-full bg-amber/20 blur-[80px]" />

            <span className="relative tracking-eyebrow text-xs text-amber">
              Reservá hoy
            </span>

            <div className="relative mt-16">
              <h3 className="font-display text-4xl leading-tight text-bone lg:text-5xl">
                Asegurá tu espacio.
              </h3>
              <p className="mt-4 max-w-sm text-sm leading-relaxed text-bone-dim">
                Con cita previa atendemos más rápido. Llamanos o escribinos por
                WhatsApp y coordinamos en minutos.
              </p>

              <div className="mt-10 flex flex-col gap-3 sm:flex-row">
                <a
                  href="tel:+50670207762"
                  className="btn-magnetic inline-flex items-center justify-center gap-3 rounded-full bg-amber px-7 py-4 text-sm font-medium text-ink transition-transform hover:scale-[1.02]"
                >
                  Llamar ahora
                </a>
                <a
                  href={WA}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-3 rounded-full border border-bone/20 px-7 py-4 text-sm font-medium text-bone transition-colors hover:border-bone/60"
                >
                  WhatsApp
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
