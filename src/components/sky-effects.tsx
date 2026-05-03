"use client";

import { useMemo } from "react";

type Star = { left: number; top: number; size: number; delay: number; dur: number };
type Meteor = { top: number; left: number; delay: number; dur: number };
type Bubble = { left: number; size: number; delay: number; dur: number; opacity: number };

function rand(min: number, max: number) {
  return Math.random() * (max - min) + min;
}

export function SkyEffects({
  stars = 50,
  meteors = 6,
  bubbles = 22,
}: {
  stars?: number;
  meteors?: number;
  bubbles?: number;
}) {
  const starList = useMemo<Star[]>(
    () =>
      Array.from({ length: stars }, () => ({
        left: rand(0, 100),
        top: rand(0, 70),
        size: rand(1, 2.4),
        delay: rand(0, 5),
        dur: rand(2.5, 5),
      })),
    [stars]
  );

  const meteorList = useMemo<Meteor[]>(
    () =>
      Array.from({ length: meteors }, (_, i) => ({
        top: rand(-10, 60),
        left: rand(20, 100),
        delay: i * 1.6 + rand(0, 1.2),
        dur: rand(2.4, 3.8),
      })),
    [meteors]
  );

  const bubbleList = useMemo<Bubble[]>(
    () =>
      Array.from({ length: bubbles }, () => ({
        left: rand(0, 100),
        size: rand(8, 28),
        delay: rand(0, 12),
        dur: rand(10, 18),
        opacity: rand(0.18, 0.5),
      })),
    [bubbles]
  );

  return (
    <div
      aria-hidden
      className="pointer-events-none absolute inset-0 overflow-hidden"
    >
      {/* Twinkling stars */}
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
            boxShadow: "0 0 6px rgba(255,255,255,0.85)",
          }}
        />
      ))}

      {/* Meteors / shooting stars */}
      {meteorList.map((m, i) => (
        <span
          key={`m-${i}`}
          className="sky-meteor absolute"
          style={{
            top: `${m.top}%`,
            left: `${m.left}%`,
            animationDelay: `${m.delay}s`,
            animationDuration: `${m.dur}s`,
          }}
        />
      ))}

      {/* Soap bubbles (lavacar) */}
      {bubbleList.map((b, i) => (
        <span
          key={`b-${i}`}
          className="sky-bubble absolute rounded-full"
          style={{
            left: `${b.left}%`,
            width: `${b.size}px`,
            height: `${b.size}px`,
            animationDelay: `${b.delay}s`,
            animationDuration: `${b.dur}s`,
            background: `radial-gradient(circle at 30% 30%, rgba(255,255,255,${b.opacity + 0.2}), rgba(183,228,199,${b.opacity}) 60%, rgba(116,198,157,0.05) 100%)`,
            border: "1px solid rgba(255,255,255,0.25)",
            opacity: b.opacity,
          }}
        />
      ))}

      <style jsx>{`
        .sky-star {
          animation: twinkle ease-in-out infinite;
          will-change: opacity, transform;
        }
        .sky-meteor {
          width: 140px;
          height: 1.5px;
          background: linear-gradient(
            90deg,
            transparent 0%,
            rgba(255, 255, 255, 0.95) 60%,
            rgba(183, 228, 199, 0.95) 100%
          );
          transform-origin: right center;
          transform: rotate(-220deg);
          filter: drop-shadow(0 0 6px rgba(183, 228, 199, 0.8));
          animation: meteor linear infinite;
          will-change: transform, opacity;
          opacity: 0;
        }
        .sky-bubble {
          bottom: -40px;
          animation: rise linear infinite;
          will-change: transform, opacity;
        }
        @keyframes twinkle {
          0%,
          100% {
            opacity: 0.15;
            transform: scale(0.85);
          }
          50% {
            opacity: 1;
            transform: scale(1.2);
          }
        }
        @keyframes meteor {
          0% {
            transform: translate3d(0, 0, 0) rotate(-220deg);
            opacity: 0;
          }
          5% {
            opacity: 1;
          }
          70% {
            opacity: 1;
          }
          100% {
            transform: translate3d(-65vw, 65vh, 0) rotate(-220deg);
            opacity: 0;
          }
        }
        @keyframes rise {
          0% {
            transform: translate3d(0, 0, 0) scale(0.6);
            opacity: 0;
          }
          12% {
            opacity: 0.7;
          }
          88% {
            opacity: 0.7;
          }
          100% {
            transform: translate3d(20px, -110vh, 0) scale(1.1);
            opacity: 0;
          }
        }
      `}</style>
    </div>
  );
}
