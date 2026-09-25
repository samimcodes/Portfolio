import React from "react";
import { motion } from "framer-motion";
import { Code2, LayoutTemplate, Rocket, ShieldCheck } from "lucide-react";

const services = [
    {
        icon: Code2,
        title: "Frontend Development",
        description: "Responsive, interactive interfaces with React, Next.js, and Tailwind that feel modern, fast, and user-friendly.",
    },
    {
        icon: LayoutTemplate,
        title: "UI/UX Design",
        description: "Clean layouts, strong visual hierarchy, and intuitive flows that turn user needs into polished digital experiences.",
    },
    {
        icon: Rocket,
        title: "Full-Stack Builds",
        description: "End-to-end product builds spanning APIs, databases, authentication, dashboards, and deployment-ready features.",
    },
    {
        icon: ShieldCheck,
        title: "Optimization & Maintenance",
        description: "Performance tuning, bug fixing, refactoring, and reliable improvements that keep products stable and scalable.",
    },
];

const Services = () => {
    return (
        <section id="services" className="py-24 bg-white dark:bg-[#090b14] relative overflow-hidden">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,_rgba(59,130,246,0.10),_transparent_35%),radial-gradient(circle_at_bottom_right,_rgba(168,85,247,0.10),_transparent_30%)]" />

            <div className="container relative z-10">
                <div className="text-center mb-16">
                    <motion.span
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="inline-block py-1 px-3 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-500 text-sm font-medium mb-4"
                    >
                        What I Do
                    </motion.span>
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.1 }}
                        className="text-3xl md:text-4xl font-bold text-slate-900 dark:text-slate-100 mb-4"
                    >
                        Building digital products that are <span className="text-blue-500">useful, fast, and modern</span>
                    </motion.h2>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.2 }}
                        className="text-slate-600 dark:text-slate-400 max-w-2xl mx-auto"
                    >
                        I help businesses and founders turn concepts into high-quality web experiences with a focus on performance, clarity, and real-world results.
                    </motion.p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6">
                    {services.map(({ icon: Icon, title, description }, index) => (
                        <motion.div
                            key={title}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.45, delay: index * 0.08 }}
                            whileHover={{ y: -6 }}
                            className="group bg-slate-50/80 dark:bg-slate-900/60 border border-slate-200 dark:border-slate-800 rounded-2xl p-6 shadow-lg shadow-slate-200/30 dark:shadow-none transition-all duration-300 hover:border-blue-500/40 hover:shadow-blue-500/10"
                        >
                            <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center text-white mb-5 shadow-lg shadow-blue-500/20">
                                <Icon size={22} />
                            </div>
                            <h3 className="text-xl font-bold text-slate-900 dark:text-slate-100 mb-3">{title}</h3>
                            <p className="text-slate-600 dark:text-slate-400 leading-relaxed">{description}</p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Services;
