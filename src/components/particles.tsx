"use client";

import { useMemo } from "react";

type Particle = { left: number; size: number; delay: number; dur: number; drift: number };

function rand(min: number, max: number) {
  return Math.random() * (max - min) + min;
}

export function Particles({ count = 18 }: { count?: number }) {
  const list = useMemo<Particle[]>(
    () =>
      Array.from({ length: count }, () => ({
        left: rand(0, 100),
        size: rand(2, 5),
        delay: rand(0, 14),
        dur: rand(14, 26),
        drift: rand(-40, 40),
      })),
    [count]
  );

  return (
    <div
      aria-hidden
      className="pointer-events-none absolute inset-0 overflow-hidden"
    >
      {list.map((p, i) => (
        <span
          key={i}
          className="particle absolute rounded-full"
          style={{
            left: `${p.left}%`,
            width: `${p.size}px`,
            height: `${p.size}px`,
            animationDelay: `${p.delay}s`,
            animationDuration: `${p.dur}s`,
            ["--drift" as string]: `${p.drift}px`,
            background:
              "radial-gradient(circle at 30% 30%, rgba(183,228,199,0.95), rgba(116,198,157,0.35) 60%, transparent 80%)",
            boxShadow: "0 0 12px rgba(116,198,157,0.45)",
          }}
        />
      ))}
      <style jsx>{`
        .particle {
          bottom: -20px;
          opacity: 0;
          animation-name: drift;
          animation-timing-function: linear;
          animation-iteration-count: infinite;
          will-change: transform, opacity;
        }
        @keyframes drift {
          0% {
            transform: translate3d(0, 0, 0) scale(0.7);
            opacity: 0;
          }
          15% {
            opacity: 0.9;
          }
          85% {
            opacity: 0.9;
          }
          100% {
            transform: translate3d(var(--drift), -110vh, 0) scale(1.15);
            opacity: 0;
          }
        }
      `}</style>
    </div>
  );
}
