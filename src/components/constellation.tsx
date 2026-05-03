"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";

const STARS = [
  { x: 12, y: 18, r: 2.5 },
  { x: 22, y: 30, r: 1.8 },
  { x: 35, y: 22, r: 2.2 },
  { x: 48, y: 38, r: 1.6 },
  { x: 62, y: 25, r: 2.4 },
  { x: 76, y: 16, r: 1.9 },
  { x: 88, y: 32, r: 2.1 },
  { x: 18, y: 58, r: 1.7 },
  { x: 32, y: 70, r: 2 },
  { x: 50, y: 62, r: 2.3 },
  { x: 68, y: 75, r: 1.5 },
  { x: 84, y: 60, r: 2 },
];

const LINKS: [number, number][] = [
  [0, 1], [1, 2], [2, 3], [3, 4], [4, 5], [5, 6],
  [7, 8], [8, 9], [9, 10], [10, 11],
  [3, 9], [4, 10],
];

export function Constellation() {
  const ref = useRef<SVGSVGElement>(null);

  useEffect(() => {
    if (!ref.current) return;
    const ctx = gsap.context(() => {
      const lines = ref.current!.querySelectorAll<SVGLineElement>("line");
      const dots = ref.current!.querySelectorAll<SVGCircleElement>("circle");

      gsap.set(lines, { strokeDasharray: 200, strokeDashoffset: 200, opacity: 0 });
      gsap.set(dots, { opacity: 0, scale: 0, transformOrigin: "center" });

      const tl = gsap.timeline({ delay: 0.6 });
      tl.to(dots, {
        opacity: 1,
        scale: 1,
        duration: 0.8,
        stagger: 0.05,
        ease: "back.out(1.5)",
      });
      tl.to(
        lines,
        {
          strokeDashoffset: 0,
          opacity: 1,
          duration: 1.2,
          stagger: 0.06,
          ease: "expo.out",
        },
        "-=0.4"
      );

      // Breathing
      gsap.to(dots, {
        opacity: 0.4,
        duration: 2.4,
        yoyo: true,
        repeat: -1,
        stagger: { each: 0.15, from: "random" },
        ease: "sine.inOut",
      });
      gsap.to(lines, {
        opacity: 0.25,
        duration: 4,
        yoyo: true,
        repeat: -1,
        ease: "sine.inOut",
      });
    }, ref);
    return () => ctx.revert();
  }, []);

  return (
    <svg
      ref={ref}
      className="pointer-events-none absolute inset-0 h-full w-full"
      viewBox="0 0 100 100"
      preserveAspectRatio="none"
      aria-hidden
    >
      {LINKS.map(([a, b], i) => (
        <line
          key={i}
          x1={STARS[a].x}
          y1={STARS[a].y}
          x2={STARS[b].x}
          y2={STARS[b].y}
          stroke="rgba(183, 228, 199, 0.45)"
          strokeWidth="0.08"
          vectorEffect="non-scaling-stroke"
        />
      ))}
      {STARS.map((s, i) => (
        <circle
          key={i}
          cx={s.x}
          cy={s.y}
          r={s.r * 0.18}
          fill="rgba(250, 246, 236, 0.95)"
          style={{
            filter: "drop-shadow(0 0 4px rgba(183,228,199,0.9))",
          }}
        />
      ))}
    </svg>
  );
}
