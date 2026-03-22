/**
 * Blur gradient transition between light ↔ dark sections.
 * `direction`: "to-dark" puts dark at bottom; "to-light" puts light at bottom.
 */
const SectionDivider = ({ direction }: { direction: "to-dark" | "to-light" }) => {
  const from =
    direction === "to-dark"
      ? "from-background to-[hsl(var(--dark-bg))]"
      : "from-[hsl(var(--dark-bg))] to-background";

  return (
    <div
      className={`h-24 md:h-32 w-full bg-gradient-to-b ${from} pointer-events-none`}
      aria-hidden="true"
    />
  );
};

export default SectionDivider;
