import type { MetadataRoute } from "next";
import { site } from "@/lib/data";

export default function sitemap(): MetadataRoute.Sitemap {
  const routes = ["", "/about", "/services", "/industries", "/case-studies", "/insights", "/contact"];
  return routes.map((route) => ({
    url: `${site.url}${route}`,
    lastModified: new Date(),
    changeFrequency: route === "/insights" ? "weekly" : "monthly",
    priority: route === "" ? 1 : 0.8,
  }));
}
