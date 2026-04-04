import { useEffect, useState } from "react";
import { motion } from "motion/react";
import { Download } from "lucide-react";
import { CV_PDF_HREF, navLinks } from "../data/content";

function hrefToSectionId(href: string): string {
  return href.replace(/^#/, "");
}

export function Navigation() {
  const [activeId, setActiveId] = useState<string>("home");

  useEffect(() => {
    const sectionIds = navLinks.map((l) => hrefToSectionId(l.href));
    const navOffset = 112;

    const updateActive = () => {
      let current = sectionIds[0];
      const scrollPos = window.scrollY + navOffset;

      for (const id of sectionIds) {
        const el = document.getElementById(id);
        if (!el) continue;
        const top =
          window.scrollY + el.getBoundingClientRect().top;
        if (top <= scrollPos + 1) {
          current = id;
        }
      }
      setActiveId((prev) => (prev === current ? prev : current));
    };

    updateActive();
    window.addEventListener("scroll", updateActive, { passive: true });
    window.addEventListener("resize", updateActive);
    return () => {
      window.removeEventListener("scroll", updateActive);
      window.removeEventListener("resize", updateActive);
    };
  }, []);

  return (
    <nav className="fixed top-0 w-full glass-nav z-50">
      <div className="max-w-7xl mx-auto px-8 py-4 flex justify-between items-center">
        <div className="text-xl font-bold tracking-tighter text-primary font-headline">
          Data Analyst
        </div>
        <div className="hidden md:flex gap-8 items-center relative">
          {navLinks.map((link) => {
            const id = hrefToSectionId(link.href);
            const isActive = activeId === id;
            return (
              <a
                key={link.name}
                href={link.href}
                className="relative inline-flex flex-col items-stretch pb-1 font-label text-[10px] uppercase tracking-[0.2em] transition-colors"
              >
                <span
                  className={
                    isActive ? "text-primary" : "text-secondary hover:text-primary"
                  }
                >
                  {link.name}
                </span>
                {isActive && (
                  <motion.div
                    layoutId="nav-active-underline"
                    className="absolute bottom-0 left-0 right-0 h-0.5 bg-primary shadow-[0_0_12px_rgba(23,40,57,0.45)]"
                    initial={{ opacity: 0.5 }}
                    animate={{ opacity: [0.5, 1] }}
                    transition={{
                      layout: {
                        type: "spring",
                        stiffness: 420,
                        damping: 34,
                      },
                      opacity: { duration: 0.28, ease: "easeOut" },
                    }}
                  />
                )}
              </a>
            );
          })}
        </div>
        <a
          href={CV_PDF_HREF}
          target="_blank"
          rel="noopener noreferrer"
          className="bg-primary hover:bg-primary-container text-on-primary px-6 py-2 text-[10px] font-label uppercase tracking-[0.2em] transition-all active:scale-95 flex items-center gap-2"
          aria-label="Download CV (PDF)"
        >
          <Download size={14} aria-hidden />
          Download CV
        </a>
      </div>
    </nav>
  );
}
