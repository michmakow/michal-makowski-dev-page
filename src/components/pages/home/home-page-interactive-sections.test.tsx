import { fireEvent, render, screen } from "@testing-library/react";
import { HomePageInteractiveSections } from "./home-page-interactive-sections";

describe("HomePageInteractiveSections", () => {
  it("switches panels and executes key actions", () => {
    const openSpy = vi.spyOn(window, "open").mockImplementation(() => null);

    render(<HomePageInteractiveSections />);

    expect(screen.getByRole("heading", { name: /archora/i })).toBeInTheDocument();

    fireEvent.click(
      screen.getByRole("button", { name: /communication profiler/i }),
    );
    expect(
      screen.getByRole("heading", { name: /communication profiler/i }),
    ).toBeInTheDocument();

    fireEvent.click(screen.getByRole("button", { name: /open live project demo/i }));
    expect(openSpy).toHaveBeenCalled();

    fireEvent.click(
      screen.getByRole("button", {
        name: /adr-001: latency isolation using asynchronous processing/i,
      }),
    );
    expect(screen.getByRole("dialog")).toBeInTheDocument();
    fireEvent.click(screen.getByLabelText(/close adr modal/i));

    fireEvent.click(
      screen.getByRole("button", { name: /application platform components/i }),
    );
    expect(screen.getByText(/platform capabilities/i)).toBeInTheDocument();

    fireEvent.click(screen.getByRole("button", { name: /work experience/i }));
    expect(screen.getAllByText(/key contributions/i).length).toBeGreaterThan(0);

    fireEvent.click(screen.getByRole("button", { name: /contact/i }));
    fireEvent.click(screen.getByRole("button", { name: /^github$/i }));
    expect(openSpy).toHaveBeenCalled();

    openSpy.mockRestore();
  });

  it("falls back to the first project panel when active key is missing", async () => {
    vi.resetModules();

    vi.doMock("@/mocks/home-page", async () => {
      const actual = await vi.importActual<typeof import("@/mocks/home-page")>(
        "@/mocks/home-page",
      );

      return {
        ...actual,
        projectPanels: [
          {
            ...actual.projectPanels[0],
            key: "fallback-panel",
            iconLabel: "Fallback",
            iconTitle: "Fallback",
            iconDescription: "Fallback",
            title: "Fallback Panel",
            subtitle: "Fallback subtitle",
          },
        ],
        utilityPanels: [],
      };
    });

    const { HomePageInteractiveSections: FallbackHomePageInteractiveSections } =
      await import("./home-page-interactive-sections");

    render(<FallbackHomePageInteractiveSections />);

    expect(
      screen.getByRole("heading", {
        name: /fallback panel/i,
      }),
    ).toBeInTheDocument();

    vi.doUnmock("@/mocks/home-page");
    vi.resetModules();
  });
});
