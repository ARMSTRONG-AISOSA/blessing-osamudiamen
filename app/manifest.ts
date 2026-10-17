import type { MetadataRoute } from "next";
import { site } from "@/data/profile";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: `${site.name} — ${site.jobTitle}`,
    short_name: site.name,
    description: site.description,
    start_url: "/",
    display: "browser",
    background_color: "#f8fafc",
    theme_color: "#0f172a",
    categories: ["business", "finance"],
    icons: [
      { src: "/icon.svg", type: "image/svg+xml", sizes: "any" },
      { src: "/apple-icon", type: "image/png", sizes: "180x180" },
    ],
  };
}
