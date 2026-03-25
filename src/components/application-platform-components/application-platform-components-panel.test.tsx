import { render, screen } from "@testing-library/react";
import { ApplicationPlatformComponentsPanel } from "./application-platform-components-panel";
import {
  applicationPlatformComponentsCards,
  applicationPlatformComponentsDeliveryOutcomes,
  applicationPlatformComponentsOperatingCards,
  applicationPlatformComponentsSystemRole,
  applicationPlatformComponentsTechStack,
  applicationPlatformComponentsTechStackDescription,
} from "@/mocks/home-page";

describe("ApplicationPlatformComponentsPanel", () => {
  it("renders system role, capabilities and tech stack", () => {
    render(
      <ApplicationPlatformComponentsPanel
        systemRole={applicationPlatformComponentsSystemRole}
        capabilityCards={applicationPlatformComponentsCards}
        operatingCards={applicationPlatformComponentsOperatingCards}
        deliveryOutcomes={applicationPlatformComponentsDeliveryOutcomes}
        techStackDescription={applicationPlatformComponentsTechStackDescription}
        techStack={applicationPlatformComponentsTechStack}
      />, 
    );

    expect(screen.getByText(/platform role in system/i)).toBeInTheDocument();
    expect(screen.getByText(/platform capabilities/i)).toBeInTheDocument();
    expect(screen.getByText(/business impact/i)).toBeInTheDocument();
    expect(screen.getByText(/tech stack/i)).toBeInTheDocument();

    const firstCapability = applicationPlatformComponentsCards[0];
    const firstOperatingCard = applicationPlatformComponentsOperatingCards[0];
    const firstTechItem = applicationPlatformComponentsTechStack[0]?.items[0];

    expect(screen.getByText(firstCapability?.title ?? "")).toBeInTheDocument();
    expect(screen.getByText(firstOperatingCard?.title ?? "")).toBeInTheDocument();
    expect(
      screen.getByText(firstTechItem?.label ?? "", { exact: false }),
    ).toBeInTheDocument();
  });
});
