import { Reveal } from "@/components/Reveal";
import { faq } from "@/lib/content";

/**
 * Native <details> accordion — keyboard accessible and open-by-default for
 * printing and for search engines, with matching FAQPage structured data.
 */
export function Faq() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faq.map((item) => ({
      "@type": "Question",
      name: item.q,
      acceptedAnswer: { "@type": "Answer", text: item.a },
    })),
  };

  return (
    <>
      <div className="divide-y divide-hairline border-y border-hairline">
        {faq.map((item, i) => (
          <Reveal key={item.q} delay={Math.min(i * 0.04, 0.2)}>
            <details className="group">
              <summary className="flex cursor-pointer list-none items-start justify-between gap-6 py-5 text-left font-display text-lg font-semibold text-ink-strong transition-colors hover:text-accent-ink [&::-webkit-details-marker]:hidden">
                <span>{item.q}</span>
                <span
                  aria-hidden="true"
                  className="relative mt-2 h-3 w-3 shrink-0 text-accent-ink"
                >
                  <span className="absolute inset-x-0 top-1/2 h-0.5 -translate-y-1/2 bg-current" />
                  <span className="absolute inset-y-0 left-1/2 w-0.5 -translate-x-1/2 bg-current transition-transform duration-200 group-open:scale-y-0" />
                </span>
              </summary>
              <p className="pb-6 pr-10 leading-[1.75] text-ink-soft">{item.a}</p>
            </details>
          </Reveal>
        ))}
      </div>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
    </>
  );
}
