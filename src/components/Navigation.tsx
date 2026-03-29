import { Download } from "lucide-react";
import { navLinks } from "../data/content";

export function Navigation() {
  return (
    <nav className="fixed top-0 w-full glass-nav z-50">
      <div className="max-w-7xl mx-auto px-8 py-4 flex justify-between items-center">
        <div className="text-xl font-bold tracking-tighter text-primary font-headline">
          Data Analyst
        </div>
        <div className="hidden md:flex gap-8 items-center">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className={`font-label text-[10px] uppercase tracking-[0.2em] transition-colors ${
                link.active
                  ? "text-primary border-b-2 border-primary pb-1"
                  : "text-secondary hover:text-primary"
              }`}
            >
              {link.name}
            </a>
          ))}
        </div>
        <button
          type="button"
          className="bg-primary hover:bg-primary-container text-on-primary px-6 py-2 text-[10px] font-label uppercase tracking-[0.2em] transition-all active:scale-95 flex items-center gap-2"
        >
          <Download size={14} />
          Download CV
        </button>
      </div>
    </nav>
  );
}
