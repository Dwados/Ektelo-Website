import Link from "next/link";
import { Mail, MapPin, Phone } from "lucide-react";
import { nav, site, services } from "@/lib/data";
import { Wordmark } from "@/components/LogoMark";

const footerServices = services.slice(0, 6);

export function Footer() {
  return (
    <footer className="border-t border-white/10 bg-surface-deep text-on-dark">
      <div className="wrap grid gap-12 py-16 md:grid-cols-2 lg:grid-cols-[1.6fr_1fr_1fr_1.2fr] lg:gap-8">
        {/* Brand */}
        <div className="max-w-sm">
          <Link href="/" aria-label="Ektelo — home" className="inline-block cursor-pointer">
            <Wordmark dark />
          </Link>
          <p className="mt-5 text-sm leading-relaxed text-on-dark-soft">
            An operational transformation company. We digitize operations, not just software —
            eliminating hidden inefficiencies across governments, corporations, and enterprises.
          </p>
          <p className="mt-6 font-mono text-[0.6875rem] uppercase tracking-[0.22em] text-on-dark-faint">
            ektelo · <span className="text-signal">“to execute”</span>
          </p>
        </div>

        {/* Company */}
        <nav aria-label="Company">
          <p className="font-mono text-[0.6875rem] font-medium uppercase tracking-[0.22em] text-on-dark-faint">
            Company
          </p>
          <ul className="mt-5 space-y-3 text-sm">
            {nav.map((item) => (
              <li key={item.href}>
                <Link href={item.href} className="cursor-pointer transition-colors hover:text-white">
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        {/* Services */}
        <nav aria-label="Services">
          <p className="font-mono text-[0.6875rem] font-medium uppercase tracking-[0.22em] text-on-dark-faint">
            Services
          </p>
          <ul className="mt-5 space-y-3 text-sm">
            {footerServices.map((s) => (
              <li key={s.slug}>
                <Link
                  href={`/services#${s.slug}`}
                  className="cursor-pointer transition-colors hover:text-white"
                >
                  {s.title}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        {/* Contact */}
        <div>
          <p className="font-mono text-[0.6875rem] font-medium uppercase tracking-[0.22em] text-on-dark-faint">
            Engage
          </p>
          <ul className="mt-5 space-y-4 text-sm">
            <li className="flex items-start gap-3">
              <Mail className="mt-0.5 h-4 w-4 shrink-0 text-signal" aria-hidden="true" />
              <a href={`mailto:${site.email}`} className="cursor-pointer transition-colors hover:text-white">
                {site.email}
              </a>
            </li>
            <li className="flex items-start gap-3">
              <Phone className="mt-0.5 h-4 w-4 shrink-0 text-signal" aria-hidden="true" />
              <a href={`tel:${site.phone.replace(/\s/g, "")}`} className="cursor-pointer transition-colors hover:text-white">
                {site.phone}
              </a>
            </li>
            <li className="flex items-start gap-3">
              <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-signal" aria-hidden="true" />
              <span className="text-on-dark-soft">{site.address}</span>
            </li>
          </ul>
        </div>
      </div>

      <div className="border-t border-white/[0.06]">
        <div className="wrap flex flex-col items-start justify-between gap-3 py-6 text-xs text-on-dark-faint sm:flex-row sm:items-center">
          <p>© {new Date().getFullYear()} Ektelo. All rights reserved.</p>
          <p className="font-mono uppercase tracking-[0.18em]">
            Better operations. Measurably.
          </p>
        </div>
      </div>
    </footer>
  );
}
