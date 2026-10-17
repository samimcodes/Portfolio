"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowUpRight, Download, CheckCircle2 } from "lucide-react";
import me3Img from "@/assets/me3.png";

const highlights = [
  "Hands-on experience architecting full-stack web applications at JEVXO.",
  "Deep expertise in Next.js App Router, React 19, TypeScript, and Tailwind CSS.",
  "Relational data modeling & API engineering with PostgreSQL and Prisma ORM.",
  "Computer Technology scholar at Rangpur Polytechnic Institute.",
];

const About: React.FC = () => {
  return (
    <section id="about" className="py-24 relative overflow-hidden">
      <div className="container max-w-6xl mx-auto px-6">
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Left Column: Image (5 cols) */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-5 flex justify-center"
          >
            <div className="relative w-full max-w-[340px] aspect-[4/5] rounded-[2rem] p-2 bg-gradient-to-b from-slate-200/60 to-transparent dark:from-white/10 dark:to-transparent border border-black/[0.04] dark:border-white/[0.08] shadow-2xl">
              <div className="relative w-full h-full rounded-[1.75rem] overflow-hidden bg-slate-100 dark:bg-slate-900">
                <Image
                  src={me3Img}
                  alt="Md Samim Hosen"
                  unoptimized
                  className="w-full h-full object-cover object-top"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent pointer-events-none" />

                <div className="absolute bottom-4 left-4 right-4 p-3.5 rounded-2xl bg-white/90 dark:bg-slate-900/90 backdrop-blur-xl border border-white/40 dark:border-white/15 shadow-xl">
                  <p className="text-xs font-bold text-slate-900 dark:text-white">Full Stack Developer</p>
                  <p className="text-[11px] text-blue-600 dark:text-blue-400 font-medium">JEVXO • Remote / Bangladesh</p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Right Column: Bio (7 cols) */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.6, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-7"
          >
            <span className="text-xs font-semibold uppercase tracking-[0.2em] text-[#6366F1] dark:text-[#818CF8] mb-2 block">
              About &amp; Philosophy
            </span>

            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-slate-900 dark:text-zinc-50 mb-6 leading-tight">
              Engineering with purpose, <br />
              <span className="text-slate-400 dark:text-zinc-500 font-normal">
                delivering with precision.
              </span>
            </h2>

            <div className="space-y-4 text-base text-slate-600 dark:text-zinc-400 leading-relaxed font-normal mb-8">
              <p>
                I am a Full Stack Developer currently contributing at <strong className="text-slate-900 dark:text-zinc-200 font-semibold">JEVXO</strong>, focused on creating scalable, responsive, and user-centric web applications.
              </p>
              <p>
                I bridge the gap between intuitive user experiences and resilient backend architecture. Every product I build is designed for measurable performance, maintainable code, and high client satisfaction.
              </p>
            </div>

            {/* Checklist */}
            <div className="space-y-2.5 mb-8">
              {highlights.map((item, idx) => (
                <div key={idx} className="flex items-start gap-3 text-sm text-slate-800 dark:text-zinc-300">
                  <CheckCircle2 size={16} className="text-blue-500 shrink-0 mt-0.5" />
                  <span>{item}</span>
                </div>
              ))}
            </div>

            {/* Actions */}
            <div className="flex flex-wrap items-center gap-3.5">
              <a
                href="#contact"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-slate-900 hover:bg-black dark:bg-white dark:hover:bg-zinc-200 text-white dark:text-slate-950 font-semibold text-sm shadow-sm transition-all"
              >
                <span>Get in Touch</span>
                <ArrowUpRight size={15} />
              </a>

              <a
                href="https://drive.google.com/file/d/1liEkw82D8zQL0-A0BIqw-PK5l7UBEo7C/view?usp=sharing"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-white hover:bg-slate-50 dark:bg-white/[0.05] dark:hover:bg-white/[0.09] border border-black/[0.08] dark:border-white/[0.08] text-slate-900 dark:text-zinc-200 font-semibold text-sm shadow-sm transition-all"
              >
                <Download size={15} />
                <span>Download Resume</span>
              </a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
