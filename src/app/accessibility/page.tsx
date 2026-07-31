import type { Metadata } from "next";
import { TrustPageView } from "@/components/TrustPageView";

export const metadata: Metadata = {
  title: "Accessibility Statement",
  description:
    "Ektelio builds this site to WCAG 2.1 Level AA. What has been tested, the known limitations, and how to report an accessibility barrier.",
  alternates: { canonical: "/accessibility" },
};

export default function AccessibilityPage() {
  return <TrustPageView pageKey="accessibility" />;
}
