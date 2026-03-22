import { afterEach, describe, expect, it } from "vitest";
import robots from "./robots";

const ORIGINAL_SITE_URL = process.env.NEXT_PUBLIC_SITE_URL;

afterEach(() => {
  if (ORIGINAL_SITE_URL === undefined) {
    delete process.env.NEXT_PUBLIC_SITE_URL;
    return;
  }

  process.env.NEXT_PUBLIC_SITE_URL = ORIGINAL_SITE_URL;
});

describe("robots route", () => {
  it("returns default michalmakowski.dev host and sitemap", () => {
    delete process.env.NEXT_PUBLIC_SITE_URL;

    const robotsConfig = robots();

    expect(robotsConfig.host).toBe("https://michalmakowski.dev");
    expect(robotsConfig.sitemap).toBe(
      "https://michalmakowski.dev/sitemap.xml",
    );
    expect(robotsConfig.rules).toEqual({
      userAgent: "*",
      allow: "/",
    });
  });

  it("uses NEXT_PUBLIC_SITE_URL for host and sitemap values", () => {
    process.env.NEXT_PUBLIC_SITE_URL = "https://preview.michalmakowski.dev/";

    const robotsConfig = robots();

    expect(robotsConfig.host).toBe("https://preview.michalmakowski.dev");
    expect(robotsConfig.sitemap).toBe(
      "https://preview.michalmakowski.dev/sitemap.xml",
    );
  });
});
