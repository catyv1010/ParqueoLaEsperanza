import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
} from "@/components/ui/card";
import {
  Car,
  ShieldCheck,
  Droplets,
  SprayCan,
  Clock,
  Sparkles,
} from "lucide-react";
import { type ReactNode } from "react";

interface ServiceItem {
  icon: ReactNode;
  title: string;
  description: string;
}

const services: ServiceItem[] = [
  {
    icon: <ShieldCheck className="h-6 w-6" />,
    title: "Estacionamiento Seguro",
    description:
      "Parqueo vigilado las 24 horas con camaras de seguridad y personal capacitado para la proteccion de tu vehiculo. Tarifa: ₡1,000 por hora.",
  },
  {
    icon: <Droplets className="h-6 w-6" />,
    title: "Lavado Exterior",
    description:
      "Limpieza completa del exterior con productos de alta calidad que protegen la pintura de tu vehiculo.",
  },
  {
    icon: <SprayCan className="h-6 w-6" />,
    title: "Lavado Interior",
    description:
      "Aspirado profundo, limpieza de tapiceria, tablero y vidrios para un interior impecable.",
  },
  {
    icon: <Sparkles className="h-6 w-6" />,
    title: "Lavado Premium",
    description:
      "Servicio completo interior y exterior con encerado, pulido y proteccion ceramica.",
  },
  {
    icon: <Car className="h-6 w-6" />,
    title: "Lavado de Motor",
    description:
      "Desengrase y limpieza profesional del motor para mantener tu vehiculo en optimas condiciones.",
  },
  {
    icon: <Clock className="h-6 w-6" />,
    title: "Servicio Express",
    description:
      "Lavado rapido en menos de 30 minutos sin perder la calidad que nos caracteriza.",
  },
];

function ServiceCardDecorator({ children }: { children: ReactNode }) {
  return (
    <div className="relative mx-auto flex h-14 w-14 items-center justify-center rounded-xl bg-primary/10 text-primary transition-colors duration-200 group-hover:bg-primary group-hover:text-white">
      {children}
    </div>
  );
}

export function Services() {
  return (
    <section id="servicios" className="py-20 lg:py-32">
      <div className="mx-auto max-w-6xl px-6">
        {/* Section Header */}
        <div className="text-center">
          <span className="inline-block rounded-full border border-primary/20 bg-primary/5 px-4 py-1.5 text-sm font-medium text-primary">
            Nuestros Servicios
          </span>
          <h2 className="mt-4 text-3xl font-bold tracking-tight text-foreground sm:text-4xl lg:text-5xl">
            Todo lo que tu vehiculo necesita
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-lg text-muted-foreground">
            Desde estacionamiento seguro hasta lavado profesional, ofrecemos
            soluciones completas para el cuidado de tu auto.
          </p>
        </div>

        {/* Services Grid */}
        <div className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((service) => (
            <Card
              key={service.title}
              className="group cursor-pointer border-border/60 bg-white/80 backdrop-blur-sm transition-all duration-200 hover:border-primary/30 hover:shadow-lg hover:shadow-primary/5"
            >
              <CardHeader className="items-center text-center">
                <ServiceCardDecorator>{service.icon}</ServiceCardDecorator>
                <CardTitle className="mt-4">{service.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-center text-sm leading-relaxed">
                  {service.description}
                </CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
