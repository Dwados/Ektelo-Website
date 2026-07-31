"use client";

import { useEffect } from "react";
import Link from "next/link";
import { RotateCcw } from "lucide-react";
import { site } from "@/lib/data";

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <section className="relative flex min-h-dvh items-center overflow-hidden bg-surface text-white">
      <div className="grid-lines-dark absolute inset-0" aria-hidden="true" />
      <div className="absolute inset-0 bg-hero-radial" aria-hidden="true" />
      <div className="wrap relative py-32">
        <p className="eyebrow text-signal">Unexpected error</p>
        <h1 className="mt-6 max-w-2xl font-display text-display-lg font-semibold">
          Something on our side stopped working.
        </h1>
        <p className="mt-6 max-w-xl text-lg leading-relaxed text-on-dark">
          The page failed to render. Trying again usually clears it. If it keeps happening, tell us
          what you were doing and we&rsquo;ll fix it.
        </p>
        {error.digest && (
          <p className="mt-4 font-mono text-xs uppercase tracking-[0.2em] text-on-dark-faint">
            Reference {error.digest}
          </p>
        )}
        <div className="mt-10 flex flex-wrap items-center gap-4">
          <button
            type="button"
            onClick={reset}
            className="group inline-flex h-14 cursor-pointer items-center justify-center gap-2 rounded-md bg-accent px-8 text-base font-semibold text-white transition-all duration-200 hover:bg-accent-hover active:scale-[0.98]"
          >
            <RotateCcw className="h-4 w-4" aria-hidden="true" />
            Try again
          </button>
          <Link
            href="/"
            className="inline-flex h-14 cursor-pointer items-center justify-center rounded-md border border-white/20 px-8 text-base font-semibold text-white transition-all duration-200 hover:border-white/50 hover:bg-white/5"
          >
            Back to home
          </Link>
          <a
            href={`mailto:${site.emails[0]}?subject=${encodeURIComponent("Website error")}`}
            className="cursor-pointer text-sm font-semibold text-accent-soft hover:text-white"
          >
            Report it
          </a>
        </div>
      </div>
    </section>
  );
}
