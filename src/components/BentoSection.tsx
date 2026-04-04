import { motion } from "motion/react";
import { skills } from "../data/content";

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

          <div className="space-y-4">
            {skills.map((skill) => (
              <div
                key={skill.name}
                className="cursor-default"
                style={{ padding: "6px 8px", borderRadius: "6px", transition: "background 200ms ease" }}
                onMouseEnter={(e) => {
                  const t = e.currentTarget;
                  t.style.background = "rgba(152,249,148,0.08)";
                  const fill = t.querySelector('.bar-fill') as HTMLElement | null;
                  const pct = t.querySelector('.bar-pct') as HTMLElement | null;
                  if (fill) fill.style.backgroundColor = "#b8fdb5";
                  if (pct) pct.style.color = "#98f994";
                }}
                onMouseLeave={(e) => {
                  const t = e.currentTarget;
                  t.style.background = "transparent";
                  const fill = t.querySelector('.bar-fill') as HTMLElement | null;
                  const pct = t.querySelector('.bar-pct') as HTMLElement | null;
                  if (fill) fill.style.backgroundColor = "#98f994";
                  if (pct) pct.style.color = "rgba(152,249,148,0.7)";
                }}
              >
                <div className="flex items-center justify-between mb-1.5">
                  <div className="flex items-center gap-2">
                    <skill.icon size={16} className="bar-icon shrink-0" style={{ color: "#98f994", transition: "color 150ms ease" }} />
                    <span className="bar-label" style={{ fontSize: "11px", fontWeight: 700, letterSpacing: "0.15em", textTransform: "uppercase", color: "#ffffff", transition: "color 150ms ease" }}>
                      {skill.name}
                    </span>
                  </div>
                  <span className="bar-pct" style={{ fontSize: "10px", color: "rgba(152,249,148,0.7)", transition: "color 150ms ease" }}>
                    {skill.level}%
                  </span>
                </div>
                <div style={{ height: "2px", backgroundColor: "rgba(152,249,148,0.2)", borderRadius: "9999px", overflow: "hidden" }}>
                  <motion.div
                    className="bar-fill"
                    initial={{ width: 0 }}
                    whileInView={{ width: `${skill.level}%` }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.2, ease: "easeOut" }}
                    style={{ height: "100%", backgroundColor: "#98f994", borderRadius: "9999px", transition: "background-color 150ms ease" }}
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
