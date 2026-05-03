"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Grasshopper } from "@/components/grasshopper";
import { SkyEffects } from "@/components/sky-effects";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

export function Hero() {
  const root = useRef<HTMLElement>(null);

  useEffect(() => {
    if (!root.current) return;
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({ defaults: { ease: "expo.out" } });

      // Cartago plate
      tl.from(".hero-plate", {
        opacity: 0,
        y: -16,
        duration: 1,
        ease: "power3.out",
      });

      // Massive headline letters cascade
      tl.from(
        ".hero-h1 .char",
        {
          yPercent: 130,
          opacity: 0,
          rotate: 6,
          duration: 1.4,
          ease: "expo.out",
          stagger: 0.022,
        },
        "-=0.6"
      );

      // Grasshopper bounces in
      tl.from(
        ".hero-grasshopper",
        {
          scale: 0,
          rotate: -120,
          opacity: 0,
          duration: 1.4,
          ease: "back.out(1.6)",
        },
        "-=1.0"
      );

      // Photo card clip reveal
      tl.fromTo(
        ".hero-image-card",
        { clipPath: "inset(0% 0% 100% 0%)" },
        { clipPath: "inset(0% 0% 0% 0%)", duration: 1.4, ease: "expo.inOut" },
        "-=0.9"
      );
      tl.fromTo(
        ".hero-image-card img",
        { scale: 1.5 },
        { scale: 1.05, duration: 1.4, ease: "expo.out" },
        "<"
      );

      // Sub + CTAs + stats
      tl.from(
        ".hero-fade > *",
        {
          y: 24,
          opacity: 0,
          duration: 0.9,
          ease: "power3.out",
          stagger: 0.08,
        },
        "-=0.7"
      );

      tl.from(
        ".hero-stat",
        {
          y: 30,
          opacity: 0,
          duration: 0.7,
          stagger: 0.08,
          ease: "power2.out",
        },
        "-=0.5"
      );

      tl.from(".hero-marquee", { opacity: 0, duration: 0.8 }, "-=0.3");

      // Photo Ken Burns on scroll
      gsap.to(".hero-image-card img", {
        scale: 1.18,
        ease: "none",
        scrollTrigger: {
          trigger: root.current,
          start: "top top",
          end: "bottom top",
          scrub: true,
        },
      });

      // Card subtle parallax
      gsap.to(".hero-image-card", {
        yPercent: -18,
        ease: "none",
        scrollTrigger: {
          trigger: root.current,
          start: "top top",
          end: "bottom top",
          scrub: true,
        },
      });

      // Headline parallax (smaller offset, fades out)
      gsap.to(".hero-h1", {
        yPercent: -18,
        opacity: 0.3,
        ease: "none",
        scrollTrigger: {
          trigger: root.current,
          start: "top top",
          end: "bottom top",
          scrub: true,
        },
      });

      // Side text parallax
      gsap.to(".hero-side", {
        yPercent: -60,
        ease: "none",
        scrollTrigger: {
          trigger: root.current,
          start: "top top",
          end: "bottom top",
          scrub: true,
        },
      });

      // Grasshopper drift
      gsap.to(".hero-grasshopper", {
        yPercent: -40,
        rotate: 12,
        ease: "none",
        scrollTrigger: {
          trigger: root.current,
          start: "top top",
          end: "bottom top",
          scrub: true,
        },
      });
    }, root);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={root}
      id="inicio"
      className="relative isolate min-h-[100svh] overflow-hidden bg-emerald-deep"
    >
      {/* Cinematic background */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-br from-emerald-deep via-[#091f15] to-ink" />
        <div className="absolute -left-32 top-1/4 h-[600px] w-[600px] rounded-full bg-emerald/35 blur-[140px]" />
        <div className="absolute -right-20 -top-20 h-[520px] w-[520px] rounded-full bg-mint/15 blur-[140px]" />
        <div className="absolute bottom-0 left-1/2 h-[400px] w-[800px] -translate-x-1/2 rounded-full bg-emerald/20 blur-[160px]" />
      </div>

      {/* Star rain + meteors + bubbles */}
      <SkyEffects stars={70} meteors={7} bubbles={26} />

      {/* CARTAGO plate top center */}
      <div className="hero-plate absolute left-1/2 top-24 z-30 -translate-x-1/2 lg:top-28">
        <div className="flex items-center gap-3 rounded-full border border-mint/30 bg-emerald-deep/60 px-5 py-2 backdrop-blur-md">
          <span className="relative flex h-2 w-2">
            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-mint opacity-75" />
            <span className="relative inline-flex h-2 w-2 rounded-full bg-mint" />
          </span>
          <span className="font-display text-base italic text-bone lg:text-lg">
            Cartago
          </span>
          <span className="text-bone/50">·</span>
          <span className="tracking-eyebrow text-[10px] text-bone/85">
            Costa Rica
          </span>
        </div>
      </div>

      {/* Vertical text */}
      <div className="hero-side absolute left-4 top-1/2 z-20 hidden -translate-y-1/2 lg:left-8 lg:block">
        <span className="vertical-rl block text-xs tracking-eyebrow text-bone/60">
          Cartago · est. 2014 · Pura vida
        </span>
      </div>

      {/* MASSIVE wordmark — full bleed */}
      <div className="relative z-10 mx-auto max-w-[1700px] px-6 pt-44 lg:px-12 lg:pt-48">
        <h1 className="hero-h1 font-display text-[16vw] leading-[0.85] text-bone sm:text-[14vw] lg:text-[13vw]">
          <span className="char-mask block">
            {"Parqueo".split("").map((c, i) => (
              <span key={i} className="char">
                {c}
              </span>
            ))}
            <span className="inline-block" style={{ width: "0.25em" }} />
            <span className="italic text-bone/85">
              {"y Lavacar".split("").map((c, i) => (
                <span key={i + 100} className="char">
                  {c}
                </span>
              ))}
            </span>
          </span>
          <span className="char-mask block italic text-mint">
            {"La Esperanza".split("").map((c, i) => (
              <span key={i + 200} className="char">
                {c}
              </span>
            ))}
          </span>
        </h1>
      </div>

      {/* Floating grasshopper big */}
      <div className="hero-grasshopper pointer-events-none absolute right-[6%] top-[18%] z-20 hidden text-mint lg:block">
        <span className="block animate-hop drop-shadow-[0_8px_30px_rgba(116,198,157,0.6)]">
          <Grasshopper className="h-40 w-40 xl:h-56 xl:w-56" />
        </span>
      </div>

      {/* Bottom content row: photo + sub + stats */}
      <div className="relative z-10 mx-auto mt-12 grid max-w-[1700px] grid-cols-12 gap-8 px-6 pb-32 lg:mt-20 lg:gap-12 lg:px-12 lg:pb-32">
        {/* Real photo card */}
        <div className="col-span-12 lg:col-span-5">
          <figure className="hero-image-card relative aspect-[4/5] overflow-hidden rounded-3xl shadow-2xl shadow-emerald-deep/60 ring-1 ring-mint/15 lg:aspect-[4/5]">
            <Image
              src="/foto-parqueo.jpg"
              alt="Parqueo y Lavacar La Esperanza — entrada con vehículos"
              fill
              priority
              sizes="(min-width: 1024px) 40vw, 100vw"
              className="object-cover object-top"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-emerald-deep/55 via-transparent to-transparent" />

            <figcaption className="absolute bottom-5 left-5 right-5 flex items-end justify-between gap-3">
              <div className="rounded-full bg-bone/95 px-4 py-2 backdrop-blur-sm">
                <span className="text-[10px] tracking-eyebrow text-emerald-deep">
                  Nuestro parqueo · Cartago
                </span>
              </div>
              <div className="flex h-10 w-10 items-center justify-center rounded-full bg-mint">
                <Grasshopper className="h-6 w-6" variant="solid" />
              </div>
            </figcaption>
          </figure>
        </div>

        {/* Sub + CTA */}
        <div className="hero-fade col-span-12 flex flex-col justify-end lg:col-span-7">
          <p className="max-w-xl text-base leading-relaxed text-bone/85 lg:text-xl">
            Parqueo vigilado las{" "}
            <span className="text-bone underline decoration-mint decoration-2 underline-offset-4">
              24 horas
            </span>{" "}
            y lavacar profesional en Cartago. Cuidamos tu carro como si fuera
            el nuestro — hecho con cariño tico.
          </p>

          <div className="mt-8 flex flex-col items-start gap-4 sm:flex-row sm:items-center">
            <a
              href="#contacto"
              className="btn-magnet group inline-flex items-center gap-3 rounded-full bg-mint px-8 py-4 text-sm font-medium text-emerald-deep transition-all duration-500 hover:bg-bone"
            >
              Reservar mi espacio
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
            <a
              href="#servicios"
              className="group inline-flex items-center gap-3 text-sm font-medium text-bone"
            >
              <span className="relative">
                Ver servicios
                <span className="absolute -bottom-1 left-0 h-px w-full bg-bone/50 transition-all duration-500 group-hover:w-0" />
                <span className="absolute -bottom-1 left-0 h-px w-0 bg-mint transition-all duration-500 group-hover:w-full" />
              </span>
            </a>
          </div>

          {/* Stats */}
          <div className="mt-12 grid grid-cols-2 gap-x-6 gap-y-8 border-t border-bone/15 pt-8 sm:grid-cols-4">
            {[
              { num: "₡1,000", label: "por hora" },
              { num: "24/7", label: "vigilancia" },
              { num: "+5,000", label: "clientes" },
              { num: "10+", label: "años" },
            ].map((s) => (
              <div key={s.label} className="hero-stat">
                <div className="font-display text-3xl text-bone lg:text-5xl">
                  {s.num}
                </div>
                <div className="mt-2 text-[10px] tracking-eyebrow text-bone/70">
                  {s.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Bottom marquee */}
      <div className="hero-marquee absolute bottom-0 left-0 right-0 z-10 overflow-hidden border-t border-bone/15 bg-emerald-deep/70 py-3 backdrop-blur-md">
        <div className="animate-marquee flex shrink-0 items-center gap-10 whitespace-nowrap font-display text-xl italic text-bone">
          {Array.from({ length: 4 }).map((_, i) => (
            <div key={i} className="flex shrink-0 items-center gap-10">
              <span>★ Parqueo vigilado 24/7</span>
              <span className="text-mint">·</span>
              <span>Lavacar con espuma activa</span>
              <span className="text-mint">·</span>
              <span>Cartago, Costa Rica</span>
              <span className="text-mint">·</span>
              <span>+506 7020-7762</span>
              <span className="text-mint">·</span>
              <span>Pura vida 🇨🇷</span>
              <span className="text-mint">·</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
