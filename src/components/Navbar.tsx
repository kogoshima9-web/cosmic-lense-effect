import { ArrowUpRight } from "lucide-react";
import logoIcon from "@/assets/logo-icon.png";

const navLinks = ["Home", "Voyages", "Worlds", "Innovation", "Plan Launch"];

const Navbar = () => {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-6 md:px-10 py-4">
      <img src={logoIcon} alt="Venture logo" className="h-12 w-12 rounded-lg invert" />

      <div className="hidden md:flex items-center gap-1 liquid-glass rounded-full px-2 py-1.5">
        {navLinks.map((link) => (
          <a
            key={link}
            href={`#${link.toLowerCase().replace(" ", "-")}`}
            className="px-4 py-2 text-sm font-body font-medium text-foreground/80 hover:text-foreground transition-colors"
          >
            {link}
          </a>
        ))}
        <button className="flex items-center gap-1.5 bg-foreground text-primary-foreground rounded-full px-5 py-2 text-sm font-medium font-body ml-1">
          Claim a Spot
          <ArrowUpRight size={14} />
        </button>
      </div>

      <div className="w-12 md:hidden" />
    </nav>
  );
};

export default Navbar;
