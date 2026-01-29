import kultLogo from "@/assets/kult-logo.png";
import { Mail } from "lucide-react";

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
