import React from "react";
import RootLayout, { metadata } from "./layout";

describe("RootLayout", () => {
  it("exposes global SEO metadata", () => {
    expect(metadata.description).toMatch(/portfolio/i);
    expect(metadata.robots).toBeDefined();
    expect(metadata.openGraph?.type).toBe("website");
  });

  it("wraps children with html and body", () => {
    const element = RootLayout({
      children: <div data-testid="child">content</div>,
    });

    expect(element.type).toBe("html");
    expect(element.props.lang).toBe("en");
    expect(element.props.children.type).toBe("body");
    expect(element.props.children.props.children.props["data-testid"]).toBe(
      "child",
    );
  });
});
