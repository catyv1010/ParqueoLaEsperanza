"use client";

import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";

const links = [
  { label: "Inicio", href: "#inicio" },
  { label: "Servicios", href: "#servicios" },
  { label: "Tarifas", href: "#tarifas" },
  { label: "Contacto", href: "#contacto" },
];

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <>
      <header
        className={`fixed inset-x-0 top-0 z-50 transition-all duration-500 ${
          scrolled
            ? "bg-ink/70 backdrop-blur-xl border-b border-white/5"
            : "bg-transparent"
        }`}
      >
        <nav className="mx-auto flex max-w-[1400px] items-center justify-between px-6 py-5 lg:px-12">
          <a
            href="#inicio"
            className="group flex items-center gap-3 text-bone"
          >
            <span className="relative flex h-9 w-9 items-center justify-center overflow-hidden rounded-full border border-teal/40 bg-teal/10">
              <span className="absolute inset-0 bg-teal opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
              <svg
                viewBox="0 0 24 24"
                className="relative h-4 w-4 text-teal-glow transition-colors duration-500 group-hover:text-ink"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.6"
              >
                <path d="M3 12 L7 7 L17 7 L21 12 L21 18 L18 18 L18 16 L6 16 L6 18 L3 18 Z" />
                <circle cx="8" cy="18" r="1.6" fill="currentColor" />
                <circle cx="16" cy="18" r="1.6" fill="currentColor" />
              </svg>
            </span>
            <span className="hidden flex-col leading-tight sm:flex">
              <span className="font-display text-lg italic text-bone">
                La Esperanza
              </span>
              <span className="text-[10px] tracking-eyebrow text-mute">
                Parqueo · Lavacar
              </span>
            </span>
          </a>

          <ul className="hidden items-center gap-10 md:flex">
            {links.map((l) => (
              <li key={l.href}>
                <a
                  href={l.href}
                  className="group relative text-sm font-medium text-bone-dim transition-colors hover:text-bone"
                >
                  {l.label}
                  <span className="absolute -bottom-1 left-0 h-px w-0 bg-amber transition-all duration-500 group-hover:w-full" />
                </a>
              </li>
            ))}
          </ul>

          <a
            href="#contacto"
            className="group hidden items-center gap-2 rounded-full border border-amber/40 bg-amber/5 px-5 py-2 text-sm font-medium text-amber-soft transition-all duration-500 hover:bg-amber hover:text-ink md:inline-flex"
          >
            Reservar
            <svg
              viewBox="0 0 24 24"
              className="h-3.5 w-3.5 transition-transform duration-500 group-hover:translate-x-0.5"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
            >
              <path d="M5 12h14M13 5l7 7-7 7" />
            </svg>
          </a>

          <button
            onClick={() => setOpen(!open)}
            className="text-bone md:hidden"
            aria-label={open ? "Cerrar menú" : "Abrir menú"}
          >
            {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </nav>
      </header>

      {open && (
        <div className="fixed inset-0 z-40 flex flex-col items-center justify-center gap-8 bg-ink/95 backdrop-blur-xl md:hidden">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              onClick={() => setOpen(false)}
              className="font-display text-4xl text-bone transition-colors hover:text-amber"
            >
              {l.label}
            </a>
          ))}
        </div>
      )}
    </>
  );
}
