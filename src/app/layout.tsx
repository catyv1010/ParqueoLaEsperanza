import type { Metadata } from "next";
import { Fraunces, Space_Grotesk } from "next/font/google";
import { SmoothScroll } from "@/components/smooth-scroll";
import { Cursor } from "@/components/cursor";
import "./globals.css";

const fraunces = Fraunces({
  subsets: ["latin"],
  variable: "--font-fraunces",
  weight: ["300", "400", "500", "600", "700"],
  style: ["normal", "italic"],
  display: "swap",
});

const grotesk = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-grotesk",
  weight: ["300", "400", "500", "600", "700"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Parqueo y Lavacar La Esperanza — Tu vehículo, en buenas manos",
  description:
    "Parqueo vigilado 24/7 y lavacar profesional en Costa Rica. Tarifa: ₡1,000/hora. Servicio nocturno, mensualidad y lavado premium con protección cerámica.",
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="es" className={`${fraunces.variable} ${grotesk.variable}`}>
      <body className="grain bg-midnight text-bone">
        <SmoothScroll />
        <Cursor />
        {children}
      </body>
    </html>
  );
}
