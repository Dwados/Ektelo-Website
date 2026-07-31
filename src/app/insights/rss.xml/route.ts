import { essays } from "@/lib/content";
import { insights, site } from "@/lib/data";

const escape = (s: string) =>
  s
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;");

export async function GET() {
  const items = insights
    .filter((post) => essays[post.slug])
    .map((post) => {
      const essay = essays[post.slug];
      return `    <item>
      <title>${escape(post.title)}</title>
      <link>${site.url}/insights/${post.slug}</link>
      <guid isPermaLink="true">${site.url}/insights/${post.slug}</guid>
      <category>${escape(post.category)}</category>
      <pubDate>${new Date(`${post.date}T09:00:00Z`).toUTCString()}</pubDate>
      <description>${escape(essay.deck)}</description>
    </item>`;
    })
    .join("\n");

  const xml = `<?xml version="1.0" encoding="UTF-8"?>
<rss version="2.0" xmlns:atom="http://www.w3.org/2005/Atom">
  <channel>
    <title>Ektelio — Insights</title>
    <link>${site.url}/insights</link>
    <description>Field notes on operational transformation, AI in operations, process engineering, and government modernization.</description>
    <language>en</language>
    <atom:link href="${site.url}/insights/rss.xml" rel="self" type="application/rss+xml" />
${items}
  </channel>
</rss>`;

  return new Response(xml, {
    headers: {
      "Content-Type": "application/rss+xml; charset=utf-8",
      "Cache-Control": "public, max-age=3600",
    },
  });
}
