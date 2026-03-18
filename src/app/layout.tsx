import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Parqueo y Lavacar La Esperanza — Tu parqueo y lavacar de confianza",
  description:
    "Parqueo y Lavacar La Esperanza — Tu parqueo y lavacar de confianza en Costa Rica. Servicios de parqueo por hora, mensual y nocturno. Lavado exterior, interior y premium. Seguro, accesible y con la mejor atención.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          href="https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@400;500;600;700&family=DM+Serif+Display&display=swap"
          rel="stylesheet"
        />
        <link
          rel="icon"
          href="data:image/svg+xml,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 100 100'><text y='.9em' font-size='90'>🦗</text></svg>"
        />
      </head>
      <body>{children}</body>
    </html>
  );
}
