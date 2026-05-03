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

      // Photo dramatic reveal + parallax
      gsap.fromTo(
        ".lugar-photo",
        { clipPath: "inset(100% 0% 0% 0%)" },
        {
          clipPath: "inset(0% 0% 0% 0%)",
          duration: 1.6,
          ease: "expo.out",
          scrollTrigger: { trigger: ".lugar-photo", start: "top 80%" },
        }
      );

      gsap.fromTo(
        ".lugar-photo img",
        { scale: 1.4 },
        {
          scale: 1.05,
          duration: 1.6,
          ease: "expo.out",
          scrollTrigger: { trigger: ".lugar-photo", start: "top 80%" },
        }
      );

      gsap.to(".lugar-photo img", {
        yPercent: -8,
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
        stagger: 0.1,
        ease: "power3.out",
        scrollTrigger: { trigger: ".lugar-details", start: "top 80%" },
      });
    }, root);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={root}
      className="relative overflow-hidden bg-cream py-24 lg:py-32"
    >
      <div className="mx-auto max-w-[1500px] px-6 lg:px-16">
        <div className="grid grid-cols-12 items-end gap-6">
          <div className="lugar-eyebrow col-span-12 flex items-center gap-4 lg:col-span-6">
            <span className="inline-block h-px w-12 bg-emerald" />
            <span className="tracking-eyebrow text-xs text-stone">
              Capítulo 04 — El lugar
            </span>
          </div>
          <div className="col-span-12 hidden text-right lg:col-span-6 lg:block">
            <span className="tracking-eyebrow text-xs text-stone">
              San José · Costa Rica
            </span>
          </div>

          <h2 className="lugar-title col-span-12 mt-6 font-display text-[12vw] leading-[0.92] text-ink sm:text-[8vw] lg:text-7xl xl:text-8xl">
            <span className="char-mask">
              {"Así".split("").map((c, i) => (
                <span key={i} className="char">
                  {c}
                </span>
              ))}
            </span>{" "}
            <span className="char-mask italic text-stone">
              {"se".split("").map((c, i) => (
                <span key={i} className="char">
                  {c}
                </span>
              ))}
            </span>{" "}
            <span className="char-mask italic text-emerald">
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
          {/* Real photo — the star */}
          <figure className="lugar-photo relative col-span-12 aspect-[3/4] overflow-hidden rounded-3xl bg-emerald-deep shadow-2xl shadow-emerald-deep/30 lg:col-span-7 lg:aspect-auto lg:min-h-[720px]">
            <Image
              src="/foto-parqueo.jpg"
              alt="Parqueo y Lavacar La Esperanza — vista de la entrada con vehículos parqueados y el rótulo Lavacar al fondo"
              fill
              sizes="(min-width: 1024px) 60vw, 100vw"
              className="object-cover object-top"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-emerald-deep/50 via-transparent to-transparent" />

            {/* Caption */}
            <figcaption className="absolute bottom-8 left-8 right-8 flex items-end justify-between gap-4">
              <div>
                <div className="font-display text-3xl italic text-bone lg:text-4xl">
                  Te esperamos.
                </div>
                <div className="mt-2 text-xs tracking-eyebrow text-bone/85">
                  Parqueo · Lavacar · San José, CR
                </div>
              </div>
              <span className="hidden text-mint sm:block">
                <Grasshopper className="h-12 w-12 animate-hop" />
              </span>
            </figcaption>

            {/* Top badge */}
            <div className="absolute left-8 top-8 inline-flex items-center gap-2 rounded-full bg-bone/95 px-4 py-2 backdrop-blur-sm">
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald opacity-75" />
                <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald" />
              </span>
              <span className="text-[10px] tracking-eyebrow text-emerald-deep">
                Foto real · sin retoques
              </span>
            </div>
          </figure>

          {/* Side details */}
          <div className="lugar-details col-span-12 flex flex-col justify-between gap-8 lg:col-span-5">
            <div>
              <p className="font-display text-2xl italic leading-snug text-ink lg:text-3xl">
                Un parqueo cubierto, amplio, con espacios marcados y nuestro
                lavacar al fondo.
              </p>
              <p className="mt-6 max-w-md text-base leading-relaxed text-stone">
                Sin pretensiones, sin filtros — así nos vas a encontrar. Sala
                de espera para mientras lavan tu carro, salida fácil hacia la
                calle y siempre alguien atento a tu vehículo.
              </p>
            </div>

            <div className="grid grid-cols-2 gap-6 border-t border-emerald/15 pt-8">
              <div className="lugar-detail">
                <div className="text-[10px] tracking-eyebrow text-stone">
                  Capacidad
                </div>
                <div className="mt-2 font-display text-3xl text-emerald-deep">
                  +30 carros
                </div>
              </div>
              <div className="lugar-detail">
                <div className="text-[10px] tracking-eyebrow text-stone">
                  Cubierto
                </div>
                <div className="mt-2 font-display text-3xl text-emerald-deep">
                  100%
                </div>
              </div>
              <div className="lugar-detail">
                <div className="text-[10px] tracking-eyebrow text-stone">
                  Cámaras
                </div>
                <div className="mt-2 font-display text-3xl text-emerald-deep">
                  24/7
                </div>
              </div>
              <div className="lugar-detail">
                <div className="text-[10px] tracking-eyebrow text-stone">
                  Sala de espera
                </div>
                <div className="mt-2 font-display text-3xl text-emerald-deep">
                  Sí
                </div>
              </div>
            </div>

            <a
              href="#contacto"
              className="btn-magnet group inline-flex w-fit items-center gap-3 rounded-full bg-emerald px-7 py-4 text-sm font-medium text-bone transition-colors hover:bg-emerald-deep"
            >
              Cómo llegar
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
          </div>
        </div>
      </div>
    </section>
  );
}
