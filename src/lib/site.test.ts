import { afterEach, describe, expect, it } from "vitest";
import { getCanonicalUrl, getSiteUrl } from "./site";

const ORIGINAL_SITE_URL = process.env.NEXT_PUBLIC_SITE_URL;

afterEach(() => {
  if (ORIGINAL_SITE_URL === undefined) {
    delete process.env.NEXT_PUBLIC_SITE_URL;
    return;
  }

  process.env.NEXT_PUBLIC_SITE_URL = ORIGINAL_SITE_URL;
});

describe("getSiteUrl", () => {
  it("returns the primary domain when NEXT_PUBLIC_SITE_URL is not set", () => {
    delete process.env.NEXT_PUBLIC_SITE_URL;

    expect(getSiteUrl().toString()).toBe("https://michalmakowski.dev/");
  });

  it("uses NEXT_PUBLIC_SITE_URL when it is valid", () => {
    process.env.NEXT_PUBLIC_SITE_URL = "https://preview.michalmakowski.dev";

    expect(getSiteUrl().toString()).toBe("https://preview.michalmakowski.dev/");
  });

  it("throws an error when NEXT_PUBLIC_SITE_URL is invalid", () => {
    process.env.NEXT_PUBLIC_SITE_URL = "invalid-url";

    expect(() => getSiteUrl()).toThrow(/NEXT_PUBLIC_SITE_URL/);
  });

  it("throws an error when NEXT_PUBLIC_SITE_URL uses non-http protocol", () => {
    process.env.NEXT_PUBLIC_SITE_URL = "ftp://preview.michalmakowski.dev";

    expect(() => getSiteUrl()).toThrow(/NEXT_PUBLIC_SITE_URL/);
  });
});

describe("getCanonicalUrl", () => {
  it("returns a normalized canonical root URL", () => {
    delete process.env.NEXT_PUBLIC_SITE_URL;

    expect(getCanonicalUrl("/")).toBe("https://michalmakowski.dev/");
  });

  it("returns a normalized canonical URL for nested paths", () => {
    process.env.NEXT_PUBLIC_SITE_URL = "https://michalmakowski.dev/";

    expect(getCanonicalUrl("/projects/distributed-systems")).toBe(
      "https://michalmakowski.dev/projects/distributed-systems",
    );
  });

  it("accepts pathnames without leading slash", () => {
    process.env.NEXT_PUBLIC_SITE_URL = "https://michalmakowski.dev";

    expect(getCanonicalUrl("blog")).toBe("https://michalmakowski.dev/blog");
  });
});
