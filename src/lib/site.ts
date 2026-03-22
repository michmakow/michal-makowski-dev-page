const PRIMARY_SITE_URL = "https://michalmakowski.dev";

const isHttpProtocol = (protocol: string): boolean =>
  protocol === "http:" || protocol === "https:";

const parseAbsoluteHttpUrl = (value: string): URL | null => {
  try {
    const parsedUrl = new URL(value);

    if (!isHttpProtocol(parsedUrl.protocol)) {
      return null;
    }

    return parsedUrl;
  } catch {
    return null;
  }
};

export const siteConfig = {
  name: "michalmakowski.dev",
  title: "Software Engineer Portfolio",
  description:
    "Software engineer portfolio focused on distributed systems, cloud-native architecture, and production AI delivery.",
  locale: "en_US",
  keywords: [
    "michal makowski",
    "software engineer portfolio",
    "next.js",
    "distributed systems",
    "cloud architecture",
    "ai engineering",
    "C#",
    "React",
    "SQL",
    "Azure"
  ],
  author: "Michal Makowski",
  githubUrl: "https://github.com/michalmakowski",
  contactEmail: "contact@michalmakowski.dev",
} as const;

export function getSiteUrl(): URL {
  const configuredUrl = process.env.NEXT_PUBLIC_SITE_URL?.trim();

  if (!configuredUrl) {
    return new URL(PRIMARY_SITE_URL);
  }

  const parsedUrl = parseAbsoluteHttpUrl(configuredUrl);

  if (!parsedUrl) {
    throw new Error(
      "NEXT_PUBLIC_SITE_URL must be a valid absolute http(s) URL (for example: https://michalmakowski.dev).",
    );
  }

  return parsedUrl;
}

export function getCanonicalUrl(pathname = "/"): string {
  const normalizedPathname = pathname.startsWith("/")
    ? pathname
    : `/${pathname}`;
  const baseSiteUrl = getSiteUrl().toString().replace(/\/$/, "");

  return normalizedPathname === "/"
    ? `${baseSiteUrl}/`
    : `${baseSiteUrl}${normalizedPathname}`;
}
