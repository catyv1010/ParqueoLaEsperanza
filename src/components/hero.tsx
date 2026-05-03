"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

export function Hero() {
  const root = useRef<HTMLElement>(null);

  useEffect(() => {
    if (!root.current) return;
    const ctx = gsap.context(() => {
      // Headline word-by-word reveal
      gsap.from(".hero-word", {
        yPercent: 110,
        opacity: 0,
        duration: 1.4,
        ease: "expo.out",
        stagger: 0.08,
        delay: 0.2,
      });

      // Eyebrow + subline blur reveal
      gsap.from(".hero-fade", {
        opacity: 0,
        y: 20,
        filter: "blur(10px)",
        duration: 1.2,
        ease: "power3.out",
        stagger: 0.12,
        delay: 0.6,
      });

      // CTA pop
      gsap.from(".hero-cta", {
        opacity: 0,
        y: 30,
        scale: 0.95,
        duration: 1,
        ease: "back.out(1.4)",
        stagger: 0.1,
        delay: 1.2,
      });

      // Stats reveal
      gsap.from(".hero-stat", {
        opacity: 0,
        y: 16,
        duration: 0.9,
        ease: "power2.out",
        stagger: 0.15,
        delay: 1.6,
      });

      // Marquee + scroll cue
      gsap.from(".hero-marquee", {
        opacity: 0,
        duration: 1.5,
        delay: 1.8,
      });

      // Parallax layers
      gsap.to(".parallax-slow", {
        yPercent: 30,
        ease: "none",
        scrollTrigger: {
          trigger: root.current,
          start: "top top",
          end: "bottom top",
          scrub: true,
        },
      });

      gsap.to(".parallax-fast", {
        yPercent: 60,
        ease: "none",
        scrollTrigger: {
          trigger: root.current,
          start: "top top",
          end: "bottom top",
          scrub: true,
        },
      });

      // Headline drift
      gsap.to(".hero-headline", {
        yPercent: -20,
        opacity: 0.4,
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
      className="relative isolate flex min-h-screen flex-col justify-center overflow-hidden vignette breathe-gradient"
    >
      {/* Headlight beams */}
      <div
        className="headlight-beam parallax-slow"
        style={{ top: "-30vh", left: "10%", transform: "rotate(8deg)" }}
      />
      <div
        className="headlight-beam parallax-fast"
        style={{ top: "-30vh", right: "5%", transform: "rotate(-12deg)" }}
      />

      {/* Diagonal city lights */}
      <div className="parallax-slow pointer-events-none absolute inset-0 opacity-40">
        <div className="absolute left-[8%] top-[20%] h-1.5 w-1.5 rounded-full bg-amber-soft shadow-[0_0_20px_4px_rgba(255,179,90,0.6)]" />
        <div className="absolute right-[12%] top-[15%] h-1 w-1 rounded-full bg-teal-glow shadow-[0_0_15px_3px_rgba(116,198,157,0.7)]" />
        <div className="absolute left-[20%] bottom-[25%] h-2 w-2 rounded-full bg-amber shadow-[0_0_24px_6px_rgba(255,179,90,0.5)]" />
        <div className="absolute right-[18%] bottom-[30%] h-1 w-1 rounded-full bg-bone shadow-[0_0_12px_3px_rgba(245,241,232,0.6)]" />
        <div className="absolute left-[45%] top-[12%] h-1 w-1 rounded-full bg-teal shadow-[0_0_18px_4px_rgba(82,183,136,0.6)]" />
      </div>

      {/* Big watermark serif "01" — chapter marker */}
      <div className="parallax-fast pointer-events-none absolute -right-12 top-1/4 select-none font-display text-[28rem] leading-none text-white/[0.025] sm:text-[36rem]">
        01
      </div>

      {/* Main content */}
      <div className="relative z-10 mx-auto w-full max-w-[1400px] px-6 pb-32 pt-40 lg:px-12 lg:pb-40 lg:pt-48">
        <div className="grid grid-cols-12 gap-6">
          {/* Eyebrow */}
          <div className="col-span-12 mb-12 flex items-center gap-4">
            <span className="hero-fade inline-block h-px w-12 bg-amber/60" />
            <span className="hero-fade tracking-eyebrow text-xs text-amber/80">
              Capítulo 01 — Bienvenida
            </span>
            <span className="hero-fade ml-auto hidden items-center gap-2 text-xs text-mute md:flex">
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-teal opacity-75" />
                <span className="relative inline-flex h-2 w-2 rounded-full bg-teal-glow" />
              </span>
              Abierto · Lun a Dom · 6am — 9pm
            </span>
          </div>

          {/* Headline */}
          <h1 className="hero-headline col-span-12 font-display text-[15vw] text-bone sm:text-[12vw] lg:text-[10rem] xl:text-[12rem]">
            <span className="block overflow-hidden">
              <span className="hero-word inline-block">Tu</span>{" "}
              <span className="hero-word inline-block">vehículo,</span>
            </span>
            <span className="block overflow-hidden italic text-bone-dim">
              <span className="hero-word inline-block">en</span>{" "}
              <span className="hero-word inline-block">buenas</span>{" "}
              <span className="hero-word inline-block text-amber">manos.</span>
            </span>
          </h1>

          {/* Subline + CTA */}
          <div className="col-span-12 mt-12 grid grid-cols-12 gap-6">
            <p className="hero-fade col-span-12 max-w-md text-base leading-relaxed text-bone-dim md:col-span-5 lg:text-lg">
              Parqueo vigilado las{" "}
              <span className="text-bone">24 horas</span> y lavacar profesional
              en un solo lugar. Cuidamos tu auto como si fuera nuestro.
            </p>

            <div className="col-span-12 flex flex-col items-start gap-4 sm:flex-row md:col-span-7 md:justify-end">
              <a
                href="#contacto"
                className="hero-cta group btn-magnetic inline-flex items-center gap-3 rounded-full bg-amber px-8 py-4 text-sm font-medium text-ink transition-transform duration-500 hover:scale-[1.02]"
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
                className="hero-cta group inline-flex items-center gap-3 rounded-full border border-bone/20 px-8 py-4 text-sm font-medium text-bone transition-colors hover:border-bone/60"
              >
                Ver servicios
                <span className="inline-block h-1.5 w-1.5 rounded-full bg-teal-glow transition-transform duration-500 group-hover:translate-y-1" />
              </a>
            </div>
          </div>

          {/* Stats strip */}
          <div className="col-span-12 mt-24 grid grid-cols-2 gap-x-6 gap-y-10 border-t border-white/5 pt-10 md:grid-cols-4">
            {[
              { num: "₡1,000", label: "por hora de parqueo" },
              { num: "24/7", label: "vigilancia activa" },
              { num: "+5,000", label: "clientes satisfechos" },
              { num: "10+", label: "años de experiencia" },
            ].map((s) => (
              <div key={s.label} className="hero-stat">
                <div className="font-display text-4xl text-bone lg:text-5xl">
                  {s.num}
                </div>
                <div className="mt-2 text-xs tracking-eyebrow text-mute">
                  {s.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Bottom marquee */}
      <div className="hero-marquee relative z-10 overflow-hidden border-y border-white/5 bg-ink/40 py-4 backdrop-blur-sm">
        <div className="animate-marquee flex shrink-0 items-center gap-12 whitespace-nowrap text-xs tracking-eyebrow text-mute">
          {Array.from({ length: 4 }).map((_, i) => (
            <div key={i} className="flex shrink-0 items-center gap-12">
              <span>★ Vigilancia 24/7</span>
              <span className="h-1 w-1 rounded-full bg-amber/60" />
              <span>Lavado premium · cera · cerámica</span>
              <span className="h-1 w-1 rounded-full bg-teal/60" />
              <span>Tarifa nocturna disponible</span>
              <span className="h-1 w-1 rounded-full bg-amber/60" />
              <span>Mensualidad para residentes</span>
              <span className="h-1 w-1 rounded-full bg-teal/60" />
              <span>+506 7020-7762</span>
              <span className="h-1 w-1 rounded-full bg-amber/60" />
            </div>
          ))}
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="hero-marquee absolute bottom-24 left-1/2 z-10 -translate-x-1/2 md:bottom-32">
        <div className="flex flex-col items-center gap-2 text-xs tracking-eyebrow text-mute">
          <span>Scroll</span>
          <span className="relative flex h-10 w-px overflow-hidden bg-white/10">
            <span className="absolute inset-x-0 top-0 h-1/2 animate-[scrollDown_2s_ease-in-out_infinite] bg-amber" />
          </span>
        </div>
        <style jsx>{`
          @keyframes scrollDown {
            0% {
              transform: translateY(-100%);
            }
            100% {
              transform: translateY(200%);
            }
          }
        `}</style>
      </div>
    </section>
  );
}
