import { render, screen } from "@testing-library/react";
import HomePage from "./page";

describe("Home page", () => {
  it("renders the main page heading", () => {
    render(<HomePage />);

    expect(
      screen.getByRole("heading", {
        level: 1,
        name: /software engineer portfolio/i,
      }),
    ).toBeInTheDocument();
  });

  it("renders at least one focus area card", () => {
    render(<HomePage />);

    expect(
      screen.getByText(/distributed systems and scalable apis/i),
    ).toBeInTheDocument();
  });

  it("renders the site branding", () => {
    render(<HomePage />);

    expect(
      screen.getByText(/michalmakowski\.dev/i),
    ).toBeInTheDocument();
  });
});
