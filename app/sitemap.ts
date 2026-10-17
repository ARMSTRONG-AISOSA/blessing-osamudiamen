import type { MetadataRoute } from "next";
import { projects, seo, site } from "@/data/profile";
import { abs } from "@/lib/seo";

/**
 * sitemap.xml: every indexable page, each case study, and the downloadable PDFs.
 * `lastModified` is the real content date (seo.updated), not the build time,
 * so search engines only recrawl when something actually changed.
 */
export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date(seo.updated);
  const portrait = [abs(site.portrait)];

  return [
    { url: abs("/"), lastModified, changeFrequency: "monthly", priority: 1, images: portrait },
    { url: abs("/about"), lastModified, changeFrequency: "monthly", priority: 0.9, images: portrait },
    { url: abs("/projects"), lastModified, changeFrequency: "monthly", priority: 0.9 },
    ...projects.map((p) => ({
      url: abs(`/projects/${p.slug}`),
      lastModified,
      changeFrequency: "yearly" as const,
      priority: p.featured ? 0.85 : 0.8,
    })),
    { url: abs(site.resumeUrl), lastModified, changeFrequency: "yearly", priority: 0.6 },
    ...projects.map((p) => ({ url: abs(p.pdf), lastModified, changeFrequency: "yearly" as const, priority: 0.5 })),
  ];
}
