import type { Metadata } from "next";
import { ButtonLink } from "@/components/Button";
import { PageHero } from "@/components/PageHero";
import { Reveal } from "@/components/Reveal";
import { Section, SectionHeading } from "@/components/Section";
import { serviceGroups, services } from "@/lib/data";

export const metadata: Metadata = {
  title: "Services",
  description:
    "Fourteen disciplines, one accountable team: operational transformation, AI strategy, process automation, workflow digitization, enterprise software, data & analytics, and more.",
};

export default function ServicesPage() {
  return (
    <>
      <PageHero
        eyebrow="Services"
        title="Everything required to transform an operation — under one roof"
        lead="Advisory firms hand you a plan. Software firms hand you a system. Ektelio delivers the transformed operation: diagnosed, redesigned, digitized, automated, and tuned to target."
      >
        <Reveal delay={0.15} className="mt-10 flex flex-wrap gap-3">
          {serviceGroups.map((g, i) => (
            <a
              key={g.key}
              href={`#group-${g.key.toLowerCase()}`}
              className="cursor-pointer rounded-full border border-white/15 px-5 py-2 font-mono text-xs uppercase tracking-[0.18em] text-on-dark transition-colors hover:border-signal/60 hover:text-white"
            >
              {String(i + 1).padStart(2, "0")} · {g.title}
            </a>
          ))}
        </Reveal>
      </PageHero>

      {serviceGroups.map((group, gi) => {
        const groupServices = services.filter((s) => s.group === group.key);
        const mist = gi % 2 === 1;
        return (
          <Section
            key={group.key}
            tone={mist ? "mist" : "white"}
            id={`group-${group.key.toLowerCase()}`}
            className="scroll-mt-20 py-20 sm:py-28"
          >
            <div className="wrap">
              <SectionHeading
                eyebrow={`Motion ${String(gi + 1).padStart(2, "0")}`}
                title={group.title}
                lead={group.description}
              />
              <div className="mt-12 grid gap-6 lg:grid-cols-2">
                {groupServices.map((s, i) => (
                  <Reveal
                    as="div"
                    key={s.slug}
                    delay={i * 0.06}
                    className="h-full"
                  >
                    <article
                      id={s.slug}
                      className={`group h-full scroll-mt-28 border border-hairline p-8 transition-all duration-300 hover:-translate-y-1 hover:border-accent/40 hover:shadow-card-hover ${
                        mist ? "bg-canvas shadow-card" : "bg-canvas"
                      }`}
                    >
                      <div className="flex items-start justify-between gap-4">
                        <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-md bg-surface text-white transition-colors duration-300 group-hover:bg-accent">
                          <s.icon className="h-5 w-5" aria-hidden="true" />
                        </div>
                        <span className="font-mono text-[0.6875rem] uppercase tracking-[0.22em] text-ink-faint">
                          {group.key}
                        </span>
                      </div>
                      <h3 className="mt-5 font-display text-xl font-semibold text-ink-strong">
                        {s.title}
                      </h3>
                      <p className="mt-2 font-medium leading-relaxed text-ink">{s.summary}</p>
                      <p className="mt-3 text-[0.9375rem] leading-relaxed text-ink-soft">
                        {s.detail}
                      </p>
                    </article>
                  </Reveal>
                ))}
              </div>
            </div>
          </Section>
        );
      })}

      {/* CTA */}
      <Section tone="navy" className="overflow-hidden py-24 sm:py-28">
        <div className="absolute inset-0 bg-cta-radial" aria-hidden="true" />
        <div className="wrap relative flex flex-col items-start justify-between gap-8 lg:flex-row lg:items-center">
          <Reveal>
            <h2 className="max-w-2xl font-display text-display-md font-semibold text-white">
              Not sure which service you need? That’s what the diagnostic is for.
            </h2>
            <p className="mt-4 max-w-xl text-on-dark">
              Two to four weeks, evidence-based, and it pays for itself in what it finds.
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
