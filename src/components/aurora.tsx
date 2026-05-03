"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";

export function Aurora() {
  const root = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!root.current) return;
    const ctx = gsap.context(() => {
      gsap.fromTo(
        ".aurora-band",
        { opacity: 0 },
        { opacity: 1, duration: 2.4, ease: "power2.out", stagger: 0.4 }
      );

      gsap.to(".aurora-1", {
        x: "10%",
        scaleY: 1.35,
        duration: 22,
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut",
      });
      gsap.to(".aurora-2", {
        x: "-14%",
        scaleY: 0.78,
        duration: 28,
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut",
        delay: 1.5,
      });
      gsap.to(".aurora-3", {
        x: "8%",
        scaleY: 1.2,
        duration: 32,
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut",
        delay: 3,
      });

      // Soft shimmer
      gsap.to(".aurora-band", {
        opacity: 0.55,
        duration: 6,
        repeat: -1,
        yoyo: true,
        stagger: { each: 0.8, from: "random" },
        ease: "sine.inOut",
      });
    }, root);
    return () => ctx.revert();
  }, []);

  return (
    <div
      ref={root}
      aria-hidden
      className="pointer-events-none absolute inset-0 overflow-hidden"
    >
      <div
        className="aurora-band aurora-1 absolute opacity-0"
        style={{
          left: "-10%",
          top: "8%",
          height: "42vh",
          width: "120vw",
          transform: "skewY(-3deg)",
          background:
            "linear-gradient(90deg, transparent 0%, rgba(116,198,157,0.35) 28%, rgba(183,228,199,0.32) 55%, rgba(116,198,157,0.18) 78%, transparent 100%)",
          filter: "blur(70px)",
          mixBlendMode: "screen",
        }}
      />
      <div
        className="aurora-band aurora-2 absolute opacity-0"
        style={{
          left: "-15%",
          top: "22%",
          height: "38vh",
          width: "130vw",
          transform: "skewY(2deg)",
          background:
            "linear-gradient(90deg, transparent 0%, rgba(45,122,85,0.42) 32%, rgba(31,92,64,0.28) 65%, transparent 100%)",
          filter: "blur(85px)",
          mixBlendMode: "screen",
        }}
      />
      <div
        className="aurora-band aurora-3 absolute opacity-0"
        style={{
          left: "-8%",
          top: "38%",
          height: "32vh",
          width: "120vw",
          transform: "skewY(-1deg)",
          background:
            "linear-gradient(90deg, transparent 0%, rgba(116,198,157,0.26) 38%, rgba(183,228,199,0.20) 62%, transparent 100%)",
          filter: "blur(95px)",
          mixBlendMode: "screen",
        }}
      />
    </div>
  );
}
