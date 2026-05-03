import type { Metadata } from "next";
import { Fraunces, Space_Grotesk } from "next/font/google";
import { SmoothScroll } from "@/components/smooth-scroll";
import { Cursor } from "@/components/cursor";
import { ScrollProgress } from "@/components/scroll-progress";
import { SpotlightTracker } from "@/components/spotlight-tracker";
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
  title: "Parqueo y Lavacar La Esperanza — Cartago, Costa Rica",
  description:
    "Parqueo vigilado 24/7 y lavacar profesional en Cartago. ₡1,000/hora. Tu vehículo en buenas manos — hecho con cariño tico.",
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="es" className={`${fraunces.variable} ${grotesk.variable}`}>
      <body className="grain bg-night text-bone">
        <SmoothScroll />
        <Cursor />
        <ScrollProgress />
        <SpotlightTracker />
        {children}
      </body>
    </html>
  );
}
