import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowRight, CheckCircle2, Minus } from "lucide-react";
import { ButtonLink } from "@/components/Button";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { Reveal } from "@/components/Reveal";
import { Section } from "@/components/Section";
import { caseStudies, industries, services, site } from "@/lib/data";

type Params = { params: Promise<{ slug: string }> };

/** Which sector label on a case study corresponds to which industry page. */
const SECTOR_MATCH: Record<string, string[]> = {
  government: ["Government"],
  "financial-services": ["Financial Services"],
  healthcare: ["Healthcare"],
  "energy-utilities": ["Energy & Utilities"],
  manufacturing: ["Manufacturing"],
  logistics: ["Logistics & Trade"],
};

export function generateStaticParams() {
  return industries.map((i) => ({ slug: i.slug }));
}

export async function generateMetadata({ params }: Params): Promise<Metadata> {
  const { slug } = await params;
  const industry = industries.find((i) => i.slug === slug);
  if (!industry) return {};
  return {
    title: industry.title,
    description: industry.summary,
    alternates: { canonical: `/industries/${industry.slug}` },
    openGraph: {
      title: `${industry.title} · Ektelio`,
      description: industry.summary,
      url: `${site.url}/industries/${industry.slug}`,
    },
  };
}

export default async function IndustryDetailPage({ params }: Params) {
  const { slug } = await params;
  const industry = industries.find((i) => i.slug === slug);
  if (!industry) notFound();

  const sectors = SECTOR_MATCH[industry.slug] ?? [];
  const proof = caseStudies.filter((cs) => sectors.includes(cs.sector));
  const others = industries.filter((i) => i.slug !== industry.slug).slice(0, 6);
  const relevant = services.filter((s) =>
    proof.some((cs) => cs.services.includes(s.title))
  );
  const shown = relevant.length > 0 ? relevant : services.filter((s) => s.group === "Transform");

  return (
    <>
      <section className="relative overflow-hidden bg-surface pb-20 pt-32 text-white sm:pb-24 sm:pt-36">
        <div className="grid-lines-dark absolute inset-0" aria-hidden="true" />
        <div className="absolute inset-0 bg-hero-radial" aria-hidden="true" />
        <div className="wrap relative">
          <Breadcrumbs
            trail={[
              { label: "Industries", href: "/industries" },
              { label: industry.title, href: `/industries/${industry.slug}` },
            ]}
          />
          <Reveal className="mt-8">
            <div className="flex items-center gap-4">
              <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-md bg-accent text-white">
                <industry.icon className="h-6 w-6" aria-hidden="true" />
              </div>
              <p className="eyebrow text-signal">Industry</p>
            </div>
            <h1 className="mt-6 max-w-3xl font-display text-display-lg font-semibold text-white">
              {industry.title}
            </h1>
            <p className="mt-6 max-w-2xl text-lg leading-relaxed text-on-dark">{industry.summary}</p>
          </Reveal>
        </div>
      </section>

      <Section tone="white" className="py-20 sm:py-28">
        <div className="wrap grid gap-10 lg:grid-cols-2 lg:gap-16">
          <Reveal>
            <h2 className="font-mono text-[0.6875rem] font-medium uppercase tracking-[0.22em] text-ink-faint">
              What we typically find
            </h2>
            <ul className="mt-6 space-y-4">
              {industry.pains.map((p) => (
                <li key={p} className="flex items-start gap-3 border-b border-hairline pb-4 text-ink-soft">
                  <Minus className="mt-1.5 h-3.5 w-3.5 shrink-0 text-red-400" aria-hidden="true" />
                  <span className="text-[1.0625rem]">{p}</span>
                </li>
              ))}
            </ul>
          </Reveal>
          <Reveal delay={0.1}>
            <h2 className="font-mono text-[0.6875rem] font-medium uppercase tracking-[0.22em] text-signal-ink">
              What we leave behind
            </h2>
            <p className="mt-6 flex items-start gap-3 text-[1.0625rem] leading-[1.75] text-ink">
              <CheckCircle2 className="mt-1.5 h-5 w-5 shrink-0 text-signal-ink" aria-hidden="true" />
              {industry.outcome}
            </p>
            <p className="mt-6 leading-relaxed text-ink-soft">
              Sector specialists pair with the core transformation team on every engagement, so you
              never trade domain knowledge for delivery capability.
            </p>
          </Reveal>
        </div>
      </Section>

      {proof.length > 0 && (
        <Section tone="mist" className="py-20 sm:py-28">
          <div className="wrap">
            <h2 className="font-display text-display-sm font-semibold text-ink-strong">
              Work in this sector
            </h2>
            <div className="mt-10 grid gap-6 md:grid-cols-2">
              {proof.map((cs, i) => (
                <Reveal key={cs.slug} delay={i * 0.07}>
                  <Link
                    href={`/case-studies/${cs.slug}`}
                    className="group block h-full cursor-pointer border border-hairline bg-canvas p-8 shadow-card transition-all duration-300 hover:-translate-y-1 hover:shadow-card-hover"
                  >
                    <p className="font-mono text-[0.6875rem] uppercase tracking-[0.2em] text-accent-ink">
                      {cs.client}
                    </p>
                    <h3 className="mt-3 font-display text-xl font-semibold text-ink-strong">
                      {cs.title}
                    </h3>
                    <p className="mt-4 font-display text-2xl font-semibold tabular-nums text-ink-strong">
                      {cs.results[0].value}
                    </p>
                    <p className="text-sm text-ink-faint">{cs.results[0].label}</p>
                  </Link>
                </Reveal>
              ))}
            </div>
          </div>
        </Section>
      )}

      <Section tone="white" className="py-20 sm:py-28">
        <div className="wrap grid gap-12 lg:grid-cols-[1fr_1fr] lg:gap-16">
          <div>
            <h2 className="font-mono text-[0.6875rem] font-medium uppercase tracking-[0.22em] text-ink-faint">
              Services that apply here
            </h2>
            <ul className="mt-6 grid gap-2.5 sm:grid-cols-2 lg:grid-cols-1">
              {shown.map((s) => (
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
              Other sectors
            </h2>
            <ul className="mt-6 grid gap-2.5 sm:grid-cols-2">
              {others.map((o) => (
                <li key={o.slug}>
                  <Link
                    href={`/industries/${o.slug}`}
                    className="group flex cursor-pointer items-center gap-3 rounded-md px-3 py-2 -mx-3 text-[0.9375rem] font-medium text-ink transition-colors hover:bg-canvas-alt hover:text-ink-strong"
                  >
                    <o.icon className="h-4 w-4 shrink-0 text-accent" aria-hidden="true" />
                    {o.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </Section>

      <Section tone="navy" className="overflow-hidden py-24 sm:py-28">
        <div className="absolute inset-0 bg-cta-radial" aria-hidden="true" />
        <div className="wrap relative flex flex-col items-start justify-between gap-8 lg:flex-row lg:items-center">
          <Reveal>
            <h2 className="max-w-2xl font-display text-display-md font-semibold text-white">
              Talk to someone who has run operations in {industry.title.toLowerCase()}.
            </h2>
          </Reveal>
          <Reveal delay={0.1}>
            <ButtonLink href="/contact" size="lg">
              Start a conversation
            </ButtonLink>
          </Reveal>
        </div>
      </Section>
    </>
  );
}
