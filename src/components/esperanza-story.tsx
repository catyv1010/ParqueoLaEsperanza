"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Tilt } from "@/components/tilt";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

const STORY = [
  "La",
  "esperanza",
  "es",
  "ese",
  "chapulín",
  "verde",
  "que",
  "en",
  "Costa",
  "Rica",
  "trae",
  "buena",
  "suerte.",
  "Un",
  "símbolo",
  "de",
  "calma,",
  "paciencia",
  "y",
  "cuidado",
  "—",
  "exactamente",
  "lo",
  "que",
  "sentimos",
  "por",
  "cada",
  "carro",
  "que",
  "nos",
  "confías.",
];

export function EsperanzaStory() {
  const root = useRef<HTMLElement>(null);

  useEffect(() => {
    if (!root.current) return;
    const ctx = gsap.context(() => {
      gsap.from(".es-eyebrow > *", {
        y: 20,
        opacity: 0,
        duration: 0.8,
        stagger: 0.06,
        ease: "power3.out",
        scrollTrigger: { trigger: ".es-eyebrow", start: "top 85%" },
      });

      // Photo clip + scale reveal
      gsap.fromTo(
        ".es-photo",
        { clipPath: "inset(0% 100% 0% 0%)" },
        {
          clipPath: "inset(0% 0% 0% 0%)",
          duration: 1.6,
          ease: "expo.inOut",
          scrollTrigger: { trigger: ".es-photo", start: "top 80%" },
        }
      );
      gsap.fromTo(
        ".es-photo img",
        { scale: 1.4 },
        {
          scale: 1.05,
          duration: 1.6,
          ease: "expo.out",
          scrollTrigger: { trigger: ".es-photo", start: "top 80%" },
        }
      );

      // Word-by-word color fill on scroll
      gsap.utils.toArray<HTMLElement>(".es-word").forEach((w, i) => {
        ScrollTrigger.create({
          trigger: w,
          start: "top 75%",
          end: "top 55%",
          scrub: true,
          onUpdate: (self) => {
            w.classList.toggle("is-on", self.progress > 0.3);
          },
        });
      });

      // Photo subtle parallax
      gsap.to(".es-photo img", {
        yPercent: -8,
        ease: "none",
        scrollTrigger: {
          trigger: root.current,
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
      className="relative overflow-hidden py-24 lg:py-40"
    >
      <div className="mx-auto max-w-[1400px] px-6 lg:px-16">
        <div className="grid grid-cols-12 items-start gap-10 lg:gap-16">
          {/* Photo of real katydid */}
          <div className="col-span-12 lg:col-span-5">
            <Tilt max={8}>
              <figure className="es-photo relative aspect-[3/4] overflow-hidden rounded-3xl bg-gradient-to-br from-emerald-deep via-emerald to-emerald-2 shadow-2xl shadow-emerald-deep/30">
                <Image
                  src="https://images.unsplash.com/photo-1567113463300-102a7eb3cb26?w=1200&q=85&auto=format&fit=crop"
                  alt="Esperanza, el chapulín verde de Costa Rica"
                  fill
                  sizes="(min-width: 1024px) 35vw, 100vw"
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-emerald-deep/55 via-transparent to-transparent" />
                <figcaption className="absolute bottom-5 left-5 right-5">
                  <div className="inline-flex items-center gap-2 rounded-full bg-bone/95 px-4 py-2 backdrop-blur-sm">
                    <span className="text-[10px] tracking-eyebrow text-emerald-deep">
                      Esperanza · Tettigoniidae · CR
                    </span>
                  </div>
                </figcaption>
              </figure>
            </Tilt>
          </div>

          {/* Story text */}
          <div className="col-span-12 lg:col-span-7">
            <div className="es-eyebrow flex items-center gap-4">
              <span className="inline-block h-px w-12 bg-emerald" />
              <span className="tracking-eyebrow text-xs text-stone">
                Por qué La Esperanza
              </span>
            </div>

            <p className="mt-10 font-display text-3xl leading-[1.25] text-ink sm:text-4xl lg:text-[3.4rem]">
              {STORY.map((w, i) => (
                <span
                  key={i}
                  className={`es-word scroll-fill-word ${
                    w === "esperanza" ||
                    w === "verde" ||
                    w === "suerte." ||
                    w === "cuidado" ||
                    w === "carro" ||
                    w === "confías."
                      ? "italic"
                      : ""
                  }`}
                  style={{ marginRight: "0.25em" }}
                >
                  {w}
                </span>
              ))}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
