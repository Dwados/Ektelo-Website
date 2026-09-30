import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowRight } from "lucide-react";
import { ButtonLink } from "@/components/Button";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { Prose } from "@/components/Prose";
import { Reveal } from "@/components/Reveal";
import { Section } from "@/components/Section";
import { essays } from "@/lib/content";
import { insights, site } from "@/lib/data";

type Params = { params: Promise<{ slug: string }> };

const formatDate = (iso: string) =>
  new Date(`${iso}T00:00:00Z`).toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
    timeZone: "UTC",
  });

export function generateStaticParams() {
  return insights.filter((i) => essays[i.slug]).map((i) => ({ slug: i.slug }));
}

export async function generateMetadata({ params }: Params): Promise<Metadata> {
  const { slug } = await params;
  const post = insights.find((i) => i.slug === slug);
  const essay = essays[slug];
  if (!post || !essay) return {};
  return {
    title: post.title,
    description: essay.deck,
    alternates: { canonical: `/insights/${post.slug}` },
    openGraph: {
      type: "article",
      title: `${post.title} · Ektelo`,
      description: essay.deck,
      url: `${site.url}/insights/${post.slug}`,
      publishedTime: post.date,
    },
  };
}

export default async function InsightPage({ params }: Params) {
  const { slug } = await params;
  const post = insights.find((i) => i.slug === slug);
  const essay = essays[slug];
  if (!post || !essay) notFound();

  const more = insights.filter((i) => i.slug !== slug && essays[i.slug]).slice(0, 3);

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: post.title,
    description: essay.deck,
    datePublished: post.date,
    articleSection: post.category,
    author: { "@type": "Organization", name: site.name, url: site.url },
    publisher: { "@type": "Organization", name: site.name, url: site.url },
    mainEntityOfPage: `${site.url}/insights/${post.slug}`,
  };

  return (
    <>
      <section className="relative overflow-hidden bg-surface pb-16 pt-32 text-white sm:pb-20 sm:pt-36">
        <div className="grid-lines-dark absolute inset-0" aria-hidden="true" />
        <div className="absolute inset-0 bg-hero-radial" aria-hidden="true" />
        <div className="wrap relative">
          <Breadcrumbs
            trail={[
              { label: "Insights", href: "/insights" },
              { label: post.title, href: `/insights/${post.slug}` },
            ]}
          />
          <Reveal className="mt-8">
            <div className="flex flex-wrap items-center gap-x-4 gap-y-2 font-mono text-xs uppercase tracking-[0.2em] text-on-dark-faint">
              <span className="text-signal">{post.category}</span>
              <span aria-hidden="true">·</span>
              <time dateTime={post.date}>{formatDate(post.date)}</time>
              <span aria-hidden="true">·</span>
              <span>{post.readTime} read</span>
            </div>
            <h1 className="mt-6 max-w-4xl font-display text-display-lg font-semibold text-white">
              {post.title}
            </h1>
            <p className="mt-6 max-w-2xl text-lg leading-relaxed text-on-dark">{essay.deck}</p>
          </Reveal>
        </div>
      </section>

      <Section tone="white" className="py-16 sm:py-24">
        <div className="wrap grid gap-14 lg:grid-cols-[minmax(0,1fr)_260px] lg:gap-20">
          <article>
            <Prose blocks={essay.body} />

            <div className="mt-14 border-t border-hairline pt-8">
              <p className="text-sm leading-relaxed text-ink-faint">
                Written by the Ektelo operations team. Figures in this piece are drawn from
                engagements and anonymised; they are illustrative of patterns we see, not claims
                about a named client.
              </p>
            </div>
          </article>

          <aside className="space-y-10 lg:sticky lg:top-28 lg:self-start">
            <figure className="border-l-2 border-signal-ink pl-5">
              <blockquote className="font-display text-lg font-medium leading-relaxed text-ink-strong">
                {essay.pullQuote}
              </blockquote>
            </figure>

            <div className="border border-hairline bg-canvas-alt p-6">
              <p className="font-mono text-[0.6875rem] font-medium uppercase tracking-[0.22em] text-ink-faint">
                Apply this
              </p>
              <p className="mt-3 text-[0.9375rem] leading-relaxed text-ink-soft">
                A two-week diagnostic measures these numbers inside your own operation and puts a
                cost against each one.
              </p>
              <ButtonLink href="/contact" className="mt-5" size="md">
                Book a diagnostic
              </ButtonLink>
            </div>
          </aside>
        </div>
      </Section>

      {more.length > 0 && (
        <Section tone="mist" className="py-16 sm:py-24">
          <div className="wrap">
            <h2 className="font-display text-display-sm font-semibold text-ink-strong">Keep reading</h2>
            <div className="mt-10 grid gap-6 md:grid-cols-3">
              {more.map((p, i) => (
                <Reveal key={p.slug} delay={i * 0.06} className="h-full">
                  <Link
                    href={`/insights/${p.slug}`}
                    className="group flex h-full cursor-pointer flex-col border border-hairline bg-canvas p-7 transition-all duration-300 hover:-translate-y-1 hover:border-accent/40 hover:shadow-card-hover"
                  >
                    <p className="font-mono text-[0.6875rem] uppercase tracking-[0.18em] text-accent-ink">
                      {p.category}
                    </p>
                    <h3 className="mt-3 font-display text-lg font-semibold leading-snug text-ink-strong">
                      {p.title}
                    </h3>
                    <p className="mt-3 flex-1 text-[0.9375rem] leading-relaxed text-ink-soft">
                      {p.excerpt}
                    </p>
                    <span className="mt-5 inline-flex items-center gap-1.5 text-sm font-semibold text-accent-ink">
                      Read
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
      )}

      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
    </>
  );
}
