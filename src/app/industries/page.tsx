import type { Metadata } from "next";
import { CheckCircle2, Minus } from "lucide-react";
import { ButtonLink } from "@/components/Button";
import { PageHero } from "@/components/PageHero";
import { Reveal } from "@/components/Reveal";
import { Section, SectionHeading } from "@/components/Section";
import { industries } from "@/lib/data";

export const metadata: Metadata = {
  title: "Industries",
  description:
    "Ektelo transforms operations across government, financial services, healthcare, energy, manufacturing, logistics, telecom, retail, and aviation.",
};

export default function IndustriesPage() {
  return (
    <>
      <PageHero
        eyebrow="Industries"
        title="Every sector has its own language. Inefficiency speaks all of them."
        lead="Queues, handoffs, leakage, and blind spots behave the same everywhere — but fixing them demands sector fluency. These are the arenas where we've done the work."
      />

      <Section tone="white" className="py-20 sm:py-28">
        <div className="wrap">
          <SectionHeading
            eyebrow="Sector Coverage"
            title="Nine sectors, one operating discipline"
            lead="Each engagement pairs sector specialists with our core transformation team, so you never trade domain knowledge for execution capability."
          />

          <div className="mt-14 space-y-6">
            {industries.map((ind, i) => (
              <Reveal key={ind.slug} delay={Math.min(i * 0.04, 0.2)}>
                <article
                  id={ind.slug}
                  className="group grid scroll-mt-28 gap-8 border border-hairline p-8 transition-colors duration-300 hover:border-accent/40 sm:p-10 lg:grid-cols-[1.1fr_1fr_1fr]"
                >
                  <div>
                    <div className="flex items-center gap-4">
                      <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-md bg-surface text-white transition-colors duration-300 group-hover:bg-accent">
                        <ind.icon className="h-5 w-5" aria-hidden="true" />
                      </div>
                      <h3 className="font-display text-xl font-semibold text-ink-strong sm:text-2xl">
                        {ind.title}
                      </h3>
                    </div>
                    <p className="mt-4 leading-relaxed text-ink-soft">{ind.summary}</p>
                  </div>

                  <div>
                    <p className="font-mono text-[0.6875rem] font-medium uppercase tracking-[0.22em] text-ink-faint">
                      What we typically find
                    </p>
                    <ul className="mt-4 space-y-2.5">
                      {ind.pains.map((p) => (
                        <li key={p} className="flex items-start gap-2.5 text-[0.9375rem] text-ink-soft">
                          <Minus className="mt-1 h-3.5 w-3.5 shrink-0 text-red-400" aria-hidden="true" />
                          {p}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="border-t border-hairline pt-6 lg:border-l lg:border-t-0 lg:pl-8 lg:pt-0">
                    <p className="font-mono text-[0.6875rem] font-medium uppercase tracking-[0.22em] text-signal-ink">
                      What we leave behind
                    </p>
                    <p className="mt-4 flex items-start gap-2.5 leading-relaxed text-ink">
                      <CheckCircle2 className="mt-1 h-4 w-4 shrink-0 text-signal-ink" aria-hidden="true" />
                      {ind.outcome}
                    </p>
                  </div>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </Section>

      {/* CTA */}
      <Section tone="navy" className="overflow-hidden py-24 sm:py-28">
        <div className="absolute inset-0 bg-cta-radial" aria-hidden="true" />
        <div className="wrap relative flex flex-col items-start justify-between gap-8 lg:flex-row lg:items-center">
          <Reveal>
            <h2 className="max-w-2xl font-display text-display-md font-semibold text-white">
              Don’t see your sector? The method transfers. The results do too.
            </h2>
          </Reveal>
          <Reveal delay={0.1}>
            <ButtonLink href="/contact" size="lg">
              Talk to a sector lead
            </ButtonLink>
          </Reveal>
        </div>
      </Section>
    </>
  );
}
