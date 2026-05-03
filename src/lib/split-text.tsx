import { type ReactNode } from "react";

export function SplitWords({
  text,
  className = "",
  wordClass = "",
  charClass = "",
}: {
  text: string;
  className?: string;
  wordClass?: string;
  charClass?: string;
}): ReactNode {
  const words = text.split(" ");
  return (
    <span className={className}>
      {words.map((word, wi) => (
        <span
          key={`${word}-${wi}`}
          className={`char-mask ${wordClass}`}
          style={{ marginRight: "0.18em" }}
        >
          {word.split("").map((c, ci) => (
            <span key={ci} className={`char ${charClass}`}>
              {c}
            </span>
          ))}
        </span>
      ))}
    </span>
  );
}
