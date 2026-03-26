import { fireEvent, render, screen, within } from "@testing-library/react";
import { HomeNavigationSeparators } from "./home-navigation-separators";

describe("HomeNavigationSeparators", () => {
  it("renders project and utility navigation and calls callback", () => {
    const onRightPanelChange = vi.fn();

    render(
      <HomeNavigationSeparators
        activeRightPanelKey="archora"
        onRightPanelChange={onRightPanelChange}
      />,
    );

    const mobileNavigation = screen.getByRole("navigation");

    fireEvent.click(
      within(mobileNavigation).getByRole("button", {
        name: /communication profiler/i,
      }),
    );
    fireEvent.click(
      within(mobileNavigation).getByRole("button", { name: /work experience/i }),
    );
    fireEvent.click(
      screen.getByRole("button", {
        name: /communication profiler\.\s*ai-powered communication analytics platform/i,
      }),
    );
    fireEvent.click(
      screen.getByRole("button", {
        name: /work experience\.\s*professional timeline and delivered outcomes/i,
      }),
    );

    expect(onRightPanelChange).toHaveBeenCalledWith("communication-profiler");
    expect(onRightPanelChange).toHaveBeenCalledWith("work-experience");
  });

  it("applies active styles for the selected panel across mobile and desktop controls", () => {
    render(
      <HomeNavigationSeparators
        activeRightPanelKey="contact"
        onRightPanelChange={vi.fn()}
      />,
    );

    const mobileNavigation = screen.getByRole("navigation");
    const mobileContactButton = within(mobileNavigation).getByRole("button", {
      name: /contact/i,
    });
    const mobileArchoraButton = within(mobileNavigation).getByRole("button", {
      name: /archora/i,
    });

    expect(mobileContactButton).toHaveClass("text-amber-200");
    expect(mobileArchoraButton).toHaveClass("text-sky-100/85");

    expect(
      screen.getByRole("button", {
        name: /contact\.\s*professional contact channels/i,
      }),
    ).toHaveClass("text-amber-200");
    expect(
      screen.getByRole("button", {
        name: /archora\.\s*architecture control platform/i,
      }),
    ).toHaveClass("text-sky-100/85");
  });
});
