"use client";

import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import { Grasshopper } from "@/components/grasshopper";

const links = [
  { label: "Inicio", href: "#inicio" },
  { label: "Servicios", href: "#servicios" },
  { label: "Galería", href: "#galeria" },
  { label: "Contacto", href: "#contacto" },
];

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 80);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <>
      <header
        className={`fixed inset-x-0 top-0 z-40 transition-all duration-500 ${
          scrolled
            ? "bg-cream/85 backdrop-blur-xl border-b border-emerald/15 text-ink"
            : "bg-transparent text-bone"
        }`}
      >
        <nav className="mx-auto flex max-w-[1500px] items-center justify-between px-6 py-4 lg:px-12">
          <a href="#inicio" className="group flex items-center gap-3">
            <span
              className={`relative flex h-12 w-12 items-center justify-center overflow-hidden rounded-full transition-colors ${
                scrolled ? "bg-emerald/10" : "bg-bone/15 backdrop-blur-md"
              }`}
            >
              <span className="animate-hop">
                <Grasshopper className="h-7 w-7" />
              </span>
            </span>
            <span className="hidden flex-col leading-tight sm:flex">
              <span className="font-display text-xl italic">
                La Esperanza
              </span>
              <span
                className={`text-[10px] tracking-eyebrow ${
                  scrolled ? "text-emerald" : "text-bone/80"
                }`}
              >
                Parqueo · Lavacar · CR
              </span>
            </span>
          </a>

          <ul className="hidden items-center gap-10 md:flex">
            {links.map((l) => (
              <li key={l.href}>
                <a
                  href={l.href}
                  className="group relative text-sm font-medium opacity-90 transition-opacity hover:opacity-100"
                >
                  {l.label}
                  <span className="absolute -bottom-1 left-0 h-px w-0 bg-emerald transition-all duration-500 group-hover:w-full" />
                </a>
              </li>
            ))}
          </ul>

          <a
            href="#contacto"
            className={`btn-magnet group hidden items-center gap-2 rounded-full px-5 py-2.5 text-sm font-medium transition-all duration-500 md:inline-flex ${
              scrolled
                ? "bg-emerald text-bone hover:bg-emerald-deep"
                : "bg-bone text-ink hover:bg-emerald hover:text-bone"
            }`}
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
            className="md:hidden"
            aria-label={open ? "Cerrar menú" : "Abrir menú"}
          >
            {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </nav>
      </header>

      {open && (
        <div className="fixed inset-0 z-50 flex flex-col items-center justify-center gap-8 bg-cream md:hidden">
          <button
            onClick={() => setOpen(false)}
            className="absolute right-6 top-6 text-ink"
          >
            <X className="h-7 w-7" />
          </button>
          <span className="animate-hop mb-4">
            <Grasshopper className="h-20 w-20" />
          </span>
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              onClick={() => setOpen(false)}
              className="font-display text-5xl italic text-ink transition-colors hover:text-emerald"
            >
              {l.label}
            </a>
          ))}
        </div>
      )}
    </>
  );
}
