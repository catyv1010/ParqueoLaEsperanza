"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

const WA =
  "https://wa.me/50670207762?text=Hola!%20Me%20interesa%20informaci%C3%B3n%20sobre%20Parqueo%20y%20Lavacar%20La%20Esperanza";

export function Contact() {
  const root = useRef<HTMLElement>(null);

  useEffect(() => {
    if (!root.current) return;
    const ctx = gsap.context(() => {
      gsap.from(".ct-eyebrow > *", {
        y: 20,
        opacity: 0,
        duration: 0.8,
        stagger: 0.06,
        ease: "power3.out",
        scrollTrigger: { trigger: ".ct-eyebrow", start: "top 85%" },
      });

      gsap.from(".ct-title .char", {
        yPercent: 110,
        rotate: 6,
        duration: 1.1,
        stagger: 0.02,
        ease: "expo.out",
        scrollTrigger: { trigger: ".ct-title", start: "top 80%" },
      });

      gsap.fromTo(
        ".ct-photo",
        { clipPath: "inset(100% 0% 0% 0%)" },
        {
          clipPath: "inset(0% 0% 0% 0%)",
          duration: 1.6,
          ease: "expo.out",
          scrollTrigger: { trigger: ".ct-photo", start: "top 85%" },
        }
      );

      gsap.fromTo(
        ".ct-photo img",
        { scale: 1.4 },
        {
          scale: 1.05,
          duration: 1.6,
          ease: "expo.out",
          scrollTrigger: { trigger: ".ct-photo", start: "top 85%" },
        }
      );

      gsap.from(".ct-row", {
        opacity: 0,
        y: 30,
        duration: 0.7,
        stagger: 0.08,
        ease: "power3.out",
        scrollTrigger: { trigger: ".ct-info", start: "top 80%" },
      });
    }, root);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={root}
      id="contacto"
      className="relative overflow-hidden bg-cream py-24 lg:py-32"
    >
      <div className="mx-auto max-w-[1500px] px-6 lg:px-16">
        <div className="ct-eyebrow flex items-center gap-4">
          <span className="inline-block h-px w-12 bg-terra" />
          <span className="tracking-eyebrow text-xs text-stone">
            Capítulo 05 — Visitanos
          </span>
        </div>

        <h2 className="ct-title mt-6 font-display text-[12vw] leading-[0.92] text-ink sm:text-[8vw] lg:text-7xl xl:text-8xl">
          <span className="char-mask">
            {"Estamos".split("").map((c, i) => (
              <span key={i} className="char">
                {c}
              </span>
            ))}
          </span>{" "}
          <span className="char-mask italic text-stone">
            {"listos".split("").map((c, i) => (
              <span key={i} className="char">
                {c}
              </span>
            ))}
          </span>{" "}
          <span className="char-mask italic text-terra">
            {"hoy.".split("").map((c, i) => (
              <span key={i} className="char">
                {c}
              </span>
            ))}
          </span>
        </h2>

        <div className="mt-16 grid grid-cols-12 gap-8 lg:gap-12">
          {/* Photo */}
          <div className="ct-photo relative col-span-12 aspect-[4/5] overflow-hidden rounded-3xl bg-line lg:col-span-6 lg:aspect-auto lg:min-h-[640px]">
            <Image
              src="https://images.unsplash.com/photo-1542362567-b07e54358753?w=1800&q=85&auto=format&fit=crop"
              alt="Auto siendo cuidado profesionalmente"
              fill
              sizes="(min-width: 1024px) 50vw, 100vw"
              className="object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-ink/40 via-transparent to-transparent" />
            <div className="absolute bottom-8 left-8 right-8 text-bone">
              <div className="font-display text-3xl italic lg:text-4xl">
                Te esperamos.
              </div>
              <div className="mt-2 text-xs tracking-eyebrow text-bone/80">
                Lun — Dom · 6am a 9pm
              </div>
            </div>
          </div>

          {/* Info */}
          <div className="ct-info col-span-12 lg:col-span-6">
            <div className="border-t border-line">
              <a
                href="tel:+50670207762"
                className="ct-row group flex items-center justify-between border-b border-line py-6 transition-colors hover:bg-paper/60"
              >
                <div>
                  <div className="text-[10px] tracking-eyebrow text-stone">
                    Teléfono
                  </div>
                  <div className="mt-1 font-display text-3xl text-ink lg:text-4xl">
                    +506 7020-7762
                  </div>
                </div>
                <span className="font-display text-2xl text-stone transition-all group-hover:translate-x-1 group-hover:text-terra">
                  →
                </span>
              </a>

              <a
                href="tel:+50688322660"
                className="ct-row group flex items-center justify-between border-b border-line py-6 transition-colors hover:bg-paper/60"
              >
                <div>
                  <div className="text-[10px] tracking-eyebrow text-stone">
                    Línea 2
                  </div>
                  <div className="mt-1 font-display text-3xl text-ink lg:text-4xl">
                    +506 8832-2660
                  </div>
                </div>
                <span className="font-display text-2xl text-stone transition-all group-hover:translate-x-1 group-hover:text-terra">
                  →
                </span>
              </a>

              <a
                href={WA}
                target="_blank"
                rel="noopener noreferrer"
                className="ct-row group flex items-center justify-between border-b border-line py-6 transition-colors hover:bg-paper/60"
              >
                <div>
                  <div className="text-[10px] tracking-eyebrow text-stone">
                    WhatsApp · respuesta inmediata
                  </div>
                  <div className="mt-1 font-display text-3xl italic text-ink lg:text-4xl">
                    Escribinos
                  </div>
                </div>
                <span className="font-display text-2xl text-stone transition-all group-hover:translate-x-1 group-hover:text-terra">
                  →
                </span>
              </a>

              <div className="ct-row flex items-center justify-between border-b border-line py-6">
                <div>
                  <div className="text-[10px] tracking-eyebrow text-stone">
                    Horario
                  </div>
                  <div className="mt-1 font-display text-3xl text-ink lg:text-4xl">
                    6am — 9pm
                  </div>
                  <div className="mt-2 flex items-center gap-2 text-xs text-emerald">
                    <span className="relative flex h-1.5 w-1.5">
                      <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-teal opacity-75" />
                      <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-emerald-2" />
                    </span>
                    Abierto ahora
                  </div>
                </div>
              </div>
            </div>

            {/* CTA strip */}
            <div className="ct-row mt-10 flex flex-col items-stretch gap-3 sm:flex-row">
              <a
                href="tel:+50670207762"
                className="btn-magnet inline-flex flex-1 items-center justify-center gap-3 rounded-full bg-ink px-8 py-4 text-sm font-medium text-bone transition-colors hover:bg-terra"
              >
                Llamar ahora
              </a>
              <a
                href={WA}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex flex-1 items-center justify-center gap-3 rounded-full border border-ink/20 px-8 py-4 text-sm font-medium text-ink transition-colors hover:border-terra hover:text-terra"
              >
                WhatsApp
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
