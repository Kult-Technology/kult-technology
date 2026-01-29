import kultLogo from "@/assets/kult-logo.png";
import { Mail, ArrowRight } from "lucide-react";

const IndexV2 = () => {
  return (
    <div className="min-h-screen bg-[#F8F8F6] flex flex-col">
      {/* Main Content */}
      <main className="flex-1 flex flex-col lg:flex-row items-start lg:items-center px-8 md:px-16 lg:px-24 py-16 lg:py-0">
        {/* Left Side - Logo */}
        <div className="lg:w-1/2 flex items-center justify-start lg:justify-center mb-12 lg:mb-0">
          <div
            className="animate-slide-in-left opacity-0"
            style={{ animationDelay: "100ms" }}
          >
            <img
              src={kultLogo}
              alt="Kult Technology"
              className="h-32 md:h-40 lg:h-56 xl:h-64 w-auto"
            />
          </div>
        </div>

        {/* Right Side - Content */}
        <div className="lg:w-1/2 lg:pl-12 xl:pl-24">
          {/* Horizontal Divider */}
          <div
            className="animate-blur-in w-16 h-px bg-foreground/30 mb-8 opacity-0"
            style={{ animationDelay: "200ms" }}
          />

          {/* Tagline */}
          <h1
            className="animate-slide-in-right text-3xl md:text-4xl lg:text-5xl font-semibold text-[#2A2A2A] tracking-tight leading-tight mb-6 opacity-0"
            style={{ animationDelay: "300ms" }}
          >
            Shaping the future
            <br />
            <span className="font-light">of technology</span>
          </h1>

          {/* Brief Introduction */}
          <p
            className="animate-slide-in-right max-w-md text-[#5A5A5A] text-base md:text-lg leading-relaxed mb-10 opacity-0"
            style={{ animationDelay: "450ms" }}
          >
            We craft innovative solutions that push the boundaries of what's
            possible, transforming ideas into reality.
          </p>

          {/* Contact Button */}
          <a
            href="mailto:hello@kulttechnology.com"
            className="animate-slide-in-right inline-flex items-center gap-3 px-6 py-3 border border-[#2A2A2A] text-[#2A2A2A] hover:bg-[#2A2A2A] hover:text-white transition-all duration-300 group opacity-0"
            style={{ animationDelay: "600ms" }}
          >
            <Mail className="h-4 w-4" />
            <span className="text-sm tracking-wide">Get in touch</span>
            <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
          </a>

          {/* Footer integrated with content */}
          <p
            className="animate-fade-in mt-16 lg:mt-24 text-xs text-[#8A8A8A] tracking-wide opacity-0"
            style={{ animationDelay: "800ms" }}
          >
            © {new Date().getFullYear()} Kult Technology. All rights reserved.
          </p>
        </div>
      </main>
    </div>
  );
};

export default IndexV2;
