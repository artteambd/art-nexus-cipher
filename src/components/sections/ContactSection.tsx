import { useState } from "react";
import { motion } from "framer-motion";
import { Send, Check } from "lucide-react";

const ContactSection = () => {
  const [sent, setSent] = useState(false);
  const [form, setForm] = useState({ name: "", email: "", message: "" });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (form.name && form.email && form.message) setSent(true);
  };

  return (
    <section className="min-h-screen pt-28 pb-20 px-4 flex items-center justify-center">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="glass-strong rounded-2xl p-8 md:p-12 max-w-lg w-full"
      >
        {!sent ? (
          <>
            <h2 className="font-orbitron text-2xl md:text-3xl font-bold gradient-text mb-2">CONTACT</h2>
            <p className="text-muted-foreground text-sm mb-8">Get in touch with the ART SOFTWARES team.</p>
            <form onSubmit={handleSubmit} className="space-y-4">
              <input
                type="text"
                placeholder="Your Name"
                value={form.name}
                onChange={(e) => setForm({ ...form, name: e.target.value })}
                className="w-full glass rounded-lg p-4 text-sm text-foreground placeholder:text-muted-foreground bg-transparent outline-none focus:ring-1 focus:ring-border"
              />
              <input
                type="email"
                placeholder="Your Email"
                value={form.email}
                onChange={(e) => setForm({ ...form, email: e.target.value })}
                className="w-full glass rounded-lg p-4 text-sm text-foreground placeholder:text-muted-foreground bg-transparent outline-none focus:ring-1 focus:ring-border"
              />
              <textarea
                placeholder="Your Message"
                rows={4}
                value={form.message}
                onChange={(e) => setForm({ ...form, message: e.target.value })}
                className="w-full glass rounded-lg p-4 text-sm text-foreground placeholder:text-muted-foreground bg-transparent outline-none focus:ring-1 focus:ring-border resize-none"
              />
              <button
                type="submit"
                data-interactive
                className="w-full glass py-4 rounded-lg font-orbitron text-sm tracking-widest text-foreground hover:bg-accent/40 transition-colors flex items-center justify-center gap-2"
              >
                <Send size={14} />
                SEND MESSAGE
              </button>
            </form>
          </>
        ) : (
          <motion.div initial={{ opacity: 0, scale: 0.8 }} animate={{ opacity: 1, scale: 1 }} className="text-center py-8">
            <div className="w-20 h-20 rounded-full border-2 border-art-grey-500 flex items-center justify-center mx-auto mb-6">
              <Check size={32} className="text-art-grey-600" />
            </div>
            <h4 className="font-orbitron text-lg font-bold text-foreground mb-2">Message Sent</h4>
            <p className="text-muted-foreground text-sm">We'll get back to you shortly.</p>
          </motion.div>
        )}
      </motion.div>
    </section>
  );
};

export default ContactSection;
