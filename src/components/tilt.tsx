"use client";

import { useRef, type ReactNode } from "react";

export function Tilt({
  children,
  max = 10,
  className = "",
}: {
  children: ReactNode;
  max?: number;
  className?: string;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const rafRef = useRef(0);

  const onMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const el = ref.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    const x = (e.clientX - rect.left) / rect.width - 0.5;
    const y = (e.clientY - rect.top) / rect.height - 0.5;
    cancelAnimationFrame(rafRef.current);
    rafRef.current = requestAnimationFrame(() => {
      const inner = el.querySelector<HTMLElement>(".tilt-inner");
      if (inner) {
        inner.style.transform = `rotateY(${x * max}deg) rotateX(${-y * max}deg) translateZ(0)`;
      }
    });
  };

  const onLeave = () => {
    const el = ref.current;
    if (!el) return;
    cancelAnimationFrame(rafRef.current);
    const inner = el.querySelector<HTMLElement>(".tilt-inner");
    if (inner) {
      inner.style.transform = `rotateY(0deg) rotateX(0deg) translateZ(0)`;
    }
  };

  return (
    <div
      ref={ref}
      onMouseMove={onMove}
      onMouseLeave={onLeave}
      className={`tilt-card ${className}`}
    >
      <div className="tilt-inner tilt-card-inner h-full w-full">{children}</div>
    </div>
  );
}
