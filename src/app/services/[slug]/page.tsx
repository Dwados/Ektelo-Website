import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowRight } from "lucide-react";
import { ButtonLink } from "@/components/Button";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { Reveal } from "@/components/Reveal";
import { Section, SectionHeading } from "@/components/Section";
import { process, serviceGroups, services, site } from "@/lib/data";
import { solutions } from "@/lib/solutions";

type Params = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return services.map((s) => ({ slug: s.slug }));
}

export async function generateMetadata({ params }: Params): Promise<Metadata> {
  const { slug } = await params;
  const service = services.find((s) => s.slug === slug);
  if (!service) return {};
  return {
    title: service.title,
    description: service.summary,
    alternates: { canonical: `/services/${service.slug}` },
    openGraph: {
      title: `${service.title} · Ektelo`,
      description: service.summary,
      url: `${site.url}/services/${service.slug}`,
    },
  };
}

export default async function ServiceDetailPage({ params }: Params) {
  const { slug } = await params;
  const service = services.find((s) => s.slug === slug);
  if (!service) notFound();

  const group = serviceGroups.find((g) => g.key === service.group);
  const siblings = services.filter((s) => s.group === service.group && s.slug !== service.slug);
  const applied = solutions.filter((s) => s.services.includes(service.title));

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: service.title,
    description: service.summary,
    serviceType: service.title,
    provider: { "@type": "ProfessionalService", name: site.name, url: site.url },
    areaServed: "Worldwide",
  };

  return (
    <>
      <section className="relative overflow-hidden bg-surface pb-20 pt-32 text-white sm:pb-24 sm:pt-36">
        <div className="grid-lines-dark absolute inset-0" aria-hidden="true" />
        <div className="absolute inset-0 bg-hero-radial" aria-hidden="true" />
        <div className="wrap relative">
          <Breadcrumbs
            trail={[
              { label: "Services", href: "/services" },
              { label: service.title, href: `/services/${service.slug}` },
            ]}
          />
          <Reveal className="mt-8">
            <div className="flex items-center gap-4">
              <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-md bg-accent text-white">
                <service.icon className="h-6 w-6" aria-hidden="true" />
              </div>
              <p className="eyebrow text-signal">{group?.title ?? service.group}</p>
            </div>
            <h1 className="mt-6 max-w-3xl font-display text-display-lg font-semibold text-white">
              {service.title}
            </h1>
            <p className="mt-6 max-w-2xl text-lg leading-relaxed text-on-dark">{service.summary}</p>
          </Reveal>
        </div>
      </section>

      {/* Detail + method */}
      <Section tone="white" className="py-20 sm:py-28">
        <div className="wrap grid gap-14 lg:grid-cols-[1.4fr_1fr] lg:gap-20">
          <div>
            <SectionHeading eyebrow="What this means in practice" title="How we run it" />
            <Reveal delay={0.08} className="mt-8 max-w-[65ch] space-y-5">
              <p className="text-[1.0625rem] leading-[1.75] text-ink-soft">{service.detail}</p>
              <p className="text-[1.0625rem] leading-[1.75] text-ink-soft">
                Work under this service follows the same six-step method as every Ektelo engagement.
                Nothing is built before the operation has been measured, and nothing is signed off
                until the agreed numbers move.
              </p>
            </Reveal>

            <Reveal delay={0.14} className="mt-10">
              <ol className="grid gap-4 sm:grid-cols-2">
                {process.map((step) => (
                  <li key={step.n} className="flex gap-4 border border-hairline p-5">
                    <span className="font-mono text-xs tracking-[0.25em] text-accent-ink">{step.n}</span>
                    <div>
                      <h3 className="font-semibold text-ink-strong">{step.title}</h3>
                      <p className="mt-1 text-sm leading-relaxed text-ink-soft">{step.description}</p>
                    </div>
                  </li>
                ))}
              </ol>
            </Reveal>
          </div>

          <aside className="space-y-10">
            {applied.length > 0 && (
              <Reveal delay={0.1}>
                <h2 className="font-mono text-[0.6875rem] font-medium uppercase tracking-[0.22em] text-ink-faint">
                  Solutions this powers
                </h2>
                <ul className="mt-5 space-y-4">
                  {applied.map((sol) => (
                    <li key={sol.slug}>
                      <Link
                        href={`/solutions/${sol.slug}`}
                        className="group block cursor-pointer border border-hairline p-5 transition-colors hover:border-accent/40"
                      >
                        <p className="font-display font-semibold leading-snug text-ink-strong">
                          {sol.title}
                        </p>
                        <p className="mt-2 text-sm leading-relaxed text-ink-soft">{sol.oneLiner}</p>
                      </Link>
                    </li>
                  ))}
                </ul>
              </Reveal>
            )}

            {siblings.length > 0 && (
              <Reveal delay={0.16}>
                <h2 className="font-mono text-[0.6875rem] font-medium uppercase tracking-[0.22em] text-ink-faint">
                  Deployed alongside
                </h2>
                <ul className="mt-5 space-y-2.5">
                  {siblings.map((s) => (
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
              </Reveal>
            )}
          </aside>
        </div>
      </Section>

      <Section tone="navy" className="overflow-hidden py-24 sm:py-28">
        <div className="absolute inset-0 bg-cta-radial" aria-hidden="true" />
        <div className="wrap relative flex flex-col items-start justify-between gap-8 lg:flex-row lg:items-center">
          <Reveal>
            <h2 className="max-w-2xl font-display text-display-md font-semibold text-white">
              Put a number on what {service.title.toLowerCase()} would be worth here.
            </h2>
            <p className="mt-4 max-w-xl text-on-dark">
              A two-week diagnostic measures the baseline before anyone proposes a solution.
            </p>
          </Reveal>
          <Reveal delay={0.1}>
            <ButtonLink href="/contact" size="lg">
              Book a diagnostic
            </ButtonLink>
          </Reveal>
        </div>
      </Section>

      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
    </>
  );
}
