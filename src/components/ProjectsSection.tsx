import { motion } from "motion/react";
import type { LucideIcon } from "lucide-react";
import { BarChart3, Database, Terminal } from "lucide-react";
import { projects } from "../data/content";

function iconForStackLabel(label: string): LucideIcon {
  if (label.includes("Python")) return Terminal;
  if (label.includes("PostgreSQL") || label.includes("SQL")) return Database;
  if (label.includes("Power BI")) return BarChart3;
  if (label.includes("Pandas")) return Terminal;
  return Database;
}

function StackIcon({ name }: { name: string }) {
  const Icon = iconForStackLabel(name);
  return (
    <Icon size={14} className="text-tertiary-container shrink-0" aria-hidden />
  );
}

export function ProjectsSection() {
  return (
    <section
      id="projects"
      className="py-32 px-8 md:px-16 lg:px-24 bg-surface-container-low"
    >
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">
          <div className="lg:col-span-4">
            <span className="font-label text-[10px] uppercase tracking-[0.3em] text-secondary block mb-4">
              Portfolio
            </span>
            <h2 className="text-5xl font-bold tracking-tighter text-primary">
              Projects
            </h2>
            <p className="mt-6 text-secondary text-lg leading-relaxed">
              Applied analytics work spanning definition, engineering, SQL
              modelling, and stakeholder-ready reporting — aligned with how
              data supports revenue and partner-facing narratives.
            </p>
            <div className="mt-10 h-1 w-16 bg-tertiary-container" aria-hidden />
          </div>

          <div className="lg:col-span-8 space-y-6">
            {projects.map((project, idx) => (
              <motion.article
                key={project.title}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.08 }}
                className="bg-surface-container-lowest border border-outline-variant/15 p-10 md:p-12 flex flex-col gap-8 group hover:shadow-2xl hover:shadow-primary/5 hover:-translate-y-0.5 transition-all duration-300"
              >
                <div className="space-y-4">
                  <div className="font-label text-[10px] uppercase tracking-[0.2em] text-secondary">
                    Case study
                  </div>
                  <h3 className="text-3xl md:text-4xl font-bold text-primary tracking-tight group-hover:text-tertiary-container transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-on-surface-variant text-lg leading-relaxed max-w-3xl">
                    {project.summary}
                  </p>
                </div>

                <div className="flex flex-wrap gap-2">
                  {project.stack.map((tech) => (
                    <span
                      key={tech}
                      className="inline-flex items-center gap-2 px-3 py-2 border border-outline-variant/25 bg-surface-container-low text-primary text-[10px] font-label uppercase tracking-[0.15em] cursor-default select-none hover:bg-primary hover:text-on-primary hover:border-primary hover:-translate-y-0.5 transition-all duration-150"
                    >
                      <StackIcon name={tech} />
                      {tech}
                    </span>
                  ))}
                </div>

                <ul className="space-y-5 border-t border-outline-variant/15 pt-10">
                  {project.highlights.map((line, i) => (
                    <li
                      key={i}
                      className="flex gap-4 text-on-surface-variant leading-relaxed pl-0"
                    >
                      <span
                        className="mt-2 h-1.5 w-1.5 shrink-0 bg-tertiary-container"
                        aria-hidden
                      />
                      <span>{line}</span>
                    </li>
                  ))}
                </ul>
              </motion.article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
