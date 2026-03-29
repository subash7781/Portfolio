import { motion } from "motion/react";
import { skills } from "../data/content";

export function BentoSection() {
  return (
    <section className="py-32 px-8 md:px-16 lg:px-24">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-8">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="lg:col-span-7 bg-surface-container-low p-16 flex flex-col justify-between"
        >
          <div className="space-y-8">
            <span className="font-label text-[10px] uppercase tracking-[0.3em] text-secondary">
              Executive Summary
            </span>
            <h2 className="text-4xl md:text-6xl font-bold leading-[0.9] tracking-tighter text-primary">
              Architecting data flows for the next era of social commerce.
            </h2>
            <p className="text-xl text-on-surface-variant max-w-xl leading-relaxed">
              With an MSc from Dublin Business School and a rigorous background
              in statistical modeling, I specialize in transforming complex
              datasets into actionable intelligence. My current focus lies in
              the emerging TikTok Commerce landscape, optimizing conversion
              funnels for B2C e-commerce brands.
            </p>
          </div>
          <div className="mt-16 flex items-center gap-4 border-t border-outline-variant/20 pt-10">
            <div className="w-14 h-14 bg-primary flex items-center justify-center text-on-primary font-bold text-xl">
              SK
            </div>
            <div>
              <div className="text-base font-bold text-primary">
                Subash Kannan
              </div>
              <div className="text-[10px] text-secondary font-label uppercase tracking-widest">
                Analyst & Strategist
              </div>
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="lg:col-span-5 bg-primary p-16 text-on-primary"
        >
          <div className="mb-16">
            <span className="font-label text-[10px] uppercase tracking-[0.3em] text-on-primary-container">
              Technical Toolkit
            </span>
            <h3 className="text-3xl font-bold mt-4 tracking-tight">
              Core Competencies
            </h3>
          </div>
          <div className="grid grid-cols-2 gap-y-12 gap-x-8">
            {skills.map((skill) => (
              <div
                key={skill.name}
                className={`space-y-4 ${skill.fullWidth ? "col-span-2" : ""}`}
              >
                <div className="flex items-center gap-3">
                  <skill.icon size={20} className="text-tertiary-fixed" />
                  <div className="text-[10px] font-bold tracking-[0.2em] uppercase font-label">
                    {skill.name}
                  </div>
                </div>
                <div className="skill-bar-bg">
                  <motion.div
                    initial={{ width: 0 }}
                    whileInView={{ width: `${skill.level}%` }}
                    viewport={{ once: true }}
                    transition={{ duration: 1.5, ease: "easeOut" }}
                    className="skill-bar-fill"
                  />
                </div>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
