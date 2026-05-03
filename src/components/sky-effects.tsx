"use client";

import { useMemo } from "react";

type Star = {
  left: number;
  top: number;
  size: number;
  delay: number;
  dur: number;
  opacity: number;
  hue: "bone" | "mint";
};

function rand(min: number, max: number) {
  return Math.random() * (max - min) + min;
}

export function SkyEffects({
  stars = 60,
  area = "full",
}: {
  stars?: number;
  area?: "full" | "top";
}) {
  const starList = useMemo<Star[]>(
    () =>
      Array.from({ length: stars }, (_, i) => ({
        left: rand(0, 100),
        top: area === "top" ? rand(0, 60) : rand(0, 100),
        size: rand(0.7, 2.4),
        delay: rand(0, 6),
        dur: rand(2.6, 6),
        opacity: rand(0.35, 1),
        hue: i % 7 === 0 ? "mint" : "bone",
      })),
    [stars, area]
  );

  return (
    <div
      aria-hidden
      className="pointer-events-none absolute inset-0 overflow-hidden"
    >
      {starList.map((s, i) => (
        <span
          key={`s-${i}`}
          className="sky-star absolute rounded-full"
          style={{
            left: `${s.left}%`,
            top: `${s.top}%`,
            width: `${s.size}px`,
            height: `${s.size}px`,
            animationDelay: `${s.delay}s`,
            animationDuration: `${s.dur}s`,
            opacity: s.opacity,
            background:
              s.hue === "mint"
                ? "radial-gradient(circle, rgba(183,228,199,1), rgba(183,228,199,0.5) 60%, transparent 80%)"
                : "radial-gradient(circle, rgba(250,246,236,1), rgba(250,246,236,0.6) 60%, transparent 80%)",
            boxShadow:
              s.hue === "mint"
                ? "0 0 8px rgba(183,228,199,0.85)"
                : "0 0 6px rgba(250,246,236,0.75)",
          }}
        />
      ))}

      <style jsx>{`
        .sky-star {
          animation: twinkle ease-in-out infinite;
          will-change: opacity, transform;
        }
        @keyframes twinkle {
          0%,
          100% {
            opacity: 0.2;
            transform: scale(0.7);
          }
          50% {
            opacity: 1;
            transform: scale(1.3);
          }
        }
      `}</style>
    </div>
  );
}
