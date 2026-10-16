import type { Metadata, Viewport } from "next";
import { IBM_Plex_Sans, IBM_Plex_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { site } from "@/data/profile";
import { personJsonLd } from "@/lib/seo";

const sans = IBM_Plex_Sans({ subsets: ["latin"], weight: ["400", "500", "600", "700"], variable: "--font-sans", display: "swap" });
const mono = IBM_Plex_Mono({ subsets: ["latin"], weight: ["500", "600"], variable: "--font-mono", display: "swap" });

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: { default: `${site.name} | ${site.jobTitle}`, template: `%s | ${site.name}` },
  description: site.description,
  keywords: ["Blessing Osamudiamen", "Chartered Accountant", "ACA", "ICAN", "Financial Analyst", "Financial Modeling", "FMVA", "DCF Valuation", "Budgeting", "Cash Flow Analysis", "Tableau", "Power BI", "Remote"],
  authors: [{ name: site.name, url: site.url }],
  openGraph: {
    type: "profile",
    locale: "en_US",
    url: site.url,
    siteName: `${site.name} — ${site.jobTitle}`,
    title: `${site.name} | ${site.jobTitle}`,
    description: site.description,
    images: [{ url: site.portrait, width: 449, height: 560, alt: `${site.name}, ${site.jobTitle}` }],
  },
  twitter: { card: "summary_large_image", title: `${site.name} | ${site.jobTitle}`, description: site.description, images: [site.portrait] },
  robots: { index: true, follow: true },
};

export const viewport: Viewport = { themeColor: "#0f172a", width: "device-width", initialScale: 1 };

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${sans.variable} ${mono.variable}`}>
      <body className="font-sans">
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(personJsonLd()) }} />
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
