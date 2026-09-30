import type { MetadataRoute } from "next";
import { resolveTheme } from "@/theme/palettes";
import { site } from "@/lib/data";

export default function manifest(): MetadataRoute.Manifest {
  const palette = resolveTheme(process.env.Ektelo_THEME);
  return {
    name: `${site.name} — Operational Transformation Company`,
    short_name: site.name,
    description: site.description,
    start_url: "/",
    display: "standalone",
    background_color: palette.colors.base,
    theme_color: palette.colors.base,
    icons: [
      { src: "/icon.svg", sizes: "any", type: "image/svg+xml" },
      { src: "/apple-icon.png", sizes: "180x180", type: "image/png" },
    ],
  };
}
