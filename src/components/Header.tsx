"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { Menu, X, ArrowRight } from "lucide-react";
import { nav } from "@/lib/data";
import { Wordmark } from "@/components/LogoMark";

export function Header() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const reduce = useReducedMotion();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Close the mobile menu on route change and lock body scroll while open
  useEffect(() => setOpen(false), [pathname]);
  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        scrolled || open
          ? "border-b border-white/10 bg-surface/90 backdrop-blur-md"
          : "border-b border-transparent bg-transparent"
      }`}
    >
      <div className="wrap flex h-[var(--header-h)] items-center justify-between">
        <Link href="/" aria-label="Ektelio — home" className="cursor-pointer">
          <Wordmark dark />
        </Link>

        {/* Desktop nav */}
        <nav aria-label="Primary" className="hidden items-center gap-8 lg:flex">
          {nav.map((item) => {
            const active = pathname === item.href;
            return (
              <Link
                key={item.href}
                href={item.href}
                aria-current={active ? "page" : undefined}
                className={`relative cursor-pointer text-[0.9375rem] font-medium transition-colors duration-200 ${
                  active ? "text-white" : "text-on-dark hover:text-white"
                }`}
              >
                {item.label}
                {active && (
                  <span className="absolute -bottom-2 left-0 right-0 h-px bg-signal" aria-hidden="true" />
                )}
              </Link>
            );
          })}
        </nav>

        <div className="hidden lg:block">
          <Link
            href="/contact"
            className="group inline-flex h-10 cursor-pointer items-center gap-2 rounded-md bg-accent px-5 text-sm font-semibold text-white transition-all duration-200 hover:bg-accent-hover active:scale-[0.98]"
          >
            Start a conversation
            <ArrowRight className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-0.5" aria-hidden="true" />
          </Link>
        </div>

        {/* Mobile toggle */}
        <button
          type="button"
          onClick={() => setOpen((v) => !v)}
          aria-expanded={open}
          aria-controls="mobile-menu"
          aria-label={open ? "Close menu" : "Open menu"}
          className="inline-flex h-11 w-11 cursor-pointer items-center justify-center rounded-md text-white lg:hidden"
        >
          {open ? <X className="h-6 w-6" aria-hidden="true" /> : <Menu className="h-6 w-6" aria-hidden="true" />}
        </button>
      </div>

      {/* Mobile menu */}
      <AnimatePresence>
        {open && (
          <motion.nav
            id="mobile-menu"
            aria-label="Primary"
            initial={reduce ? false : { opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={reduce ? undefined : { opacity: 0, height: 0 }}
            transition={{ duration: 0.25, ease: "easeOut" }}
            className="overflow-hidden border-t border-white/10 bg-surface lg:hidden"
          >
            <div className="wrap flex flex-col gap-1 py-4">
              {nav.map((item, i) => (
                <motion.div
                  key={item.href}
                  initial={reduce ? false : { opacity: 0, x: -12 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.05 + i * 0.04, duration: 0.25 }}
                >
                  <Link
                    href={item.href}
                    aria-current={pathname === item.href ? "page" : undefined}
                    className={`block cursor-pointer rounded-md px-3 py-3 text-lg font-medium ${
                      pathname === item.href ? "bg-white/5 text-white" : "text-on-dark hover:bg-white/5 hover:text-white"
                    }`}
                  >
                    {item.label}
                  </Link>
                </motion.div>
              ))}
              <Link
                href="/contact"
                className="mt-3 inline-flex h-12 cursor-pointer items-center justify-center gap-2 rounded-md bg-accent px-5 text-base font-semibold text-white"
              >
                Start a conversation
                <ArrowRight className="h-4 w-4" aria-hidden="true" />
              </Link>
            </div>
          </motion.nav>
        )}
      </AnimatePresence>
    </header>
  );
}
