import Link from "next/link";
import { ChevronRight } from "lucide-react";
import { site } from "@/lib/data";

export type Crumb = { label: string; href?: string };

/**
 * Breadcrumb trail for pages three levels deep, with matching BreadcrumbList
 * structured data so search results show the hierarchy.
 */
export function Breadcrumbs({ trail }: { trail: Crumb[] }) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [{ label: "Home", href: "/" }, ...trail].map((c, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: c.label,
      ...(c.href ? { item: `${site.url}${c.href}` } : {}),
    })),
  };

  return (
    <>
      <nav aria-label="Breadcrumb">
        <ol className="flex flex-wrap items-center gap-x-2 gap-y-1 font-mono text-[0.6875rem] uppercase tracking-[0.18em] text-on-dark-faint">
          <li>
            <Link href="/" className="cursor-pointer transition-colors hover:text-on-dark-strong">
              Home
            </Link>
          </li>
          {trail.map((c, i) => (
            <li key={c.label} className="flex items-center gap-2">
              <ChevronRight className="h-3 w-3 opacity-60" aria-hidden="true" />
              {c.href && i < trail.length - 1 ? (
                <Link href={c.href} className="cursor-pointer transition-colors hover:text-on-dark-strong">
                  {c.label}
                </Link>
              ) : (
                <span aria-current="page" className="text-on-dark">
                  {c.label}
                </span>
              )}
            </li>
          ))}
        </ol>
      </nav>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
    </>
  );
}
