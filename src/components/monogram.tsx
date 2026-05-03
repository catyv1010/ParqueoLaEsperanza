export function Monogram({ className = "h-6 w-6" }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 40 40"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden
    >
      <circle
        cx="20"
        cy="20"
        r="18.5"
        stroke="currentColor"
        strokeWidth="1"
        opacity="0.35"
      />
      <text
        x="20"
        y="27"
        textAnchor="middle"
        fontFamily="var(--font-fraunces), Georgia, serif"
        fontStyle="italic"
        fontWeight="400"
        fontSize="22"
        fill="currentColor"
      >
        Le
      </text>
    </svg>
  );
}
