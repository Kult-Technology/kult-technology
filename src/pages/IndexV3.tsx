import kultLogo from "@/assets/kult-logo.png";
import { Mail } from "lucide-react";

const IndexV3 = () => {
  return (
    <div className="min-h-screen bg-[#0A0A0A] flex flex-col relative overflow-hidden">
      {/* Subtle vignette overlay */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_0%,rgba(0,0,0,0.4)_100%)] pointer-events-none" />
      
      {/* Hero Section */}
      <main className="flex-1 flex flex-col items-center justify-center px-6 py-16 relative z-10">
        {/* Logo with glow effect */}
        <div className="animate-fade-in-up" style={{ animationDelay: "0ms" }}>
          <img
            src={kultLogo}
            alt="Kult Technology"
            className="h-24 md:h-32 lg:h-40 w-auto mb-8 brightness-0 invert animate-glow-pulse"
          />
        </div>

        {/* Tagline */}
        <h1
          className="animate-fade-in-up text-2xl md:text-3xl lg:text-4xl font-light text-white text-center tracking-wide opacity-0"
          style={{ animationDelay: "200ms" }}
        >
          Shaping the future of technology
        </h1>

        {/* Brief Introduction */}
        <p
          className="animate-fade-in-up mt-8 max-w-xl text-center text-[#9A9A9A] text-base md:text-lg leading-relaxed opacity-0"
          style={{ animationDelay: "400ms" }}
        >
          We craft innovative solutions that push the boundaries of what's
          possible, transforming ideas into reality.
        </p>

        {/* Contact Section */}
        <a
          href="mailto:hello@kulttechnology.com"
          className="animate-fade-in-up mt-12 inline-flex items-center gap-2 text-white/80 hover:text-white transition-all duration-300 group opacity-0 hover:drop-shadow-[0_0_12px_rgba(255,255,255,0.4)]"
          style={{ animationDelay: "600ms" }}
        >
          <Mail className="h-5 w-5 transition-transform duration-300 group-hover:scale-110" />
          <span className="relative text-sm md:text-base tracking-wide">
            hello@kulttechnology.com
            <span className="absolute left-0 -bottom-0.5 w-0 h-px bg-white transition-all duration-300 group-hover:w-full" />
          </span>
        </a>
      </main>

      {/* Footer */}
      <footer
        className="animate-fade-in py-8 text-center relative z-10 opacity-0"
        style={{ animationDelay: "800ms" }}
      >
        <p className="text-xs text-[#666666] tracking-wide">
          © {new Date().getFullYear()} Kult Technology. All rights reserved.
        </p>
      </footer>
    </div>
  );
};

export default IndexV3;
