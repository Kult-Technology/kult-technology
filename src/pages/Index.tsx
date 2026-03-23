import kultLogo from "@/assets/kult-logo.svg";
import ParticleField from "@/components/ParticleField";
import { Mail, Package, Building2, ArrowDown, Cpu, Cloud, Sparkles, Brain, Smartphone, Globe, ChevronRight, Rocket, Users, Code2, Target } from "lucide-react";
import { Skeleton } from "@/components/ui/skeleton";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.15, duration: 0.7, ease: [0.25, 0.4, 0.25, 1] as const },
  }),
};

const scaleIn = {
  hidden: { opacity: 0, scale: 0.8 },
  visible: (i: number) => ({
    opacity: 1,
    scale: 1,
    transition: { delay: i * 0.1, duration: 0.5, ease: [0.25, 0.4, 0.25, 1] as const },
  }),
};

const slideInLeft = {
  hidden: { opacity: 0, x: -60 },
  visible: (i: number) => ({
    opacity: 1,
    x: 0,
    transition: { delay: i * 0.15, duration: 0.7, ease: [0.25, 0.4, 0.25, 1] as const },
  }),
};

const slideInRight = {
  hidden: { opacity: 0, x: 60 },
  visible: (i: number) => ({
    opacity: 1,
    x: 0,
    transition: { delay: i * 0.15, duration: 0.7, ease: [0.25, 0.4, 0.25, 1] as const },
  }),
};

const FloatingOrb = ({ className }: { className?: string }) => (
  <div
    className={`absolute rounded-full blur-3xl pulse-glow ${className}`}
  />
);


const techStack = [
  { icon: Brain, label: "AI / ML", color: "from-purple-500 to-violet-600", desc: "Sztuczna inteligencja i uczenie maszynowe" },
  { icon: Cloud, label: "Cloud", color: "from-sky-400 to-blue-500", desc: "Infrastruktura chmurowa i DevOps" },
  { icon: Smartphone, label: "Aplikacje mobilne", color: "from-emerald-400 to-teal-500", desc: "Natywne i cross-platform aplikacje" },
  { icon: Globe, label: "Aplikacje webowe", color: "from-amber-400 to-orange-500", desc: "Nowoczesne aplikacje internetowe" },
  { icon: Cpu, label: "Optymalizacja", color: "from-rose-400 to-pink-500", desc: "Wydajność i skalowanie systemów" },
  { icon: Sparkles, label: "Innowacja", color: "from-indigo-400 to-blue-600", desc: "Nowe technologie i podejścia" },
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
    description: "Inteligentna platforma do monitorowania rynku nieruchomości. Zbiera ogłoszenia z wielu źródeł i powiadamia o nowych ofertach dopasowanych do Twoich filtrów.",
    icon: Building2,
    gradient: "from-[#4ad7c7] to-[#2fb8a7]",
    shadowColor: "shadow-[#4ad7c7]/20",
    features: ["Agregacja ogłoszeń z wielu źródeł", "Powiadomienia o nowych ofertach", "Zaawansowane filtry wyszukiwania"],
  },
];

const processSteps = [
  { icon: Target, title: "Analiza", description: "Poznajemy potrzeby i definiujemy cel projektu." },
  { icon: Code2, title: "Rozwój", description: "Tworzymy rozwiązanie z użyciem dopasowanych technologii." },
  { icon: Rocket, title: "Wdrożenie", description: "Dostarczamy gotowy produkt i zapewniamy wsparcie." },
  { icon: Users, title: "Współpraca", description: "Działamy jako Twój partner technologiczny na dłuższą metę." },
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
        className="relative min-h-[100svh] flex flex-col items-center justify-center px-6 overflow-hidden"
      >
        <FloatingOrb className="w-72 h-72 bg-[#055ed1] -top-20 -left-20" delay={0} />
        <FloatingOrb className="w-96 h-96 bg-[#4ad7c7] -bottom-32 -right-20" delay={2} />
        <FloatingOrb className="w-48 h-48 bg-purple-400 top-1/3 right-1/4" delay={4} />
        <ParticleField count={15} color="hsl(217, 91%, 60%)" />

        <motion.div
          initial={{ opacity: 0, scale: 0.7, filter: "blur(20px)" }}
          animate={{ opacity: 1, scale: 1, filter: "blur(0px)" }}
          transition={{ duration: 1.2, ease: [0.25, 0.4, 0.25, 1] }}
        >
          <img
            src={kultLogo}
            alt="Kult Technology"
            className="mb-10"
            style={{ height: "clamp(3.5rem, 10vw, 8rem)", width: "auto" }}
          />
        </motion.div>

        <motion.h1
          className="text-foreground text-center tracking-tight max-w-4xl leading-tight font-extralight"
          style={{ fontSize: "clamp(2rem, 5vw, 4.5rem)" }}
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.8 }}
        >
          Kształtujemy{" "}
          <span className="gradient-text font-normal">przyszłość</span>{" "}
          technologii
        </motion.h1>

        <motion.p
          className="mt-6 max-w-xl text-center text-muted-foreground leading-relaxed"
          style={{ fontSize: "clamp(0.95rem, 1.6vw, 1.25rem)" }}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.8 }}
        >
          Projektujemy i budujemy oprogramowanie, które rozwiązuje realne problemy
          — od pomysłu, przez architekturę, aż po gotowy produkt.
        </motion.p>

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
        <ParticleField count={10} color="hsl(174, 60%, 56%)" />

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
              className="mt-4 font-light text-[hsl(var(--dark-fg))] leading-tight"
              style={{ fontSize: "clamp(1.5rem, 3.5vw, 3rem)" }}
            >
              Budujemy narzędzia,{" "}
              <span className="gradient-text font-normal">które zmieniają zasady gry</span>
            </motion.h2>
            <motion.p
              variants={fadeUp}
              custom={2}
              className="mt-6 max-w-2xl mx-auto text-[hsl(var(--dark-muted))] leading-relaxed"
              style={{ fontSize: "clamp(0.875rem, 1.3vw, 1.125rem)" }}
            >
              Kult Technology to zespół pasjonatów programowania, którzy wierzą, że najlepsze
              rozwiązania rodzą się na styku innowacji i użyteczności. Łączymy nowoczesne
              technologie z głębokim zrozumieniem potrzeb użytkowników.
            </motion.p>
          </motion.div>

          <motion.div
            className="grid grid-cols-2 md:grid-cols-4 gap-6"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
          >
            {[
              { value: "2+", label: "Produkty" },
              { value: "2026", label: "Rok założenia" },
              { value: "∞", label: "Ambicje" },
              { value: "24/7", label: "Zaangażowanie" },
            ].map((stat, i) => (
              <motion.div
                key={stat.label}
                variants={scaleIn}
                custom={i}
                whileHover={{ scale: 1.05, transition: { duration: 0.2 } }}
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
        <ParticleField count={10} color="hsl(217, 91%, 60%)" />

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
              className="mt-4 font-light text-foreground"
              style={{ fontSize: "clamp(1.5rem, 3.5vw, 3rem)" }}
            >
              Rozwiązania, które{" "}
              <span className="gradient-text font-normal">napędzają biznes</span>
            </motion.h2>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8">
            {apps.map((app, i) => (
              <motion.div
                key={app.name}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-50px" }}
                variants={i === 0 ? slideInLeft : slideInRight}
                custom={0}
                whileHover={{ y: -8, transition: { duration: 0.3 } }}
                className={`glass-light rounded-3xl p-8 cursor-pointer group transition-shadow duration-300 hover:shadow-2xl hover:${app.shadowColor}`}
              >
                <div className="flex items-center gap-4 mb-6">
                  <motion.div
                    className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${app.gradient} flex items-center justify-center shadow-lg`}
                    whileHover={{ scale: 1.15, rotate: 5, transition: { duration: 0.3 } }}
                  >
                    <app.icon className="w-7 h-7 text-white" />
                  </motion.div>
                  <h3 className="text-xl font-semibold text-foreground">{app.name}</h3>
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


      {/* ========== PROCESS — Dark ========== */}
      <section className="relative py-32 px-6 bg-[hsl(var(--dark-bg))] grid-pattern overflow-hidden">
        <FloatingOrb className="w-56 h-56 bg-[#4ad7c7] top-10 -left-10" delay={1} />
        <FloatingOrb className="w-72 h-72 bg-purple-500 bottom-10 -right-20" delay={3} />
        <ParticleField count={8} color="hsl(174, 60%, 56%)" />

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
              Jak działamy
            </motion.span>
            <motion.h2
              variants={fadeUp}
              custom={1}
              className="mt-4 font-light text-[hsl(var(--dark-fg))]"
              style={{ fontSize: "clamp(1.5rem, 3.5vw, 3rem)" }}
            >
              Nasz sprawdzony{" "}
              <span className="gradient-text font-normal">proces realizacji</span>
            </motion.h2>
          </motion.div>

          <motion.div
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
          >
            {processSteps.map((step, i) => (
              <motion.div
                key={step.title}
                variants={scaleIn}
                custom={i}
                whileHover={{ scale: 1.05, y: -5, transition: { duration: 0.2 } }}
                className="glass rounded-2xl p-6 text-center cursor-pointer group relative"
              >
                <motion.div
                  className="w-12 h-12 rounded-xl bg-gradient-to-br from-[hsl(var(--dark-accent-blue))] to-[hsl(var(--dark-accent-cyan))] flex items-center justify-center mx-auto mb-4 shadow-lg"
                  whileHover={{ rotate: 10, scale: 1.1, transition: { duration: 0.3 } }}
                >
                  <step.icon className="w-6 h-6 text-white" />
                </motion.div>
                <span className="absolute top-4 right-4 text-xs font-bold text-[hsl(var(--dark-muted))] opacity-40">
                  0{i + 1}
                </span>
                <h3 className="text-base font-semibold text-[hsl(var(--dark-fg))] mb-2">{step.title}</h3>
                <p className="text-sm text-[hsl(var(--dark-muted))] leading-relaxed">{step.description}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>


      {/* ========== TECH STACK — Light ========== */}
      <section className="relative py-32 px-6 bg-background overflow-hidden">
        <FloatingOrb className="w-72 h-72 bg-purple-500 top-10 left-10" delay={1.5} />
        <FloatingOrb className="w-56 h-56 bg-[#055ed1] bottom-20 right-10" delay={3.5} />
        <ParticleField count={10} color="hsl(260, 60%, 60%)" />

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
              Technologie
            </motion.span>
            <motion.h2
              variants={fadeUp}
              custom={1}
              className="mt-4 font-light text-foreground"
              style={{ fontSize: "clamp(1.5rem, 3.5vw, 3rem)" }}
            >
              Napędzane przez{" "}
              <span className="gradient-text font-normal">najlepsze</span>{" "}
              <span className="gradient-text font-normal">technologie</span>
            </motion.h2>
            <motion.p
              variants={fadeUp}
              custom={2}
              className="mt-6 max-w-2xl mx-auto text-muted-foreground leading-relaxed"
              style={{ fontSize: "clamp(0.875rem, 1.3vw, 1.125rem)" }}
            >
              Dobieramy narzędzia dopasowane do potrzeb projektu — od sprawdzonych frameworków
              po rozwiązania oparte na sztucznej inteligencji.
            </motion.p>
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
                whileHover={{ scale: 1.05, y: -5, transition: { duration: 0.2 } }}
                className="glass-light rounded-2xl p-4 sm:p-6 flex flex-col items-center gap-2 sm:gap-3 cursor-pointer group"
              >
                <div
                  className={`w-10 h-10 sm:w-12 sm:h-12 rounded-xl bg-gradient-to-br ${tech.color} flex items-center justify-center shadow-lg`}
                >
                  <tech.icon className="w-5 h-5 sm:w-6 sm:h-6 text-white" />
                </div>
                <span className="text-xs sm:text-sm font-medium text-foreground text-center">{tech.label}</span>
                <span className="text-[0.65rem] sm:text-xs text-muted-foreground text-center leading-relaxed">{tech.desc}</span>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>


      {/* ========== CTA — Dark ========== */}
      <section className="relative py-32 px-6 bg-[hsl(var(--dark-bg))] grid-pattern overflow-hidden">
        <FloatingOrb className="w-80 h-80 bg-[#055ed1] -top-20 left-1/3" delay={0} />
        <FloatingOrb className="w-64 h-64 bg-[#4ad7c7] bottom-0 right-1/4" delay={2} />
        <ParticleField count={8} color="hsl(217, 91%, 60%)" />

        <motion.div
          className="max-w-3xl mx-auto text-center relative z-10"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
        >
          <motion.span
            variants={fadeUp}
            custom={0}
            className="text-xs tracking-[0.3em] uppercase text-[hsl(var(--dark-muted))]"
          >
            Dołącz do nas
          </motion.span>
          <motion.h2
            variants={fadeUp}
            custom={1}
            className="mt-4 font-light text-[hsl(var(--dark-fg))]"
            style={{ fontSize: "clamp(1.5rem, 3.5vw, 3rem)" }}
          >
            Masz pomysł?{" "}
            <span className="gradient-text font-normal">Zrealizujmy go razem</span>
          </motion.h2>
          <motion.p
            variants={fadeUp}
            custom={2}
            className="mt-6 text-[hsl(var(--dark-muted))]"
            style={{ fontSize: "clamp(0.875rem, 1.3vw, 1.125rem)" }}
          >
            Niezależnie od etapu projektu — od pomysłu po skalowanie — jesteśmy gotowi pomóc.
          </motion.p>
        </motion.div>
      </section>


      {/* ========== CONTACT — Light ========== */}
      <section className="relative py-32 px-6 bg-background overflow-hidden">
        <FloatingOrb className="w-64 h-64 bg-[#4ad7c7] -top-20 right-1/3" delay={0.5} />
        <ParticleField count={8} color="hsl(174, 60%, 56%)" />

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
            className="mt-4 font-light text-foreground"
            style={{ fontSize: "clamp(1.5rem, 3.5vw, 3rem)" }}
          >
            Porozmawiajmy o{" "}
            <span className="gradient-text font-normal">przyszłości</span>
          </motion.h2>
          <motion.p
            variants={fadeUp}
            custom={2}
            className="mt-6 text-muted-foreground"
            style={{ fontSize: "clamp(0.875rem, 1.3vw, 1.125rem)" }}
          >
            Masz pomysł, który chcesz zrealizować? Napisz do nas.
          </motion.p>

          <motion.a
            variants={fadeUp}
            custom={3}
            href="mailto:kontakt@kulttechnology.pl"
            className="mt-10 inline-flex items-center gap-3 px-8 py-4 rounded-full glass-light text-foreground hover:shadow-xl transition-all duration-300 group"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.98 }}
          >
            <Mail className="h-5 w-5 transition-transform duration-300 group-hover:scale-110" />
            <span className="text-sm md:text-base tracking-wide font-medium">
              kontakt@kulttechnology.pl
            </span>
          </motion.a>
        </motion.div>
      </section>


      {/* Footer */}
      <footer className="py-8 text-center bg-[hsl(var(--dark-bg))] border-t border-[hsl(var(--dark-card-border))]">
        <p className="text-xs text-[hsl(var(--dark-muted))] tracking-wide">
          © {new Date().getFullYear()} Kult Technology
        </p>
      </footer>
    </div>
  );
};

export default Index;