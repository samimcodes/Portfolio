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
  GraduationCap,
  Zap,
} from "lucide-react";
import me3Img from "@/assets/me3.png";
import me3_3dImg from "@/assets/me3_3d.jpg";

const featureCards = [
  {
    title: "Full-Stack Development",
    description: "Modern frontend and backend applications.",
    icon: Layers,
    badge: "Full-Stack",
  },
  {
    title: "Backend & Data",
    description: "APIs, databases, and application logic.",
    icon: Database,
    badge: "Backend",
  },
  {
    title: "User-Focused Design",
    description: "Responsive and intuitive interfaces.",
    icon: Sparkles,
    badge: "UI / UX",
  },
  {
    title: "Continuous Learning",
    description: "Growing through study and practice.",
    icon: GraduationCap,
    badge: "Education",
  },
];

const About: React.FC = () => {
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
      id="about"
      className="relative min-h-[92vh] lg:min-h-screen flex items-center justify-center py-12 lg:py-0 overflow-hidden text-slate-900 dark:text-slate-100"
    >
      {/* Subtle Ambient Radial Lighting Bloom */}
      <div className="absolute top-1/2 left-1/3 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[500px] bg-gradient-to-tr from-blue-600/10 via-indigo-600/8 to-purple-600/5 rounded-full blur-[130px] pointer-events-none -z-10" />

      <div className="container max-w-6xl mx-auto px-6 my-auto">
        <div className="grid lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          {/* Left Column: 3D Morphing Portrait Frame (5 cols) */}
          <motion.div
            initial={{ opacity: 0, scale: 0.94, x: -25 }}
            whileInView={{ opacity: 1, scale: 1, x: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-5 relative flex justify-center"
          >
            <div
              onMouseMove={handleMouseMove}
              onMouseEnter={() => setIsHovered(true)}
              onMouseLeave={() => setIsHovered(false)}
              className="relative w-[270px] sm:w-[300px] aspect-[4/5] group"
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

              {/* 2. Top-Left Sunlight Flare Core (বামদিকের উপর থেকে সূর্যের আলোর উৎস) */}
              <div className="absolute -top-14 -left-14 w-60 h-60 rounded-full bg-gradient-to-br from-amber-300/40 via-yellow-400/20 to-transparent blur-3xl pointer-events-none -z-10 animate-pulse [animation-duration:4s]" />

              {/* 3. Top-Left Sparkling Glint (চকচকে সূর্যের আলো ও স্পার্কল) */}
              <motion.div
                animate={{
                  scale: [0.85, 1.25, 0.85],
                  rotate: [0, 90, 180],
                  opacity: [0.65, 1, 0.65],
                }}
                transition={{
                  repeat: Infinity,
                  duration: 3,
                  ease: "easeInOut",
                }}
                className="absolute -top-3 -left-3 z-30 w-9 h-9 flex items-center justify-center pointer-events-none"
              >
                <div className="absolute inset-0 bg-amber-400/40 blur-md rounded-full" />
                <Sparkles size={22} className="text-amber-300 drop-shadow-[0_0_12px_rgba(251,191,36,0.95)]" />
              </motion.div>

              {/* 4. Ambient Aura Backdrop */}
              <div className="absolute inset-0 bg-gradient-to-tr from-blue-600/20 via-indigo-600/20 to-amber-500/20 rounded-[2.5rem] opacity-40 dark:opacity-55 blur-2xl group-hover:opacity-75 transition-all duration-500 -z-10 pointer-events-none" />

              {/* 5. Razor-Sharp Luxury Photo Card with Continuous Real ⇄ 3D Morph */}
              <div className="relative z-10 w-full h-full p-2.5 rounded-[2.5rem] bg-gradient-to-b from-white/95 via-white/90 to-white/80 dark:from-slate-900/95 dark:via-slate-900/90 dark:to-slate-950/95 backdrop-blur-2xl border-t-2 border-l-2 border-amber-300/40 dark:border-t-amber-400/50 dark:border-l-amber-400/50 border-r border-b border-slate-200/90 dark:border-white/10 shadow-[0_20px_50px_rgba(0,0,0,0.12)] dark:shadow-[0_25px_60px_rgba(0,0,0,0.5)] transition-all duration-500 group-hover:scale-[1.01] flex items-center justify-center overflow-hidden">
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
                        opacity: [0, 0.8, 0.8, 0],
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

                  {/* Volumetric Diagonal Sunlight Rays streaming from top-left */}
                  <div
                    className="absolute inset-0 pointer-events-none z-10"
                    style={{
                      background:
                        "linear-gradient(135deg, rgba(255, 255, 255, 0.38) 0%, rgba(251, 191, 36, 0.25) 20%, rgba(245, 158, 11, 0.08) 42%, transparent 70%)",
                      mixBlendMode: "screen",
                    }}
                  />

                  {/* Periodic Sparkling Shimmer Sweep (চকচক করার অ্যানিমেশন) */}
                  <motion.div
                    animate={{
                      x: ["-120%", "220%"],
                      opacity: [0, 0.85, 0],
                    }}
                    transition={{
                      repeat: Infinity,
                      duration: 3.2,
                      ease: "easeInOut",
                      repeatDelay: 1.8,
                    }}
                    className="absolute -inset-full pointer-events-none z-10 bg-gradient-to-r from-transparent via-white/30 to-transparent rotate-45 transform"
                  />

                  {/* Cinematic Soft Ambient Vignette */}
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-slate-950/15 to-transparent pointer-events-none z-10" />

                  {/* Subtle Inner Glass Ring */}
                  <div className="absolute inset-0 rounded-[2rem] ring-1 ring-inset ring-white/20 dark:ring-white/10 pointer-events-none z-10" />
                </div>
              </div>

              {/* 6. Floating Badge: Active @ JEVXO with Gentle Floating Bob */}
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
                className="absolute -bottom-5 -left-4 sm:-left-6 z-30 bg-white/95 dark:bg-slate-900/95 backdrop-blur-2xl px-3.5 py-2.5 rounded-2xl border border-slate-200/90 dark:border-white/15 shadow-[0_15px_35px_rgba(0,0,0,0.18)]"
              >
                <div className="flex items-center gap-2.5">
                  <div className="w-9 h-9 flex items-center justify-center bg-gradient-to-br from-blue-500 to-indigo-600 rounded-xl text-white shadow-md shadow-blue-500/30">
                    <Layers size={17} />
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

              {/* 7. Floating Badge: Next.js & TypeScript with Gentle Floating Bob */}
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
                className="absolute -top-4 -right-3 sm:-right-4 z-30 bg-white/95 dark:bg-slate-900/95 backdrop-blur-2xl px-3 py-1.5 rounded-2xl border border-slate-200/90 dark:border-white/15 shadow-[0_15px_35px_rgba(0,0,0,0.18)]"
              >
                <div className="flex items-center gap-1.5">
                  <Zap size={12} className="text-amber-400 fill-amber-400" />
                  <p className="font-bold text-slate-900 dark:text-white text-[11px]">
                    Next.js &amp; TypeScript
                  </p>
                </div>
              </motion.div>
            </div>
          </motion.div>

          {/* Right Column: Narrative, 4 Feature Cards & CTAs (7 cols) */}
          <motion.div
            initial={{ opacity: 0, x: 25 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.7, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-7"
          >
            {/* Status Pills */}
            <div className="flex flex-wrap items-center gap-2.5 mb-3.5">
              <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-blue-500/10 dark:bg-indigo-500/15 border border-blue-500/20 text-xs font-semibold text-blue-600 dark:text-indigo-400 shadow-sm">
                <Sparkles size={12} className="text-blue-500 dark:text-indigo-400" />
                <span>About &amp; Philosophy</span>
              </div>

              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/80 dark:bg-slate-900/80 backdrop-blur-md border border-slate-200/80 dark:border-white/10 text-xs font-semibold text-slate-800 dark:text-slate-200 shadow-sm">
                <span className="w-2 h-2 rounded-full bg-emerald-500 shadow-[0_0_8px_rgba(16,185,129,0.8)]" />
                <span>Full Stack Developer @ <strong className="text-blue-600 dark:text-blue-400">JEVXO</strong></span>
              </div>
            </div>

            {/* Headline */}
            <h2 className="text-2xl sm:text-3xl lg:text-[2.25rem] font-bold tracking-tight text-slate-900 dark:text-white leading-[1.18] mb-3.5">
              Engineering thoughtful solutions, <br className="hidden sm:inline" />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 dark:from-blue-400 dark:via-indigo-400 dark:to-purple-400 font-extrabold">
                building software that matters.
              </span>
            </h2>

            {/* Description: 3 Accurate, Concise Paragraphs */}
            <div className="space-y-2.5 text-xs sm:text-sm text-slate-600 dark:text-zinc-300 leading-relaxed font-normal mb-5 max-w-2xl">
              <p>
                I&apos;m Md Samim Hosen, a Full Stack Developer at{" "}
                <strong className="text-slate-900 dark:text-white font-semibold">JEVXO</strong>, focused on
                building modern, responsive, and maintainable web applications.
              </p>
              <p>
                I work across frontend interfaces, backend APIs, and database-driven systems using{" "}
                <span className="text-slate-900 dark:text-white font-semibold">
                  React, Next.js, TypeScript, Node.js, PostgreSQL, and Prisma
                </span>
                . I enjoy turning complex requirements into practical, user-friendly software.
              </p>
              <p>
                Alongside my professional work, I&apos;m pursuing a Diploma in Engineering in Computer Technology
                at{" "}
                <strong className="text-slate-900 dark:text-white font-semibold">
                  Rangpur Polytechnic Institute
                </strong>
                . I&apos;m committed to improving my engineering skills through real-world development and
                continuous learning.
              </p>
            </div>

            {/* Refined 4 Feature Cards (Bento 2.0 with Micro-Elevation) */}
            <div className="grid sm:grid-cols-2 gap-2.5 mb-5">
              {featureCards.map((item, idx) => {
                const IconComponent = item.icon;
                return (
                  <div
                    key={idx}
                    className="group relative p-3 rounded-2xl bg-white/80 dark:bg-slate-900/70 backdrop-blur-md border border-slate-200/80 dark:border-white/10 hover:border-indigo-500/50 dark:hover:border-indigo-500/50 hover:shadow-[0_10px_30px_rgba(99,102,241,0.14)] hover:-translate-y-0.5 transition-all duration-300"
                  >
                    <div className="flex items-center justify-between mb-1.5">
                      <div className="w-7 h-7 rounded-xl bg-gradient-to-br from-blue-500/15 via-indigo-500/15 to-purple-500/10 border border-blue-500/25 text-blue-600 dark:text-indigo-400 flex items-center justify-center group-hover:scale-105 group-hover:border-indigo-400/50 transition-all shadow-sm">
                        <IconComponent size={15} />
                      </div>
                      <span className="text-[10px] font-semibold tracking-wide uppercase px-2 py-0.5 rounded-md bg-slate-100 dark:bg-white/[0.06] text-slate-600 dark:text-zinc-400 border border-slate-200/60 dark:border-white/[0.06]">
                        {item.badge}
                      </span>
                    </div>
                    <h3 className="text-xs sm:text-sm font-bold text-slate-900 dark:text-zinc-100 mb-0.5 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                      {item.title}
                    </h3>
                    <p className="text-[11px] sm:text-xs text-slate-500 dark:text-zinc-400 leading-relaxed font-normal">
                      {item.description}
                    </p>
                  </div>
                );
              })}
            </div>

            {/* Action Buttons */}
            <div className="flex flex-wrap items-center gap-3.5 mb-4">
              {/* Primary Button: Get in Touch with Shimmer Sweep */}
              <a
                href="#contact"
                className="group relative inline-flex items-center gap-2 px-5 py-3 rounded-xl bg-gradient-to-r from-blue-600 via-indigo-600 to-blue-600 hover:from-blue-500 hover:via-indigo-500 hover:to-blue-500 text-white font-semibold text-xs sm:text-sm shadow-[0_0_25px_rgba(59,130,246,0.38)] hover:shadow-[0_0_35px_rgba(99,102,241,0.5)] hover:scale-[1.02] active:scale-98 transition-all overflow-hidden"
              >
                <div className="absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-1000 bg-gradient-to-r from-transparent via-white/25 to-transparent pointer-events-none" />
                <span>Get in Touch</span>
                <ArrowRight size={15} className="group-hover:translate-x-1 transition-transform" />
              </a>

              {/* Secondary Button: Download Resume */}
              <a
                href="https://drive.google.com/file/d/1liEkw82D8zQL0-A0BIqw-PK5l7UBEo7C/view?usp=sharing"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 px-5 py-3 rounded-xl bg-white/80 dark:bg-slate-900/80 hover:bg-slate-100 dark:hover:bg-slate-800 text-slate-900 dark:text-slate-100 font-semibold text-xs sm:text-sm border border-slate-200/90 dark:border-white/10 hover:border-indigo-500/50 dark:hover:border-indigo-500/50 shadow-sm hover:shadow-[0_0_20px_rgba(99,102,241,0.15)] hover:scale-[1.02] active:scale-98 transition-all"
              >
                <Download size={15} className="text-indigo-500" />
                <span>Download Resume</span>
              </a>
            </div>

            {/* Grounded & Authentic Standards Capsule */}
            <div className="inline-flex flex-wrap items-center gap-y-1.5 gap-x-3.5 p-1.5 px-3.5 rounded-2xl bg-slate-100/80 dark:bg-white/[0.04] border border-slate-200/80 dark:border-white/[0.08] text-[11px] sm:text-xs text-slate-600 dark:text-zinc-400 backdrop-blur-md">
              <span className="inline-flex items-center gap-1.5 font-medium">
                <span className="w-1.5 h-1.5 rounded-full bg-blue-500 animate-pulse" />
                <span>Remote Collaboration</span>
              </span>
              <span className="text-slate-300 dark:text-zinc-700 hidden sm:inline">•</span>
              <span className="inline-flex items-center gap-1.5 font-medium">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-500" />
                <span>Responsive Communication</span>
              </span>
              <span className="text-slate-300 dark:text-zinc-700 hidden sm:inline">•</span>
              <span className="inline-flex items-center gap-1.5 font-medium">
                <span className="w-1.5 h-1.5 rounded-full bg-purple-500" />
                <span>Clean, Maintainable Code</span>
              </span>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
