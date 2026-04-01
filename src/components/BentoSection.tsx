import { motion } from "motion/react";
import { skills } from "../data/content";
import type { SkillTier } from "../data/content";

const tierConfig: Record<SkillTier, { label: string; color: string; dot: string }> = {
  "must-have":    { label: "Must-Have",    color: "bg-tertiary-container/20 text-tertiary-container border border-tertiary-container/30", dot: "bg-tertiary-container" },
  "good-to-have": { label: "Good-to-Have", color: "bg-primary/10 text-primary border border-primary/20",                                 dot: "bg-primary" },
  "edge":         { label: "Edge Skill",   color: "bg-secondary/10 text-secondary border border-secondary/20",                          dot: "bg-secondary" },
};

export function BentoSection() {
  return (
    <section className="py-32 px-8 md:px-16 lg:px-24">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-8">
        {/* Bio card */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="lg:col-span-7 bg-surface-container-low p-16 flex flex-col justify-between"
        >
          <div className="space-y-8">
            <span className="font-label text-[10px] uppercase tracking-[0.3em] text-secondary">
              About Me
            </span>
            <h2 className="text-4xl md:text-6xl font-bold leading-[0.9] tracking-tighter text-primary">
              Turning data into decisions — fast, clear, actionable.
            </h2>
            <p className="text-xl text-on-surface-variant max-w-xl leading-relaxed">
              MSc in Business Analytics from Dublin Business School. I work
              across the full data pipeline — from raw SQL queries and Python
              scripts to Power BI dashboards that non-technical teams actually
              use. Currently open to data analyst roles in Dublin.
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
                Data Analyst · Dublin, Ireland
              </div>
            </div>
          </div>
        </motion.div>

        {/* Skills card */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="lg:col-span-5 bg-primary p-12 text-on-primary"
        >
          <div className="mb-10">
            <h3 className="text-3xl font-bold tracking-tight">
              Technical Stack
            </h3>

          </div>

          <div className="space-y-6">
            {skills.map((skill) => {
              const cfg = tierConfig[skill.tier];
              return (
                <div key={skill.name} className="space-y-2 group">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <skill.icon size={16} className="text-tertiary-fixed shrink-0" />
                      <span className="text-[11px] font-bold tracking-[0.15em] uppercase font-label">
                        {skill.name}
                      </span>
                    </div>
                  </div>
                  <div className="skill-bar-bg">
                    <motion.div
                      initial={{ width: 0 }}
                      whileInView={{ width: `${skill.level}%` }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.2, ease: "easeOut" }}
                      className="skill-bar-fill"
                    />
                  </div>
                  <div className="text-right">
                    <span className="text-[10px] text-on-primary-container/50 font-label">
                      {skill.level}%
                    </span>
                  </div>
                </div>
              );
            })}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
