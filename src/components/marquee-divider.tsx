"use client";

type Theme = "night" | "cream";

export function MarqueeDivider({
  text = "La Esperanza",
  theme = "night",
  reverse = false,
}: {
  text?: string;
  theme?: Theme;
  reverse?: boolean;
}) {
  const bg = theme === "night" ? "bg-night" : "bg-cream";
  const textColor = theme === "night" ? "text-mint" : "text-emerald";
  const borderColor = theme === "night" ? "border-mint/15" : "border-emerald/15";
  const dotColor = theme === "night" ? "text-mint/60" : "text-emerald/60";

  const content = (
    <>
      <span className="font-display italic">{text}</span>
      <span className={dotColor}>★</span>
      <span className="font-display italic">Cartago, Costa Rica</span>
      <span className={dotColor}>★</span>
      <span className="font-display italic">Parqueo · Lavacar</span>
      <span className={dotColor}>★</span>
      <span className="font-display italic">{text}</span>
      <span className={dotColor}>★</span>
      <span className="font-display italic">24/7</span>
      <span className={dotColor}>★</span>
      <span className="font-display italic">Pura vida</span>
      <span className={dotColor}>★</span>
    </>
  );

  return (
    <div
      className={`relative ${bg} overflow-hidden border-y ${borderColor} py-4 lg:py-8`}
    >
      <div
        className={`flex shrink-0 items-center gap-6 whitespace-nowrap text-2xl ${textColor} sm:gap-8 sm:text-3xl lg:gap-12 lg:text-6xl ${
          reverse ? "animate-marquee-reverse" : "animate-marquee"
        }`}
      >
        {Array.from({ length: 4 }).map((_, i) => (
          <div key={i} className="flex shrink-0 items-center gap-6 sm:gap-8 lg:gap-12">
            {content}
          </div>
        ))}
      </div>
    </div>
  );
}
