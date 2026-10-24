"use client";

import React from "react";
import { Github, Linkedin, Mail, ArrowUpRight } from "lucide-react";
import { SiFiverr } from "react-icons/si";

const Footer: React.FC = () => {
  const year = new Date().getFullYear();

  return (
    <footer className="py-12 relative overflow-hidden border-t border-[#E5E7EB] dark:border-white/[0.08] text-xs text-[#64748B] dark:text-zinc-500 transition-colors">
      <div className="container max-w-6xl mx-auto px-6">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          {/* Brand & Note */}
          <div className="flex items-center gap-2.5">
            <span className="w-2 h-2 rounded-full bg-[#6366F1]" />
            <span className="font-bold text-[#17191F] dark:text-zinc-200 text-sm">
              Md Samim Hosen
            </span>
            <span className="text-slate-300 dark:text-zinc-700">•</span>
            <span>Full Stack Developer</span>
          </div>

          {/* Social Links */}
          <div className="flex flex-wrap items-center gap-5 sm:gap-6 text-[#64748B] dark:text-zinc-400 font-medium">
            <a
              href="https://github.com/samimcodes"
              target="_blank"
              rel="noreferrer"
              className="hover:text-[#17191F] dark:hover:text-white transition-colors flex items-center gap-1.5"
            >
              <Github size={14} /> GitHub
            </a>
            <a
              href="https://www.linkedin.com/in/samim01/"
              target="_blank"
              rel="noreferrer"
              className="hover:text-[#17191F] dark:hover:text-white transition-colors flex items-center gap-1.5"
            >
              <Linkedin size={14} /> LinkedIn
            </a>
            <a
              href="https://www.fiverr.com/samim_io"
              target="_blank"
              rel="noreferrer"
              className="hover:text-[#1DBF73] transition-colors flex items-center gap-1.5 text-emerald-600 dark:text-[#1DBF73] font-semibold"
            >
              <SiFiverr size={16} /> Fiverr
            </a>
            <a
              href="mailto:mdsamimhoen827@gmail.com"
              className="hover:text-[#17191F] dark:hover:text-white transition-colors flex items-center gap-1.5"
            >
              <Mail size={14} /> Email
            </a>
            <a
              href="https://wa.me/8801743282144"
              target="_blank"
              rel="noreferrer"
              className="hover:text-[#17191F] dark:hover:text-white transition-colors flex items-center gap-1 text-emerald-600 dark:text-emerald-400 font-semibold"
            >
              WhatsApp <ArrowUpRight size={13} />
            </a>
          </div>

          {/* Copyright */}
          <div>
            <p>© {year} Md Samim Hosen. All rights reserved.</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
