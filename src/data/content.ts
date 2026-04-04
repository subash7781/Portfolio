import type { LucideIcon } from "lucide-react";
import {
  Database,
  Terminal,
  BarChart3,
  Table,
  GitBranch,
  Cloud,
  LineChart,
  Layers,
} from "lucide-react";

export const navLinks: {
  name: string;
  href: string;
}[] = [
  { name: "Home", href: "#home" },
  { name: "Experience", href: "#experience" },
  { name: "Projects", href: "#projects" },
  { name: "Education", href: "#education" },
  { name: "Contact", href: "#contact" },
];

export type SkillTier = "must-have" | "good-to-have" | "edge";

export const skills: {
  name: string;
  icon: LucideIcon;
  level: number;
  tier: SkillTier;
  fullWidth?: boolean;
}[] = [
  { name: "SQL", icon: Database, level: 90, tier: "must-have" },
  { name: "Power BI", icon: BarChart3, level: 95, tier: "must-have" },
  { name: "Excel / Pivot Tables", icon: Table, level: 98, tier: "must-have" },
  { name: "Python", icon: Terminal, level: 85, tier: "must-have" },
  { name: "Tableau", icon: LineChart, level: 75, tier: "good-to-have" },
  { name: "Data Modelling", icon: Layers, level: 80, tier: "good-to-have" },
  { name: "ETL Basics", icon: GitBranch, level: 72, tier: "good-to-have" },
  { name: "Azure / Snowflake", icon: Cloud, level: 60, tier: "edge" },
];

/** Visible skills pill row on Hero — above the fold */
export const heroSkillPills = [
  "SQL", "Python", "Power BI", "Excel", "Tableau",
];

export const experience = [
  {
    type: "Full-time",
    title: "Business Operations Analyst",
    company: "Sri Ganapathy Stone Works",
    location: "Coimbatore, India",
    period: "Dec 2024 - Dec 2025",
    highlights: [
      "Drove a 20% increase in company profitability by conducting financial modelling and revenue analysis using Excel and SQL, identifying pricing inefficiencies — directly translating data insights into strategic decisions within a B2B commerce environment.",
      "Led market research and competitive analysis to identify growth opportunities, inform pricing strategies, and feed business targets — mirroring the market intelligence responsibilities central to enterprise account management functions.",
      "Performed data consolidation and analysis on daily sales, inventory, and procurement data using SQL and Excel, enabling real-time performance tracking and stakeholder reporting aligned with data-driven lead management and operational support.",
      "Built and maintained interactive Excel dashboards and KPI reports, delivering clear data storytelling to senior leadership — directly supporting performance tracking and showcase-style reporting for business partners.",
      "Collaborated cross-functionally with suppliers and operations teams, applying KPI-backed insights to reduce procurement costs by 2.5% and improve supply chain efficiency — demonstrating strong stakeholder engagement and organisational planning skills.",
      "Resolved operational and supply-demand imbalances by applying statistical analysis and data modelling, improving cost control and reinforcing data-backed process improvements in a fast-paced B2B setting.",
      "Streamlined workflows through continuous process improvement and automation initiatives, identifying performance gaps and implementing solutions — showcasing the proactive, detail-oriented approach required for general operational support.",
    ],
  },
];

export const education = [
  {
    type: "Undergraduate Degree",
    title: "BSc Computer Science",
    institution: "PSG College of Arts and Science",
    location: "Coimbatore, India",
    period: "2020 - 2023",
    logo: "/psg-logo.png",
  },
  {
    type: "Post-Graduate Degree",
    title: "MSc in Business Analytics",
    institution: "Dublin Business School",
    location: "Dublin, Ireland",
    period: "2026 - Present",
    logo: "/dbs-logo-new.png",
  },
  {
    type: "Certification",
    title: "Claude 101",
    institution: "Anthropic",
    location: "Remote",
    period: "2026",
    credentialUrl: "https://verify.skilljar.com/c/2zoacjan4ehz",
    logo: "/anthropic-logo.png",
  },
  {
    type: "Certification",
    title: "SQL for Data Science",
    institution: "University of California, Davis, United States of America",
    location: "Coursera",
    period: "2022",
    credentialUrl:
      "https://www.coursera.org/account/accomplishments/verify/YWV7WCFCFDEC?utm_source=link&utm_medium=certificate&utm_content=cert_image&utm_campaign=sharing_cta&utm_product=course",
    logo: "/uc-davis-logo.png",
  },
];

export const LINKEDIN_PROFILE_URL =
  "https://www.linkedin.com/in/subash-kannan-217520339/";

export const CONTACT_EMAIL_HREF = "mailto:subashkannan.work@gmail.com";

/** Gmail compose URL for direct Gmail opening */
export const GMAIL_COMPOSE_URL =
  "https://mail.google.com/mail/?view=cm&fs=1&to=subashkannan.work@gmail.com";

/** Client contact details for reference */
export const clientDetails = {
  name: "Subash Kannan",
  email: "subashkannan.work@gmail.com",
  phone: "+353 874380146",
};

/** Hero + footer — same links everywhere */
export const socialLinks: {
  name: "LinkedIn" | "GitHub" | "Email";
  href: string;
}[] = [
  { name: "LinkedIn", href: LINKEDIN_PROFILE_URL },
  { name: "GitHub", href: "https://github.com/subash7781" },
  { name: "Email", href: CONTACT_EMAIL_HREF },
];

/** Served from `public/` — Vite exposes as root URL */
export const HERO_IMAGE_SRC = "/image.png";

/** Resume PDF in `public/` */
export const CV_PDF_HREF = "https://drive.google.com/uc?export=download&id=1B5Mz8yAkmbdaRVkWEUuaCC3fVnp4F9I6";

export const projects: {
  title: string;
  summary: string;
  stack: string[];
  highlights: string[];
}[] = [
  {
    title: "End-to-End Customer Analytics",
    summary:
      "Built an end-to-end customer analytics initiative using Python, SQL (PostgreSQL), and Power BI to deliver data-driven business insights across the customer lifecycle.",
    stack: ["Python", "SQL (PostgreSQL)", "Power BI", "Pandas"],
    highlights: [
      "Defined business problems and translated company goals into structured, data-driven analytical questions, producing measurable insights aligned with revenue performance targets — reflective of market research and insight generation for business strategy.",
      "Cleaned and engineered customer datasets using Python (Pandas), handling missing values, standardising formats, and building features such as customer segmentation and purchase frequency — skills directly applicable to lead segmentation and qualification.",
      "Executed advanced SQL queries (PostgreSQL) including window functions and subqueries to evaluate revenue by customer segment, top-performing products, and subscription impact — demonstrating strong data processing capability valued for commerce analytics.",
      "Developed interactive Power BI dashboards with KPIs, charts, and slicers to visualise revenue performance and customer trends for non-technical stakeholders — directly applicable to building partner showcases and performance case studies.",
      "Delivered analytical reports and AI-assisted presentations translating complex findings into actionable business recommendations, showcasing written communication and storytelling skills for diverse audiences.",
    ],
  },
];
