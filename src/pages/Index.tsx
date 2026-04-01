import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import CustomCursor from "@/components/CustomCursor";
import ParticleCanvas from "@/components/ParticleCanvas";
import Navbar, { type Page } from "@/components/Navbar";
import Footer from "@/components/Footer";
import HomeSection from "@/components/sections/HomeSection";
import BotsSection from "@/components/sections/BotsSection";
import ResultsSection from "@/components/sections/ResultsSection";
import HistorySection from "@/components/sections/HistorySection";
import ContactSection from "@/components/sections/ContactSection";

const Index = () => {
  const [page, setPage] = useState<Page>("HOME");

  const navigate = (p: Page) => {
    setPage(p);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const renderPage = () => {
    switch (page) {
      case "HOME": return <HomeSection onNavigate={navigate} />;
      case "BOTS": return <BotsSection />;
      case "RESULTS": return <ResultsSection />;
      case "DEVELOPER HISTORY": return <HistorySection />;
      case "CONTACT": return <ContactSection />;
    }
  };

  return (
    <div className="min-h-screen relative" style={{ backgroundColor: "#0A0A0A" }}>
      <CustomCursor />
      <ParticleCanvas />
      <Navbar activePage={page} onNavigate={navigate} />
      <AnimatePresence mode="wait">
        <motion.div
          key={page}
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -10 }}
          transition={{ duration: 0.3 }}
          className="relative z-10"
        >
          {renderPage()}
        </motion.div>
      </AnimatePresence>
      <Footer onNavigate={navigate} />
    </div>
  );
};

export default Index;
