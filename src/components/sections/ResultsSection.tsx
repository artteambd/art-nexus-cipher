import { motion } from "framer-motion";

const stats = [
  { label: "Win Rate", value: "87.3%", bar: 87 },
  { label: "Avg Monthly Profit", value: "23.6%", bar: 72 },
  { label: "Total Signals", value: "4,821", bar: 95 },
  { label: "Active Users", value: "1,200+", bar: 60 },
];

const testimonials = [
  { name: "M. Rahman", text: "ARTRIX AI completely changed my trading. Consistent profits since day one.", rating: 5 },
  { name: "S. Khan", text: "TWJ signals are incredibly accurate. Worth every penny for the precision.", rating: 5 },
  { name: "A. Hossain", text: "The Results Checker gave me full transparency. Trust is everything in this game.", rating: 4 },
  { name: "R. Islam", text: "Best trading bot I've ever used. The team is responsive and professional.", rating: 5 },
];

const ResultsSection = () => (
  <section className="min-h-screen pt-28 pb-20 px-4">
    <div className="max-w-6xl mx-auto">
      <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="text-center mb-16">
        <h2 className="font-orbitron text-3xl md:text-5xl font-bold gradient-text mb-4">PERFORMANCE</h2>
        <p className="text-muted-foreground text-sm tracking-wider">VERIFIED RESULTS. REAL NUMBERS.</p>
      </motion.div>

      {/* Stats Dashboard */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-20">
        {stats.map((s, i) => (
          <motion.div
            key={s.label}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.1 }}
            className="glass magnetic-hover rounded-xl p-6"
          >
            <p className="text-xs text-muted-foreground tracking-wider uppercase mb-2">{s.label}</p>
            <p className="font-orbitron text-2xl font-bold text-foreground mb-4">{s.value}</p>
            <div className="w-full h-1.5 rounded-full bg-accent">
              <motion.div
                initial={{ width: 0 }}
                animate={{ width: `${s.bar}%` }}
                transition={{ delay: 0.3 + i * 0.1, duration: 1, ease: "easeOut" }}
                className="h-full rounded-full"
                style={{ background: "linear-gradient(90deg, hsl(0 0% 40%), hsl(0 0% 80%))" }}
              />
            </div>
          </motion.div>
        ))}
      </div>

      {/* Testimonials */}
      <motion.h3
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="font-orbitron text-xl font-bold text-foreground mb-8 text-center"
      >
        TRADER FEEDBACK
      </motion.h3>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {testimonials.map((t, i) => (
          <motion.div
            key={t.name}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 + i * 0.1 }}
            className="glass rounded-xl p-6"
          >
            <div className="flex items-center gap-1 mb-3">
              {Array.from({ length: 5 }).map((_, si) => (
                <span key={si} className={si < t.rating ? "text-art-grey-600" : "text-accent"}>★</span>
              ))}
            </div>
            <p className="text-muted-foreground text-sm leading-relaxed mb-4">"{t.text}"</p>
            <p className="text-xs text-art-grey-500 font-semibold tracking-wider">— {t.name}</p>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default ResultsSection;
