import { motion } from "framer-motion";
import { Shield, Zap, TrendingUp, Lock } from "lucide-react";
import type { Page } from "../Navbar";

interface HomeSectionProps {
  onNavigate: (page: Page) => void;
}

const badges = [
  { icon: Shield, label: "Encrypted Signals" },
  { icon: Zap, label: "Real-Time Execution" },
  { icon: TrendingUp, label: "Proven Results" },
  { icon: Lock, label: "Secure Payments" },
];

const HomeSection = ({ onNavigate }: HomeSectionProps) => (
  <section className="min-h-screen flex flex-col items-center justify-center px-4 relative">
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      className="text-center max-w-4xl mx-auto"
    >
      <h1 className="font-orbitron text-5xl sm:text-6xl md:text-8xl font-black gradient-text mb-4 tracking-tight">
        ART SOFTWARES
      </h1>
      <p className="text-lg sm:text-xl md:text-2xl text-muted-foreground font-light mb-2 tracking-wide">
        Elite AI Trading Signals & Bots
      </p>
      <p className="font-orbitron text-sm md:text-base text-art-grey-500 tracking-[0.4em] mb-12">
        PRECISION · PROFIT · POWER
      </p>
      <div className="flex flex-col sm:flex-row gap-4 justify-center">
        <button
          onClick={() => onNavigate("BOTS")}
          data-interactive
          className="glass magnetic-hover px-8 py-4 font-orbitron text-sm tracking-widest text-foreground rounded-lg"
        >
          BROWSE BOTS
        </button>
        <button
          onClick={() => onNavigate("RESULTS")}
          data-interactive
          className="glass magnetic-hover px-8 py-4 font-orbitron text-sm tracking-widest text-muted-foreground rounded-lg"
        >
          VIEW RESULTS
        </button>
      </div>
    </motion.div>

    {/* Trust Badges */}
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 0.6, duration: 0.8 }}
      className="absolute bottom-16 left-0 right-0"
    >
      <div className="flex flex-wrap justify-center gap-8 md:gap-16 px-4">
        {badges.map(({ icon: Icon, label }) => (
          <div key={label} className="flex items-center gap-2 text-muted-foreground">
            <Icon size={16} strokeWidth={1.5} />
            <span className="text-xs tracking-wider uppercase">{label}</span>
          </div>
        ))}
      </div>
    </motion.div>
  </section>
);

export default HomeSection;
