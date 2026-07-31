import type { MetadataRoute } from "next";
import { essays } from "@/lib/content";
import { caseStudies, industries, insights, services, site } from "@/lib/data";

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();

  const entry = (
    path: string,
    priority: number,
    changeFrequency: MetadataRoute.Sitemap[number]["changeFrequency"]
  ) => ({ url: `${site.url}${path}`, lastModified: now, changeFrequency, priority });

  return [
    entry("", 1, "monthly"),
    entry("/about", 0.8, "monthly"),
    entry("/services", 0.9, "monthly"),
    entry("/industries", 0.9, "monthly"),
    entry("/case-studies", 0.9, "monthly"),
    entry("/insights", 0.8, "weekly"),
    entry("/contact", 0.8, "monthly"),
    entry("/careers", 0.6, "monthly"),

    ...services.map((s) => entry(`/services/${s.slug}`, 0.7, "monthly" as const)),
    ...industries.map((i) => entry(`/industries/${i.slug}`, 0.7, "monthly" as const)),
    ...caseStudies.map((c) => entry(`/case-studies/${c.slug}`, 0.7, "monthly" as const)),
    ...insights
      .filter((i) => essays[i.slug])
      .map((i) => entry(`/insights/${i.slug}`, 0.6, "monthly" as const)),

    entry("/privacy", 0.3, "yearly"),
    entry("/terms", 0.3, "yearly"),
    entry("/accessibility", 0.3, "yearly"),
    entry("/security", 0.5, "yearly"),
  ];
}
