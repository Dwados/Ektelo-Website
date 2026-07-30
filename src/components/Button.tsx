import Link from "next/link";
import { ArrowRight } from "lucide-react";
import type { ReactNode } from "react";

type ButtonLinkProps = {
  href: string;
  children: ReactNode;
  variant?: "primary" | "outline-dark" | "outline-light" | "ghost";
  size?: "md" | "lg";
  arrow?: boolean;
  className?: string;
};

const base =
  "group inline-flex cursor-pointer items-center justify-center gap-2 font-sans font-semibold transition-all duration-200 will-change-transform";

const sizes = {
  md: "h-11 px-6 text-[0.9375rem] rounded-md",
  lg: "h-14 px-8 text-base rounded-md",
};

const variants = {
  primary:
    "bg-accent text-white hover:bg-accent-hover active:scale-[0.98] shadow-accent",
  "outline-dark":
    "border border-white/20 text-white hover:border-white/50 hover:bg-white/5 active:scale-[0.98]",
  "outline-light":
    "border border-ink-strong/20 text-ink-strong hover:border-ink-strong/60 hover:bg-ink-strong/[0.03] active:scale-[0.98]",
  ghost: "text-accent-ink hover:text-accent-hover",
};

export function ButtonLink({
  href,
  children,
  variant = "primary",
  size = "md",
  arrow = true,
  className = "",
}: ButtonLinkProps) {
  return (
    <Link href={href} className={`${base} ${sizes[size]} ${variants[variant]} ${className}`}>
      {children}
      {arrow && (
        <ArrowRight
          aria-hidden="true"
          className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-1"
        />
      )}
    </Link>
  );
}

/** Inline text link with sliding arrow — for card footers */
export function TextLink({
  href,
  children,
  tone = "light",
  className = "",
}: {
  href: string;
  children: ReactNode;
  tone?: "light" | "dark";
  className?: string;
}) {
  return (
    <Link
      href={href}
      className={`group inline-flex cursor-pointer items-center gap-1.5 text-sm font-semibold transition-colors ${
        tone === "dark" ? "text-accent-soft hover:text-white" : "text-accent-ink hover:text-ink-strong"
      } ${className}`}
    >
      {children}
      <ArrowRight
        aria-hidden="true"
        className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-1"
      />
    </Link>
  );
}
