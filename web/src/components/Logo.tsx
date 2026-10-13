type LogoProps = {
  /** emblem-only mark size in px */
  size?: number;
  variant?: "dark" | "light";
};

/**
 * Gold tooth emblem recreated as clean SVG, based on the circular
 * gold-tooth mark on the Smileworx signboard.
 */
export function ToothMark({ size = 44, variant = "dark" }: LogoProps) {
  const ring = variant === "dark" ? "#B39A45" : "#E9D69A";
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 64 64"
      role="img"
      aria-label="Smileworx gold tooth emblem"
      focusable="false"
    >
      <circle
        cx="32"
        cy="32"
        r="30"
        fill="none"
        stroke={variant === "dark" ? "#512044" : "#D8BD63"}
        strokeWidth="1.4"
      />
      <circle cx="32" cy="32" r="25.5" fill="none" stroke={ring} strokeWidth="1.1" />
      <path
        d="M32 15.5c-7 0-11.8 4.6-11.8 11.2 0 5.4 2 9 3.5 13.5 1 3 1.5 7.1 3.6 7.1 2.4 0 1.7-6 4.7-6s2.3 6 4.7 6c2.1 0 2.6-4.1 3.6-7.1 1.5-4.5 3.5-8.1 3.5-13.5 0-6.6-4.8-11.2-11.8-11.2z"
        fill="#D8BD63"
      />
      <path
        d="M32 15.5c-7 0-11.8 4.6-11.8 11.2 0 5.4 2 9 3.5 13.5 1 3 1.5 7.1 3.6 7.1 2.4 0 1.7-6 4.7-6s2.3 6 4.7 6c2.1 0 2.6-4.1 3.6-7.1 1.5-4.5 3.5-8.1 3.5-13.5 0-6.6-4.8-11.2-11.8-11.2z"
        fill="none"
        stroke="#B39A45"
        strokeWidth="0.8"
      />
      <path
        d="M26.5 21.5c1.6-1.1 3.5-1.6 5.5-1.6s3.9.5 5.5 1.6"
        fill="none"
        stroke="#FAF7F0"
        strokeWidth="1.3"
        strokeLinecap="round"
        opacity="0.55"
      />
    </svg>
  );
}

export default function Logo({ variant = "dark" }: LogoProps) {
  const wordColor = variant === "dark" ? "var(--plum)" : "var(--cream)";
  const accentColor = variant === "dark" ? "var(--gold-dark)" : "var(--gold)";
  const subColor = variant === "dark" ? "var(--ink-soft)" : "var(--gold-light)";
  return (
    <span className="logo-wordmark" aria-hidden="true">
      <span className="word" style={{ color: wordColor }}>
        Smile<em style={{ color: accentColor }}>worx</em>
      </span>
      <span className="sub" style={{ color: subColor }}>
        Dental&nbsp;Care
      </span>
    </span>
  );
}
