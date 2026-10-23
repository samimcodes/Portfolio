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
  ShieldCheck,
  Lock,
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
    <section id="contact" className="py-24 sm:py-32 relative overflow-hidden">
      {/* Background Ambient Radial Highlights */}
      <div className="absolute top-1/4 right-1/4 w-[600px] h-[300px] bg-indigo-500/5 dark:bg-indigo-500/10 rounded-full blur-[140px] pointer-events-none -z-10" />
      <div className="absolute bottom-10 left-10 w-[400px] h-[300px] bg-emerald-500/5 dark:bg-emerald-500/10 rounded-full blur-[120px] pointer-events-none -z-10" />

      <div className="container max-w-6xl mx-auto px-6 relative z-10">
        <div className="rounded-[2.5rem] p-7 sm:p-11 lg:p-14 bg-white/95 dark:bg-slate-900/85 backdrop-blur-2xl border border-slate-200/90 dark:border-white/10 shadow-[0_20px_50px_rgba(0,0,0,0.06)] dark:shadow-[0_25px_60px_rgba(0,0,0,0.4)] text-slate-900 dark:text-white transition-all">
          <div className="grid lg:grid-cols-12 gap-10 lg:gap-14 items-start">
            {/* Left Column: Direct Inquiries (5 cols) */}
            <div className="lg:col-span-5">
              {/* Availability Pulse Badge */}
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-50 dark:bg-emerald-500/10 border border-emerald-200/70 dark:border-emerald-500/30 text-[11px] font-semibold text-emerald-700 dark:text-emerald-300 mb-4">
                <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                <span>Available for Q4 Client Projects &amp; Remote Roles</span>
              </div>

              <span className="text-xs font-semibold uppercase tracking-[0.2em] text-[#6366F1] dark:text-[#818CF8] mb-2 block">
                Get in Touch
              </span>

              <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-slate-900 dark:text-white mb-4">
                Let&apos;s build something <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 dark:from-blue-400 dark:via-indigo-300 dark:to-purple-300">
                  extraordinary.
                </span>
              </h2>

              <p className="text-slate-600 dark:text-zinc-400 text-sm sm:text-base leading-relaxed mb-7 font-normal">
                Have a new web application, SaaS platform, or need a dedicated full-stack engineer? Reach out directly via WhatsApp, Fiverr, email, or send a project brief below.
              </p>

              <div className="space-y-3">
                {/* WhatsApp & Call */}
                <a
                  href="https://wa.me/8801743282144"
                  target="_blank"
                  rel="noreferrer"
                  className="group flex items-center justify-between p-4 rounded-2xl bg-slate-50/90 dark:bg-white/[0.04] border border-slate-200/80 dark:border-white/[0.08] hover:border-emerald-500/50 hover:bg-emerald-50/40 dark:hover:bg-white/[0.07] hover:shadow-md hover:shadow-emerald-500/10 transition-all duration-200"
                >
                  <div className="flex items-center gap-3.5">
                    <div className="w-10 h-10 rounded-xl bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 flex items-center justify-center group-hover:scale-105 transition-transform">
                      <MessageSquare size={18} />
                    </div>
                    <div>
                      <p className="text-[10px] font-semibold uppercase tracking-wider text-slate-500 dark:text-zinc-400">
                        WhatsApp &amp; Direct Call
                      </p>
                      <p className="text-sm font-bold text-slate-900 dark:text-white">
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
                  className="group flex items-center justify-between p-4 rounded-2xl bg-slate-50/90 dark:bg-white/[0.04] border border-slate-200/80 dark:border-white/[0.08] hover:border-[#1DBF73]/60 hover:bg-[#1DBF73]/[0.06] hover:shadow-md hover:shadow-[#1DBF73]/10 transition-all duration-200"
                >
                  <div className="flex items-center gap-3.5">
                    <div className="w-10 h-10 rounded-xl bg-[#1DBF73]/15 text-[#1DBF73] flex items-center justify-center group-hover:scale-105 transition-transform">
                      <SiFiverr size={22} />
                    </div>
                    <div>
                      <div className="flex items-center gap-1.5">
                        <p className="text-[10px] font-semibold uppercase tracking-wider text-slate-500 dark:text-zinc-400 group-hover:text-[#1DBF73] transition-colors">
                          Fiverr Marketplace
                        </p>
                        <span className="px-1.5 py-0.2 rounded text-[9px] font-bold bg-[#1DBF73]/20 text-[#1DBF73]">
                          Escrow Protected
                        </span>
                      </div>
                      <p className="text-sm font-bold text-slate-900 dark:text-white">
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
                  href="mailto:mdsamimhosen827@gmail.com"
                  className="group flex items-center justify-between p-4 rounded-2xl bg-slate-50/90 dark:bg-white/[0.04] border border-slate-200/80 dark:border-white/[0.08] hover:border-indigo-500/50 hover:bg-indigo-50/40 dark:hover:bg-white/[0.07] hover:shadow-md hover:shadow-indigo-500/10 transition-all duration-200"
                >
                  <div className="flex items-center gap-3.5">
                    <div className="w-10 h-10 rounded-xl bg-indigo-500/10 text-indigo-600 dark:text-indigo-400 flex items-center justify-center group-hover:scale-105 transition-transform">
                      <Mail size={18} />
                    </div>
                    <div>
                      <p className="text-[10px] font-semibold uppercase tracking-wider text-slate-500 dark:text-zinc-400">
                        Direct Email
                      </p>
                      <p className="text-sm font-bold text-slate-900 dark:text-white truncate max-w-[210px] sm:max-w-none">
                        mdsamimhosen827@gmail.com
                      </p>
                    </div>
                  </div>
                  <ArrowUpRight
                    size={16}
                    className="text-slate-400 group-hover:text-indigo-600 dark:group-hover:text-indigo-400 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all"
                  />
                </a>

                {/* Location */}
                <div className="flex items-center gap-3.5 p-4 rounded-2xl bg-slate-50/60 dark:bg-white/[0.02] border border-slate-200/60 dark:border-white/[0.05]">
                  <div className="w-10 h-10 rounded-xl bg-slate-200/60 dark:bg-white/[0.04] text-slate-600 dark:text-zinc-400 flex items-center justify-center">
                    <MapPin size={18} />
                  </div>
                  <div>
                    <p className="text-[10px] font-semibold uppercase tracking-wider text-slate-500 dark:text-zinc-400">
                      Location
                    </p>
                    <p className="text-sm font-bold text-slate-900 dark:text-white">
                      Rangpur, Bangladesh (UTC+6)
                    </p>
                  </div>
                </div>

                {/* Professional Socials */}
                <div className="pt-2 flex items-center gap-2.5">
                  <a
                    href="https://github.com/samimcodes"
                    target="_blank"
                    rel="noreferrer"
                    className="flex-1 inline-flex items-center justify-center gap-1.5 px-3 py-2.5 rounded-xl bg-slate-100 hover:bg-slate-200/80 dark:bg-white/[0.04] dark:hover:bg-white/[0.09] border border-slate-200 dark:border-white/[0.08] text-xs font-semibold text-slate-700 dark:text-zinc-300 hover:text-slate-950 dark:hover:text-white transition-colors"
                  >
                    <span>GitHub</span>
                    <ArrowUpRight size={13} />
                  </a>
                  <a
                    href="https://www.linkedin.com/in/samim01/"
                    target="_blank"
                    rel="noreferrer"
                    className="flex-1 inline-flex items-center justify-center gap-1.5 px-3 py-2.5 rounded-xl bg-slate-100 hover:bg-slate-200/80 dark:bg-white/[0.04] dark:hover:bg-white/[0.09] border border-slate-200 dark:border-white/[0.08] text-xs font-semibold text-slate-700 dark:text-zinc-300 hover:text-slate-950 dark:hover:text-white transition-colors"
                  >
                    <span>LinkedIn</span>
                    <ArrowUpRight size={13} />
                  </a>
                  <a
                    href="https://www.fiverr.com/samim_io"
                    target="_blank"
                    rel="noreferrer"
                    className="flex-1 inline-flex items-center justify-center gap-1.5 px-3 py-2.5 rounded-xl bg-slate-100 hover:bg-[#1DBF73]/15 dark:bg-white/[0.04] dark:hover:bg-[#1DBF73]/20 border border-slate-200 hover:border-[#1DBF73]/50 dark:border-white/[0.08] text-xs font-semibold text-slate-700 hover:text-[#1DBF73] dark:text-zinc-300 dark:hover:text-[#1DBF73] transition-colors"
                  >
                    <span>Fiverr</span>
                    <ArrowUpRight size={13} />
                  </a>
                </div>
              </div>
            </div>

            {/* Right Column: Clean Inquiry Form (7 cols) */}
            <div className="lg:col-span-7 p-6 sm:p-8 rounded-3xl bg-slate-50/90 dark:bg-white/[0.03] border border-slate-200/90 dark:border-white/[0.08] backdrop-blur-md transition-colors">
              <div className="mb-6">
                <h3 className="text-xl sm:text-2xl font-bold text-slate-900 dark:text-white mb-1">
                  Send a Direct Message
                </h3>
                <p className="text-xs sm:text-sm text-slate-600 dark:text-zinc-400">
                  Select your project type and outline your vision below.
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
                        className={`px-3 py-1.5 rounded-xl text-xs font-medium transition-all duration-200 border ${
                          isSelected
                            ? "bg-indigo-600 text-white border-indigo-600 shadow-sm shadow-indigo-500/20"
                            : "bg-white dark:bg-white/5 text-slate-700 dark:text-zinc-300 border-slate-200/80 dark:border-white/10 hover:border-slate-300 dark:hover:border-white/20"
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
                        className="w-full pl-10 pr-4 py-3 rounded-xl text-sm bg-white dark:bg-black/40 border border-slate-200 dark:border-white/[0.1] text-slate-900 dark:text-white placeholder-slate-400 dark:placeholder-zinc-500 focus:outline-none focus:border-indigo-500 focus:ring-2 focus:ring-indigo-500/20 transition-all shadow-sm"
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
                      className="w-full px-4 py-3 rounded-xl text-sm bg-white dark:bg-black/40 border border-slate-200 dark:border-white/[0.1] text-slate-900 dark:text-white placeholder-slate-400 dark:placeholder-zinc-500 focus:outline-none focus:border-indigo-500 focus:ring-2 focus:ring-indigo-500/20 transition-all shadow-sm"
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
                        className="w-full pl-10 pr-4 py-3 rounded-xl text-sm bg-white dark:bg-black/40 border border-slate-200 dark:border-white/[0.1] text-slate-900 dark:text-white placeholder-slate-400 dark:placeholder-zinc-500 focus:outline-none focus:border-indigo-500 focus:ring-2 focus:ring-indigo-500/20 transition-all shadow-sm"
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
                        className="w-full pl-10 pr-4 py-3 rounded-xl text-sm bg-white dark:bg-black/40 border border-slate-200 dark:border-white/[0.1] text-slate-900 dark:text-white placeholder-slate-400 dark:placeholder-zinc-500 focus:outline-none focus:border-indigo-500 focus:ring-2 focus:ring-indigo-500/20 transition-all shadow-sm"
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
                    className="w-full px-4 py-3 rounded-xl text-sm bg-white dark:bg-black/40 border border-slate-200 dark:border-white/[0.1] text-slate-900 dark:text-white placeholder-slate-400 dark:placeholder-zinc-500 focus:outline-none focus:border-indigo-500 focus:ring-2 focus:ring-indigo-500/20 transition-all resize-none shadow-sm"
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
                  className="w-full py-4 rounded-2xl font-bold text-sm bg-slate-900 hover:bg-slate-800 text-white dark:bg-white dark:hover:bg-zinc-100 dark:text-slate-950 shadow-md hover:shadow-xl hover:scale-[1.008] active:scale-[0.99] transition-all duration-200 flex items-center justify-center gap-2 disabled:opacity-50"
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
                <div className="pt-2 flex items-center justify-center gap-2 text-[11px] text-slate-500 dark:text-zinc-400">
                  <Lock size={12} className="text-emerald-500 shrink-0" />
                  <span>Strict NDA Confidentiality Guaranteed • Zero Spam</span>
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
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;

