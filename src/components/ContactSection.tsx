import { useState, type FormEvent } from "react";
import { LINKEDIN_PROFILE_URL } from "../data/content";

export function ContactSection() {
  const [showForm, setShowForm] = useState(false);

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const name = formData.get("clientName") as string;
    const email = formData.get("clientEmail") as string;
    const phone = formData.get("clientPhone") as string;
    const subject = encodeURIComponent("New Client Inquiry");
    const body = encodeURIComponent(
      `Hi Subash,\n\nI am interested in discussing a project with you. Here are my details:\n\nName: ${name}\nEmail: ${email}\nPhone: ${phone}\n\nLooking forward to hearing from you.\n\nBest regards,\n${name}`
    );
    window.open(
      `https://mail.google.com/mail/?view=cm&fs=1&to=subashkannan.work@gmail.com&su=${subject}&body=${body}`,
      "_blank"
    );
  };

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
          <button
            onClick={() => setShowForm(true)}
            className="bg-surface-container-lowest text-primary font-bold px-12 py-6 text-sm uppercase tracking-widest transition-all hover:bg-tertiary-fixed hover:text-on-tertiary-fixed active:scale-95 inline-flex justify-center"
          >
            Initiate Email
          </button>
          <a
            href={LINKEDIN_PROFILE_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="border border-on-primary-container text-on-primary font-bold px-12 py-6 text-sm uppercase tracking-widest transition-all hover:bg-on-primary-fixed-variant active:scale-95 inline-flex justify-center"
          >
            LinkedIn
          </a>
        </div>

        {/* Client Details Collection Section - shown after clicking Initiate Email */}
        {showForm && (
          <div className="pt-16 border-t border-on-primary-container/30 mt-16 animate-fadeIn">
            <h3 className="font-label text-[10px] uppercase tracking-[0.5em] text-on-primary-container mb-12">
              Share Your Details
            </h3>
            <form className="max-w-5xl mx-auto" onSubmit={handleSubmit}>
              <div className="flex flex-col md:flex-row justify-center items-start gap-8 md:gap-12">
                <div className="flex-1 text-center md:text-left w-full">
                  <label
                    htmlFor="clientName"
                    className="block font-label text-[10px] uppercase tracking-[0.3em] text-on-primary-container/60 mb-3"
                  >
                    Your Name
                  </label>
                  <input
                    type="text"
                    id="clientName"
                    name="clientName"
                    required
                    placeholder="John Doe"
                    className="w-full bg-transparent border-b border-on-primary-container/30 text-on-primary px-0 py-3 text-lg font-medium placeholder:text-on-primary-container/30 focus:outline-none focus:border-tertiary-fixed transition-colors"
                  />
                </div>
                <div className="hidden md:block w-px h-16 bg-on-primary-container/20 self-center" />
                <div className="flex-1 text-center md:text-left w-full">
                  <label
                    htmlFor="clientEmail"
                    className="block font-label text-[10px] uppercase tracking-[0.3em] text-on-primary-container/60 mb-3"
                  >
                    Your Email
                  </label>
                  <input
                    type="email"
                    id="clientEmail"
                    name="clientEmail"
                    required
                    placeholder="john@example.com"
                    className="w-full bg-transparent border-b border-on-primary-container/30 text-on-primary px-0 py-3 text-lg font-medium placeholder:text-on-primary-container/30 focus:outline-none focus:border-tertiary-fixed transition-colors"
                  />
                </div>
                <div className="hidden md:block w-px h-16 bg-on-primary-container/20 self-center" />
                <div className="flex-1 text-center md:text-left w-full">
                  <label
                    htmlFor="clientPhone"
                    className="block font-label text-[10px] uppercase tracking-[0.3em] text-on-primary-container/60 mb-3"
                  >
                    Your Phone
                  </label>
                  <input
                    type="tel"
                    id="clientPhone"
                    name="clientPhone"
                    placeholder="+1 234 567 890"
                    className="w-full bg-transparent border-b border-on-primary-container/30 text-on-primary px-0 py-3 text-lg font-medium placeholder:text-on-primary-container/30 focus:outline-none focus:border-tertiary-fixed transition-colors"
                  />
                </div>
              </div>
              <button
                type="submit"
                className="mt-16 bg-surface-container-lowest text-primary font-bold px-16 py-6 text-sm uppercase tracking-widest transition-all hover:bg-tertiary-fixed hover:text-on-tertiary-fixed active:scale-95"
              >
                Send Details
              </button>
            </form>
          </div>
        )}
      </div>
    </section>
  );
}
