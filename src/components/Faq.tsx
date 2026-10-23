"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  ChevronDown,
  Sparkles,
  MessageSquare,
  ArrowUpRight,
  ShieldCheck,
  Clock,
  Send,
} from "lucide-react";

interface FAQItem {
  id: string;
  number: string;
  category: "Architecture" | "Delivery & Pricing" | "Hiring & Contracts";
  question: string;
  answer: string;
}

const faqs: FAQItem[] = [
  {
    id: "faq-1",
    number: "01",
    category: "Architecture",
    question: "What types of web projects and applications do you build?",
    answer:
      "I specialize in production-grade full-stack web applications, revenue-generating SaaS platforms with Stripe billing, real-time tracking systems with WebSockets/Socket.IO, interactive vector map platforms (MapLibre GL), and high-throughput RESTful APIs backed by PostgreSQL and Prisma ORM.",
  },
  {
    id: "faq-2",
    number: "02",
    category: "Architecture",
    question: "What core technologies and frameworks do you use?",
    answer:
      "My core production stack is Next.js 16 (App Router), React 19, TypeScript, and Tailwind CSS on the client side, powered by Node.js, Express.js, PostgreSQL with Prisma ORM, and MongoDB for scalable document storage on the backend.",
  },
  {
    id: "faq-3",
    number: "03",
    category: "Hiring & Contracts",
    question: "Are you available for freelance work and remote contracts?",
    answer:
      "Yes, absolutely. In addition to my full-time engineering role at JEVXO, I actively take on remote contracts, client projects, and freelance orders on Fiverr (fiverr.com/samim_io) with flexible working hours tailored to US, European, and global client time zones.",
  },
  {
    id: "faq-4",
    number: "04",
    category: "Hiring & Contracts",
    question: "Do you sign Non-Disclosure Agreements (NDA) and transfer full code ownership?",
    answer:
      "Yes, 100%. Client confidentiality and business protection are paramount. I readily sign mutual NDAs prior to discovery. Upon final milestone completion, you retain 100% full intellectual property (IP), repository access, and complete source code ownership with zero vendor lock-in.",
  },
  {
    id: "faq-5",
    number: "05",
    category: "Delivery & Pricing",
    question: "How do you handle pricing and project delivery timelines?",
    answer:
      "Pricing and delivery depend on scope and architecture. A focused MVP typically delivers within 2 to 4 weeks. I offer both fixed milestone-based quotes and ongoing monthly retainers with structured weekly sprint demos and transparent progress tracking.",
  },
  {
    id: "faq-6",
    number: "06",
    category: "Delivery & Pricing",
    question: "How do we get started on a project together?",
    answer:
      "You can send a message directly through the contact form, via WhatsApp (+880 1743282144), or by email (mdsamimhosen827@gmail.com). We will review your goals, outline the technical specifications, and establish a clear delivery timeline.",
  },
];

const categories = ["All", "Architecture", "Delivery & Pricing", "Hiring & Contracts"] as const;
type CategoryFilter = (typeof categories)[number];

const Faq: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<CategoryFilter>("All");
  const [openId, setOpenId] = useState<string | null>("faq-1");

  const filteredFaqs =
    selectedCategory === "All"
      ? faqs
      : faqs.filter((faq) => faq.category === selectedCategory);

  const toggle = (id: string) => {
    setOpenId(openId === id ? null : id);
  };

  return (
    <section id="faq" className="py-24 sm:py-32 relative overflow-hidden">
      {/* Background Ambient Radial Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[350px] bg-indigo-500/5 dark:bg-indigo-500/10 rounded-full blur-[140px] pointer-events-none -z-10" />

      <div className="container max-w-4xl mx-auto px-6 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-12 sm:mb-16">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-indigo-50 dark:bg-indigo-500/10 border border-indigo-200/60 dark:border-indigo-500/20 text-xs font-semibold uppercase tracking-[0.18em] text-[#6366F1] dark:text-[#818CF8] mb-3">
              <Sparkles size={13} className="text-indigo-500 animate-pulse" />
              <span>Frequently Asked Questions</span>
            </div>

            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-slate-900 dark:text-zinc-50">
              Common Inquiries
            </h2>
            <p className="text-slate-600 dark:text-zinc-400 mt-3 text-base sm:text-lg max-w-xl mx-auto leading-relaxed">
              Direct answers regarding project turnaround, technical scope, and ongoing maintenance.
            </p>
          </motion.div>
        </div>

        {/* Category Filter Pills */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-10">
          {categories.map((cat) => {
            const isActive = selectedCategory === cat;
            return (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`px-4 py-1.5 rounded-full text-xs font-semibold transition-all duration-200 border ${
                  isActive
                    ? "bg-indigo-600 text-white border-indigo-600 shadow-md shadow-indigo-500/20"
                    : "bg-white/80 dark:bg-white/[0.04] text-slate-600 dark:text-zinc-400 border-black/[0.06] dark:border-white/[0.08] hover:border-black/[0.12] dark:hover:border-white/20"
                }`}
              >
                {cat}
              </button>
            );
          })}
        </div>

        {/* Accordion FAQ Items */}
        <div className="space-y-3.5">
          {filteredFaqs.map((faq, i) => {
            const isOpen = openId === faq.id;
            return (
              <motion.div
                key={faq.id}
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.35, delay: i * 0.04 }}
                className={`group rounded-3xl border transition-all duration-300 overflow-hidden ${
                  isOpen
                    ? "bg-white dark:bg-slate-900/90 border-indigo-500/40 dark:border-indigo-500/50 shadow-[0_12px_35px_rgba(99,102,241,0.12)] dark:shadow-[0_12px_35px_rgba(99,102,241,0.18)]"
                    : "bg-white/80 dark:bg-slate-900/60 border-black/[0.06] dark:border-white/[0.08] hover:border-black/[0.12] dark:hover:border-white/20"
                }`}
              >
                <button
                  onClick={() => toggle(faq.id)}
                  className="w-full py-5 px-6 sm:px-7 flex items-start sm:items-center justify-between text-left gap-4 hover:bg-slate-50/50 dark:hover:bg-white/[0.02] transition-colors"
                >
                  <div className="flex items-start sm:items-center gap-3.5 flex-1">
                    <span
                      className={`font-mono text-xs font-bold px-2.5 py-1 rounded-lg shrink-0 transition-colors ${
                        isOpen
                          ? "bg-indigo-500/10 text-indigo-600 dark:text-indigo-400 border border-indigo-500/20"
                          : "bg-slate-100 dark:bg-white/5 text-slate-400 dark:text-zinc-600 border border-transparent"
                      }`}
                    >
                      {faq.number}
                    </span>
                    <span className="font-semibold text-slate-900 dark:text-zinc-100 text-base sm:text-lg leading-snug">
                      {faq.question}
                    </span>
                  </div>

                  <div
                    className={`w-8 h-8 rounded-full flex items-center justify-center shrink-0 transition-all duration-300 mt-1 sm:mt-0 ${
                      isOpen
                        ? "bg-indigo-600 text-white rotate-180 shadow-sm"
                        : "bg-slate-100 dark:bg-white/5 text-slate-400 dark:text-zinc-500 group-hover:text-slate-700 dark:group-hover:text-zinc-300"
                    }`}
                  >
                    <ChevronDown size={16} />
                  </div>
                </button>

                <AnimatePresence>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.28, ease: "easeOut" }}
                    >
                      <div className="px-6 sm:px-7 pb-6 pt-2 text-slate-600 dark:text-zinc-300 text-sm sm:text-base leading-relaxed border-t border-slate-100 dark:border-white/[0.06] flex flex-col gap-3">
                        <p>{faq.answer}</p>
                        <div className="flex items-center gap-2 pt-1">
                          <span className="text-[11px] font-semibold uppercase tracking-wider px-2.5 py-0.5 rounded-full bg-slate-100 dark:bg-white/5 text-slate-500 dark:text-zinc-400 border border-slate-200/50 dark:border-white/5">
                            Category: {faq.category}
                          </span>
                        </div>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            );
          })}
        </div>

        {/* Quick Contact & Consultation Capsule */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="mt-12 sm:mt-16 rounded-3xl p-6 sm:p-8 bg-gradient-to-br from-indigo-50/60 via-white to-white dark:from-indigo-950/20 dark:via-slate-900/80 dark:to-slate-900/90 border border-indigo-200/50 dark:border-indigo-500/20 backdrop-blur-xl flex flex-col sm:flex-row items-center justify-between gap-6 shadow-sm"
        >
          <div className="text-center sm:text-left">
            <div className="inline-flex items-center gap-2 text-xs font-semibold text-emerald-600 dark:text-emerald-400 mb-2">
              <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
              <span>Typically replies within 2–4 hours</span>
            </div>
            <h3 className="text-lg sm:text-xl font-bold text-slate-900 dark:text-zinc-100">
              Have a specific question not listed here?
            </h3>
            <p className="text-xs sm:text-sm text-slate-600 dark:text-zinc-400 mt-1 max-w-md">
              Reach out directly to discuss technical feasibility, custom scopes, or specific requirements.
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-3 shrink-0 w-full sm:w-auto justify-center">
            <a
              href="https://wa.me/8801743282144"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-emerald-600 hover:bg-emerald-500 text-white text-xs font-semibold shadow-sm hover:shadow transition-all group"
            >
              <MessageSquare size={14} />
              <span>WhatsApp Chat</span>
              <ArrowUpRight size={13} className="transition-transform group-hover:translate-x-0.5" />
            </a>

            <a
              href="#contact"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-slate-900 hover:bg-slate-800 text-white dark:bg-white/[0.08] dark:hover:bg-white/[0.15] dark:text-zinc-200 text-xs font-semibold border border-transparent dark:border-white/10 transition-all"
            >
              <Send size={13} />
              <span>Contact Form</span>
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Faq;

