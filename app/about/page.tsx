import type { Metadata } from "next";
import Narrative from "@/components/about/Narrative";
import ContactButtons from "@/components/about/ContactButtons";
import Timeline from "@/components/about/Timeline";
import VirtualExperience from "@/components/about/VirtualExperience";
import Education from "@/components/about/Education";
import Toolstack from "@/components/about/Toolstack";
import JsonLd from "@/components/JsonLd";
import { graph, ids, pageMetadata, webPageLd } from "@/lib/seo";
import { seo } from "@/data/profile";

const page = seo.pages.about;

export const metadata: Metadata = pageMetadata({ ...page, path: "/about" });

export default function AboutPage() {
  return (
    <>
      <JsonLd
        data={graph(
          webPageLd({
            path: "/about",
            type: "ProfilePage",
            name: page.title,
            description: page.description,
            crumbs: [{ name: "Home", path: "/" }, { name: "About", path: "/about" }],
            extra: { mainEntity: { "@id": ids.person } },
          }),
        )}
      />
      <Narrative />
      <ContactButtons />
      <Timeline />
      <VirtualExperience />
      <Education />
      <Toolstack />
    </>
  );
}
