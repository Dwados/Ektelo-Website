import type { Metadata } from "next";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { ButtonLink } from "@/components/Button";
import { PageHero } from "@/components/PageHero";
import { Reveal } from "@/components/Reveal";
import { Section } from "@/components/Section";
import { insights, site } from "@/lib/data";

export const metadata: Metadata = {
  title: "Insights",
  description:
    "Field notes on operational transformation, AI in operations, process engineering, and government modernization — written by the people doing the work.",
};

function formatDate(iso: string) {
  return new Date(`${iso}T00:00:00Z`).toLocaleDateString("en-US", {
    year: "numeric",
    month: "short",
    day: "numeric",
    timeZone: "UTC",
  });
}

export default function InsightsPage() {
  const [lead, ...rest] = insights;

  return (
    <>
      <PageHero
        eyebrow="Insights"
        title="Field notes from the transformation floor"
        lead="No thought-leadership theater. These are the patterns, numbers, and hard lessons from real operational work — published when we learn something worth your time."
      />

      <Section tone="white" className="py-20 sm:py-28">
        <div className="wrap">
          {/* Featured essay */}
          <Reveal>
            <Link
              href={`/insights/${lead.slug}`}
              className="group grid cursor-pointer overflow-hidden border border-hairline shadow-card transition-all duration-300 hover:-translate-y-1 hover:shadow-card-hover lg:grid-cols-2"
            >
              <div className="relative hidden min-h-[280px] overflow-hidden bg-surface lg:block">
                <div className="grid-lines-dark absolute inset-0" aria-hidden="true" />
                <div className="absolute inset-0 bg-hero-radial" aria-hidden="true" />
                <p className="absolute bottom-8 left-8 right-8 font-mono text-[0.6875rem] uppercase tracking-[0.25em] text-signal">
                  Featured essay
                </p>
              </div>
              <div className="p-8 sm:p-12">
                <div className="flex flex-wrap items-center gap-x-4 gap-y-2 font-mono text-xs uppercase tracking-[0.2em] text-ink-faint">
                  <span className="text-accent-ink">{lead.category}</span>
                  <span aria-hidden="true">·</span>
                  <time dateTime={lead.date}>{formatDate(lead.date)}</time>
                  <span aria-hidden="true">·</span>
                  <span>{lead.readTime} read</span>
                </div>
                <h2 className="mt-5 font-display text-display-sm font-semibold text-ink-strong">
                  {lead.title}
                </h2>
                <p className="mt-4 text-lg leading-relaxed text-ink-soft">{lead.excerpt}</p>
                <p className="mt-8 inline-flex items-center gap-1.5 text-sm font-semibold text-accent-ink">
                  Read the essay
                  <ArrowUpRight
                    className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                    aria-hidden="true"
                  />
                </p>
              </div>
            </Link>
          </Reveal>

          {/* Grid */}
          <div className="mt-8 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {rest.map((post, i) => (
              <Reveal key={post.slug} delay={Math.min(i * 0.06, 0.25)} className="h-full">
                <Link
                  href={`/insights/${post.slug}`}
                  className="group flex h-full cursor-pointer flex-col border border-hairline bg-canvas p-7 transition-all duration-300 hover:-translate-y-1 hover:border-accent/40 hover:shadow-card-hover"
                >
                  <div className="flex flex-wrap items-center gap-x-3 gap-y-1 font-mono text-[0.6875rem] uppercase tracking-[0.18em] text-ink-faint">
                    <span className="text-accent-ink">{post.category}</span>
                    <span aria-hidden="true">·</span>
                    <time dateTime={post.date}>{formatDate(post.date)}</time>
                  </div>
                  <h3 className="mt-4 font-display text-lg font-semibold leading-snug text-ink-strong">
                    {post.title}
                  </h3>
                  <p className="mt-3 flex-1 text-[0.9375rem] leading-relaxed text-ink-soft">
                    {post.excerpt}
                  </p>
                  <p className="mt-5 flex items-center justify-between font-mono text-[0.6875rem] uppercase tracking-[0.18em] text-ink-faint">
                    {post.readTime} read
                    <ArrowUpRight
                      className="h-4 w-4 text-accent-ink opacity-0 transition-opacity group-hover:opacity-100"
                      aria-hidden="true"
                    />
                  </p>
                </Link>
              </Reveal>
            ))}
          </div>

          {/* Subscribe strip */}
          <Reveal className="mt-16">
            <div className="flex flex-col items-start justify-between gap-6 border border-hairline bg-canvas-alt p-8 sm:p-10 lg:flex-row lg:items-center">
              <div>
                <h2 className="font-display text-xl font-semibold text-ink-strong">
                  The Operations Brief
                </h2>
                <p className="mt-2 max-w-xl text-ink-soft">
                  One email a month: a measurable idea you can apply to your operation the same week.
                  Request it and we'll add you personally — no automation theater.
                </p>
              </div>
              <ButtonLink href={`mailto:${site.emails[0]}?subject=Subscribe%20me%20to%20The%20Operations%20Brief`}>
                Request the brief
              </ButtonLink>
            </div>
          </Reveal>
        </div>
      </Section>
    </>
  );
}
