"use client";

import { Separator } from "@michmakow/application-platform-components";
import { useState } from "react";
import { ArchitectureDecisionModal } from "@/components/communication-profiler/architecture-decision-modal";
import { HomeNavigationSeparators } from "@/components/pages/home/home-navigation-separators";
import { HomeProfileHighlightsSection } from "@/components/pages/home/home-profile-highlights-section";
import { HomeProfileSection } from "@/components/pages/home/home-profile-section";
import { HomeRightPanelSection } from "@/components/pages/home/home-right-panel-section";
import {
  communicationProfilerArchitectureDecisions,
  projectPanels,
  utilityPanels,
} from "@/mocks/home-page";
import type { RightPanelKey } from "@/types/home-page.types";

export const HomePageInteractiveSections = () => {
  const [activeRightPanelKey, setActiveRightPanelKey] =
    useState<RightPanelKey>("archora");
  const [activeArchitectureDecisionId, setActiveArchitectureDecisionId] =
    useState<string | null>(null);
  const [activeWorkExperienceIndex, setActiveWorkExperienceIndex] = useState(0);

  const activeProjectPanel = projectPanels.find(
    (panel) => panel.key === activeRightPanelKey,
  );
  const activeUtilityPanel = utilityPanels.find(
    (panel) => panel.key === activeRightPanelKey,
  );

  const activeRightPanel =
    activeProjectPanel ?? activeUtilityPanel ?? projectPanels[0];

  const activeArchitectureDecision =
    communicationProfilerArchitectureDecisions.find(
      (decision) => decision.id === activeArchitectureDecisionId,
    ) ?? null;

  const handleRightPanelChange = (nextPanelKey: RightPanelKey) => {
    setActiveRightPanelKey(nextPanelKey);
    if (nextPanelKey !== "communication-profiler") {
      setActiveArchitectureDecisionId(null);
    }
  };

  return (
    <>
      <Separator
        className="col-start-1 col-end-3 row-start-2 row-end-3 px-3"
        variant="solid"
        color="rgba(88,116,168,0.72)"
        centerColor="rgba(229,184,88,0.78)"
        thickness={3}
        trackExtent="3.4rem"
        fadeEnds
        orientation="horizontal"
      />

      <HomeRightPanelSection
        activeRightPanel={activeRightPanel}
        activeProjectPanel={activeProjectPanel}
        activeWorkExperienceIndex={activeWorkExperienceIndex}
        onWorkExperienceSelect={setActiveWorkExperienceIndex}
        onWorkExperienceAutoActivate={setActiveWorkExperienceIndex}
        onArchitectureDecisionOpen={setActiveArchitectureDecisionId}
      />

      <HomeNavigationSeparators
        activeRightPanelKey={activeRightPanelKey}
        onRightPanelChange={handleRightPanelChange}
      />

      <div className="grid grid-cols-[1.4fr_1fr] gap-4 col-start-1 col-end-2 row-start-3 row-end-4 m-3 min-h-0 max-h-full overflow-hidden">
        <HomeProfileSection />
        <HomeProfileHighlightsSection />
      </div>

      <ArchitectureDecisionModal
        decision={activeArchitectureDecision}
        onClose={() => setActiveArchitectureDecisionId(null)}
      />
    </>
  );
};
