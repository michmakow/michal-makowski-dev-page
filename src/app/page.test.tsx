import { render, screen } from "@testing-library/react";
import HomePage from "./page";

const ORIGINAL_GOOGLE_SITE_VERIFICATION = process.env.GOOGLE_SITE_VERIFICATION;

afterEach(() => {
  if (ORIGINAL_GOOGLE_SITE_VERIFICATION === undefined) {
    delete process.env.GOOGLE_SITE_VERIFICATION;
  } else {
    process.env.GOOGLE_SITE_VERIFICATION = ORIGINAL_GOOGLE_SITE_VERIFICATION;
  }

  vi.resetModules();
});

describe("Home page", () => {
  it("renders the hero heading", () => {
    render(<HomePage />);

    expect(
      screen.getByRole("heading", {
        level: 1,
        name: /michał makowski/i,
      }),
    ).toBeInTheDocument();
  });

  it("renders value proof content", () => {
    render(<HomePage />);

    expect(
      screen.getByText(/event-driven ai processing architecture/i),
    ).toBeInTheDocument();
  });

  it("renders the active project panel heading", () => {
    render(<HomePage />);

    expect(
      screen.getByRole("heading", {
        level: 3,
        name: /archora/i,
      }),
    ).toBeInTheDocument();
  });

  it("adds Google verification metadata when env variable is set", async () => {
    process.env.GOOGLE_SITE_VERIFICATION = "google-token";

    vi.resetModules();
    const { metadata } = await import("./page");

    expect(metadata.verification).toEqual({ google: "google-token" });
  });
});
