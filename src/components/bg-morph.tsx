"use client";

import { useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

const stops = [
  { at: 0, bg: "#f3ede0", fg: "#0d1410" },
  { at: 0.18, bg: "#0d3424", fg: "#faf6ec" },
  { at: 0.4, bg: "#f3ede0", fg: "#0d1410" },
  { at: 0.62, bg: "#1f5c40", fg: "#faf6ec" },
  { at: 0.85, bg: "#f3ede0", fg: "#0d1410" },
  { at: 1, bg: "#0d3424", fg: "#faf6ec" },
];

export function BgMorph() {
  useEffect(() => {
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: document.body,
        start: "top top",
        end: "bottom bottom",
        scrub: 1.2,
      },
    });

    stops.forEach((s) => {
      tl.to(
        document.body,
        {
          backgroundColor: s.bg,
          duration: 1,
          ease: "none",
        },
        s.at
      );
    });

    return () => {
      tl.scrollTrigger?.kill();
      tl.kill();
    };
  }, []);

  return null;
}
