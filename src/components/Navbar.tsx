import { useState } from "react";
import { Menu, X } from "lucide-react";

const pages = ["HOME", "BOTS", "RESULTS", "DEVELOPER HISTORY", "CONTACT"] as const;
export type Page = (typeof pages)[number];

interface NavbarProps {
  activePage: Page;
  onNavigate: (page: Page) => void;
}

const Navbar = ({ activePage, onNavigate }: NavbarProps) => {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 glass-strong">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Logo */}
          <button
            onClick={() => onNavigate("HOME")}
            className="font-orbitron font-bold text-lg md:text-xl gradient-text tracking-wider"
            data-interactive
          >
            ART SOFTWARES
          </button>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center gap-1">
            {pages.map((p) => (
              <button
                key={p}
                onClick={() => onNavigate(p)}
                data-interactive
                className={`px-3 py-2 text-xs font-medium tracking-widest uppercase transition-all duration-300 rounded-md ${
                  activePage === p
                    ? "text-foreground bg-accent/50"
                    : "text-muted-foreground hover:text-foreground hover:bg-accent/30"
                }`}
              >
                {p}
              </button>
            ))}
          </div>

          {/* Binance ID */}
          <div className="hidden lg:block text-[10px] text-muted-foreground font-mono truncate max-w-[180px]">
            bc1qxxxxxxxxxxxxxxxxxxxxxxxxxxxx
          </div>

          {/* Mobile Toggle */}
          <button
            className="md:hidden text-foreground"
            onClick={() => setMobileOpen(!mobileOpen)}
            data-interactive
          >
            {mobileOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileOpen && (
        <div className="md:hidden glass-strong border-t border-border/20 pb-4">
          {pages.map((p) => (
            <button
              key={p}
              onClick={() => { onNavigate(p); setMobileOpen(false); }}
              data-interactive
              className={`block w-full text-left px-6 py-3 text-sm tracking-wider ${
                activePage === p ? "text-foreground" : "text-muted-foreground"
              }`}
            >
              {p}
            </button>
          ))}
          <div className="px-6 pt-2 text-[10px] text-muted-foreground font-mono">
            bc1qxxxxxxxxxxxxxxxxxxxxxxxxxxxx
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
