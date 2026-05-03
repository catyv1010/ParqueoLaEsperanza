"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Grasshopper } from "@/components/grasshopper";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

export function Gallery() {
  const root = useRef<HTMLElement>(null);

  useEffect(() => {
    if (!root.current) return;
    const ctx = gsap.context(() => {
      gsap.from(".lugar-eyebrow > *", {
        y: 20,
        opacity: 0,
        duration: 0.8,
        stagger: 0.06,
        ease: "power3.out",
        scrollTrigger: { trigger: ".lugar-eyebrow", start: "top 85%" },
      });

      gsap.from(".lugar-title .char", {
        yPercent: 110,
        rotate: 6,
        duration: 1.1,
        stagger: 0.02,
        ease: "expo.out",
        scrollTrigger: { trigger: ".lugar-title", start: "top 80%" },
      });

      // Photo dramatic clip + zoom
      gsap.fromTo(
        ".lugar-photo",
        { clipPath: "inset(100% 0% 0% 0%)" },
        {
          clipPath: "inset(0% 0% 0% 0%)",
          duration: 1.8,
          ease: "expo.inOut",
          scrollTrigger: { trigger: ".lugar-photo", start: "top 80%" },
        }
      );

      gsap.fromTo(
        ".lugar-photo img",
        { scale: 1.45 },
        {
          scale: 1.05,
          duration: 1.8,
          ease: "expo.out",
          scrollTrigger: { trigger: ".lugar-photo", start: "top 80%" },
        }
      );

      gsap.to(".lugar-photo img", {
        yPercent: -10,
        ease: "none",
        scrollTrigger: {
          trigger: ".lugar-photo",
          start: "top bottom",
          end: "bottom top",
          scrub: true,
        },
      });

      // Detail rows stagger
      gsap.from(".lugar-detail", {
        y: 30,
        opacity: 0,
        duration: 0.7,
        stagger: 0.08,
        ease: "power3.out",
        scrollTrigger: { trigger: ".lugar-details", start: "top 80%" },
      });
    }, root);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={root}
      className="relative overflow-hidden bg-night py-28 lg:py-40"
    >
      {/* Background atmosphere */}
      <div
        aria-hidden
        className="absolute right-0 top-0 h-[420px] w-[420px] rounded-full bg-emerald/15 blur-[180px]"
      />

      <div className="relative mx-auto max-w-[1500px] px-6 lg:px-16">
        <div className="grid grid-cols-12 items-end gap-6">
          <div className="lugar-eyebrow col-span-12 flex items-center gap-4 lg:col-span-6">
            <span className="inline-block h-px w-12 bg-mint" />
            <span className="tracking-eyebrow text-xs text-mint/70">
              Capítulo 04 — El lugar
            </span>
          </div>
          <div className="col-span-12 hidden text-right lg:col-span-6 lg:block">
            <span className="tracking-eyebrow text-xs text-mint/50">
              Cartago · Costa Rica
            </span>
          </div>

          <h2 className="lugar-title col-span-12 mt-6 font-display text-[12vw] leading-[0.92] text-bone sm:text-[8vw] lg:text-7xl xl:text-8xl">
            <span className="char-mask">
              {"Así".split("").map((c, i) => (
                <span key={i} className="char">
                  {c}
                </span>
              ))}
            </span>{" "}
            <span className="char-mask italic text-bone/50">
              {"se".split("").map((c, i) => (
                <span key={i} className="char">
                  {c}
                </span>
              ))}
            </span>{" "}
            <span className="char-mask glow-mint italic">
              {"siente.".split("").map((c, i) => (
                <span key={i} className="char">
                  {c}
                </span>
              ))}
            </span>
          </h2>
        </div>

        {/* Photo + side details */}
        <div className="mt-16 grid grid-cols-12 gap-8 lg:gap-12">
          <figure className="lugar-photo ring-glow-strong relative col-span-12 aspect-[3/4] overflow-hidden rounded-3xl bg-night-2 lg:col-span-7 lg:aspect-auto lg:min-h-[760px]">
            <Image
              src="/foto-parqueo.jpg"
              alt="Parqueo y Lavacar La Esperanza — vista de la entrada con vehículos y rótulo Lavacar al fondo"
              fill
              sizes="(min-width: 1024px) 60vw, 100vw"
              className="object-cover object-top"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-night via-night/40 to-transparent" />
            <div className="absolute inset-0 bg-gradient-to-br from-emerald-deep/30 via-transparent to-mint/8 mix-blend-overlay" />

            <figcaption className="absolute bottom-8 left-8 right-8 flex items-end justify-between gap-4">
              <div>
                <div className="font-display text-3xl italic text-bone glow-bone lg:text-4xl">
                  Te esperamos.
                </div>
                <div className="mt-2 text-xs tracking-eyebrow text-mint/80">
                  Parqueo · Lavacar · Cartago, CR
                </div>
              </div>
              <span className="hidden text-mint sm:block animate-float drop-shadow-[0_0_24px_rgba(116,198,157,0.5)]">
                <Grasshopper className="h-12 w-12" variant="solid" />
              </span>
            </figcaption>

            <div className="absolute left-8 top-8 inline-flex items-center gap-2 rounded-full border border-mint/30 bg-night/70 px-4 py-2 backdrop-blur-md">
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full rounded-full bg-mint pulse-mint" />
                <span className="relative inline-flex h-2 w-2 rounded-full bg-mint" />
              </span>
              <span className="text-[10px] tracking-eyebrow text-bone">
                Cartago · Costa Rica
              </span>
            </div>
          </figure>

          <div className="lugar-details col-span-12 flex flex-col justify-between gap-8 lg:col-span-5">
            <div>
              <p className="font-display text-2xl italic leading-snug text-bone lg:text-3xl">
                Un parqueo cubierto, amplio, con espacios marcados y nuestro
                lavacar al fondo.
              </p>
              <p className="mt-6 max-w-md text-base leading-relaxed text-bone/65">
                Sin pretensiones, sin filtros — así nos vas a encontrar. Sala
                de espera mientras lavan tu carro, salida fácil hacia la calle
                y siempre alguien atento a tu vehículo.
              </p>
            </div>

            <div className="grid grid-cols-2 gap-6 border-t border-mint/15 pt-8">
              <div className="lugar-detail">
                <div className="text-[10px] tracking-eyebrow text-mint/60">
                  Capacidad
                </div>
                <div className="mt-2 font-display text-3xl text-bone">
                  +30 carros
                </div>
              </div>
              <div className="lugar-detail">
                <div className="text-[10px] tracking-eyebrow text-mint/60">
                  Cubierto
                </div>
                <div className="mt-2 font-display text-3xl text-bone">100%</div>
              </div>
              <div className="lugar-detail">
                <div className="text-[10px] tracking-eyebrow text-mint/60">
                  Cámaras
                </div>
                <div className="mt-2 font-display text-3xl text-bone">24/7</div>
              </div>
              <div className="lugar-detail">
                <div className="text-[10px] tracking-eyebrow text-mint/60">
                  Sala de espera
                </div>
                <div className="mt-2 font-display text-3xl text-bone">Sí</div>
              </div>
            </div>

            <a
              href="https://www.google.com/maps/place/Parqueo+La+Esperanza/@9.862587,-83.9205466,17z/data=!3m1!4b1!4m6!3m5!1s0x8fa0dfeec24555c1:0x9bbf4c34e384c70e!8m2!3d9.8625817!4d-83.9179717!16s%2Fg%2F11g9h2x9fn"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-magnet group inline-flex w-fit items-center gap-3 rounded-full bg-mint px-7 py-4 text-sm font-medium text-night shadow-[0_0_28px_rgba(116,198,157,0.3)] transition-all hover:shadow-[0_0_48px_rgba(116,198,157,0.55)]"
            >
              Cómo llegar
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
        </div>
      </div>
    </section>
  );
}
