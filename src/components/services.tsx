"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Tilt } from "@/components/tilt";
import { SkyEffects } from "@/components/sky-effects";
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

        gsap.fromTo(
          card.querySelector(".svc-photo"),
          { clipPath: "inset(0% 0% 100% 0%)" },
          {
            clipPath: "inset(0% 0% 0% 0%)",
            duration: 1.5,
            ease: "expo.inOut",
            scrollTrigger: { trigger: card, start: "top 80%" },
          }
        );
        gsap.fromTo(
          card.querySelector(".svc-photo img"),
          { scale: 1.4 },
          {
            scale: 1.05,
            duration: 1.5,
            ease: "expo.out",
            scrollTrigger: { trigger: card, start: "top 80%" },
          }
        );

        gsap.from(card.querySelector(".svc-num"), {
          yPercent: 30,
          opacity: 0,
          duration: 1,
          ease: "expo.out",
          delay: 0.4,
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

      // Drops para lavacar card
      gsap.utils.toArray<HTMLElement>(".svc-drop").forEach((drop, i) => {
        gsap.fromTo(
          drop,
          { y: -10, opacity: 0 },
          {
            y: 60,
            opacity: 1,
            duration: 2.2 + i * 0.3,
            ease: "sine.inOut",
            repeat: -1,
            yoyo: true,
            delay: i * 0.4,
          }
        );
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
      className="spotlight relative overflow-hidden bg-night py-28 lg:py-40"
    >
      {/* Stars sutiles */}
      <div className="absolute inset-0 opacity-70">
        <SkyEffects stars={50} area="full" />
      </div>

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

        {/* TWO BIG cards con foto */}
        <div className="mt-16 grid grid-cols-1 gap-8 md:grid-cols-2">
          {/* PARQUEO */}
          <Tilt max={4}>
            <article className="svc-card glow-on-hover ring-glow group relative flex h-full flex-col overflow-hidden rounded-3xl bg-gradient-to-br from-night-2 via-emerald-deep to-night-3 text-bone">
              {/* Photo header — dramatic green */}
              <div className="svc-photo relative h-[280px] overflow-hidden lg:h-[340px]">
                <Image
                  src="/foto-parqueo.jpg"
                  alt="Parqueo La Esperanza Cartago"
                  fill
                  sizes="(min-width: 768px) 50vw, 100vw"
                  className="object-cover object-top transition-transform duration-1000 group-hover:scale-105"
                  style={{ filter: "saturate(0.85) brightness(0.9) contrast(1.05)" }}
                />
                <div className="absolute inset-0 bg-gradient-to-b from-night-2/30 via-emerald-deep/40 to-night-2" />
                <div className="absolute inset-0 bg-gradient-to-br from-emerald-deep/40 via-transparent to-transparent mix-blend-overlay" />

                {/* Number floating */}
                <div className="svc-num absolute left-8 top-8 font-display text-7xl italic text-mint glow-mint lg:text-8xl">
                  01
                </div>

                {/* Price chip floating */}
                <div className="absolute right-8 top-8 rounded-full border border-mint/30 bg-night/70 px-4 py-2 backdrop-blur-md">
                  <div className="flex items-baseline gap-1 font-display text-bone">
                    <span className="text-sm">₡</span>
                    <span className="text-2xl">
                      <CountUp to={1000} format="comma" />
                    </span>
                    <span className="text-[9px] tracking-eyebrow text-mint/80">
                      / hora
                    </span>
                  </div>
                </div>

                {/* Eyebrow chip bottom */}
                <div className="absolute bottom-6 left-8">
                  <div className="inline-flex items-center gap-2 rounded-full border border-mint/30 bg-night/70 px-3 py-1.5 backdrop-blur-md">
                    <span className="h-1.5 w-1.5 rounded-full bg-mint shadow-[0_0_8px_rgba(116,198,157,0.8)]" />
                    <span className="text-[9px] tracking-eyebrow text-bone">
                      vigilado 24/7
                    </span>
                  </div>
                </div>
              </div>

              {/* Content */}
              <div className="relative flex flex-1 flex-col p-10 lg:p-12">
                <h3 className="font-display text-5xl leading-tight text-bone lg:text-6xl">
                  Parqueo
                </h3>
                <p className="mt-5 max-w-md text-base leading-relaxed text-bone/75 lg:text-lg">
                  Cámaras, personal capacitado y entrada controlada. Por hora.
                  Para planes diarios o mensuales, consultá precio por
                  WhatsApp.
                </p>

                <ul className="mt-6 space-y-2.5 text-sm text-bone/70">
                  <li className="svc-detail flex items-center gap-3">
                    <span className="h-1 w-4 bg-mint" />
                    <span>Cubierto · 100% del lote</span>
                  </li>
                  <li className="svc-detail flex items-center gap-3">
                    <span className="h-1 w-4 bg-mint" />
                    <span>Cámaras 24/7 + personal en sitio</span>
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
                  className="mt-auto inline-flex items-center gap-2 pt-8 text-xs font-medium text-mint underline decoration-2 underline-offset-4 transition-colors hover:text-bone"
                >
                  Plan diario o mensual →
                </Magnetic>
              </div>
            </article>
          </Tilt>

          {/* LAVADO */}
          <Tilt max={4}>
            <article className="svc-card glow-on-hover ring-glow group relative flex h-full flex-col overflow-hidden rounded-3xl bg-gradient-to-br from-night-3 via-emerald to-night-2 text-bone">
              {/* Photo header — fresh mint tint */}
              <div className="svc-photo relative h-[280px] overflow-hidden lg:h-[340px]">
                <Image
                  src="/foto-parqueo.jpg"
                  alt="Lavacar La Esperanza Cartago"
                  fill
                  sizes="(min-width: 768px) 50vw, 100vw"
                  className="object-cover object-top transition-transform duration-1000 group-hover:scale-105"
                  style={{ filter: "saturate(1.15) brightness(1.05) hue-rotate(15deg)" }}
                />
                <div className="absolute inset-0 bg-gradient-to-b from-mint/15 via-emerald/30 to-night-2" />
                <div className="absolute inset-0 bg-gradient-to-br from-mint/25 via-transparent to-transparent mix-blend-overlay" />

                {/* Animated water drops */}
                <div aria-hidden className="pointer-events-none absolute inset-0">
                  {[18, 32, 52, 68, 82].map((left, i) => (
                    <span
                      key={i}
                      className="svc-drop absolute h-3 w-3 rounded-full"
                      style={{
                        left: `${left}%`,
                        top: `${10 + (i % 3) * 8}%`,
                        background:
                          "radial-gradient(circle at 30% 30%, rgba(255,255,255,0.95), rgba(183,228,199,0.6) 50%, transparent 80%)",
                        boxShadow: "0 0 12px rgba(183,228,199,0.55)",
                      }}
                    />
                  ))}
                </div>

                {/* Number floating */}
                <div className="svc-num absolute left-8 top-8 font-display text-7xl italic text-mint glow-mint lg:text-8xl">
                  02
                </div>

                {/* Price chip */}
                <div className="absolute right-8 top-8 rounded-full border border-mint/30 bg-night/70 px-4 py-2 backdrop-blur-md">
                  <div className="flex items-baseline gap-1 font-display text-bone">
                    <span className="text-[10px] tracking-eyebrow text-mint/80">
                      desde
                    </span>
                    <span className="text-sm">₡</span>
                    <span className="text-2xl">
                      <CountUp to={6000} format="comma" />
                    </span>
                  </div>
                </div>

                {/* Eyebrow chip bottom */}
                <div className="absolute bottom-6 left-8">
                  <div className="inline-flex items-center gap-2 rounded-full border border-mint/30 bg-night/70 px-3 py-1.5 backdrop-blur-md">
                    <span className="h-1.5 w-1.5 rounded-full bg-mint shadow-[0_0_8px_rgba(116,198,157,0.8)]" />
                    <span className="text-[9px] tracking-eyebrow text-bone">
                      espuma · presión · cariño
                    </span>
                  </div>
                </div>
              </div>

              {/* Content */}
              <div className="relative flex flex-1 flex-col p-10 lg:p-12">
                <h3 className="font-display text-5xl leading-tight text-bone lg:text-6xl">
                  Lavacar
                </h3>
                <p className="mt-5 max-w-md text-base leading-relaxed text-bone/75 lg:text-lg">
                  Espuma activa, enjuague a presión y secado a mano. Cuidamos
                  la pintura como si fuera nuestra. Tarifa según el vehículo.
                </p>

                <ul className="mt-6 space-y-2.5 text-sm text-bone/70">
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
                  className="mt-auto inline-flex items-center gap-2 pt-8 text-xs font-medium text-mint underline decoration-2 underline-offset-4 transition-colors hover:text-bone"
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
