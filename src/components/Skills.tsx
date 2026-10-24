"use client";

import React from "react";
import { motion } from "framer-motion";
import {
  Sparkles,
  Layers,
  ShieldCheck,
  Zap,
  Activity,
  GitBranch,
} from "lucide-react";
import {
  SiNextdotjs,
  SiTypescript,
  SiReact,
  SiTailwindcss,
  SiNodedotjs,
  SiExpress,
  SiSocketdotio,
  SiPostgresql,
  SiPrisma,
  SiMongodb,
  SiDocker,
  SiGit,
  SiVercel,
  SiRender,
  SiPostman,
  SiFirebase,
  SiFramer,
} from "react-icons/si";

// 1. Primary Core Technologies (Daily Drivers)
const coreStack = [
  {
    name: "Next.js 16",
    role: "Full-Stack Web Architecture",
    description: "App Router, Server Components & Server Actions.",
    icon: SiNextdotjs,
    applied: "LocaLink • CareerFlow",
  },
  {
    name: "TypeScript",
    role: "Type-Safe Engineering",
    description: "Strict typing across frontend, backend, and schemas.",
    icon: SiTypescript,
    applied: "LocaLink • ContestHub",
  },
  {
    name: "Node.js & Express",
    role: "Backend & Real-Time APIs",
    description: "RESTful endpoints, Socket.IO events, and JWT security.",
    icon: SiNodedotjs,
    applied: "Live GPS Server • HomeHero",
  },
  {
    name: "PostgreSQL & Prisma",
    role: "Relational Data Layer",
    description: "Normalized relational schemas & type-safe migrations.",
    icon: SiPostgresql,
    applied: "LocaLink • Production DBs",
  },
];

// 2. Extended Toolchain by Category
const ecosystem = [
  {
    category: "Frontend & Styling",
    tools: [
      { name: "React 19", icon: SiReact },
      { name: "Tailwind CSS", icon: SiTailwindcss },
      { name: "Framer Motion", icon: SiFramer },
      { name: "Responsive UI", icon: Layers },
    ],
  },
  {
    category: "Backend, Auth & Real-Time",
    tools: [
      { name: "Socket.IO", icon: SiSocketdotio },
      { name: "JWT Auth", icon: ShieldCheck },
      { name: "REST APIs", icon: Activity },
      { name: "Firebase", icon: SiFirebase },
    ],
  },
  {
    category: "Database & Cloud DevOps",
    tools: [
      { name: "Prisma ORM", icon: SiPrisma },
      { name: "MongoDB", icon: SiMongodb },
      { name: "Docker", icon: SiDocker },
      { name: "Git & GitHub", icon: SiGit },
      { name: "Vercel", icon: SiVercel },
      { name: "Render", icon: SiRender },
      { name: "Postman", icon: SiPostman },
    ],
  },
];

const Skills: React.FC = () => {
  return (
    <section id="skills" className="py-24 relative overflow-hidden">
      <div className="container max-w-6xl mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-14">
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4 }}
          >
            <span className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full text-xs font-semibold tracking-[0.18em] uppercase bg-indigo-50 dark:bg-indigo-500/10 text-[#6366F1] dark:text-[#818CF8] border border-indigo-200/60 dark:border-indigo-500/20 mb-3">
              <Sparkles size={13} className="text-indigo-500 animate-pulse" />
              Technical Stack
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-slate-900 dark:text-zinc-50">
              Skills &amp; Technologies
            </h2>
            <p className="text-slate-600 dark:text-zinc-400 max-w-xl mx-auto mt-2 text-sm sm:text-base">
              A clean overview of the core technologies and modern toolchain I rely on to build scalable systems.
            </p>
          </motion.div>
        </div>

        {/* Compact Single-Screen Bento Grid (50/50 Perfect Symmetry) */}
        <div className="grid lg:grid-cols-2 gap-6 items-stretch">
          {/* Left Column: Core 4 Production Stack */}
          <motion.div
            initial={{ opacity: 0, x: -15 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.45 }}
            className="p-6 sm:p-7 rounded-3xl bg-white/80 dark:bg-[#111726]/80 backdrop-blur-xl border border-slate-200/80 dark:border-white/10 shadow-[0_15px_35px_rgba(0,0,0,0.06)] dark:shadow-[0_20px_45px_rgba(0,0,0,0.3)] flex flex-col justify-between"
          >
            <div>
              <div className="flex items-center justify-between mb-6 pb-4 border-b border-slate-100 dark:border-white/5">
                <div className="flex items-center gap-2">
                  <span className="w-2.5 h-2.5 rounded-full bg-emerald-500 animate-pulse" />
                  <h3 className="text-sm font-bold tracking-tight text-slate-900 dark:text-zinc-100">
                    Primary Production Stack
                  </h3>
                </div>
                <span className="text-[10px] font-mono uppercase font-bold tracking-wider px-2 py-0.5 rounded-full bg-indigo-50 dark:bg-indigo-500/10 text-indigo-600 dark:text-indigo-400 border border-indigo-200/60 dark:border-indigo-500/20">
                  Daily Drivers
                </span>
              </div>

              <div className="space-y-3.5">
                {coreStack.map((tech) => {
                  const Icon = tech.icon;
                  return (
                    <div
                      key={tech.name}
                      className="group p-3.5 rounded-2xl bg-slate-50/80 dark:bg-white/[0.03] border border-black/[0.04] dark:border-white/[0.06] hover:border-indigo-500/40 dark:hover:border-indigo-500/40 hover:bg-white dark:hover:bg-white/[0.06] transition-all duration-200 flex items-start gap-3.5"
                    >
                      <div className="w-10 h-10 rounded-xl bg-white dark:bg-white/10 border border-black/[0.06] dark:border-white/10 flex items-center justify-center text-slate-900 dark:text-zinc-100 shrink-0 group-hover:scale-105 group-hover:text-indigo-600 dark:group-hover:text-indigo-400 transition-all shadow-sm">
                        <Icon size={20} />
                      </div>
                      <div className="flex-1 min-w-0">
                        <div className="flex flex-wrap items-center justify-between gap-1">
                          <h4 className="text-sm font-bold text-slate-900 dark:text-zinc-100 group-hover:text-indigo-600 dark:group-hover:text-indigo-400 transition-colors">
                            {tech.name}
                          </h4>
                          <span className="text-[10px] font-mono font-medium text-slate-400 dark:text-zinc-500 shrink-0">
                            {tech.applied}
                          </span>
                        </div>
                        <p className="text-xs text-slate-500 dark:text-zinc-400 mt-0.5 leading-snug">
                          {tech.description}
                        </p>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>

            <div className="pt-5 mt-6 border-t border-slate-100 dark:border-white/5 flex flex-wrap items-center justify-between gap-2 text-xs text-slate-500 dark:text-zinc-400">
              <span className="flex items-center gap-1.5">
                <ShieldCheck size={14} className="text-emerald-500" />
                Type-Safe &amp; Production Verified
              </span>
              <span className="font-mono text-[11px] text-indigo-600 dark:text-indigo-400 font-semibold">
                Next.js 16 • React 19
              </span>
            </div>
          </motion.div>

          {/* Right Column: Extended Toolchain & Ecosystem */}
          <motion.div
            initial={{ opacity: 0, x: 15 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.45 }}
            className="p-6 sm:p-7 rounded-3xl bg-white/80 dark:bg-[#111726]/80 backdrop-blur-xl border border-slate-200/80 dark:border-white/10 shadow-[0_15px_35px_rgba(0,0,0,0.06)] dark:shadow-[0_20px_45px_rgba(0,0,0,0.3)] flex flex-col justify-between"
          >
            <div>
              <div className="flex items-center justify-between mb-6 pb-4 border-b border-slate-100 dark:border-white/5">
                <div className="flex items-center gap-2">
                  <Layers size={16} className="text-indigo-500" />
                  <h3 className="text-sm font-bold tracking-tight text-slate-900 dark:text-zinc-100">
                    Ecosystem &amp; Supporting Toolchain
                  </h3>
                </div>
                <span className="text-[10px] font-mono uppercase font-bold tracking-wider px-2 py-0.5 rounded-full bg-slate-100 dark:bg-white/5 text-slate-500 dark:text-zinc-400 border border-slate-200/60 dark:border-white/10">
                  Full Stack Ready
                </span>
              </div>

              <div className="space-y-6">
                {ecosystem.map((group) => (
                  <div key={group.category}>
                    <span className="text-[11px] font-bold uppercase tracking-wider text-slate-400 dark:text-zinc-500 mb-2.5 block">
                      {group.category}
                    </span>
                    <div className="flex flex-wrap gap-2">
                      {group.tools.map((tool) => {
                        const ToolIcon = tool.icon;
                        return (
                          <div
                            key={tool.name}
                            className="group/chip inline-flex items-center gap-2 px-3 py-2 rounded-xl bg-slate-50/90 dark:bg-white/[0.03] border border-black/[0.05] dark:border-white/[0.07] hover:border-indigo-500/40 dark:hover:border-indigo-500/40 hover:bg-white dark:hover:bg-white/[0.07] transition-all duration-200 cursor-default"
                          >
                            <ToolIcon
                              size={15}
                              className="text-slate-600 dark:text-zinc-400 group-hover/chip:text-indigo-600 dark:group-hover/chip:text-indigo-400 transition-colors shrink-0"
                            />
                            <span className="text-xs font-medium text-slate-700 dark:text-zinc-300 group-hover/chip:text-slate-900 dark:group-hover/chip:text-white transition-colors">
                              {tool.name}
                            </span>
                          </div>
                        );
                      })}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Bottom Engineering Standards Ribbon */}
            <div className="pt-5 mt-6 border-t border-slate-100 dark:border-white/5 flex flex-wrap items-center justify-around gap-2 text-center">
              <div className="flex items-center justify-center gap-1.5 text-[11px] font-medium text-slate-600 dark:text-zinc-400">
                <Zap size={13} className="text-amber-500 shrink-0" />
                <span>Lighthouse 95+</span>
              </div>
              <div className="flex items-center justify-center gap-1.5 text-[11px] font-medium text-slate-600 dark:text-zinc-400">
                <Activity size={13} className="text-indigo-500 shrink-0" />
                <span>Real-Time Events</span>
              </div>
              <div className="flex items-center justify-center gap-1.5 text-[11px] font-medium text-slate-600 dark:text-zinc-400">
                <GitBranch size={13} className="text-emerald-500 shrink-0" />
                <span>Automated CI/CD</span>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
