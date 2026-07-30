"use client";

import { motion, useReducedMotion } from "framer-motion";
import type { ReactNode } from "react";

type RevealProps = {
  children: ReactNode;
  /** Stagger offset in seconds (use index * 0.08 for lists) */
  delay?: number;
  className?: string;
  /** Slide distance in px */
  y?: number;
  as?: "div" | "section" | "li" | "span";
};

/**
 * Scroll-triggered entrance: fade + rise, ease-out, once.
 * Fully disabled for users who prefer reduced motion.
 */
export function Reveal({ children, delay = 0, className, y = 24, as = "div" }: RevealProps) {
  const reduce = useReducedMotion();
  const Tag = motion[as];

  return (
    <Tag
      initial={reduce ? false : { opacity: 0, y }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.55, delay, ease: [0.21, 0.65, 0.36, 1] }}
      className={className}
    >
      {children}
    </Tag>
  );
}
