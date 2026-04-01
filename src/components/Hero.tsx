import { motion } from "motion/react";
import { Linkedin, Github, Mail, MapPin, ShieldCheck } from "lucide-react";
import { HERO_IMAGE_SRC, socialLinks, heroSkillPills } from "../data/content";

const socialIcons = {
  LinkedIn: Linkedin,
  GitHub: Github,
  Email: Mail,
} as const;

export function Hero() {
  return (
    <section id="home" className="pt-40 pb-24 px-8 md:px-16 lg:px-24">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-12 gap-12 items-center">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="md:col-span-8 space-y-8"
        >
          <div className="space-y-4">
            <span className="font-label text-[10px] uppercase tracking-[0.3em] text-secondary">
              Data Analyst — Dublin, Ireland
            </span>
            <h1 className="text-7xl md:text-9xl font-bold tracking-tighter text-primary leading-[0.85]">
              Subash
              <br />
              Kannan
            </h1>
          </div>

          <div className="flex items-center gap-2 text-secondary font-label text-xs uppercase tracking-[0.2em]">
            <MapPin size={16} className="text-primary" />
            <span>Dublin, Ireland</span>
          </div>

          <p className="max-w-xl text-lg text-on-surface-variant leading-relaxed font-body">
            Data analyst based in Dublin. I turn messy datasets into clear
            decisions using SQL, Python, and Power BI. MSc in Business Analytics
            from Dublin Business School.
          </p>

          {/* Work authorisation badge */}
          <motion.div
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.5 }}
            className="inline-flex items-center gap-2 bg-tertiary-fixed/10 border border-tertiary-fixed/30 text-primary px-4 py-2 rounded-full"
          >
            <ShieldCheck size={14} className="text-tertiary-container" />
            <span className="font-label text-[11px] uppercase tracking-[0.2em] font-bold">
              Stamp 1G — Work Authorised in Ireland
            </span>
          </motion.div>

          {/* Skills pill row — visible above the fold */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.5 }}
            className="flex flex-wrap gap-2"
          >
            {heroSkillPills.map((skill, i) => (
              <motion.span
                key={skill}
                initial={{ opacity: 0, scale: 0.85 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.55 + i * 0.07, type: "tween", duration: 0.2 }}
                className="bg-primary text-on-primary font-label text-[11px] uppercase tracking-[0.15em] px-4 py-2 font-bold cursor-default select-none"
                style={{ display: "inline-block", transition: "transform 80ms linear" }}
                onMouseEnter={e => (e.currentTarget.style.transform = "scale(1.08) translateY(-2px)")}
                onMouseLeave={e => (e.currentTarget.style.transform = "scale(1) translateY(0px)")}
              >
                {skill}
              </motion.span>
            ))}
          </motion.div>

          <div className="flex flex-wrap gap-8 pt-4">
            {socialLinks.map((social) => {
              const Icon = socialIcons[social.name];
              const external =
                social.href.startsWith("http://") ||
                social.href.startsWith("https://");
              return (
                <a
                  key={social.name}
                  href={social.href}
                  {...(external
                    ? { target: "_blank", rel: "noopener noreferrer" }
                    : {})}
                  className="group flex items-center gap-2 text-primary font-bold transition-all"
                >
                  <Icon
                    size={18}
                    className="group-hover:scale-110 transition-transform"
                  />
                  <span className="border-b-2 border-primary group-hover:border-tertiary-fixed transition-colors">
                    {social.name}
                  </span>
                </a>
              );
            })}
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="md:col-span-4 relative"
        >
          <div className="aspect-[4/5] bg-surface-container-high relative overflow-hidden">
            <img
              alt="Subash Kannan"
              className="w-full h-full object-cover"
              src={HERO_IMAGE_SRC}
              width={480}
              height={600}
              decoding="async"
            />
            <div className="absolute inset-0 border-[24px] border-white/10 pointer-events-none" />
          </div>
          <div className="absolute -bottom-6 -left-6 bg-primary p-6 text-on-primary shadow-xl">
            <div className="font-label text-[10px] uppercase tracking-[0.2em] mb-1 opacity-70">
              Status
            </div>
            <div className="text-xl font-bold tracking-tight">Open to Roles</div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
