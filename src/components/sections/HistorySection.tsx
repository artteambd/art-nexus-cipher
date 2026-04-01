import { motion } from "framer-motion";

const timeline = [
  { year: "2019", title: "Genesis", desc: "First automated trading script built in Dhaka. The seed of ART SOFTWARES was planted." },
  { year: "2020", title: "Market Entry", desc: "Launched ARTRIX AI v1.0. Early adopters saw 15% monthly returns consistently." },
  { year: "2021", title: "Signal Network", desc: "Expanded to TWJ Live & Future Signals. Community grew to 500+ active traders." },
  { year: "2022", title: "TradingView Integration", desc: "VELTRIX Signals launched with native TradingView support. Global reach achieved." },
  { year: "2023", title: "Transparency Era", desc: "Results Checker released. Full public audit trail for all signals and bot performance." },
  { year: "2024", title: "Global Dominance", desc: "1,200+ active users across 30+ countries. From Dhaka to global markets — the mission continues." },
];

const HistorySection = () => (
  <section className="min-h-screen pt-28 pb-20 px-4">
    <div className="max-w-4xl mx-auto">
      <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="text-center mb-16">
        <h2 className="font-orbitron text-3xl md:text-5xl font-bold gradient-text mb-4">DEVELOPER HISTORY</h2>
        <p className="text-muted-foreground text-sm tracking-wider">FROM DHAKA TO GLOBAL MARKETS</p>
      </motion.div>

      {/* About */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.2 }}
        className="glass rounded-xl p-8 md:p-12 mb-16 text-center"
      >
        <h3 className="font-orbitron text-xl font-bold text-foreground mb-4">ARTRIX</h3>
        <p className="text-muted-foreground leading-relaxed max-w-2xl mx-auto">
          A self-taught developer and quantitative trader from Dhaka, Bangladesh. 
          What started as a passion for markets and code evolved into ART SOFTWARES — 
          a platform trusted by traders worldwide. Every algorithm, every signal, 
          every line of code carries a singular obsession: precision that generates profit.
        </p>
      </motion.div>

      {/* Timeline */}
      <div className="relative">
        <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-px bg-border" />
        {timeline.map((item, i) => (
          <motion.div
            key={item.year}
            initial={{ opacity: 0, x: i % 2 === 0 ? -30 : 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.3 + i * 0.1 }}
            className={`relative flex flex-col md:flex-row items-start mb-12 ${
              i % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
            }`}
          >
            {/* Dot */}
            <div className="absolute left-4 md:left-1/2 w-3 h-3 rounded-full bg-art-grey-500 border-2 border-background transform -translate-x-1.5 mt-1.5 z-10" />

            <div className={`ml-12 md:ml-0 md:w-1/2 ${i % 2 === 0 ? "md:pr-12 md:text-right" : "md:pl-12"}`}>
              <span className="font-orbitron text-xs text-art-grey-500 tracking-widest">{item.year}</span>
              <h4 className="font-orbitron text-lg font-semibold text-foreground mt-1 mb-2">{item.title}</h4>
              <p className="text-muted-foreground text-sm leading-relaxed">{item.desc}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default HistorySection;
