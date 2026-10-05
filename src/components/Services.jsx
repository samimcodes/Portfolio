import React from "react";
import { motion } from "framer-motion";
import { ArrowRight, CheckCircle2, Code2, LayoutTemplate, Rocket, ShieldCheck, Sparkles } from "lucide-react";

const services = [
    {
        icon: Code2,
        title: "Frontend Development",
        label: "01",
        description: "Responsive, high-converting interfaces built with React, Next.js, and Tailwind for fast, polished user experiences.",
        deliverables: ["Landing pages", "Dashboards", "Component systems"],
    },
    {
        icon: LayoutTemplate,
        title: "UI/UX Design",
        label: "02",
        description: "Thoughtful product design that balances clarity, user flow, and modern aesthetics to make experiences feel effortless.",
        deliverables: ["Wireframes", "User flows", "Visual polish"],
    },
    {
        icon: Rocket,
        title: "Full-Stack Builds",
        label: "03",
        description: "End-to-end product development spanning APIs, databases, authentication, dashboards, and launch-ready features.",
        deliverables: ["REST APIs", "Auth flows", "Admin panels"],
    },
    {
        icon: ShieldCheck,
        title: "Optimization & Maintenance",
        label: "04",
        description: "Performance improvements, bug fixing, and ongoing refinements that keep products stable, scalable, and future-ready.",
        deliverables: ["Bug fixes", "Speed tuning", "Code cleanup"],
    },
];

const serviceStats = [
    { value: "10+", label: "Projects shipped" },
    { value: "MERN", label: "Core stack" },
    { value: "24h", label: "Fast response" },
];

const Services = () => {
    return (
        <section id="services" className="relative overflow-hidden bg-slate-100 py-24 text-slate-900 dark:bg-[#060914] dark:text-slate-50 md:py-32">
            <div className="absolute left-[-10%] top-20 h-80 w-80 rounded-full bg-blue-500/10 blur-[110px]" />
            <div className="absolute bottom-10 right-[-12%] h-96 w-96 rounded-full bg-purple-500/10 blur-[120px]" />

            <div className="container relative z-10 max-w-7xl">
                <div className="grid gap-12 lg:grid-cols-[0.85fr_1.15fr] lg:gap-16">
                    <div className="lg:sticky lg:top-28 lg:self-start">
                        <motion.span
                            initial={{ opacity: 0, y: 18 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            className="mb-6 inline-flex items-center gap-2 rounded-full border border-blue-500/20 bg-blue-500/10 px-4 py-2 text-xs font-bold uppercase tracking-[0.18em] text-blue-700 dark:text-blue-400"
                        >
                            <Sparkles size={15} />
                            Services / 04
                        </motion.span>

                        <motion.h2
                            initial={{ opacity: 0, y: 18 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.08 }}
                            className="max-w-xl text-4xl font-black leading-[1.08] tracking-tight text-slate-950 dark:text-white md:text-5xl"
                        >
                            Product-focused services for <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600 dark:from-blue-400 dark:to-purple-500">modern web apps.</span>
                        </motion.h2>

                        <motion.p
                            initial={{ opacity: 0, y: 18 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.14 }}
                            className="mt-6 max-w-md text-base leading-7 text-slate-600 dark:text-slate-400"
                        >
                            From the first sketch to the final deploy, I turn ambitious ideas into clean interfaces, dependable backends, and launch-ready digital products.
                        </motion.p>

                        <motion.div
                            initial={{ opacity: 0, y: 18 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.2 }}
                            className="mt-8 grid max-w-md grid-cols-3 overflow-hidden rounded-2xl border border-slate-200 bg-white/70 shadow-sm backdrop-blur dark:border-slate-800 dark:bg-white/[0.03]"
                        >
                            {serviceStats.map((stat) => (
                                <div key={stat.label} className="border-r border-slate-200 p-4 last:border-r-0 dark:border-slate-800">
                                    <p className="text-xl font-black text-slate-950 dark:text-white">{stat.value}</p>
                                    <p className="mt-1 text-xs font-medium leading-5 text-slate-500 dark:text-slate-400">{stat.label}</p>
                                </div>
                            ))}
                        </motion.div>
                    </div>

                    <div className="grid gap-5 sm:grid-cols-2">
                        {services.map(({ icon: Icon, title, description, label, deliverables }, index) => (
                            <motion.a
                                key={title}
                                href="#contact"
                                initial={{ opacity: 0, y: 28 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true, margin: "-80px" }}
                                transition={{ duration: 0.45, delay: index * 0.08 }}
                                className="group relative flex min-h-[310px] flex-col rounded-2xl border border-slate-200 bg-white/80 p-6 shadow-sm backdrop-blur transition-all duration-300 hover:-translate-y-1 hover:border-blue-500/50 hover:shadow-2xl hover:shadow-blue-500/10 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 dark:border-slate-800 dark:bg-slate-900/70 dark:hover:border-blue-400/50"
                            >
                                <div className="mb-8 flex items-center justify-between">
                                    <div className="flex h-12 w-12 items-center justify-center rounded-xl border border-blue-500/20 bg-blue-500/10 text-blue-700 transition-colors group-hover:bg-blue-600 group-hover:text-white dark:text-blue-400 dark:group-hover:bg-blue-500">
                                        <Icon size={21} strokeWidth={1.9} />
                                    </div>
                                    <span className="text-sm font-black tabular-nums text-slate-300 dark:text-slate-700">{label}</span>
                                </div>

                                <h3 className="text-xl font-bold text-slate-950 transition-colors group-hover:text-blue-700 dark:text-white dark:group-hover:text-blue-400">{title}</h3>
                                <p className="mt-3 text-sm leading-6 text-slate-600 dark:text-slate-400">{description}</p>

                                <div className="mt-6 space-y-3">
                                    {deliverables.map((item) => (
                                        <div key={item} className="flex items-center gap-2 text-sm font-medium text-slate-600 dark:text-slate-300">
                                            <CheckCircle2 size={16} className="shrink-0 text-blue-600 dark:text-blue-400" />
                                            <span>{item}</span>
                                        </div>
                                    ))}
                                </div>

                                <div className="mt-auto flex items-center gap-2 pt-8 text-sm font-bold text-blue-700 dark:text-blue-400">
                                    Start a project
                                    <ArrowRight size={17} className="transition-transform group-hover:translate-x-1" />
                                </div>
                            </motion.a>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Services;
