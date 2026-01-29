import { cn } from "@/lib/utils";

type Version = "A" | "B" | "C";

interface VersionToggleProps {
  version: Version;
  onToggle: (version: Version) => void;
}

const VersionToggle = ({ version, onToggle }: VersionToggleProps) => {
  const versions: Version[] = ["A", "B", "C"];
  
  return (
    <div className={cn(
      "fixed top-6 right-6 z-50 flex items-center gap-1 backdrop-blur-sm border rounded-full p-1 shadow-sm",
      version === "C" 
        ? "bg-white/10 border-white/20" 
        : "bg-background/80 border-border"
    )}>
      {versions.map((v) => (
        <button
          key={v}
          onClick={() => onToggle(v)}
          className={cn(
            "px-4 py-2 text-xs font-medium rounded-full transition-all duration-200",
            version === v
              ? version === "C"
                ? "bg-white text-black"
                : "bg-foreground text-background"
              : version === "C"
                ? "text-white/60 hover:text-white"
                : "text-muted-foreground hover:text-foreground"
          )}
        >
          Version {v}
        </button>
      ))}
    </div>
  );
};

export default VersionToggle;
