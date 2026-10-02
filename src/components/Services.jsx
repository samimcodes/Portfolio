import React from "react";
import { motion } from "framer-motion";
import { ArrowRight, Code2, LayoutTemplate, Rocket, ShieldCheck } from "lucide-react";

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
            <div className="container relative z-10 max-w-7xl">
                <div className="grid gap-12 lg:grid-cols-[0.8fr_1.2fr] lg:gap-20">
                    <div className="lg:sticky lg:top-32 lg:self-start">
                    <motion.span
                        initial={{ opacity: 0, y: 18 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="mb-6 inline-flex items-center gap-3 text-xs font-bold uppercase tracking-[0.18em] text-blue-700 dark:text-blue-400"
                    >
                        <span className="h-px w-8 bg-blue-600 dark:bg-blue-400" />
                        Services / 04
                    </motion.span>

                    <motion.h2
                        initial={{ opacity: 0, y: 18 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.08 }}
                        className="max-w-xl text-4xl font-black leading-[1.05] text-slate-950 dark:text-white md:text-5xl"
                    >
                        Thoughtful work, <span className="text-blue-600 dark:text-blue-400">built to matter.</span>
                    </motion.h2>

                    <motion.p
                        initial={{ opacity: 0, y: 18 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.14 }}
                        className="mt-6 max-w-md text-base leading-7 text-slate-600 dark:text-slate-400"
                    >
                        From the first sketch to the final deploy, I help turn ambitious ideas into clear, dependable digital products.
                    </motion.p>
                    </div>

                    <div className="border-t border-slate-300 dark:border-slate-700">
                    {services.map(({ icon: Icon, title, description, label }, index) => (
                        <motion.a
                            key={title}
                            href="#contact"
                            initial={{ opacity: 0, y: 28 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.4, delay: index * 0.07 }}
                            className="group grid grid-cols-[3rem_2.75rem_minmax(0,1fr)_1.5rem] items-start gap-4 border-b border-slate-300 py-7 transition-colors hover:bg-white/60 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-blue-500 dark:border-slate-700 dark:hover:bg-white/[0.03] sm:grid-cols-[3.5rem_3rem_minmax(0,1fr)_1.5rem] sm:gap-5 sm:py-8"
                        >
                            <span className="pt-1 text-sm font-semibold tabular-nums text-slate-400 dark:text-slate-500">{label}</span>
                            <div className="flex h-11 w-11 items-center justify-center border border-slate-300 text-blue-700 transition-colors group-hover:border-blue-600 group-hover:bg-blue-600 group-hover:text-white dark:border-slate-700 dark:text-blue-400 dark:group-hover:border-blue-500 dark:group-hover:bg-blue-500 dark:group-hover:text-white">
                                <Icon size={19} strokeWidth={1.8} />
                            </div>
                            <div>
                                <h3 className="text-lg font-bold text-slate-900 transition-colors group-hover:text-blue-700 dark:text-slate-100 dark:group-hover:text-blue-400 sm:text-xl">{title}</h3>
                                <p className="mt-2 max-w-xl text-sm leading-6 text-slate-600 dark:text-slate-400">{description}</p>
                            </div>
                            <ArrowRight size={19} className="mt-1 text-slate-400 transition-transform group-hover:translate-x-1 group-hover:text-blue-600 dark:group-hover:text-blue-400" />
                        </motion.a>
                    ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Services;
