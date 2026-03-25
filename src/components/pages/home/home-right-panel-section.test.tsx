import { fireEvent, render, screen } from "@testing-library/react";
import { HomeRightPanelSection } from "./home-right-panel-section";
import type { ProjectPanel, UtilityPanel } from "@/types/home-page.types";

const createRect = (top: number): DOMRect =>
  ({
    x: 0,
    y: top,
    width: 100,
    height: 40,
    top,
    left: 0,
    right: 100,
    bottom: top + 40,
    toJSON: () => ({}),
  }) as DOMRect;

const customPanel: ProjectPanel = {
  key: "archora",
  iconLabel: "Archora",
  iconTitle: "Archora",
  iconDescription: "Architecture control platform",
  eyebrow: "Custom",
  title: "Custom Panel",
  subtitle: "Custom subtitle",
  description: "Custom description",
  highlights: ["Highlight one"],
  actions: [
    {
      label: "Live Demo",
      href: "https://example.com/demo",
      variant: "ghost",
    },
    {
      label: "Read More",
      href: "/read-more",
      variant: "secondary",
    },
  ],
};

const contactPanel: UtilityPanel = {
  key: "contact",
  iconLabel: "Contact",
  iconTitle: "Contact",
  iconDescription: "Contact channels",
  eyebrow: "Contact",
  title: "Contact",
  subtitle: "Contact subtitle",
  description: "Contact description",
  highlights: ["Email", "GitHub"],
  actions: [
    {
      label: "LinkedIn",
      href: "https://www.linkedin.com/in/example",
      variant: "secondary",
    },
    {
      label: "Email",
      href: "#contact",
      variant: "primary",
    },
    {
      label: "GitHub",
      href: "https://github.com/example",
      variant: "ghost",
    },
    {
      label: "Phone",
      href: "tel:+48123456789",
      variant: "secondary",
    },
  ],
};

const workExperiencePanel: UtilityPanel = {
  key: "work-experience",
  iconLabel: "Work Experience",
  iconTitle: "Work Experience",
  iconDescription: "Professional timeline",
  eyebrow: "Experience",
  title: "Work Experience",
  subtitle: "Work history",
  description: "Work description",
  highlights: ["Role one", "Role two"],
  actions: [],
};

describe("HomeRightPanelSection", () => {
  afterEach(() => {
    vi.restoreAllMocks();
    window.location.hash = "";
  });

  it("renders footer actions for non-filtered panels", () => {
    const openSpy = vi.spyOn(window, "open").mockImplementation(() => null);

    render(
      <HomeRightPanelSection
        activeRightPanel={customPanel}
        activeProjectPanel={undefined}
        activeWorkExperienceIndex={0}
        onWorkExperienceSelect={vi.fn()}
        onWorkExperienceAutoActivate={vi.fn()}
        onArchitectureDecisionOpen={vi.fn()}
      />,
    );

    expect(screen.getByText(/custom subtitle/i)).toBeInTheDocument();
    expect(screen.getByText(/read more/i)).toBeInTheDocument();

    fireEvent.click(screen.getByLabelText(/open live project demo/i));
    expect(openSpy).toHaveBeenCalledWith(
      "https://example.com/demo",
      "_blank",
      "noreferrer,noopener",
    );
  });

  it("renders contact icons, skips unknown labels, and handles non-http links", () => {
    const openSpy = vi.spyOn(window, "open").mockImplementation(() => null);

    render(
      <HomeRightPanelSection
        activeRightPanel={contactPanel}
        activeProjectPanel={undefined}
        activeWorkExperienceIndex={0}
        onWorkExperienceSelect={vi.fn()}
        onWorkExperienceAutoActivate={vi.fn()}
        onArchitectureDecisionOpen={vi.fn()}
      />,
    );

    expect(screen.queryByRole("button", { name: /phone/i })).not.toBeInTheDocument();

    fireEvent.click(screen.getByRole("button", { name: /^linkedin$/i }));
    expect(openSpy).toHaveBeenCalledWith(
      "https://www.linkedin.com/in/example",
      "_blank",
      "noreferrer,noopener",
    );

    fireEvent.click(screen.getByRole("button", { name: /^email$/i }));
    expect(window.location.hash).toBe("#contact");
  });

  it("handles icon and non-icon project action variants", () => {
    const projectPanelWithSecondaryIcon: ProjectPanel = {
      ...customPanel,
      actions: [
        {
          label: "GitHub",
          href: "https://example.com/repo",
          variant: "secondary",
        },
        {
          label: "Docs",
          href: "https://example.com/docs",
          variant: "primary",
        },
      ],
    };

    const activeProjectPanelWithoutKey = {
      ...projectPanelWithSecondaryIcon,
      key: undefined,
    } as unknown as ProjectPanel;

    render(
      <HomeRightPanelSection
        activeRightPanel={projectPanelWithSecondaryIcon}
        activeProjectPanel={activeProjectPanelWithoutKey}
        activeWorkExperienceIndex={0}
        onWorkExperienceSelect={vi.fn()}
        onWorkExperienceAutoActivate={vi.fn()}
        onArchitectureDecisionOpen={vi.fn()}
      />,
    );

    const githubButton = screen.getByLabelText(/open repository on github/i);
    expect(githubButton).toHaveAttribute("id", "archora-github");
    expect(githubButton.className).toContain("text-slate-100");

    const docsLink = screen.getByRole("link", { name: /docs/i });
    expect(docsLink).toHaveAttribute("target", "_blank");
    expect(docsLink).toHaveAttribute("rel", "noreferrer noopener");
  });

  it("scrolls work-experience entries with and without container lookup", () => {
    vi.spyOn(window, "requestAnimationFrame").mockImplementation((callback) => {
      callback(0);
      return 1;
    });
    vi.spyOn(window, "cancelAnimationFrame").mockImplementation(() => 0);

    const originalScrollTo = (HTMLElement.prototype as { scrollTo?: unknown }).scrollTo;
    const originalScrollIntoView =
      (HTMLElement.prototype as { scrollIntoView?: unknown }).scrollIntoView;
    const scrollToSpy = vi.fn();
    const scrollIntoViewSpy = vi.fn();
    (HTMLElement.prototype as { scrollTo?: unknown }).scrollTo = scrollToSpy;
    (HTMLElement.prototype as { scrollIntoView?: unknown }).scrollIntoView =
      scrollIntoViewSpy;

    const getRectSpy = vi
      .spyOn(HTMLElement.prototype, "getBoundingClientRect")
      .mockImplementation(function getBoundingClientRect() {
        const elementId = (this as HTMLElement).id;

        if (elementId === "work-experience-scroll-container") {
          return createRect(20);
        }

        if (elementId.startsWith("work-experience-title-")) {
          return createRect(120);
        }

        if (elementId.startsWith("work-experience-entry-")) {
          return createRect(130);
        }

        return createRect(220);
      });

    const onWorkExperienceSelect = vi.fn();

    render(
      <HomeRightPanelSection
        activeRightPanel={workExperiencePanel}
        activeProjectPanel={undefined}
        activeWorkExperienceIndex={0}
        onWorkExperienceSelect={onWorkExperienceSelect}
        onWorkExperienceAutoActivate={vi.fn()}
        onArchitectureDecisionOpen={vi.fn()}
      />,
    );

    const firstTimelineButton = screen.getByRole("button", {
      name: /nexi/i,
    });

    fireEvent.click(firstTimelineButton);
    expect(onWorkExperienceSelect).toHaveBeenCalledWith(0);
    expect(scrollToSpy).toHaveBeenCalled();

    const originalGetElementById = document.getElementById.bind(document);
    const withoutContainerSpy = vi
      .spyOn(document, "getElementById")
      .mockImplementation((id: string) => {
        if (id === "work-experience-scroll-container") {
          return null;
        }

        return originalGetElementById(id);
      });

    fireEvent.click(firstTimelineButton);
    expect(scrollIntoViewSpy).toHaveBeenCalled();

    withoutContainerSpy.mockRestore();

    const withoutTargetSpy = vi
      .spyOn(document, "getElementById")
      .mockImplementation((id: string) => {
        if (id.startsWith("work-experience-title-")) {
          return null;
        }

        return originalGetElementById(id);
      });

    const scrollToCallsBeforeMissingTarget = scrollToSpy.mock.calls.length;
    const scrollIntoViewCallsBeforeMissingTarget =
      scrollIntoViewSpy.mock.calls.length;

    fireEvent.click(firstTimelineButton);

    expect(scrollToSpy).toHaveBeenCalledTimes(scrollToCallsBeforeMissingTarget);
    expect(scrollIntoViewSpy).toHaveBeenCalledTimes(
      scrollIntoViewCallsBeforeMissingTarget,
    );

    withoutTargetSpy.mockRestore();
    getRectSpy.mockRestore();
    (HTMLElement.prototype as { scrollTo?: unknown }).scrollTo =
      originalScrollTo;
    (HTMLElement.prototype as { scrollIntoView?: unknown }).scrollIntoView =
      originalScrollIntoView;
  });
});
