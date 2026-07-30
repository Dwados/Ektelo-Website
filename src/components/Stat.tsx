"use client";

import { useEffect, useRef, useState } from "react";
import { useInView, useReducedMotion } from "framer-motion";

type StatProps = {
  value: number;
  prefix?: string;
  suffix?: string;
  decimals?: number;
  label: string;
  tone?: "dark" | "light";
};

/** Count-up stat that animates once when scrolled into view. */
export function Stat({ value, prefix = "", suffix = "", decimals = 0, label, tone = "dark" }: StatProps) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });
  const reduce = useReducedMotion();
  const [display, setDisplay] = useState(reduce ? value : 0);

  useEffect(() => {
    if (!inView) return;
    if (reduce) {
      setDisplay(value);
      return;
    }
    const duration = 1400;
    const start = performance.now();
    let raf: number;
    const tick = (now: number) => {
      const p = Math.min((now - start) / duration, 1);
      const eased = 1 - Math.pow(1 - p, 3); // ease-out cubic
      setDisplay(value * eased);
      if (p < 1) raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [inView, value, reduce]);

  const dark = tone === "dark";
  return (
    <div ref={ref}>
      <p
        className={`font-display text-3xl font-semibold tabular-nums tracking-tight sm:text-4xl ${
          dark ? "text-white" : "text-navy"
        }`}
      >
        {prefix}
        {display.toFixed(decimals)}
        <span className="text-emerald">{suffix}</span>
      </p>
      <p className={`mt-2 text-sm ${dark ? "text-slate-400" : "text-ink-faint"}`}>{label}</p>
    </div>
  );
}
