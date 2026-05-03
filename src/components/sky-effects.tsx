"use client";

import { useMemo } from "react";

type Star = { left: number; top: number; size: number; delay: number; dur: number; opacity: number };
type Meteor = { top: number; left: number; delay: number; dur: number; gap: number };

function rand(min: number, max: number) {
  return Math.random() * (max - min) + min;
}

export function SkyEffects({
  stars = 60,
  meteors = 4,
  area = "full",
}: {
  stars?: number;
  meteors?: number;
  area?: "full" | "top";
}) {
  const starList = useMemo<Star[]>(
    () =>
      Array.from({ length: stars }, () => ({
        left: rand(0, 100),
        top: area === "top" ? rand(0, 60) : rand(0, 100),
        size: rand(0.8, 2.2),
        delay: rand(0, 6),
        dur: rand(2.6, 5.5),
        opacity: rand(0.3, 1),
      })),
    [stars, area]
  );

  const meteorList = useMemo<Meteor[]>(
    () =>
      Array.from({ length: meteors }, (_, i) => ({
        top: rand(-5, 50),
        left: rand(30, 100),
        delay: i * 3.2 + rand(0, 1.5),
        dur: rand(2.2, 3.4),
        gap: rand(8, 16),
      })),
    [meteors]
  );

  return (
    <div
      aria-hidden
      className="pointer-events-none absolute inset-0 overflow-hidden"
    >
      {starList.map((s, i) => (
        <span
          key={`s-${i}`}
          className="sky-star absolute rounded-full bg-bone"
          style={{
            left: `${s.left}%`,
            top: `${s.top}%`,
            width: `${s.size}px`,
            height: `${s.size}px`,
            animationDelay: `${s.delay}s`,
            animationDuration: `${s.dur}s`,
            opacity: s.opacity,
            boxShadow: "0 0 6px rgba(250,246,236,0.7)",
          }}
        />
      ))}

      {meteorList.map((m, i) => (
        <span
          key={`m-${i}`}
          className="sky-meteor absolute"
          style={{
            top: `${m.top}%`,
            left: `${m.left}%`,
            animationDelay: `${m.delay}s`,
            animationDuration: `${m.dur}s`,
            animationIterationCount: "infinite",
            ["--gap" as string]: `${m.gap}s`,
          }}
        />
      ))}

      <style jsx>{`
        .sky-star {
          animation: twinkle ease-in-out infinite;
          will-change: opacity, transform;
        }
        .sky-meteor {
          width: 160px;
          height: 1.2px;
          background: linear-gradient(
            90deg,
            transparent 0%,
            rgba(250, 246, 236, 0.95) 50%,
            rgba(183, 228, 199, 0.9) 100%
          );
          transform-origin: right center;
          transform: rotate(-220deg);
          filter: drop-shadow(0 0 8px rgba(183, 228, 199, 0.85));
          animation-name: meteor;
          animation-timing-function: linear;
          will-change: transform, opacity;
          opacity: 0;
        }
        @keyframes twinkle {
          0%, 100% {
            opacity: 0.2;
            transform: scale(0.85);
          }
          50% {
            opacity: 1;
            transform: scale(1.25);
          }
        }
        @keyframes meteor {
          0% {
            transform: translate3d(0, 0, 0) rotate(-220deg);
            opacity: 0;
          }
          6% {
            opacity: 1;
          }
          70% {
            opacity: 1;
          }
          100% {
            transform: translate3d(-70vw, 70vh, 0) rotate(-220deg);
            opacity: 0;
          }
        }
      `}</style>
    </div>
  );
}
