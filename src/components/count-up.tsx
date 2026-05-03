"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

export function CountUp({
  to,
  prefix = "",
  suffix = "",
  duration = 1.8,
  className = "",
  format = "number",
}: {
  to: number;
  prefix?: string;
  suffix?: string;
  duration?: number;
  className?: string;
  format?: "number" | "comma";
}) {
  const ref = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    if (!ref.current) return;
    const obj = { v: 0 };
    const tween = gsap.to(obj, {
      v: to,
      duration,
      ease: "expo.out",
      onUpdate: () => {
        if (!ref.current) return;
        const n = Math.round(obj.v);
        const formatted =
          format === "comma" ? n.toLocaleString("es-CR") : n.toString();
        ref.current.textContent = `${prefix}${formatted}${suffix}`;
      },
      scrollTrigger: {
        trigger: ref.current,
        start: "top 85%",
        once: true,
      },
    });

    return () => {
      tween.scrollTrigger?.kill();
      tween.kill();
    };
  }, [to, prefix, suffix, duration, format]);

  return (
    <span ref={ref} className={className}>
      {prefix}0{suffix}
    </span>
  );
}
