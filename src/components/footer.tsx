import { Car } from "lucide-react";

export function Footer() {
  return (
    <footer className="border-t border-border/60 bg-white/60 py-8 backdrop-blur-sm">
      <div className="mx-auto flex max-w-6xl flex-col items-center gap-4 px-6 sm:flex-row sm:justify-between">
        <div className="flex items-center gap-2">
          <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-primary text-white">
            <Car className="h-4 w-4" />
          </div>
          <span className="text-sm font-semibold text-foreground">
            Parqueo y Lavacar La Esperanza
          </span>
        </div>
        <p className="text-sm text-muted-foreground">
          &copy; {new Date().getFullYear()} La Esperanza. Todos los derechos
          reservados.
        </p>
      </div>
    </footer>
  );
}
