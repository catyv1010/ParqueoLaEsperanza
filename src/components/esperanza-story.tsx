"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

const STANZA_1 = [
  { w: "Nacimos" },
  { w: "por" },
  { w: "una" },
  { w: "idea" },
  { w: "simple:", accent: true },
  { w: "que" },
  { w: "en" },
  { w: "Cartago" },
  { w: "hubiera" },
  { w: "un" },
  { w: "lugar" },
  { w: "verdaderamente" },
  { w: "seguro", accent: true },
  { w: "para" },
  { w: "tu" },
  { w: "carro," },
  { w: "y" },
  { w: "un" },
  { w: "lavacar", accent: true },
  { w: "profesional" },
  { w: "que" },
  { w: "lo" },
  { w: "cuidara", accent: true },
  { w: "como" },
  { w: "si" },
  { w: "fuera" },
  { w: "nuestro." },
];

const STANZA_2 = [
  { w: "Más" },
  { w: "de" },
  { w: "diez" },
  { w: "años" },
  { w: "después," },
  { w: "seguimos" },
  { w: "haciendo" },
  { w: "exactamente" },
  { w: "eso" },
  { w: "—" },
  { w: "protegiendo" },
  { w: "lo" },
  { w: "que" },
  { w: "más" },
  { w: "importa:", accent: true },
  { w: "tu" },
  { w: "vehículo,", accent: true },
  { w: "tu" },
  { w: "tiempo,", accent: true },
  { w: "tu" },
  { w: "tranquilidad.", accent: true },
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

      gsap.utils.toArray<HTMLElement>(".es-word").forEach((w) => {
        ScrollTrigger.create({
          trigger: w,
          start: "top 80%",
          end: "top 55%",
          scrub: true,
          onUpdate: (self) => {
            w.classList.toggle("is-on", self.progress > 0.3);
          },
        });
      });

      gsap.to(".es-watermark", {
        xPercent: -10,
        ease: "none",
        scrollTrigger: {
          trigger: root.current,
          start: "top bottom",
          end: "bottom top",
          scrub: true,
        },
      });

      gsap.fromTo(
        ".es-line",
        { scaleX: 0 },
        {
          scaleX: 1,
          ease: "expo.inOut",
          duration: 1.4,
          scrollTrigger: { trigger: ".es-line", start: "top 85%" },
        }
      );

      // Stamp rotates slowly continuously
      gsap.to(".es-stamp", {
        rotate: 360,
        duration: 60,
        repeat: -1,
        ease: "none",
      });

      gsap.from(".es-stamp", {
        scale: 0,
        opacity: 0,
        duration: 1.4,
        ease: "back.out(1.5)",
        scrollTrigger: { trigger: ".es-stamp", start: "top 85%" },
      });

      gsap.from(".es-bigyear .char", {
        yPercent: 110,
        opacity: 0,
        duration: 1.2,
        stagger: 0.06,
        ease: "expo.out",
        scrollTrigger: { trigger: ".es-bigyear", start: "top 85%" },
      });
    }, root);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={root}
      className="relative overflow-hidden mesh-beige py-20 lg:py-44"
    >
      {/* Watermark gigante */}
      <span
        aria-hidden
        className="es-watermark text-outline-emerald pointer-events-none absolute -bottom-6 left-0 select-none whitespace-nowrap font-display text-[28vw] italic leading-none opacity-25 lg:text-[20rem]"
      >
        nuestra historia
      </span>

      {/* Decorative blobs */}
      <div
        aria-hidden
        className="absolute -right-20 top-20 h-[420px] w-[420px] rounded-full bg-emerald/10 blur-[160px]"
      />
      <div
        aria-hidden
        className="absolute -left-32 bottom-40 h-[360px] w-[360px] rounded-full bg-mint/15 blur-[160px]"
      />

      <div className="relative mx-auto max-w-[1200px] px-6 lg:px-12">
        {/* HEADER row con eyebrow + stamp */}
        <div className="flex items-start justify-between gap-6">
          <div className="es-eyebrow flex items-center gap-4">
            <span className="es-line inline-block h-px w-12 bg-emerald origin-left" />
            <span className="tracking-eyebrow text-xs text-stone">
              Capítulo 02 — Nuestra historia
            </span>
          </div>

          {/* Stamp circular EST. 2014 */}
          <svg
            aria-hidden
            className="es-stamp h-20 w-20 shrink-0 lg:h-28 lg:w-28"
            viewBox="0 0 100 100"
          >
            <defs>
              <path
                id="es-stamp-circle"
                d="M50,50 m-38,0 a38,38 0 1,1 76,0 a38,38 0 1,1 -76,0"
              />
            </defs>
            <circle
              cx="50"
              cy="50"
              r="48"
              fill="none"
              stroke="rgba(31,92,64,0.4)"
              strokeWidth="0.5"
            />
            <circle
              cx="50"
              cy="50"
              r="44"
              fill="none"
              stroke="rgba(31,92,64,0.25)"
              strokeWidth="0.3"
              strokeDasharray="2 2"
            />
            <text fontSize="6.5" fill="rgba(31,92,64,0.85)" letterSpacing="2">
              <textPath href="#es-stamp-circle" startOffset="0">
                LA ESPERANZA · CARTAGO · COSTA RICA · DESDE 2014 ·
              </textPath>
            </text>
            <text
              x="50"
              y="44"
              textAnchor="middle"
              fontSize="6"
              letterSpacing="0.3em"
              fill="rgba(31,92,64,0.6)"
              fontFamily="var(--font-grotesk)"
            >
              EST.
            </text>
            <text
              x="50"
              y="62"
              textAnchor="middle"
              fontSize="14"
              fill="rgba(31,92,64,0.95)"
              fontFamily="var(--font-fraunces)"
              fontStyle="italic"
            >
              2014
            </text>
          </svg>
        </div>

        {/* Big quote mark */}
        <div
          aria-hidden
          className="pointer-events-none mt-4 font-display text-[5rem] italic leading-[0.5] text-emerald/20 lg:mt-8 lg:text-[10rem]"
        >
          &ldquo;
        </div>

        {/* STANZA 1 */}
        <div className="mt-2 max-w-3xl">
          <p className="font-display text-xl leading-[1.4] sm:text-2xl sm:leading-[1.32] lg:text-[2.4rem] lg:leading-[1.25]">
            {STANZA_1.map((item, i) => (
              <span key={i}>
                <span
                  className={`es-word inline transition-[color,text-shadow] duration-300 ${
                    item.accent ? "italic" : ""
                  }`}
                  style={{ color: "rgba(13, 20, 16, 0.18)" }}
                  data-accent={item.accent ? "1" : "0"}
                >
                  {item.w}
                </span>
                {i < STANZA_1.length - 1 ? " " : ""}
              </span>
            ))}
          </p>
        </div>

        {/* Big YEAR decoration entre stanzas */}
        <div className="my-12 flex items-center gap-6 lg:my-20 lg:gap-10">
          <span className="h-px flex-1 bg-emerald/20" />
          <div className="es-bigyear font-display italic text-emerald/30">
            <span className="char-mask block text-6xl leading-none lg:text-8xl">
              {"+10 años".split("").map((c, i) => (
                <span key={i} className="char inline-block">
                  {c === " " ? " " : c}
                </span>
              ))}
            </span>
          </div>
          <span className="h-px flex-1 bg-emerald/20" />
        </div>

        {/* STANZA 2 */}
        <div className="max-w-3xl">
          <p className="font-display text-xl leading-[1.4] sm:text-2xl sm:leading-[1.32] lg:text-[2.4rem] lg:leading-[1.25]">
            {STANZA_2.map((item, i) => (
              <span key={i}>
                <span
                  className={`es-word inline transition-[color,text-shadow] duration-300 ${
                    item.accent ? "italic" : ""
                  }`}
                  style={{ color: "rgba(13, 20, 16, 0.18)" }}
                  data-accent={item.accent ? "1" : "0"}
                >
                  {item.w}
                </span>
                {i < STANZA_2.length - 1 ? " " : ""}
              </span>
            ))}
          </p>

          {/* Byline */}
          <div className="mt-10 flex items-center gap-4 lg:mt-14">
            <span className="inline-block h-px w-8 bg-emerald/40" />
            <span className="tracking-eyebrow text-[10px] text-stone">
              equipo La Esperanza · Cartago
            </span>
          </div>
        </div>
      </div>

      <style jsx>{`
        :global(.es-word.is-on) {
          color: rgba(13, 20, 16, 0.95) !important;
        }
        :global(.es-word.is-on[data-accent="1"]) {
          color: var(--color-emerald) !important;
          text-shadow: 0 0 24px rgba(31, 92, 64, 0.25);
        }
      `}</style>
    </section>
  );
}
