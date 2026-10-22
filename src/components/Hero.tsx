"use client";

import React, { useState } from "react";
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
  Clock,
  ShieldCheck,
  CheckCircle2,
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
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    setMousePos({
      x: e.clientX - rect.left,
      y: e.clientY - rect.top,
    });
  };

  return (
    <section
      id="home"
      className="relative min-h-[96vh] flex flex-col justify-between pt-32 pb-12 overflow-hidden text-slate-900 dark:text-slate-100"
    >
      {/* Subtle Ambient Radial Lighting Bloom */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[450px] bg-gradient-to-tr from-blue-600/10 via-indigo-600/8 to-purple-600/5 rounded-full blur-[110px] pointer-events-none -z-10" />

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
                <span>Available for Remote Roles &amp; Client Projects</span>
              </div>
            </div>

            {/* Monumental Radiant Headline */}
            <h1 className="text-4xl sm:text-5xl lg:text-[3.85rem] font-bold tracking-tight text-slate-900 dark:text-white leading-[1.12] mb-6">
              Software Engineer &amp;{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 dark:from-blue-400 dark:via-indigo-400 dark:to-purple-400 font-extrabold">
                Full Stack Developer.
              </span>
            </h1>

            {/* Introduction: Executive Dual Pitch */}
            <p className="text-base sm:text-lg text-slate-600 dark:text-zinc-300 leading-relaxed font-normal mb-8 max-w-xl">
              Full Stack Engineer at <strong className="text-slate-900 dark:text-white font-semibold">JEVXO</strong> specializing in <span className="text-slate-900 dark:text-white font-semibold">Next.js 16, TypeScript, PostgreSQL, and Node.js</span>. I architect production-grade web platforms and scalable SaaS solutions — available for <span className="text-blue-600 dark:text-blue-400 font-semibold">remote engineering teams</span> and <span className="text-indigo-600 dark:text-indigo-400 font-semibold">founder MVP partnerships</span>.
            </p>

            {/* Action Buttons with Radiant Shimmer */}
            <div className="flex flex-wrap items-center gap-3.5 mb-7">
              {/* Primary Button: Shimmer & Glow */}
              <a
                href="#projects"
                className="group relative inline-flex items-center gap-2.5 px-6 py-3.5 rounded-xl bg-gradient-to-r from-blue-600 via-indigo-600 to-blue-600 hover:from-blue-500 hover:via-indigo-500 hover:to-blue-500 text-white font-semibold text-sm shadow-[0_0_25px_rgba(59,130,246,0.38)] hover:shadow-[0_0_35px_rgba(99,102,241,0.5)] hover:scale-[1.03] active:scale-98 transition-all overflow-hidden"
              >
                {/* Shimmer Sweep Animation */}
                <div className="absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-1000 bg-gradient-to-r from-transparent via-white/25 to-transparent pointer-events-none" />
                <span>Explore My Work</span>
                <ArrowRight size={17} className="group-hover:translate-x-1 transition-transform" />
              </a>

              {/* Secondary Button: Subtle Glow Border */}
              <a
                href="#contact"
                className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl bg-white/80 dark:bg-slate-900/80 hover:bg-slate-100 dark:hover:bg-slate-800 text-slate-900 dark:text-slate-100 font-semibold text-sm border border-slate-200/90 dark:border-white/10 hover:border-indigo-500/50 dark:hover:border-indigo-500/50 shadow-sm hover:shadow-[0_0_20px_rgba(99,102,241,0.15)] hover:scale-[1.02] active:scale-98 transition-all"
              >
                <Sparkles size={15} className="text-indigo-500" />
                <span>Hire Me / Let&apos;s Talk</span>
              </a>

              {/* Tertiary Button: Download CV */}
              <a
                href="https://drive.google.com/file/d/1liEkw82D8zQL0-A0BIqw-PK5l7UBEo7C/view?usp=sharing"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-1.5 px-4 py-3 rounded-xl text-xs font-semibold text-slate-600 dark:text-slate-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
              >
                <FileText size={16} /> Download CV
              </a>
            </div>

            {/* Client Trust & Remote Standards Capsule */}
            <div className="inline-flex flex-wrap items-center gap-y-2 gap-x-4 p-2 px-3.5 rounded-2xl bg-slate-100/80 dark:bg-white/[0.04] border border-slate-200/80 dark:border-white/[0.08] text-xs text-slate-600 dark:text-zinc-400 mb-8 backdrop-blur-md">
              <span className="inline-flex items-center gap-1.5 font-medium">
                <span className="w-1.5 h-1.5 rounded-full bg-blue-500 animate-pulse" />
                <span>Worldwide Remote (Flexible)</span>
              </span>
              <span className="text-slate-300 dark:text-zinc-700 hidden sm:inline">•</span>
              <span className="inline-flex items-center gap-1.5 font-medium">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-500" />
                <span>On-Time Milestone Delivery</span>
              </span>
              <span className="text-slate-300 dark:text-zinc-700 hidden sm:inline">•</span>
              <span className="inline-flex items-center gap-1.5 font-medium">
                <span className="w-1.5 h-1.5 rounded-full bg-purple-500" />
                <span>Type-Safe Production Code</span>
              </span>
            </div>

            {/* Social Links & Location */}
            <div className="flex items-center gap-5 text-slate-500 dark:text-slate-400 pt-5 border-t border-slate-200/60 dark:border-white/[0.06]">
              <a
                href="https://github.com/samimcodes"
                target="_blank"
                rel="noreferrer"
                aria-label="GitHub Profile"
                className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
              >
                <Github size={20} />
              </a>
              <a
                href="https://www.linkedin.com/in/samim01/"
                target="_blank"
                rel="noreferrer"
                aria-label="LinkedIn Profile"
                className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
              >
                <Linkedin size={20} />
              </a>
              <a
                href="mailto:mdsamimhosen827@gmail.com"
                aria-label="Email Samim"
                className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
              >
                <Mail size={20} />
              </a>
              <a
                href="https://www.fiverr.com/samim_io"
                target="_blank"
                rel="noreferrer"
                aria-label="Fiverr Profile"
                className="hover:text-[#1DBF73] transition-colors"
              >
                <SiFiverr size={21} />
              </a>
              <span className="w-1 h-1 rounded-full bg-slate-300 dark:bg-slate-700" />
              <span className="text-xs font-medium text-slate-500 dark:text-slate-400">
                Rangpur, Bangladesh (UTC+6)
              </span>
            </div>
          </motion.div>

          {/* Right Column: 3D Photo Showcase with Conic Border Beam & Spotlight Hover */}
          <motion.div
            initial={{ opacity: 0, scale: 0.92, rotateY: -6 }}
            animate={{ opacity: 1, scale: 1, rotateY: 0 }}
            transition={{ duration: 0.85, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-5 relative flex justify-center lg:justify-end"
          >
            <div
              onMouseMove={handleMouseMove}
              onMouseEnter={() => setIsHovered(true)}
              onMouseLeave={() => setIsHovered(false)}
              className="relative w-[300px] sm:w-[330px] aspect-[4/5] group"
            >
              {/* 1. Interactive Mouse Spotlight Glow */}
              <div
                className="absolute -inset-6 rounded-[3rem] opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none blur-2xl -z-10"
                style={{
                  background: isHovered
                    ? `radial-gradient(350px circle at ${mousePos.x}px ${mousePos.y}px, rgba(99, 102, 241, 0.28), transparent 70%)`
                    : "none",
                }}
              />

              {/* 2. Majestic Sun Rays / Solar God-Rays (সূর্যের আলোক রশ্মি) */}
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ repeat: Infinity, duration: 45, ease: "linear" }}
                className="absolute -inset-20 sm:-inset-28 pointer-events-none -z-10"
                style={{
                  background:
                    "repeating-conic-gradient(from 0deg at 50% 50%, rgba(99, 102, 241, 0.22) 0deg, transparent 6deg, rgba(251, 191, 36, 0.18) 12deg, transparent 18deg, rgba(59, 130, 246, 0.22) 24deg, transparent 30deg)",
                  maskImage:
                    "radial-gradient(circle at 50% 50%, rgba(0,0,0,1) 25%, rgba(0,0,0,0) 70%)",
                  WebkitMaskImage:
                    "radial-gradient(circle at 50% 50%, rgba(0,0,0,1) 25%, rgba(0,0,0,0) 70%)",
                }}
              />

              {/* 3. Radiant Solar Flare Core (Warm Amber & Indigo Sunlight Corona) */}
              <div
                className="absolute -top-12 -inset-x-8 h-[120%] pointer-events-none -z-10 opacity-60 dark:opacity-75 blur-2xl"
                style={{
                  background:
                    "radial-gradient(ellipse 70% 50% at 50% 15%, rgba(251, 191, 36, 0.22) 0%, rgba(99, 102, 241, 0.20) 45%, transparent 75%)",
                }}
              />

              {/* 4. Ambient Aura Backdrop */}
              <div className="absolute inset-0 bg-gradient-to-tr from-blue-600/25 via-indigo-600/30 to-amber-500/15 rounded-[2.5rem] opacity-50 dark:opacity-65 blur-2xl group-hover:opacity-85 transition-all duration-500 -z-10 pointer-events-none" />

              {/* 5. Razor-Sharp Photo Card */}
              <div className="relative z-10 w-full h-full p-2.5 rounded-[2.5rem] bg-white/95 dark:bg-[#111726]/95 backdrop-blur-xl border border-slate-200/90 dark:border-white/15 shadow-[0_20px_50px_rgba(0,0,0,0.12)] dark:shadow-[0_25px_60px_rgba(0,0,0,0.4)] transition-transform duration-500 group-hover:scale-[1.01] flex items-center justify-center overflow-hidden">
                <Image
                  src={meImg}
                  alt="Md Samim Hosen — Full Stack Developer"
                  priority
                  unoptimized
                  className="w-full h-full object-cover object-top rounded-[2rem] transition-transform duration-500 group-hover:scale-[1.02]"
                />
              </div>

              {/* 6. Floating Glass Badge: 20+ Projects with Gentle Floating Bob */}
              <motion.div
                initial={{ y: 25, opacity: 0 }}
                animate={{
                  y: [0, -6, 0],
                  opacity: 1,
                }}
                transition={{
                  opacity: { delay: 0.6, duration: 0.6 },
                  y: { repeat: Infinity, duration: 4.2, ease: "easeInOut" },
                }}
                className="absolute -bottom-6 -left-6 sm:-left-8 z-30 bg-white/90 dark:bg-slate-900/90 backdrop-blur-2xl px-4 py-3 rounded-2xl border border-slate-200/90 dark:border-white/15 shadow-[0_15px_35px_rgba(0,0,0,0.16)] transition-all duration-300"
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

              {/* 7. Floating Glass Badge: Full-Stack Beacon with Gentle Floating Bob */}
              <motion.div
                initial={{ y: -20, opacity: 0 }}
                animate={{
                  y: [0, 5, 0],
                  opacity: 1,
                }}
                transition={{
                  opacity: { delay: 0.75, duration: 0.6 },
                  y: { repeat: Infinity, duration: 4.8, ease: "easeInOut", delay: 1 },
                }}
                className="absolute -top-5 -right-4 sm:-right-6 z-30 bg-white/90 dark:bg-slate-900/90 backdrop-blur-2xl px-4 py-2.5 rounded-2xl border border-slate-200/90 dark:border-white/15 shadow-[0_15px_35px_rgba(0,0,0,0.16)] transition-all duration-300"
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
