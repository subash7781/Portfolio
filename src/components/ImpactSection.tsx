import { motion, useInView, useMotionValue, useSpring, useTransform } from "motion/react";
import { useRef, useEffect } from "react";

function AnimatedNumber({ value, suffix = "" }: { value: number; suffix?: string }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  const motionValue = useMotionValue(0);
  const spring = useSpring(motionValue, { duration: 2000, bounce: 0 });
  const display = useTransform(spring, (v) =>
    suffix === "%" ? `+${v.toFixed(v < 10 ? 1 : 0)}%` : `+${Math.round(v)}`
  );

  useEffect(() => {
    if (isInView) motionValue.set(value);
  }, [isInView, motionValue, value]);

  return <motion.span ref={ref}>{display}</motion.span>;
}

function ProfitChart() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  const points = [80, 75, 85, 60, 65, 40, 45, 20, 25, 5, 10];
  const xs = [0, 40, 80, 120, 160, 200, 240, 280, 320, 360, 400];

  return (
    <div ref={ref} className="relative w-full h-28 mt-6">
      <svg viewBox="0 0 400 100" className="w-full h-full" preserveAspectRatio="none">
        <defs>
          <linearGradient id="profitGrad" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="#4ade80" stopOpacity="0.4" />
            <stop offset="100%" stopColor="#4ade80" stopOpacity="0" />
          </linearGradient>
        </defs>
        {/* Grid lines */}
        {[25, 50, 75].map((y) => (
          <line key={y} x1="0" y1={y} x2="400" y2={y} stroke="currentColor" strokeWidth="0.5" className="text-on-surface-variant/10" />
        ))}
        {/* Area fill */}
        <motion.path
          d={`M0,100 ${xs.map((x, i) => `L${x},${points[i]}`).join(" ")} L400,100 Z`}
          fill="url(#profitGrad)"
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 1, delay: 0.3 }}
        />
        {/* Line */}
        <motion.path
          d={`M${xs.map((x, i) => `${x},${points[i]}`).join(" L")}`}
          fill="none"
          stroke="#4ade80"
          strokeWidth="2.5"
          strokeLinecap="round"
          strokeLinejoin="round"
          initial={{ pathLength: 0 }}
          animate={isInView ? { pathLength: 1 } : {}}
          transition={{ duration: 1.5, ease: "easeInOut" }}
        />
        {/* Dots on key points */}
        {[2, 5, 8, 10].map((i) => (
          <motion.circle
            key={i}
            cx={xs[i]}
            cy={points[i]}
            r="4"
            fill="#4ade80"
            initial={{ opacity: 0, scale: 0 }}
            animate={isInView ? { opacity: 1, scale: 1 } : {}}
            transition={{ delay: 1.2 + i * 0.05, duration: 0.3 }}
          />
        ))}
      </svg>
      {/* Month labels */}
      <div className="flex justify-between mt-1 px-1">
        {["Jan", "Mar", "May", "Jul", "Sep", "Nov"].map((m) => (
          <span key={m} className="text-[9px] text-on-surface-variant/40 font-label uppercase tracking-wider">{m}</span>
        ))}
      </div>
    </div>
  );
}

function ProcurementChart() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  const bars = [65, 72, 68, 75, 71, 78, 74, 80, 77, 82, 79, 85];
  const months = ["J", "F", "M", "A", "M", "J", "J", "A", "S", "O", "N", "D"];

  return (
    <div ref={ref} className="w-full mt-6">
      <div className="flex items-end gap-1.5 h-24">
        {bars.map((h, i) => (
          <div key={i} className="flex-1 flex flex-col items-center gap-1">
            <motion.div
              className="w-full rounded-sm bg-primary/70 relative overflow-hidden"
              style={{ height: `${h}%` }}
              initial={{ scaleY: 0, originY: 1 }}
              animate={isInView ? { scaleY: 1 } : {}}
              transition={{ delay: 0.3 + i * 0.06, duration: 0.5, ease: "easeOut" }}
            >
              <motion.div
                className="absolute inset-0 bg-gradient-to-t from-primary to-primary/40"
                initial={{ opacity: 0 }}
                animate={isInView ? { opacity: 1 } : {}}
                transition={{ delay: 0.8 + i * 0.06 }}
              />
            </motion.div>
          </div>
        ))}
      </div>
      <div className="flex gap-1.5 mt-1">
        {months.map((m) => (
          <div key={m} className="flex-1 text-center">
            <span className="text-[8px] text-on-surface-variant/40 font-label uppercase">{m}</span>
          </div>
        ))}
      </div>
    </div>
  );
}

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
          {/* Card 1 — Profit Margin */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="impact-card group"
          >
            <div className="flex justify-between items-start">
              <motion.div
                className="w-16 h-1 bg-tertiary-container"
                initial={{ scaleX: 0 }}
                whileInView={{ scaleX: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.2 }}
                style={{ originX: 0 }}
              />
              <span className="font-label text-[9px] uppercase tracking-widest text-secondary">
                KPI: PROFIT_MAX
              </span>
            </div>
            <div className="space-y-1 mt-4">
              <div className="text-8xl font-bold text-tertiary-container tracking-tighter tabular-nums">
                <AnimatedNumber value={20} suffix="%" />
              </div>
              <h3 className="text-2xl font-bold text-primary tracking-tight">
                Profit Margin Increase
              </h3>
            </div>
            <p className="text-on-surface-variant max-w-sm leading-relaxed text-sm mt-3">
              Engineered a multi-variate regression model to identify pricing elasticity within the high-volume B2B sector, leading to optimized SKU pricing strategies.
            </p>
            <ProfitChart />
          </motion.div>

          {/* Card 2 — Procurement */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.15 }}
            className="impact-card group"
          >
            <div className="flex justify-between items-start">
              <motion.div
                className="w-16 h-1 bg-primary"
                initial={{ scaleX: 0 }}
                whileInView={{ scaleX: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.35 }}
                style={{ originX: 0 }}
              />
              <span className="font-label text-[9px] uppercase tracking-widest text-secondary">
                KPI: PROC_COST_OPT
              </span>
            </div>
            <div className="space-y-1 mt-4">
              <div className="text-8xl font-bold text-primary tracking-tighter tabular-nums">
                <AnimatedNumber value={2.5} suffix="%" />
              </div>
              <h3 className="text-2xl font-bold text-primary tracking-tight">
                Procurement Cost Reduction
              </h3>
            </div>
            <p className="text-on-surface-variant max-w-sm leading-relaxed text-sm mt-3">
              Automated supply chain auditing using Python scripts, identifying redundancies in logistics hubs and streamlining vendor selection processes.
            </p>
            <ProcurementChart />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
