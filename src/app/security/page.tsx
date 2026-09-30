import type { Metadata } from "next";
import { TrustPageView } from "@/components/TrustPageView";

export const metadata: Metadata = {
  title: "Security & Data Protection",
  description:
    "The security and data protection controls Ektelo commits to in every engagement — written for procurement, risk, and data protection teams.",
  alternates: { canonical: "/security" },
};

export default function SecurityPage() {
  return <TrustPageView pageKey="security" />;
}
