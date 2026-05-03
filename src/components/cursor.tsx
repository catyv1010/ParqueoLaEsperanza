"use client";

import { useEffect, useRef } from "react";

export function Cursor() {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (window.matchMedia("(pointer: coarse)").matches) return;

    let raf = 0;
    let tx = 0,
      ty = 0,
      cx = 0,
      cy = 0;

    const onMove = (e: MouseEvent) => {
      tx = e.clientX;
      ty = e.clientY;
    };

    const tick = () => {
      cx += (tx - cx) * 0.18;
      cy += (ty - cy) * 0.18;
      if (ref.current) {
        ref.current.style.transform = `translate(${cx}px, ${cy}px) translate(-50%, -50%)`;
      }
      raf = requestAnimationFrame(tick);
    };

    window.addEventListener("mousemove", onMove);
    raf = requestAnimationFrame(tick);

    return () => {
      window.removeEventListener("mousemove", onMove);
      cancelAnimationFrame(raf);
    };
  }, []);

  return <div ref={ref} className="cursor-glow hidden md:block" aria-hidden />;
}
