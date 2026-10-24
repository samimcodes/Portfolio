"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Mail,
  Phone,
  MapPin,
  Send,
  Loader2,
  CheckCircle2,
  AlertCircle,
  MessageSquare,
  ArrowUpRight,
  User,
  Sparkles,
  Lock,
  Globe2,
} from "lucide-react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import emailjs from "@emailjs/browser";
import { SiFiverr } from "react-icons/si";

const schema = z.object({
  firstName: z.string().min(2, "Name is required"),
  lastName: z.string().optional(),
  email: z.string().email("Enter a valid email address"),
  phone: z.string().optional(),
  message: z.string().min(10, "Please provide at least 10 characters describing your project"),
  company: z.string().optional(),
});

type FormData = z.infer<typeof schema>;

const projectTypes = [
  "Full-Stack Web App",
  "SaaS Platform & Stripe",
  "Backend & API Development",
  "Fiverr Custom Order",
  "Technical Consultation",
];

const Contact: React.FC = () => {
  const [selectedType, setSelectedType] = useState<string>("Full-Stack Web App");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [status, setStatus] = useState<{ type: "success" | "error"; msg: string } | null>(null);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<FormData>({ resolver: zodResolver(schema) });

  const onSubmit = async (data: FormData) => {
    setIsSubmitting(true);
    setStatus(null);

    // Honeypot check for bots
    if (data.company) {
      setIsSubmitting(false);
      return;
    }

    const SERVICE = process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID || process.env.VITE_EMAILJS_SERVICE_ID;
    const TEMPLATE = process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID || process.env.VITE_EMAILJS_TEMPLATE_ID;
    const KEY = process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY || process.env.VITE_EMAILJS_PUBLIC_KEY;

    if (!SERVICE || !TEMPLATE || !KEY) {
      setStatus({
        type: "error",
        msg: "Direct email service is temporarily resting. Please reach out via WhatsApp (+880 1743282144) or email directly.",
      });
      setIsSubmitting(false);
      return;
    }

    try {
      await emailjs.send(
        SERVICE,
        TEMPLATE,
        {
          from_name: `${data.firstName} ${data.lastName || ""}`.trim(),
          from_email: data.email,
          phone: data.phone || "N/A",
          project_type: selectedType,
          message: `[Project Type: ${selectedType}]\n\n${data.message}`,
        },
        KEY
      );

      setStatus({
        type: "success",
        msg: "Thank you! Your message has been received. I will review your requirements and respond within 2–4 hours.",
      });
      reset();
    } catch (err: any) {
      setStatus({
        type: "error",
        msg: err?.message || "Something went wrong sending your message. Please message directly on WhatsApp.",
      });
    } finally {
      setIsSubmitting(false);
      setTimeout(() => setStatus(null), 8000);
    }
  };

  return (
    <section id="contact" className="py-20 sm:py-28 relative overflow-hidden">
      {/* Background Ambient Radial Highlights */}
      <div className="absolute top-1/3 right-1/4 w-[600px] h-[350px] bg-indigo-500/5 dark:bg-indigo-500/10 rounded-full blur-[140px] pointer-events-none -z-10" />
      <div className="absolute bottom-10 left-10 w-[450px] h-[350px] bg-blue-500/5 dark:bg-blue-500/10 rounded-full blur-[130px] pointer-events-none -z-10" />

      <div className="container max-w-6xl mx-auto px-6 relative z-10">
        {/* Centered Luxury Section Header (Matching Experience, Skills, FAQ) */}
        <div className="text-center mb-12 sm:mb-16">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-indigo-50 dark:bg-indigo-500/10 border border-indigo-200/60 dark:border-indigo-500/20 text-xs font-semibold uppercase tracking-[0.18em] text-[#6366F1] dark:text-[#818CF8] mb-3">
              <Sparkles size={13} className="text-indigo-500 animate-pulse" />
              <span>Contact &amp; Collaboration</span>
            </div>

            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-slate-900 dark:text-zinc-50">
              Let&apos;s Build Something{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 dark:from-blue-400 dark:via-indigo-300 dark:to-purple-300">
                Extraordinary.
              </span>
            </h2>

            <p className="text-slate-600 dark:text-zinc-400 max-w-xl mx-auto mt-3 text-sm sm:text-base leading-relaxed">
              Have an idea, need a dedicated full-stack engineer, or want to discuss technical architecture? Reach out directly.
            </p>
          </motion.div>
        </div>

        {/* 2-Column Symmetrical Bento Box */}
        <div className="grid lg:grid-cols-12 gap-7 lg:gap-8 items-stretch">
          {/* Left Column: Direct Channels & Trust (5 cols) */}
          <motion.div
            initial={{ opacity: 0, x: -16 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="lg:col-span-5 p-6 sm:p-8 rounded-3xl bg-white/90 dark:bg-[#111726]/80 backdrop-blur-xl border border-slate-200/80 dark:border-white/10 shadow-[0_15px_35px_rgba(0,0,0,0.06)] dark:shadow-[0_20px_45px_rgba(0,0,0,0.3)] flex flex-col justify-between"
          >
            <div>
              {/* Availability Status Badge */}
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-emerald-50 dark:bg-emerald-500/10 border border-emerald-200/70 dark:border-emerald-500/30 text-xs font-semibold text-emerald-700 dark:text-emerald-300 mb-5">
                <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse shadow-[0_0_8px_rgba(16,185,129,0.8)]" />
                <span>Available for Q4 Client Projects</span>
              </div>

              <h3 className="text-xl sm:text-2xl font-bold tracking-tight text-slate-900 dark:text-white mb-2">
                Direct Channels
              </h3>
              <p className="text-slate-600 dark:text-zinc-400 text-xs sm:text-sm leading-relaxed mb-6 font-normal">
                Connect via your preferred channel for quick technical consultations or immediate project kickoff.
              </p>

              <div className="space-y-3">
                {/* WhatsApp & Call */}
                <a
                  href="https://wa.me/8801743282144"
                  target="_blank"
                  rel="noreferrer"
                  className="group flex items-center justify-between p-3.5 sm:p-4 rounded-2xl bg-slate-50/90 dark:bg-white/[0.03] border border-slate-200/80 dark:border-white/[0.06] hover:border-emerald-500/50 hover:bg-emerald-50/40 dark:hover:bg-white/[0.06] hover:shadow-md hover:shadow-emerald-500/10 transition-all duration-200"
                >
                  <div className="flex items-center gap-3.5">
                    <div className="w-10 h-10 rounded-xl bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 flex items-center justify-center group-hover:scale-105 transition-transform shrink-0">
                      <MessageSquare size={18} />
                    </div>
                    <div>
                      <div className="flex items-center gap-2">
                        <p className="text-[10px] font-semibold uppercase tracking-wider text-slate-500 dark:text-zinc-400">
                          WhatsApp &amp; Direct Call
                        </p>
                        <span className="text-[9px] font-bold px-1.5 py-0.2 rounded bg-emerald-500/15 text-emerald-600 dark:text-emerald-400">
                          Fastest
                        </span>
                      </div>
                      <p className="text-sm font-bold text-slate-900 dark:text-white mt-0.5">
                        +880 1743282144
                      </p>
                    </div>
                  </div>
                  <ArrowUpRight
                    size={16}
                    className="text-slate-400 group-hover:text-emerald-600 dark:group-hover:text-emerald-400 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all"
                  />
                </a>

                {/* Fiverr Escrow Protected Order */}
                <a
                  href="https://www.fiverr.com/samim_io"
                  target="_blank"
                  rel="noreferrer"
                  className="group flex items-center justify-between p-3.5 sm:p-4 rounded-2xl bg-slate-50/90 dark:bg-white/[0.03] border border-slate-200/80 dark:border-white/[0.06] hover:border-[#1DBF73]/60 hover:bg-[#1DBF73]/[0.05] hover:shadow-md hover:shadow-[#1DBF73]/10 transition-all duration-200"
                >
                  <div className="flex items-center gap-3.5">
                    <div className="w-10 h-10 rounded-xl bg-[#1DBF73]/15 text-[#1DBF73] flex items-center justify-center group-hover:scale-105 transition-transform shrink-0">
                      <SiFiverr size={22} />
                    </div>
                    <div>
                      <div className="flex items-center gap-2">
                        <p className="text-[10px] font-semibold uppercase tracking-wider text-slate-500 dark:text-zinc-400 group-hover:text-[#1DBF73] transition-colors">
                          Fiverr Marketplace
                        </p>
                        <span className="px-1.5 py-0.2 rounded text-[9px] font-bold bg-[#1DBF73]/20 text-[#1DBF73]">
                          Escrow Protected
                        </span>
                      </div>
                      <p className="text-sm font-bold text-slate-900 dark:text-white mt-0.5">
                        fiverr.com/samim_io
                      </p>
                    </div>
                  </div>
                  <ArrowUpRight
                    size={16}
                    className="text-slate-400 group-hover:text-[#1DBF73] group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all"
                  />
                </a>

                {/* Direct Email */}
                <a
                  href="mailto:mdsamimhoen827@gmail.com"
                  className="group flex items-center justify-between p-3.5 sm:p-4 rounded-2xl bg-slate-50/90 dark:bg-white/[0.03] border border-slate-200/80 dark:border-white/[0.06] hover:border-indigo-500/50 hover:bg-indigo-50/40 dark:hover:bg-white/[0.06] hover:shadow-md hover:shadow-indigo-500/10 transition-all duration-200"
                >
                  <div className="flex items-center gap-3.5">
                    <div className="w-10 h-10 rounded-xl bg-indigo-500/10 text-indigo-600 dark:text-indigo-400 flex items-center justify-center group-hover:scale-105 transition-transform shrink-0">
                      <Mail size={18} />
                    </div>
                    <div>
                      <p className="text-[10px] font-semibold uppercase tracking-wider text-slate-500 dark:text-zinc-400">
                        Direct Email
                      </p>
                      <p className="text-sm font-bold text-slate-900 dark:text-white truncate max-w-[210px] sm:max-w-none mt-0.5">
                        mdsamimhoen827@gmail.com
                      </p>
                    </div>
                  </div>
                  <ArrowUpRight
                    size={16}
                    className="text-slate-400 group-hover:text-indigo-600 dark:group-hover:text-indigo-400 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all"
                  />
                </a>

                {/* Location & Timezone */}
                <div className="flex items-center gap-3.5 p-3.5 sm:p-4 rounded-2xl bg-slate-50/60 dark:bg-white/[0.02] border border-slate-200/60 dark:border-white/[0.05]">
                  <div className="w-10 h-10 rounded-xl bg-slate-200/60 dark:bg-white/[0.04] text-slate-600 dark:text-zinc-400 flex items-center justify-center shrink-0">
                    <MapPin size={18} />
                  </div>
                  <div>
                    <div className="flex items-center gap-2">
                      <p className="text-[10px] font-semibold uppercase tracking-wider text-slate-500 dark:text-zinc-400">
                        Location &amp; Timezone
                      </p>
                      <span className="text-[9px] font-medium text-slate-500 dark:text-zinc-400 flex items-center gap-1">
                        <Globe2 size={10} /> Worldwide
                      </span>
                    </div>
                    <p className="text-sm font-bold text-slate-900 dark:text-white mt-0.5">
                      Rangpur, Bangladesh (UTC+6)
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Professional Socials Pill Strip */}
            <div className="pt-6 mt-6 border-t border-slate-100 dark:border-white/5 flex items-center gap-2.5">
              <a
                href="https://github.com/samimcodes"
                target="_blank"
                rel="noreferrer"
                className="flex-1 inline-flex items-center justify-center gap-1.5 px-3 py-2.5 rounded-xl bg-slate-100 hover:bg-slate-200/80 dark:bg-white/[0.04] dark:hover:bg-white/[0.09] border border-slate-200 dark:border-white/[0.08] text-xs font-semibold text-slate-700 dark:text-zinc-300 hover:text-slate-950 dark:hover:text-white transition-all hover:scale-[1.02]"
              >
                <span>GitHub</span>
                <ArrowUpRight size={13} />
              </a>
              <a
                href="https://www.linkedin.com/in/samim01/"
                target="_blank"
                rel="noreferrer"
                className="flex-1 inline-flex items-center justify-center gap-1.5 px-3 py-2.5 rounded-xl bg-slate-100 hover:bg-slate-200/80 dark:bg-white/[0.04] dark:hover:bg-white/[0.09] border border-slate-200 dark:border-white/[0.08] text-xs font-semibold text-slate-700 dark:text-zinc-300 hover:text-slate-950 dark:hover:text-white transition-all hover:scale-[1.02]"
              >
                <span>LinkedIn</span>
                <ArrowUpRight size={13} />
              </a>
              <a
                href="https://www.fiverr.com/samim_io"
                target="_blank"
                rel="noreferrer"
                className="flex-1 inline-flex items-center justify-center gap-1.5 px-3 py-2.5 rounded-xl bg-slate-100 hover:bg-[#1DBF73]/15 dark:bg-white/[0.04] dark:hover:bg-[#1DBF73]/20 border border-slate-200 hover:border-[#1DBF73]/50 dark:border-white/[0.08] text-xs font-semibold text-slate-700 hover:text-[#1DBF73] dark:text-zinc-300 dark:hover:text-[#1DBF73] transition-all hover:scale-[1.02]"
              >
                <span>Fiverr</span>
                <ArrowUpRight size={13} />
              </a>
            </div>
          </motion.div>

          {/* Right Column: Clean Inquiry Form (7 cols) */}
          <motion.div
            initial={{ opacity: 0, x: 16 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="lg:col-span-7 p-6 sm:p-8 rounded-3xl bg-white/90 dark:bg-[#111726]/80 backdrop-blur-xl border border-slate-200/80 dark:border-white/10 shadow-[0_15px_35px_rgba(0,0,0,0.06)] dark:shadow-[0_20px_45px_rgba(0,0,0,0.3)] flex flex-col justify-between"
          >
            <div>
              <div className="mb-6">
                <h3 className="text-xl sm:text-2xl font-bold text-slate-900 dark:text-white mb-1">
                  Send a Direct Message
                </h3>
                <p className="text-xs sm:text-sm text-slate-600 dark:text-zinc-400">
                  Select your project scope and share your vision below.
                </p>
              </div>

              {/* Quick Project Type Selector Chips */}
              <div className="mb-6">
                <label className="block text-[11px] font-semibold uppercase tracking-wider text-slate-500 dark:text-zinc-400 mb-2.5">
                  I am interested in:
                </label>
                <div className="flex flex-wrap gap-2">
                  {projectTypes.map((type) => {
                    const isSelected = selectedType === type;
                    return (
                      <button
                        type="button"
                        key={type}
                        onClick={() => setSelectedType(type)}
                        className={`px-3 py-1.5 rounded-xl text-xs font-semibold transition-all duration-200 border cursor-pointer ${
                          isSelected
                            ? "bg-gradient-to-r from-blue-600 via-indigo-600 to-blue-600 text-white border-transparent shadow-sm shadow-indigo-500/25"
                            : "bg-slate-100 hover:bg-slate-200/80 dark:bg-white/5 text-slate-700 dark:text-zinc-300 border-slate-200/80 dark:border-white/10 hover:border-slate-300 dark:hover:border-white/20"
                        }`}
                      >
                        {type}
                      </button>
                    );
                  })}
                </div>
              </div>

              <form onSubmit={handleSubmit(onSubmit)} className="space-y-4" noValidate>
                {/* Honeypot field for anti-spam */}
                <input
                  type="text"
                  {...register("company")}
                  autoComplete="off"
                  tabIndex={-1}
                  className="sr-only"
                />

                <div className="grid sm:grid-cols-2 gap-4">
                  <div>
                    <label
                      htmlFor="firstName"
                      className="block text-xs font-semibold text-slate-700 dark:text-zinc-300 mb-1.5"
                    >
                      First Name *
                    </label>
                    <div className="relative">
                      <div className="absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-400 dark:text-zinc-500 pointer-events-none">
                        <User size={15} />
                      </div>
                      <input
                        id="firstName"
                        type="text"
                        placeholder="John"
                        {...register("firstName")}
                        className="w-full pl-10 pr-4 py-3 rounded-xl text-sm bg-slate-50/80 dark:bg-slate-950/60 border border-slate-200 dark:border-white/10 text-slate-900 dark:text-white placeholder-slate-400 dark:placeholder-zinc-500 focus:outline-none focus:border-indigo-500 focus:ring-2 focus:ring-indigo-500/20 transition-all shadow-sm"
                      />
                    </div>
                    {errors.firstName && (
                      <p className="text-[11px] text-red-500 dark:text-red-400 mt-1">
                        {errors.firstName.message}
                      </p>
                    )}
                  </div>

                  <div>
                    <label
                      htmlFor="lastName"
                      className="block text-xs font-semibold text-slate-700 dark:text-zinc-300 mb-1.5"
                    >
                      Last Name
                    </label>
                    <input
                      id="lastName"
                      type="text"
                      placeholder="Doe"
                      {...register("lastName")}
                      className="w-full px-4 py-3 rounded-xl text-sm bg-slate-50/80 dark:bg-slate-950/60 border border-slate-200 dark:border-white/10 text-slate-900 dark:text-white placeholder-slate-400 dark:placeholder-zinc-500 focus:outline-none focus:border-indigo-500 focus:ring-2 focus:ring-indigo-500/20 transition-all shadow-sm"
                    />
                  </div>
                </div>

                <div className="grid sm:grid-cols-2 gap-4">
                  <div>
                    <label
                      htmlFor="email"
                      className="block text-xs font-semibold text-slate-700 dark:text-zinc-300 mb-1.5"
                    >
                      Email Address *
                    </label>
                    <div className="relative">
                      <div className="absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-400 dark:text-zinc-500 pointer-events-none">
                        <Mail size={15} />
                      </div>
                      <input
                        id="email"
                        type="email"
                        placeholder="john@example.com"
                        {...register("email")}
                        className="w-full pl-10 pr-4 py-3 rounded-xl text-sm bg-slate-50/80 dark:bg-slate-950/60 border border-slate-200 dark:border-white/10 text-slate-900 dark:text-white placeholder-slate-400 dark:placeholder-zinc-500 focus:outline-none focus:border-indigo-500 focus:ring-2 focus:ring-indigo-500/20 transition-all shadow-sm"
                      />
                    </div>
                    {errors.email && (
                      <p className="text-[11px] text-red-500 dark:text-red-400 mt-1">
                        {errors.email.message}
                      </p>
                    )}
                  </div>

                  <div>
                    <label
                      htmlFor="phone"
                      className="block text-xs font-semibold text-slate-700 dark:text-zinc-300 mb-1.5"
                    >
                      Phone / WhatsApp
                    </label>
                    <div className="relative">
                      <div className="absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-400 dark:text-zinc-500 pointer-events-none">
                        <Phone size={15} />
                      </div>
                      <input
                        id="phone"
                        type="tel"
                        placeholder="+1 234 567 890"
                        {...register("phone")}
                        className="w-full pl-10 pr-4 py-3 rounded-xl text-sm bg-slate-50/80 dark:bg-slate-950/60 border border-slate-200 dark:border-white/10 text-slate-900 dark:text-white placeholder-slate-400 dark:placeholder-zinc-500 focus:outline-none focus:border-indigo-500 focus:ring-2 focus:ring-indigo-500/20 transition-all shadow-sm"
                      />
                    </div>
                  </div>
                </div>

                <div>
                  <label
                    htmlFor="message"
                    className="block text-xs font-semibold text-slate-700 dark:text-zinc-300 mb-1.5"
                  >
                    Project Details &amp; Requirements *
                  </label>
                  <textarea
                    id="message"
                    rows={4}
                    placeholder="Tell me about your project scope, features, goals, and desired delivery schedule..."
                    {...register("message")}
                    className="w-full px-4 py-3 rounded-xl text-sm bg-slate-50/80 dark:bg-slate-950/60 border border-slate-200 dark:border-white/10 text-slate-900 dark:text-white placeholder-slate-400 dark:placeholder-zinc-500 focus:outline-none focus:border-indigo-500 focus:ring-2 focus:ring-indigo-500/20 transition-all resize-none shadow-sm"
                  />
                  {errors.message && (
                    <p className="text-[11px] text-red-500 dark:text-red-400 mt-1">
                      {errors.message.message}
                    </p>
                  )}
                </div>

                {/* Submit Button */}
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full py-4 rounded-2xl font-bold text-sm bg-gradient-to-r from-blue-600 via-indigo-600 to-blue-600 hover:from-blue-500 hover:via-indigo-500 hover:to-blue-500 text-white shadow-lg shadow-indigo-500/25 hover:shadow-indigo-500/40 hover:scale-[1.01] active:scale-[0.99] transition-all duration-200 flex items-center justify-center gap-2 disabled:opacity-50 cursor-pointer"
                >
                  {isSubmitting ? (
                    <>
                      <Loader2 size={16} className="animate-spin" />
                      <span>Sending inquiry...</span>
                    </>
                  ) : (
                    <>
                      <Send size={15} />
                      <span>Send Project Inquiry</span>
                    </>
                  )}
                </button>

                {/* Client Trust & NDA Assurance Note */}
                <div className="pt-2 flex items-center justify-center gap-2 text-[11px] text-slate-500 dark:text-zinc-400 text-center">
                  <Lock size={12} className="text-emerald-500 shrink-0" />
                  <span>Strict NDA Confidentiality Guaranteed • Zero Spam • 100% Code Ownership</span>
                </div>

                {/* Status Feedback Message */}
                <AnimatePresence>
                  {status && (
                    <motion.div
                      initial={{ opacity: 0, y: 5 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -5 }}
                      className={`flex items-start gap-2.5 p-4 rounded-xl text-xs font-medium ${
                        status.type === "success"
                          ? "bg-emerald-500/10 text-emerald-700 dark:text-emerald-300 border border-emerald-500/30"
                          : "bg-red-500/10 text-red-600 dark:text-red-400 border border-red-500/20"
                      }`}
                    >
                      {status.type === "success" ? (
                        <CheckCircle2 size={16} className="text-emerald-500 shrink-0 mt-0.5" />
                      ) : (
                        <AlertCircle size={16} className="text-red-500 shrink-0 mt-0.5" />
                      )}
                      <span>{status.msg}</span>
                    </motion.div>
                  )}
                </AnimatePresence>
              </form>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
