"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { SplitWords } from "@/lib/split-text";
import { Grasshopper } from "@/components/grasshopper";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

export function Hero() {
  const root = useRef<HTMLElement>(null);

  useEffect(() => {
    if (!root.current) return;
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({ defaults: { ease: "expo.out" } });

      tl.fromTo(
        ".hero-image-card",
        { clipPath: "inset(0% 0% 100% 0%)" },
        {
          clipPath: "inset(0% 0% 0% 0%)",
          duration: 1.6,
          ease: "expo.inOut",
        }
      );
      tl.fromTo(
        ".hero-image-card img",
        { scale: 1.4 },
        { scale: 1.05, duration: 1.6, ease: "expo.out" },
        "<"
      );

      tl.from(
        ".hero-eyebrow > *",
        {
          y: 14,
          opacity: 0,
          duration: 0.8,
          ease: "power3.out",
          stagger: 0.06,
        },
        "-=1.2"
      );

      tl.from(
        ".hero-h1 .char",
        {
          yPercent: 120,
          rotate: 8,
          duration: 1.1,
          ease: "expo.out",
          stagger: 0.018,
        },
        "-=0.7"
      );

      tl.from(
        ".hero-grasshopper",
        {
          scale: 0,
          rotate: -90,
          opacity: 0,
          duration: 1.2,
          ease: "back.out(1.5)",
        },
        "-=0.8"
      );

      tl.from(
        ".hero-sub > *",
        {
          y: 20,
          opacity: 0,
          duration: 0.9,
          ease: "power3.out",
          stagger: 0.08,
        },
        "-=0.5"
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
        "-=0.4"
      );

      tl.from(".hero-marquee", { opacity: 0, duration: 0.8 }, "-=0.3");

      // Ken Burns on image
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

      // Image card subtle parallax
      gsap.to(".hero-image-card", {
        yPercent: -12,
        ease: "none",
        scrollTrigger: {
          trigger: root.current,
          start: "top top",
          end: "bottom top",
          scrub: true,
        },
      });

      // Content opposite parallax
      gsap.to(".hero-text", {
        yPercent: -25,
        opacity: 0.2,
        ease: "none",
        scrollTrigger: {
          trigger: root.current,
          start: "top top",
          end: "bottom top",
          scrub: true,
        },
      });

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
    }, root);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={root}
      id="inicio"
      className="relative isolate min-h-[100svh] overflow-hidden bg-emerald-deep"
    >
      {/* Decorative background gradient */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-br from-emerald-deep via-emerald-deep to-ink" />
        <div className="absolute -left-32 top-1/3 h-[600px] w-[600px] rounded-full bg-emerald/30 blur-[120px]" />
        <div className="absolute -right-20 -top-20 h-[500px] w-[500px] rounded-full bg-mint/15 blur-[120px]" />
      </div>

      {/* Vertical text */}
      <div className="hero-side absolute left-4 top-1/2 z-10 hidden -translate-y-1/2 lg:left-8 lg:block">
        <span className="vertical-rl block text-xs tracking-eyebrow text-bone/70">
          La Esperanza · Costa Rica · est. 2014
        </span>
      </div>

      {/* Right side meta */}
      <div className="hero-side absolute right-4 top-32 z-30 hidden text-right lg:right-8 lg:block">
        <span className="font-display text-6xl italic leading-none text-bone/70">
          N°01
        </span>
        <div className="mt-2 tracking-eyebrow text-[10px] text-bone/60">
          capítulo
        </div>
      </div>

      {/* Main grid: text left, real photo right */}
      <div className="relative z-10 mx-auto grid min-h-[100svh] max-w-[1500px] grid-cols-1 items-center gap-10 px-6 pb-32 pt-32 lg:grid-cols-12 lg:gap-16 lg:px-16 lg:pb-32 lg:pt-32">
        {/* TEXT */}
        <div className="hero-text relative lg:col-span-7">
          <div className="hero-eyebrow mb-8 flex items-center gap-4 text-bone">
            <span className="inline-block h-px w-12 bg-mint" />
            <span className="tracking-eyebrow text-xs text-bone/90">
              🇨🇷 Costa Rica · Parqueo · Lavacar
            </span>
          </div>

          <h1 className="hero-h1 font-display text-[14vw] text-bone sm:text-[10vw] lg:text-[7.5rem] xl:text-[9rem]">
            <SplitWords text="Tu carro," />
            <br />
            <span className="italic text-bone/85">
              <SplitWords text="en buenas" />
            </span>
            <br />
            <span className="italic text-mint">
              <SplitWords text="manos." />
            </span>
          </h1>

          {/* Floating grasshopper near headline */}
          <div className="hero-grasshopper pointer-events-none absolute right-0 top-0 hidden text-mint lg:block">
            <span className="block animate-hop drop-shadow-[0_8px_30px_rgba(116,198,157,0.4)]">
              <Grasshopper className="h-28 w-28 xl:h-36 xl:w-36" />
            </span>
          </div>

          <div className="hero-sub mt-10 max-w-md">
            <p className="text-base leading-relaxed text-bone/85 lg:text-lg">
              Parqueo vigilado las{" "}
              <span className="text-bone underline decoration-mint decoration-2 underline-offset-4">
                24 horas
              </span>{" "}
              y lavacar profesional, hecho con cariño tico. Cuidamos tu
              carro como si fuera el nuestro.
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
          </div>

          {/* Stats */}
          <div className="mt-16 grid grid-cols-2 gap-x-6 gap-y-8 border-t border-bone/15 pt-8 sm:grid-cols-4">
            {[
              { num: "₡1,000", label: "por hora" },
              { num: "24/7", label: "vigilancia" },
              { num: "+5,000", label: "clientes" },
              { num: "10+", label: "años" },
            ].map((s) => (
              <div key={s.label} className="hero-stat">
                <div className="font-display text-3xl text-bone lg:text-4xl">
                  {s.num}
                </div>
                <div className="mt-2 text-[10px] tracking-eyebrow text-bone/70">
                  {s.label}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* REAL PHOTO CARD */}
        <div className="lg:col-span-5">
          <figure className="hero-image-card relative aspect-[3/4] overflow-hidden rounded-3xl shadow-2xl shadow-emerald-deep/50 ring-1 ring-bone/10">
            <Image
              src="/foto-parqueo.jpg"
              alt="Parqueo y Lavacar La Esperanza — entrada con vehículos parqueados"
              fill
              priority
              sizes="(min-width: 1024px) 40vw, 100vw"
              className="object-cover object-top"
            />
            {/* Subtle warmth overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-emerald-deep/40 via-transparent to-transparent" />

            {/* Caption badge */}
            <figcaption className="absolute bottom-5 left-5 right-5 flex items-end justify-between gap-3">
              <div className="rounded-full bg-bone/95 px-4 py-2 backdrop-blur-sm">
                <span className="text-[10px] tracking-eyebrow text-emerald-deep">
                  Foto real · nuestro parqueo
                </span>
              </div>
              <div className="flex h-10 w-10 items-center justify-center rounded-full bg-mint">
                <Grasshopper className="h-6 w-6" variant="solid" />
              </div>
            </figcaption>

            {/* Top corner index */}
            <div className="absolute left-5 top-5 rounded-full bg-emerald-deep/70 px-3 py-1.5 backdrop-blur-md">
              <span className="text-[10px] tracking-eyebrow text-bone">
                San José · CR
              </span>
            </div>
          </figure>
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
              <span>Tarifa nocturna y mensualidad</span>
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
