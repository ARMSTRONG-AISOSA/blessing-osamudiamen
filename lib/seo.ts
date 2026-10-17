import type { Metadata } from "next";
import { certifications, competencies, education, experience, projects, seo, site, tools, type Project } from "@/data/profile";

/* ---------- helpers ---------- */

export const abs = (path = "") => `${site.url}${path}`;

/** Trim to a search-snippet length at a word boundary. */
export function snippet(text: string, max = 158) {
  if (text.length <= max) return text;
  return `${text.slice(0, text.lastIndexOf(" ", max - 1)).replace(/[,;:—–-]+$/, "")}…`;
}

const ogImage = { url: site.portrait, width: 449, height: 560, alt: `${site.name}, ${site.jobTitle}` };

/* ---------- page metadata ---------- */

/** Per-page metadata: absolute title, canonical URL, keywords, OpenGraph and Twitter tags. */
export function pageMetadata(opts: { title: string; description: string; path: string; keywords?: string[]; type?: "profile" | "website" | "article" }): Metadata {
  const url = abs(opts.path);
  const type = opts.type ?? "profile";
  return {
    title: { absolute: opts.title },
    description: opts.description,
    keywords: opts.keywords ?? seo.keywords,
    alternates: { canonical: url },
    openGraph: {
      title: opts.title,
      description: opts.description,
      url,
      siteName: `${site.name} — ${site.jobTitle}`,
      locale: "en_US",
      images: [ogImage],
      ...(type === "profile"
        ? { type: "profile", firstName: seo.givenName, lastName: seo.familyName }
        : type === "article"
          ? { type: "article", authors: [abs("/about")], section: "Case studies" }
          : { type: "website" }),
    },
    twitter: { card: "summary", title: opts.title, description: opts.description, images: [site.portrait] },
  };
}

export function caseStudyDescription(p: Project) {
  return snippet(`${p.keyResult}. ${p.takeaway}`);
}

/* ---------- JSON-LD (schema.org) ---------- */

export const ids = {
  website: abs("/#website"),
  person: abs("/#person"),
  portrait: abs("/#portrait"),
};

const current = experience.find((e) => e.end === "Present");

const knowsAbout = Array.from(
  new Set([
    ...competencies.flatMap((c) => [c.title, ...c.items]),
    "Equity Research",
    "FP&A",
    ...tools.map((t) => t.name),
  ]),
);

/** WebSite + Person: rendered once in the root layout; pages reference them by @id. */
export function siteGraph() {
  return [
    {
      "@type": "WebSite",
      "@id": ids.website,
      url: site.url,
      name: `${site.name} — ${site.jobTitle}`,
      alternateName: [site.name, "Blessing Osamudiamen Portfolio"],
      description: site.description,
      inLanguage: "en",
      publisher: { "@id": ids.person },
      author: { "@id": ids.person },
    },
    {
      "@type": "Person",
      "@id": ids.person,
      name: site.name,
      givenName: seo.givenName,
      familyName: seo.familyName,
      honorificSuffix: seo.honorificSuffix,
      alternateName: seo.alternateNames,
      jobTitle: [site.jobTitle, "Chartered Accountant", "Financial Analyst"],
      description: site.description,
      url: site.url,
      mainEntityOfPage: abs("/about"),
      image: { "@type": "ImageObject", "@id": ids.portrait, url: abs(site.portrait), width: 449, height: 560, caption: `${site.name}, ${site.jobTitle}` },
      email: `mailto:${site.email}`,
      telephone: site.phone,
      contactPoint: [
        { "@type": "ContactPoint", contactType: "professional enquiries", email: site.email, telephone: site.phone, availableLanguage: "English" },
        { "@type": "ContactPoint", contactType: "WhatsApp", url: site.whatsappHref },
      ],
      sameAs: [site.linkedin],
      ...(current && { worksFor: { "@type": "Organization", name: current.company } }),
      hasOccupation: [
        {
          "@type": "Occupation",
          name: "Chartered Accountant",
          occupationalCategory: "13-2011.00 Accountants and Auditors",
          skills: competencies.find((c) => c.icon === "shield")?.items.join(", "),
        },
        {
          "@type": "Occupation",
          name: "Financial Analyst",
          occupationalCategory: "13-2051.00 Financial and Investment Analysts",
          skills: [...(competencies.find((c) => c.icon === "chart")?.items ?? []), ...(competencies.find((c) => c.icon === "database")?.items ?? [])].join(", "),
        },
      ],
      alumniOf: { "@type": "CollegeOrUniversity", name: education.institution, url: seo.orgUrls[education.institution] },
      knowsAbout,
      hasCredential: [
        {
          "@type": "EducationalOccupationalCredential",
          name: education.degree,
          credentialCategory: "degree",
          recognizedBy: { "@type": "CollegeOrUniversity", name: education.institution, url: seo.orgUrls[education.institution] },
        },
        ...certifications.map((c) => ({
          "@type": "EducationalOccupationalCredential",
          name: c.name,
          credentialCategory: "professional certification",
          recognizedBy: { "@type": "Organization", name: c.issuer, ...(seo.orgUrls[c.issuer] && { url: seo.orgUrls[c.issuer] }) },
          dateCreated: c.date,
        })),
      ],
    },
  ];
}

type Crumb = { name: string; path: string };

export function breadcrumbLd(path: string, crumbs: Crumb[]) {
  return {
    "@type": "BreadcrumbList",
    "@id": abs(`${path}#breadcrumb`),
    itemListElement: crumbs.map((c, i) => ({ "@type": "ListItem", position: i + 1, name: c.name, item: abs(c.path) })),
  };
}

/** A WebPage node (+ breadcrumb) for one route. */
export function webPageLd(opts: { path: string; type: "WebPage" | "ProfilePage" | "CollectionPage"; name: string; description: string; crumbs?: Crumb[]; extra?: Record<string, unknown> }) {
  const url = abs(opts.path);
  return [
    {
      "@type": opts.type,
      "@id": `${url}#webpage`,
      url,
      name: opts.name,
      description: opts.description,
      inLanguage: "en",
      isPartOf: { "@id": ids.website },
      about: { "@id": ids.person },
      primaryImageOfPage: { "@id": ids.portrait },
      dateModified: seo.updated,
      ...(opts.crumbs && { breadcrumb: { "@id": `${url}#breadcrumb` } }),
      ...opts.extra,
    },
    ...(opts.crumbs ? [breadcrumbLd(opts.path, opts.crumbs)] : []),
  ];
}

/** The case-study list on /projects. */
export function caseStudyListLd() {
  return {
    "@type": "ItemList",
    "@id": abs("/projects#case-studies"),
    name: "Case studies",
    numberOfItems: projects.length,
    itemListElement: projects.map((p, i) => ({ "@type": "ListItem", position: i + 1, url: abs(`/projects/${p.slug}`), name: p.title })),
  };
}

/** One case-study page: WebPage + Article + breadcrumb. */
export function caseStudyLd(p: Project) {
  const path = `/projects/${p.slug}`;
  const url = abs(path);
  const description = caseStudyDescription(p);
  return [
    ...webPageLd({
      path,
      type: "WebPage",
      name: p.title,
      description,
      crumbs: [
        { name: "Home", path: "/" },
        { name: "Projects", path: "/projects" },
        { name: p.title, path },
      ],
      extra: { mainEntity: { "@id": `${url}#article` } },
    }),
    {
      "@type": "Article",
      "@id": `${url}#article`,
      headline: p.title,
      alternativeHeadline: p.keyResult,
      description,
      abstract: p.takeaway,
      url,
      mainEntityOfPage: { "@id": `${url}#webpage` },
      image: { "@id": ids.portrait },
      author: { "@id": ids.person },
      publisher: { "@id": ids.person },
      dateModified: seo.updated,
      articleSection: p.category,
      genre: "Case study",
      keywords: [...p.keywords, ...p.tools, p.category].join(", "),
      about: [p.category, ...p.tools.slice(0, 4)].map((name) => ({ "@type": "Thing", name })),
      isPartOf: { "@id": ids.website },
      inLanguage: "en",
      associatedMedia: { "@type": "MediaObject", contentUrl: abs(p.pdf), encodingFormat: "application/pdf", name: `${p.title} (PDF)` },
      isBasedOn: p.drive,
    },
  ];
}

/** Wrap nodes into one @graph document. */
export function graph(...nodes: unknown[]) {
  return { "@context": "https://schema.org", "@graph": nodes.flat() };
}
