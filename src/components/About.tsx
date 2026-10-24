"use client";

import React, { useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import {
  ArrowRight,
  Download,
  Layers,
  Database,
  Sparkles,
  Zap,
} from "lucide-react";
import me3Img from "@/assets/me3.png";
import me3_3dImg from "@/assets/me3_3d.jpg";

const pillars = [
  {
    title: "Full-Stack Web",
    stack: "Next.js 16 • React 19 • TypeScript",
    desc: "Sub-second SSR, responsive design, and fluid micro-interactions.",
    icon: Layers,
    accent: "from-blue-500/10 to-indigo-500/10 border-blue-500/20 text-blue-500",
  },
  {
    title: "Backend & Systems",
    stack: "Node.js • PostgreSQL • Prisma ORM",
    desc: "Type-safe RESTful APIs, relational schemas, and WebSocket engines.",
    icon: Database,
    accent: "from-indigo-500/10 to-purple-500/10 border-indigo-500/20 text-indigo-500",
  },
  {
    title: "Engineering Roots",
    stack: "JEVXO • Rangpur Polytechnic",
    desc: "Computer Technology foundations with real-world production delivery.",
    icon: Sparkles,
    accent: "from-emerald-500/10 to-teal-500/10 border-emerald-500/20 text-emerald-500",
  },
];

const About: React.FC = () => {
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const [tilt, setTilt] = useState({ rotateX: 0, rotateY: 0 });
  const [isHovered, setIsHovered] = useState(false);

  // Smooth 3D tilt physics on portrait
  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    setMousePos({ x, y });

    const centerX = rect.width / 2;
    const centerY = rect.height / 2;
    const rotateX = -((y - centerY) / centerY) * 12;
    const rotateY = ((x - centerX) / centerX) * 12;
    setTilt({ rotateX, rotateY });
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
    setTilt({ rotateX: 0, rotateY: 0 });
  };

  return (
    <section
      id="about"
      className="relative min-h-[90vh] lg:min-h-screen flex flex-col justify-center pt-28 lg:pt-32 pb-16 lg:pb-20 overflow-hidden text-slate-900 dark:text-slate-100"
    >
      {/* Soft Ambient Radial Glow */}
      <div className="absolute top-1/2 left-1/4 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[500px] bg-gradient-to-tr from-blue-600/10 via-indigo-600/8 to-purple-600/5 rounded-full blur-[140px] pointer-events-none -z-10" />

      <div className="container max-w-6xl mx-auto px-6 my-auto">
        <div className="grid lg:grid-cols-12 gap-10 lg:gap-14 items-center">
          
          {/* Left Column: 3D Morphing Portrait Frame with Gyroscope Tilt (5 cols) */}
          <motion.div
            initial={{ opacity: 0, scale: 0.94, x: -25 }}
            whileInView={{ opacity: 1, scale: 1, x: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-5 relative flex justify-center [perspective:1000px]"
          >
            <div
              onMouseMove={handleMouseMove}
              onMouseEnter={() => setIsHovered(true)}
              onMouseLeave={handleMouseLeave}
              className="relative w-[260px] sm:w-[280px] lg:w-[290px] xl:w-[310px] aspect-[4/5] group cursor-pointer"
            >
              {/* 1. Interactive Mouse Spotlight Glow */}
              <div
                className="absolute -inset-6 rounded-[3rem] opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none blur-2xl -z-10"
                style={{
                  background: isHovered
                    ? `radial-gradient(350px circle at ${mousePos.x}px ${mousePos.y}px, rgba(99, 102, 241, 0.30), transparent 70%)`
                    : "none",
                }}
              />

              {/* 2. Soft Ambient Aura Backdrop */}
              <div className="absolute inset-0 bg-gradient-to-tr from-blue-600/20 via-indigo-600/25 to-purple-600/15 rounded-[2.5rem] opacity-40 dark:opacity-60 blur-2xl group-hover:opacity-80 transition-all duration-500 -z-10 pointer-events-none" />

              {/* 3. Razor-Sharp Luxury Photo Card with Real-Time 3D Tilt & Continuous Real ⇄ 3D Morph */}
              <div
                style={{
                  transform: isHovered
                    ? `perspective(1000px) rotateX(${tilt.rotateX}deg) rotateY(${tilt.rotateY}deg) scale3d(1.02, 1.02, 1.02)`
                    : "perspective(1000px) rotateX(0deg) rotateY(0deg) scale3d(1, 1, 1)",
                  transition: isHovered
                    ? "transform 0.08s ease-out"
                    : "transform 0.5s cubic-bezier(0.16, 1, 0.3, 1)",
                  transformStyle: "preserve-3d",
                }}
                className="relative z-10 w-full h-full p-2 rounded-[2.5rem] bg-white/95 dark:bg-[#111726]/95 backdrop-blur-2xl border border-slate-200/90 dark:border-white/10 shadow-[0_20px_50px_rgba(0,0,0,0.12)] dark:shadow-[0_25px_60px_rgba(0,0,0,0.45)] flex items-center justify-center overflow-hidden"
              >
                <div className="relative w-full h-full rounded-[2rem] overflow-hidden bg-slate-100 dark:bg-slate-950">
                  {/* Layer A: Real Original Photo */}
                  <div className="absolute inset-0">
                    <Image
                      src={me3Img}
                      alt="Md Samim Hosen — Real Portrait"
                      priority={false}
                      unoptimized
                      className="w-full h-full object-cover object-top filter contrast-[1.03] brightness-[1.01]"
                    />
                  </div>

                  {/* Layer B: 3D Rendered Avatar with Smooth Morphing Loop */}
                  <motion.div
                    animate={{
                      opacity: [0, 0, 1, 1, 0, 0],
                      scale: [1, 1, 1.025, 1.025, 1, 1],
                    }}
                    transition={{
                      duration: 9,
                      repeat: Infinity,
                      ease: "easeInOut",
                      times: [0, 0.22, 0.48, 0.72, 0.96, 1],
                    }}
                    className="absolute inset-0"
                  >
                    <Image
                      src={me3_3dImg}
                      alt="Md Samim Hosen — 3D Avatar"
                      priority={false}
                      unoptimized
                      className="w-full h-full object-cover object-top filter contrast-[1.05] brightness-[1.02]"
                    />

                    {/* Holographic 3D Light Scan Bar during 3D phase */}
                    <motion.div
                      animate={{
                        y: ["-100%", "240%"],
                        opacity: [0, 0.85, 0.85, 0],
                      }}
                      transition={{
                        duration: 2.8,
                        repeat: Infinity,
                        repeatDelay: 6.2,
                        ease: "linear",
                      }}
                      className="absolute inset-x-0 h-1.5 bg-gradient-to-r from-transparent via-blue-400 to-transparent shadow-[0_0_15px_rgba(59,130,246,0.95)] pointer-events-none"
                    />
                  </motion.div>

                  {/* Dynamic Specular 3D Glare following cursor */}
                  {isHovered && (
                    <div
                      className="absolute inset-0 pointer-events-none mix-blend-overlay opacity-60 transition-opacity duration-300 z-10"
                      style={{
                        background: `radial-gradient(300px circle at ${mousePos.x}px ${mousePos.y}px, rgba(255, 255, 255, 0.55), transparent 75%)`,
                      }}
                    />
                  )}

                  {/* Cinematic Soft Ambient Vignette */}
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/70 via-slate-950/10 to-transparent pointer-events-none z-10" />

                  {/* Subtle Inner Glass Ring */}
                  <div className="absolute inset-0 rounded-[2rem] ring-1 ring-inset ring-white/20 dark:ring-white/10 pointer-events-none z-10" />
                </div>
              </div>

              {/* 4. Floating Badge: Active @ JEVXO with Gentle Floating Bob */}
              <motion.div
                initial={{ y: 20, opacity: 0 }}
                animate={{
                  y: [0, -5, 0],
                  opacity: 1,
                }}
                transition={{
                  opacity: { delay: 0.3, duration: 0.5 },
                  y: { repeat: Infinity, duration: 4.2, ease: "easeInOut" },
                }}
                className="absolute -bottom-5 -left-3 sm:-left-6 z-30 bg-white/95 dark:bg-slate-900/95 backdrop-blur-2xl px-3.5 py-2 rounded-2xl border border-slate-200/90 dark:border-white/15 shadow-[0_15px_35px_rgba(0,0,0,0.18)] hover:scale-105 transition-transform"
              >
                <div className="flex items-center gap-2.5">
                  <div className="w-8 h-8 flex items-center justify-center bg-gradient-to-br from-blue-500 to-indigo-600 rounded-xl text-white shadow-md shadow-blue-500/30">
                    <Layers size={16} />
                  </div>
                  <div className="text-left">
                    <div className="flex items-center gap-1.5">
                      <span className="w-2 h-2 rounded-full bg-emerald-500 shadow-[0_0_8px_rgba(16,185,129,0.8)]" />
                      <p className="font-bold text-slate-900 dark:text-white text-xs">
                        Full Stack Developer
                      </p>
                    </div>
                    <p className="text-[10px] text-blue-600 dark:text-blue-400 font-semibold mt-0.5">
                      JEVXO • Remote / BD
                    </p>
                  </div>
                </div>
              </motion.div>

              {/* 5. Floating Badge: Next.js 16 & TypeScript with Gentle Floating Bob */}
              <motion.div
                initial={{ y: -15, opacity: 0 }}
                animate={{
                  y: [0, 5, 0],
                  opacity: 1,
                }}
                transition={{
                  opacity: { delay: 0.4, duration: 0.5 },
                  y: { repeat: Infinity, duration: 4.6, ease: "easeInOut", delay: 0.8 },
                }}
                className="absolute -top-4 -right-3 sm:-right-4 z-30 bg-white/95 dark:bg-slate-900/95 backdrop-blur-2xl px-3 py-1.5 rounded-2xl border border-slate-200/90 dark:border-white/15 shadow-[0_15px_35px_rgba(0,0,0,0.18)] hover:scale-105 transition-transform"
              >
                <div className="flex items-center gap-1.5">
                  <Zap size={12} className="text-amber-400 fill-amber-400" />
                  <p className="font-bold text-slate-900 dark:text-white text-[11px]">
                    Next.js 16 &amp; TypeScript
                  </p>
                </div>
              </motion.div>
            </div>
          </motion.div>

          {/* Right Column: Clean, High-End Story & Highlights (7 cols) */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.7, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-7 flex flex-col justify-center"
          >
            {/* Unified Section Tag matching Experience, Projects, Services */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-indigo-50 dark:bg-indigo-500/10 border border-indigo-200/60 dark:border-indigo-500/20 text-xs font-semibold uppercase tracking-[0.18em] text-[#6366F1] dark:text-[#818CF8] w-max mb-4">
              <Sparkles size={13} className="text-indigo-500 animate-pulse" />
              <span>About Me</span>
            </div>

            {/* Confident, Crisp Headline */}
            <h2 className="text-3xl sm:text-4xl lg:text-[2.5rem] font-extrabold tracking-tight text-slate-900 dark:text-white leading-[1.18] mb-4">
              Engineering thoughtful solutions, <br className="hidden sm:inline" />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 dark:from-blue-400 dark:via-indigo-400 dark:to-purple-400">
                building software that matters.
              </span>
            </h2>

            {/* Clear, Engaging Bio with Breathing Room */}
            <div className="space-y-3 text-slate-600 dark:text-zinc-300 text-sm sm:text-base leading-relaxed mb-6 font-normal">
              <p>
                I&apos;m a Full Stack Developer at <strong className="text-slate-900 dark:text-white font-semibold">JEVXO</strong> and a Computer Technology student at <strong className="text-slate-900 dark:text-white font-semibold">Rangpur Polytechnic Institute</strong>. I build fast, maintainable, and modern web applications that solve real-world problems.
              </p>
              <p>
                Specializing in <span className="text-slate-900 dark:text-white font-medium">Next.js 16, TypeScript, PostgreSQL, and Prisma ORM</span>, I focus on clean architecture, type safety from API to database, and crafting intuitive digital experiences for clients globally.
              </p>
            </div>

            {/* 3 Clean Horizontal Highlight Cards matching portfolio luxury bento */}
            <div className="grid sm:grid-cols-3 gap-3 mb-6">
              {pillars.map((item, idx) => {
                const IconComponent = item.icon;
                return (
                  <div
                    key={idx}
                    className="p-3.5 rounded-2xl bg-white/80 dark:bg-[#111726]/80 backdrop-blur-xl border border-slate-200/80 dark:border-white/10 hover:border-indigo-500/40 dark:hover:border-indigo-500/40 shadow-[0_10px_25px_rgba(0,0,0,0.03)] dark:shadow-[0_15px_30px_rgba(0,0,0,0.25)] transition-all duration-300 hover:-translate-y-1 group"
                  >
                    <div className={`w-8 h-8 rounded-xl border flex items-center justify-center mb-2.5 bg-gradient-to-br ${item.accent}`}>
                      <IconComponent size={16} />
                    </div>
                    <h3 className="text-xs sm:text-sm font-bold text-slate-900 dark:text-white mb-0.5 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                      {item.title}
                    </h3>
                    <p className="text-[11px] text-blue-600 dark:text-blue-400 font-medium mb-1">
                      {item.stack}
                    </p>
                    <p className="text-[11px] text-slate-500 dark:text-zinc-400 leading-snug">
                      {item.desc}
                    </p>
                  </div>
                );
              })}
            </div>

            {/* Clean Action Buttons */}
            <div className="flex flex-wrap items-center gap-3">
              <a
                href="#contact"
                className="group relative inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-gradient-to-r from-blue-600 via-indigo-600 to-blue-600 hover:from-blue-500 hover:via-indigo-500 hover:to-blue-500 text-white font-semibold text-sm shadow-[0_4px_20px_rgba(59,130,246,0.3)] hover:shadow-[0_6px_25px_rgba(99,102,241,0.4)] hover:scale-[1.02] active:scale-98 transition-all"
              >
                <span>Get in Touch</span>
                <ArrowRight size={15} className="group-hover:translate-x-1 transition-transform" />
              </a>

              <a
                href="https://drive.google.com/file/d/1liEkw82D8zQL0-A0BIqw-PK5l7UBEo7C/view?usp=sharing"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-white/80 dark:bg-white/[0.04] hover:bg-slate-100 dark:hover:bg-white/[0.08] text-slate-900 dark:text-slate-100 font-semibold text-sm border border-slate-200/90 dark:border-white/10 hover:border-slate-300 dark:hover:border-white/25 transition-all hover:scale-[1.02] active:scale-98"
              >
                <Download size={15} className="text-indigo-500" />
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
