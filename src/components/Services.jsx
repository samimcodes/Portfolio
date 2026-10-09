import React from "react";
import { motion } from "framer-motion";
import { ArrowRight, CheckCircle2, Code2, LayoutTemplate, Rocket, ShieldCheck, Sparkles, Zap, Check } from "lucide-react";

const services = [
    {
        icon: Code2,
        title: "Frontend Architecture & UI",
        label: "01",
        badge: "Pixel-Perfect & Fast",
        colorTheme: {
            accent: "from-blue-500 to-cyan-500",
            bgGlow: "group-hover:bg-blue-500/10",
            border: "group-hover:border-blue-500/40",
            iconBg: "bg-blue-500/10 text-blue-600 dark:text-blue-400 border-blue-500/20 group-hover:bg-blue-600 group-hover:text-white dark:group-hover:bg-blue-500",
            checkColor: "text-blue-600 dark:text-blue-400",
            pill: "text-blue-700 bg-blue-50 dark:text-blue-300 dark:bg-blue-950/40 border-blue-200 dark:border-blue-900/50",
            textAccent: "text-blue-600 dark:text-blue-400",
        },
        description: "Modern, dynamic interfaces built with React, Next.js, and Tailwind CSS. Focused on snappy interactions, smooth animations, and exceptional responsiveness.",
        tags: ["React.js", "Next.js", "Tailwind CSS", "Framer Motion"],
        deliverables: [
            "Responsive, cross-browser web applications",
            "Complex micro-interactions & fluid animations",
            "Reusable component systems & design tokens",
        ],
    },
    {
        icon: LayoutTemplate,
        title: "UI/UX & Product Design",
        label: "02",
        badge: "User-Centric & Modern",
        colorTheme: {
            accent: "from-purple-500 to-pink-500",
            bgGlow: "group-hover:bg-purple-500/10",
            border: "group-hover:border-purple-500/40",
            iconBg: "bg-purple-500/10 text-purple-600 dark:text-purple-400 border-purple-500/20 group-hover:bg-purple-600 group-hover:text-white dark:group-hover:bg-purple-500",
            checkColor: "text-purple-600 dark:text-purple-400",
            pill: "text-purple-700 bg-purple-50 dark:text-purple-300 dark:bg-purple-950/40 border-purple-200 dark:border-purple-900/50",
            textAccent: "text-purple-600 dark:text-purple-400",
        },
        description: "Transforming product concepts into intuitive digital experiences. Balancing visual delight, frictionless user flows, and modern design hierarchies.",
        tags: ["Figma", "Wireframing", "Prototypes", "Design Systems"],
        deliverables: [
            "High-fidelity interactive prototypes & mockups",
            "Intuitive user journeys & frictionless UX flows",
            "Comprehensive visual guidelines & asset kits",
        ],
    },
    {
        icon: Rocket,
        title: "Full-Stack Web Engineering",
        label: "03",
        badge: "Scalable & Robust",
        colorTheme: {
            accent: "from-indigo-500 to-blue-600",
            bgGlow: "group-hover:bg-indigo-500/10",
            border: "group-hover:border-indigo-500/40",
            iconBg: "bg-indigo-500/10 text-indigo-600 dark:text-indigo-400 border-indigo-500/20 group-hover:bg-indigo-600 group-hover:text-white dark:group-hover:bg-indigo-500",
            checkColor: "text-indigo-600 dark:text-indigo-400",
            pill: "text-indigo-700 bg-indigo-50 dark:text-indigo-300 dark:bg-indigo-950/40 border-indigo-200 dark:border-indigo-900/50",
            textAccent: "text-indigo-600 dark:text-indigo-400",
        },
        description: "End-to-end full-stack development covering scalable backends, database schema modeling, secure authentication, and production-ready APIs.",
        tags: ["Node.js", "Express.js", "MongoDB", "RESTful APIs"],
        deliverables: [
            "Robust REST APIs & secure JWT authentication",
            "Optimized MongoDB schemas & database querying",
            "Role-based access control & admin dashboard suites",
        ],
    },
    {
        icon: ShieldCheck,
        title: "Speed Optimization & Maintenance",
        label: "04",
        badge: "95+ Lighthouse Scores",
        colorTheme: {
            accent: "from-emerald-500 to-teal-500",
            bgGlow: "group-hover:bg-emerald-500/10",
            border: "group-hover:border-emerald-500/40",
            iconBg: "bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 border-emerald-500/20 group-hover:bg-emerald-600 group-hover:text-white dark:group-hover:bg-emerald-500",
            checkColor: "text-emerald-600 dark:text-emerald-400",
            pill: "text-emerald-700 bg-emerald-50 dark:text-emerald-300 dark:bg-emerald-950/40 border-emerald-200 dark:border-emerald-900/50",
            textAccent: "text-emerald-600 dark:text-emerald-400",
        },
        description: "Enhancing performance, responsiveness, and web security. Continual maintenance, code refactoring, and SEO improvements to keep your product ahead.",
        tags: ["Speed Audit", "SEO", "Bug Fixes", "Code Refactoring"],
        deliverables: [
            "Core Web Vitals tuning & bundle size reduction",
            "Comprehensive bug fixes & security patches",
            "Search engine optimization (SEO) & semantic markup",
        ],
    },
];

const serviceStats = [
    { value: "15+", label: "Projects Delivered", detail: "Quality code shipped" },
    { value: "MERN", label: "Core Stack", detail: "React, Node, Mongo" },
    { value: "24/7", label: "Fast Response", detail: "Dedicated support" },
];

const valueProps = [
    "Clean, maintainable, production-ready code",
    "Fluid animations with responsive mobile-first UI",
    "Strict delivery timelines & transparent communication",
];

const Services = () => {
    return (
        <section id="services" className="relative overflow-hidden bg-slate-50 py-24 text-slate-900 dark:bg-[#030308] dark:text-slate-50 md:py-32">
            {/* Ambient Ambient Glows */}
            <div className="pointer-events-none absolute left-[-12%] top-20 h-96 w-96 rounded-full bg-blue-600/15 blur-[130px] dark:bg-blue-500/10" />
            <div className="pointer-events-none absolute bottom-12 right-[-10%] h-[420px] w-[420px] rounded-full bg-purple-600/15 blur-[140px] dark:bg-purple-500/10" />
            <div className="pointer-events-none absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 h-80 w-80 rounded-full bg-indigo-500/10 blur-[120px]" />

            {/* Subtle Grid Pattern Overlay */}
            <div
                className="pointer-events-none absolute inset-0 z-0 opacity-[0.03] mix-blend-multiply dark:opacity-[0.05] dark:mix-blend-screen"
                style={{
                    backgroundImage:
                        "url(\"data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M54.627 0l.83.83v58.34h-58.34l-.83-.83L0 54.628v-58.34h58.34l.83.83z' fill='currentColor' fill-opacity='1' fill-rule='evenodd'/%3E%3C/svg%3E\")",
                    maskImage: "radial-gradient(ellipse 70% 60% at 50% 50%, black, transparent)",
                }}
            />

            <div className="container relative z-10 max-w-7xl mx-auto px-6 lg:px-8">
                <div className="grid gap-14 lg:grid-cols-[0.85fr_1.15fr] lg:gap-16">
                    {/* Left Sticky Column */}
                    <div className="lg:sticky lg:top-28 lg:self-start">
                        {/* Section Header Badge */}
                        <motion.div
                            initial={{ opacity: 0, y: 16 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            className="inline-flex items-center gap-2 rounded-full border border-blue-500/30 bg-blue-500/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-wider text-blue-700 shadow-sm dark:border-blue-500/20 dark:text-blue-400"
                        >
                            <Sparkles size={14} className="text-blue-600 dark:text-blue-400 animate-pulse" />
                            <span>Services & Capabilities</span>
                        </motion.div>

                        {/* Title */}
                        <motion.h2
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.08 }}
                            className="mt-5 max-w-xl text-3xl font-extrabold leading-tight tracking-tight text-slate-950 dark:text-white sm:text-4xl md:text-5xl"
                        >
                            Crafting high-impact solutions for{" "}
                            <span className="bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 bg-clip-text text-transparent dark:from-blue-400 dark:via-indigo-300 dark:to-purple-400">
                                modern web platforms.
                            </span>
                        </motion.h2>

                        {/* Description */}
                        <motion.p
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.14 }}
                            className="mt-5 max-w-md text-base leading-relaxed text-slate-600 dark:text-slate-300"
                        >
                            From initial concept and architectural design to full deployment and optimization, I engineer web experiences that combine visual elegance with bulletproof engineering.
                        </motion.p>

                        {/* Why Work With Me Checklist */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.18 }}
                            className="mt-6 space-y-2.5 max-w-md"
                        >
                            {valueProps.map((prop, idx) => (
                                <div key={idx} className="flex items-center gap-2.5 text-sm font-medium text-slate-700 dark:text-slate-300">
                                    <div className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-blue-500/15 text-blue-600 dark:bg-blue-500/20 dark:text-blue-400">
                                        <Check size={12} strokeWidth={3} />
                                    </div>
                                    <span>{prop}</span>
                                </div>
                            ))}
                        </motion.div>

                        {/* Stats Panel */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.22 }}
                            className="mt-8 grid max-w-md grid-cols-3 divide-x divide-slate-200/80 rounded-2xl border border-slate-200/80 bg-white/70 p-1 shadow-sm backdrop-blur-md dark:divide-slate-800/80 dark:border-slate-800/80 dark:bg-slate-900/40"
                        >
                            {serviceStats.map((stat) => (
                                <div key={stat.label} className="p-3.5 text-center sm:text-left">
                                    <p className="text-xl font-black tracking-tight text-slate-950 dark:text-white sm:text-2xl">{stat.value}</p>
                                    <p className="mt-0.5 text-xs font-semibold text-slate-800 dark:text-slate-200">{stat.label}</p>
                                    <p className="hidden text-[10px] text-slate-500 dark:text-slate-400 sm:block">{stat.detail}</p>
                                </div>
                            ))}
                        </motion.div>

                        {/* Quick CTA */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.26 }}
                            className="mt-7"
                        >
                            <a
                                href="#contact"
                                className="inline-flex items-center gap-2.5 rounded-xl bg-gradient-to-r from-blue-600 to-indigo-600 px-6 py-3.5 text-sm font-bold text-white shadow-lg shadow-blue-500/25 transition-all duration-300 hover:scale-[1.02] hover:shadow-xl hover:shadow-blue-500/35 focus:outline-none focus:ring-2 focus:ring-blue-500"
                            >
                                <Zap size={16} className="fill-white" />
                                <span>Discuss Your Project</span>
                                <ArrowRight size={16} />
                            </a>
                        </motion.div>
                    </div>

                    {/* Right Grid of Service Cards */}
                    <div className="grid gap-6 sm:grid-cols-2">
                        {services.map(({ icon: Icon, title, description, label, badge, colorTheme, tags, deliverables }, index) => (
                            <motion.div
                                key={title}
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true, margin: "-60px" }}
                                transition={{ duration: 0.5, delay: index * 0.1 }}
                                className="group relative flex flex-col justify-between overflow-hidden rounded-2xl border border-slate-200/90 bg-white/80 p-6 shadow-sm backdrop-blur-xl transition-all duration-300 hover:-translate-y-1.5 hover:shadow-2xl dark:border-slate-800/90 dark:bg-slate-900/50 hover:border-slate-300 dark:hover:border-slate-700"
                            >
                                {/* Top Ambient Gradient Highlight Bar */}
                                <div className={`absolute left-0 right-0 top-0 h-[3px] bg-gradient-to-r ${colorTheme.accent} opacity-40 transition-opacity duration-300 group-hover:opacity-100`} />

                                {/* Subtle internal hover glow effect */}
                                <div className={`pointer-events-none absolute -right-16 -top-16 h-40 w-40 rounded-full bg-gradient-to-br ${colorTheme.accent} opacity-0 blur-3xl transition-opacity duration-500 group-hover:opacity-15`} />

                                <div>
                                    {/* Top Row: Icon + Badge + Number */}
                                    <div className="mb-5 flex items-start justify-between gap-3">
                                        <div className={`flex h-13 w-13 items-center justify-center rounded-xl border p-3 transition-all duration-300 group-hover:scale-105 group-hover:shadow-md ${colorTheme.iconBg}`}>
                                            <Icon size={24} strokeWidth={2} />
                                        </div>

                                        <div className="flex items-center gap-2">
                                            <span className={`inline-block rounded-md border px-2 py-0.5 text-[11px] font-semibold tracking-wide ${colorTheme.pill}`}>
                                                {badge}
                                            </span>
                                            <span className="font-mono text-base font-bold text-slate-300 transition-colors group-hover:text-slate-600 dark:text-slate-700 dark:group-hover:text-slate-300">
                                                {label}
                                            </span>
                                        </div>
                                    </div>

                                    {/* Service Title */}
                                    <h3 className="text-xl font-bold tracking-tight text-slate-950 transition-colors duration-200 dark:text-white">
                                        {title}
                                    </h3>

                                    {/* Service Description */}
                                    <p className="mt-2.5 text-sm leading-relaxed text-slate-600 dark:text-slate-300">
                                        {description}
                                    </p>

                                    {/* Tech Tags */}
                                    <div className="mt-4 flex flex-wrap gap-1.5">
                                        {tags.map((tag) => (
                                            <span
                                                key={tag}
                                                className="rounded-md border border-slate-200/80 bg-slate-100/70 px-2 py-0.5 text-[11px] font-medium text-slate-600 dark:border-slate-800 dark:bg-slate-800/60 dark:text-slate-300"
                                            >
                                                {tag}
                                            </span>
                                        ))}
                                    </div>

                                    {/* Deliverables Checklist */}
                                    <div className="mt-5 space-y-2.5 border-t border-slate-100 pt-4 dark:border-slate-800/60">
                                        <p className="text-[11px] font-bold uppercase tracking-wider text-slate-400 dark:text-slate-500">
                                            What you get
                                        </p>
                                        {deliverables.map((item) => (
                                            <div key={item} className="flex items-start gap-2.5 text-xs font-medium text-slate-700 dark:text-slate-300">
                                                <CheckCircle2 size={15} className={`mt-0.5 shrink-0 ${colorTheme.checkColor}`} />
                                                <span className="leading-tight">{item}</span>
                                            </div>
                                        ))}
                                    </div>
                                </div>

                                {/* Action link at bottom */}
                                <div className="mt-6 pt-3">
                                    <a
                                        href="#contact"
                                        className={`inline-flex items-center gap-2 text-xs font-bold transition-all duration-200 ${colorTheme.textAccent} group-hover:gap-3`}
                                    >
                                        <span>Start a project</span>
                                        <ArrowRight size={14} className="transition-transform group-hover:translate-x-1" />
                                    </a>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Services;
