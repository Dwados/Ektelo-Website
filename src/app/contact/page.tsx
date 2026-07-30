import type { Metadata } from "next";
import { Clock4, FileSearch, Mail, MapPin, Phone, ShieldCheck } from "lucide-react";
import { ContactForm } from "@/components/ContactForm";
import { PageHero } from "@/components/PageHero";
import { Reveal } from "@/components/Reveal";
import { Section } from "@/components/Section";
import { site } from "@/lib/data";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Start a conversation with Ektelio. Tell us what should run better — we respond within one business day and sign NDAs before any discovery work.",
};

const expectations = [
  {
    icon: Clock4,
    title: "Response within one business day",
    body: "A senior person replies — not a ticketing system.",
  },
  {
    icon: FileSearch,
    title: "A working session, not a sales call",
    body: "We come with questions about your operation and leave you with at least one useful observation, free.",
  },
  {
    icon: ShieldCheck,
    title: "Confidentiality by default",
    body: "NDAs signed before discovery. Your data never trains anything, ever.",
  },
];

export default function ContactPage() {
  return (
    <>
      <PageHero
        eyebrow="Contact"
        title="Tell us what should run better."
        lead="Two sentences about your operation is enough to start. We'll bring the questions — and, within weeks, the numbers."
      />

      <Section tone="white" className="py-20 sm:py-28">
        <div className="wrap grid gap-14 lg:grid-cols-[1.2fr_0.8fr] lg:gap-20">
          <Reveal>
            <ContactForm />
          </Reveal>

          <div className="space-y-10">
            <Reveal delay={0.1}>
              <h2 className="font-mono text-[0.6875rem] font-medium uppercase tracking-[0.22em] text-ink-faint">
                What to expect
              </h2>
              <ul className="mt-6 space-y-6">
                {expectations.map((e) => (
                  <li key={e.title} className="flex gap-4">
                    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-md bg-surface text-white">
                      <e.icon className="h-[18px] w-[18px]" aria-hidden="true" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-ink-strong">{e.title}</h3>
                      <p className="mt-1 text-[0.9375rem] leading-relaxed text-ink-soft">{e.body}</p>
                    </div>
                  </li>
                ))}
              </ul>
            </Reveal>

            <Reveal delay={0.18}>
              <div className="border border-hairline bg-canvas-alt p-7">
                <h2 className="font-mono text-[0.6875rem] font-medium uppercase tracking-[0.22em] text-ink-faint">
                  Direct lines
                </h2>
                <ul className="mt-5 space-y-4 text-[0.9375rem]">
                  <li className="flex items-center gap-3">
                    <Mail className="h-4 w-4 shrink-0 text-accent-ink" aria-hidden="true" />
                    <a href={`mailto:${site.email}`} className="cursor-pointer font-medium text-ink-strong hover:text-accent-ink">
                      {site.email}
                    </a>
                  </li>
                  <li className="flex items-center gap-3">
                    <Phone className="h-4 w-4 shrink-0 text-accent-ink" aria-hidden="true" />
                    <a
                      href={`tel:${site.phone.replace(/\s/g, "")}`}
                      className="cursor-pointer font-medium text-ink-strong hover:text-accent-ink"
                    >
                      {site.phone}
                    </a>
                  </li>
                  <li className="flex items-start gap-3">
                    <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-accent-ink" aria-hidden="true" />
                    <span className="text-ink-soft">{site.address}</span>
                  </li>
                </ul>
              </div>
            </Reveal>

            <Reveal delay={0.24}>
              <blockquote className="border-l-2 border-signal pl-5">
                <p className="leading-relaxed text-ink-soft">
                  “The best time to fix an operation was before it started leaking. The second-best
                  time is this quarter.”
                </p>
              </blockquote>
            </Reveal>
          </div>
        </div>
      </Section>
    </>
  );
}
