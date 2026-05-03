"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

const photos = [
  {
    src: "https://images.unsplash.com/photo-1601925240970-98447081d56e?w=1200&q=85&auto=format&fit=crop",
    span: "row-span-2",
    cap: "Lavado · espuma activa",
  },
  {
    src: "https://images.unsplash.com/photo-1545459720-aac8509eb02c?w=1200&q=85&auto=format&fit=crop",
    span: "",
    cap: "Parqueo vigilado",
  },
  {
    src: "https://images.unsplash.com/photo-1520340356584-f9917d1eea6f?w=1200&q=85&auto=format&fit=crop",
    span: "",
    cap: "Detalle · espuma",
  },
  {
    src: "https://images.unsplash.com/photo-1605618826115-fb9e775cf36b?w=1200&q=85&auto=format&fit=crop",
    span: "row-span-2",
    cap: "Manguera · enjuague",
  },
  {
    src: "https://images.unsplash.com/photo-1607860108855-64acf2078ed9?w=1200&q=85&auto=format&fit=crop",
    span: "",
    cap: "Detallado interior",
  },
  {
    src: "https://images.unsplash.com/photo-1606664515524-ed2f786a0bd6?w=1200&q=85&auto=format&fit=crop",
    span: "",
    cap: "Pickup · CR",
  },
];

const marqueePhotos = [
  "https://images.unsplash.com/photo-1601925240970-98447081d56e?w=600&q=80&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1520340356584-f9917d1eea6f?w=600&q=80&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1545459720-aac8509eb02c?w=600&q=80&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1605618826115-fb9e775cf36b?w=600&q=80&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1606664515524-ed2f786a0bd6?w=600&q=80&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1607860108855-64acf2078ed9?w=600&q=80&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1486262715619-67b85e0b08d3?w=600&q=80&auto=format&fit=crop",
];

export function Gallery() {
  const root = useRef<HTMLElement>(null);

  useEffect(() => {
    if (!root.current) return;
    const ctx = gsap.context(() => {
      gsap.from(".gal-eyebrow > *", {
        y: 20,
        opacity: 0,
        duration: 0.8,
        stagger: 0.06,
        ease: "power3.out",
        scrollTrigger: { trigger: ".gal-eyebrow", start: "top 85%" },
      });

      gsap.from(".gal-title .char", {
        yPercent: 110,
        rotate: 6,
        duration: 1.1,
        stagger: 0.02,
        ease: "expo.out",
        scrollTrigger: { trigger: ".gal-title", start: "top 80%" },
      });

      gsap.utils.toArray<HTMLElement>(".gal-photo").forEach((p, i) => {
        gsap.fromTo(
          p,
          { clipPath: "inset(100% 0% 0% 0%)" },
          {
            clipPath: "inset(0% 0% 0% 0%)",
            duration: 1.4,
            ease: "expo.out",
            delay: (i % 3) * 0.1,
            scrollTrigger: { trigger: p, start: "top 88%" },
          }
        );
        gsap.fromTo(
          p.querySelector(".gal-img"),
          { scale: 1.4 },
          {
            scale: 1.05,
            duration: 1.4,
            ease: "expo.out",
            delay: (i % 3) * 0.1,
            scrollTrigger: { trigger: p, start: "top 88%" },
          }
        );

        gsap.to(p.querySelector(".gal-img"), {
          yPercent: -10,
          ease: "none",
          scrollTrigger: {
            trigger: p,
            start: "top bottom",
            end: "bottom top",
            scrub: true,
          },
        });
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
          <div className="gal-eyebrow col-span-12 flex items-center gap-4 lg:col-span-6">
            <span className="inline-block h-px w-12 bg-emerald" />
            <span className="tracking-eyebrow text-xs text-stone">
              Capítulo 04 — Galería
            </span>
          </div>

          <h2 className="gal-title col-span-12 mt-6 font-display text-[12vw] leading-[0.92] text-ink sm:text-[8vw] lg:text-7xl xl:text-8xl">
            <span className="char-mask">
              {"Cada".split("").map((c, i) => (
                <span key={i} className="char">
                  {c}
                </span>
              ))}
            </span>{" "}
            <span className="char-mask italic text-stone">
              {"carro".split("").map((c, i) => (
                <span key={i} className="char">
                  {c}
                </span>
              ))}
            </span>{" "}
            <span className="char-mask italic text-emerald">
              {"importa.".split("").map((c, i) => (
                <span key={i} className="char">
                  {c}
                </span>
              ))}
            </span>
          </h2>
        </div>

        <div className="mt-16 grid auto-rows-[28vw] grid-cols-2 gap-4 sm:auto-rows-[22vw] sm:gap-6 lg:auto-rows-[18vw] lg:grid-cols-3">
          {photos.map((p, i) => (
            <figure
              key={i}
              className={`gal-photo group relative overflow-hidden rounded-2xl bg-line ${p.span}`}
            >
              <div className="gal-img absolute inset-0 transition-transform duration-1000 group-hover:scale-110">
                <Image
                  src={p.src}
                  alt={p.cap}
                  fill
                  sizes="(min-width: 1024px) 33vw, 50vw"
                  className="object-cover"
                />
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-emerald-deep/70 via-transparent to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
              <figcaption className="absolute bottom-4 left-4 right-4 translate-y-2 text-bone opacity-0 transition-all duration-500 group-hover:translate-y-0 group-hover:opacity-100">
                <span className="tracking-eyebrow text-[10px]">{p.cap}</span>
              </figcaption>
            </figure>
          ))}
        </div>
      </div>

      <div className="mt-24 overflow-hidden border-y border-emerald/15 bg-paper py-8">
        <div className="animate-marquee-fast flex shrink-0 items-center gap-6 whitespace-nowrap">
          {[...marqueePhotos, ...marqueePhotos].map((src, i) => (
            <div
              key={i}
              className="relative h-32 w-44 shrink-0 overflow-hidden rounded-xl bg-line lg:h-40 lg:w-56"
            >
              <Image
                src={src}
                alt=""
                fill
                sizes="240px"
                className="object-cover"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
