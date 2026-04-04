import { motion } from "motion/react";
import { experience } from "../data/content";

export function ExperienceSection() {
  return (
    <section
      id="experience"
      className="py-32 px-8 md:px-16 lg:px-24 bg-surface-container-high"
    >
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">
          <motion.div
            className="lg:col-span-4"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-5xl font-bold tracking-tighter text-primary">
              Professional Experience
            </h2>
            <p className="mt-6 text-secondary text-lg leading-relaxed">
              Hands-on leadership in business operations, data analytics, and
              strategic decision-making within B2C commerce environments.
            </p>
          </motion.div>
          <div className="lg:col-span-8 space-y-8">
            {experience.map((item, idx) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.1 }}
                transition={{ duration: 0.4, delay: idx * 0.08, ease: "easeOut" }}
                className="bg-surface-container-lowest p-10 group hover:bg-white transition-all cursor-default"
              >
                <div className="flex flex-col md:flex-row justify-between gap-4 mb-6">
                  <div className="space-y-2">
                    <div className="font-label text-[10px] uppercase tracking-[0.2em] text-secondary">
                      {item.type}
                    </div>
                    <h4 className="text-2xl md:text-3xl font-bold text-primary tracking-tight group-hover:text-tertiary-container transition-colors">
                      {item.title}
                    </h4>
                    <p className="text-on-surface-variant font-medium text-lg">
                      {item.company}
                    </p>
                  </div>
                  <div className="md:text-right flex flex-col justify-start">
                    <div className="text-base font-bold text-primary">
                      {item.location}
                    </div>
                    <div className="text-[10px] font-label uppercase tracking-widest text-secondary">
                      {item.period}
                    </div>
                  </div>
                </div>
                <ul className="space-y-4 mt-6">
                  {item.highlights.map((highlight, hIdx) => (
                    <li
                      key={hIdx}
                      className="text-on-surface-variant leading-relaxed flex gap-3"
                    >
                      <span className="text-tertiary-container mt-1.5 shrink-0">
                        <svg width="6" height="6" viewBox="0 0 6 6" fill="currentColor">
                          <circle cx="3" cy="3" r="3" />
                        </svg>
                      </span>
                      <span>{highlight}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
