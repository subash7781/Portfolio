import { socialLinks } from "../data/content";

export function Footer() {
  return (
    <footer className="bg-surface-container-lowest border-t border-outline-variant/10">
      <div className="max-w-7xl mx-auto px-8 py-16 flex flex-col md:flex-row justify-between items-center gap-8">
        <div className="text-xl font-bold tracking-tighter text-primary font-headline">
          Data Analyst
        </div>
        <div className="text-secondary font-body text-sm">
          © 2024 Data Analyst. All rights reserved.
        </div>
        <div className="flex gap-10">
          {socialLinks.map((link) => {
            const external =
              link.href.startsWith("http://") ||
              link.href.startsWith("https://");
            return (
              <a
                key={link.name}
                href={link.href}
                {...(external
                  ? { target: "_blank", rel: "noopener noreferrer" }
                  : {})}
                className="text-secondary hover:text-[#172839] underline decoration-1 underline-offset-8 transition-all font-label text-[10px] uppercase tracking-widest"
              >
                {link.name}
              </a>
            );
          })}
        </div>
      </div>
    </footer>
  );
}
