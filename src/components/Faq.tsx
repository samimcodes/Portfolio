"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown, ArrowUpRight } from "lucide-react";

interface FAQItem {
  question: string;
  answer: string;
}

const faqs: FAQItem[] = [
  {
    question: "What types of web projects do you build?",
    answer: "I specialize in production-grade full-stack web platforms, revenue-generating SaaS applications with Stripe billing, real-time platforms (live tracking, WebSockets), and high-throughput REST APIs.",
  },
  {
    question: "What core technologies and frameworks do you use?",
    answer: "My core toolchain is Next.js (App Router), React 19, TypeScript, and Tailwind CSS on the client, powered by Node.js, Express.js, PostgreSQL with Prisma ORM, and MongoDB on the backend.",
  },
  {
    question: "Are you available for freelance work and remote contracts?",
    answer: "Yes, absolutely. In addition to my role at JEVXO, I am open to remote contracts, freelance client projects, and marketplace orders on Fiverr (fiverr.com/samim_io) with flexible working hours across global time zones.",
  },
  {
    question: "How do you handle pricing and project delivery timelines?",
    answer: "Pricing and schedules depend on scope and architecture. A focused MVP typically delivers within 2 to 4 weeks. I offer both fixed milestone-based quotes and ongoing retainers with transparent progress updates.",
  },
  {
    question: "How do we get started on a project together?",
    answer: "Send a message through the contact form, on WhatsApp (+880 1743282144), or via email (mdsamimhosen827@gmail.com). We will discuss your goals, define the technical requirements, and outline a delivery roadmap.",
  },
];

const Faq: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggle = (idx: number) => {
    setOpenIndex(openIndex === idx ? null : idx);
  };

  return (
    <section id="faq" className="py-24 relative overflow-hidden">
      <div className="container max-w-3xl mx-auto px-6">
        <div className="text-center mb-16">
          <span className="text-xs font-semibold uppercase tracking-[0.2em] text-[#6366F1] dark:text-[#818CF8] mb-2 block">
            Frequently Asked Questions
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-slate-900 dark:text-zinc-50">
            Common Inquiries
          </h2>
          <p className="text-slate-500 dark:text-zinc-400 mt-2 text-base max-w-md mx-auto">
            Direct answers regarding project turnaround, technical scope, and ongoing maintenance.
          </p>
        </div>

        <div className="space-y-3.5">
          {faqs.map((faq, i) => {
            const isOpen = openIndex === i;
            return (
              <motion.div
                key={faq.question}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.05 }}
                className="rounded-3xl border border-black/[0.06] dark:border-white/10 bg-white/80 dark:bg-slate-900/70 backdrop-blur-xl overflow-hidden shadow-sm hover:border-black/[0.1] dark:hover:border-indigo-500/50 transition-all"
              >
                <button
                  onClick={() => toggle(i)}
                  className="w-full py-5 px-6 flex items-center justify-between text-left gap-4 hover:bg-slate-50/50 dark:hover:bg-white/[0.02] transition-colors"
                >
                  <span className="font-semibold text-slate-900 dark:text-zinc-100 text-base sm:text-lg">
                    {faq.question}
                  </span>
                  <div className={`w-8 h-8 rounded-full flex items-center justify-center shrink-0 transition-transform duration-300 ${
                    isOpen ? "rotate-180 text-blue-500" : "text-slate-400 dark:text-zinc-500"
                  }`}>
                    <ChevronDown size={18} />
                  </div>
                </button>

                <AnimatePresence>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.25, ease: "easeOut" }}
                    >
                      <div className="px-6 pb-6 pt-1 text-slate-600 dark:text-zinc-400 text-sm leading-relaxed border-t border-slate-200/60 dark:border-white/[0.06]">
                        {faq.answer}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            );
          })}
        </div>

        <div className="mt-10 text-center">
          <a
            href="#contact"
            className="inline-flex items-center gap-1.5 text-xs font-semibold text-slate-500 dark:text-zinc-400 hover:text-slate-900 dark:hover:text-white transition-colors"
          >
            <span>Have a different question? Let&apos;s talk directly</span>
            <ArrowUpRight size={13} />
          </a>
        </div>
      </div>
    </section>
  );
};

export default Faq;
