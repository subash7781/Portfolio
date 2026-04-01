import { motion } from "motion/react";
import { education } from "../data/content";
import { ExternalLink, GraduationCap } from "lucide-react";

export function EducationSection() {
  return (
    <section
      id="education"
      className="py-32 px-8 md:px-16 lg:px-24 bg-surface-container-high"
    >
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">
          <div className="lg:col-span-4">
            <h2 className="text-5xl font-bold tracking-tighter text-primary">
              Academic Foundation
            </h2>
            <p className="mt-6 text-secondary text-lg leading-relaxed">
              Continuous rigorous upskilling through globally recognized
              institutions and technical certifications.
            </p>
          </div>
          <div className="lg:col-span-8 space-y-1">
            {education.map((item, idx) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="bg-surface-container-lowest p-10 flex flex-col md:flex-row justify-between gap-8 group hover:bg-white transition-all cursor-default"
              >
                <div className="flex items-start gap-6">
                  <div className="shrink-0 w-16 h-16 bg-white rounded-lg p-2 flex items-center justify-center">
                    {item.logo ? (
                      <img
                        src={item.logo}
                        alt={`${item.institution} logo`}
                        className="max-w-full max-h-full object-contain"
                        onError={(e) => {
                          (e.target as HTMLImageElement).style.display = 'none';
                        }}
                      />
                    ) : null}
                    <GraduationCap className="w-8 h-8 text-secondary" />
                  </div>
                  <div className="space-y-3">
                    <div className="font-label text-[10px] uppercase tracking-[0.2em] text-secondary">
                      {item.type}
                    </div>
                    <h4 className="text-3xl font-bold text-primary tracking-tight group-hover:text-tertiary-container transition-colors">
                      {item.title}
                    </h4>
                    <p className="text-on-surface-variant font-medium text-lg">
                      {item.institution}
                    </p>
                    {item.credentialUrl && (
                      <a
                        href={item.credentialUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 mt-2 text-sm font-medium text-tertiary-container hover:text-tertiary-fixed transition-colors"
                      >
                        <span>Show credential</span>
                        <ExternalLink size={14} />
                      </a>
                    )}
                  </div>
                </div>
                <div className="md:text-right flex flex-col justify-end">
                  <div className="text-base font-bold text-primary">
                    {item.location}
                  </div>
                  <div className="text-[10px] font-label uppercase tracking-widest text-secondary">
                    {item.period}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
