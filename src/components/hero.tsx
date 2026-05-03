"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Tilt } from "@/components/tilt";
import { Magnetic } from "@/components/magnetic";
import { CountUp } from "@/components/count-up";
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

      tl.from(".hero-eyebrow", {
        y: -16,
        opacity: 0,
        duration: 0.9,
        ease: "power3.out",
      });

      tl.from(
        ".hero-h1 .char",
        {
          yPercent: 130,
          opacity: 0,
          duration: 1.3,
          ease: "expo.out",
          stagger: 0.022,
        },
        "-=0.6"
      );

      tl.from(
        ".hero-rule",
        {
          scaleX: 0,
          duration: 1.1,
          ease: "expo.inOut",
          transformOrigin: "left center",
        },
        "-=0.8"
      );

      tl.fromTo(
        ".hero-photo",
        { clipPath: "inset(0% 0% 100% 0%)" },
        { clipPath: "inset(0% 0% 0% 0%)", duration: 1.5, ease: "expo.inOut" },
        "-=1.0"
      );
      tl.fromTo(
        ".hero-photo img",
        { scale: 1.4 },
        { scale: 1.05, duration: 1.5, ease: "expo.out" },
        "<"
      );

      tl.from(
        ".hero-fade > *",
        {
          y: 24,
          opacity: 0,
          duration: 0.8,
          ease: "power3.out",
          stagger: 0.08,
        },
        "-=0.7"
      );

      tl.from(
        ".hero-stat",
        {
          y: 24,
          opacity: 0,
          duration: 0.65,
          stagger: 0.07,
          ease: "power2.out",
        },
        "-=0.4"
      );

      tl.from(".hero-cue", { opacity: 0, y: -8, duration: 0.7 }, "-=0.4");

      // Floating blobs
      gsap.to(".hero-blob-1", {
        x: 50,
        y: -30,
        duration: 16,
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut",
      });
      gsap.to(".hero-blob-2", {
        x: -40,
        y: 25,
        duration: 20,
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut",
      });

      // Photo Ken Burns
      gsap.to(".hero-photo img", {
        scale: 1.18,
        ease: "none",
        scrollTrigger: {
          trigger: root.current,
          start: "top top",
          end: "bottom top",
          scrub: true,
        },
      });

      // Headline parallax
      gsap.to(".hero-headline", {
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

      // Stars subtle parallax
      gsap.to(".hero-stars", {
        yPercent: -15,
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
      {/* Stars + meteors layer */}
      <div className="hero-stars absolute inset-0">
        <SkyEffects stars={70} meteors={4} area="full" />
      </div>

      {/* Floating mesh blobs */}
      <div
        aria-hidden
        className="hero-blob-1 absolute -left-32 top-1/3 h-[460px] w-[460px] rounded-full bg-mint/10 blur-[160px]"
      />
      <div
        aria-hidden
        className="hero-blob-2 absolute -right-24 -top-12 h-[420px] w-[420px] rounded-full bg-emerald/25 blur-[140px]"
      />
      <div
        aria-hidden
        className="absolute bottom-0 left-1/2 h-[300px] w-[700px] -translate-x-1/2 rounded-full bg-emerald-deep/60 blur-[160px]"
      />

      {/* Eyebrow plate top */}
      <div className="hero-eyebrow absolute left-1/2 top-28 z-30 -translate-x-1/2">
        <div className="flex items-center gap-3 rounded-full border border-mint/25 bg-night/40 px-5 py-2 backdrop-blur-md">
          <span className="relative flex h-2 w-2">
            <span className="absolute inline-flex h-full w-full rounded-full bg-mint pulse-mint" />
            <span className="relative inline-flex h-2 w-2 rounded-full bg-mint" />
          </span>
          <span className="font-display text-sm italic text-bone">Cartago</span>
          <span className="text-bone/40">·</span>
          <span className="tracking-eyebrow text-[9px] text-bone/65">
            Costa Rica · Abierto ahora
          </span>
        </div>
      </div>

      {/* Vertical side text */}
      <div className="absolute left-4 top-1/2 z-20 hidden -translate-y-1/2 lg:left-10 lg:block">
        <span className="vertical-rl block text-[10px] tracking-eyebrow text-mint/55">
          est. 2014 · pura vida
        </span>
      </div>

      {/* Main grid: headline left, photo right */}
      <div className="relative z-10 mx-auto grid min-h-[100svh] max-w-[1400px] grid-cols-12 items-center gap-10 px-6 pt-44 pb-32 lg:gap-16 lg:px-12 lg:pt-40 lg:pb-32">
        {/* Headline column */}
        <div className="hero-headline col-span-12 lg:col-span-7">
          <div className="hero-rule mb-8 h-px w-16 bg-mint/60 lg:w-24" />

          <h1 className="hero-h1 font-display text-bone">
            <span className="char-mask block text-[clamp(2.4rem,5.2vw,5.4rem)] leading-[1]">
              {"Parqueo".split("").map((c, i) => (
                <span key={i} className="char">
                  {c}
                </span>
              ))}{" "}
              {"y Lavacar".split("").map((c, i) => (
                <span key={i + 100} className="char italic text-bone/65">
                  {c === " " ? " " : c}
                </span>
              ))}
            </span>
            <span className="char-mask glow-mint mt-2 block text-[clamp(3rem,6.8vw,7rem)] italic leading-[1.05]">
              {"La Esperanza".split("").map((c, i) => (
                <span key={i + 200} className="char">
                  {c === " " ? " " : c}
                </span>
              ))}
            </span>
          </h1>

          <div className="hero-fade mt-10 max-w-xl">
            <p className="text-base leading-relaxed text-bone/75 lg:text-lg">
              Parqueo vigilado las{" "}
              <span className="text-mint underline decoration-mint/60 decoration-1 underline-offset-4">
                24 horas
              </span>{" "}
              y lavacar profesional en Cartago. Cuidamos tu carro como si fuera
              el nuestro.
            </p>

            <div className="mt-8 flex flex-col items-start gap-4 sm:flex-row sm:items-center">
              <Magnetic
                href="#contacto"
                strength={0.4}
                className="btn-magnet group inline-flex items-center gap-3 rounded-full bg-mint px-7 py-3.5 text-sm font-medium text-night shadow-[0_0_36px_rgba(116,198,157,0.35)] transition-all duration-500 hover:shadow-[0_0_56px_rgba(116,198,157,0.6)]"
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
                className="group inline-flex items-center gap-3 text-sm font-medium text-bone/85"
              >
                <span className="relative">
                  Ver servicios
                  <span className="absolute -bottom-1 left-0 h-px w-full bg-bone/30 transition-all duration-500 group-hover:w-0" />
                  <span className="absolute -bottom-1 left-0 h-px w-0 bg-mint transition-all duration-500 group-hover:w-full" />
                </span>
              </a>
            </div>
          </div>

          {/* Stats refined */}
          <div className="mt-12 grid max-w-xl grid-cols-2 gap-y-6 border-t border-mint/15 pt-7 sm:grid-cols-4">
            <div className="hero-stat sm:border-r sm:border-mint/10 sm:pr-5">
              <div className="font-display text-2xl text-bone lg:text-3xl">
                <span>₡</span>
                <CountUp to={1000} format="comma" />
              </div>
              <div className="mt-1.5 text-[9px] tracking-eyebrow text-mint/65">
                por hora
              </div>
            </div>
            <div className="hero-stat sm:border-r sm:border-mint/10 sm:px-5">
              <div className="font-display text-2xl text-bone lg:text-3xl">
                <CountUp to={24} suffix="/7" />
              </div>
              <div className="mt-1.5 text-[9px] tracking-eyebrow text-mint/65">
                vigilancia
              </div>
            </div>
            <div className="hero-stat sm:border-r sm:border-mint/10 sm:px-5">
              <div className="font-display text-2xl text-bone lg:text-3xl">
                <span>+</span>
                <CountUp to={5000} format="comma" />
              </div>
              <div className="mt-1.5 text-[9px] tracking-eyebrow text-mint/65">
                clientes
              </div>
            </div>
            <div className="hero-stat sm:pl-5">
              <div className="font-display text-2xl text-bone lg:text-3xl">
                <CountUp to={10} suffix="+" />
              </div>
              <div className="mt-1.5 text-[9px] tracking-eyebrow text-mint/65">
                años
              </div>
            </div>
          </div>
        </div>

        {/* Photo column */}
        <div className="col-span-12 lg:col-span-5">
          <Tilt max={5} className="block">
            <figure className="hero-photo ring-glow-strong relative aspect-[4/5] overflow-hidden rounded-2xl">
              <Image
                src="/foto-parqueo.jpg"
                alt="Parqueo y Lavacar La Esperanza — entrada con vehículos"
                fill
                priority
                sizes="(min-width: 1024px) 38vw, 100vw"
                className="object-cover object-top"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-night via-night/30 to-transparent" />
              <div className="absolute inset-0 bg-gradient-to-br from-emerald-deep/30 via-transparent to-mint/8 mix-blend-overlay" />

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
      </div>

      {/* Scroll cue */}
      <div className="hero-cue absolute bottom-10 left-1/2 z-10 hidden -translate-x-1/2 lg:block">
        <div className="flex flex-col items-center gap-3">
          <span className="text-[9px] tracking-eyebrow text-mint/65">
            scroll
          </span>
          <span className="scroll-cue relative block h-10 w-px bg-mint/15" />
        </div>
      </div>
    </section>
  );
}
