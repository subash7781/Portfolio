import type { LucideIcon } from "lucide-react";
import {
  Database,
  Terminal,
  BarChart3,
  Table,
  Sigma,
} from "lucide-react";

export const navLinks: {
  name: string;
  href: string;
}[] = [
  { name: "Home", href: "#home" },
  { name: "Experience", href: "#experience" },
  { name: "Projects", href: "#projects" },
  { name: "Contact", href: "#contact" },
];

export const skills: {
  name: string;
  icon: LucideIcon;
  level: number;
  fullWidth?: boolean;
}[] = [
  { name: "SQL", icon: Database, level: 90 },
  { name: "Python", icon: Terminal, level: 85 },
  { name: "Power BI", icon: BarChart3, level: 95 },
  { name: "Excel", icon: Table, level: 98 },
  {
    name: "Statistics & Probabilities",
    icon: Sigma,
    level: 80,
    fullWidth: true,
  },
];

export const education = [
  {
    type: "Post-Graduate Degree",
    title: "MSc in Business Analytics",
    institution: "Dublin Business School",
    location: "Dublin, IE",
    period: "2023 - 2024",
  },
  {
    type: "Certification",
    title: "Advanced Data Visualization",
    institution: "UC Davis / Claude Certified",
    location: "Remote",
    period: "Cred ID: DS-99210",
  },
  {
    type: "Technical Mastery",
    title: "SQL for Data Science",
    institution: "Professional Certificate",
    location: "Online",
    period: "2022",
  },
];

export const LINKEDIN_PROFILE_URL =
  "https://www.linkedin.com/in/subash-kannan-217520339/";

export const CONTACT_EMAIL_HREF = "mailto:imksubash007@gmail.com";

/** Hero + footer — same links everywhere */
export const socialLinks: {
  name: "LinkedIn" | "GitHub" | "Email";
  href: string;
}[] = [
  { name: "LinkedIn", href: LINKEDIN_PROFILE_URL },
  { name: "GitHub", href: "#" },
  { name: "Email", href: CONTACT_EMAIL_HREF },
];

/** Served from `public/` — Vite exposes as root URL */
export const HERO_IMAGE_SRC = "/1771043543078.jpeg";

/** Resume PDF in `public/` */
export const CV_PDF_HREF = "/Subash_cv.pdf";

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
