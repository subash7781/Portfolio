import { useState, type FormEvent } from "react";
import { motion, AnimatePresence } from "motion/react";
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
        <AnimatePresence mode="wait">
          {!showForm ? (
            <motion.div
              key="buttons"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.3 }}
              className="flex flex-col sm:flex-row justify-center gap-6 pt-8"
            >
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
            </motion.div>
          ) : (
            <motion.div
              key="form"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.3, delay: 0.1 }}
              className="pt-8"
            >
              <form className="max-w-5xl mx-auto" onSubmit={handleSubmit}>
                <div className="flex flex-col md:flex-row justify-center items-start gap-8 md:gap-12">
                  <motion.div
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.3, delay: 0.2 }}
                    className="flex-1 text-center md:text-left w-full"
                  >
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
                  </motion.div>
                  <motion.div
                    initial={{ opacity: 0, scaleY: 0 }}
                    animate={{ opacity: 1, scaleY: 1 }}
                    transition={{ duration: 0.3, delay: 0.3 }}
                    className="hidden md:block w-px h-16 bg-on-primary-container/20 self-center origin-center"
                  />
                  <motion.div
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.3, delay: 0.35 }}
                    className="flex-1 text-center md:text-left w-full"
                  >
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
                  </motion.div>
                  <motion.div
                    initial={{ opacity: 0, scaleY: 0 }}
                    animate={{ opacity: 1, scaleY: 1 }}
                    transition={{ duration: 0.3, delay: 0.4 }}
                    className="hidden md:block w-px h-16 bg-on-primary-container/20 self-center origin-center"
                  />
                  <motion.div
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.3, delay: 0.45 }}
                    className="flex-1 text-center md:text-left w-full"
                  >
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
                  </motion.div>
                </div>
                <motion.button
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3, delay: 0.6 }}
                  type="submit"
                  className="mt-16 bg-surface-container-lowest text-primary font-bold px-16 py-6 text-sm uppercase tracking-widest transition-all hover:bg-tertiary-fixed hover:text-on-tertiary-fixed active:scale-95"
                >
                  Send Details
                </motion.button>
              </form>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
}
