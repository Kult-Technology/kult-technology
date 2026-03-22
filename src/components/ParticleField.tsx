import { motion } from "framer-motion";

interface ParticleFieldProps {
  count?: number;
  color?: string;
  className?: string;
}

/**
 * Renders a set of continuously animated floating dots/particles.
 * Place inside a `relative overflow-hidden` container.
 */
const ParticleField = ({ count = 12, color = "hsl(217, 91%, 60%)", className }: ParticleFieldProps) => {
  const particles = Array.from({ length: count }, (_, i) => {
    const size = 2 + Math.random() * 4;
    const x = Math.random() * 100;
    const y = Math.random() * 100;
    const duration = 8 + Math.random() * 10;
    const delay = Math.random() * 5;

    return (
      <motion.div
        key={i}
        className="absolute rounded-full"
        style={{
          width: size,
          height: size,
          left: `${x}%`,
          top: `${y}%`,
          backgroundColor: color,
        }}
        animate={{
          y: [0, -30 - Math.random() * 40, 10, -20, 0],
          x: [0, 15 + Math.random() * 20, -10, 20, 0],
          opacity: [0.15, 0.4, 0.1, 0.35, 0.15],
          scale: [1, 1.3, 0.8, 1.2, 1],
        }}
        transition={{
          duration,
          repeat: Infinity,
          delay,
          ease: "easeInOut",
        }}
      />
    );
  });

  return <div className={`absolute inset-0 pointer-events-none ${className ?? ""}`}>{particles}</div>;
};

export default ParticleField;
