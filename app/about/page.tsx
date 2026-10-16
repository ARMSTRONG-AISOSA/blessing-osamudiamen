import type { Metadata } from "next";
import Narrative from "@/components/about/Narrative";
import ContactButtons from "@/components/about/ContactButtons";
import Timeline from "@/components/about/Timeline";
import VirtualExperience from "@/components/about/VirtualExperience";
import Education from "@/components/about/Education";
import Toolstack from "@/components/about/Toolstack";
import { pageMetadata } from "@/lib/seo";

export const metadata: Metadata = pageMetadata({
  title: "About",
  description: "Blessing Osamudiamen — Chartered Accountant (ACA): work history, virtual experience, education, certifications and toolstack.",
  path: "/about",
});

export default function AboutPage() {
  return (
    <>
      <Narrative />
      <ContactButtons />
      <Timeline />
      <VirtualExperience />
      <Education />
      <Toolstack />
    </>
  );
}
