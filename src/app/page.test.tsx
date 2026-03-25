import { render, screen } from "@testing-library/react";
import HomePage from "./page";

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
      screen.getByText(/event-driven ai processing platform/i),
    ).toBeInTheDocument();
  });

  it("renders the architecture section heading", () => {
    render(<HomePage />);

    expect(
      screen.getByRole("heading", {
        level: 2,
        name: /how i design systems/i,
      }),
    ).toBeInTheDocument();
  });
});
