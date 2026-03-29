import { CONTACT_EMAIL_HREF, LINKEDIN_PROFILE_URL } from "../data/content";

export function ContactSection() {
  return (
    <section
      id="contact"
      className="py-40 px-8 text-center bg-primary text-on-primary relative overflow-hidden"
    >
      <div className="absolute inset-0 opacity-5 pointer-events-none">
        <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-white via-transparent to-transparent scale-150" />
      </div>
      <div className="max-w-4xl mx-auto space-y-16 relative z-10">
        <span className="font-label text-[10px] uppercase tracking-[0.5em] text-on-primary-container">
          Next Phase Engagement
        </span>
        <h2 className="text-6xl md:text-8xl font-bold tracking-tighter leading-[0.85]">
          Let&apos;s discuss data architecture.
        </h2>
        <div className="flex flex-col sm:flex-row justify-center gap-6 pt-8">
          <a
            href={CONTACT_EMAIL_HREF}
            className="bg-surface-container-lowest text-primary font-bold px-12 py-6 text-sm uppercase tracking-widest transition-all hover:bg-tertiary-fixed hover:text-on-tertiary-fixed active:scale-95 inline-flex justify-center"
          >
            Initiate Email
          </a>
          <a
            href={LINKEDIN_PROFILE_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="border border-on-primary-container text-on-primary font-bold px-12 py-6 text-sm uppercase tracking-widest transition-all hover:bg-on-primary-fixed-variant active:scale-95 inline-flex justify-center"
          >
            LinkedIn
          </a>
        </div>
      </div>
    </section>
  );
}
