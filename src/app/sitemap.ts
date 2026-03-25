import type { MetadataRoute } from "next";
import { getCanonicalUrl } from "@/lib/site";

export const dynamic = "force-static";

const sitemap = (): MetadataRoute.Sitemap => [
  {
    url: getCanonicalUrl("/"),
    lastModified: new Date(),
    changeFrequency: "weekly",
    priority: 1,
  },
];

export default sitemap;
