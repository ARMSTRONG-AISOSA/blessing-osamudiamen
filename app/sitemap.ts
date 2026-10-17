import type { MetadataRoute } from "next";
import { projects, site } from "@/data/profile";
import { abs } from "@/lib/seo";
import { contentUpdated, publicFileUpdated } from "@/lib/content-dates";

/**
 * sitemap.xml: every indexable page, each case study, and the downloadable PDFs.
 * `lastModified` is automatic: the last git commit that changed the content (data/profile.ts)
 * or the PDF itself. Not the build time, so search engines only recrawl real changes.
 */
export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = contentUpdated();
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
    { url: abs(site.resumeUrl), lastModified: publicFileUpdated(site.resumeUrl), changeFrequency: "yearly", priority: 0.6 },
    ...projects.map((p) => ({ url: abs(p.pdf), lastModified: publicFileUpdated(p.pdf), changeFrequency: "yearly" as const, priority: 0.5 })),
  ];
}
