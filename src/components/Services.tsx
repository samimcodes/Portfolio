"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import {
  Code2,
  Database,
  Radio,
  CreditCard,
  CheckCircle2,
  ArrowUpRight,
  Sparkles,
  Zap,
  ShieldCheck,
  Cpu,
} from "lucide-react";

interface ServiceItem {
  icon: React.ElementType;
  number: string;
  badge: string;
  title: string;
  accent: {
    text: string;
    bg: string;
    border: string;
    glow: string;
    gradient: string;
    badgeBg: string;
    badgeText: string;
    badgeBorder: string;
  };
  description: string;
  deliverables: string[];
  tech: string[];
  inquiryQuery: string;
}

const services: ServiceItem[] = [
  {
    icon: Code2,
    number: "01",
    badge: "Fast SSR & 95+ Vitals",
    title: "Full-Stack Web Development",
    accent: {
      text: "text-indigo-600 dark:text-indigo-400",
      bg: "bg-indigo-50 dark:bg-indigo-500/10",
      border: "border-indigo-100 dark:border-indigo-500/20",
      glow: "group-hover:shadow-[0_20px_45px_rgba(99,102,241,0.18)] dark:group-hover:shadow-[0_20px_50px_rgba(99,102,241,0.22)]",
      gradient: "from-indigo-500/20 via-indigo-500/5 to-transparent",
      badgeBg: "bg-indigo-50 dark:bg-indigo-500/10",
      badgeText: "text-indigo-600 dark:text-indigo-300",
      badgeBorder: "border-indigo-200/60 dark:border-indigo-500/30",
    },
    description:
      "End-to-end web applications built with Next.js App Router, React 19, and TypeScript. Optimized for sub-second load times, technical SEO, and frictionless user conversion.",
    deliverables: [
      "Responsive, cross-browser web platforms & dashboards",
      "Server-side rendering (SSR) & Static Site Generation (SSG)",
      "Strict type-safe architecture & reusable design design tokens",
    ],
    tech: ["Next.js", "React.js", "TypeScript", "Tailwind CSS"],
    inquiryQuery: "Full-Stack Web Development",
  },
  {
    icon: Database,
    number: "02",
    badge: "ACID & Zero Data Leak",
    title: "Backend & Database Architecture",
    accent: {
      text: "text-emerald-600 dark:text-emerald-400",
      bg: "bg-emerald-50 dark:bg-emerald-500/10",
      border: "border-emerald-100 dark:border-emerald-500/20",
      glow: "group-hover:shadow-[0_20px_45px_rgba(16,185,129,0.18)] dark:group-hover:shadow-[0_20px_50px_rgba(16,185,129,0.22)]",
      gradient: "from-emerald-500/20 via-emerald-500/5 to-transparent",
      badgeBg: "bg-emerald-50 dark:bg-emerald-500/10",
      badgeText: "text-emerald-600 dark:text-emerald-300",
      badgeBorder: "border-emerald-200/60 dark:border-emerald-500/30",
    },
    description:
      "Resilient RESTful APIs and schemas with PostgreSQL and Prisma ORM, alongside high-concurrency document storage with MongoDB. Built for scale, data integrity, and strict access control.",
    deliverables: [
      "Relational schema design & automated Prisma migrations",
      "Stateless JWT auth with HTTP-only cookie security",
      "High-throughput API endpoints & role-based access (RBAC)",
    ],
    tech: ["PostgreSQL", "Prisma ORM", "Node.js", "Express.js", "MongoDB"],
    inquiryQuery: "Backend & Database Architecture",
  },
  {
    icon: Radio,
    number: "03",
    badge: "Sub-100ms Latency",
    title: "Real-Time Web Applications",
    accent: {
      text: "text-cyan-600 dark:text-cyan-400",
      bg: "bg-cyan-50 dark:bg-cyan-500/10",
      border: "border-cyan-100 dark:border-cyan-500/20",
      glow: "group-hover:shadow-[0_20px_45px_rgba(6,182,212,0.18)] dark:group-hover:shadow-[0_20px_50px_rgba(6,182,212,0.22)]",
      gradient: "from-cyan-500/20 via-cyan-500/5 to-transparent",
      badgeBg: "bg-cyan-50 dark:bg-cyan-500/10",
      badgeText: "text-cyan-600 dark:text-cyan-300",
      badgeBorder: "border-cyan-200/60 dark:border-cyan-500/30",
    },
    description:
      "Low-latency bidirectional streaming with Socket.IO, interactive vector map tiles with MapLibre GL, live GPS device tracking, and instant automated event notifications.",
    deliverables: [
      "Low-latency real-time event streaming & user presence",
      "Interactive map rendering & spatial geofence queries",
      "Instant event triggers & automated client notifications",
    ],
    tech: ["Socket.IO", "MapLibre GL", "WebSockets", "Geofencing"],
    inquiryQuery: "Real-Time Web Applications",
  },
  {
    icon: CreditCard,
    number: "04",
    badge: "Production Ready",
    title: "SaaS Platforms & API Integration",
    accent: {
      text: "text-amber-600 dark:text-amber-400",
      bg: "bg-amber-50 dark:bg-amber-500/10",
      border: "border-amber-100 dark:border-amber-500/20",
      glow: "group-hover:shadow-[0_20px_45px_rgba(245,158,11,0.18)] dark:group-hover:shadow-[0_20px_50px_rgba(245,158,11,0.22)]",
      gradient: "from-amber-500/20 via-amber-500/5 to-transparent",
      badgeBg: "bg-amber-50 dark:bg-amber-500/10",
      badgeText: "text-amber-600 dark:text-amber-300",
      badgeBorder: "border-amber-200/60 dark:border-amber-500/30",
    },
    description:
      "Revenue-generating SaaS infrastructure with Stripe checkout, recurring subscriptions, multi-role user dashboards (Admin, Creator, User), and LLM API integrations with Gemini.",
    deliverables: [
      "Stripe payment gateway & recurring billing webhooks",
      "Multi-role user permission dashboards & analytics",
      "AI API integrations (Gemini) & automated business workflows",
    ],
    tech: ["Stripe API", "Role Dashboards", "Gemini AI", "Webhooks"],
    inquiryQuery: "SaaS Platform or API Integration",
  },
];

const standards = [
  { icon: Zap, label: "95+ Core Web Vitals" },
  { icon: ShieldCheck, label: "Zero-Vulnerability Auth" },
  { icon: Cpu, label: "Strict Type-Safe TypeScript" },
  { icon: Sparkles, label: "Production-Grade Code" },
];

const Services: React.FC = () => {
  return (
    <section id="services" className="py-24 sm:py-32 relative overflow-hidden">
      {/* Background Ambient Radial Highlights */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[700px] h-[350px] bg-indigo-500/5 dark:bg-indigo-500/10 rounded-full blur-[140px] pointer-events-none -z-10" />
      <div className="absolute bottom-10 right-10 w-[300px] h-[300px] bg-cyan-500/5 dark:bg-cyan-500/10 rounded-full blur-[120px] pointer-events-none -z-10" />

      <div className="container max-w-6xl mx-auto px-6 relative z-10">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 sm:mb-16 gap-6">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="max-w-2xl"
          >
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-indigo-50 dark:bg-indigo-500/10 border border-indigo-200/60 dark:border-indigo-500/20 text-xs font-semibold uppercase tracking-[0.18em] text-[#6366F1] dark:text-[#818CF8] mb-3">
              <Sparkles size={13} className="text-indigo-500 animate-pulse" />
              <span>Core Capabilities</span>
            </div>

            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-slate-900 dark:text-zinc-50">
              Services &amp; Solutions
            </h2>
            <p className="text-slate-600 dark:text-zinc-400 mt-3 text-base sm:text-lg leading-relaxed">
              Tailored software engineering services designed for reliability, speed, and business growth.
            </p>
          </motion.div>

          {/* Quick CTA */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <a
              href="#contact"
              className="inline-flex items-center gap-2.5 px-5 py-2.5 rounded-full bg-slate-900 hover:bg-slate-800 text-white dark:bg-white/[0.06] dark:hover:bg-white/[0.12] dark:text-zinc-100 text-xs font-semibold border border-transparent dark:border-white/10 shadow-sm hover:shadow transition-all group w-max"
            >
              <span>Have a Custom Project?</span>
              <ArrowUpRight
                size={14}
                className="transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
              />
            </a>
          </motion.div>
        </div>

        {/* Engineering Standards Strip */}
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4, delay: 0.15 }}
          className="grid grid-cols-2 sm:grid-cols-4 gap-3 mb-10 p-3 sm:p-4 rounded-2xl bg-slate-100/70 dark:bg-white/[0.02] border border-black/[0.04] dark:border-white/[0.05] backdrop-blur-md"
        >
          {standards.map((s, idx) => {
            const Icon = s.icon;
            return (
              <div
                key={idx}
                className="flex items-center gap-2 text-xs font-medium text-slate-700 dark:text-zinc-300 px-2 py-1"
              >
                <div className="w-6 h-6 rounded-lg bg-indigo-500/10 dark:bg-indigo-400/10 flex items-center justify-center shrink-0">
                  <Icon size={13} className="text-indigo-600 dark:text-indigo-400" />
                </div>
                <span className="truncate">{s.label}</span>
              </div>
            );
          })}
        </motion.div>

        {/* Services Grid (2 Columns) */}
        <div className="grid md:grid-cols-2 gap-7 sm:gap-8">
          {services.map((item, idx) => {
            const Icon = item.icon;
            return (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 22 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.55, delay: idx * 0.1, ease: [0.16, 1, 0.3, 1] }}
                className={`group relative rounded-3xl p-7 sm:p-8 bg-white/90 dark:bg-slate-900/80 backdrop-blur-xl border border-black/[0.06] dark:border-white/10 hover:border-black/[0.12] dark:hover:border-white/20 transition-all duration-300 flex flex-col justify-between overflow-hidden ${item.accent.glow}`}
              >
                {/* Subtle Top Gradient Accent on Hover */}
                <div
                  className={`absolute top-0 left-0 right-0 h-1 bg-gradient-to-r ${item.accent.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-300`}
                />

                <div>
                  {/* Top Header: Icon + Number & Badge */}
                  <div className="flex items-center justify-between mb-6">
                    <div
                      className={`w-13 h-13 p-3 rounded-2xl ${item.accent.bg} border ${item.accent.border} flex items-center justify-center ${item.accent.text} group-hover:scale-110 transition-transform duration-300 shadow-sm`}
                    >
                      <Icon size={24} />
                    </div>

                    <div className="flex items-center gap-2">
                      <span
                        className={`text-[11px] font-semibold px-2.5 py-0.5 rounded-full border ${item.accent.badgeBg} ${item.accent.badgeText} ${item.accent.badgeBorder}`}
                      >
                        {item.badge}
                      </span>
                      <span className="font-mono text-xs font-bold text-slate-400 dark:text-zinc-600 px-2 py-0.5 rounded-md bg-slate-100 dark:bg-white/5">
                        {item.number}
                      </span>
                    </div>
                  </div>

                  {/* Title & Description */}
                  <h3 className="text-xl sm:text-2xl font-bold text-slate-900 dark:text-zinc-50 mb-3 group-hover:text-indigo-600 dark:group-hover:text-indigo-300 transition-colors">
                    {item.title}
                  </h3>

                  <p className="text-sm text-slate-600 dark:text-zinc-400 leading-relaxed mb-6 font-normal">
                    {item.description}
                  </p>

                  {/* Deliverables Checklist */}
                  <div className="space-y-2.5 mb-7">
                    <span className="text-[10px] uppercase font-bold tracking-wider text-slate-400 dark:text-zinc-500 block mb-1">
                      Key Deliverables
                    </span>
                    {item.deliverables.map((d, i) => (
                      <div
                        key={i}
                        className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-800 dark:text-zinc-300"
                      >
                        <CheckCircle2
                          size={15}
                          className="text-emerald-500 dark:text-emerald-400 shrink-0 mt-0.5"
                        />
                        <span>{d}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Bottom Card Footer: Tech Stack + Direct Inquiry Action */}
                <div className="pt-5 border-t border-slate-200/80 dark:border-white/[0.08] flex flex-col sm:flex-row sm:items-center justify-between gap-3">
                  <div className="flex flex-wrap gap-1.5">
                    {item.tech.map((t) => (
                      <span
                        key={t}
                        className="px-2.5 py-1 text-[11px] font-medium rounded-lg bg-slate-100 dark:bg-white/[0.04] text-slate-700 dark:text-zinc-300 border border-black/[0.04] dark:border-white/[0.06]"
                      >
                        {t}
                      </span>
                    ))}
                  </div>

                  <a
                    href="#contact"
                    className="inline-flex items-center gap-1.5 text-xs font-semibold text-slate-700 dark:text-zinc-300 hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors shrink-0 group/link pt-2 sm:pt-0"
                  >
                    <span>Discuss this</span>
                    <ArrowUpRight
                      size={13}
                      className="transition-transform duration-200 group-hover/link:translate-x-0.5 group-hover/link:-translate-y-0.5"
                    />
                  </a>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Services;

