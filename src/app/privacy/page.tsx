import type { Metadata } from "next";
import { TrustPageView } from "@/components/TrustPageView";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description:
    "How ektelio.com handles personal data: what is collected, why, how long it is kept, and how to exercise your rights under GDPR and Uganda's Data Protection and Privacy Act.",
  alternates: { canonical: "/privacy" },
};

export default function PrivacyPage() {
  return <TrustPageView pageKey="privacy" />;
}
