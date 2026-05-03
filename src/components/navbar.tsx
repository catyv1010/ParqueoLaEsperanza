"use client";

import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import { Grasshopper } from "@/components/grasshopper";

const links = [
  { label: "Inicio", href: "#inicio" },
  { label: "Servicios", href: "#servicios" },
  { label: "Lugar", href: "#galeria" },
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
        className={`fixed inset-x-0 top-0 z-40 transition-all duration-500 ${
          scrolled
            ? "bg-night/85 backdrop-blur-xl border-b border-mint/10"
            : "bg-transparent"
        }`}
      >
        <nav className="mx-auto flex max-w-[1500px] items-center justify-between px-6 py-5 lg:px-12">
          <a href="#inicio" className="group flex items-center gap-3">
            <span className="relative flex h-10 w-10 items-center justify-center overflow-hidden rounded-full bg-mint/10 ring-1 ring-mint/20 transition-all group-hover:bg-mint/20">
              <span className="text-mint">
                <Grasshopper className="h-6 w-6" variant="solid" />
              </span>
            </span>
            <span className="hidden flex-col leading-tight sm:flex">
              <span className="font-display text-lg italic text-bone">
                La Esperanza
              </span>
              <span className="tracking-eyebrow text-[9px] text-mint/70">
                Parqueo · Lavacar · CR
              </span>
            </span>
          </a>

          <ul className="hidden items-center gap-10 md:flex">
            {links.map((l) => (
              <li key={l.href}>
                <a
                  href={l.href}
                  className="group relative text-sm font-medium text-bone/80 transition-colors hover:text-bone"
                >
                  {l.label}
                  <span className="absolute -bottom-1.5 left-0 h-px w-0 bg-mint transition-all duration-500 group-hover:w-full" />
                </a>
              </li>
            ))}
          </ul>

          <a
            href="#contacto"
            className="btn-magnet group hidden items-center gap-2 rounded-full bg-mint px-5 py-2.5 text-sm font-medium text-night shadow-[0_0_24px_rgba(116,198,157,0.3)] transition-all duration-500 hover:shadow-[0_0_36px_rgba(116,198,157,0.55)] md:inline-flex"
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
        <div className="fixed inset-0 z-50 flex flex-col items-center justify-center gap-8 bg-night/98 backdrop-blur-xl md:hidden">
          <button
            onClick={() => setOpen(false)}
            className="absolute right-6 top-6 text-bone"
          >
            <X className="h-7 w-7" />
          </button>
          <span className="mb-4 text-mint">
            <Grasshopper className="h-20 w-20" variant="solid" />
          </span>
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              onClick={() => setOpen(false)}
              className="font-display text-5xl italic text-bone transition-colors hover:text-mint"
            >
              {l.label}
            </a>
          ))}
        </div>
      )}
    </>
  );
}
