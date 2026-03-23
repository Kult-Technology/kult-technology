import { useIsMobile } from "@/hooks/use-mobile";

interface ParticleFieldProps {
  count?: number;
  color?: string;
  className?: string;
}

/**
 * CSS-only animated particles for better mobile performance.
 */
const ParticleField = ({ count = 12, color = "hsl(217, 91%, 60%)", className }: ParticleFieldProps) => {
  const isMobile = useIsMobile();
  const actualCount = isMobile ? Math.min(count, 5) : count;

  const particles = Array.from({ length: actualCount }, (_, i) => {
    const size = 2 + Math.random() * 3;
    const x = Math.random() * 100;
    const y = Math.random() * 100;
    const duration = 10 + Math.random() * 8;
    const delay = Math.random() * 5;

    return (
      <div
        key={i}
        className="absolute rounded-full particle-drift-1"
        style={{
          width: size,
          height: size,
          left: `${x}%`,
          top: `${y}%`,
          backgroundColor: color,
          opacity: 0.15,
          animationDuration: `${duration}s`,
          animationDelay: `${delay}s`,
          willChange: 'transform, opacity',
        }}
      />
    );
  });

  return <div className={`absolute inset-0 pointer-events-none ${className ?? ""}`}>{particles}</div>;
};

export default ParticleField;
