"use client";

import { Button } from "@/components/ui/button";
import { PhoneCall, MapPin, ChevronDown } from "lucide-react";

export function Hero() {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-background via-green-50 to-secondary/20" />

      {/* Decorative circles */}
      <div className="absolute -top-24 -right-24 h-96 w-96 rounded-full bg-primary/5 blur-3xl" />
      <div className="absolute -bottom-32 -left-32 h-[500px] w-[500px] rounded-full bg-cta/5 blur-3xl" />

      <div className="relative mx-auto max-w-6xl px-6 py-20 lg:py-32">
        <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-2">
          {/* Text Content */}
          <div className="flex flex-col gap-6">
            <div className="inline-flex w-fit items-center gap-2 rounded-full border border-primary/20 bg-white/80 px-4 py-1.5 text-sm font-medium text-primary backdrop-blur-sm">
              <MapPin className="h-4 w-4" />
              Servicio de confianza
            </div>

            <h1 className="text-4xl font-bold tracking-tight text-foreground sm:text-5xl lg:text-6xl">
              Parqueo y Lavacar{" "}
              <span className="text-primary">La Esperanza</span>
            </h1>

            <p className="max-w-lg text-lg leading-relaxed text-muted-foreground">
              Tu vehiculo seguro y reluciente en un solo lugar. Ofrecemos
              estacionamiento vigilado las 24 horas y servicio profesional de
              lavado de autos con los mejores productos del mercado.
            </p>

            <div className="flex flex-col gap-3 sm:flex-row">
              <Button size="lg" variant="cta" className="gap-2">
                <PhoneCall className="h-4 w-4" />
                Contactanos
              </Button>
              <Button size="lg" variant="outline" className="gap-2">
                Ver servicios
                <ChevronDown className="h-4 w-4" />
              </Button>
            </div>

            {/* Trust indicators */}
            <div className="mt-4 flex items-center gap-6 text-sm text-muted-foreground">
              <div className="flex items-center gap-2">
                <div className="h-2 w-2 rounded-full bg-cta" />
                Abierto ahora
              </div>
              <div className="flex items-center gap-2">
                <div className="h-2 w-2 rounded-full bg-primary" />
                Vigilancia 24/7
              </div>
              <div className="flex items-center gap-2">
                <div className="h-2 w-2 rounded-full bg-secondary" />
                +10 anos de experiencia
              </div>
            </div>
          </div>

          {/* Visual Element */}
          <div className="relative hidden lg:block">
            <div className="relative aspect-square overflow-hidden rounded-3xl border border-border bg-gradient-to-br from-primary/10 via-secondary/10 to-cta/10 p-1">
              <div className="flex h-full w-full flex-col items-center justify-center rounded-2xl bg-white/60 backdrop-blur-sm">
                {/* Car wash illustration with SVG */}
                <svg
                  viewBox="0 0 200 200"
                  className="h-48 w-48 text-primary"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  {/* Car body */}
                  <rect
                    x="30"
                    y="110"
                    width="140"
                    height="40"
                    rx="8"
                    fill="currentColor"
                    opacity="0.2"
                  />
                  <rect
                    x="50"
                    y="85"
                    width="100"
                    height="35"
                    rx="6"
                    fill="currentColor"
                    opacity="0.3"
                  />
                  {/* Wheels */}
                  <circle
                    cx="65"
                    cy="155"
                    r="14"
                    fill="currentColor"
                    opacity="0.5"
                  />
                  <circle cx="65" cy="155" r="6" fill="white" />
                  <circle
                    cx="135"
                    cy="155"
                    r="14"
                    fill="currentColor"
                    opacity="0.5"
                  />
                  <circle cx="135" cy="155" r="6" fill="white" />
                  {/* Water drops */}
                  <circle
                    cx="80"
                    cy="50"
                    r="4"
                    fill="#52B788"
                    opacity="0.6"
                  />
                  <circle
                    cx="100"
                    cy="35"
                    r="5"
                    fill="#52B788"
                    opacity="0.4"
                  />
                  <circle
                    cx="120"
                    cy="55"
                    r="3"
                    fill="#52B788"
                    opacity="0.7"
                  />
                  <circle
                    cx="60"
                    cy="65"
                    r="3"
                    fill="#52B788"
                    opacity="0.5"
                  />
                  <circle
                    cx="140"
                    cy="45"
                    r="4"
                    fill="#52B788"
                    opacity="0.5"
                  />
                  {/* Sparkles */}
                  <path
                    d="M155 25l3 8 8 3-8 3-3 8-3-8-8-3 8-3z"
                    fill="#74C69D"
                    opacity="0.6"
                  />
                  <path
                    d="M45 40l2 5 5 2-5 2-2 5-2-5-5-2 5-2z"
                    fill="#74C69D"
                    opacity="0.4"
                  />
                </svg>
                <p className="mt-4 text-lg font-semibold text-primary">
                  Tu vehiculo, nuestra prioridad
                </p>
                <p className="text-sm text-muted-foreground">
                  Limpieza profesional garantizada
                </p>
              </div>
            </div>

            {/* Floating badge */}
            <div className="absolute -bottom-4 -left-4 rounded-2xl border border-border bg-white p-4 shadow-lg">
              <div className="text-2xl font-bold text-primary">+5,000</div>
              <div className="text-sm text-muted-foreground">
                Clientes satisfechos
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
