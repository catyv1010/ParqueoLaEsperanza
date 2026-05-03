"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Magnetic } from "@/components/magnetic";
import { CountUp } from "@/components/count-up";
import { SkyEffects } from "@/components/sky-effects";
import { Constellation } from "@/components/constellation";
import { Particles } from "@/components/particles";
import { Aurora } from "@/components/aurora";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

export function Hero() {
  const root = useRef<HTMLElement>(null);

  useEffect(() => {
    if (!root.current) return;
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({ defaults: { ease: "expo.out" } });

      tl.from(".hero-eyebrow-top", {
        y: -16,
        opacity: 0,
        duration: 0.9,
        ease: "power3.out",
      });

      tl.from(".hero-eyebrow-line > *", {
        y: 16,
        opacity: 0,
        duration: 0.7,
        stagger: 0.05,
        ease: "power3.out",
      }, "-=0.3");

      // Title chars: 3D rotation reveal
      tl.from(
        ".hero-title .char",
        {
          yPercent: 130,
          rotateX: -90,
          opacity: 0,
          duration: 1.4,
          ease: "expo.out",
          stagger: 0.025,
          transformOrigin: "50% 50% -20px",
        },
        "-=0.4"
      );

      tl.from(
        ".hero-sub",
        { y: 30, opacity: 0, duration: 0.9, ease: "power3.out" },
        "-=0.7"
      );

      tl.from(
        ".hero-cta > *",
        {
          y: 24,
          opacity: 0,
          duration: 0.7,
          stagger: 0.08,
          ease: "power3.out",
        },
        "-=0.5"
      );

      tl.from(
        ".hero-stat",
        {
          y: 30,
          opacity: 0,
          duration: 0.7,
          stagger: 0.07,
          ease: "power2.out",
        },
        "-=0.4"
      );

      tl.fromTo(
        ".hero-banner",
        { clipPath: "inset(0% 50% 0% 50%)" },
        {
          clipPath: "inset(0% 0% 0% 0%)",
          duration: 1.6,
          ease: "expo.inOut",
        },
        "-=0.8"
      );
      tl.fromTo(
        ".hero-banner img",
        { scale: 1.4 },
        { scale: 1.05, duration: 1.6, ease: "expo.out" },
        "<"
      );

      tl.from(".hero-cue", { opacity: 0, y: -8, duration: 0.7 }, "-=0.4");

      // Floating blobs
      gsap.to(".hero-blob-1", {
        x: 60,
        y: -40,
        duration: 16,
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut",
      });
      gsap.to(".hero-blob-2", {
        x: -40,
        y: 30,
        duration: 22,
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut",
      });

      // Ornament slow rotation
      gsap.to(".hero-ornament", {
        rotate: 360,
        duration: 80,
        repeat: -1,
        ease: "none",
      });

      // Multi-layer star parallax (different speeds)
      gsap.to(".stars-back", {
        yPercent: -8,
        ease: "none",
        scrollTrigger: {
          trigger: root.current,
          start: "top top",
          end: "bottom top",
          scrub: true,
        },
      });
      gsap.to(".stars-mid", {
        yPercent: -22,
        ease: "none",
        scrollTrigger: {
          trigger: root.current,
          start: "top top",
          end: "bottom top",
          scrub: true,
        },
      });
      gsap.to(".stars-front", {
        yPercent: -45,
        ease: "none",
        scrollTrigger: {
          trigger: root.current,
          start: "top top",
          end: "bottom top",
          scrub: true,
        },
      });

      // Constellation parallax
      gsap.to(".hero-constellation", {
        yPercent: -15,
        ease: "none",
        scrollTrigger: {
          trigger: root.current,
          start: "top top",
          end: "bottom top",
          scrub: true,
        },
      });

      // Title parallax + fade
      gsap.to(".hero-title-wrap", {
        yPercent: -20,
        opacity: 0.2,
        ease: "none",
        scrollTrigger: {
          trigger: root.current,
          start: "top top",
          end: "bottom top",
          scrub: true,
        },
      });

      // Banner parallax
      gsap.to(".hero-banner img", {
        yPercent: -10,
        scale: 1.18,
        ease: "none",
        scrollTrigger: {
          trigger: ".hero-banner",
          start: "top bottom",
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
      className="spotlight relative isolate min-h-[100svh] overflow-hidden mesh-night"
    >
      {/* AURORA boreal — ondas suaves de luz */}
      <Aurora />

      {/* 3 LAYERS of stars con parallax distinto */}
      <div className="stars-back absolute inset-0">
        <SkyEffects stars={35} area="full" />
      </div>
      <div className="stars-mid absolute inset-0">
        <SkyEffects stars={50} area="full" />
      </div>
      <div className="stars-front absolute inset-0">
        <SkyEffects stars={30} area="full" />
      </div>

      {/* Constelación SVG */}
      <div className="hero-constellation absolute inset-0 opacity-70">
        <Constellation />
      </div>

      {/* Partículas flotantes */}
      <Particles count={14} />

      {/* Mesh blobs flotantes */}
      <div
        aria-hidden
        className="hero-blob-1 absolute -left-32 top-1/3 h-[460px] w-[460px] rounded-full bg-mint/12 blur-[160px]"
      />
      <div
        aria-hidden
        className="hero-blob-2 absolute -right-24 -top-12 h-[420px] w-[420px] rounded-full bg-emerald/30 blur-[140px]"
      />
      <div
        aria-hidden
        className="absolute bottom-0 left-1/2 h-[300px] w-[700px] -translate-x-1/2 rounded-full bg-emerald-deep/60 blur-[160px]"
      />

      {/* Ornamento rotando — círculo concéntrico decorativo */}
      <svg
        aria-hidden
        className="hero-ornament pointer-events-none absolute right-[-200px] top-[-200px] h-[600px] w-[600px] opacity-15"
        viewBox="0 0 200 200"
      >
        <circle cx="100" cy="100" r="98" stroke="rgba(116,198,157,0.4)" strokeWidth="0.3" fill="none" />
        <circle cx="100" cy="100" r="80" stroke="rgba(116,198,157,0.3)" strokeWidth="0.3" fill="none" strokeDasharray="2 2" />
        <circle cx="100" cy="100" r="60" stroke="rgba(116,198,157,0.25)" strokeWidth="0.3" fill="none" />
        <circle cx="100" cy="100" r="40" stroke="rgba(116,198,157,0.2)" strokeWidth="0.3" fill="none" strokeDasharray="3 4" />
        <text
          x="100"
          y="6"
          textAnchor="middle"
          fontSize="3.5"
          letterSpacing="0.4em"
          fill="rgba(183,228,199,0.6)"
          fontFamily="var(--font-grotesk)"
        >
          PARQUEO · LAVACAR · CARTAGO · COSTA RICA · 24/7 ·
        </text>
      </svg>

      {/* Plate eyebrow top */}
      <div className="hero-eyebrow-top absolute left-1/2 top-24 z-30 -translate-x-1/2 lg:top-28">
        <div className="flex items-center gap-2.5 whitespace-nowrap rounded-full border border-mint/25 bg-night/40 px-4 py-1.5 backdrop-blur-md lg:gap-3 lg:px-5 lg:py-2">
          <span className="relative flex h-2 w-2">
            <span className="absolute inline-flex h-full w-full rounded-full bg-mint pulse-mint" />
            <span className="relative inline-flex h-2 w-2 rounded-full bg-mint" />
          </span>
          <span className="font-display text-xs italic text-bone lg:text-sm">
            Cartago
          </span>
          <span className="text-bone/40">·</span>
          <span className="tracking-eyebrow text-[8px] text-bone/65 lg:text-[9px]">
            Costa Rica · Abierto
          </span>
        </div>
      </div>

      {/* Vertical text side */}
      <div className="absolute left-4 top-1/2 z-20 hidden -translate-y-1/2 lg:left-10 lg:block">
        <span className="vertical-rl block text-[10px] tracking-eyebrow text-mint/55">
          est. 2014 · pura vida
        </span>
      </div>

      {/* MAIN content centered */}
      <div className="relative z-10 mx-auto flex min-h-[100svh] max-w-[1300px] flex-col items-center justify-center gap-8 px-5 pb-24 pt-36 text-center sm:px-6 lg:gap-12 lg:pb-32 lg:pt-44">
        {/* Eyebrow line — sin reglas en mobile */}
        <div className="hero-eyebrow-line flex items-center gap-4 text-mint/70">
          <span className="hidden h-px w-10 bg-mint/50 sm:inline-block" />
          <span className="tracking-eyebrow text-[9px] lg:text-[10px]">
            Parqueo · Lavacar · 24/7
          </span>
          <span className="hidden h-px w-10 bg-mint/50 sm:inline-block" />
        </div>

        {/* HEADLINE */}
        <div className="hero-title-wrap">
          <h1 className="hero-title font-display leading-[0.95] text-bone">
            <span className="char-mask block text-[clamp(1.7rem,4.5vw,4.5rem)] tracking-tight">
              {"Parqueo y Lavacar".split("").map((c, i) => (
                <span key={i} className="char">
                  {c === " " ? " " : c}
                </span>
              ))}
            </span>
            <span className="char-mask glow-mint mt-2 block text-[clamp(2.6rem,8vw,8.5rem)] italic leading-[1.02] lg:mt-3">
              {"La Esperanza".split("").map((c, i) => (
                <span key={i + 100} className="char">
                  {c === " " ? " " : c}
                </span>
              ))}
            </span>
          </h1>
        </div>

        {/* Subtitle */}
        <p className="hero-sub max-w-2xl text-sm leading-relaxed text-bone/80 sm:text-base lg:text-xl">
          Tu vehículo, en buenas manos. Vigilancia las{" "}
          <span className="text-mint underline decoration-mint/60 decoration-1 underline-offset-4">
            24 horas
          </span>{" "}
          y lavacar profesional en el corazón de Cartago.
        </p>

        {/* CTAs */}
        <div className="hero-cta flex w-full max-w-sm flex-col items-stretch gap-3 sm:max-w-none sm:flex-row sm:items-center sm:justify-center sm:gap-5">
          <Magnetic
            href="#contacto"
            strength={0.4}
            className="btn-magnet group inline-flex items-center justify-center gap-3 rounded-full bg-mint px-8 py-4 text-sm font-medium text-night shadow-[0_0_36px_rgba(116,198,157,0.35)] transition-all duration-500 hover:shadow-[0_0_60px_rgba(116,198,157,0.65)]"
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
            className="group inline-flex items-center justify-center gap-2 rounded-full border border-mint/30 px-7 py-3.5 text-sm font-medium text-bone transition-all hover:border-mint hover:bg-mint/10 sm:border-0 sm:px-3 sm:py-0"
          >
            Ver servicios
            <svg
              viewBox="0 0 24 24"
              className="h-3.5 w-3.5 text-mint transition-transform duration-500 group-hover:translate-x-1"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
            >
              <path d="M9 18l6-6-6-6" />
            </svg>
          </a>
        </div>

        {/* Stats horizontal */}
        <div className="mt-4 grid w-full max-w-3xl grid-cols-2 gap-y-6 border-t border-mint/15 pt-7 sm:grid-cols-4">
          <div className="hero-stat sm:border-r sm:border-mint/10">
            <div className="font-display text-2xl text-bone lg:text-3xl">
              <span>₡</span>
              <CountUp to={1000} format="comma" />
            </div>
            <div className="mt-1.5 text-[9px] tracking-eyebrow text-mint/65">
              por hora
            </div>
          </div>
          <div className="hero-stat sm:border-r sm:border-mint/10">
            <div className="font-display text-2xl text-bone lg:text-3xl">
              <CountUp to={24} suffix="/7" />
            </div>
            <div className="mt-1.5 text-[9px] tracking-eyebrow text-mint/65">
              vigilancia
            </div>
          </div>
          <div className="hero-stat sm:border-r sm:border-mint/10">
            <div className="font-display text-2xl text-bone lg:text-3xl">
              <span>+</span>
              <CountUp to={5000} format="comma" />
            </div>
            <div className="mt-1.5 text-[9px] tracking-eyebrow text-mint/65">
              clientes
            </div>
          </div>
          <div className="hero-stat">
            <div className="font-display text-2xl text-bone lg:text-3xl">
              <CountUp to={10} suffix="+" />
            </div>
            <div className="mt-1.5 text-[9px] tracking-eyebrow text-mint/65">
              años
            </div>
          </div>
        </div>
      </div>

      {/* PHOTO BANNER bottom — wide aspect, contained */}
      <div className="relative z-10 mx-auto mb-12 max-w-[1300px] px-5 sm:px-6 lg:mb-16 lg:px-12">
        <figure className="hero-banner ring-glow-strong relative aspect-[4/3] overflow-hidden rounded-2xl sm:aspect-[16/9] lg:aspect-[16/7]">
          <Image
            src="/foto-parqueo.jpg"
            alt="Parqueo y Lavacar La Esperanza — Cartago"
            fill
            priority
            sizes="(min-width: 1024px) 80vw, 100vw"
            className="object-cover object-top"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-night/70 via-transparent to-transparent" />
          <div className="absolute inset-0 bg-gradient-to-r from-night/30 via-transparent to-night/30 mix-blend-overlay" />

          <figcaption className="absolute bottom-5 left-5 right-5 flex items-end justify-between gap-4">
            <div className="inline-flex items-center gap-2 rounded-full border border-mint/30 bg-night/70 px-4 py-2 backdrop-blur-md">
              <span className="h-1.5 w-1.5 rounded-full bg-mint shadow-[0_0_8px_rgba(116,198,157,0.8)]" />
              <span className="text-[10px] tracking-eyebrow text-bone">
                Nuestra entrada · Cartago
              </span>
            </div>
            <div className="hidden font-display text-sm italic text-bone/75 sm:block">
              foto real del parqueo
            </div>
          </figcaption>
        </figure>
      </div>

      {/* Scroll cue */}
      <div className="hero-cue absolute bottom-4 left-1/2 z-10 hidden -translate-x-1/2 lg:block">
        <div className="flex flex-col items-center gap-2">
          <span className="text-[9px] tracking-eyebrow text-mint/65">scroll</span>
          <span className="scroll-cue relative block h-8 w-px bg-mint/15" />
        </div>
      </div>
    </section>
  );
}
