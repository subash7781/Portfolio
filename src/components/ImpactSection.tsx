import { motion } from "motion/react";

const impactMetrics = [
  {
    kpi: "PROFIT_MAX",
    value: "+20%",
    label: "Profit Margin Increase",
    description:
      "Engineered a multi-variate regression model to identify pricing elasticity within the high-volume B2C sector, leading to optimized SKU pricing strategies.",
    color: "text-tertiary-container",
    barColor: "bg-tertiary-container",
    chart: (
      <svg viewBox="0 0 400 100" className="w-full h-20">
        <path
          d="M0,80 L40,75 L80,85 L120,60 L160,65 L200,40 L240,45 L280,20 L320,25 L360,5 L400,10"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          className="text-tertiary-container"
        />
        <path
          d="M0,80 L40,75 L80,85 L120,60 L160,65 L200,40 L240,45 L280,20 L320,25 L360,5 L400,10 V100 H0 Z"
          fill="currentColor"
          className="text-tertiary-container/10"
        />
      </svg>
    ),
  },
  {
    kpi: "PROC_COST_OPT",
    value: "+2.5%",
    label: "Procurement Cost Reduction",
    description:
      "Automated supply chain auditing using Python scripts, identifying redundancies in logistics hubs and streamlining vendor selection processes.",
    color: "text-primary",
    barColor: "bg-primary",
    chart: (
      <svg viewBox="0 0 400 100" className="w-full h-20">
        <path
          d="M0,20 L50,25 L100,22 L150,30 L200,28 L250,35 L300,32 L350,40 L400,38"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          className="text-primary"
        />
        <path
          d="M0,20 L50,25 L100,22 L150,30 L200,28 L250,35 L300,32 L350,40 L400,38 V100 H0 Z"
          fill="currentColor"
          className="text-primary/10"
        />
      </svg>
    ),
  },
];

export function ImpactSection() {
  return (
    <section className="bg-surface-container-low py-32 px-8 md:px-16 lg:px-24">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-baseline mb-20 gap-4">
          <h2 className="text-5xl font-bold tracking-tighter text-primary">
            Quantifiable Impact
          </h2>
          <span className="font-label text-[10px] uppercase tracking-[0.3em] text-secondary">
            Historical Performance Indices
          </span>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-1 bg-outline-variant/10">
          {impactMetrics.map((metric, idx) => (
            <motion.div
              key={metric.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="impact-card"
            >
              <div className="flex justify-between items-start">
                <div className={`w-16 h-1 ${metric.barColor}`} />
                <span className="font-label text-[9px] uppercase tracking-widest text-secondary">
                  KPI: {metric.kpi}
                </span>
              </div>
              <div className="space-y-2">
                <div
                  className={`text-8xl font-bold ${metric.color} tracking-tighter`}
                >
                  {metric.value}
                </div>
                <h3 className="text-2xl font-bold text-primary tracking-tight">
                  {metric.label}
                </h3>
              </div>
              <p className="text-on-surface-variant max-w-sm leading-relaxed">
                {metric.description}
              </p>
              <div className="pt-12">{metric.chart}</div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
