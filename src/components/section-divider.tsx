"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

type Variant = "night-to-cream" | "cream-to-night";

const PATHS = {
  rest: "M0,80 C240,40 480,120 720,80 C960,40 1200,120 1440,80 L1440,160 L0,160 Z",
  active: "M0,80 C240,140 480,20 720,80 C960,140 1200,20 1440,80 L1440,160 L0,160 Z",
};

export function SectionDivider({ variant }: { variant: Variant }) {
  const root = useRef<HTMLDivElement>(null);
  const pathRef = useRef<SVGPathElement>(null);

  useEffect(() => {
    if (!root.current || !pathRef.current) return;
    const ctx = gsap.context(() => {
      gsap.fromTo(
        pathRef.current,
        { attr: { d: PATHS.rest } },
        {
          attr: { d: PATHS.active },
          ease: "none",
          scrollTrigger: {
            trigger: root.current,
            start: "top bottom",
            end: "bottom top",
            scrub: 1,
          },
        }
      );
    }, root);
    return () => ctx.revert();
  }, []);

  // night-to-cream: top is night, fill is cream (reveal cream below)
  // cream-to-night: top is cream, fill is night
  const fillColor =
    variant === "night-to-cream" ? "var(--color-cream)" : "var(--color-night)";
  const bgColor =
    variant === "night-to-cream" ? "bg-night" : "bg-cream";

  return (
    <div ref={root} className={`relative ${bgColor} overflow-hidden`}>
      <svg
        className="divider-svg"
        viewBox="0 0 1440 160"
        preserveAspectRatio="none"
        aria-hidden
      >
        <path ref={pathRef} d={PATHS.rest} fill={fillColor} />
      </svg>
    </div>
  );
}
