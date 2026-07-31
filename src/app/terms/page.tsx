import type { Metadata } from "next";
import { TrustPageView } from "@/components/TrustPageView";

export const metadata: Metadata = {
  title: "Terms of Use",
  description:
    "The terms governing use of the ektelio.com website. Any engagement with Ektelio is governed by a separate signed agreement.",
  alternates: { canonical: "/terms" },
};

export default function TermsPage() {
  return <TrustPageView pageKey="terms" />;
}
