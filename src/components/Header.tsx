"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowUpRight, Menu, X, Sun, Moon } from "lucide-react";
import { cn } from "@/lib/utils";

interface NavLink {
  name: string;
  href: string;
}

const navLinks: NavLink[] = [
  { name: "About", href: "#about" },
  { name: "Experience", href: "#experience" },
  { name: "Projects", href: "#projects" },
  { name: "Services", href: "#services" },
  { name: "Process", href: "#process" },
  { name: "Stack", href: "#skills" },
  { name: "FAQ", href: "#faq" },
];

const Header: React.FC = () => {
  const [activeSection, setActiveSection] = useState("home");
  const [mobileOpen, setMobileOpen] = useState(false);
  const [theme, setTheme] = useState<"light" | "dark">("dark");
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    const saved = localStorage.getItem("site-theme");
    if (saved === "light" || saved === "dark") {
      setTheme(saved);
    } else if (document.documentElement.classList.contains("dark")) {
      setTheme("dark");
    }
  }, []);

  useEffect(() => {
    if (!mounted) return;
    if (theme === "dark") {
      document.documentElement.classList.add("dark");
      localStorage.setItem("site-theme", "dark");
    } else {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("site-theme", "light");
    }
  }, [theme, mounted]);

  const toggleTheme = () => {
    setTheme((prev) => (prev === "dark" ? "light" : "dark"));
  };

  useEffect(() => {
    const sections = [
      "home",
      "about",
      "experience",
      "projects",
      "services",
      "process",
      "skills",
      "faq",
      "contact",
    ];
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      { threshold: 0.3 }
    );
    sections.forEach((id) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });
    return () => observer.disconnect();
  }, []);

  return (
    <>
      {/* Navbar aligned with the rest of the sections (container max-w-6xl mx-auto px-6) */}
      <motion.header
        initial={{ y: -40, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
        className="fixed top-4 inset-x-0 z-50 pointer-events-none"
      >
        <div className="container max-w-6xl mx-auto px-6">
          <div className="pointer-events-auto w-full flex items-center justify-between px-5 sm:px-6 py-2 rounded-full bg-white/90 dark:bg-slate-900/80 backdrop-blur-xl border border-slate-200/80 dark:border-white/10 shadow-lg shadow-black/5 dark:shadow-black/25 transition-all duration-300">
            {/* Ultra-Premium Glowing, Breathing & Dynamic Color-Shifting Brand Mark */}
            <a
              href="#home"
              className="relative group flex items-center py-1 transition-transform duration-300 hover:scale-105"
              aria-label="Back to Top"
            >
              {/* Sharp, Razor-Clean Dynamic Color-Shifting & Pulsing "Samim" Text (জ্বলবে, নিভবে ও রঙ বদলাবে - কোনো ঘোলাটে ব্লার ছাড়া) */}
              <motion.span
                animate={{
                  color: [
                    "#2563eb", // Royal Blue
                    "#6366f1", // Indigo (নিভবে)
                    "#8b5cf6", // Purple (জ্বলবে)
                    "#ec4899", // Rose Pink (নিভবে)
                    "#06b6d4", // Cyan (জ্বলবে)
                    "#10b981", // Emerald (নিভবে)
                    "#2563eb", // Royal Blue (জ্বলবে)
                  ],
                  opacity: [1, 0.65, 1, 0.65, 1, 0.65, 1], // সরাসরি টেক্সটটাই জ্বলবে ও নিভবে
                }}
                transition={{
                  duration: 4.8,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
                className="font-extrabold text-base sm:text-lg tracking-tight select-none inline-block"
              >
                Samim
              </motion.span>
            </a>

            {/* Desktop Links */}
            <nav className="hidden md:flex items-center gap-1">
              {navLinks.map((link) => {
                const isActive = activeSection === link.href.slice(1);
                return (
                  <a
                    key={link.name}
                    href={link.href}
                    className={cn(
                      "relative px-3.5 py-1.5 text-xs font-medium rounded-full transition-all duration-200",
                      isActive
                        ? "text-slate-900 dark:text-white font-semibold"
                        : "text-slate-600 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white"
                    )}
                  >
                    {link.name}
                    {isActive && (
                      <motion.span
                        layoutId="active-pill"
                        className="absolute inset-0 rounded-full bg-slate-100 dark:bg-white/[0.08] -z-10"
                        transition={{ type: "spring", bounce: 0.2, duration: 0.4 }}
                      />
                    )}
                  </a>
                );
              })}
            </nav>

            {/* Right Action Buttons */}
            <div className="flex items-center gap-2.5">
              {/* Luxury Segmented Theme Switch */}
              <button
                onClick={toggleTheme}
                aria-label={`Switch to ${theme === "dark" ? "light" : "dark"} mode`}
                className="relative h-8 px-1 rounded-full bg-slate-100 dark:bg-white/[0.08] border border-slate-200/90 dark:border-white/10 hover:border-blue-400/60 dark:hover:border-indigo-400/60 transition-all flex items-center gap-1 shadow-inner"
              >
                <span
                  className={cn(
                    "relative z-10 w-6 h-6 rounded-full flex items-center justify-center transition-colors duration-200",
                    theme === "light" ? "text-amber-500 font-bold" : "text-slate-400"
                  )}
                >
                  <Sun size={13} className={cn("transition-transform duration-300", theme === "light" && "rotate-45 scale-110")} />
                </span>
                <span
                  className={cn(
                    "relative z-10 w-6 h-6 rounded-full flex items-center justify-center transition-colors duration-200",
                    theme === "dark" ? "text-blue-400 font-bold" : "text-slate-400"
                  )}
                >
                  <Moon size={13} className={cn("transition-transform duration-300", theme === "dark" && "-rotate-12 scale-110")} />
                </span>
                {mounted && (
                  <motion.div
                    layout
                    transition={{ type: "spring", stiffness: 500, damping: 32 }}
                    className={cn(
                      "absolute top-1 bottom-1 w-6 rounded-full bg-white dark:bg-slate-800 shadow-sm border border-black/[0.04] dark:border-white/15",
                      theme === "dark" ? "left-[33px]" : "left-1"
                    )}
                  />
                )}
              </button>

              {/* Let's Talk CTA */}
              <a
                href="#contact"
                className="inline-flex items-center gap-1.5 px-4 py-2 rounded-xl bg-blue-600 hover:bg-blue-700 text-white text-xs font-semibold shadow-md shadow-blue-500/20 hover:scale-[1.02] active:scale-98 transition-all"
              >
                <span>Let&apos;s Talk</span>
                <ArrowUpRight size={13} />
              </a>

              {/* Mobile Hamburger */}
              <button
                onClick={() => setMobileOpen(!mobileOpen)}
                className="md:hidden w-8 h-8 rounded-full flex items-center justify-center text-slate-900 dark:text-slate-200 hover:bg-slate-100 dark:hover:bg-white/[0.08] transition-colors"
                aria-label="Toggle Menu"
              >
                {mobileOpen ? <X size={18} /> : <Menu size={18} />}
              </button>
            </div>
          </div>
        </div>
      </motion.header>

      {/* Mobile Drawer matching section width */}
      <AnimatePresence>
        {mobileOpen && (
          <div className="fixed inset-x-0 top-20 z-40 pointer-events-none md:hidden">
            <div className="container max-w-6xl mx-auto px-6">
              <motion.div
                initial={{ opacity: 0, scale: 0.98, y: -8 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.98, y: -8 }}
                className="pointer-events-auto p-5 rounded-2xl bg-white/95 dark:bg-slate-900/95 backdrop-blur-2xl border border-slate-200/80 dark:border-white/10 shadow-2xl"
              >
                <nav className="flex flex-col gap-1">
                  {navLinks.map((link) => (
                    <a
                      key={link.name}
                      href={link.href}
                      onClick={() => setMobileOpen(false)}
                      className="px-4 py-2.5 rounded-xl text-sm font-medium text-slate-900 dark:text-slate-200 hover:bg-slate-100 dark:hover:bg-white/[0.04] transition-colors"
                    >
                      {link.name}
                    </a>
                  ))}
                  <div className="flex items-center justify-between pt-3 border-t border-slate-100 dark:border-white/[0.08] mt-2">
                    <span className="text-xs text-slate-500">Theme</span>
                    <button
                      onClick={toggleTheme}
                      className="px-3 py-1.5 rounded-lg text-xs font-medium bg-slate-100 dark:bg-white/[0.06] text-slate-800 dark:text-slate-200 flex items-center gap-1.5"
                    >
                      {theme === "dark" ? <Sun size={13} /> : <Moon size={13} />}
                      <span>{theme === "dark" ? "Light Mode" : "Dark Mode"}</span>
                    </button>
                  </div>
                  <a
                    href="#contact"
                    onClick={() => setMobileOpen(false)}
                    className="mt-3 text-center py-2.5 rounded-xl bg-blue-600 hover:bg-blue-700 text-white font-semibold text-sm shadow-md shadow-blue-500/20"
                  >
                    Let&apos;s Talk
                  </a>
                </nav>
              </motion.div>
            </div>
          </div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Header;
