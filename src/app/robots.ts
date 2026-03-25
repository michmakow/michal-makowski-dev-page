import type { MetadataRoute } from "next";
import { getCanonicalUrl, getSiteUrl } from "@/lib/site";

export const dynamic = "force-static";

const robots = (): MetadataRoute.Robots => {
  const siteUrl = getSiteUrl();

  return {
    rules: {
      userAgent: "*",
      allow: "/",
    },
    host: siteUrl.origin,
    sitemap: getCanonicalUrl("/sitemap.xml"),
  };
};

export default robots;
