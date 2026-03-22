import kultLogo from "@/assets/kult-logo.png";
import { Mail, Package, Building2, ArrowDown, Cpu, Cloud, Sparkles, Brain, Shield, Zap, ChevronRight } from "lucide-react";
import { Skeleton } from "@/components/ui/skeleton";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.15, duration: 0.7, ease: [0.25, 0.4, 0.25, 1] },
  }),
};

const scaleIn = {
  hidden: { opacity: 0, scale: 0.8 },
  visible: (i: number) => ({
    opacity: 1,
    scale: 1,
    transition: { delay: i * 0.1, duration: 0.5, ease: [0.25, 0.4, 0.25, 1] },
  }),
};

const FloatingOrb = ({ className, delay = 0 }: { className?: string; delay?: number }) => (
  <motion.div
    className={`absolute rounded-full blur-3xl opacity-20 ${className}`}
    animate={{
      y: [0, -30, 0],
      x: [0, 15, 0],
      scale: [1, 1.1, 1],
    }}
    transition={{
      duration: 8,
      repeat: Infinity,
      delay,
      ease: "easeInOut",
    }}
  />
);

const techStack = [
  { icon: Brain, label: "AI / ML", color: "from-purple-500 to-violet-600" },
  { icon: Cloud, label: "Cloud", color: "from-sky-400 to-blue-500" },
  { icon: Cpu, label: "IoT", color: "from-emerald-400 to-teal-500" },
  { icon: Shield, label: "Security", color: "from-amber-400 to-orange-500" },
  { icon: Zap, label: "Performance", color: "from-rose-400 to-pink-500" },
  { icon: Sparkles, label: "Innovation", color: "from-indigo-400 to-blue-600" },
];

const apps = [
  {
    name: "DropFlow",
    description: "Platforma e-commerce do automatyzacji dropshippingu. Zarządzaj produktami, zamówieniami i dostawcami w jednym miejscu.",
    icon: Package,
    gradient: "from-[#055ed1] to-[#3b8bff]",
    shadowColor: "shadow-[#055ed1]/20",
    features: ["Automatyzacja zamówień", "Integracja z dostawcami", "Analityka sprzedaży"],
  },
  {
    name: "Estats",
    description: "Inteligentna platforma do zarządzania nieruchomościami. Śledź portfolio, analizuj rynek i zarządzaj klientami.",
    icon: Building2,
    gradient: "from-[#4ad7c7] to-[#2fb8a7]",
    shadowColor: "shadow-[#4ad7c7]/20",
    features: ["Zarządzanie portfolio", "Analiza rynku", "CRM klientów"],
  },
];

const Index = () => {
  const heroRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll();
  const heroOpacity = useTransform(scrollYProgress, [0, 0.15], [1, 0]);
  const heroScale = useTransform(scrollYProgress, [0, 0.15], [1, 0.95]);

  return (
    <div className="bg-background overflow-x-hidden">
      {/* ========== HERO SECTION — Light ========== */}
      <motion.section
        ref={heroRef}
        style={{ opacity: heroOpacity, scale: heroScale }}
        className="relative min-h-screen flex flex-col items-center justify-center px-6 overflow-hidden"
      >
        {/* Decorative orbs */}
        <FloatingOrb className="w-72 h-72 bg-[#055ed1] -top-20 -left-20" delay={0} />
        <FloatingOrb className="w-96 h-96 bg-[#4ad7c7] -bottom-32 -right-20" delay={2} />
        <FloatingOrb className="w-48 h-48 bg-purple-400 top-1/3 right-1/4" delay={4} />

        <motion.div
          initial={{ opacity: 0, scale: 0.8, filter: "blur(10px)" }}
          animate={{ opacity: 1, scale: 1, filter: "blur(0px)" }}
          transition={{ duration: 1, ease: [0.25, 0.4, 0.25, 1] }}
        >
          <img src={kultLogo} alt="Kult Technology" className="h-28 md:h-36 lg:h-44 w-auto mb-8" />
        </motion.div>

        <motion.h1
          className="text-3xl md:text-5xl lg:text-6xl font-extralight text-foreground text-center tracking-tight max-w-3xl leading-tight"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.8 }}
        >
          Kształtujemy{" "}
          <span className="gradient-text font-normal">przyszłość</span>{" "}
          technologii
        </motion.h1>

        <motion.p
          className="mt-6 max-w-lg text-center text-muted-foreground text-base md:text-lg leading-relaxed"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.8 }}
        >
          Tworzymy innowacyjne rozwiązania, które przesuwają granice możliwości,
          przekształcając pomysły w rzeczywistość.
        </motion.p>

        {/* Scroll indicator */}
        <motion.div
          className="absolute bottom-10 flex flex-col items-center gap-2 text-muted-foreground"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2 }}
        >
          <span className="text-xs tracking-widest uppercase">Odkryj więcej</span>
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 1.5, repeat: Infinity }}
          >
            <ArrowDown className="h-4 w-4" />
          </motion.div>
        </motion.div>
      </motion.section>

      {/* ========== ABOUT / MISSION — Dark ========== */}
      <section className="relative py-32 px-6 bg-[hsl(var(--dark-bg))] grid-pattern overflow-hidden">
        <FloatingOrb className="w-64 h-64 bg-[#055ed1] top-20 -right-20" delay={1} />
        <FloatingOrb className="w-48 h-48 bg-[#4ad7c7] bottom-20 -left-10" delay={3} />

        <div className="max-w-5xl mx-auto relative z-10">
          <motion.div
            className="text-center mb-16"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
          >
            <motion.span
              variants={fadeUp}
              custom={0}
              className="text-xs tracking-[0.3em] uppercase text-[hsl(var(--dark-muted))]"
            >
              O nas
            </motion.span>
            <motion.h2
              variants={fadeUp}
              custom={1}
              className="mt-4 text-3xl md:text-5xl font-light text-[hsl(var(--dark-fg))] leading-tight"
            >
              Budujemy technologię,{" "}
              <span className="gradient-text font-normal">która zmienia zasady gry</span>
            </motion.h2>
            <motion.p
              variants={fadeUp}
              custom={2}
              className="mt-6 max-w-2xl mx-auto text-[hsl(var(--dark-muted))] text-base md:text-lg leading-relaxed"
            >
              Kult Technology to zespół pasjonatów technologii, którzy wierzą, że najlepsze
              rozwiązania rodzą się na styku innowacji i użyteczności. Łączymy nowoczesne
              technologie z głębokim zrozumieniem potrzeb użytkowników.
            </motion.p>
          </motion.div>

          {/* Stats */}
          <motion.div
            className="grid grid-cols-2 md:grid-cols-4 gap-6"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
          >
            {[
              { value: "2+", label: "Produkty" },
              { value: "2025", label: "Rok założenia" },
              { value: "∞", label: "Ambicje" },
              { value: "24/7", label: "Zaangażowanie" },
            ].map((stat, i) => (
              <motion.div
                key={stat.label}
                variants={scaleIn}
                custom={i}
                className="glass rounded-2xl p-6 text-center"
              >
                <div className="text-3xl md:text-4xl font-bold gradient-text">{stat.value}</div>
                <div className="mt-2 text-sm text-[hsl(var(--dark-muted))]">{stat.label}</div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ========== APPS SECTION — Light ========== */}
      <section className="relative py-32 px-6 bg-background overflow-hidden">
        <FloatingOrb className="w-80 h-80 bg-[#055ed1] -top-40 left-1/4" delay={0} />
        <FloatingOrb className="w-64 h-64 bg-[#4ad7c7] bottom-0 right-1/4" delay={2.5} />

        <div className="max-w-5xl mx-auto relative z-10">
          <motion.div
            className="text-center mb-16"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
          >
            <motion.span
              variants={fadeUp}
              custom={0}
              className="text-xs tracking-[0.3em] uppercase text-muted-foreground"
            >
              Nasze produkty
            </motion.span>
            <motion.h2
              variants={fadeUp}
              custom={1}
              className="mt-4 text-3xl md:text-5xl font-light text-foreground"
            >
              Aplikacje, które{" "}
              <span className="gradient-text font-normal">działają</span>
            </motion.h2>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8">
            {apps.map((app, i) => (
              <motion.div
                key={app.name}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-50px" }}
                variants={fadeUp}
                custom={i}
                whileHover={{ y: -8, transition: { duration: 0.3 } }}
                className={`glass-light rounded-3xl p-8 cursor-pointer group transition-shadow duration-300 hover:shadow-2xl hover:${app.shadowColor}`}
              >
                <div className="flex items-center gap-4 mb-6">
                  <div className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${app.gradient} flex items-center justify-center shadow-lg transition-transform duration-300 group-hover:scale-110`}>
                    <app.icon className="w-7 h-7 text-white" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-foreground">{app.name}</h3>
                  </div>
                </div>
                <p className="text-muted-foreground leading-relaxed mb-6">{app.description}</p>
                <ul className="space-y-2">
                  {app.features.map((feature) => (
                    <li key={feature} className="flex items-center gap-2 text-sm text-muted-foreground">
                      <ChevronRight className="h-3 w-3 text-[hsl(var(--dark-accent-blue))]" />
                      {feature}
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}

            {/* Loading App */}
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-50px" }}
              variants={fadeUp}
              custom={2}
              className="glass-light rounded-3xl p-8 flex flex-col items-center justify-center md:col-span-2 max-w-sm mx-auto w-full"
            >
              <Skeleton className="w-14 h-14 rounded-2xl mb-4" />
              <Skeleton className="w-24 h-5 rounded mb-2" />
              <Skeleton className="w-40 h-4 rounded" />
              <p className="mt-4 text-xs text-muted-foreground tracking-wide">Wkrótce...</p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ========== TECH STACK — Dark ========== */}
      <section className="relative py-32 px-6 bg-[hsl(var(--dark-bg))] grid-pattern overflow-hidden">
        <FloatingOrb className="w-72 h-72 bg-purple-500 top-10 left-10" delay={1.5} />
        <FloatingOrb className="w-56 h-56 bg-[#055ed1] bottom-20 right-10" delay={3.5} />

        <div className="max-w-5xl mx-auto relative z-10">
          <motion.div
            className="text-center mb-16"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
          >
            <motion.span
              variants={fadeUp}
              custom={0}
              className="text-xs tracking-[0.3em] uppercase text-[hsl(var(--dark-muted))]"
            >
              Technologie
            </motion.span>
            <motion.h2
              variants={fadeUp}
              custom={1}
              className="mt-4 text-3xl md:text-5xl font-light text-[hsl(var(--dark-fg))]"
            >
              Napędzane przez{" "}
              <span className="gradient-text font-normal">najlepsze</span>{" "}
              technologie
            </motion.h2>
          </motion.div>

          <motion.div
            className="grid grid-cols-2 md:grid-cols-3 gap-6"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
          >
            {techStack.map((tech, i) => (
              <motion.div
                key={tech.label}
                variants={scaleIn}
                custom={i}
                whileHover={{ scale: 1.05, transition: { duration: 0.2 } }}
                className="glass rounded-2xl p-6 flex flex-col items-center gap-4 cursor-pointer group"
              >
                <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${tech.color} flex items-center justify-center transition-transform duration-300 group-hover:scale-110 shadow-lg`}>
                  <tech.icon className="w-6 h-6 text-white" />
                </div>
                <span className="text-sm font-medium text-[hsl(var(--dark-fg))]">{tech.label}</span>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ========== CONTACT & FOOTER — Light ========== */}
      <section className="relative py-32 px-6 bg-background overflow-hidden">
        <FloatingOrb className="w-64 h-64 bg-[#4ad7c7] -top-20 right-1/3" delay={0.5} />

        <motion.div
          className="max-w-2xl mx-auto text-center relative z-10"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
        >
          <motion.span
            variants={fadeUp}
            custom={0}
            className="text-xs tracking-[0.3em] uppercase text-muted-foreground"
          >
            Kontakt
          </motion.span>
          <motion.h2
            variants={fadeUp}
            custom={1}
            className="mt-4 text-3xl md:text-5xl font-light text-foreground"
          >
            Porozmawiajmy o{" "}
            <span className="gradient-text font-normal">przyszłości</span>
          </motion.h2>
          <motion.p
            variants={fadeUp}
            custom={2}
            className="mt-6 text-muted-foreground text-base md:text-lg"
          >
            Masz pomysł, który chcesz zrealizować? Napisz do nas.
          </motion.p>

          <motion.a
            variants={fadeUp}
            custom={3}
            href="mailto:hello@kulttechnology.com"
            className="mt-10 inline-flex items-center gap-3 px-8 py-4 rounded-full glass-light text-foreground hover:shadow-xl transition-all duration-300 group"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.98 }}
          >
            <Mail className="h-5 w-5 transition-transform duration-300 group-hover:scale-110" />
            <span className="text-sm md:text-base tracking-wide font-medium">
              hello@kulttechnology.com
            </span>
          </motion.a>
        </motion.div>
      </section>

      {/* Footer */}
      <footer className="py-8 text-center bg-[hsl(var(--dark-bg))] border-t border-[hsl(var(--dark-card-border))]">
        <p className="text-xs text-[hsl(var(--dark-muted))] tracking-wide">
          © {new Date().getFullYear()} Kult Technology. Wszelkie prawa zastrzeżone.
        </p>
      </footer>
    </div>
  );
};

export default Index;
