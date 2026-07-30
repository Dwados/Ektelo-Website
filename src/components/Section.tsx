import type { ReactNode } from "react";
import { Reveal } from "@/components/Reveal";

type Tone = "white" | "mist" | "navy";

const tones: Record<Tone, string> = {
  white: "bg-canvas",
  mist: "bg-canvas-alt",
  navy: "bg-surface text-white",
};

export function Section({
  tone = "white",
  id,
  className = "",
  children,
}: {
  tone?: Tone;
  id?: string;
  className?: string;
  children: ReactNode;
}) {
  return (
    <section id={id} className={`relative ${tones[tone]} ${className}`}>
      {children}
    </section>
  );
}

/**
 * Standard section header: mono eyebrow + display title + lead paragraph.
 * Tone-aware so the same component works on light and navy sections.
 */
export function SectionHeading({
  eyebrow,
  title,
  lead,
  tone = "light",
  align = "left",
  className = "",
}: {
  eyebrow: string;
  title: ReactNode;
  lead?: ReactNode;
  tone?: "light" | "dark";
  align?: "left" | "center";
  className?: string;
}) {
  const dark = tone === "dark";
  return (
    <Reveal className={`${align === "center" ? "mx-auto text-center" : ""} max-w-3xl ${className}`}>
      <p className={`eyebrow ${dark ? "text-signal" : "text-accent-ink"}`}>{eyebrow}</p>
      <h2
        className={`mt-4 font-display text-display-md font-semibold ${
          dark ? "text-white" : "text-ink-strong"
        }`}
      >
        {title}
      </h2>
      {lead && (
        <p className={`mt-5 text-lg leading-relaxed ${dark ? "text-on-dark" : "text-ink-soft"}`}>
          {lead}
        </p>
      )}
    </Reveal>
  );
}
