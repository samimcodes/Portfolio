"use client";

import React from "react";
import { motion } from "framer-motion";
import { Code2, Database, Radio, CreditCard, CheckCircle2, ArrowUpRight } from "lucide-react";

interface ServiceItem {
  icon: any;
  number: string;
  title: string;
  description: string;
  deliverables: string[];
  tech: string[];
}

const services: ServiceItem[] = [
  {
    icon: Code2,
    number: "01",
    title: "Full-Stack Web Development",
    description: "End-to-end web applications built with Next.js App Router, React 19, and TypeScript. Optimized for fast loading, clean SEO, and high client conversion.",
    deliverables: [
      "Responsive, cross-browser web platforms",
      "Server-side rendering (SSR) & Static Generation",
      "Type-safe architectures & reusable design tokens",
    ],
    tech: ["Next.js", "React.js", "TypeScript", "Tailwind CSS"],
  },
  {
    icon: Database,
    number: "02",
    title: "Backend & Database Development",
    description: "Architecting resilient RESTful APIs, relational schemas with PostgreSQL and Prisma ORM, and high-concurrency document storage with MongoDB.",
    deliverables: [
      "Relational schema design & automated Prisma migrations",
      "Stateless JWT auth with HTTP-only cookie security",
      "High-throughput API endpoints & role-based access",
    ],
    tech: ["PostgreSQL", "Prisma ORM", "Node.js", "Express.js", "MongoDB"],
  },
  {
    icon: Radio,
    number: "03",
    title: "Real-Time Web Applications",
    description: "Low-latency bidirectional communication with Socket.IO, interactive vector map tiles with MapLibre GL, live GPS tracking, and instant event triggers.",
    deliverables: [
      "Low-latency real-time event streaming & presence",
      "Interactive map rendering & spatial geofence queries",
      "Instant event triggers & automated notifications",
    ],
    tech: ["Socket.IO", "MapLibre GL", "WebSockets", "Geofencing"],
  },
  {
    icon: CreditCard,
    number: "04",
    title: "SaaS Platforms & API Integration",
    description: "Revenue-generating SaaS infrastructure with Stripe checkout, subscriptions, multi-role user dashboards (Admin, Creator, User), and third-party API integrations.",
    deliverables: [
      "Stripe payment gateway & recurring billing webhooks",
      "Multi-role user permission dashboards",
      "AI API integrations (Gemini) & automated workflows",
    ],
    tech: ["Stripe API", "Role Dashboards", "Gemini AI", "Webhooks"],
  },
];

const Services: React.FC = () => {
  return (
    <section id="services" className="py-24 relative overflow-hidden">
      <div className="container max-w-6xl mx-auto px-6">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div>
            <span className="text-xs font-semibold uppercase tracking-[0.2em] text-[#6366F1] dark:text-[#818CF8] mb-2 block">
              Core Capabilities
            </span>
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-slate-900 dark:text-zinc-50">
              Services &amp; Solutions
            </h2>
            <p className="text-slate-500 dark:text-zinc-400 mt-2 text-base max-w-lg">
              Tailored software engineering services designed for reliability, speed, and business growth.
            </p>
          </div>

          <a
            href="#contact"
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-white hover:bg-slate-50 dark:bg-white/[0.05] dark:hover:bg-white/[0.09] text-xs font-semibold text-slate-900 dark:text-zinc-200 border border-black/[0.08] dark:border-white/[0.08] shadow-sm transition-all w-max"
          >
            <span>Custom Requirements?</span>
            <ArrowUpRight size={14} />
          </a>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {services.map((item, idx) => {
            const Icon = item.icon;
            return (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1, ease: [0.16, 1, 0.3, 1] }}
                className="group rounded-3xl p-7 sm:p-8 bg-white/80 dark:bg-slate-900/70 backdrop-blur-xl border border-black/[0.06] dark:border-white/10 hover:border-black/[0.1] dark:hover:border-indigo-500/50 shadow-sm hover:shadow-[0_12px_35px_rgba(99,102,241,0.18)] transition-all flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-5">
                    <div className="w-12 h-12 rounded-2xl bg-indigo-50 dark:bg-indigo-500/10 border border-indigo-100 dark:border-indigo-500/20 flex items-center justify-center text-[#6366F1] dark:text-[#818CF8]">
                      <Icon size={22} />
                    </div>
                    <span className="font-mono text-xs font-semibold text-slate-400 dark:text-zinc-600">
                      {item.number}
                    </span>
                  </div>

                  <h3 className="text-xl font-bold text-slate-900 dark:text-zinc-50 mb-2">
                    {item.title}
                  </h3>

                  <p className="text-sm text-slate-600 dark:text-zinc-400 leading-relaxed mb-6 font-normal">
                    {item.description}
                  </p>

                  <div className="space-y-2 mb-8">
                    {item.deliverables.map((d, i) => (
                      <div key={i} className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-800 dark:text-zinc-300">
                        <CheckCircle2 size={15} className="text-blue-500 shrink-0 mt-0.5" />
                        <span>{d}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="flex flex-wrap gap-1.5 pt-4 border-t border-slate-200/80 dark:border-white/[0.08]">
                  {item.tech.map((t) => (
                    <span
                      key={t}
                      className="px-2.5 py-1 text-[11px] font-medium rounded-lg bg-slate-100 dark:bg-white/[0.04] text-slate-700 dark:text-zinc-300 border border-black/[0.04] dark:border-white/[0.06]"
                    >
                      {t}
                    </span>
                  ))}
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
