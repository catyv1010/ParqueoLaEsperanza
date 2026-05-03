"use client";

import { useEffect, useRef, type ReactNode } from "react";

export function Spotlight({
  children,
  className = "",
  asSection = false,
  id,
}: {
  children: ReactNode;
  className?: string;
  asSection?: boolean;
  id?: string;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const el = (asSection ? sectionRef.current : ref.current) as HTMLElement | null;
    if (!el) return;
    if (window.matchMedia("(pointer: coarse)").matches) return;

    let raf = 0;
    const onMove = (e: MouseEvent) => {
      cancelAnimationFrame(raf);
      raf = requestAnimationFrame(() => {
        const rect = el.getBoundingClientRect();
        const x = ((e.clientX - rect.left) / rect.width) * 100;
        const y = ((e.clientY - rect.top) / rect.height) * 100;
        el.style.setProperty("--mx", `${x}%`);
        el.style.setProperty("--my", `${y}%`);
        el.classList.add("is-active");
      });
    };
    const onLeave = () => el.classList.remove("is-active");

    el.addEventListener("mousemove", onMove);
    el.addEventListener("mouseleave", onLeave);
    return () => {
      el.removeEventListener("mousemove", onMove);
      el.removeEventListener("mouseleave", onLeave);
      cancelAnimationFrame(raf);
    };
  }, [asSection]);

  if (asSection) {
    return (
      <section ref={sectionRef} id={id} className={`spotlight ${className}`}>
        {children}
      </section>
    );
  }
  return (
    <div ref={ref} className={`spotlight ${className}`}>
      {children}
    </div>
  );
}
