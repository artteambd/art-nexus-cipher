import { motion } from "framer-motion";
import { Shield, Zap, TrendingUp, Lock, BarChart3, Users, Globe, ArrowRight } from "lucide-react";
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

const features = [
  {
    icon: BarChart3,
    title: "AI-Powered Analysis",
    desc: "Our proprietary algorithms analyze thousands of data points in real-time to deliver precision signals with unmatched accuracy.",
  },
  {
    icon: Users,
    title: "1,200+ Active Traders",
    desc: "Join a growing community of professional traders who trust ART SOFTWARES for consistent, reliable market intelligence.",
  },
  {
    icon: Globe,
    title: "Global Market Coverage",
    desc: "From crypto futures to spot trading — our bots operate 24/7 across every major exchange worldwide.",
  },
];

const liveStats = [
  { value: "87.3%", label: "Win Rate" },
  { value: "$2.4M+", label: "Total Profits Generated" },
  { value: "4,821", label: "Signals Delivered" },
  { value: "24/7", label: "Bot Uptime" },
];

const HomeSection = ({ onNavigate }: HomeSectionProps) => (
  <section className="relative">
    {/* HERO */}
    <div className="min-h-screen flex flex-col items-center justify-center px-4 relative">
      {/* Radial glow behind title */}
      <div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full pointer-events-none"
        style={{
          background: "radial-gradient(circle, rgba(100,100,100,0.08) 0%, transparent 70%)",
        }}
      />

      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-center max-w-4xl mx-auto relative z-10"
      >
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.2, duration: 0.6 }}
          className="inline-block glass rounded-full px-5 py-1.5 mb-8"
        >
          <span className="text-xs text-muted-foreground tracking-[0.3em] uppercase">
            Elite Trading Technology
          </span>
        </motion.div>

        <h1 className="font-orbitron text-5xl sm:text-6xl md:text-8xl font-black gradient-text mb-6 tracking-tight leading-tight">
          ART SOFTWARES
        </h1>
        <p className="text-xl sm:text-2xl md:text-3xl text-muted-foreground font-light mb-3 tracking-wide">
          Elite AI Trading Signals & Bots
        </p>
        <p className="font-orbitron text-sm md:text-base text-art-grey-500 tracking-[0.4em] mb-14">
          PRECISION · PROFIT · POWER
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <button
            onClick={() => onNavigate("BOTS")}
            data-interactive
            className="glass magnetic-hover px-10 py-4 font-orbitron text-sm tracking-widest text-foreground rounded-lg flex items-center justify-center gap-3 group"
          >
            BROWSE BOTS
            <ArrowRight size={16} className="transition-transform group-hover:translate-x-1" />
          </button>
          <button
            onClick={() => onNavigate("RESULTS")}
            data-interactive
            className="magnetic-hover px-10 py-4 font-orbitron text-sm tracking-widest text-muted-foreground rounded-lg border border-border/30 hover:border-border/60 transition-colors"
          >
            VIEW RESULTS
          </button>
        </div>
      </motion.div>

      {/* Trust Badges */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.8, duration: 0.6 }}
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
    </div>

    {/* LIVE STATS BAR */}
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8 }}
      className="glass-strong border-y border-border/20 py-10"
    >
      <div className="max-w-6xl mx-auto px-4 grid grid-cols-2 md:grid-cols-4 gap-8">
        {liveStats.map((s, i) => (
          <motion.div
            key={s.label}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1 }}
            className="text-center"
          >
            <p className="font-orbitron text-2xl md:text-3xl font-bold text-foreground mb-1">{s.value}</p>
            <p className="text-xs text-muted-foreground tracking-wider uppercase">{s.label}</p>
          </motion.div>
        ))}
      </div>
    </motion.div>

    {/* FEATURES */}
    <div className="py-24 px-4">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="font-orbitron text-2xl md:text-4xl font-bold gradient-text mb-4">WHY ART SOFTWARES</h2>
          <p className="text-muted-foreground text-sm tracking-wider max-w-xl mx-auto">
            Built by traders, for traders. Every tool is engineered for one purpose — your edge in the market.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {features.map((f, i) => (
            <motion.div
              key={f.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.15 }}
              className="glass magnetic-hover rounded-xl p-8 group"
            >
              <div className="w-12 h-12 rounded-lg glass flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <f.icon size={22} className="text-art-grey-600" />
              </div>
              <h3 className="font-orbitron text-base font-semibold text-foreground mb-3">{f.title}</h3>
              <p className="text-muted-foreground text-sm leading-relaxed">{f.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </div>

    {/* CTA BANNER */}
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      className="py-20 px-4"
    >
      <div className="max-w-4xl mx-auto glass-strong rounded-2xl p-12 md:p-16 text-center relative overflow-hidden">
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            background: "radial-gradient(ellipse at center, rgba(100,100,100,0.06) 0%, transparent 70%)",
          }}
        />
        <h3 className="font-orbitron text-xl md:text-3xl font-bold text-foreground mb-4 relative z-10">
          READY TO TRADE SMARTER?
        </h3>
        <p className="text-muted-foreground text-sm md:text-base mb-8 max-w-lg mx-auto relative z-10">
          Get started with our AI-powered bots and join thousands of profitable traders worldwide.
        </p>
        <button
          onClick={() => onNavigate("BOTS")}
          data-interactive
          className="glass magnetic-hover px-10 py-4 font-orbitron text-sm tracking-widest text-foreground rounded-lg relative z-10 inline-flex items-center gap-3 group"
        >
          GET STARTED
          <ArrowRight size={16} className="transition-transform group-hover:translate-x-1" />
        </button>
      </div>
    </motion.div>
  </section>
);

export default HomeSection;
