import type { Metadata } from "next";
import { CalendarCheck, Handshake, Ruler, Users } from "lucide-react";
import { ButtonLink } from "@/components/Button";
import { PageHero } from "@/components/PageHero";
import { Reveal } from "@/components/Reveal";
import { Section, SectionHeading } from "@/components/Section";
import { Stat } from "@/components/Stat";
import { heroStats } from "@/lib/data";

export const metadata: Metadata = {
  title: "About",
  description:
    "Ektelo means “to execute.” We are an operational transformation company: operators, engineers, and analysts who rebuild how governments and enterprises work.",
};

const values = [
  {
    title: "Evidence over opinion",
    body: "Every recommendation is backed by measurement from your own operation. If we can't quantify the problem, we don't ask you to fund the fix.",
  },
  {
    title: "Execution over theater",
    body: "No hundred-slide strategies that die in a drawer. Working systems, redesigned processes, trained teams — that's the deliverable.",
  },
  {
    title: "Transfer over dependency",
    body: "We succeed when you no longer need us. Capability transfer is designed into every engagement from day one.",
  },
  {
    title: "Candor over comfort",
    body: "If the problem is process, we won't sell you software. If the problem is leadership cadence, we'll say so — respectfully, with data.",
  },
];

const models = [
  {
    icon: Ruler,
    title: "Diagnostic",
    duration: "2–4 weeks",
    body: "A rapid, evidence-based scan of one operation. You get a quantified map of inefficiencies, a prioritized fix list, and a business case for each.",
  },
  {
    icon: CalendarCheck,
    title: "Transformation program",
    duration: "3–12 months",
    body: "Full-cycle redesign and delivery against agreed target metrics — process, systems, automation, and the operating cadence to sustain them.",
  },
  {
    icon: Users,
    title: "Embedded operations team",
    duration: "Ongoing",
    body: "Ektelo operators and engineers inside your organization, running the improvement backlog quarter after quarter as gains compound.",
  },
  {
    icon: Handshake,
    title: "Advisory retainer",
    duration: "Ongoing",
    body: "Senior counsel for executives steering their own transformation — governance, vendor decisions, and an experienced hand on the numbers.",
  },
];

export default function AboutPage() {
  return (
    <>
      <PageHero
        eyebrow="About Ektelo"
        title={
          <>
            Ektelo means <span className="text-emerald">“to execute.”</span> We named the company
            after the thing most organizations are missing.
          </>
        }
        lead="We are an operational transformation company — operators, engineers, and analysts who rebuild how governments, corporations, and enterprises actually work."
      />

      {/* Story */}
      <Section tone="white" className="py-24 sm:py-32">
        <div className="wrap grid gap-12 lg:grid-cols-[1fr_1.2fr] lg:gap-20">
          <SectionHeading
            eyebrow="Who We Are"
            title="Built for the gap between strategy and reality"
          />
          <Reveal delay={0.1} className="space-y-6 text-lg leading-relaxed text-ink-soft lg:pt-14">
            <p>
              Ektelo was founded on a pattern we kept seeing inside large organizations: brilliant
              strategies, expensive systems — and operations that still ran on paper, email, and
              heroic improvisation. The consultants left decks. The vendors left licenses. Nobody
              left behind a better operation.
            </p>
            <p>
              So we built the firm we wished existed: one team that diagnoses like a consultancy,
              engineers like a technology company, and stays accountable like an operator. We take
              responsibility for a number — cycle time, cost, leakage, throughput — and we don't
              consider the work done until that number moves.
            </p>
            <p>
              We are AI-native by design. Not because it's fashionable, but because the economics of
              operations changed: reading, matching, drafting, and monitoring can now be done by
              machines under human governance. Organizations that internalize this will out-execute
              those that don't. Our job is to put you in the first group.
            </p>
          </Reveal>
        </div>

        <div className="wrap mt-20 grid grid-cols-2 gap-x-6 gap-y-10 border-t border-line-light pt-14 lg:grid-cols-4">
          {heroStats.map((s, i) => (
            <Reveal key={s.label} delay={i * 0.06}>
              <Stat {...s} tone="light" />
            </Reveal>
          ))}
        </div>
      </Section>

      {/* Values */}
      <Section tone="mist" className="py-24 sm:py-32">
        <div className="wrap">
          <SectionHeading
            eyebrow="Operating Principles"
            title="How we hold ourselves accountable"
            lead="Four principles govern every Ektelo engagement — written into our statements of work, not just our website."
          />
          <div className="mt-14 grid gap-6 sm:grid-cols-2">
            {values.map((v, i) => (
              <Reveal key={v.title} delay={i * 0.07} className="h-full">
                <div className="h-full border border-line-light bg-white p-8 shadow-card">
                  <span className="font-mono text-xs tracking-[0.25em] text-blue-600">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <h3 className="mt-4 font-display text-xl font-semibold text-navy">{v.title}</h3>
                  <p className="mt-3 leading-relaxed text-ink-soft">{v.body}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </Section>

      {/* Engagement models */}
      <Section tone="white" className="py-24 sm:py-32">
        <div className="wrap">
          <SectionHeading
            eyebrow="Ways of Working"
            title="Four ways to engage us"
            lead="Start small and prove value, or commit to full transformation — every path opens with evidence."
          />
          <div className="mt-14 grid gap-6 md:grid-cols-2">
            {models.map((m, i) => (
              <Reveal key={m.title} delay={i * 0.07} className="h-full">
                <div className="group flex h-full gap-6 border border-line-light p-8 transition-colors duration-300 hover:border-blue/40">
                  <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-md bg-navy text-white transition-colors duration-300 group-hover:bg-blue">
                    <m.icon className="h-5 w-5" aria-hidden="true" />
                  </div>
                  <div>
                    <div className="flex flex-wrap items-baseline gap-x-4 gap-y-1">
                      <h3 className="font-display text-xl font-semibold text-navy">{m.title}</h3>
                      <span className="font-mono text-xs uppercase tracking-[0.2em] text-emerald-700">
                        {m.duration}
                      </span>
                    </div>
                    <p className="mt-2.5 leading-relaxed text-ink-soft">{m.body}</p>
                  </div>
                </div>
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
              Meet the team that measures itself the way you do.
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
