"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Tilt } from "@/components/tilt";
import { Magnetic } from "@/components/magnetic";
import { CountUp } from "@/components/count-up";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

export function Hero() {
  const root = useRef<HTMLElement>(null);

  useEffect(() => {
    if (!root.current) return;
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({ defaults: { ease: "expo.out" } });

      tl.from(".hero-eyebrow", {
        y: -20,
        opacity: 0,
        duration: 1,
        ease: "power3.out",
      });

      tl.from(
        ".hero-h1 .char",
        {
          yPercent: 130,
          opacity: 0,
          rotate: 4,
          duration: 1.5,
          ease: "expo.out",
          stagger: 0.018,
        },
        "-=0.7"
      );

      tl.fromTo(
        ".hero-photo",
        { clipPath: "inset(100% 0% 0% 0%)" },
        { clipPath: "inset(0% 0% 0% 0%)", duration: 1.6, ease: "expo.inOut" },
        "-=1.0"
      );
      tl.fromTo(
        ".hero-photo img",
        { scale: 1.5 },
        { scale: 1.05, duration: 1.6, ease: "expo.out" },
        "<"
      );

      tl.from(
        ".hero-fade > *",
        {
          y: 28,
          opacity: 0,
          duration: 0.9,
          ease: "power3.out",
          stagger: 0.08,
        },
        "-=0.8"
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

      tl.from(".hero-marquee", { opacity: 0, duration: 1 }, "-=0.4");
      tl.from(".hero-cue", { opacity: 0, y: -10, duration: 0.8 }, "-=0.6");

      // Mesh blobs floating
      gsap.to(".hero-blob-1", {
        x: 60,
        y: -40,
        duration: 14,
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut",
      });
      gsap.to(".hero-blob-2", {
        x: -50,
        y: 30,
        duration: 18,
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut",
      });

      // Photo Ken Burns on scroll
      gsap.to(".hero-photo img", {
        scale: 1.22,
        ease: "none",
        scrollTrigger: {
          trigger: root.current,
          start: "top top",
          end: "bottom top",
          scrub: true,
        },
      });

      // Headline parallax + fade
      gsap.to(".hero-h1", {
        yPercent: -20,
        opacity: 0.25,
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
        yPercent: -80,
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
      className="relative isolate min-h-[100svh] overflow-hidden mesh-night"
    >
      {/* Floating mesh blobs */}
      <div
        aria-hidden
        className="hero-blob-1 absolute -left-32 top-1/3 h-[600px] w-[600px] rounded-full bg-mint/12 blur-[180px]"
      />
      <div
        aria-hidden
        className="hero-blob-2 absolute -right-24 -top-12 h-[520px] w-[520px] rounded-full bg-emerald/30 blur-[160px]"
      />
      <div
        aria-hidden
        className="absolute bottom-0 left-1/2 h-[420px] w-[900px] -translate-x-1/2 rounded-full bg-emerald-deep/60 blur-[180px]"
      />

      {/* Eyebrow plate top */}
      <div className="hero-eyebrow absolute left-1/2 top-28 z-30 -translate-x-1/2 lg:top-32">
        <div className="flex items-center gap-3 rounded-full border border-mint/25 bg-night/40 px-5 py-2 backdrop-blur-md">
          <span className="relative flex h-2 w-2">
            <span className="absolute inline-flex h-full w-full rounded-full bg-mint pulse-mint" />
            <span className="relative inline-flex h-2 w-2 rounded-full bg-mint" />
          </span>
          <span className="font-display text-base italic text-bone">
            Cartago
          </span>
          <span className="text-bone/40">·</span>
          <span className="tracking-eyebrow text-[10px] text-bone/70">
            Costa Rica · Abierto ahora
          </span>
        </div>
      </div>

      {/* Vertical side text */}
      <div className="hero-side absolute left-4 top-1/2 z-20 hidden -translate-y-1/2 lg:left-10 lg:block">
        <span className="vertical-rl block text-[10px] tracking-eyebrow text-mint/60">
          est. 2014 · pura vida · cuidamos cada carro
        </span>
      </div>

      {/* HEADLINE */}
      <div className="relative z-10 mx-auto max-w-[1500px] px-6 pt-44 lg:px-12 lg:pt-52">
        <h1 className="hero-h1 font-display leading-[0.9] text-bone">
          <span className="char-mask block text-[clamp(3.4rem,9vw,9.5rem)]">
            {"Parqueo".split("").map((c, i) => (
              <span key={i} className="char">
                {c}
              </span>
            ))}
          </span>
          <span className="char-mask block text-[clamp(2.8rem,7.5vw,8rem)] italic text-bone/70">
            {"y Lavacar".split("").map((c, i) => (
              <span key={i + 100} className="char">
                {c}
              </span>
            ))}
          </span>
          <span className="char-mask glow-mint block text-[clamp(3.6rem,10.5vw,11rem)] italic">
            {"La Esperanza".split("").map((c, i) => (
              <span key={i + 200} className="char">
                {c}
              </span>
            ))}
          </span>
        </h1>
      </div>

      {/* Bottom row */}
      <div className="relative z-10 mx-auto mt-12 grid max-w-[1500px] grid-cols-12 gap-8 px-6 pb-32 lg:mt-16 lg:gap-12 lg:px-12 lg:pb-32">
        {/* Photo */}
        <div className="col-span-12 lg:col-span-5">
          <Tilt max={6} className="block">
            <figure className="hero-photo ring-glow-strong relative aspect-[4/5] overflow-hidden rounded-3xl">
              <Image
                src="/foto-parqueo.jpg"
                alt="Parqueo y Lavacar La Esperanza — entrada con vehículos"
                fill
                priority
                sizes="(min-width: 1024px) 40vw, 100vw"
                className="object-cover object-top"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-night via-night/30 to-transparent" />
              <div className="absolute inset-0 bg-gradient-to-br from-emerald-deep/35 via-transparent to-mint/10 mix-blend-overlay" />

              <figcaption className="absolute bottom-5 left-5 right-5">
                <div className="inline-flex items-center gap-2 rounded-full border border-mint/30 bg-night/70 px-4 py-2 backdrop-blur-md">
                  <span className="h-1.5 w-1.5 rounded-full bg-mint shadow-[0_0_8px_rgba(116,198,157,0.8)]" />
                  <span className="text-[10px] tracking-eyebrow text-bone">
                    Nuestra entrada · Cartago
                  </span>
                </div>
              </figcaption>
            </figure>
          </Tilt>
        </div>

        {/* Sub + CTA + Stats */}
        <div className="hero-fade col-span-12 flex flex-col justify-end lg:col-span-7">
          <p className="max-w-xl text-base leading-relaxed text-bone/80 lg:text-xl">
            Parqueo vigilado las{" "}
            <span className="text-mint underline decoration-mint/60 decoration-2 underline-offset-4">
              24 horas
            </span>{" "}
            y lavacar profesional en Cartago. Cuidamos tu carro como si fuera el
            nuestro — hecho con cariño tico.
          </p>

          <div className="mt-8 flex flex-col items-start gap-4 sm:flex-row sm:items-center">
            <Magnetic
              href="#contacto"
              strength={0.45}
              className="btn-magnet group inline-flex items-center gap-3 rounded-full bg-mint px-8 py-4 text-sm font-medium text-night shadow-[0_0_36px_rgba(116,198,157,0.35)] transition-all duration-500 hover:shadow-[0_0_56px_rgba(116,198,157,0.6)]"
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
            </Magnetic>
            <a
              href="#servicios"
              className="group inline-flex items-center gap-3 text-sm font-medium text-bone"
            >
              <span className="relative">
                Ver servicios
                <span className="absolute -bottom-1 left-0 h-px w-full bg-bone/30 transition-all duration-500 group-hover:w-0" />
                <span className="absolute -bottom-1 left-0 h-px w-0 bg-mint transition-all duration-500 group-hover:w-full" />
              </span>
            </a>
          </div>

          {/* Stats con líneas verticales */}
          <div className="mt-12 grid grid-cols-2 gap-y-8 border-t border-mint/15 pt-8 sm:grid-cols-4">
            <div className="hero-stat sm:border-r sm:border-mint/10 sm:pr-6">
              <div className="font-display text-3xl text-bone lg:text-5xl">
                <span>₡</span>
                <CountUp to={1000} format="comma" />
              </div>
              <div className="mt-2 text-[10px] tracking-eyebrow text-mint/70">
                por hora
              </div>
            </div>
            <div className="hero-stat sm:border-r sm:border-mint/10 sm:px-6">
              <div className="font-display text-3xl text-bone lg:text-5xl">
                <CountUp to={24} suffix="/7" />
              </div>
              <div className="mt-2 text-[10px] tracking-eyebrow text-mint/70">
                vigilancia
              </div>
            </div>
            <div className="hero-stat sm:border-r sm:border-mint/10 sm:px-6">
              <div className="font-display text-3xl text-bone lg:text-5xl">
                <span>+</span>
                <CountUp to={5000} format="comma" />
              </div>
              <div className="mt-2 text-[10px] tracking-eyebrow text-mint/70">
                clientes
              </div>
            </div>
            <div className="hero-stat sm:pl-6">
              <div className="font-display text-3xl text-bone lg:text-5xl">
                <CountUp to={10} suffix="+" />
              </div>
              <div className="mt-2 text-[10px] tracking-eyebrow text-mint/70">
                años
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll cue */}
      <div className="hero-cue absolute bottom-24 left-1/2 z-10 hidden -translate-x-1/2 lg:block">
        <div className="flex flex-col items-center gap-3">
          <span className="text-[10px] tracking-eyebrow text-mint/70">
            scroll
          </span>
          <span className="scroll-cue relative block h-12 w-px bg-mint/15" />
        </div>
      </div>

      {/* Marquee */}
      <div className="hero-marquee absolute bottom-0 left-0 right-0 z-10 overflow-hidden border-y border-mint/10 bg-night/60 py-3 backdrop-blur-md">
        <div className="animate-marquee flex shrink-0 items-center gap-10 whitespace-nowrap font-display text-xl italic text-bone/85">
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
              <span>Pura vida</span>
              <span className="text-mint">·</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
