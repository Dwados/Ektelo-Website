import type { Metadata } from "next";
import { ButtonLink } from "@/components/Button";
import { PageHero } from "@/components/PageHero";
import { Reveal } from "@/components/Reveal";
import { Section, SectionHeading } from "@/components/Section";
import { caseStudies } from "@/lib/data";

export const metadata: Metadata = {
  title: "Case Studies",
  description:
    "Representative Ektelo engagements: measurable operational transformations across government, banking, energy, healthcare, logistics, and manufacturing.",
};

export default function CaseStudiesPage() {
  return (
    <>
      <PageHero
        eyebrow="Case Studies"
        title="The only slide that matters is the before-and-after"
        lead="Representative engagements, anonymized to protect client confidentiality. Every number below was independently verifiable in the client's own systems at handover."
      />

      <Section tone="white" className="py-20 sm:py-28">
        <div className="wrap space-y-8">
          {caseStudies.map((cs, i) => (
            <Reveal key={cs.slug} delay={Math.min(i * 0.05, 0.2)}>
              <article
                id={cs.slug}
                className="group grid scroll-mt-28 overflow-hidden border border-line-light shadow-card transition-all duration-300 hover:-translate-y-1 hover:shadow-card-hover lg:grid-cols-[1.25fr_1fr]"
              >
                <div className="p-8 sm:p-12">
                  <p className="font-mono text-xs uppercase tracking-[0.25em] text-blue-600">
                    {cs.sector} · {cs.client}
                  </p>
                  <h2 className="mt-4 font-display text-display-sm font-semibold text-navy">
                    {cs.title}
                  </h2>

                  <div className="mt-7 space-y-6">
                    <div>
                      <h3 className="font-mono text-[0.6875rem] font-medium uppercase tracking-[0.22em] text-ink-faint">
                        The situation
                      </h3>
                      <p className="mt-2.5 leading-relaxed text-ink-soft">{cs.challenge}</p>
                    </div>
                    <div>
                      <h3 className="font-mono text-[0.6875rem] font-medium uppercase tracking-[0.22em] text-ink-faint">
                        What Ektelo did
                      </h3>
                      <p className="mt-2.5 leading-relaxed text-ink-soft">{cs.approach}</p>
                    </div>
                  </div>

                  <ul className="mt-8 flex flex-wrap gap-2" aria-label="Services deployed">
                    {cs.services.map((s) => (
                      <li
                        key={s}
                        className="rounded-full border border-line-light bg-mist px-4 py-1.5 text-xs font-medium text-ink-soft"
                      >
                        {s}
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="grid content-center gap-9 border-t border-line-light bg-navy p-8 sm:p-12 lg:border-l lg:border-t-0">
                  <p className="font-mono text-[0.6875rem] font-medium uppercase tracking-[0.22em] text-emerald">
                    Verified outcomes
                  </p>
                  {cs.results.map((r) => (
                    <div key={r.label}>
                      <p className="font-display text-3xl font-semibold tabular-nums text-white">
                        {r.value}
                      </p>
                      <p className="mt-1.5 text-sm text-slate-400">{r.label}</p>
                    </div>
                  ))}
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </Section>

      {/* CTA */}
      <Section tone="navy" className="overflow-hidden py-24 sm:py-28">
        <div className="absolute inset-0 bg-cta-radial" aria-hidden="true" />
        <div className="wrap relative flex flex-col items-start justify-between gap-8 lg:flex-row lg:items-center">
          <Reveal>
            <h2 className="max-w-2xl font-display text-display-md font-semibold text-white">
              Your operation could be the next one on this page.
            </h2>
            <p className="mt-4 max-w-xl text-slate-300">
              Every engagement above began with a two-week diagnostic. Start yours.
            </p>
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
