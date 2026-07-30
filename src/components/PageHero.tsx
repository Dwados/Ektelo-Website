import type { ReactNode } from "react";
import { Reveal } from "@/components/Reveal";

/**
 * Navy hero band used at the top of every inner page.
 * Keeps the fixed dark header legible and the brand rhythm consistent.
 */
export function PageHero({
  eyebrow,
  title,
  lead,
  children,
}: {
  eyebrow: string;
  title: ReactNode;
  lead?: ReactNode;
  children?: ReactNode;
}) {
  return (
    <section className="relative overflow-hidden bg-navy pb-20 pt-40 text-white sm:pb-24">
      <div className="grid-lines-dark absolute inset-0" aria-hidden="true" />
      <div className="absolute inset-0 bg-hero-radial" aria-hidden="true" />
      <div
        className="absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent via-blue/40 to-transparent"
        aria-hidden="true"
      />
      <div className="wrap relative">
        <Reveal>
          <p className="eyebrow text-emerald">{eyebrow}</p>
          <h1 className="mt-5 max-w-4xl font-display text-display-lg font-semibold text-white">
            {title}
          </h1>
          {lead && <p className="mt-6 max-w-2xl text-lg leading-relaxed text-slate-300">{lead}</p>}
        </Reveal>
        {children}
      </div>
    </section>
  );
}
