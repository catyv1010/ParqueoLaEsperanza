import { SkyEffects } from "@/components/sky-effects";

export function Footer() {
  return (
    <footer className="relative overflow-hidden border-t border-mint/10 bg-night py-16 text-bone lg:py-24">
      {/* Subtle stars */}
      <div className="absolute inset-0 opacity-50">
        <SkyEffects stars={30} area="full" />
      </div>

      {/* Glow */}
      <div
        aria-hidden
        className="absolute left-1/2 top-0 h-[300px] w-[800px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-mint/8 blur-[160px]"
      />

      <div className="relative mx-auto max-w-[1500px] px-6 lg:px-16">
        {/* Massive outline wordmark */}
        <div className="pointer-events-none relative mb-16 select-none overflow-hidden">
          <h3 className="text-outline-mint font-display text-[18vw] leading-[0.85] lg:text-[14rem]">
            La Esperanza
          </h3>
        </div>

        <div className="grid grid-cols-12 gap-8 border-t border-mint/10 pt-12">
          <div className="col-span-12 md:col-span-5">
            <div className="font-display text-3xl text-bone">
              Parqueo y Lavacar{" "}
              <span className="italic text-mint/80">La Esperanza</span>
            </div>
            <p className="mt-4 max-w-sm text-sm leading-relaxed text-bone/55">
              Tu vehículo, en buenas manos. Parqueo seguro y lavacar
              profesional en Cartago, Costa Rica.
            </p>
          </div>

          <div className="col-span-6 md:col-span-2">
            <div className="tracking-eyebrow text-xs text-mint/55">Navegá</div>
            <ul className="mt-4 space-y-2 text-sm text-bone/75">
              <li>
                <a href="#inicio" className="transition-colors hover:text-mint">
                  Inicio
                </a>
              </li>
              <li>
                <a
                  href="#servicios"
                  className="transition-colors hover:text-mint"
                >
                  Servicios
                </a>
              </li>
              <li>
                <a
                  href="#galeria"
                  className="transition-colors hover:text-mint"
                >
                  Lugar
                </a>
              </li>
              <li>
                <a
                  href="#contacto"
                  className="transition-colors hover:text-mint"
                >
                  Contacto
                </a>
              </li>
            </ul>
          </div>

          <div className="col-span-6 md:col-span-2">
            <div className="tracking-eyebrow text-xs text-mint/55">
              Contacto
            </div>
            <ul className="mt-4 space-y-2 text-sm text-bone/75">
              <li>
                <a
                  href="tel:+50670207762"
                  className="transition-colors hover:text-mint"
                >
                  +506 7020-7762
                </a>
              </li>
              <li>
                <a
                  href="tel:+50688322660"
                  className="transition-colors hover:text-mint"
                >
                  +506 8832-2660
                </a>
              </li>
            </ul>
          </div>

          <div className="col-span-12 md:col-span-3">
            <div className="tracking-eyebrow text-xs text-mint/55">
              Horario · Ubicación
            </div>
            <ul className="mt-4 space-y-2 text-sm text-bone/75">
              <li>Lunes a Domingo · 6am — 9pm</li>
              <li>
                <a
                  href="https://www.google.com/maps/place/Parqueo+La+Esperanza/@9.862587,-83.9205466,17z"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="transition-colors hover:text-mint"
                >
                  Cartago, Costa Rica →
                </a>
              </li>
              <li className="flex items-center gap-2 text-mint">
                <span className="relative flex h-1.5 w-1.5">
                  <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-mint-glow opacity-75" />
                  <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-mint" />
                </span>
                Abierto ahora
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 flex flex-col items-start justify-between gap-4 border-t border-mint/10 pt-8 text-xs text-bone/50 sm:flex-row sm:items-center">
          <p>
            © {new Date().getFullYear()} Parqueo y Lavacar La Esperanza. Todos
            los derechos reservados.
          </p>
          <p className="tracking-eyebrow text-mint/60">
            Costa Rica · hecho con cariño
          </p>
        </div>
      </div>
    </footer>
  );
}
