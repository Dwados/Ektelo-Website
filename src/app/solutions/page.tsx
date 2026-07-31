import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { ButtonLink } from "@/components/Button";
import { PageHero } from "@/components/PageHero";
import { Reveal } from "@/components/Reveal";
import { Section, SectionHeading } from "@/components/Section";
import { iconForSolution, solutionSegments, solutions, solutionsIntro } from "@/lib/solutions";

export const metadata: Metadata = {
  title: "Operational Solutions",
  description:
    "What Ektelio delivers for governments, corporations, and small businesses — and the measures each engagement is baselined and held against.",
  alternates: { canonical: "/solutions" },
};

export default function SolutionsPage() {
  return (
    <>
      <PageHero
        eyebrow="Operational Solutions"
        title="What we fix, and what we agree to be measured on."
        lead={solutionsIntro}
      >
        <Reveal delay={0.15} className="mt-10 flex flex-wrap gap-3">
          {solutionSegments.map((s) => (
            <a
              key={s.key}
              href={`#${s.key}`}
              className="cursor-pointer rounded-full border border-white/15 px-5 py-2 font-mono text-xs uppercase tracking-[0.18em] text-on-dark transition-colors hover:border-signal/60 hover:text-white"
            >
              {s.title}
            </a>
          ))}
        </Reveal>
      </PageHero>

      {solutionSegments.map((segment, si) => {
        const list = solutions.filter((sol) => sol.segments.includes(segment.key));
        return (
          <Section
            key={segment.key}
            id={segment.key}
            tone={si % 2 === 1 ? "mist" : "white"}
            className="scroll-mt-20 py-20 sm:py-28"
          >
            <div className="wrap">
              <SectionHeading
                eyebrow={`Segment ${String(si + 1).padStart(2, "0")}`}
                title={segment.title}
                lead={segment.framing}
              />
              <Reveal delay={0.1} className="mt-6 max-w-3xl border-l-2 border-signal-ink pl-5">
                <p className="text-[0.9375rem] leading-relaxed text-ink-soft">{segment.buyerNote}</p>
              </Reveal>

              <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                {list.map((sol, i) => {
                  const Icon = iconForSolution(sol);
                  return (
                    <Reveal key={sol.slug} delay={Math.min(i * 0.05, 0.25)} className="h-full">
                      <Link
                        href={`/solutions/${sol.slug}`}
                        className="group flex h-full cursor-pointer flex-col border border-hairline bg-canvas p-7 shadow-card transition-all duration-300 hover:-translate-y-1 hover:border-accent/40 hover:shadow-card-hover"
                      >
                        <div className="flex h-11 w-11 items-center justify-center rounded-md bg-surface text-white transition-colors duration-300 group-hover:bg-accent">
                          <Icon className="h-5 w-5" aria-hidden="true" />
                        </div>
                        <h3 className="mt-5 font-display text-lg font-semibold leading-snug text-ink-strong">
                          {sol.title}
                        </h3>
                        <p className="mt-3 flex-1 text-[0.9375rem] leading-relaxed text-ink-soft">
                          {sol.oneLiner}
                        </p>
                        <span className="mt-5 inline-flex items-center gap-1.5 text-sm font-semibold text-accent-ink">
                          What we do
                          <ArrowRight
                            className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-1"
                            aria-hidden="true"
                          />
                        </span>
                      </Link>
                    </Reveal>
                  );
                })}
              </div>
            </div>
          </Section>
        );
      })}

      <Section tone="navy" className="overflow-hidden py-24 sm:py-28">
        <div className="absolute inset-0 bg-cta-radial" aria-hidden="true" />
        <div className="wrap relative flex flex-col items-start justify-between gap-8 lg:flex-row lg:items-center">
          <Reveal>
            <h2 className="max-w-2xl font-display text-display-md font-semibold text-white">
              Not sure which of these is your problem? That is what the diagnostic is for.
            </h2>
            <p className="mt-4 max-w-xl text-on-dark">
              Two to four weeks, fixed fee, ending in a measured baseline and a costed plan you are
              free to run with anyone.
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
