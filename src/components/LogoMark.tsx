/**
 * Ektelo mark — an "E" reduced to three execution bars accelerating forward,
 * enclosed in a precision frame. Reads as motion + order.
 */
export function LogoMark({ className = "h-8 w-8" }: { className?: string }) {
  return (
    <svg viewBox="0 0 40 40" fill="none" aria-hidden="true" className={className}>
      <rect
        x="1.5"
        y="1.5"
        width="37"
        height="37"
        rx="8.5"
        fill="#0b1b2f"
        stroke="#1e3a5f"
        strokeWidth="1.2"
      />
      <rect x="8.5" y="10.5" width="18" height="3.5" rx="1.75" fill="#E2E8F0" />
      <rect x="8.5" y="18.25" width="12.5" height="3.5" rx="1.75" fill="#38BDF8" />
      <circle cx="27" cy="20" r="2.25" className="fill-signal" />
      <rect x="8.5" y="26" width="18" height="3.5" rx="1.75" fill="#E2E8F0" />
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
