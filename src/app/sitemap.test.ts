import { afterEach, describe, expect, it } from "vitest";
import sitemap from "./sitemap";

const ORIGINAL_SITE_URL = process.env.NEXT_PUBLIC_SITE_URL;

afterEach(() => {
  if (ORIGINAL_SITE_URL === undefined) {
    delete process.env.NEXT_PUBLIC_SITE_URL;
    return;
  }

  process.env.NEXT_PUBLIC_SITE_URL = ORIGINAL_SITE_URL;
});

describe("sitemap route", () => {
  it("returns the homepage entry for michalmakowski.dev by default", () => {
    delete process.env.NEXT_PUBLIC_SITE_URL;

    const sitemapEntries = sitemap();

    expect(sitemapEntries).toHaveLength(1);
    expect(sitemapEntries[0]).toMatchObject({
      url: "https://michalmakowski.dev/",
      changeFrequency: "weekly",
      priority: 1,
    });
    expect(sitemapEntries[0]?.lastModified).toBeInstanceOf(Date);
  });

  it("uses NEXT_PUBLIC_SITE_URL for generated URLs", () => {
    process.env.NEXT_PUBLIC_SITE_URL = "https://preview.michalmakowski.dev/";

    const sitemapEntries = sitemap();

    expect(sitemapEntries[0]?.url).toBe("https://preview.michalmakowski.dev/");
  });
});
