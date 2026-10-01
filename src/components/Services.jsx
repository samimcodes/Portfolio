import React from "react";
import { motion } from "framer-motion";
import { ArrowUpRight, Code2, LayoutTemplate, Rocket, ShieldCheck } from "lucide-react";

const services = [
    {
        icon: Code2,
        title: "Frontend Development",
        label: "01",
        description: "Responsive, high-converting interfaces built with React, Next.js, and Tailwind for fast, polished user experiences.",
    },
    {
        icon: LayoutTemplate,
        title: "UI/UX Design",
        label: "02",
        description: "Thoughtful product design that balances clarity, user flow, and modern aesthetics to make experiences feel effortless.",
    },
    {
        icon: Rocket,
        title: "Full-Stack Builds",
        label: "03",
        description: "End-to-end product development spanning APIs, databases, authentication, dashboards, and launch-ready features.",
    },
    {
        icon: ShieldCheck,
        title: "Optimization & Maintenance",
        label: "04",
        description: "Performance improvements, bug fixing, and ongoing refinements that keep products stable, scalable, and future-ready.",
    },
];

const Services = () => {
    return (
        <section id="services" className="relative overflow-hidden bg-slate-100/80 py-24 dark:bg-[#070b16] md:py-32">
            <div className="absolute -left-16 top-12 h-72 w-72 rounded-full bg-blue-500/10 blur-[120px]" />
            <div className="absolute -right-16 bottom-10 h-72 w-72 rounded-full bg-violet-500/10 blur-[120px]" />

            <div className="container relative z-10">
                <div className="mb-14 max-w-3xl">
                    <motion.span
                        initial={{ opacity: 0, y: 18 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="mb-5 inline-flex items-center gap-2 rounded-full border border-blue-500/20 bg-blue-500/10 px-4 py-2 text-[11px] font-bold uppercase tracking-[0.22em] text-blue-600 dark:text-blue-400"
                    >
                        <span className="h-2 w-2 rounded-full bg-blue-500" />
                        What I Do
                    </motion.span>

                    <motion.h2
                        initial={{ opacity: 0, y: 18 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.08 }}
                        className="text-4xl font-black leading-[1.05] tracking-[-0.04em] text-slate-950 dark:text-white md:text-5xl lg:text-6xl"
                    >
                        Digital products with <span className="bg-gradient-to-r from-blue-600 via-indigo-600 to-violet-600 bg-clip-text text-transparent">purpose.</span>
                    </motion.h2>
                </div>

                <motion.p
                    initial={{ opacity: 0, y: 18 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.14 }}
                    className="mb-12 max-w-2xl text-lg leading-relaxed text-slate-600 dark:text-slate-400"
                >
                    I help businesses and founders turn sharp ideas into high-quality web experiences built for performance, clarity, and real-world results.
                </motion.p>

                <div className="grid gap-6 lg:grid-cols-2 xl:grid-cols-4">
                    {services.map(({ icon: Icon, title, description, label }, index) => (
                        <motion.div
                            key={title}
                            initial={{ opacity: 0, y: 28 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.45, delay: index * 0.08 }}
                            whileHover={{ y: -8, scale: 1.01 }}
                            className="group relative overflow-hidden rounded-[28px] border border-slate-200 bg-white/80 p-6 shadow-[0_18px_45px_rgba(15,23,42,0.06)] backdrop-blur-sm transition-all duration-300 hover:border-blue-200 hover:shadow-[0_22px_60px_rgba(59,130,246,0.12)] dark:border-slate-800 dark:bg-slate-900/80 dark:hover:border-blue-500/30"
                        >
                            <div className="absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-blue-500 via-indigo-500 to-violet-500" />

                            <div className="mb-6 flex items-center justify-between">
                                <span className="text-sm font-semibold tracking-[0.2em] text-slate-400 dark:text-slate-500">{label}</span>
                                <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-to-br from-blue-500 to-violet-600 text-white shadow-lg shadow-blue-500/25 transition-transform duration-300 group-hover:scale-105">
                                    <Icon size={20} />
                                </div>
                            </div>

                            <h3 className="mb-4 text-xl font-bold tracking-tight text-slate-900 dark:text-slate-100">{title}</h3>
                            <p className="text-sm leading-7 text-slate-600 dark:text-slate-400">{description}</p>

                            <div className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-blue-600 dark:text-blue-400">
                                Explore
                                <ArrowUpRight size={16} className="transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1" />
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Services;
