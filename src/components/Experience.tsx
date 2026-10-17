"use client";

import React from "react";
import { motion } from "framer-motion";
import { Calendar, MapPin, CheckCircle2 } from "lucide-react";

interface TimelineItem {
  role: string;
  organization: string;
  period: string;
  location: string;
  badge?: string;
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
    description: "Developing scalable full-stack web solutions and production features in an agile team environment.",
    bullets: [
      "Architecting and developing full-stack web applications using Next.js, React, Node.js, Express.js, PostgreSQL, and Prisma ORM.",
      "Building responsive user interfaces, implementing clean client-server data flows, and integrating secure RESTful APIs.",
      "Collaborating through Git/GitHub version control workflows to deliver clean, modular, and maintainable production code.",
    ],
    skills: ["Next.js", "React", "TypeScript", "Node.js", "Express.js", "PostgreSQL", "Prisma ORM", "Git"],
  },
  {
    role: "Diploma in Engineering – Computer Technology",
    organization: "Rangpur Polytechnic Institute",
    period: "Nov 2024 – Present",
    location: "Rangpur, Bangladesh",
    badge: "3rd Semester – Running",
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
    <section id="experience" className="py-24 relative overflow-hidden">
      <div className="container max-w-4xl mx-auto px-6">
        <div className="text-center mb-16">
          <span className="text-xs font-semibold uppercase tracking-[0.2em] text-[#6366F1] dark:text-[#818CF8] mb-2 block">
            Career Timeline
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-slate-900 dark:text-zinc-50">
            Experience &amp; Education
          </h2>
          <p className="text-slate-500 dark:text-zinc-400 max-w-md mx-auto mt-3 text-base">
            Professional engineering contributions at JEVXO backed by computer technology foundations.
          </p>
        </div>

        <div className="relative border-l border-slate-200 dark:border-white/[0.08] ml-4 sm:ml-6 pl-6 sm:pl-8 space-y-10">
          {experiences.map((item, idx) => (
            <motion.div
              key={item.organization}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="relative"
            >
              {/* Luminous Node */}
              <div className="absolute -left-[31px] sm:-left-[39px] top-1.5 w-3.5 h-3.5 rounded-full bg-blue-500 border-2 border-white dark:border-[#0B0F19] shadow-[0_0_12px_rgba(59,130,246,0.9)]" />

              <div className="p-6 sm:p-7 rounded-3xl bg-white/80 dark:bg-slate-900/70 backdrop-blur-xl border border-black/[0.06] dark:border-white/10 hover:border-black/[0.1] dark:hover:border-indigo-500/50 shadow-sm hover:shadow-[0_12px_35px_rgba(99,102,241,0.18)] transition-all">
                <div className="flex flex-wrap items-start justify-between gap-3 mb-3">
                  <div>
                    <div className="flex items-center gap-2.5">
                      <h3 className="text-lg sm:text-xl font-bold text-slate-900 dark:text-zinc-100">
                        {item.role}
                      </h3>
                      {item.badge && (
                        <span className="px-2.5 py-0.5 rounded-full text-[11px] font-semibold bg-blue-500/10 text-blue-600 dark:text-blue-400 border border-blue-500/20">
                          {item.badge}
                        </span>
                      )}
                    </div>
                    <p className="text-sm font-semibold text-blue-600 dark:text-blue-400 mt-0.5">
                      {item.organization}
                    </p>
                  </div>

                  <div className="flex sm:flex-col sm:items-end text-xs text-slate-500 dark:text-zinc-400 gap-3 sm:gap-1">
                    <span className="inline-flex items-center gap-1.5">
                      <Calendar size={13} /> {item.period}
                    </span>
                    <span className="inline-flex items-center gap-1.5">
                      <MapPin size={13} /> {item.location}
                    </span>
                  </div>
                </div>

                <p className="text-sm text-slate-600 dark:text-zinc-400 mb-5 leading-relaxed">
                  {item.description}
                </p>

                <ul className="space-y-2 mb-6">
                  {item.bullets.map((bullet, i) => (
                    <li key={i} className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-800 dark:text-zinc-300 leading-relaxed">
                      <CheckCircle2 size={15} className="text-blue-500 shrink-0 mt-0.5" />
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
