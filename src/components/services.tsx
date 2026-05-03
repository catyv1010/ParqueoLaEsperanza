"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

const services = [
  {
    n: "01",
    title: "Estacionamiento",
    sub: "vigilado 24/7",
    desc: "Cámaras y personal capacitado. Día, noche o mensualidad.",
    price: "₡1,000",
    unit: "/ hora",
    img: "https://images.unsplash.com/photo-1545459720-aac8509eb02c?w=1400&q=85&auto=format&fit=crop",
  },
  {
    n: "02",
    title: "Lavado Exterior",
    sub: "espuma + presión",
    desc: "Productos premium que protegen la pintura. Secado a mano.",
    price: "₡4,000",
    unit: "",
    img: "https://images.unsplash.com/photo-1607861716497-e65ab29fc7ac?w=1400&q=85&auto=format&fit=crop",
  },
  {
    n: "03",
    title: "Lavado Interior",
    sub: "detalle profundo",
    desc: "Aspirado, tapicería, tablero y vidrios. Aroma a elegir.",
    price: "₡5,500",
    unit: "",
    img: "https://images.unsplash.com/photo-1503376780353-7e6692767b70?w=1400&q=85&auto=format&fit=crop",
  },
  {
    n: "04",
    title: "Premium Cerámico",
    sub: "protección por meses",
    desc: "Encerado, pulido y sellado cerámico que repele agua.",
    price: "₡18,000",
    unit: "",
    img: "https://images.unsplash.com/photo-1552519507-da3b142c6e3d?w=1400&q=85&auto=format&fit=crop",
  },
  {
    n: "05",
    title: "Lavado de Motor",
    sub: "desengrase técnico",
    desc: "Limpieza profesional con productos especializados.",
    price: "₡8,000",
    unit: "",
    img: "https://images.unsplash.com/photo-1486006920555-c77dcf18193c?w=1400&q=85&auto=format&fit=crop",
  },
  {
    n: "06",
    title: "Express",
    sub: "30 minutos",
    desc: "Lavado completo rápido sin perder calidad.",
    price: "₡3,500",
    unit: "",
    img: "https://images.unsplash.com/photo-1542362567-b07e54358753?w=1400&q=85&auto=format&fit=crop",
  },
];

export function Services() {
  const root = useRef<HTMLElement>(null);
  const track = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!root.current || !track.current) return;
    const ctx = gsap.context(() => {
      // Header animations
      gsap.from(".svc-eyebrow > *", {
        y: 20,
        opacity: 0,
        duration: 0.8,
        stagger: 0.06,
        ease: "power3.out",
        scrollTrigger: { trigger: ".svc-eyebrow", start: "top 85%" },
      });

      gsap.from(".svc-title .char", {
        yPercent: 110,
        rotate: 6,
        duration: 1.1,
        stagger: 0.02,
        ease: "expo.out",
        scrollTrigger: { trigger: ".svc-title", start: "top 80%" },
      });

      // Horizontal scroll on desktop
      const isDesktop = window.matchMedia("(min-width: 1024px)").matches;

      if (isDesktop && track.current && root.current) {
        const totalWidth = track.current.scrollWidth - window.innerWidth;
        gsap.to(track.current, {
          x: -totalWidth,
          ease: "none",
          scrollTrigger: {
            trigger: root.current,
            start: "top top",
            end: () => `+=${totalWidth}`,
            scrub: 0.5,
            pin: true,
            anticipatePin: 1,
            invalidateOnRefresh: true,
          },
        });

        // Cards stagger reveal as they come into view (horizontal)
        gsap.utils.toArray<HTMLElement>(".svc-card").forEach((card, i) => {
          gsap.from(card, {
            opacity: 0,
            y: 60,
            duration: 0.9,
            ease: "power3.out",
            scrollTrigger: {
              trigger: card,
              start: "left 80%",
              containerAnimation: gsap.getById?.("hScroll"),
              horizontal: true,
            },
            delay: i * 0.05,
          });
        });
      } else {
        // Mobile: vertical fade-in
        gsap.utils.toArray<HTMLElement>(".svc-card").forEach((card) => {
          gsap.from(card, {
            opacity: 0,
            y: 40,
            duration: 0.9,
            ease: "power3.out",
            scrollTrigger: { trigger: card, start: "top 88%" },
          });
        });
      }
    }, root);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={root}
      id="servicios"
      className="relative overflow-hidden bg-cream py-24 lg:h-screen lg:py-0"
    >
      {/* Header overlay */}
      <div className="relative z-10 mx-auto max-w-[1500px] px-6 pt-12 lg:absolute lg:left-1/2 lg:top-12 lg:w-full lg:-translate-x-1/2 lg:px-16">
        <div className="grid grid-cols-12 items-end gap-6">
          <div className="svc-eyebrow col-span-12 flex items-center gap-4 lg:col-span-6">
            <span className="inline-block h-px w-12 bg-terra" />
            <span className="tracking-eyebrow text-xs text-stone">
              Capítulo 03 — Servicios
            </span>
          </div>
          <div className="col-span-12 hidden text-right lg:col-span-6 lg:block">
            <span className="tracking-eyebrow text-xs text-stone">
              06 servicios — desliza →
            </span>
          </div>

          <h2 className="svc-title col-span-12 mt-6 font-display text-[12vw] leading-[0.92] text-ink sm:text-[8vw] lg:mt-8 lg:text-7xl xl:text-8xl">
            <span className="char-mask">
              {"Cuidamos".split("").map((c, i) => (
                <span key={i} className="char">
                  {c}
                </span>
              ))}
            </span>{" "}
            <span className="char-mask italic text-stone">
              {"cada".split("").map((c, i) => (
                <span key={i} className="char">
                  {c}
                </span>
              ))}
            </span>{" "}
            <span className="char-mask italic text-terra">
              {"detalle.".split("").map((c, i) => (
                <span key={i} className="char">
                  {c}
                </span>
              ))}
            </span>
          </h2>
        </div>
      </div>

      {/* Track — horizontal on desktop, vertical on mobile */}
      <div className="lg:flex lg:h-screen lg:items-center">
        <div
          ref={track}
          className="flex flex-col gap-6 px-6 pt-10 lg:flex-row lg:gap-8 lg:px-0 lg:pl-[10vw] lg:pr-[40vw] lg:pt-40"
        >
          {services.map((s) => (
            <article
              key={s.n}
              className="svc-card group relative flex shrink-0 overflow-hidden rounded-3xl bg-paper shadow-sm shadow-ink/5 lg:h-[60vh] lg:w-[42vw] lg:max-w-[640px]"
            >
              <div className="relative aspect-[4/5] w-full overflow-hidden lg:h-full lg:w-full">
                <Image
                  src={s.img}
                  alt={s.title}
                  fill
                  sizes="(min-width: 1024px) 42vw, 100vw"
                  className="object-cover transition-transform duration-[1500ms] ease-out group-hover:scale-105"
                />
                {/* Gradient for legibility */}
                <div className="absolute inset-0 bg-gradient-to-t from-ink/85 via-ink/30 to-transparent" />

                {/* Number top-left */}
                <div className="absolute left-6 top-6 font-display text-3xl text-bone">
                  {s.n}
                </div>

                {/* Price top-right */}
                <div className="absolute right-6 top-6 text-right">
                  <div className="font-display text-2xl text-bone">
                    {s.price}
                  </div>
                  {s.unit && (
                    <div className="text-[10px] tracking-eyebrow text-bone/70">
                      {s.unit}
                    </div>
                  )}
                </div>

                {/* Bottom text */}
                <div className="absolute bottom-6 left-6 right-6 text-bone">
                  <div className="text-[10px] tracking-eyebrow text-bone/70">
                    {s.sub}
                  </div>
                  <h3 className="mt-2 font-display text-4xl leading-tight lg:text-5xl">
                    {s.title}
                  </h3>
                  <p className="mt-3 max-w-sm text-sm text-bone/85">
                    {s.desc}
                  </p>
                </div>
              </div>
            </article>
          ))}

          {/* End-of-track CTA */}
          <div className="flex shrink-0 flex-col items-start justify-center gap-6 rounded-3xl bg-ink p-10 text-bone lg:h-[60vh] lg:w-[36vw] lg:max-w-[500px]">
            <span className="tracking-eyebrow text-xs text-bone/70">
              Tarifas referenciales
            </span>
            <p className="font-display text-3xl italic leading-tight text-bone lg:text-4xl">
              ¿Necesitás un plan mensual o tarifa para empresa?
            </p>
            <a
              href="#contacto"
              className="btn-magnet inline-flex items-center gap-3 rounded-full bg-terra px-7 py-4 text-sm font-medium text-bone transition-colors hover:bg-terra-2"
            >
              Cotizar
              <svg
                viewBox="0 0 24 24"
                className="h-4 w-4"
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
