import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Check, Copy, X } from "lucide-react";

interface PaymentModalProps {
  botName: string;
  onClose: () => void;
}

const BINANCE_ID = "bc1qxxxxxxxxxxxxxxxxxxxxxxxxxxxx";

const PaymentModal = ({ botName, onClose }: PaymentModalProps) => {
  const [txId, setTxId] = useState("");
  const [copied, setCopied] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleCopy = async () => {
    await navigator.clipboard.writeText(BINANCE_ID);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const handleSubmit = () => {
    if (txId.trim()) setSubmitted(true);
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 z-[100] flex items-center justify-center p-4"
      style={{ backdropFilter: "blur(30px)", background: "rgba(0,0,0,0.8)" }}
    >
      <motion.div
        initial={{ scale: 0.9, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        className="glass-strong rounded-2xl p-8 md:p-12 max-w-lg w-full relative"
      >
        <button
          onClick={onClose}
          data-interactive
          className="absolute top-4 right-4 text-muted-foreground hover:text-foreground transition-colors"
        >
          <X size={20} />
        </button>

        <AnimatePresence mode="wait">
          {!submitted ? (
            <motion.div key="form" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
              <h3 className="font-orbitron text-xl font-bold text-foreground mb-1">Complete Payment via Binance</h3>
              <p className="text-muted-foreground text-sm mb-8">Purchasing: {botName}</p>

              <label className="text-xs text-muted-foreground tracking-wider uppercase mb-2 block">Binance ID</label>
              <div className="glass rounded-lg flex items-center gap-2 p-4 mb-6">
                <span className="text-foreground text-sm font-mono flex-1 truncate">{BINANCE_ID}</span>
                <button
                  onClick={handleCopy}
                  data-interactive
                  className="text-muted-foreground hover:text-foreground transition-colors flex items-center gap-1"
                >
                  {copied ? <Check size={16} /> : <Copy size={16} />}
                  <span className="text-xs">{copied ? "Copied" : "Copy"}</span>
                </button>
              </div>

              <label className="text-xs text-muted-foreground tracking-wider uppercase mb-2 block">Paste Transaction ID</label>
              <input
                type="text"
                value={txId}
                onChange={(e) => setTxId(e.target.value)}
                placeholder="Enter your transaction ID..."
                className="w-full glass rounded-lg p-4 text-sm text-foreground placeholder:text-muted-foreground bg-transparent outline-none focus:ring-1 focus:ring-border mb-6"
              />

              <button
                onClick={handleSubmit}
                data-interactive
                className="w-full glass py-4 rounded-lg font-orbitron text-sm tracking-widest text-foreground hover:bg-accent/40 transition-colors"
              >
                SUBMIT PAYMENT PROOF
              </button>
            </motion.div>
          ) : (
            <motion.div
              key="success"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              className="text-center py-8"
            >
              <div className="w-20 h-20 rounded-full border-2 border-art-grey-500 flex items-center justify-center mx-auto mb-6">
                <Check size={32} className="text-art-grey-600" />
              </div>
              <h4 className="font-orbitron text-lg font-bold text-foreground mb-2">Payment Proof Received</h4>
              <p className="text-muted-foreground text-sm">Access will be granted within 24 hours.</p>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.div>
    </motion.div>
  );
};

export default PaymentModal;
