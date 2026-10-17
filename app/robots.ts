import type { MetadataRoute } from "next";
import { site } from "@/data/profile";

export default function robots(): MetadataRoute.Robots {
  return {
    // Nothing is blocked: crawlers need CSS, JS and fonts to render pages as users see them
    rules: [{ userAgent: "*", allow: "/" }],
    sitemap: `${site.url}/sitemap.xml`,
    host: site.url,
  };
}
