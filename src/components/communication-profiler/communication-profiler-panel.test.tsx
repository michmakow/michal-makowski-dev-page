import { fireEvent, render, screen } from "@testing-library/react";
import { CommunicationProfilerPanel } from "./communication-profiler-panel";
import {
  communicationProfilerArchitectureDecisions,
  communicationProfilerArchitectureSummary,
  communicationProfilerFacts,
  communicationProfilerLightboxImages,
  communicationProfilerStatusPills,
} from "@/mocks/home-page";

describe("CommunicationProfilerPanel", () => {
  it("renders data blocks and triggers architecture decision callback", () => {
    const onArchitectureDecisionOpen = vi.fn();

    render(
      <CommunicationProfilerPanel
        statusPills={communicationProfilerStatusPills}
        facts={communicationProfilerFacts}
        architectureSummary={communicationProfilerArchitectureSummary}
        architectureDecisions={communicationProfilerArchitectureDecisions}
        lightboxImages={communicationProfilerLightboxImages}
        onArchitectureDecisionOpen={onArchitectureDecisionOpen}
      />,
    );

    expect(screen.getByText(/architecture decisions/i)).toBeInTheDocument();
    expect(screen.getByText(/application previews/i)).toBeInTheDocument();
    expect(screen.getByText(communicationProfilerStatusPills[0] ?? "")).toBeInTheDocument();
    expect(screen.getByText(communicationProfilerFacts[0]?.label ?? "")).toBeInTheDocument();

    const firstDecision = communicationProfilerArchitectureDecisions[0];
    fireEvent.click(
      screen.getByRole("button", {
        name: new RegExp(firstDecision?.title ?? "", "i"),
      }),
    );

    expect(onArchitectureDecisionOpen).toHaveBeenCalledWith(firstDecision?.id);

    const firstPreviewHint = communicationProfilerLightboxImages[0]?.hint ?? "";
    expect(
      screen.getByRole("button", { name: new RegExp(firstPreviewHint, "i") }),
    ).toBeInTheDocument();
  });
});
