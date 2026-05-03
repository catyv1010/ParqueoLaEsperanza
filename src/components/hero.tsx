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
        ".hero-image-wrap",
        { clipPath: "inset(45% 8% 45% 8%)" },
        { clipPath: "inset(0% 0% 0% 0%)", duration: 1.6, ease: "expo.inOut" }
      );

      tl.fromTo(
        ".hero-image",
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
        "-=0.6"
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

      // Ken Burns
      gsap.to(".hero-image", {
        scale: 1.25,
        yPercent: 8,
        ease: "none",
        scrollTrigger: {
          trigger: root.current,
          start: "top top",
          end: "bottom top",
          scrub: true,
        },
      });

      // Content parallax
      gsap.to(".hero-content", {
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

      // Side parallax
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
      {/* Real lavacar image — car covered in white foam */}
      <div className="hero-image-wrap absolute inset-0 overflow-hidden">
        <Image
          src="https://images.unsplash.com/photo-1601925240970-98447081d56e?w=2400&q=85&auto=format&fit=crop"
          alt="Auto cubierto de espuma en lavacar profesional"
          fill
          priority
          sizes="100vw"
          className="hero-image ken-burns object-cover"
        />
        {/* Cinematic green-tinted overlay */}
        <div className="absolute inset-0 bg-gradient-to-br from-emerald-deep/30 via-ink/55 to-ink/85" />
        <div className="absolute inset-0 bg-gradient-to-t from-cream via-transparent to-transparent" />
      </div>

      {/* Vertical text */}
      <div className="hero-side absolute left-4 top-1/2 z-10 hidden -translate-y-1/2 lg:left-8 lg:block">
        <span className="vertical-rl block text-xs tracking-eyebrow text-bone/70">
          La Esperanza · Costa Rica · est. 2014
        </span>
      </div>

      {/* Right side meta */}
      <div className="hero-side absolute right-4 top-1/2 z-10 hidden -translate-y-1/2 lg:right-8 lg:block">
        <div className="flex flex-col items-end gap-3 text-bone/70">
          <span className="font-display text-7xl italic leading-none">
            N°01
          </span>
          <span className="tracking-eyebrow text-[10px]">capítulo</span>
          <span className="mt-4 inline-block h-32 w-px bg-bone/40" />
        </div>
      </div>

      {/* Esperanza floating big — brand mascot */}
      <div className="hero-grasshopper pointer-events-none absolute right-[8%] top-[18%] z-10 hidden text-mint lg:block">
        <span className="block animate-hop drop-shadow-[0_8px_30px_rgba(116,198,157,0.4)]">
          <Grasshopper className="h-44 w-44 xl:h-56 xl:w-56" />
        </span>
      </div>

      {/* Content */}
      <div className="hero-content relative z-10 mx-auto flex min-h-[100svh] max-w-[1500px] flex-col justify-end px-6 pb-32 pt-32 lg:px-16 lg:pb-40 lg:pt-40">
        <div className="hero-eyebrow mb-8 flex items-center gap-4 text-bone">
          <span className="inline-block h-px w-12 bg-mint" />
          <span className="tracking-eyebrow text-xs text-bone/90">
            🇨🇷 Costa Rica · Parqueo · Lavacar
          </span>
        </div>

        <h1 className="hero-h1 max-w-[18ch] font-display text-[15vw] text-bone sm:text-[11vw] lg:text-[8.5rem] xl:text-[10rem]">
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

        <div className="hero-sub mt-12 grid grid-cols-12 gap-6">
          <p className="col-span-12 max-w-md text-base leading-relaxed text-bone/85 md:col-span-5 lg:text-lg">
            Parqueo vigilado las{" "}
            <span className="text-bone underline decoration-mint decoration-2 underline-offset-4">
              24 horas
            </span>{" "}
            y lavacar profesional, hecho con cariño tico. Cuidamos tu vehículo
            como si fuera el nuestro.
          </p>

          <div className="col-span-12 flex flex-col items-start gap-4 sm:flex-row md:col-span-7 md:items-center md:justify-end">
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
        <div className="mt-20 grid grid-cols-2 gap-x-6 gap-y-8 border-t border-bone/20 pt-8 md:grid-cols-4">
          {[
            { num: "₡1,000", label: "por hora de parqueo" },
            { num: "24/7", label: "vigilancia activa" },
            { num: "+5,000", label: "clientes felices" },
            { num: "10+", label: "años cuidando carros" },
          ].map((s) => (
            <div key={s.label} className="hero-stat">
              <div className="font-display text-4xl text-bone lg:text-5xl">
                {s.num}
              </div>
              <div className="mt-2 text-[10px] tracking-eyebrow text-bone/70">
                {s.label}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Bottom marquee */}
      <div className="hero-marquee absolute bottom-0 left-0 right-0 z-10 overflow-hidden border-t border-bone/15 bg-emerald-deep/60 py-3 backdrop-blur-md">
        <div className="animate-marquee flex shrink-0 items-center gap-10 whitespace-nowrap font-display text-xl italic text-bone">
          {Array.from({ length: 4 }).map((_, i) => (
            <div key={i} className="flex shrink-0 items-center gap-10">
              <span>★ Parqueo vigilado 24/7</span>
              <span className="text-mint">·</span>
              <span>Lavado con espuma activa y secado a mano</span>
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
