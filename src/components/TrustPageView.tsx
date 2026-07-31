import { notFound } from "next/navigation";
import { Check } from "lucide-react";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { Reveal } from "@/components/Reveal";
import { Section } from "@/components/Section";
import { trustPages } from "@/lib/content";
import { site } from "@/lib/data";

/** Shared renderer for the privacy, terms, accessibility and security pages. */
export function TrustPageView({ pageKey }: { pageKey: string }) {
  const page = trustPages[pageKey];
  if (!page) notFound();

  return (
    <>
      <section className="relative overflow-hidden bg-surface pb-16 pt-32 text-white sm:pb-20 sm:pt-36">
        <div className="grid-lines-dark absolute inset-0" aria-hidden="true" />
        <div className="wrap relative">
          <Breadcrumbs trail={[{ label: page.title, href: `/${pageKey}` }]} />
          <Reveal className="mt-8">
            <h1 className="max-w-3xl font-display text-display-lg font-semibold text-white">
              {page.title}
            </h1>
            <p className="mt-6 max-w-2xl text-lg leading-relaxed text-on-dark">{page.intro}</p>
          </Reveal>
        </div>
      </section>

      <Section tone="white" className="py-16 sm:py-24">
        <div className="wrap grid gap-12 lg:grid-cols-[220px_minmax(0,1fr)] lg:gap-16">
          {/* On-page contents */}
          <nav aria-label="On this page" className="lg:sticky lg:top-28 lg:self-start">
            <p className="font-mono text-[0.6875rem] font-medium uppercase tracking-[0.22em] text-ink-faint">
              On this page
            </p>
            <ol className="mt-4 space-y-2">
              {page.sections.map((s, i) => (
                <li key={s.heading}>
                  <a
                    href={`#s-${i}`}
                    className="cursor-pointer text-sm leading-snug text-ink-soft transition-colors hover:text-accent-ink"
                  >
                    {s.heading}
                  </a>
                </li>
              ))}
            </ol>
          </nav>

          <div className="max-w-[70ch]">
            {page.sections.map((s, i) => (
              <section key={s.heading} id={`s-${i}`} className="scroll-mt-28 border-t border-hairline pt-8 first:border-t-0 first:pt-0 [&+section]:mt-12">
                <h2 className="font-display text-xl font-semibold text-ink-strong sm:text-2xl">
                  {s.heading}
                </h2>
                {s.blocks.map((b, j) =>
                  b.type === "ul" ? (
                    <ul key={j} className="mt-5 space-y-3">
                      {b.text
                        .split("\n")
                        .map((t) => t.trim())
                        .filter(Boolean)
                        .map((item) => (
                          <li key={item} className="flex items-start gap-3 leading-relaxed text-ink-soft">
                            <Check className="mt-1.5 h-4 w-4 shrink-0 text-signal-ink" aria-hidden="true" />
                            <span>{item}</span>
                          </li>
                        ))}
                    </ul>
                  ) : (
                    <p key={j} className="mt-5 leading-[1.75] text-ink-soft">
                      {b.text}
                    </p>
                  )
                )}
              </section>
            ))}

            <p className="mt-14 border-t border-hairline pt-8 text-sm leading-relaxed text-ink-faint">
              Questions about this page? Write to{" "}
              <a
                href={`mailto:${site.email}`}
                className="cursor-pointer font-semibold text-accent-ink hover:underline"
              >
                {site.email}
              </a>{" "}
              or call {site.phones[0]}.
            </p>
          </div>
        </div>
      </Section>
    </>
  );
}
