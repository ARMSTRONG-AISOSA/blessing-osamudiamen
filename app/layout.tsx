import type { Metadata, Viewport } from "next";
import { IBM_Plex_Sans, IBM_Plex_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import JsonLd from "@/components/JsonLd";
import { seo, site } from "@/data/profile";
import { graph, siteGraph } from "@/lib/seo";

const sans = IBM_Plex_Sans({ subsets: ["latin"], weight: ["400", "500", "600", "700"], variable: "--font-sans", display: "swap" });
const mono = IBM_Plex_Mono({ subsets: ["latin"], weight: ["500", "600"], variable: "--font-mono", display: "swap" });

const verification: Metadata["verification"] = {
  ...(seo.googleSiteVerification && { google: seo.googleSiteVerification }),
  ...(seo.bingSiteVerification && { other: { "msvalidate.01": seo.bingSiteVerification } }),
};

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: { default: seo.pages.home.title, template: `%s | ${site.name}` },
  description: seo.pages.home.description,
  applicationName: `${site.name} — ${site.jobTitle}`,
  keywords: seo.keywords,
  authors: [{ name: site.name, url: site.url }],
  creator: site.name,
  publisher: site.name,
  category: "finance",
  alternates: { canonical: "/" },
  openGraph: {
    type: "profile",
    firstName: seo.givenName,
    lastName: seo.familyName,
    locale: "en_US",
    url: site.url,
    siteName: `${site.name} — ${site.jobTitle}`,
    title: seo.pages.home.title,
    description: seo.pages.home.description,
    images: [{ url: site.portrait, width: 449, height: 560, alt: `${site.name}, ${site.jobTitle}` }],
  },
  // "summary" (square thumbnail): the share image is a tall portrait, which the large 2:1 card would crop through the face
  twitter: { card: "summary", title: seo.pages.home.title, description: seo.pages.home.description, images: [site.portrait] },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true, "max-image-preview": "large", "max-snippet": -1, "max-video-preview": -1 },
  },
  formatDetection: { telephone: false, email: false, address: false },
  ...(Object.keys(verification).length > 0 && { verification }),
};

export const viewport: Viewport = { themeColor: "#0f172a", width: "device-width", initialScale: 1 };

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${sans.variable} ${mono.variable}`}>
      <body className="font-sans">
        <JsonLd data={graph(siteGraph())} />
        <a href="#main" className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-50 focus:rounded-md focus:bg-white focus:px-4 focus:py-2">
          Skip to content
        </a>
        <Navbar />
        <main id="main">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
