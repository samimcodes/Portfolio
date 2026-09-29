import React from "react";
import { motion } from "framer-motion";
import { ArrowUpRight, Code2, LayoutTemplate, Rocket, ShieldCheck } from "lucide-react";

const services = [
    {
        icon: Code2,
        title: "Frontend Development",
        label: "01",
        description: "Responsive, interactive interfaces with React, Next.js, and Tailwind that feel modern, fast, and user-friendly.",
    },
    {
        icon: LayoutTemplate,
        title: "UI/UX Design",
        label: "02",
        description: "Clean layouts, strong visual hierarchy, and intuitive flows that turn user needs into polished digital experiences.",
    },
    {
        icon: Rocket,
        title: "Full-Stack Builds",
        label: "03",
        description: "End-to-end product builds spanning APIs, databases, authentication, dashboards, and deployment-ready features.",
    },
    {
        icon: ShieldCheck,
        title: "Optimization & Maintenance",
        label: "04",
        description: "Performance tuning, bug fixing, refactoring, and reliable improvements that keep products stable and scalable.",
    },
];

const Services = () => {
    return (
        <section id="services" className="relative overflow-hidden bg-[#f7f8fa] py-24 dark:bg-[#090b14] md:py-32">
            <div className="absolute -right-24 top-20 h-72 w-72 rounded-full bg-blue-500/10 blur-3xl" />
            <div className="absolute bottom-0 left-0 h-64 w-64 rounded-full bg-cyan-400/10 blur-3xl" />

            <div className="container relative z-10">
                <div className="mb-16 grid gap-10 lg:grid-cols-[0.85fr_1.15fr] lg:items-end lg:gap-20">
                    <div>
                    <motion.span
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="mb-5 inline-flex items-center gap-2 text-xs font-bold uppercase tracking-[0.2em] text-blue-600 dark:text-blue-400"
                    >
                        <span className="h-2 w-2 rounded-full bg-blue-500" />
                        What I Do
                    </motion.span>
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.1 }}
                        className="max-w-xl text-4xl font-bold leading-[1.05] tracking-tight text-slate-950 dark:text-slate-100 md:text-6xl"
                    >
                        Digital products with <span className="text-blue-600 dark:text-blue-400">purpose.</span>
                    </motion.h2>
                    </div>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.2 }}
                        className="max-w-lg text-lg leading-relaxed text-slate-600 dark:text-slate-400 lg:pb-1"
                    >
                        I help businesses and founders turn sharp ideas into high-quality web experiences built for performance, clarity, and real-world results.
                    </motion.p>
                </div>

                <div className="divide-y divide-slate-200 border-y border-slate-200 dark:divide-slate-800 dark:border-slate-800">
                    {services.map(({ icon: Icon, title, description, label }, index) => (
                        <motion.div
                            key={title}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.45, delay: index * 0.08 }}
                            whileHover={{ x: 8 }}
                            className="group grid gap-5 py-7 transition-colors duration-300 hover:bg-white/70 dark:hover:bg-slate-900/50 md:grid-cols-[72px_1fr_2fr_48px] md:items-center md:gap-8 md:px-5"
                        >
                            <div className="flex items-center gap-4 md:block">
                                <span className="text-sm font-semibold text-slate-400 dark:text-slate-600">{label}</span>
                                <div className="mt-0 flex h-11 w-11 items-center justify-center rounded-full border border-slate-200 bg-white text-blue-600 shadow-sm transition-colors group-hover:border-blue-500 group-hover:bg-blue-600 group-hover:text-white dark:border-slate-700 dark:bg-slate-900 dark:text-blue-400 md:mt-4">
                                    <Icon size={19} />
                                </div>
                            </div>
                            <h3 className="text-xl font-bold tracking-tight text-slate-900 dark:text-slate-100">{title}</h3>
                            <p className="max-w-xl leading-relaxed text-slate-600 dark:text-slate-400">{description}</p>
                            <ArrowUpRight className="text-slate-400 transition-colors group-hover:text-blue-600 dark:group-hover:text-blue-400" size={22} />
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Services;
