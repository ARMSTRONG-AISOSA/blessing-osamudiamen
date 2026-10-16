import type { Metadata } from "next";
import { Suspense } from "react";
import SectionHeading from "@/components/SectionHeading";
import ProjectsExplorer from "@/components/projects/ProjectsExplorer";
import { pageMetadata } from "@/lib/seo";

export const metadata: Metadata = pageMetadata({
  title: "Projects & Case Studies",
  description: "Financial modeling, data analytics and accounting & audit case studies — each with a problem statement, methodology and strategic recommendation.",
  path: "/projects",
});

export default function ProjectsPage() {
  return (
    <section className="container-page pb-24 pt-14 md:pt-20">
      <SectionHeading as="h1" eyebrow="Case study showcase" title="Problem → method → “so what?”">
        <p className="max-w-2xl text-lg leading-relaxed text-slate-600">Each project is written the way a CFO reads: the business issue, how I analysed it, and the decision it supports.</p>
      </SectionHeading>
      <Suspense fallback={null}>
        <ProjectsExplorer />
      </Suspense>
    </section>
  );
}
