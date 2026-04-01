import type { Page } from "./Navbar";

interface FooterProps {
  onNavigate: (page: Page) => void;
}

const Footer = ({ onNavigate }: FooterProps) => (
  <footer className="glass border-t border-border/20 py-12 px-4 relative z-10">
    <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
      <div className="font-orbitron text-sm gradient-text tracking-wider">ART SOFTWARES</div>
      <div className="flex gap-6">
        {(["HOME", "BOTS", "RESULTS", "CONTACT"] as const).map((p) => (
          <button
            key={p}
            onClick={() => onNavigate(p)}
            data-interactive
            className="text-xs text-muted-foreground hover:text-foreground tracking-wider transition-colors"
          >
            {p}
          </button>
        ))}
      </div>
      <p className="text-xs text-muted-foreground">© 2024 ART SOFTWARES. All rights reserved.</p>
    </div>
  </footer>
);

export default Footer;
