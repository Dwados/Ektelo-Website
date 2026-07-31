import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowRight } from "lucide-react";
import { ButtonLink } from "@/components/Button";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { Reveal } from "@/components/Reveal";
import { Section } from "@/components/Section";
import { caseStudies, services, site } from "@/lib/data";

type Params = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return caseStudies.map((cs) => ({ slug: cs.slug }));
}

export async function generateMetadata({ params }: Params): Promise<Metadata> {
  const { slug } = await params;
  const cs = caseStudies.find((c) => c.slug === slug);
  if (!cs) return {};
  return {
    title: cs.title,
    description: cs.challenge,
    alternates: { canonical: `/case-studies/${cs.slug}` },
    openGraph: {
      title: `${cs.title} · Ektelio`,
      description: cs.challenge,
      url: `${site.url}/case-studies/${cs.slug}`,
    },
  };
}

export default async function CaseStudyPage({ params }: Params) {
  const { slug } = await params;
  const cs = caseStudies.find((c) => c.slug === slug);
  if (!cs) notFound();

  const deployed = services.filter((s) => cs.services.includes(s.title));
  const others = caseStudies.filter((c) => c.slug !== cs.slug).slice(0, 3);

  return (
    <>
      <section className="relative overflow-hidden bg-surface pb-20 pt-32 text-white sm:pb-24 sm:pt-36">
        <div className="grid-lines-dark absolute inset-0" aria-hidden="true" />
        <div className="absolute inset-0 bg-hero-radial" aria-hidden="true" />
        <div className="wrap relative">
          <Breadcrumbs
            trail={[
              { label: "Case Studies", href: "/case-studies" },
              { label: cs.client, href: `/case-studies/${cs.slug}` },
            ]}
          />
          <Reveal className="mt-8">
            <p className="eyebrow text-signal">
              {cs.sector} · {cs.client}
            </p>
            <h1 className="mt-6 max-w-4xl font-display text-display-lg font-semibold text-white">
              {cs.title}
            </h1>
          </Reveal>
          <Reveal delay={0.1} className="mt-12 grid gap-8 border-t border-white/10 pt-10 sm:grid-cols-3">
            {cs.results.map((r) => (
              <div key={r.label}>
                <p className="font-display text-3xl font-semibold tabular-nums text-white sm:text-4xl">
                  {r.value}
                </p>
                <p className="mt-2 text-sm text-on-dark-soft">{r.label}</p>
              </div>
            ))}
          </Reveal>
        </div>
      </section>

      <Section tone="white" className="py-20 sm:py-28">
        <div className="wrap grid gap-14 lg:grid-cols-[1.4fr_1fr] lg:gap-20">
          <div className="max-w-[68ch]">
            <h2 className="font-mono text-[0.6875rem] font-medium uppercase tracking-[0.22em] text-ink-faint">
              The situation
            </h2>
            <p className="mt-4 text-[1.0625rem] leading-[1.75] text-ink-soft">{cs.challenge}</p>

            <h2 className="mt-12 font-mono text-[0.6875rem] font-medium uppercase tracking-[0.22em] text-ink-faint">
              What Ektelio did
            </h2>
            <p className="mt-4 text-[1.0625rem] leading-[1.75] text-ink-soft">{cs.approach}</p>

            <h2 className="mt-12 font-mono text-[0.6875rem] font-medium uppercase tracking-[0.22em] text-ink-faint">
              What changed
            </h2>
            <ul className="mt-4 divide-y divide-hairline border-y border-hairline">
              {cs.results.map((r) => (
                <li key={r.label} className="flex items-baseline justify-between gap-6 py-4">
                  <span className="text-ink-soft">{r.label}</span>
                  <span className="font-display text-xl font-semibold tabular-nums text-ink-strong">
                    {r.value}
                  </span>
                </li>
              ))}
            </ul>

            <p className="mt-8 text-sm leading-relaxed text-ink-faint">
              Client identity is withheld under the confidentiality terms of the engagement. Figures
              were verifiable in the client&rsquo;s own systems at handover.
            </p>
          </div>

          <aside className="space-y-10">
            <div>
              <h2 className="font-mono text-[0.6875rem] font-medium uppercase tracking-[0.22em] text-ink-faint">
                Services deployed
              </h2>
              <ul className="mt-5 space-y-2.5">
                {deployed.map((s) => (
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

            <div>
              <h2 className="font-mono text-[0.6875rem] font-medium uppercase tracking-[0.22em] text-ink-faint">
                Other engagements
              </h2>
              <ul className="mt-5 space-y-4">
                {others.map((o) => (
                  <li key={o.slug}>
                    <Link
                      href={`/case-studies/${o.slug}`}
                      className="group block cursor-pointer border border-hairline p-5 transition-colors hover:border-accent/40"
                    >
                      <p className="font-mono text-[0.6875rem] uppercase tracking-[0.2em] text-accent-ink">
                        {o.sector}
                      </p>
                      <p className="mt-2 font-display font-semibold leading-snug text-ink-strong">
                        {o.title}
                      </p>
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </aside>
        </div>
      </Section>

      <Section tone="navy" className="overflow-hidden py-24 sm:py-28">
        <div className="absolute inset-0 bg-cta-radial" aria-hidden="true" />
        <div className="wrap relative flex flex-col items-start justify-between gap-8 lg:flex-row lg:items-center">
          <Reveal>
            <h2 className="max-w-2xl font-display text-display-md font-semibold text-white">
              Your operation could be the next one on this page.
            </h2>
          </Reveal>
          <Reveal delay={0.1}>
            <ButtonLink href="/contact" size="lg">
              Book a diagnostic
            </ButtonLink>
          </Reveal>
        </div>
      </Section>
    </>
  );
}
