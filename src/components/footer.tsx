export function Footer() {
  return (
    <footer className="relative overflow-hidden bg-ink py-16 text-bone lg:py-24">
      <div className="mx-auto max-w-[1500px] px-6 lg:px-16">
        {/* Massive serif wordmark */}
        <div className="pointer-events-none mb-16 select-none overflow-hidden">
          <h3 className="font-display text-[18vw] leading-[0.85] text-bone/[0.08] lg:text-[14rem]">
            La Esperanza
          </h3>
        </div>

        <div className="grid grid-cols-12 gap-8 border-t border-bone/10 pt-12">
          <div className="col-span-12 md:col-span-5">
            <div className="font-display text-3xl text-bone">
              Parqueo y Lavacar{" "}
              <span className="italic text-bone/70">La Esperanza</span>
            </div>
            <p className="mt-4 max-w-sm text-sm leading-relaxed text-bone/65">
              Tu vehículo, en buenas manos. Parqueo seguro y lavacar
              profesional en Costa Rica.
            </p>
          </div>

          <div className="col-span-6 md:col-span-2">
            <div className="tracking-eyebrow text-xs text-bone/55">Navegá</div>
            <ul className="mt-4 space-y-2 text-sm text-bone/85">
              <li>
                <a href="#inicio" className="hover:text-terra-2">
                  Inicio
                </a>
              </li>
              <li>
                <a href="#servicios" className="hover:text-terra-2">
                  Servicios
                </a>
              </li>
              <li>
                <a href="#galeria" className="hover:text-terra-2">
                  Galería
                </a>
              </li>
              <li>
                <a href="#contacto" className="hover:text-terra-2">
                  Contacto
                </a>
              </li>
            </ul>
          </div>

          <div className="col-span-6 md:col-span-2">
            <div className="tracking-eyebrow text-xs text-bone/55">
              Contacto
            </div>
            <ul className="mt-4 space-y-2 text-sm text-bone/85">
              <li>
                <a href="tel:+50670207762" className="hover:text-terra-2">
                  +506 7020-7762
                </a>
              </li>
              <li>
                <a href="tel:+50688322660" className="hover:text-terra-2">
                  +506 8832-2660
                </a>
              </li>
            </ul>
          </div>

          <div className="col-span-12 md:col-span-3">
            <div className="tracking-eyebrow text-xs text-bone/55">
              Horario
            </div>
            <ul className="mt-4 space-y-2 text-sm text-bone/85">
              <li>Lunes a Domingo</li>
              <li>6:00am — 9:00pm</li>
              <li className="flex items-center gap-2 text-teal">
                <span className="h-1.5 w-1.5 rounded-full bg-teal" />
                Abierto ahora
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 flex flex-col items-start justify-between gap-4 border-t border-bone/10 pt-8 text-xs text-bone/55 sm:flex-row sm:items-center">
          <p>
            © {new Date().getFullYear()} Parqueo y Lavacar La Esperanza. Todos
            los derechos reservados.
          </p>
          <p className="tracking-eyebrow">Costa Rica · hecho con cariño</p>
        </div>
      </div>
    </footer>
  );
}
