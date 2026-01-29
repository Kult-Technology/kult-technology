import { cn } from "@/lib/utils";

interface VersionToggleProps {
  version: "A" | "B";
  onToggle: (version: "A" | "B") => void;
}

const VersionToggle = ({ version, onToggle }: VersionToggleProps) => {
  return (
    <div className="fixed top-6 right-6 z-50 flex items-center gap-1 bg-background/80 backdrop-blur-sm border border-border rounded-full p-1 shadow-sm">
      <button
        onClick={() => onToggle("A")}
        className={cn(
          "px-4 py-2 text-xs font-medium rounded-full transition-all duration-200",
          version === "A"
            ? "bg-foreground text-background"
            : "text-muted-foreground hover:text-foreground"
        )}
      >
        Version A
      </button>
      <button
        onClick={() => onToggle("B")}
        className={cn(
          "px-4 py-2 text-xs font-medium rounded-full transition-all duration-200",
          version === "B"
            ? "bg-foreground text-background"
            : "text-muted-foreground hover:text-foreground"
        )}
      >
        Version B
      </button>
    </div>
  );
};

export default VersionToggle;
