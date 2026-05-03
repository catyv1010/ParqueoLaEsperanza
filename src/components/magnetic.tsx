"use client";

import { useRef, type ReactNode } from "react";

export function Magnetic({
  children,
  strength = 0.35,
  className = "",
  href,
  target,
  rel,
  onClick,
}: {
  children: ReactNode;
  strength?: number;
  className?: string;
  href?: string;
  target?: string;
  rel?: string;
  onClick?: () => void;
}) {
  const ref = useRef<HTMLAnchorElement>(null);
  const rafRef = useRef(0);

  const onMove = (e: React.MouseEvent<HTMLAnchorElement>) => {
    const el = ref.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    const x = (e.clientX - (rect.left + rect.width / 2)) * strength;
    const y = (e.clientY - (rect.top + rect.height / 2)) * strength;
    cancelAnimationFrame(rafRef.current);
    rafRef.current = requestAnimationFrame(() => {
      el.style.transform = `translate(${x}px, ${y}px)`;
    });
  };

  const onLeave = () => {
    const el = ref.current;
    if (!el) return;
    cancelAnimationFrame(rafRef.current);
    el.style.transform = `translate(0,0)`;
  };

  return (
    <a
      ref={ref}
      href={href}
      target={target}
      rel={rel}
      onClick={onClick}
      onMouseMove={onMove}
      onMouseLeave={onLeave}
      className={`magnetic ${className}`}
    >
      {children}
    </a>
  );
}
