import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowRight, Check, Target } from "lucide-react";
import { ButtonLink } from "@/components/Button";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { Reveal } from "@/components/Reveal";
import { Section } from "@/components/Section";
import { iconForSolution, solutionSegments, solutions } from "@/lib/solutions";
import { services, site } from "@/lib/data";

type Params = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return solutions.map((s) => ({ slug: s.slug }));
}

export async function generateMetadata({ params }: Params): Promise<Metadata> {
  const { slug } = await params;
  const sol = solutions.find((s) => s.slug === slug);
  if (!sol) return {};
  return {
    title: sol.title,
    description: sol.oneLiner,
    alternates: { canonical: `/solutions/${sol.slug}` },
    openGraph: {
      title: `${sol.title} · Ektelo`,
      description: sol.oneLiner,
      url: `${site.url}/solutions/${sol.slug}`,
    },
  };
}

export default async function SolutionDetailPage({ params }: Params) {
  const { slug } = await params;
  const sol = solutions.find((s) => s.slug === slug);
  if (!sol) notFound();

  const Icon = iconForSolution(sol);
  const forSegments = solutionSegments.filter((seg) => sol.segments.includes(seg.key));
  const linked = services.filter((s) => sol.services.includes(s.title));
  const related = solutions
    .filter((s) => s.slug !== sol.slug && s.segments.some((seg) => sol.segments.includes(seg)))
    .slice(0, 3);

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: sol.title,
    description: sol.oneLiner,
    provider: { "@type": "ProfessionalService", name: site.name, url: site.url },
    areaServed: "Worldwide",
    audience: forSegments.map((s) => ({ "@type": "Audience", audienceType: s.title })),
  };

  return (
    <>
      <section className="relative overflow-hidden bg-surface pb-20 pt-32 text-white sm:pb-24 sm:pt-36">
        <div className="grid-lines-dark absolute inset-0" aria-hidden="true" />
        <div className="absolute inset-0 bg-hero-radial" aria-hidden="true" />
        <div className="wrap relative">
          <Breadcrumbs
            trail={[
              { label: "Solutions", href: "/solutions" },
              { label: sol.title, href: `/solutions/${sol.slug}` },
            ]}
          />
          <Reveal className="mt-8">
            <div className="flex items-center gap-4">
              <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-md bg-accent text-white">
                <Icon className="h-6 w-6" aria-hidden="true" />
              </div>
              <p className="eyebrow text-signal">Operational Solution</p>
            </div>
            <h1 className="mt-6 max-w-3xl font-display text-display-lg font-semibold text-white">
              {sol.title}
            </h1>
            <p className="mt-6 max-w-2xl text-lg leading-relaxed text-on-dark">{sol.oneLiner}</p>
            <ul className="mt-8 flex flex-wrap gap-2" aria-label="Who this is for">
              {forSegments.map((seg) => (
                <li
                  key={seg.key}
                  className="rounded-full border border-white/15 px-4 py-1.5 font-mono text-[0.6875rem] uppercase tracking-[0.18em] text-on-dark"
                >
                  {seg.title}
                </li>
              ))}
            </ul>
          </Reveal>
        </div>
      </section>

      <Section tone="white" className="py-20 sm:py-28">
        <div className="wrap grid gap-14 lg:grid-cols-[1.4fr_1fr] lg:gap-20">
          <div className="max-w-[68ch]">
            <h2 className="font-mono text-[0.6875rem] font-medium uppercase tracking-[0.22em] text-ink-faint">
              The problem
            </h2>
            <p className="mt-4 text-[1.0625rem] leading-[1.75] text-ink-soft">{sol.problem}</p>

            <h2 className="mt-12 font-mono text-[0.6875rem] font-medium uppercase tracking-[0.22em] text-ink-faint">
              What we deploy
            </h2>
            <ul className="mt-5 space-y-3">
              {sol.deploy.map((d) => (
                <li key={d} className="flex items-start gap-3 leading-relaxed text-ink-soft">
                  <Check className="mt-1.5 h-4 w-4 shrink-0 text-signal-ink" aria-hidden="true" />
                  <span>{d}</span>
                </li>
              ))}
            </ul>

            <h2 className="mt-12 font-mono text-[0.6875rem] font-medium uppercase tracking-[0.22em] text-ink-faint">
              What we are measured on
            </h2>
            <p className="mt-3 text-sm leading-relaxed text-ink-faint">
              These are the numbers baselined at the start and written into the engagement — not
              results claimed from past work.
            </p>
            <ul className="mt-5 divide-y divide-hairline border-y border-hairline">
              {sol.measures.map((m) => (
                <li key={m.metric} className="flex flex-col gap-1 py-4 sm:flex-row sm:items-baseline sm:gap-6">
                  <span className="flex items-center gap-2 font-display font-semibold text-ink-strong sm:w-2/5 sm:shrink-0">
                    <Target className="h-4 w-4 shrink-0 text-accent-ink" aria-hidden="true" />
                    {m.metric}
                  </span>
                  <span className="text-[0.9375rem] leading-relaxed text-ink-soft">{m.commitment}</span>
                </li>
              ))}
            </ul>

            <h2 className="mt-12 font-mono text-[0.6875rem] font-medium uppercase tracking-[0.22em] text-ink-faint">
              How it starts
            </h2>
            <p className="mt-4 text-[1.0625rem] leading-[1.75] text-ink-soft">{sol.startingPoint}</p>
          </div>

          <aside className="space-y-10">
            <div className="border border-hairline bg-canvas-alt p-6">
              <p className="font-mono text-[0.6875rem] font-medium uppercase tracking-[0.22em] text-ink-faint">
                Start here
              </p>
              <p className="mt-3 text-[0.9375rem] leading-relaxed text-ink-soft">
                A diagnostic measures your baseline and puts a cost against the gap before anyone
                proposes a build.
              </p>
              <ButtonLink href="/contact" className="mt-5">
                Book a diagnostic
              </ButtonLink>
            </div>

            {linked.length > 0 && (
              <div>
                <h2 className="font-mono text-[0.6875rem] font-medium uppercase tracking-[0.22em] text-ink-faint">
                  Services involved
                </h2>
                <ul className="mt-5 space-y-2.5">
                  {linked.map((s) => (
                    <li key={s.slug}>
                      <Link
                        href={`/services/${s.slug}`}
                        className="group flex cursor-pointer items-center gap-3 rounded-md px-3 py-2 -mx-3 text-[0.9375rem] font-medium text-ink transition-colors hover:bg-canvas-alt hover:text-ink-strong"
                      >
                        <s.icon className="h-4 w-4 shrink-0 text-accent" aria-hidden="true" />
                        {s.title}
                        <ArrowRight
                          className="ml-auto h-3.5 w-3.5 text-ink-faint opacity-0 transition-opacity group-hover:opacity-100"
                          aria-hidden="true"
                        />
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            )}

            {related.length > 0 && (
              <div>
                <h2 className="font-mono text-[0.6875rem] font-medium uppercase tracking-[0.22em] text-ink-faint">
                  Often paired with
                </h2>
                <ul className="mt-5 space-y-4">
                  {related.map((r) => (
                    <li key={r.slug}>
                      <Link
                        href={`/solutions/${r.slug}`}
                        className="group block cursor-pointer border border-hairline p-5 transition-colors hover:border-accent/40"
                      >
                        <p className="font-display font-semibold leading-snug text-ink-strong">
                          {r.title}
                        </p>
                        <p className="mt-2 text-sm leading-relaxed text-ink-soft">{r.oneLiner}</p>
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </aside>
        </div>
      </Section>

      <Section tone="navy" className="overflow-hidden py-24 sm:py-28">
        <div className="absolute inset-0 bg-cta-radial" aria-hidden="true" />
        <div className="wrap relative flex flex-col items-start justify-between gap-8 lg:flex-row lg:items-center">
          <Reveal>
            <h2 className="max-w-2xl font-display text-display-md font-semibold text-white">
              Put a number on what this is costing you today.
            </h2>
          </Reveal>
          <Reveal delay={0.1}>
            <ButtonLink href="/contact" size="lg">
              Start a conversation
            </ButtonLink>
          </Reveal>
        </div>
      </Section>

      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
    </>
  );
}
