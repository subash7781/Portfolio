import { motion, useInView, useMotionValue, useSpring, useTransform, AnimatePresence } from "motion/react";
import { useRef, useEffect, useState, useCallback, type MouseEvent } from "react";

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

// ── ProfitChart SVG config ──────────────────────────────────────────────────
const PW = 420;
const PH = 140;
const PP_L = 28;
const PP_R = 8;
const PP_T = 14;
const PP_B = 24;
const PC_W = PW - PP_L - PP_R;
const PC_H = PH - PP_T - PP_B;

const LINE_DATA = [
  { month: "Jan", short: "J", value: 4 },
  { month: "Feb", short: "F", value: 6 },
  { month: "Mar", short: "M", value: 5 },
  { month: "Apr", short: "A", value: 8 },
  { month: "May", short: "M", value: 7 },
  { month: "Jun", short: "J", value: 10 },
  { month: "Jul", short: "J", value: 12 },
  { month: "Aug", short: "A", value: 14 },
  { month: "Sep", short: "S", value: 16 },
  { month: "Oct", short: "O", value: 17 },
  { month: "Nov", short: "N", value: 19 },
  { month: "Dec", short: "D", value: 20 },
];
const P_MAX = 22;
const P_COUNT = LINE_DATA.length;

function ptX(i: number) {
  return PP_L + (i / (P_COUNT - 1)) * PC_W;
}
function ptY(v: number) {
  return PP_T + PC_H - (v / P_MAX) * PC_H;
}

function buildLinePath() {
  return LINE_DATA.map((d, i) => `${i === 0 ? "M" : "L"}${ptX(i).toFixed(1)},${ptY(d.value).toFixed(1)}`).join(" ");
}
function buildAreaPath() {
  const line = LINE_DATA.map((d, i) => `${i === 0 ? "M" : "L"}${ptX(i).toFixed(1)},${ptY(d.value).toFixed(1)}`).join(" ");
  return `${line} L${ptX(P_COUNT - 1).toFixed(1)},${(PP_T + PC_H).toFixed(1)} L${PP_L.toFixed(1)},${(PP_T + PC_H).toFixed(1)} Z`;
}

function ProfitChart() {
  const svgRef = useRef<SVGSVGElement>(null);
  const wrapRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(wrapRef, { once: true });
  const [animated, setAnimated] = useState(false);
  const [hovered, setHovered] = useState<number | null>(null);

  useEffect(() => {
    if (isInView) {
      const t = setTimeout(() => setAnimated(true), 100);
      return () => clearTimeout(t);
    }
  }, [isInView]);

  const handleMouseMove = useCallback((e: MouseEvent<SVGSVGElement>) => {
    const svg = svgRef.current;
    if (!svg) return;
    const rect = svg.getBoundingClientRect();
    const svgX = (e.clientX - rect.left) * (PW / rect.width);
    if (svgX < PP_L || svgX > PP_L + PC_W) { setHovered(null); return; }
    // snap to nearest point
    const frac = (svgX - PP_L) / PC_W;
    const idx = Math.round(frac * (P_COUNT - 1));
    setHovered(Math.max(0, Math.min(P_COUNT - 1, idx)));
  }, []);

  const gridVals = [5, 10, 15, 20];

  return (
    <div ref={wrapRef} className="w-full mt-4 select-none cursor-crosshair">
      <svg
        ref={svgRef}
        viewBox={`0 0 ${PW} ${PH}`}
        className="w-full"
        style={{ height: 160, overflow: "visible" }}
        onMouseMove={handleMouseMove}
        onMouseLeave={() => setHovered(null)}
      >
        <defs>
          <linearGradient id="lineAreaGrad" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="#4ade80" stopOpacity="0.35" />
            <stop offset="100%" stopColor="#4ade80" stopOpacity="0.02" />
          </linearGradient>
          <filter id="dotGlow">
            <feGaussianBlur stdDeviation="2.5" result="blur" />
            <feMerge><feMergeNode in="blur" /><feMergeNode in="SourceGraphic" /></feMerge>
          </filter>
        </defs>

        {/* Grid lines + Y labels */}
        {gridVals.map((v) => {
          const y = ptY(v);
          return (
            <g key={v}>
              <line x1={PP_L} y1={y} x2={PW - PP_R} y2={y}
                stroke="currentColor" strokeWidth="0.4"
                strokeDasharray="3 4"
                style={{ color: "rgba(74,222,128,0.15)" }}
              />
              <text x={PP_L - 4} y={y + 3.5} textAnchor="end"
                fontSize="7" fill="rgba(74,222,128,0.4)" fontFamily="monospace">
                {v}%
              </text>
            </g>
          );
        })}

        {/* Baseline */}
        <line x1={PP_L} y1={PP_T + PC_H} x2={PW - PP_R} y2={PP_T + PC_H}
          stroke="currentColor" strokeWidth="1" style={{ color: "rgba(74,222,128,0.25)" }} />

        {/* Area fill */}
        <motion.path
          d={buildAreaPath()}
          fill="url(#lineAreaGrad)"
          initial={{ opacity: 0 }}
          animate={animated ? { opacity: 1 } : { opacity: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        />

        {/* Line */}
        <motion.path
          d={buildLinePath()}
          fill="none"
          stroke="#4ade80"
          strokeWidth="2.5"
          strokeLinecap="round"
          strokeLinejoin="round"
          initial={{ pathLength: 0 }}
          animate={animated ? { pathLength: 1 } : { pathLength: 0 }}
          transition={{ duration: 1.6, ease: "easeInOut" }}
        />

        {/* Static dots on all points */}
        {LINE_DATA.map((d, i) => (
          <motion.circle
            key={i}
            cx={ptX(i)} cy={ptY(d.value)} r={hovered === i ? 6 : 3}
            fill={hovered === i ? "#ffffff" : "#4ade80"}
            stroke={hovered === i ? "#4ade80" : "transparent"}
            strokeWidth="2"
            filter={hovered === i ? "url(#dotGlow)" : undefined}
            initial={{ opacity: 0, scale: 0 }}
            animate={animated ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0 }}
            transition={{ delay: 1.4 + i * 0.04, duration: 0.25, type: "spring", stiffness: 300 }}
            style={{ transition: "r 0.12s, fill 0.12s" }}
          />
        ))}

        {/* Crosshair vertical line */}
        {hovered !== null && (
          <line
            x1={ptX(hovered)} y1={PP_T}
            x2={ptX(hovered)} y2={PP_T + PC_H}
            stroke="#4ade80" strokeWidth="0.8"
            strokeDasharray="3 3" opacity="0.5"
          />
        )}

        {/* Horizontal crosshair line */}
        {hovered !== null && (
          <line
            x1={PP_L} y1={ptY(LINE_DATA[hovered].value)}
            x2={PW - PP_R} y2={ptY(LINE_DATA[hovered].value)}
            stroke="#4ade80" strokeWidth="0.6"
            strokeDasharray="2 4" opacity="0.35"
          />
        )}

        {/* Tooltip bubble */}
        {hovered !== null && (() => {
          const d = LINE_DATA[hovered];
          const cx = ptX(hovered);
          const cy = ptY(d.value) - 16;
          const bw = 72;
          const bh = 20;
          const bx = Math.min(Math.max(cx - bw / 2, PP_L), PW - PP_R - bw);
          return (
            <g>
              <rect x={bx} y={cy - bh / 2} width={bw} height={bh} rx="10"
                fill="#22543d" opacity="0.92" />
              <text x={bx + bw / 2} y={cy + 4.5} textAnchor="middle"
                fontSize="9" fontWeight="700" fill="#ffffff" fontFamily="monospace" letterSpacing="0.5">
                {d.month} · +{d.value}%
              </text>
            </g>
          );
        })()}

        {/* Month labels */}
        {LINE_DATA.map((d, i) => (
          <text key={i}
            x={ptX(i)} y={PP_T + PC_H + 13}
            textAnchor="middle" fontSize="8"
            fontWeight={hovered === i ? "700" : "400"}
            fill={hovered === i ? "#4ade80" : "rgba(74,222,128,0.4)"}
            fontFamily="monospace"
            style={{ transition: "fill 0.12s" }}
          >
            {d.short}
          </text>
        ))}
      </svg>
    </div>
  );
}

// SVG dimensions
const W = 420;
const H = 130;
const PAD_L = 28;
const PAD_R = 8;
const PAD_T = 12;
const PAD_B = 24;
const CHART_W = W - PAD_L - PAD_R;
const CHART_H = H - PAD_T - PAD_B;

const BAR_DATA = [
  { month: "Jan", short: "J", value: 65 },
  { month: "Feb", short: "F", value: 58 },
  { month: "Mar", short: "M", value: 72 },
  { month: "Apr", short: "A", value: 61 },
  { month: "May", short: "M", value: 78 },
  { month: "Jun", short: "J", value: 70 },
  { month: "Jul", short: "J", value: 82 },
  { month: "Aug", short: "A", value: 75 },
  { month: "Sep", short: "S", value: 88 },
  { month: "Oct", short: "O", value: 80 },
  { month: "Nov", short: "N", value: 91 },
  { month: "Dec", short: "D", value: 85 },
];

const MAX_VAL = 100;
const BAR_COUNT = BAR_DATA.length;
const BAR_TOTAL_W = CHART_W / BAR_COUNT;
const BAR_GAP = 3;
const BAR_W = BAR_TOTAL_W - BAR_GAP;

function barX(i: number) { return PAD_L + i * BAR_TOTAL_W + BAR_GAP / 2; }
function barY(v: number) { return PAD_T + CHART_H - (v / MAX_VAL) * CHART_H; }
function barH(v: number) { return (v / MAX_VAL) * CHART_H; }

function ProcurementChart() {
  const svgRef = useRef<SVGSVGElement>(null);
  const wrapRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(wrapRef, { once: true });
  const [hovered, setHovered] = useState<number | null>(null);
  const [mousePos, setMousePos] = useState<{ x: number; y: number } | null>(null);
  const [animated, setAnimated] = useState(false);

  useEffect(() => {
    if (isInView) {
      const t = setTimeout(() => setAnimated(true), 100);
      return () => clearTimeout(t);
    }
  }, [isInView]);

  const handleMouseMove = useCallback((e: MouseEvent<SVGSVGElement>) => {
    const svg = svgRef.current;
    if (!svg) return;
    const rect = svg.getBoundingClientRect();
    const scaleX = W / rect.width;
    const scaleY = H / rect.height;
    const svgX = (e.clientX - rect.left) * scaleX;
    const svgY = (e.clientY - rect.top) * scaleY;
    // which bar?
    const idx = Math.floor((svgX - PAD_L) / BAR_TOTAL_W);
    if (idx >= 0 && idx < BAR_COUNT && svgX >= PAD_L && svgX <= PAD_L + CHART_W) {
      setHovered(idx);
      setMousePos({ x: svgX, y: svgY });
    } else {
      setHovered(null);
      setMousePos(null);
    }
  }, []);

  const handleMouseLeave = () => { setHovered(null); setMousePos(null); };

  const gridLines = [25, 50, 75, 100];

  return (
    <div ref={wrapRef} className="w-full mt-4 select-none cursor-crosshair">
      <svg
        ref={svgRef}
        viewBox={`0 0 ${W} ${H}`}
        className="w-full"
        style={{ height: 160, overflow: "visible" }}
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
      >
        <defs>
          <linearGradient id="barGradNormal" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="#4a90d9" stopOpacity="0.95" />
            <stop offset="100%" stopColor="#1e3a5f" stopOpacity="1" />
          </linearGradient>
          <linearGradient id="barGradHover" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="#7bc8ff" stopOpacity="1" />
            <stop offset="100%" stopColor="#1a6ab5" stopOpacity="1" />
          </linearGradient>
          <filter id="barGlow">
            <feGaussianBlur stdDeviation="2" result="blur" />
            <feMerge><feMergeNode in="blur" /><feMergeNode in="SourceGraphic" /></feMerge>
          </filter>
        </defs>

        {/* Grid lines */}
        {gridLines.map((v) => {
          const y = PAD_T + CHART_H - (v / MAX_VAL) * CHART_H;
          return (
            <g key={v}>
              <line x1={PAD_L} y1={y} x2={W - PAD_R} y2={y}
                stroke="currentColor" strokeWidth="0.4"
                strokeDasharray={v === 100 ? "0" : "3 4"}
                style={{ color: "rgba(30,58,95,0.15)" }}
              />
              <text x={PAD_L - 4} y={y + 3.5} textAnchor="end"
                fontSize="7" fill="rgba(30,58,95,0.35)" fontFamily="monospace">
                {v}
              </text>
            </g>
          );
        })}

        {/* Baseline */}
        <line x1={PAD_L} y1={PAD_T + CHART_H} x2={W - PAD_R} y2={PAD_T + CHART_H}
          stroke="currentColor" strokeWidth="1" style={{ color: "rgba(30,58,95,0.3)" }} />

        {/* Bars */}
        {BAR_DATA.map((bar, i) => {
          const x = barX(i);
          const h = barH(bar.value);
          const y = barY(bar.value);
          const isH = hovered === i;

          return (
            <g key={i}>
              {/* Bar shadow */}
              {isH && (
                <rect x={x + 1} y={y + 3} width={BAR_W} height={h}
                  fill="rgba(30,58,95,0.18)" rx="2" />
              )}
              {/* Main bar */}
              <motion.rect
                x={x} rx={2}
                width={BAR_W}
                initial={{ height: 0, y: PAD_T + CHART_H }}
                animate={animated ? {
                  height: h,
                  y: y,
                } : { height: 0, y: PAD_T + CHART_H }}
                transition={{
                  delay: 0.15 + i * 0.055,
                  duration: 0.55,
                  ease: [0.34, 1.4, 0.64, 1],
                  height: { duration: 0.55 },
                  y: { duration: 0.55 },
                }}
                fill={isH ? "url(#barGradHover)" : "url(#barGradNormal)"}
                filter={isH ? "url(#barGlow)" : undefined}
                style={{ transition: "fill 0.15s" }}
              />
              {/* Top cap highlight */}
              <motion.rect
                x={x + 1} rx={2}
                width={BAR_W - 2} height={3}
                initial={{ opacity: 0, y: PAD_T + CHART_H }}
                animate={animated ? {
                  opacity: isH ? 0.8 : 0.4,
                  y: y,
                } : { opacity: 0, y: PAD_T + CHART_H }}
                transition={{ delay: 0.15 + i * 0.055, duration: 0.55 }}
                fill={isH ? "#a8d8ff" : "#6db3e8"}
              />
              {/* Month label */}
              <text
                x={x + BAR_W / 2}
                y={PAD_T + CHART_H + 13}
                textAnchor="middle"
                fontSize="8"
                fontWeight={isH ? "700" : "400"}
                fill={isH ? "#1e3a5f" : "rgba(30,58,95,0.4)"}
                fontFamily="monospace"
                style={{ transition: "fill 0.15s, font-weight 0.15s" }}
              >
                {bar.short}
              </text>
            </g>
          );
        })}

        {/* Crosshair vertical line */}
        {hovered !== null && mousePos && (
          <line
            x1={barX(hovered) + BAR_W / 2}
            y1={PAD_T}
            x2={barX(hovered) + BAR_W / 2}
            y2={PAD_T + CHART_H}
            stroke="#4a90d9"
            strokeWidth="0.8"
            strokeDasharray="3 3"
            opacity="0.5"
          />
        )}

        {/* Hover tooltip bubble in SVG */}
        {hovered !== null && (() => {
          const bar = BAR_DATA[hovered];
          const cx = barX(hovered) + BAR_W / 2;
          const cy = barY(bar.value) - 14;
          const bw = 64;
          const bh = 20;
          const bx = Math.min(Math.max(cx - bw / 2, PAD_L), W - PAD_R - bw);
          return (
            <g>
              <rect x={bx} y={cy - bh / 2} width={bw} height={bh} rx="10"
                fill="#1e3a5f" opacity="0.92" />
              <text x={bx + bw / 2} y={cy + 4.5} textAnchor="middle"
                fontSize="9" fontWeight="700" fill="#ffffff" fontFamily="monospace" letterSpacing="0.5">
                {bar.month} · {bar.value}%
              </text>
            </g>
          );
        })()}
      </svg>
    </div>
  );
}export function ImpactSection() {
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
              <motion.div
                className="text-8xl font-bold text-tertiary-container tracking-tighter tabular-nums cursor-default select-none"
                whileHover={{ scale: 1.05, x: 6 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <AnimatedNumber value={20} suffix="%" />
              </motion.div>
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
              <motion.div
                className="text-8xl font-bold text-primary tracking-tighter tabular-nums cursor-default select-none"
                whileHover={{ scale: 1.05, x: 6 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <AnimatedNumber value={2.5} suffix="%" />
              </motion.div>
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
