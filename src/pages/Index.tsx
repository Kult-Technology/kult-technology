import kultLogo from "@/assets/kult-logo.png";
import { Mail, Package, Building2 } from "lucide-react";
import { Skeleton } from "@/components/ui/skeleton";

const Index = () => {
  return (
    <div className="min-h-screen bg-background flex flex-col">
      {/* Hero Section */}
      <main className="flex-1 flex flex-col items-center justify-center px-6 py-16">
        {/* Logo */}
        <div className="animate-fade-in-up" style={{ animationDelay: "0ms" }}>
          <img
            src={kultLogo}
            alt="Kult Technology"
            className="h-24 md:h-32 lg:h-40 w-auto mb-8"
          />
        </div>

        {/* Tagline */}
        <h1
          className="animate-fade-in-up text-2xl md:text-3xl lg:text-4xl font-light text-foreground text-center tracking-wide opacity-0"
          style={{ animationDelay: "200ms" }}
        >
          Kształtujemy przyszłość technologii
        </h1>

        {/* Brief Introduction */}
        <p
          className="animate-fade-in-up mt-8 max-w-xl text-center text-muted-foreground text-base md:text-lg leading-relaxed opacity-0"
          style={{ animationDelay: "400ms" }}
        >
          Tworzymy innowacyjne rozwiązania, które przesuwają granice możliwości,
          przekształcając pomysły w rzeczywistość.
        </p>

        {/* Apps Section */}
        <div
          className="animate-fade-in-up mt-16 flex items-center gap-8 md:gap-12 opacity-0"
          style={{ animationDelay: "500ms" }}
        >
          {/* DropFlow App */}
          <div className="flex flex-col items-center gap-2">
            <div className="w-16 h-16 md:w-20 md:h-20 rounded-2xl bg-gradient-to-br from-orange-500 to-amber-400 flex items-center justify-center shadow-lg">
              <Package className="w-8 h-8 md:w-10 md:h-10 text-white" />
            </div>
            <span className="text-sm text-foreground font-medium">DropFlow</span>
          </div>

          {/* Estats App */}
          <div className="flex flex-col items-center gap-2">
            <div className="w-16 h-16 md:w-20 md:h-20 rounded-2xl bg-gradient-to-br from-violet-500 to-purple-400 flex items-center justify-center shadow-lg">
              <Building2 className="w-8 h-8 md:w-10 md:h-10 text-white" />
            </div>
            <span className="text-sm text-foreground font-medium">Estats</span>
          </div>

          {/* Loading App */}
          <div className="flex flex-col items-center gap-2">
            <Skeleton className="w-16 h-16 md:w-20 md:h-20 rounded-2xl" />
            <Skeleton className="w-12 h-4 rounded" />
          </div>
        </div>

        {/* Contact Section */}
        <a
          href="mailto:hello@kulttechnology.com"
          className="animate-fade-in-up mt-12 inline-flex items-center gap-2 text-foreground hover:text-primary transition-all duration-300 group opacity-0"
          style={{ animationDelay: "600ms" }}
        >
          <Mail className="h-5 w-5 transition-transform duration-300 group-hover:scale-110" />
          <span className="relative text-sm md:text-base tracking-wide">
            hello@kulttechnology.com
            <span className="absolute left-0 -bottom-0.5 w-0 h-px bg-foreground transition-all duration-300 group-hover:w-full" />
          </span>
        </a>
      </main>

      {/* Footer */}
      <footer
        className="animate-fade-in py-8 text-center opacity-0"
        style={{ animationDelay: "800ms" }}
      >
        <p className="text-xs text-muted-foreground tracking-wide">
          © {new Date().getFullYear()} Kult Technology. Wszelkie prawa zastrzeżone.
        </p>
      </footer>
    </div>
  );
};

export default Index;
