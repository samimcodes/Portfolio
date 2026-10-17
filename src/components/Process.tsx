"use client";

import React from "react";
import { motion } from "framer-motion";
import { Compass, Layout, Cpu, Rocket, CheckCircle2 } from "lucide-react";

interface StepItem {
  step: string;
  icon: React.ElementType;
  title: string;
  description: string;
  deliverables: string[];
}

const steps: StepItem[] = [
  {
    step: "01",
    icon: Compass,
    title: "Discovery & Planning",
    description: "Aligning on core business requirements, user flows, technical feasibility, and realistic delivery milestones.",
    deliverables: ["Scope & User Stories", "Architecture Roadmap"],
  },
  {
    step: "02",
    icon: Layout,
    title: "Design & Architecture",
    description: "Designing normalized database schemas (PostgreSQL / Prisma), modular APIs, and responsive, accessible UI flows.",
    deliverables: ["DB Schema & ERD", "API Contracts & UX Flows"],
  },
  {
    step: "03",
    icon: Cpu,
    title: "Development & Testing",
    description: "Writing clean, type-safe Next.js & TypeScript code with component modularization and continuous iterative testing.",
    deliverables: ["Type-Safe Full-Stack", "Performance & Clean Code"],
  },
  {
    step: "04",
    icon: Rocket,
    title: "Deployment & Support",
    description: "Configuring automated cloud CI/CD pipelines, optimizing Core Web Vitals, and ensuring reliable zero-downtime releases.",
    deliverables: ["CI/CD Cloud Deploy", "Lighthouse 95+ Audit"],
  },
];

const Process: React.FC = () => {
  return (
    <section id="process" className="py-24 relative overflow-hidden">
      <div className="container max-w-6xl mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4 }}
          >
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold tracking-wider uppercase bg-indigo-50 dark:bg-indigo-500/10 text-indigo-600 dark:text-indigo-400 border border-indigo-200/60 dark:border-indigo-500/20 mb-3">
              Work Method
            </span>
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-slate-900 dark:text-zinc-50">
              How I Deliver Value
            </h2>
            <p className="text-slate-600 dark:text-zinc-400 max-w-xl mx-auto mt-2 text-sm sm:text-base">
              A transparent, engineering-grade roadmap to transform complex ideas into reliable, scalable software.
            </p>
          </motion.div>
        </div>

        {/* Process Cards Grid with Connected Pipeline */}
        <div className="relative">
          {/* Horizontal Connection Pipeline for Desktop */}
          <div className="hidden lg:block absolute top-[44px] left-[10%] right-[10%] h-[2px] bg-gradient-to-r from-indigo-500/20 via-purple-500/30 to-indigo-500/20 dark:from-indigo-500/30 dark:via-purple-500/40 dark:to-indigo-500/30 -z-0" />

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 relative z-10">
            {steps.map((item, idx) => {
              const Icon = item.icon;
              return (
                <motion.div
                  key={item.step}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: idx * 0.1, ease: [0.16, 1, 0.3, 1] }}
                  className="group relative p-6 rounded-3xl bg-white/80 dark:bg-slate-900/70 backdrop-blur-xl border border-black/[0.06] dark:border-white/10 hover:border-indigo-500/40 dark:hover:border-indigo-500/50 shadow-sm hover:shadow-[0_16px_35px_rgba(99,102,241,0.14)] transition-all duration-300 flex flex-col justify-between"
                >
                  <div>
                    {/* Top Step & Icon */}
                    <div className="flex items-center justify-between mb-5">
                      <div className="w-12 h-12 rounded-2xl bg-indigo-50 dark:bg-indigo-500/10 border border-indigo-100 dark:border-indigo-500/20 flex items-center justify-center text-[#6366F1] dark:text-[#818CF8] group-hover:scale-110 group-hover:bg-indigo-600 group-hover:text-white transition-all duration-300 shadow-sm">
                        <Icon size={22} />
                      </div>
                      <span className="font-mono text-xs font-bold px-2.5 py-1 rounded-full bg-slate-100 dark:bg-white/5 text-slate-500 dark:text-zinc-400 border border-slate-200/60 dark:border-white/10 group-hover:border-indigo-500/40 group-hover:text-indigo-600 dark:group-hover:text-indigo-400 transition-colors">
                        STAGE {item.step}
                      </span>
                    </div>

                    <h3 className="text-base font-bold text-slate-900 dark:text-zinc-100 mb-2 group-hover:text-indigo-600 dark:group-hover:text-indigo-400 transition-colors">
                      {item.title}
                    </h3>

                    <p className="text-xs sm:text-sm text-slate-600 dark:text-zinc-400 leading-relaxed mb-6">
                      {item.description}
                    </p>
                  </div>

                  {/* Deliverables / Output Badges */}
                  <div className="pt-4 border-t border-slate-100 dark:border-white/5 flex flex-col gap-1.5">
                    <span className="text-[10px] uppercase font-bold tracking-wider text-slate-400 dark:text-zinc-500">
                      Key Deliverables
                    </span>
                    {item.deliverables.map((del, dIdx) => (
                      <div
                        key={dIdx}
                        className="flex items-center gap-1.5 text-[11px] font-medium text-slate-700 dark:text-zinc-300"
                      >
                        <CheckCircle2 size={12} className="text-indigo-500 dark:text-indigo-400 shrink-0" />
                        <span className="truncate">{del}</span>
                      </div>
                    ))}
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Process;
