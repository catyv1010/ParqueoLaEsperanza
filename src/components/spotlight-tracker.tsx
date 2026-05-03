"use client";

import { useEffect } from "react";

export function SpotlightTracker() {
  useEffect(() => {
    if (window.matchMedia("(pointer: coarse)").matches) return;

    let raf = 0;
    const onMove = (e: MouseEvent) => {
      cancelAnimationFrame(raf);
      raf = requestAnimationFrame(() => {
        const els = document.querySelectorAll<HTMLElement>(".spotlight");
        els.forEach((el) => {
          const rect = el.getBoundingClientRect();
          if (
            e.clientX >= rect.left &&
            e.clientX <= rect.right &&
            e.clientY >= rect.top &&
            e.clientY <= rect.bottom
          ) {
            const x = ((e.clientX - rect.left) / rect.width) * 100;
            const y = ((e.clientY - rect.top) / rect.height) * 100;
            el.style.setProperty("--mx", `${x}%`);
            el.style.setProperty("--my", `${y}%`);
            el.classList.add("is-active");
          } else {
            el.classList.remove("is-active");
          }
        });
      });
    };

    window.addEventListener("mousemove", onMove, { passive: true });
    return () => {
      window.removeEventListener("mousemove", onMove);
      cancelAnimationFrame(raf);
    };
  }, []);

  return null;
}
