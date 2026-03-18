import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Parqueo y Lavacar La Esperanza",
  description:
    "Estacionamiento seguro y servicio profesional de lavado de autos. Vigilancia 24/7 y lavado premium.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <head>
        <link
          href="https://fonts.googleapis.com/css2?family=Lexend:wght@300;400;500;600;700&family=Source+Sans+3:wght@300;400;500;600;700&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="antialiased">{children}</body>
    </html>
  );
}
