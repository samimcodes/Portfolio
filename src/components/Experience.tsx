"use client";

import React from "react";
import { motion } from "framer-motion";
import { Calendar, MapPin, CheckCircle2, ArrowUpRight, Sparkles, Briefcase, GraduationCap } from "lucide-react";
import { SiFiverr } from "react-icons/si";

interface TimelineItem {
  role: string;
  organization: string;
  period: string;
  location: string;
  badge?: string;
  link?: string;
  icon?: React.ElementType;
  accent: {
    badge: string;
    node: string;
    borderHover: string;
    text: string;
  };
  description: string;
  bullets: string[];
  skills: string[];
}

const experiences: TimelineItem[] = [
  {
    role: "Full Stack Developer",
    organization: "JEVXO",
    period: "Jun 2026 – Present",
    location: "Remote / Bangladesh",
    badge: "Current Role",
    icon: Briefcase,
    accent: {
      badge: "bg-blue-500/10 text-blue-600 dark:text-blue-400 border-blue-500/20",
      node: "bg-blue-500 shadow-[0_0_14px_rgba(59,130,246,0.9)]",
      borderHover: "hover:border-blue-500/50 dark:hover:border-blue-500/50",
      text: "text-blue-600 dark:text-blue-400",
    },
    description: "Developing scalable full-stack web solutions and production features in an agile team environment.",
    bullets: [
      "Architecting and developing full-stack web applications using Next.js, React, Node.js, Express.js, PostgreSQL, and Prisma ORM.",
      "Building responsive user interfaces, implementing clean client-server data flows, and integrating secure RESTful APIs.",
      "Collaborating through Git/GitHub version control workflows to deliver clean, modular, and maintainable production code.",
    ],
    skills: ["Next.js", "React", "TypeScript", "Node.js", "Express.js", "PostgreSQL", "Prisma ORM", "Git"],
  },
  {
    role: "Freelance Full Stack Developer",
    organization: "Fiverr",
    period: "Sep 2026 – Present",
    location: "Freelance · Remote",
    badge: "Escrow Protected",
    link: "https://www.fiverr.com/samim_io",
    icon: SiFiverr,
    accent: {
      badge: "bg-[#1DBF73]/15 text-[#1DBF73] border-[#1DBF73]/30",
      node: "bg-[#1DBF73] shadow-[0_0_14px_rgba(29,191,115,0.9)]",
      borderHover: "hover:border-[#1DBF73]/50 dark:hover:border-[#1DBF73]/50",
      text: "text-[#1DBF73]",
    },
    description: "Delivering custom web development solutions for clients, translating project requirements into functional and responsive web applications.",
    bullets: [
      "Developing modern, responsive frontend interfaces and dynamic web applications with React, Next.js, and Tailwind CSS.",
      "Building and integrating secure RESTful backend APIs, application logic, and database schemas using Node.js, Express, PostgreSQL, and MongoDB.",
      "Managing end-to-end client communication, technical requirement analysis, timely milestone delivery, and collaborative revisions.",
    ],
    skills: ["React", "Next.js", "TypeScript", "Node.js", "Express.js", "PostgreSQL", "MongoDB", "REST APIs", "Tailwind CSS"],
  },
  {
    role: "Diploma in Engineering – Computer Technology",
    organization: "Rangpur Polytechnic Institute",
    period: "Nov 2024 – Present",
    location: "Rangpur, Bangladesh",
    badge: "3rd Semester – Running",
    icon: GraduationCap,
    accent: {
      badge: "bg-indigo-500/10 text-indigo-600 dark:text-indigo-400 border-indigo-500/20",
      node: "bg-indigo-500 shadow-[0_0_14px_rgba(99,102,241,0.9)]",
      borderHover: "hover:border-indigo-500/50 dark:hover:border-indigo-500/50",
      text: "text-indigo-600 dark:text-indigo-400",
    },
    description: "Focusing on software engineering principles, algorithms, relational database systems, and networking fundamentals.",
    bullets: [
      "Acquiring strong fundamentals in Data Structures, Database Management Systems (DBMS), and Object-Oriented Programming (OOP).",
      "Applying theoretical computer science and system architecture principles directly to practical web development projects.",
    ],
    skills: ["Data Structures", "Database Management", "System Architecture", "Algorithms", "Problem Solving"],
  },
];

const Experience: React.FC = () => {
  return (
    <section id="experience" className="py-24 sm:py-32 relative overflow-hidden">
      {/* Background Ambient Radial Lighting */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[700px] h-[350px] bg-indigo-500/5 dark:bg-indigo-500/10 rounded-full blur-[140px] pointer-events-none -z-10" />

      <div className="container max-w-4xl mx-auto px-6 relative z-10">
        <div className="text-center mb-16 sm:mb-20">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-indigo-50 dark:bg-indigo-500/10 border border-indigo-200/60 dark:border-indigo-500/20 text-xs font-semibold uppercase tracking-[0.18em] text-[#6366F1] dark:text-[#818CF8] mb-3">
              <Sparkles size={13} className="text-indigo-500 animate-pulse" />
              <span>Career Timeline</span>
            </div>

            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-slate-900 dark:text-zinc-50">
              Experience &amp; Education
            </h2>
            <p className="text-slate-600 dark:text-zinc-400 max-w-xl mx-auto mt-3 text-base sm:text-lg leading-relaxed">
              Professional engineering contributions, freelance client solutions on Fiverr, and computer technology foundations.
            </p>
          </motion.div>
        </div>

        {/* Timeline with Gradient Vertical Track */}
        <div className="relative border-l-2 border-slate-200 dark:border-white/[0.08] ml-4 sm:ml-6 pl-6 sm:pl-9 space-y-10 sm:space-y-12">
          {experiences.map((item, idx) => (
            <motion.div
              key={item.organization}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="relative"
            >
              {/* Luminous Glowing Node */}
              <div
                className={`absolute -left-[33px] sm:-left-[45px] top-1.5 w-4 h-4 rounded-full border-2 border-white dark:border-[#0B0F19] ${item.accent.node}`}
              />

              <div
                className={`p-6 sm:p-8 rounded-3xl bg-white/90 dark:bg-slate-900/80 backdrop-blur-xl border border-black/[0.06] dark:border-white/10 ${item.accent.borderHover} shadow-sm hover:shadow-[0_16px_40px_rgba(99,102,241,0.12)] transition-all duration-300`}
              >
                <div className="flex flex-wrap items-start justify-between gap-3 mb-3">
                  <div>
                    <div className="flex flex-wrap items-center gap-2.5">
                      <h3 className="text-lg sm:text-xl font-bold text-slate-900 dark:text-zinc-100">
                        {item.role}
                      </h3>
                      {item.badge && (
                        <span
                          className={`px-2.5 py-0.5 rounded-full text-[11px] font-semibold border ${item.accent.badge}`}
                        >
                          {item.badge}
                        </span>
                      )}
                    </div>

                    <div className="flex items-center gap-2 mt-1">
                      {item.link ? (
                        <a
                          href={item.link}
                          target="_blank"
                          rel="noreferrer"
                          className={`text-sm font-bold flex items-center gap-1 hover:underline ${item.accent.text}`}
                        >
                          <span>{item.organization}</span>
                          <ArrowUpRight size={13} />
                        </a>
                      ) : (
                        <p className={`text-sm font-bold ${item.accent.text}`}>
                          {item.organization}
                        </p>
                      )}
                    </div>
                  </div>

                  <div className="flex sm:flex-col sm:items-end text-xs text-slate-500 dark:text-zinc-400 gap-3 sm:gap-1">
                    <span className="inline-flex items-center gap-1.5 font-medium">
                      <Calendar size={13} /> {item.period}
                    </span>
                    <span className="inline-flex items-center gap-1.5 font-medium">
                      <MapPin size={13} /> {item.location}
                    </span>
                  </div>
                </div>

                <p className="text-sm text-slate-600 dark:text-zinc-400 mb-5 leading-relaxed font-normal">
                  {item.description}
                </p>

                <ul className="space-y-2 mb-6">
                  {item.bullets.map((bullet, i) => (
                    <li
                      key={i}
                      className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-800 dark:text-zinc-300 leading-relaxed"
                    >
                      <CheckCircle2 size={15} className="text-emerald-500 shrink-0 mt-0.5" />
                      <span>{bullet}</span>
                    </li>
                  ))}
                </ul>

                <div className="flex flex-wrap gap-1.5 pt-4 border-t border-slate-200/80 dark:border-white/[0.08]">
                  {item.skills.map((s) => (
                    <span
                      key={s}
                      className="px-2.5 py-1 text-[11px] font-medium rounded-lg bg-slate-100 dark:bg-white/[0.04] text-slate-700 dark:text-zinc-300 border border-black/[0.04] dark:border-white/[0.06]"
                    >
                      {s}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;

