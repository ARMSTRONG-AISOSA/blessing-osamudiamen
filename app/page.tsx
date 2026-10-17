import type { Metadata } from "next";
import Hero from "@/components/home/Hero";
import StatsBanner from "@/components/home/StatsBanner";
import Competencies from "@/components/home/Competencies";
import FeaturedProjects from "@/components/home/FeaturedProjects";
import Certifications from "@/components/home/Certifications";
import JsonLd from "@/components/JsonLd";
import { graph, pageMetadata, webPageLd } from "@/lib/seo";
import { seo } from "@/data/profile";

const page = seo.pages.home;

export const metadata: Metadata = pageMetadata({ ...page, path: "/" });

export default function HomePage() {
  return (
    <>
      <JsonLd data={graph(webPageLd({ path: "/", type: "WebPage", name: page.title, description: page.description }))} />
      <Hero />
      <StatsBanner />
      <Competencies />
      <FeaturedProjects />
      <Certifications />
    </>
  );
}
