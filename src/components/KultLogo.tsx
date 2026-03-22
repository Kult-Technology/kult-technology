import { CSSProperties } from "react";

const KultLogo = ({ className, style }: { className?: string; style?: CSSProperties }) => (
  <svg
    viewBox="0 0 520 60"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={className}
    style={style}
    aria-label="Kult Technology"
  >
    {/* "kult" — bold weight */}
    <text
      x="0"
      y="46"
      fontFamily="system-ui, -apple-system, 'Segoe UI', sans-serif"
      fontSize="52"
      fontWeight="800"
      letterSpacing="-1"
      fill="currentColor"
    >
      kult
    </text>

    {/* "technology" — light weight */}
    <text
      x="156"
      y="46"
      fontFamily="system-ui, -apple-system, 'Segoe UI', sans-serif"
      fontSize="52"
      fontWeight="300"
      letterSpacing="-1"
      fill="currentColor"
    >
      technology
    </text>
  </svg>
);

export default KultLogo;
