"use client";

import React from "react";
import { motion } from "framer-motion";
import {
  Compass,
  Layout,
  Cpu,
  Rocket,
  CheckCircle2,
  Sparkles,
  ArrowRight,
  ShieldCheck,
  Clock,
  Code,
  HeartHandshake,
} from "lucide-react";

interface StepItem {
  step: string;
  badge: string;
  icon: React.ElementType;
  title: string;
  focus: string;
  description: string;
  deliverables: string[];
  accent: {
    color: string;
    border: string;
    glow: string;
    gradient: string;
  };
}

const steps: StepItem[] = [
  {
    step: "01",
    badge: "Milestone 1",
    icon: Compass,
    title: "Discovery & Planning",
    focus: "Scope & Feasibility",
    description:
      "Aligning on core business goals, target user flows, technical stack feasibility, and setting clear sprint milestones.",
    deliverables: ["Product Scope & User Stories", "Architecture Roadmap", "Tech Stack Finalization"],
    accent: {
      color: "text-blue-600 dark:text-blue-400",
      border: "border-blue-100 dark:border-blue-500/20",
      glow: "hover:shadow-[0_20px_45px_rgba(59,130,246,0.18)] dark:hover:shadow-[0_20px_50px_rgba(59,130,246,0.22)]",
      gradient: "from-blue-500/20 via-blue-500/5 to-transparent",
    },
  },
  {
    step: "02",
    badge: "Milestone 2",
    icon: Layout,
    title: "Design & Architecture",
    focus: "Schemas & UI Contracts",
    description:
      "Structuring normalized database models (PostgreSQL / Prisma), resilient REST API contracts, and responsive UX interfaces.",
    deliverables: ["DB Schema & ERD Models", "REST API Endpoint Specs", "High-Fidelity Component UX"],
    accent: {
      color: "text-indigo-600 dark:text-indigo-400",
      border: "border-indigo-100 dark:border-indigo-500/20",
      glow: "hover:shadow-[0_20px_45px_rgba(99,102,241,0.18)] dark:hover:shadow-[0_20px_50px_rgba(99,102,241,0.22)]",
      gradient: "from-indigo-500/20 via-indigo-500/5 to-transparent",
    },
  },
  {
    step: "03",
    badge: "Milestone 3",
    icon: Cpu,
    title: "Engineering & Testing",
    focus: "Type-Safe Full-Stack",
    description:
      "Writing clean, type-safe Next.js & TypeScript code, implementing state management, robust authentication, and thorough testing.",
    deliverables: ["Type-Safe Full-Stack System", "Modular Component Library", "Security & Auth Verification"],
    accent: {
      color: "text-purple-600 dark:text-purple-400",
      border: "border-purple-100 dark:border-purple-500/20",
      glow: "hover:shadow-[0_20px_45px_rgba(168,85,247,0.18)] dark:hover:shadow-[0_20px_50px_rgba(168,85,247,0.22)]",
      gradient: "from-purple-500/20 via-purple-500/5 to-transparent",
    },
  },
  {
    step: "04",
    badge: "Milestone 4",
    icon: Rocket,
    title: "Deployment & Scale",
    focus: "CI/CD & Lighthouse 95+",
    description:
      "Automating cloud deployment pipelines (Vercel / VPS), fine-tuning Core Web Vitals, and providing post-launch handover support.",
    deliverables: ["Automated CI/CD Deployment", "Core Web Vitals 95+ Audit", "Codebase Handover & Docs"],
    accent: {
      color: "text-emerald-600 dark:text-emerald-400",
      border: "border-emerald-100 dark:border-emerald-500/20",
      glow: "hover:shadow-[0_20px_45px_rgba(16,185,129,0.18)] dark:hover:shadow-[0_20px_50px_rgba(16,185,129,0.22)]",
      gradient: "from-emerald-500/20 via-emerald-500/5 to-transparent",
    },
  },
];

const guarantees = [
  { icon: Clock, text: "Transparent Milestones & Weekly Demos" },
  { icon: Code, text: "100% Full Source Code Ownership" },
  { icon: ShieldCheck, text: "Strict Quality & Zero Data Leaks" },
  { icon: HeartHandshake, text: "Dedicated Post-Launch Support" },
];

const Process: React.FC = () => {
  return (
    <section id="process" className="py-24 sm:py-32 relative overflow-hidden">
      {/* Background Ambient Radial Highlights */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[750px] h-[350px] bg-indigo-500/5 dark:bg-indigo-500/10 rounded-full blur-[140px] pointer-events-none -z-10" />

      <div className="container max-w-6xl mx-auto px-6 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16 sm:mb-20">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-indigo-50 dark:bg-indigo-500/10 border border-indigo-200/60 dark:border-indigo-500/20 text-xs font-semibold uppercase tracking-[0.18em] text-[#6366F1] dark:text-[#818CF8] mb-3">
              <Sparkles size={13} className="text-indigo-500 animate-pulse" />
              <span>Work Method</span>
            </div>

            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-slate-900 dark:text-zinc-50">
              How I Deliver Value
            </h2>
            <p className="text-slate-600 dark:text-zinc-400 max-w-2xl mx-auto mt-3 text-base sm:text-lg leading-relaxed">
              A transparent, engineering-grade roadmap to transform complex ideas into reliable, scalable software.
            </p>
          </motion.div>
        </div>

        {/* Process Cards Grid with Connected Pipeline */}
        <div className="relative mb-14">
          {/* Subtle Pipeline Line for Desktop */}
          <div className="hidden lg:block absolute top-[52px] left-[12%] right-[12%] h-[2px] bg-gradient-to-r from-blue-500/20 via-indigo-500/30 to-emerald-500/20 -z-0" />

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 relative z-10">
            {steps.map((item, idx) => {
              const Icon = item.icon;
              return (
                <motion.div
                  key={item.step}
                  initial={{ opacity: 0, y: 22 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: idx * 0.1, ease: [0.16, 1, 0.3, 1] }}
                  className={`group relative p-6 sm:p-7 rounded-3xl bg-white/80 dark:bg-[#111726]/80 backdrop-blur-xl border border-slate-200/80 dark:border-white/10 hover:border-indigo-500/40 dark:hover:border-indigo-500/40 shadow-[0_10px_30px_rgba(0,0,0,0.04)] dark:shadow-[0_15px_35px_rgba(0,0,0,0.25)] hover:-translate-y-1 transition-all duration-300 flex flex-col justify-between overflow-hidden ${item.accent.glow}`}
                >
                  {/* Subtle Top Gradient Accent on Hover */}
                  <div
                    className={`absolute top-0 left-0 right-0 h-1 bg-gradient-to-r ${item.accent.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-300`}
                  />

                  <div>
                    {/* Top Step & Icon */}
                    <div className="flex items-center justify-between mb-5">
                      <div
                        className={`w-12 h-12 rounded-2xl bg-slate-100 dark:bg-white/5 border ${item.accent.border} flex items-center justify-center ${item.accent.color} group-hover:scale-110 group-hover:bg-gradient-to-br group-hover:from-blue-600 group-hover:to-indigo-600 group-hover:text-white transition-all duration-300 shadow-sm`}
                      >
                        <Icon size={22} />
                      </div>
                      <span className="font-mono text-xs font-bold px-2.5 py-1 rounded-full bg-slate-100 dark:bg-white/5 text-slate-500 dark:text-zinc-400 border border-slate-200/60 dark:border-white/10 group-hover:border-indigo-500/40 group-hover:text-indigo-600 dark:group-hover:text-indigo-400 transition-colors">
                        STAGE {item.step}
                      </span>
                    </div>

                    <div className="mb-2">
                      <span className="text-[11px] font-semibold text-slate-400 dark:text-zinc-500 uppercase tracking-wider block">
                        {item.focus}
                      </span>
                      <h3 className="text-lg font-bold text-slate-900 dark:text-zinc-100 group-hover:text-indigo-600 dark:group-hover:text-indigo-300 transition-colors">
                        {item.title}
                      </h3>
                    </div>

                    <p className="text-xs sm:text-sm text-slate-600 dark:text-zinc-400 leading-relaxed mb-6 font-normal">
                      {item.description}
                    </p>
                  </div>

                  {/* Deliverables / Output Badges */}
                  <div className="pt-4 border-t border-slate-200/70 dark:border-white/[0.08] flex flex-col gap-2">
                    <span className="text-[10px] uppercase font-bold tracking-wider text-slate-400 dark:text-zinc-500">
                      Deliverables
                    </span>
                    {item.deliverables.map((del, dIdx) => (
                      <div
                        key={dIdx}
                        className="flex items-start gap-2 text-xs font-medium text-slate-700 dark:text-zinc-300"
                      >
                        <CheckCircle2
                          size={13}
                          className="text-emerald-500 dark:text-emerald-400 shrink-0 mt-0.5"
                        />
                        <span className="leading-snug">{del}</span>
                      </div>
                    ))}
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>

        {/* Client Guarantees Bar & CTA */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="rounded-3xl p-6 sm:p-8 bg-white/80 dark:bg-[#111726]/80 backdrop-blur-xl border border-slate-200/80 dark:border-white/10 shadow-[0_15px_35px_rgba(0,0,0,0.06)] dark:shadow-[0_20px_45px_rgba(0,0,0,0.3)] flex flex-col lg:flex-row items-center justify-between gap-6"
        >
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5 w-full lg:w-auto">
            {guarantees.map((g, idx) => {
              const GIcon = g.icon;
              return (
                <div key={idx} className="flex items-center gap-2.5 text-xs sm:text-sm text-slate-700 dark:text-zinc-300">
                  <div className="w-7 h-7 rounded-lg bg-indigo-500/10 border border-indigo-500/20 flex items-center justify-center shrink-0 text-indigo-600 dark:text-indigo-400 shadow-sm">
                    <GIcon size={14} />
                  </div>
                  <span className="font-medium">{g.text}</span>
                </div>
              );
            })}
          </div>

          <a
            href="#contact"
            className="group relative inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-gradient-to-r from-blue-600 via-indigo-600 to-blue-600 hover:from-blue-500 hover:via-indigo-500 hover:to-blue-500 text-white text-xs sm:text-sm font-semibold shadow-[0_4px_20px_rgba(59,130,246,0.3)] hover:shadow-[0_6px_25px_rgba(99,102,241,0.4)] hover:scale-[1.02] active:scale-98 transition-all shrink-0 w-full sm:w-auto justify-center overflow-hidden"
          >
            <span>Start Your Project Roadmap</span>
            <ArrowRight size={15} className="transition-transform group-hover:translate-x-1" />
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default Process;

