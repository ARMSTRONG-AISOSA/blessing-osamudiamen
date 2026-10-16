import type { Metadata } from "next";
import { certifications, site } from "@/data/profile";

/** Build per-page metadata with OpenGraph + Twitter + canonical. */
export function pageMetadata(opts: { title: string; description?: string; path: string }): Metadata {
  const description = opts.description ?? site.description;
  const url = `${site.url}${opts.path}`;
  return {
    title: opts.title,
    description,
    alternates: { canonical: url },
    openGraph: {
      title: `${opts.title} | ${site.name}`,
      description,
      url,
      siteName: `${site.name} — ${site.jobTitle}`,
      type: "profile",
      images: [{ url: site.portrait, width: 449, height: 560, alt: `${site.name}, ${site.jobTitle}` }],
    },
    twitter: { card: "summary_large_image", title: `${opts.title} | ${site.name}`, description, images: [site.portrait] },
  };
}

/**
 * JSON-LD (schema.org Person) for a financial analyst profile.
 * Values are pulled from data/profile.ts.
 */
export function personJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": "Person",
    name: site.name,
    jobTitle: site.jobTitle,
    description: site.description,
    url: site.url,
    image: `${site.url}${site.portrait}`,
    email: `mailto:${site.email}`,
    alumniOf: { "@type": "CollegeOrUniversity", name: "University of Benin" },
    telephone: site.phone,
    knowsAbout: ["Financial Modeling", "DCF Valuation", "Financial Reporting", "Budgeting", "Equity Research", "Cash Flow Analysis", "Excel", "Tableau", "Power BI", "QuickBooks", "Zoho"],
    hasCredential: [
      { "@type": "EducationalOccupationalCredential", name: "BSc Accounting", credentialCategory: "degree" },
      ...certifications.map((c) => ({
        "@type": "EducationalOccupationalCredential",
        name: c.name,
        credentialCategory: "professional certification",
        recognizedBy: { "@type": "Organization", name: c.issuer },
        dateCreated: c.date,
      })),
    ],
    sameAs: [site.linkedin, site.whatsappHref],
  };
}
