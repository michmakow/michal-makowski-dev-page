import type { Metadata } from "next";
import type { FC } from "react";
import HomePageContent from "@/components/pages/home-page-content";
import { getCanonicalUrl, siteConfig } from "@/lib/site";

const homeSeoTitle = "Michał Makowski | Platform Engineer Portfolio";
const homeSeoDescription =
  "Portfolio platform engineer focused on distributed systems, cloud-native architecture, and production AI delivery.";

export const metadata: Metadata = {
  title: homeSeoTitle,
  description: homeSeoDescription,
  keywords: [
    ...siteConfig.keywords,
    "platform engineer",
    "software architecture",
    "cloud-native",
  ],
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: homeSeoTitle,
    description: homeSeoDescription,
    url: "/",
    type: "website",
    siteName: siteConfig.name,
    locale: siteConfig.locale,
  },
  twitter: {
    card: "summary_large_image",
    title: homeSeoTitle,
    description: homeSeoDescription,
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
  verification: process.env.GOOGLE_SITE_VERIFICATION
    ? { google: process.env.GOOGLE_SITE_VERIFICATION }
    : undefined,
};

const HomePage: FC = () => {
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "WebSite",
        name: siteConfig.name,
        description: siteConfig.description,
        url: getCanonicalUrl("/"),
        inLanguage: "en-US",
      },
      {
        "@type": "Person",
        name: "Michał Makowski",
        jobTitle: "Platform Engineer",
        description:
          "Platform engineer focused on distributed systems and AI integration.",
        url: getCanonicalUrl("/"),
        sameAs: [siteConfig.githubUrl],
      },
    ],
  };

  return (
    <>
      <HomePageContent />
      <script
        type="application/ld+json"
        // JSON-LD improves understanding of site context by search engines.
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
    </>
  );
};

export default HomePage;
