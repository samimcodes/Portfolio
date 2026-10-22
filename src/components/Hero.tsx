"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import {
  ArrowRight,
  Github,
  Linkedin,
  Mail,
  FileText,
  Sparkles,
  Layers,
  Code2,
} from "lucide-react";
import { SiFiverr } from "react-icons/si";
import meImg from "@/assets/me.png";

const techStack = [
  "Next.js 16",
  "React 19",
  "TypeScript",
  "Tailwind CSS",
  "Node.js",
  "Express.js",
  "PostgreSQL",
  "Prisma ORM",
  "MongoDB",
  "Socket.IO",
  "REST APIs",
  "Git & GitHub",
  "Docker",
  "Vercel",
];

const Hero: React.FC = () => {
  return (
    <section
      id="home"
      className="relative min-h-[96vh] flex flex-col justify-between pt-32 pb-12 overflow-hidden text-slate-900 dark:text-slate-100"
    >
      <div className="container max-w-6xl mx-auto px-6 my-auto">
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          {/* Left Column (7 cols) */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-7 max-w-2xl"
          >
            {/* Status Pills */}
            <div className="flex flex-wrap items-center gap-2.5 mb-6">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/80 dark:bg-slate-900/80 backdrop-blur-md border border-slate-200/80 dark:border-white/10 text-xs font-semibold text-slate-800 dark:text-slate-200 shadow-sm">
                <span className="w-2 h-2 rounded-full bg-emerald-500 shadow-[0_0_10px_rgba(16,185,129,0.9)]" />
                <span>
                  Full Stack Developer @ <strong className="text-blue-600 dark:text-blue-400">JEVXO</strong>
                </span>
              </div>

              <div className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-blue-500/10 dark:bg-indigo-500/15 border border-blue-500/20 text-xs font-semibold text-blue-600 dark:text-indigo-400">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75" />
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-blue-500" />
                </span>
                <span>Open for Remote Roles &amp; Contracts</span>
              </div>
            </div>

            {/* Monumental Radiant Headline */}
            <h1 className="text-4xl sm:text-5xl lg:text-[3.85rem] font-bold tracking-tight text-slate-900 dark:text-white leading-[1.12] mb-6">
              Software Engineer &amp;{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 dark:from-blue-400 dark:via-indigo-400 dark:to-purple-400 font-extrabold">
                Full Stack Developer.
              </span>
            </h1>

            {/* Introduction */}
            <p className="text-base sm:text-lg text-slate-600 dark:text-slate-300 leading-relaxed font-normal mb-8 max-w-xl">
              Hi, I&apos;m <strong className="text-slate-900 dark:text-white font-semibold">Md Samim Hosen</strong>, a Full Stack Developer at <span className="text-blue-600 dark:text-blue-400 font-semibold">JEVXO</span> based in Rangpur, Bangladesh. I craft reliable, low-latency web platforms using <span className="font-semibold text-slate-900 dark:text-slate-100">Next.js, TypeScript, PostgreSQL, Prisma, and Node.js</span>.
            </p>

            {/* Action Buttons */}
            <div className="flex flex-wrap items-center gap-4 mb-8">
              <a
                href="#projects"
                className="group inline-flex items-center gap-2.5 px-6 py-3.5 rounded-xl bg-blue-600 hover:bg-blue-700 text-white font-semibold text-sm shadow-lg shadow-blue-500/25 hover:shadow-blue-500/40 hover:scale-[1.03] active:scale-98 transition-all"
              >
                <span>Explore Projects</span>
                <ArrowRight size={17} className="group-hover:translate-x-1 transition-transform" />
              </a>

              <a
                href="#contact"
                className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl bg-white dark:bg-slate-900/80 hover:bg-slate-100 dark:hover:bg-slate-800 text-slate-900 dark:text-slate-100 font-semibold text-sm border border-slate-200 dark:border-white/10 shadow-sm hover:scale-[1.02] transition-all"
              >
                Let&apos;s Connect
              </a>

              <a
                href="https://drive.google.com/file/d/1liEkw82D8zQL0-A0BIqw-PK5l7UBEo7C/view?usp=sharing"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-1.5 px-4 py-3 rounded-xl text-xs font-semibold text-slate-600 dark:text-slate-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
              >
                <FileText size={16} /> View Resume
              </a>
            </div>

            {/* Social Links & Location */}
            <div className="flex items-center gap-5 text-slate-500 dark:text-slate-400">
              <a
                href="https://github.com/samimcodes"
                target="_blank"
                rel="noreferrer"
                aria-label="GitHub Profile"
                className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
              >
                <Github size={21} />
              </a>
              <a
                href="https://www.linkedin.com/in/samim01/"
                target="_blank"
                rel="noreferrer"
                aria-label="LinkedIn Profile"
                className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
              >
                <Linkedin size={21} />
              </a>
              <a
                href="mailto:mdsamimhosen827@gmail.com"
                aria-label="Email Samim"
                className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
              >
                <Mail size={21} />
              </a>
              <a
                href="https://www.fiverr.com/samim_io"
                target="_blank"
                rel="noreferrer"
                aria-label="Fiverr Profile"
                className="hover:text-[#1DBF73] transition-colors"
              >
                <SiFiverr size={22} />
              </a>
              <span className="w-1 h-1 rounded-full bg-slate-300 dark:bg-slate-700" />
              <span className="text-xs font-medium text-slate-500 dark:text-slate-400">
                Rangpur, Bangladesh (UTC+6)
              </span>
            </div>
          </motion.div>

          {/* Right Column: 3D Photo Showcase with Luminous Ambient Aura */}
          <motion.div
            initial={{ opacity: 0, scale: 0.92, rotateY: -6 }}
            animate={{ opacity: 1, scale: 1, rotateY: 0 }}
            transition={{ duration: 0.85, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-5 relative flex justify-center lg:justify-end"
          >
            <div className="relative w-[300px] sm:w-[330px] aspect-[4/5] group">
              {/* 1. Focused Crisp Radiant Glow (No murky full-screen blur) */}
              <div className="absolute inset-0 bg-gradient-to-tr from-blue-600 to-purple-600 rounded-[2.5rem] opacity-25 dark:opacity-40 blur-2xl group-hover:opacity-55 transition-all duration-500" />

              {/* 2. Cyber Corner Brackets */}
              <div className="absolute -top-3 -left-3 w-10 h-10 border-t-4 border-l-4 border-blue-500 rounded-tl-2xl z-20 transition-all duration-500 group-hover:-translate-x-1 group-hover:-translate-y-1 opacity-90" />
              <div className="absolute -bottom-3 -right-3 w-10 h-10 border-b-4 border-r-4 border-purple-500 rounded-br-2xl z-20 transition-all duration-500 group-hover:translate-x-1 group-hover:translate-y-1 opacity-90" />

              {/* 3. Razor-Sharp Photo Card */}
              <div className="relative z-10 w-full h-full p-2.5 rounded-[2.5rem] bg-white dark:bg-[#111726] border border-slate-200/90 dark:border-white/15 shadow-2xl transition-transform duration-500 group-hover:scale-[1.01] flex items-center justify-center overflow-hidden">
                <Image
                  src={meImg}
                  alt="Md Samim Hosen — Full Stack Developer"
                  priority
                  unoptimized
                  className="w-full h-full object-cover object-top rounded-[2rem] transition-transform duration-500 group-hover:scale-[1.02]"
                />
              </div>

              {/* 4. Floating Glass Badge: 10+ Projects */}
              <motion.div
                initial={{ y: 25, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.6, duration: 0.6 }}
                className="absolute -bottom-6 -left-6 sm:-left-8 z-30 bg-white/90 dark:bg-slate-900/90 backdrop-blur-2xl px-4 py-3 rounded-2xl border border-slate-200/80 dark:border-white/15 shadow-2xl group-hover:-translate-y-1.5 transition-transform duration-500"
              >
                <div className="flex items-center gap-3.5">
                  <div className="w-11 h-11 flex items-center justify-center bg-gradient-to-br from-blue-500 to-purple-600 rounded-xl text-white shadow-lg shadow-blue-500/30">
                    <Layers size={22} />
                  </div>
                  <div className="text-left">
                    <p className="font-bold text-slate-900 dark:text-white text-sm">
                      20+ Projects
                    </p>
                    <p className="text-xs text-slate-500 dark:text-slate-400 font-medium">
                      Production &amp; Full-Stack
                    </p>
                  </div>
                </div>
              </motion.div>

              {/* 5. Floating Glass Badge: Full-Stack Beacon */}
              <motion.div
                initial={{ y: -20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.75, duration: 0.6 }}
                className="absolute -top-5 -right-4 sm:-right-6 z-30 bg-white/90 dark:bg-slate-900/90 backdrop-blur-2xl px-4 py-2.5 rounded-2xl border border-slate-200/80 dark:border-white/15 shadow-2xl group-hover:translate-y-1.5 transition-transform duration-500"
              >
                <div className="flex items-center gap-2.5">
                  <span className="w-2.5 h-2.5 rounded-full bg-blue-500 animate-pulse shadow-[0_0_8px_rgba(59,130,246,0.8)]" />
                  <p className="font-bold text-slate-900 dark:text-white text-xs">
                    Full-Stack Specialist
                  </p>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Infinite Tech Marquee Ribbon */}
      <div className="w-full mt-12 border-y border-slate-200/80 dark:border-white/10 bg-white/40 dark:bg-slate-900/40 backdrop-blur-md py-3.5 overflow-hidden">
        <div className="flex w-max animate-marquee space-x-8 text-xs sm:text-sm font-semibold text-slate-600 dark:text-slate-300">
          {[...techStack, ...techStack, ...techStack].map((tech, i) => (
            <span key={i} className="inline-flex items-center gap-2 tracking-wide whitespace-nowrap">
              <span className="w-1.5 h-1.5 rounded-full bg-blue-500/80" />
              <span>{tech}</span>
            </span>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Hero;
