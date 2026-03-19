"use client";

import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Phone, MapPin, Clock, Mail } from "lucide-react";

const contactInfo = [
  {
    icon: <Phone className="h-5 w-5" />,
    label: "Telefono",
    value: "+506 7020-7762 / 8832-2660",
    href: "tel:+50670207762",
  },
  {
    icon: <Mail className="h-5 w-5" />,
    label: "Correo",
    value: "info@laesperanza.com",
    href: "mailto:info@laesperanza.com",
  },
  {
    icon: <MapPin className="h-5 w-5" />,
    label: "Direccion",
    value: "Ciudad de Guatemala, Guatemala",
    href: "#",
  },
  {
    icon: <Clock className="h-5 w-5" />,
    label: "Horario",
    value: "Lunes a Domingo, 6:00 AM - 9:00 PM",
    href: "#",
  },
];

export function Contact() {
  return (
    <section
      id="contacto"
      className="relative py-20 lg:py-32"
    >
      {/* Background accent */}
      <div className="absolute inset-0 bg-gradient-to-t from-primary/5 to-transparent" />

      <div className="relative mx-auto max-w-6xl px-6">
        {/* Section Header */}
        <div className="text-center">
          <span className="inline-block rounded-full border border-primary/20 bg-primary/5 px-4 py-1.5 text-sm font-medium text-primary">
            Contacto
          </span>
          <h2 className="mt-4 text-3xl font-bold tracking-tight text-foreground sm:text-4xl lg:text-5xl">
            Visitanos hoy
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-lg text-muted-foreground">
            Estamos listos para atenderte. Contactanos o visitanos en nuestra
            ubicacion.
          </p>
        </div>

        <div className="mt-12 grid grid-cols-1 gap-8 lg:grid-cols-2">
          {/* Contact Cards */}
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
            {contactInfo.map((item) => (
              <a
                key={item.label}
                href={item.href}
                className="group cursor-pointer"
              >
                <Card className="flex h-full flex-col items-center gap-3 border-border/60 bg-white/80 p-6 text-center backdrop-blur-sm transition-all duration-200 hover:border-primary/30 hover:shadow-lg hover:shadow-primary/5">
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10 text-primary transition-colors duration-200 group-hover:bg-primary group-hover:text-white">
                    {item.icon}
                  </div>
                  <div>
                    <p className="text-sm font-medium text-muted-foreground">
                      {item.label}
                    </p>
                    <p className="mt-1 text-sm font-semibold text-foreground">
                      {item.value}
                    </p>
                  </div>
                </Card>
              </a>
            ))}
          </div>

          {/* CTA Card */}
          <Card className="flex flex-col justify-center border-primary/20 bg-gradient-to-br from-primary to-primary/80 p-8 text-white lg:p-10">
            <h3 className="text-2xl font-bold">
              Reserva tu espacio
            </h3>
            <p className="mt-3 text-base leading-relaxed text-white/80">
              Asegura un lugar para tu vehiculo y agenda tu lavado profesional.
              Atendemos con cita previa y servicio directo. Tu satisfaccion es
              nuestra prioridad.
            </p>
            <div className="mt-6 flex flex-col gap-3 sm:flex-row">
              <Button
                size="lg"
                variant="cta"
                className="gap-2"
              >
                <Phone className="h-4 w-4" />
                Llamar ahora
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="gap-2 border-white/30 bg-white/10 text-white hover:bg-white/20 hover:text-white"
              >
                <Mail className="h-4 w-4" />
                Enviar mensaje
              </Button>
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
}
