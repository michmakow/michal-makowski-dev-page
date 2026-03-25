import { fireEvent, render, screen } from "@testing-library/react";
import { WorkExperiencePanel } from "./work-experience-panel";
import { workExperience, workExperienceTimelineItems } from "@/mocks/home-page";

const buildWorkExperienceEntryId = (index: number) =>
  `work-experience-entry-${index}`;

const buildWorkExperienceTitleId = (index: number) =>
  `work-experience-title-${index}`;

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

describe("WorkExperiencePanel", () => {
  beforeEach(() => {
    vi.spyOn(window, "requestAnimationFrame").mockImplementation((callback) => {
      callback(0);
      return 1;
    });
    vi.spyOn(window, "cancelAnimationFrame").mockImplementation(() => 0);
    vi
      .spyOn(HTMLElement.prototype, "getBoundingClientRect")
      .mockImplementation(function getBoundingClientRect() {
        if (this.id === "work-experience-scroll-container") {
          return createRect(0);
        }

        if (this.id === "work-experience-entry-0") {
          return createRect(240);
        }

        if (this.id === "work-experience-entry-1") {
          return createRect(150);
        }

        return createRect(400);
      });
  });

  afterEach(() => {
    vi.restoreAllMocks();
  });

  it("renders timeline and synchronizes active entry based on scroll", () => {
    const onWorkExperienceSelect = vi.fn();
    const onWorkExperienceAutoActivate = vi.fn();

    const { unmount } = render(
      <div id="work-experience-scroll-container">
        <WorkExperiencePanel
          workExperience={workExperience}
          workExperienceTimelineItems={workExperienceTimelineItems}
          activeWorkExperienceIndex={0}
          onWorkExperienceSelect={onWorkExperienceSelect}
          onWorkExperienceAutoActivate={onWorkExperienceAutoActivate}
          buildWorkExperienceEntryId={buildWorkExperienceEntryId}
          buildWorkExperienceTitleId={buildWorkExperienceTitleId}
        />
      </div>,
    );

    expect(screen.getAllByText(/context/i).length).toBeGreaterThan(0);
    expect(screen.getAllByText(/impact/i).length).toBeGreaterThan(0);
    expect(screen.getAllByText(/key contributions/i).length).toBeGreaterThan(0);

    expect(onWorkExperienceAutoActivate).toHaveBeenCalledWith(1);

    fireEvent.click(screen.getByRole("button", { name: /nexi/i }));
    expect(onWorkExperienceSelect).toHaveBeenCalledWith(0);

    fireEvent.scroll(document.getElementById("work-experience-scroll-container")!);
    fireEvent(window, new Event("resize"));

    unmount();
  });

  it("returns early when scroll container is missing", () => {
    const onWorkExperienceAutoActivate = vi.fn();

    render(
      <WorkExperiencePanel
        workExperience={workExperience}
        workExperienceTimelineItems={workExperienceTimelineItems}
        activeWorkExperienceIndex={0}
        onWorkExperienceSelect={vi.fn()}
        onWorkExperienceAutoActivate={onWorkExperienceAutoActivate}
        buildWorkExperienceEntryId={buildWorkExperienceEntryId}
        buildWorkExperienceTitleId={buildWorkExperienceTitleId}
      />,
    );

    expect(onWorkExperienceAutoActivate).not.toHaveBeenCalled();
  });

  it("skips auto activation when timeline entries are not found", () => {
    const originalGetElementById = document.getElementById.bind(document);
    vi.spyOn(document, "getElementById").mockImplementation((id: string) => {
      if (id.startsWith("work-experience-entry-")) {
        return null;
      }

      return originalGetElementById(id);
    });

    const onWorkExperienceAutoActivate = vi.fn();

    render(
      <div id="work-experience-scroll-container">
        <WorkExperiencePanel
          workExperience={workExperience}
          workExperienceTimelineItems={workExperienceTimelineItems}
          activeWorkExperienceIndex={0}
          onWorkExperienceSelect={vi.fn()}
          onWorkExperienceAutoActivate={onWorkExperienceAutoActivate}
          buildWorkExperienceEntryId={buildWorkExperienceEntryId}
          buildWorkExperienceTitleId={buildWorkExperienceTitleId}
        />
      </div>,
    );

    fireEvent.scroll(document.getElementById("work-experience-scroll-container")!);
    expect(onWorkExperienceAutoActivate).not.toHaveBeenCalled();
  });

  it("uses fallback timeline metadata when optional timeline fields are missing", () => {
    render(
      <div id="work-experience-scroll-container">
        <WorkExperiencePanel
          workExperience={workExperience}
          workExperienceTimelineItems={[]}
          activeWorkExperienceIndex={0}
          onWorkExperienceSelect={vi.fn()}
          onWorkExperienceAutoActivate={vi.fn()}
          buildWorkExperienceEntryId={buildWorkExperienceEntryId}
          buildWorkExperienceTitleId={buildWorkExperienceTitleId}
        />
      </div>,
    );

    expect(
      screen.getAllByRole("button", {
        name: /scroll to .* experience details/i,
      }).length,
    ).toBeGreaterThan(0);
  });
});


