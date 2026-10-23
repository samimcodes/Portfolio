"use client";

import React, { useState } from "react";
import Image, { StaticImageData } from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowUpRight, Github, Layers, X, CheckCircle2, ShieldCheck, Cpu } from "lucide-react";
import img1 from "@/assets/1.jpg";
import img2 from "@/assets/2.jpg";
import img3 from "@/assets/3.png";
import img4 from "@/assets/4.png";
import img5 from "@/assets/5.png";

interface Project {
  id: number;
  featured?: boolean;
  category: "Full-Stack" | "Real-Time" | "SaaS";
  title: string;
  tagline: string;
  domain: string;
  description: string;
  image: StaticImageData;
  glowGradient: string;
  tech: string[];
  metrics: string;
  repo: string;
  demo: string;
  architecture?: {
    overview: string;
    highlights: string[];
    challenges: string;
    database: string;
  };
}

const projects: Project[] = [
  {
    id: 1,
    featured: true,
    category: "Real-Time",
    title: "LocaLink — Real-Time Location Sharing",
    tagline: "Live GPS Tracking, Geofencing & Instant SOS Alerts",
    domain: "localinks.onrender.com",
    description: "A low-latency real-time location sharing platform with Socket.IO, PostgreSQL & Prisma for location history, custom geofences, and instant emergency broadcasts.",
    image: img1,
    glowGradient: "from-cyan-500/30 via-blue-500/20 to-transparent",
    tech: ["Next.js", "TypeScript", "Socket.IO", "PostgreSQL", "Prisma ORM", "MapLibre GL"],
    metrics: "Low-latency WebSockets • Spatial Geofencing",
    repo: "https://github.com/samimcodes/live-location-platform",
    demo: "https://localinks.onrender.com/",
    architecture: {
      overview: "Bidirectional WebSocket architecture broadcasting geospatial coordinates with spatial geofence calculation algorithms.",
      highlights: [
        "Bidirectional event streaming with heartbeat connection failover",
        "Spatial geofencing boundary detection with instant alert triggers",
        "Relational audit trail in PostgreSQL managed with Prisma ORM",
      ],
      challenges: "Handling rapid location broadcasts without overwhelming client render cycles. Solved using debounce batching and MapLibre GL hardware-accelerated vector rendering.",
      database: "PostgreSQL schema with indexed timestamps & geospatial coordinates.",
    },
  },
  {
    id: 2,
    featured: true,
    category: "SaaS",
    title: "CareerFlow — AI-Powered Job Search Platform",
    tagline: "Team Project • Kanban Pipeline & Gemini AI Integration",
    domain: "career-flow-six.vercel.app",
    description: "A collaborative team project for job seekers featuring drag-and-drop Kanban tracking, AI resume reviews, and Stripe subscriptions. My contribution focused on integrating the Google Gemini API for automated resume critique, architecting MongoDB application pipelines, and building reusable UI modules.",
    image: img2,
    glowGradient: "from-purple-500/35 via-indigo-500/20 to-transparent",
    tech: ["React.js", "Redux", "Node.js", "Express.js", "MongoDB", "Gemini AI", "Stripe"],
    metrics: "Team Project • Gemini AI & Kanban",
    repo: "https://github.com/samimcodes/careerflow-job-tracker",
    demo: "https://career-flow-six.vercel.app/",
    architecture: {
      overview: "Collaborative SaaS platform integrating Google Gemini API for semantic resume analysis paired with drag-and-drop stateful workflows.",
      highlights: [
        "Integrated Google Gemini prompt pipelines streaming resume review feedback within seconds",
        "Architected drag-and-drop application pipeline with synchronized MongoDB document state",
        "Secured REST endpoints with JWT authorization and subscription status checks",
      ],
      challenges: "Formatting complex AI evaluations into actionable UI suggestions. Solved using structured JSON response schemas and custom parser.",
      database: "MongoDB document model tracking multi-stage application lifecycles.",
    },
  },
  {
    id: 3,
    featured: true,
    category: "SaaS",
    title: "ContestHub — Contest Management & Payments",
    tagline: "Multi-Role Dashboards with Automated Stripe Billing",
    domain: "contests-hub.netlify.app",
    description: "A comprehensive contest platform with role-based access control (Admin, Creator, Participant), automated Stripe payments, live countdown timers, and React Query caching.",
    image: img3,
    glowGradient: "from-amber-500/30 via-orange-500/20 to-transparent",
    tech: ["React.js", "React Query", "Node.js", "Express.js", "MongoDB", "Stripe API"],
    metrics: "Stripe Payment Gateway • Role-Based Guards",
    repo: "https://github.com/samimcodes/ContestHub_Client",
    demo: "https://contests-hub.netlify.app/",
    architecture: {
      overview: "SaaS architecture featuring role-based access control (RBAC), webhook-driven Stripe payment lifecycle, and query cache invalidation.",
      highlights: [
        "Stripe webhook processing with idempotency guards to prevent duplicate charges",
        "Role-guarded backend middleware protecting sensitive creator & admin routes",
        "Optimistic UI updates and cache deduplication via React Query",
      ],
      challenges: "Ensuring zero duplicate charge transactions during concurrent traffic. Solved with atomic database writes and webhook idempotency checking.",
      database: "MongoDB with compound indices for contest queries and user submissions.",
    },
  },

  {
    id: 4,
    category: "Full-Stack",
    title: "HomeHero — Household Service Booking",
    tagline: "On-Demand Service Marketplace & Provider Reviews",
    domain: "homehero.netlify.app",
    description: "A responsive platform connecting homeowners with verified local service providers, featuring appointment scheduling and customer rating systems.",
    image: img4,
    glowGradient: "from-indigo-500/30 via-blue-500/20 to-transparent",
    tech: ["React.js", "Tailwind CSS", "Node.js", "Express.js", "MongoDB", "Firebase Auth"],
    metrics: "Instant Booking • Verified Provider System",
    repo: "https://github.com/samimcodes/homehero-a10-client",
    demo: "https://homehero-ass10.netlify.app/",
    architecture: {
      overview: "Two-sided service marketplace architecture with verified provider onboarding, review verification, and appointment booking.",
      highlights: [
        "Secure customer & service-provider authentication with Firebase",
        "Responsive appointment booking modal with dynamic time slot generation",
        "Filtered review aggregation calculating verified vendor ratings",
      ],
      challenges: "Preventing conflicting schedule overlaps. Solved via server-side slot availability validation before booking confirmation.",
      database: "MongoDB collections for users, listings, bookings, and verified reviews.",
    },
  },
  {
    id: 5,
    category: "Full-Stack",
    title: "GreenNest — Botanical Nursery Platform",
    tagline: "E-Commerce with Expert Care Consultation",
    domain: "greennest.firebaseapp.com",
    description: "An interactive botanical platform with plant health consultations, specialist booking flows, and secure Firebase authentication.",
    image: img5,
    glowGradient: "from-emerald-500/30 via-teal-500/20 to-transparent",
    tech: ["React.js", "Tailwind CSS", "Firebase Auth", "Express.js", "MongoDB"],
    metrics: "Care Consultation • Secure Profile Management",
    repo: "https://github.com/samimcodes/assinment-09-greennest-project",
    demo: "https://asinment-8.firebaseapp.com/",
    architecture: {
      overview: "Botanical e-commerce platform incorporating educational care guides and specialist consultation scheduling.",
      highlights: [
        "Dynamic category filtering with instant client-side search",
        "Firebase OAuth & credential security with session persistence",
        "Personalized care notification dashboard for registered plant enthusiasts",
      ],
      challenges: "Organizing multi-attribute plant care metadata cleanly. Solved through structured schema taxonomies.",
      database: "MongoDB storing plant taxonomy, order records, and user preferences.",
    },
  },

];

const categories = ["Featured", "All", "SaaS", "Real-Time", "Full-Stack"] as const;

const Projects: React.FC = () => {
  const [activeTab, setActiveTab] = useState<string>("Featured");
  const [activeModalProject, setActiveModalProject] = useState<Project | null>(null);

  const displayedProjects =
    activeTab === "Featured"
      ? projects.filter((p) => p.featured)
      : activeTab === "All"
        ? projects
        : projects.filter((p) => p.category === activeTab);

  return (
    <section id="projects" className="py-24 relative overflow-hidden">
      <div className="container max-w-6xl mx-auto px-6">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div>
            <span className="text-xs font-semibold uppercase tracking-[0.2em] text-[#6366F1] dark:text-[#818CF8] mb-2 block">
              Selected Work
            </span>
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-slate-900 dark:text-zinc-50">
              Case Studies &amp; Projects
            </h2>
            <p className="text-slate-500 dark:text-zinc-400 mt-2 text-base max-w-lg">
              Production full-stack applications engineered for performance, clean architecture, and real business utility.
            </p>
          </div>

          {/* Minimalist Filter Pills */}
          <div className="flex items-center gap-1.5 p-1 rounded-full bg-white/80 dark:bg-white/[0.04] backdrop-blur-xl border border-black/[0.06] dark:border-white/[0.08] shadow-sm w-max">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveTab(cat)}
                className={`px-3.5 py-1.5 rounded-full text-xs font-semibold transition-all ${activeTab === cat
                  ? "bg-slate-900 dark:bg-white text-white dark:text-slate-950 shadow-sm"
                  : "text-slate-500 dark:text-zinc-400 hover:text-slate-900 dark:hover:text-white"
                  }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Projects Showcase */}
        <div className="space-y-12">
          <AnimatePresence mode="popLayout">
            {displayedProjects.map((project, idx) => (
              <motion.article
                key={project.id}
                layout
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 20 }}
                transition={{ duration: 0.5, delay: idx * 0.08, ease: [0.16, 1, 0.3, 1] }}
                className="group rounded-3xl p-6 sm:p-8 bg-white/80 dark:bg-slate-900/70 backdrop-blur-2xl border border-black/[0.06] dark:border-white/10 hover:border-black/[0.1] dark:hover:border-indigo-500/50 shadow-sm hover:shadow-[0_12px_45px_rgba(99,102,241,0.2)] transition-all grid lg:grid-cols-12 gap-8 items-center"
              >
                {/* Left: Project Details (6 cols) */}
                <div className="lg:col-span-6 flex flex-col justify-between h-full">
                  <div>
                    <div className="flex items-center gap-2 mb-2">
                      <span className="text-xs font-semibold text-[#6366F1] dark:text-[#818CF8] uppercase tracking-wider">
                        {project.category}
                      </span>
                      <span className="text-slate-300 dark:text-zinc-700">•</span>
                      <span className="text-xs text-slate-500 dark:text-zinc-400 font-medium">
                        {project.metrics}
                      </span>
                    </div>

                    <h3 className="text-2xl sm:text-3xl font-bold tracking-tight text-slate-900 dark:text-zinc-50 group-hover:text-[#6366F1] dark:group-hover:text-[#818CF8] transition-colors">
                      {project.title}
                    </h3>
                    <p className="text-xs sm:text-sm font-medium text-slate-500 dark:text-zinc-400 mt-1 mb-4">
                      {project.tagline}
                    </p>

                    <p className="text-sm text-slate-600 dark:text-zinc-400 leading-relaxed mb-6 font-normal">
                      {project.description}
                    </p>

                    {/* Tech Tags */}
                    <div className="flex flex-wrap gap-1.5 mb-8">
                      {project.tech.map((t) => (
                        <span
                          key={t}
                          className="px-2.5 py-1 text-[11px] font-medium rounded-lg bg-slate-100 dark:bg-white/[0.04] text-slate-700 dark:text-zinc-300 border border-black/[0.04] dark:border-white/[0.06]"
                        >
                          {t}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Actions */}
                  <div className="flex flex-wrap items-center gap-3 pt-4 border-t border-slate-200/80 dark:border-white/[0.08]">
                    <a
                      href={project.demo}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 px-5 py-2.5 rounded-full bg-slate-900 hover:bg-black dark:bg-white dark:hover:bg-zinc-200 text-white dark:text-slate-950 text-xs font-bold shadow-sm transition-all"
                    >
                      <span>Live Demo</span>
                      <ArrowUpRight size={14} />
                    </a>

                    <a
                      href={project.repo}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 px-4 py-2.5 rounded-full bg-white hover:bg-slate-50 dark:bg-white/[0.05] dark:hover:bg-white/[0.09] border border-black/[0.08] dark:border-white/[0.08] text-slate-800 dark:text-zinc-200 text-xs font-semibold shadow-sm transition-all"
                    >
                      <Github size={14} />
                      <span>GitHub</span>
                    </a>

                    {project.architecture && (
                      <button
                        onClick={() => setActiveModalProject(project)}
                        className="inline-flex items-center gap-1.5 px-4 py-2.5 rounded-full bg-indigo-500/10 hover:bg-indigo-500/20 text-[#6366F1] dark:text-[#818CF8] text-xs font-semibold transition-all border border-indigo-500/20"
                      >
                        <Layers size={13} />
                        <span>Architecture</span>
                      </button>
                    )}
                  </div>
                </div>

                {/* Right: Project Showcase Image with Ambient Halo & Interactive Pill (6 cols) */}
                <div className="lg:col-span-6 relative group/mockup">
                  {/* Ambient Dynamic Halo Glow behind the artwork */}
                  <div
                    className={`absolute -inset-2.5 rounded-3xl bg-gradient-to-r ${project.glowGradient} opacity-30 group-hover/mockup:opacity-90 blur-2xl transition-all duration-700 pointer-events-none -z-10`}
                  />

                  {/* Clickable Image Showcase leading directly to Live Demo */}
                  <a
                    href={project.demo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="relative block rounded-2xl overflow-hidden bg-slate-950 border border-slate-200/90 dark:border-white/10 shadow-lg group-hover/mockup:shadow-2xl hover:border-indigo-500/50 dark:hover:border-white/25 transition-all duration-500"
                    aria-label={`Open live demo of ${project.title}`}
                  >
                    <div className="relative aspect-[16/10] overflow-hidden bg-slate-950 flex items-center justify-center">
                      <Image
                        src={project.image}
                        alt={project.title}
                        quality={95}
                        priority={project.featured}
                        sizes="(max-width: 1024px) 100vw, 550px"
                        className="w-full h-full object-cover object-center group-hover/mockup:scale-[1.035] transition-transform duration-700 ease-out"
                      />

                      {/* Subtle Vignette Gradient Overlay at Bottom */}
                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover/mockup:opacity-100 transition-opacity duration-300 pointer-events-none" />

                      {/* Interactive Floating Pill in Center on Hover */}
                      <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover/mockup:opacity-100 transition-all duration-300 pointer-events-none">
                        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-black/85 dark:bg-white text-white dark:text-slate-950 text-xs font-bold shadow-2xl backdrop-blur-md transform translate-y-2 group-hover/mockup:translate-y-0 transition-all duration-300">
                          <span>Explore Live Product</span>
                          <ArrowUpRight size={14} />
                        </div>
                      </div>
                    </div>
                  </a>
                </div>
              </motion.article>
            ))}
          </AnimatePresence>
        </div>
      </div>

      {/* Architecture Deep Dive Modal */}
      <AnimatePresence>
        {activeModalProject && activeModalProject.architecture && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-md">
            <motion.div
              initial={{ opacity: 0, scale: 0.96, y: 10 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.96, y: 10 }}
              className="relative w-full max-w-2xl max-h-[90vh] overflow-y-auto rounded-3xl bg-white dark:bg-slate-900/95 border border-black/[0.08] dark:border-white/15 p-6 sm:p-8 shadow-2xl backdrop-blur-2xl"
            >
              <div className="flex items-start justify-between gap-4 mb-6">
                <div>
                  <div className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full text-[11px] font-semibold bg-indigo-500/10 text-[#6366F1] dark:text-[#818CF8] border border-indigo-500/20 mb-2">
                    <Cpu size={12} />
                    <span>Technical Architecture Details</span>
                  </div>
                  <h3 className="text-xl sm:text-2xl font-bold text-slate-900 dark:text-zinc-100">
                    {activeModalProject.title}
                  </h3>
                  <p className="text-xs text-slate-500 dark:text-zinc-400 mt-1">
                    {activeModalProject.tagline}
                  </p>
                </div>
                <button
                  onClick={() => setActiveModalProject(null)}
                  className="w-8 h-8 rounded-full bg-slate-100 dark:bg-white/[0.08] flex items-center justify-center text-slate-500 dark:text-zinc-400 hover:text-slate-900 dark:hover:text-white transition-colors"
                  aria-label="Close modal"
                >
                  <X size={16} />
                </button>
              </div>

              <div className="space-y-6 text-sm">
                <div>
                  <h4 className="text-xs font-semibold uppercase tracking-wider text-slate-400 dark:text-zinc-400 mb-2">
                    System Overview
                  </h4>
                  <p className="text-slate-800 dark:text-zinc-200 leading-relaxed bg-slate-50 dark:bg-white/[0.02] p-4 rounded-xl border border-black/[0.05] dark:border-white/[0.06]">
                    {activeModalProject.architecture.overview}
                  </p>
                </div>

                <div>
                  <h4 className="text-xs font-semibold uppercase tracking-wider text-slate-400 dark:text-zinc-400 mb-2">
                    Key Technical Highlights
                  </h4>
                  <div className="space-y-2">
                    {activeModalProject.architecture.highlights.map((h, i) => (
                      <div key={i} className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-800 dark:text-zinc-200">
                        <CheckCircle2 size={16} className="text-[#6366F1] dark:text-[#818CF8] shrink-0 mt-0.5" />
                        <span>{h}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="grid sm:grid-cols-2 gap-4">
                  <div className="p-4 rounded-xl bg-slate-50 dark:bg-white/[0.02] border border-black/[0.05] dark:border-white/[0.06]">
                    <div className="flex items-center gap-2 mb-2 text-slate-900 dark:text-zinc-100 font-bold text-xs uppercase tracking-wider">
                      <ShieldCheck size={14} className="text-[#6366F1] dark:text-[#818CF8]" />
                      <span>Technical Challenge Solved</span>
                    </div>
                    <p className="text-xs text-slate-600 dark:text-zinc-400 leading-relaxed">
                      {activeModalProject.architecture.challenges}
                    </p>
                  </div>

                  <div className="p-4 rounded-xl bg-slate-50 dark:bg-white/[0.02] border border-black/[0.05] dark:border-white/[0.06]">
                    <div className="flex items-center gap-2 mb-2 text-slate-900 dark:text-zinc-100 font-bold text-xs uppercase tracking-wider">
                      <Layers size={14} className="text-emerald-500" />
                      <span>Database &amp; Data Model</span>
                    </div>
                    <p className="text-xs text-slate-600 dark:text-zinc-400 leading-relaxed">
                      {activeModalProject.architecture.database}
                    </p>
                  </div>
                </div>
              </div>

              <div className="flex items-center justify-end gap-3 mt-8 pt-4 border-t border-slate-200/80 dark:border-white/[0.08]">
                <a
                  href={activeModalProject.demo}
                  target="_blank"
                  rel="noreferrer"
                  className="px-4 py-2 rounded-full bg-slate-900 hover:bg-black dark:bg-white dark:hover:bg-zinc-200 text-white dark:text-slate-950 text-xs font-bold shadow-sm transition-all"
                >
                  Visit Live Product
                </a>
                <button
                  onClick={() => setActiveModalProject(null)}
                  className="px-4 py-2 rounded-full bg-slate-100 hover:bg-slate-200 dark:bg-white/[0.05] dark:hover:bg-white/[0.1] text-slate-800 dark:text-zinc-200 text-xs font-semibold transition-all"
                >
                  Close
                </button>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default Projects;
