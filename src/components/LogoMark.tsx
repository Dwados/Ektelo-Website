/**
 * Ektelo mark — an "E" reduced to three execution bars accelerating forward,
 * enclosed in a precision frame. Reads as motion + order.
 */
export function LogoMark({ className = "h-8 w-8" }: { className?: string }) {
  return (
    <svg viewBox="0 0 40 40" fill="none" aria-hidden="true" className={className}>
      <rect x="1" y="1" width="38" height="38" rx="8" className="fill-accent" />
      <path d="M11 13h18" stroke="white" strokeWidth="3.2" strokeLinecap="round" />
      <path d="M11 20h12" stroke="white" strokeWidth="3.2" strokeLinecap="round" />
      <path d="M11 27h18" stroke="white" strokeWidth="3.2" strokeLinecap="round" />
      <circle cx="29" cy="20" r="2.4" className="fill-signal" />
    </svg>
  );
}

export function Wordmark({ dark = false }: { dark?: boolean }) {
  return (
    <span className="inline-flex items-center gap-2.5">
      <LogoMark className="h-8 w-8 shrink-0" />
      <span
        className={`font-display text-[1.35rem] font-semibold leading-none tracking-tight ${
          dark ? "text-white" : "text-ink-strong"
        }`}
      >
        Ektelo
      </span>
    </span>
  );
}
