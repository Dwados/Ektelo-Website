import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, ArrowUpRight } from "lucide-react";
import { ButtonLink, TextLink } from "@/components/Button";
import { HeroVisual } from "@/components/HeroVisual";
import { ProcessFlow } from "@/components/ProcessFlow";
import { Reveal } from "@/components/Reveal";
import { Section, SectionHeading } from "@/components/Section";
import { Stat } from "@/components/Stat";
import {
  capabilities,
  caseStudies,
  heroStats,
  industries,
  sectorsServed,
  serviceGroups,
  services,
  whyEktelo,
} from "@/lib/data";

export const metadata: Metadata = {
  title: "Ektelo — Operational Transformation Company",
  description:
    "We digitize operations, not just software. Ektelo finds hidden inefficiencies in governments and enterprises, then eliminates them with AI, automation, engineering, and process redesign.",
};

export default function HomePage() {
  const featured = caseStudies[0];

  return (
    <>
      {/* ───────────── 1 · Hero ───────────── */}
      <Section tone="navy" className="overflow-hidden">
        <div className="grid-lines-dark absolute inset-0" aria-hidden="true" />
        <div className="absolute inset-0 bg-hero-radial" aria-hidden="true" />
        <div className="wrap relative grid items-center gap-14 pb-20 pt-36 sm:pt-40 lg:grid-cols-[1.05fr_0.95fr] lg:gap-10 lg:pb-28 lg:pt-48">
          <div>
            <Reveal>
              <p className="eyebrow text-signal">Operational Transformation</p>
            </Reveal>
            <Reveal delay={0.08}>
              <h1 className="mt-6 font-display text-display-xl font-semibold text-white">
                We digitize operations,{" "}
                <span className="text-on-dark-soft">not just software.</span>
              </h1>
            </Reveal>
            <Reveal delay={0.16}>
              <p className="mt-7 max-w-xl text-lg leading-relaxed text-on-dark">
                Ektelo finds the hidden inefficiencies inside governments, corporations, and
                enterprises — then eliminates them with AI, automation, engineering, and process
                redesign. The product is better operations, measured in numbers your board can read.
              </p>
            </Reveal>
            <Reveal delay={0.24} className="mt-10 flex flex-wrap items-center gap-4">
              <ButtonLink href="/contact" size="lg">
                Start a conversation
              </ButtonLink>
              <ButtonLink href="/case-studies" size="lg" variant="outline-dark" arrow={false}>
                See the results
              </ButtonLink>
            </Reveal>
            <Reveal delay={0.3}>
              <p className="mt-8 font-mono text-xs uppercase tracking-[0.2em] text-on-dark-faint">
                Ektelo — <span className="text-signal">“to execute”</span> · discovery to delivery,
                one accountable team
              </p>
            </Reveal>
          </div>
          <Reveal delay={0.2} className="mx-auto w-full max-w-[560px] lg:mx-0">
            <HeroVisual />
          </Reveal>
        </div>

        {/* Stat bar */}
        <div className="relative border-t border-white/[0.08] bg-surface-deep/70 backdrop-blur-sm">
          <div className="wrap grid grid-cols-2 gap-x-6 gap-y-10 py-12 lg:grid-cols-4">
            {heroStats.map((s, i) => (
              <Reveal key={s.label} delay={i * 0.06}>
                <Stat {...s} tone="dark" />
              </Reveal>
            ))}
          </div>
        </div>

        {/* 2 · Trust strip — sectors served */}
        <div className="relative overflow-hidden border-t border-white/[0.06] bg-surface-deep py-6">
          <p className="sr-only">Sectors we serve: {sectorsServed.join(", ")}</p>
          <div
            aria-hidden="true"
            className="flex w-max animate-marquee gap-14 whitespace-nowrap [--tw-translate-x:0] motion-reduce:w-full motion-reduce:flex-wrap motion-reduce:justify-center motion-reduce:animate-none"
          >
            {[...sectorsServed, ...sectorsServed].map((s, i) => (
              <span
                key={`${s}-${i}`}
                className="font-mono text-xs uppercase tracking-[0.3em] text-on-dark-faint"
              >
                {s}
              </span>
            ))}
          </div>
        </div>
      </Section>

      {/* ───────────── 3 · Mission ───────────── */}
      <Section tone="white" className="py-24 sm:py-32">
        <div className="wrap grid gap-12 lg:grid-cols-[1fr_1.2fr] lg:gap-20">
          <SectionHeading
            eyebrow="Our Mission"
            title={
              <>
                Software is everywhere. <span className="text-accent-ink">Execution isn’t.</span>
              </>
            }
          />
          <Reveal delay={0.1} className="space-y-6 text-lg leading-relaxed text-ink-soft lg:pt-14">
            <p>
              Most organizations don’t lack technology — they lack operations that work. Requests
              crawl through approval chains. Data is re-keyed five times. Nobody can say where a file,
              a shipment, or a shilling actually is.
            </p>
            <p>
              Ektelo exists to close the gap between what organizations intend and what they execute.
              We embed with your teams, measure how work really flows, and rebuild the operation —
              process, systems, and cadence — until the numbers move.
            </p>
            <p className="border-l-2 border-signal pl-5 font-medium text-ink-strong">
              We transform how organizations work. Not how their brochures read.
            </p>
          </Reveal>
        </div>
      </Section>

      {/* ───────────── 4 · Our approach ───────────── */}
      <Section tone="mist" className="py-24 sm:py-32">
        <div className="wrap">
          <SectionHeading
            eyebrow="Our Approach"
            title="Operations first. Technology second. Results always."
            lead="Three disciplines separate transformations that stick from software projects that stall."
          />
          <div className="mt-14 grid gap-6 md:grid-cols-3">
            {[
              {
                n: "A",
                title: "Diagnose reality",
                body: "We don’t start from the org chart — we start from the floor. Every engagement opens with a measured baseline: where hours go, where money leaks, where work waits.",
              },
              {
                n: "B",
                title: "Redesign the flow",
                body: "Broken processes get redesigned before they get digitized. Automating chaos just produces faster chaos — so we engineer the operating model first.",
              },
              {
                n: "C",
                title: "Execute to numbers",
                body: "Targets are agreed in writing: cycle time, cost per transaction, error rate. We build, deploy, and tune until the operation hits them — and your team can keep it there.",
              },
            ].map((item, i) => (
              <Reveal key={item.n} delay={i * 0.08} className="group h-full">
                <div className="flex h-full flex-col border border-hairline bg-canvas p-8 shadow-card transition-all duration-300 hover:-translate-y-1 hover:shadow-card-hover">
                  <span className="font-mono text-xs tracking-[0.25em] text-accent-ink">
                    PRINCIPLE {item.n}
                  </span>
                  <h3 className="mt-4 font-display text-xl font-semibold text-ink-strong">{item.title}</h3>
                  <p className="mt-3 leading-relaxed text-ink-soft">{item.body}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </Section>

      {/* ───────────── 5 · Services overview ───────────── */}
      <Section tone="white" className="py-24 sm:py-32">
        <div className="wrap">
          <div className="flex flex-wrap items-end justify-between gap-6">
            <SectionHeading
              eyebrow="What We Do"
              title="One team, from diagnosis to running system"
              lead="Fourteen disciplines, four motions — deployed together so nothing is lost between the strategy deck and the go-live."
            />
            <Reveal delay={0.15}>
              <ButtonLink href="/services" variant="outline-light">
                All services
              </ButtonLink>
            </Reveal>
          </div>

          <div className="mt-14 grid gap-6 md:grid-cols-2">
            {serviceGroups.map((group, gi) => {
              const groupServices = services.filter((s) => s.group === group.key);
              return (
                <Reveal key={group.key} delay={gi * 0.07}>
                  <div className="group h-full border border-hairline p-8 transition-colors duration-300 hover:border-accent/40">
                    <div className="flex items-center justify-between">
                      <span className="font-mono text-xs uppercase tracking-[0.25em] text-accent-ink">
                        {String(gi + 1).padStart(2, "0")}
                      </span>
                      <span className="h-px flex-1 mx-4 bg-hairline" aria-hidden="true" />
                      <span className="font-mono text-xs uppercase tracking-[0.2em] text-ink-faint">
                        {groupServices.length} services
                      </span>
                    </div>
                    <h3 className="mt-5 font-display text-2xl font-semibold text-ink-strong">
                      {group.title}
                    </h3>
                    <p className="mt-2.5 leading-relaxed text-ink-soft">{group.description}</p>
                    <ul className="mt-6 grid gap-2.5">
                      {groupServices.map((s) => (
                        <li key={s.slug}>
                          <Link
                            href={`/services#${s.slug}`}
                            className="group/link flex cursor-pointer items-center gap-3 rounded-md px-3 py-2 -mx-3 text-[0.9375rem] font-medium text-ink transition-colors hover:bg-canvas-alt hover:text-ink-strong"
                          >
                            <s.icon className="h-4 w-4 shrink-0 text-accent" aria-hidden="true" />
                            {s.title}
                            <ArrowUpRight
                              className="ml-auto h-3.5 w-3.5 text-ink-faint opacity-0 transition-opacity group-hover/link:opacity-100"
                              aria-hidden="true"
                            />
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </div>
                </Reveal>
              );
            })}
          </div>
        </div>
      </Section>

      {/* ───────────── 6 · Industries ───────────── */}
      <Section tone="mist" className="py-24 sm:py-32">
        <div className="wrap">
          <div className="flex flex-wrap items-end justify-between gap-6">
            <SectionHeading
              eyebrow="Industries"
              title="Where we operate"
              lead="Different sectors, same physics: work queues, handoffs, leakage. We speak the language of each."
            />
            <Reveal delay={0.15}>
              <ButtonLink href="/industries" variant="outline-light">
                All industries
              </ButtonLink>
            </Reveal>
          </div>
          <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {industries.slice(0, 6).map((ind, i) => (
              <Reveal key={ind.slug} delay={i * 0.06} className="h-full">
                <Link
                  href={`/industries#${ind.slug}`}
                  className="group flex h-full cursor-pointer flex-col border border-hairline bg-canvas p-7 shadow-card transition-all duration-300 hover:-translate-y-1 hover:border-accent/40 hover:shadow-card-hover"
                >
                  <div className="flex h-11 w-11 items-center justify-center rounded-md bg-surface text-white transition-colors duration-300 group-hover:bg-accent">
                    <ind.icon className="h-5 w-5" aria-hidden="true" />
                  </div>
                  <h3 className="mt-5 font-display text-lg font-semibold text-ink-strong">{ind.title}</h3>
                  <p className="mt-2 flex-1 text-[0.9375rem] leading-relaxed text-ink-soft">
                    {ind.summary}
                  </p>
                  <span className="mt-5 inline-flex items-center gap-1.5 text-sm font-semibold text-accent-ink">
                    Explore
                    <ArrowRight
                      className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-1"
                      aria-hidden="true"
                    />
                  </span>
                </Link>
              </Reveal>
            ))}
          </div>
        </div>
      </Section>

      {/* ───────────── 7 · Why Ektelo ───────────── */}
      <Section tone="white" className="py-24 sm:py-32">
        <div className="wrap grid gap-14 lg:grid-cols-[0.9fr_1.1fr] lg:gap-20">
          <div>
            <SectionHeading
              eyebrow="Why Ektelo"
              title="Consultancies advise. Vendors build. We do both — and stay accountable for the outcome."
              lead="The market is full of strategy without delivery and delivery without strategy. Ektelo was built to be the missing third thing: an execution partner."
            />
            <Reveal delay={0.15} className="mt-9">
              <ButtonLink href="/about">How we work</ButtonLink>
            </Reveal>
          </div>
          <div className="grid gap-x-8 gap-y-10 sm:grid-cols-2">
            {whyEktelo.map((f, i) => (
              <Reveal key={f.title} delay={i * 0.07}>
                <div className="group">
                  <div className="flex h-11 w-11 items-center justify-center rounded-md border border-hairline bg-canvas-alt text-ink-strong transition-colors duration-300 group-hover:border-accent/40 group-hover:bg-accent group-hover:text-white">
                    <f.icon className="h-5 w-5" aria-hidden="true" />
                  </div>
                  <h3 className="mt-4 font-display text-lg font-semibold text-ink-strong">{f.title}</h3>
                  <p className="mt-2 text-[0.9375rem] leading-relaxed text-ink-soft">
                    {f.description}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </Section>

      {/* ───────────── 8 · Process ───────────── */}
      <Section tone="navy" className="py-24 sm:py-32">
        <div className="grid-lines-dark absolute inset-0" aria-hidden="true" />
        <div className="wrap relative">
          <SectionHeading
            tone="dark"
            eyebrow="The Ektelo Method"
            title="Six steps. One accountable line from insight to running operation."
            lead="A disciplined sequence refined across governments and enterprises — each step gated by evidence, not opinion."
          />
          <ProcessFlow />
        </div>
      </Section>

      {/* ───────────── 9 · Technology capabilities ───────────── */}
      <Section tone="navy" className="border-t border-white/[0.07] bg-surface-deep py-24 sm:py-32">
        <div className="wrap">
          <SectionHeading
            tone="dark"
            eyebrow="Capabilities"
            title="An engineering bench behind every recommendation"
            lead="Strategy that ships. Our delivery teams cover the full stack of modern operational technology."
          />
          <div className="mt-14 grid gap-px overflow-hidden border border-white/10 bg-white/10 sm:grid-cols-2 lg:grid-cols-4">
            {capabilities.map((cap, i) => (
              <Reveal key={cap.title} delay={i * 0.04} className="h-full">
                <div className="group h-full bg-surface-deep p-7 transition-colors duration-300 hover:bg-surface">
                  <span className="font-mono text-[0.6875rem] tracking-[0.25em] text-signal">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <h3 className="mt-3 font-display text-base font-semibold text-white">
                    {cap.title}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-on-dark-soft">{cap.note}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </Section>

      {/* ───────────── 10 · Featured result ───────────── */}
      <Section tone="white" className="py-24 sm:py-32">
        <div className="wrap">
          <SectionHeading
            eyebrow="Proof"
            title="Results our clients can put in an annual report"
          />
          <Reveal delay={0.1} className="mt-12">
            <Link
              href="/case-studies"
              className="group block cursor-pointer border border-hairline shadow-card transition-all duration-300 hover:-translate-y-1 hover:shadow-card-hover"
            >
              <div className="grid lg:grid-cols-[1.2fr_1fr]">
                <div className="p-8 sm:p-12">
                  <p className="font-mono text-xs uppercase tracking-[0.25em] text-accent-ink">
                    {featured.sector} · {featured.client}
                  </p>
                  <h3 className="mt-4 font-display text-display-sm font-semibold text-ink-strong">
                    {featured.title}
                  </h3>
                  <p className="mt-4 max-w-xl leading-relaxed text-ink-soft">{featured.challenge}</p>
                  <span className="mt-8 inline-flex items-center gap-1.5 text-sm font-semibold text-accent-ink">
                    Read the full case study
                    <ArrowRight
                      className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-1"
                      aria-hidden="true"
                    />
                  </span>
                </div>
                <div className="grid content-center gap-8 border-t border-hairline bg-canvas-alt p-8 sm:p-12 lg:border-l lg:border-t-0">
                  {featured.results.map((r) => (
                    <div key={r.label}>
                      <p className="font-display text-3xl font-semibold tabular-nums text-ink-strong">
                        {r.value}
                      </p>
                      <p className="mt-1 text-sm text-ink-faint">{r.label}</p>
                    </div>
                  ))}
                </div>
              </div>
            </Link>
          </Reveal>
        </div>
      </Section>

      {/* ───────────── 11 · CTA ───────────── */}
      <Section tone="navy" className="overflow-hidden py-28 sm:py-36">
        <div className="absolute inset-0 bg-cta-radial" aria-hidden="true" />
        <div className="grid-lines-dark absolute inset-0 opacity-60" aria-hidden="true" />
        <div className="wrap relative text-center">
          <Reveal>
            <p className="eyebrow justify-center text-signal">Engage Ektelo</p>
            <h2 className="mx-auto mt-6 max-w-3xl font-display text-display-lg font-semibold text-white">
              Somewhere in your organization, a process is quietly costing you millions.
            </h2>
            <p className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-on-dark">
              A two-week diagnostic will find it — and put a number on it. No obligation beyond the
              conversation.
            </p>
          </Reveal>
          <Reveal delay={0.12} className="mt-10 flex flex-wrap items-center justify-center gap-4">
            <ButtonLink href="/contact" size="lg">
              Book a diagnostic
            </ButtonLink>
            <ButtonLink href="/services" size="lg" variant="outline-dark" arrow={false}>
              Explore services
            </ButtonLink>
          </Reveal>
        </div>
      </Section>
    </>
  );
}
