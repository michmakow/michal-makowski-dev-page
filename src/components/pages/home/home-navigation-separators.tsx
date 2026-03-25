import { Separator } from "@michmakow/application-platform-components";
import type { ReactNode } from "react";
import { projectPanels, utilityPanels } from "@/mocks/home-page";
import type {
  ProjectPanelKey,
  RightPanelKey,
  UtilityPanelKey,
} from "@/types/home-page.types";

interface HomeNavigationSeparatorsProps {
  activeRightPanelKey: RightPanelKey;
  onRightPanelChange: (nextPanelKey: RightPanelKey) => void;
}

const ArchoraSplitterIcon = () => (
  <svg
    aria-hidden
    viewBox="0 0 24 24"
    className="block h-full w-full"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.8"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <rect x="3.5" y="3.5" width="8" height="8" rx="1.2" />
    <rect x="14.5" y="3.5" width="8" height="8" rx="1.2" />
    <rect x="9" y="15.5" width="8" height="8" rx="1.2" />
    <path d="M6.5 8.5v3h11v-3" />
    <path d="M12 11.5v4" />
  </svg>
);

const CommunicationProfilerSplitterIcon = () => (
  <svg
    aria-hidden
    viewBox="0 0 24 24"
    className="block h-full w-full"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.8"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="M4.5 5.5h15a2 2 0 0 1 2 2v7a2 2 0 0 1-2 2h-6l-4 3v-3h-5a2 2 0 0 1-2-2v-7a2 2 0 0 1 2-2Z" />
    <path d="M7 14h10" />
    <path d="M8.5 14v-2.3" />
    <path d="M11 14v-3.8" />
    <path d="M13.5 14v-1.4" />
    <path d="M16 14V9.6" />
  </svg>
);

const PlatformComponentsSplitterIcon = () => (
  <svg
    aria-hidden
    viewBox="0 0 24 24"
    className="block h-full w-full"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.8"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <rect x="3" y="3" width="8" height="8" rx="1.5" />
    <rect x="13" y="3" width="8" height="8" rx="1.5" />
    <rect x="3" y="13" width="8" height="8" rx="1.5" />
    <rect x="13" y="13" width="8" height="8" rx="1.5" />
  </svg>
);

const WorkExperienceSplitterIcon = () => (
  <svg
    aria-hidden
    viewBox="0 0 24 24"
    className="block h-full w-full"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.8"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <rect x="3" y="7" width="18" height="13" rx="2" />
    <path d="M9 7V5a1.8 1.8 0 0 1 1.8-1.8h2.4A1.8 1.8 0 0 1 15 5v2" />
    <path d="M3 12h18" />
  </svg>
);

const ContactSplitterIcon = () => (
  <svg
    aria-hidden
    viewBox="0 0 24 24"
    className="block h-full w-full"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.8"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <rect x="3" y="5" width="18" height="14" rx="2" />
    <path d="m4 7 8 6 8-6" />
  </svg>
);

const projectPanelIcons: Record<ProjectPanelKey, ReactNode> = {
  archora: <ArchoraSplitterIcon />,
  "communication-profiler": <CommunicationProfilerSplitterIcon />,
  "application-platform-components": <PlatformComponentsSplitterIcon />,
};

const utilityPanelIcons: Record<UtilityPanelKey, ReactNode> = {
  "work-experience": <WorkExperienceSplitterIcon />,
  contact: <ContactSplitterIcon />,
};

export const HomeNavigationSeparators = ({
  activeRightPanelKey,
  onRightPanelChange,
}: HomeNavigationSeparatorsProps) => (
  <>
    <Separator
      className="col-start-2 col-end-3 row-start-1 row-end-2 p-3"
      variant="icon"
      color="rgba(88,116,168,0.72)"
      centerColor="rgba(229,184,88,0.78)"
      thickness={3}
      trackExtent="3.4rem"
      fadeEnds
      orientation="vertical"
      icons={projectPanels.map((panel) => ({
        kind: "icon-button",
        id: panel.key,
        icon: projectPanelIcons[panel.key],
        alt: panel.iconLabel,
        title: panel.iconTitle,
        description: panel.iconDescription,
        active: panel.key === activeRightPanelKey,
        variant: panel.key === activeRightPanelKey ? "solid" : "outline",
        size: "lg",
        className:
          panel.key === activeRightPanelKey
            ? "text-amber-200 p-1 h-10 w-10"
            : "text-sky-100/85 hover:text-sky-100 cursor-pointer p-1 h-10 w-10",
        onClick: () => onRightPanelChange(panel.key),
      }))}
    />

    <Separator
      className="col-start-2 col-end-3 row-start-2 row-end-4 p-3"
      variant="icon"
      color="rgba(88,116,168,0.72)"
      centerColor="rgba(229,184,88,0.78)"
      thickness={3}
      trackExtent="3.4rem"
      fadeEnds
      orientation="vertical"
      icons={utilityPanels.map((panel) => ({
        kind: "icon-button",
        id: panel.key,
        icon: utilityPanelIcons[panel.key],
        alt: panel.iconLabel,
        title: panel.iconTitle,
        description: panel.iconDescription,
        active: panel.key === activeRightPanelKey,
        variant: panel.key === activeRightPanelKey ? "solid" : "outline",
        size: "lg",
        className:
          panel.key === activeRightPanelKey
            ? "text-amber-200 p-1 h-10 w-10"
            : "text-sky-100/85 hover:text-sky-100 cursor-pointer p-1 h-10 w-10",
        onClick: () => onRightPanelChange(panel.key),
      }))}
    />
  </>
);
