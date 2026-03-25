import { fireEvent, render, screen } from "@testing-library/react";
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

    fireEvent.click(screen.getByRole("button", { name: /communication profiler/i }));
    fireEvent.click(screen.getByRole("button", { name: /work experience/i }));

    expect(onRightPanelChange).toHaveBeenCalledWith("communication-profiler");
    expect(onRightPanelChange).toHaveBeenCalledWith("work-experience");
  });
});
