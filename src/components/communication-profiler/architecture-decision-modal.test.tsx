import { fireEvent, render, screen } from "@testing-library/react";
import { ArchitectureDecisionModal } from "./architecture-decision-modal";
import { communicationProfilerArchitectureDecisions } from "@/mocks/home-page";

describe("ArchitectureDecisionModal", () => {
  it("does not render when decision is null", () => {
    const onClose = vi.fn();

    render(<ArchitectureDecisionModal decision={null} onClose={onClose} />);

    expect(screen.queryByRole("dialog")).not.toBeInTheDocument();
  });

  it("renders modal details and handles close actions", () => {
    const onClose = vi.fn();
    const decision = communicationProfilerArchitectureDecisions[0] ?? null;

    render(<ArchitectureDecisionModal decision={decision} onClose={onClose} />);

    expect(screen.getByRole("dialog")).toBeInTheDocument();
    expect(screen.getByText(/trade-offs/i)).toBeInTheDocument();

    fireEvent.keyDown(window, { key: "Enter" });
    expect(onClose).not.toHaveBeenCalled();

    fireEvent.keyDown(window, { key: "Escape" });
    expect(onClose).toHaveBeenCalledTimes(1);

    fireEvent.click(screen.getByLabelText(/close adr modal/i));
    expect(onClose).toHaveBeenCalledTimes(2);

    fireEvent.click(screen.getByRole("dialog").parentElement as HTMLElement);
    expect(onClose).toHaveBeenCalledTimes(3);
  });
});
