import { CSSProperties } from "react";

const KultLogo = ({ className, style }: { className?: string; style?: CSSProperties }) => (
  <svg
    viewBox="0 0 480 120"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={className}
    aria-label="Kult Technology"
  >
    <defs>
      <linearGradient id="kult-gradient" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="hsl(217, 91%, 60%)" />
        <stop offset="100%" stopColor="hsl(174, 60%, 56%)" />
      </linearGradient>
      <linearGradient id="kult-accent" x1="0%" y1="0%" x2="100%" y2="0%">
        <stop offset="0%" stopColor="hsl(217, 91%, 60%)" stopOpacity="0.6" />
        <stop offset="100%" stopColor="hsl(174, 60%, 56%)" stopOpacity="0.6" />
      </linearGradient>
    </defs>

    {/* Decorative element — abstract circuit/tech mark */}
    <g transform="translate(0, 10)">
      {/* Hexagonal tech mark */}
      <polygon
        points="50,5 85,22.5 85,57.5 50,75 15,57.5 15,22.5"
        fill="none"
        stroke="url(#kult-gradient)"
        strokeWidth="2.5"
      />
      <polygon
        points="50,18 72,29 72,51 50,62 28,51 28,29"
        fill="url(#kult-gradient)"
        opacity="0.15"
      />
      {/* Inner connection lines */}
      <line x1="50" y1="18" x2="50" y2="62" stroke="url(#kult-gradient)" strokeWidth="1.2" opacity="0.5" />
      <line x1="28" y1="29" x2="72" y2="51" stroke="url(#kult-gradient)" strokeWidth="1.2" opacity="0.5" />
      <line x1="72" y1="29" x2="28" y2="51" stroke="url(#kult-gradient)" strokeWidth="1.2" opacity="0.5" />
      {/* Center dot */}
      <circle cx="50" cy="40" r="4" fill="url(#kult-gradient)" />
      {/* Corner nodes */}
      <circle cx="50" cy="5" r="2.5" fill="url(#kult-gradient)" opacity="0.7" />
      <circle cx="85" cy="22.5" r="2.5" fill="url(#kult-gradient)" opacity="0.7" />
      <circle cx="85" cy="57.5" r="2.5" fill="url(#kult-gradient)" opacity="0.7" />
      <circle cx="50" cy="75" r="2.5" fill="url(#kult-gradient)" opacity="0.7" />
      <circle cx="15" cy="57.5" r="2.5" fill="url(#kult-gradient)" opacity="0.7" />
      <circle cx="15" cy="22.5" r="2.5" fill="url(#kult-gradient)" opacity="0.7" />
    </g>

    {/* KULT text */}
    <text
      x="110"
      y="62"
      fontFamily="system-ui, -apple-system, sans-serif"
      fontSize="56"
      fontWeight="700"
      letterSpacing="8"
      fill="currentColor"
    >
      KULT
    </text>

    {/* TECHNOLOGY text */}
    <text
      x="112"
      y="90"
      fontFamily="system-ui, -apple-system, sans-serif"
      fontSize="16"
      fontWeight="300"
      letterSpacing="12"
      fill="url(#kult-accent)"
    >
      TECHNOLOGY
    </text>

    {/* Accent line */}
    <rect x="110" y="68" width="160" height="1.5" rx="0.75" fill="url(#kult-gradient)" opacity="0.4" />
  </svg>
);

export default KultLogo;
