export function Grasshopper({
  className = "h-6 w-6",
  variant = "color",
}: {
  className?: string;
  variant?: "color" | "outline" | "solid";
}) {
  if (variant === "outline") {
    return (
      <svg
        className={className}
        viewBox="0 0 100 80"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.4"
        strokeLinecap="round"
      >
        <ellipse cx="55" cy="45" rx="18" ry="12" />
        <ellipse cx="40" cy="42" rx="10" ry="8" />
        <circle cx="33" cy="37" r="2" fill="currentColor" />
        <path d="M70 35 Q85 15 90 20" />
        <path d="M70 40 Q88 30 92 35" />
        <path d="M42 50 Q30 70 20 72" />
        <path d="M42 50 Q25 65 18 60" />
        <path d="M55 52 Q50 68 55 75" />
        <path d="M60 52 Q65 68 60 74" />
        <path d="M32 38 Q20 28 15 30" />
        <path d="M32 36 Q22 22 18 18" />
      </svg>
    );
  }

  if (variant === "solid") {
    return (
      <svg className={className} viewBox="0 0 100 80" fill="currentColor">
        <ellipse cx="55" cy="45" rx="18" ry="12" />
        <ellipse cx="40" cy="42" rx="10" ry="8" />
        <path
          d="M70 35 Q85 15 90 20 M70 40 Q88 30 92 35 M42 50 Q30 70 20 72 M42 50 Q25 65 18 60 M55 52 Q50 68 55 75 M60 52 Q65 68 60 74 M32 38 Q20 28 15 30 M32 36 Q22 22 18 18"
          stroke="currentColor"
          strokeWidth="2.5"
          fill="none"
          strokeLinecap="round"
        />
      </svg>
    );
  }

  return (
    <svg className={className} viewBox="0 0 100 80" fill="none">
      {/* body */}
      <ellipse cx="55" cy="45" rx="18" ry="12" fill="#1f5c40" />
      <ellipse cx="55" cy="45" rx="18" ry="12" fill="url(#bodyShine)" opacity="0.6" />
      {/* head */}
      <ellipse cx="40" cy="42" rx="10" ry="8" fill="#2d7a55" />
      {/* eye */}
      <circle cx="33" cy="37" r="4" fill="#0a2818" />
      <circle cx="34" cy="36" r="1.5" fill="#b7e4c7" />
      {/* wings */}
      <path
        d="M70 35 Q85 15 90 20"
        stroke="#52b788"
        strokeWidth="2"
        fill="none"
        strokeLinecap="round"
      />
      <path
        d="M70 40 Q88 30 92 35"
        stroke="#52b788"
        strokeWidth="2"
        fill="none"
        strokeLinecap="round"
      />
      {/* back legs (long jumping legs) */}
      <path
        d="M42 50 Q30 70 20 72"
        stroke="#2d7a55"
        strokeWidth="2.8"
        fill="none"
        strokeLinecap="round"
      />
      <path
        d="M42 50 Q25 65 18 60"
        stroke="#2d7a55"
        strokeWidth="2.8"
        fill="none"
        strokeLinecap="round"
      />
      {/* mid legs */}
      <path
        d="M55 52 Q50 68 55 75"
        stroke="#2d7a55"
        strokeWidth="2"
        fill="none"
        strokeLinecap="round"
      />
      <path
        d="M60 52 Q65 68 60 74"
        stroke="#2d7a55"
        strokeWidth="2"
        fill="none"
        strokeLinecap="round"
      />
      {/* antennae */}
      <path
        d="M32 38 Q20 28 15 30"
        stroke="#52b788"
        strokeWidth="1.5"
        fill="none"
        strokeLinecap="round"
      />
      <path
        d="M32 36 Q22 22 18 18"
        stroke="#52b788"
        strokeWidth="1.5"
        fill="none"
        strokeLinecap="round"
      />
      <defs>
        <linearGradient id="bodyShine" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#74c69d" />
          <stop offset="100%" stopColor="#1f5c40" stopOpacity="0" />
        </linearGradient>
      </defs>
    </svg>
  );
}
