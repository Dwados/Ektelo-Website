import type { Metadata } from "next";
import { Check } from "lucide-react";
import { ButtonLink } from "@/components/Button";
import { PageHero } from "@/components/PageHero";
import { Reveal } from "@/components/Reveal";
import { Section, SectionHeading } from "@/components/Section";
import { careers } from "@/lib/content";
import { site } from "@/lib/data";

export const metadata: Metadata = {
  title: "Careers",
  description:
    "Ektelo is small and senior by design. Operators, engineers, and analysts who go inside governments and enterprises and rebuild how the work flows.",
  alternates: { canonical: "/careers" },
};

export default function CareersPage() {
  return (
    <>
      <PageHero
        eyebrow="Careers"
        title="We hire people who have run something real."
        lead={careers.intro}
      />

      <Section tone="white" className="py-20 sm:py-28">
        <div className="wrap grid gap-14 lg:grid-cols-2 lg:gap-20">
          <Reveal>
            <h2 className="font-mono text-[0.6875rem] font-medium uppercase tracking-[0.22em] text-ink-faint">
              Who we hire
            </h2>
            <ul className="mt-6 space-y-4">
              {careers.whoWeHire.map((t) => (
                <li key={t} className="flex items-start gap-3 border-b border-hairline pb-4">
                  <Check className="mt-1.5 h-4 w-4 shrink-0 text-signal-ink" aria-hidden="true" />
                  <span className="leading-relaxed text-ink-soft">{t}</span>
                </li>
              ))}
            </ul>
          </Reveal>
          <Reveal delay={0.1}>
            <h2 className="font-mono text-[0.6875rem] font-medium uppercase tracking-[0.22em] text-ink-faint">
              How we work
            </h2>
            <ul className="mt-6 space-y-4">
              {careers.howWeWork.map((t) => (
                <li key={t} className="flex items-start gap-3 border-b border-hairline pb-4">
                  <Check className="mt-1.5 h-4 w-4 shrink-0 text-accent-ink" aria-hidden="true" />
                  <span className="leading-relaxed text-ink-soft">{t}</span>
                </li>
              ))}
            </ul>
          </Reveal>
        </div>
      </Section>

      <Section tone="mist" className="py-20 sm:py-28">
        <div className="wrap">
          <SectionHeading
            eyebrow="Open roles"
            title="Where we are hiring"
            lead="Described by what the person actually does, not by a ladder title. If none of these are an exact fit but the work is, write anyway."
          />
          <div className="mt-12 grid gap-6 md:grid-cols-2">
            {careers.roles.map((role, i) => (
              <Reveal key={role.title} delay={i * 0.06} className="h-full">
                <article className="flex h-full flex-col border border-hairline bg-canvas p-8 shadow-card">
                  <p className="font-mono text-[0.6875rem] uppercase tracking-[0.22em] text-accent-ink">
                    {role.discipline}
                  </p>
                  <h3 className="mt-3 font-display text-xl font-semibold text-ink-strong">
                    {role.title}
                  </h3>
                  <p className="mt-3 flex-1 leading-relaxed text-ink-soft">{role.summary}</p>
                  <a
                    href={`mailto:${site.emails[0]}?subject=${encodeURIComponent(`Application — ${role.title}`)}`}
                    className="mt-6 inline-flex cursor-pointer items-center gap-1.5 text-sm font-semibold text-accent-ink hover:underline"
                  >
                    Apply for this role
                  </a>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </Section>

      <Section tone="navy" className="overflow-hidden py-24 sm:py-28">
        <div className="absolute inset-0 bg-cta-radial" aria-hidden="true" />
        <div className="wrap relative flex flex-col items-start justify-between gap-8 lg:flex-row lg:items-center">
          <Reveal>
            <h2 className="max-w-2xl font-display text-display-md font-semibold text-white">
              Tell us what you have run, and what you changed about it.
            </h2>
            <p className="mt-4 max-w-xl text-on-dark">
              No cover letter. One page on an operation you improved, with the numbers, is worth more
              than a CV.
            </p>
          </Reveal>
          <Reveal delay={0.1}>
            <ButtonLink href={`mailto:${site.emails[0]}?subject=${encodeURIComponent("Working at Ektelo")}`} size="lg">
              Write to us
            </ButtonLink>
          </Reveal>
        </div>
      </Section>
    </>
  );
}
