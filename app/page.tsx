import type { Metadata } from "next";
import Hero from "@/components/home/Hero";
import StatsBanner from "@/components/home/StatsBanner";
import Competencies from "@/components/home/Competencies";
import FeaturedProjects from "@/components/home/FeaturedProjects";
import Certifications from "@/components/home/Certifications";
import { pageMetadata } from "@/lib/seo";
import { site } from "@/data/profile";

export const metadata: Metadata = { ...pageMetadata({ title: site.jobTitle, path: "/" }), title: { absolute: `${site.name} | ${site.jobTitle}` } };

export default function HomePage() {
  return (
    <>
      <Hero />
      <StatsBanner />
      <Competencies />
      <FeaturedProjects />
      <Certifications />
    </>
  );
}
