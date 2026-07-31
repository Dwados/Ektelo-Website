import type { Metadata, Viewport } from "next";
import { IBM_Plex_Mono, Inter, Space_Grotesk } from "next/font/google";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { site } from "@/lib/data";
import { resolveTheme, themeVars } from "@/theme/palettes";
import "./globals.css";

const palette = resolveTheme(process.env.EKTELIO_THEME);

const display = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-display",
  weight: ["500", "600", "700"],
  display: "swap",
});

const sans = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap",
});

const mono = IBM_Plex_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
  weight: ["400", "500", "600"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: {
    default: "Ektelio — Operational Transformation Company",
    template: "%s · Ektelio",
  },
  description: site.description,
  keywords: [
    "operational transformation",
    "business process automation",
    "government modernization",
    "AI strategy",
    "workflow digitization",
    "enterprise software",
    "data analytics",
    "process engineering",
  ],
  openGraph: {
    type: "website",
    siteName: site.name,
    title: "Ektelio — We digitize operations, not just software.",
    description: site.description,
    url: site.url,
  },
  twitter: {
    card: "summary_large_image",
    title: "Ektelio — Operational Transformation Company",
    description: site.description,
  },
  robots: { index: true, follow: true },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: palette.colors.base,
};

const orgJsonLd = {
  "@context": "https://schema.org",
  "@type": "ProfessionalService",
  name: site.name,
  url: site.url,
  email: site.email,
  telephone: site.phones,
  slogan: "We digitize operations, not just software.",
  description: site.description,
  areaServed: "Worldwide",
  knowsAbout: [
    "Operational Transformation",
    "AI Strategy and Implementation",
    "Business Process Automation",
    "Government Modernization",
    "Enterprise Software",
    "Data and Analytics",
  ],
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html
      lang="en"
      data-theme={palette.key}
      className={`${display.variable} ${sans.variable} ${mono.variable}`}
    >
      <head>
        <style dangerouslySetInnerHTML={{ __html: `:root{${themeVars(palette)}}` }} />
      </head>
      <body>
        <a
          href="#main"
          className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[100] focus:rounded-md focus:bg-accent focus:px-4 focus:py-2 focus:text-sm focus:font-semibold focus:text-white"
        >
          Skip to main content
        </a>
        <Header />
        <main id="main">{children}</main>
        <Footer />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(orgJsonLd) }}
        />
      </body>
    </html>
  );
}
