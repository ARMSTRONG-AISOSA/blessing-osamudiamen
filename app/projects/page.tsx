import type { Metadata } from "next";
import SectionHeading from "@/components/SectionHeading";
import ProjectsExplorer from "@/components/projects/ProjectsExplorer";
import JsonLd from "@/components/JsonLd";
import { caseStudyListLd, graph, pageMetadata, webPageLd } from "@/lib/seo";
import { projects, seo } from "@/data/profile";

const page = seo.pages.projects;

export const metadata: Metadata = pageMetadata({
  ...page,
  path: "/projects",
  type: "website",
  keywords: [...new Set([...projects.flatMap((p) => p.keywords), "Financial modeling case studies", "Financial analyst portfolio", "Blessing Osamudiamen"])],
});

export default function ProjectsPage() {
  return (
    <section className="container-page pb-24 pt-14 md:pt-20">
      <JsonLd
        data={graph(
          webPageLd({
            path: "/projects",
            type: "CollectionPage",
            name: page.title,
            description: page.description,
            crumbs: [{ name: "Home", path: "/" }, { name: "Projects", path: "/projects" }],
            extra: { mainEntity: { "@id": caseStudyListLd()["@id"] } },
          }),
          caseStudyListLd(),
        )}
      />
      <SectionHeading as="h1" eyebrow="Financial modeling & analytics case studies" title="Problem → method → “so what?”">
        <p className="max-w-2xl text-lg leading-relaxed text-slate-600">Each project is written the way a CFO reads: the business issue, how I analysed it, and the decision it supports.</p>
      </SectionHeading>
      <ProjectsExplorer />
    </section>
  );
}
