import { useState } from "react";
import { motion } from "framer-motion";
import PaymentModal from "../PaymentModal";

const bots = [
  { name: "ARTRIX AI", price: 120, desc: "Our flagship AI-driven trading bot. Automated precision for maximum returns on every market move." },
  { name: "TWJ LIVE SIGNAL", price: 100, desc: "Real-time live trading signals delivered instantly. Never miss a profitable entry again." },
  { name: "TWJ FUTURE SIGNAL", price: 80, desc: "Futures market signals with advanced predictive analysis and risk management built in." },
  { name: "VELTRIX SIGNALS", price: 60, desc: "TradingView-integrated signals with chart overlays, alerts, and automated notifications." },
  { name: "RESULTS CHECKER", price: 30, desc: "Verify and track signal performance in real-time. Full transparency on every trade." },
];

const BotsSection = () => {
  const [selectedBot, setSelectedBot] = useState<string | null>(null);

  return (
    <section className="min-h-screen pt-28 pb-20 px-4">
      <div className="max-w-6xl mx-auto">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="text-center mb-16">
          <h2 className="font-orbitron text-3xl md:text-5xl font-bold gradient-text mb-4">TRADING BOTS</h2>
          <p className="text-muted-foreground text-sm tracking-wider">SELECT YOUR EDGE IN THE MARKET</p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {bots.map((bot, i) => (
            <motion.div
              key={bot.name}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
              className="glass magnetic-hover rounded-xl p-8 flex flex-col justify-between min-h-[280px]"
            >
              <div>
                <h3 className="font-orbitron text-lg font-semibold text-foreground mb-2">{bot.name}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed mb-6">{bot.desc}</p>
              </div>
              <div className="flex items-end justify-between">
                <span className="font-orbitron text-3xl font-black text-foreground">${bot.price}</span>
                <button
                  onClick={() => setSelectedBot(bot.name)}
                  data-interactive
                  className="glass px-6 py-2.5 rounded-lg font-orbitron text-xs tracking-widest text-foreground hover:bg-accent/40 transition-colors"
                >
                  BUY NOW
                </button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {selectedBot && (
        <PaymentModal botName={selectedBot} onClose={() => setSelectedBot(null)} />
      )}
    </section>
  );
};

export default BotsSection;
