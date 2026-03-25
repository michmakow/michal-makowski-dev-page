import type { StaticImageData } from "next/image";

export interface ProfilePill {
  label: string;
  description: string;
  className: string;
}

export interface ProfileHighlightCard {
  title: string;
  description: string;
  className: string;
}

export type ProjectPanelKey =
  | "archora"
  | "communication-profiler"
  | "application-platform-components";

export type UtilityPanelKey = "work-experience" | "contact";

export type RightPanelKey = ProjectPanelKey | UtilityPanelKey;

export interface ProjectPanelAction {
  label: string;
  href: string;
  variant: "primary" | "secondary" | "ghost";
}

export interface ProjectPanel {
  key: ProjectPanelKey;
  iconLabel: string;
  iconTitle: string;
  iconDescription: string;
  eyebrow: string;
  title: string;
  subtitle: string;
  description: string;
  highlights: readonly string[];
  actions: readonly ProjectPanelAction[];
}

export interface UtilityPanel {
  key: UtilityPanelKey;
  iconLabel: string;
  iconTitle: string;
  iconDescription: string;
  eyebrow: string;
  title: string;
  subtitle: string;
  description: string;
  highlights: readonly string[];
  actions: readonly ProjectPanelAction[];
}

export interface CommunicationProfilerFact {
  label: string;
  value: string;
}

export interface CommunicationProfilerArchitectureDecision {
  readonly id: string;
  readonly title: string;
  readonly description: string;
  readonly tags: readonly string[];
  readonly modalTitle: string;
  readonly modalContext: string;
  readonly modalDecision: string;
  readonly modalImplementedWith: readonly string[];
  readonly modalTradeOffs: readonly string[];
  readonly modalImpact: string;
}

export interface CommunicationProfilerLightboxImage {
  readonly id: string;
  readonly src: StaticImageData;
  readonly alt: string;
  readonly hint: string;
}

export interface ApplicationPlatformComponentsCapabilityCard {
  label: string;
  title: string;
  description: string;
  glowClassName: string;
  titleClassName: string;
}

export interface ApplicationPlatformComponentsOperatingCard {
  title: string;
  description: string;
  className: string;
}

export interface ApplicationPlatformComponentsTechStackItem {
  label: string;
  hint: string;
  icon: StaticImageData;
}

export interface ApplicationPlatformComponentsTechStackGroup {
  group: string;
  items: readonly ApplicationPlatformComponentsTechStackItem[];
}

export interface ProjectActionButton {
  readonly label: string;
  readonly href: string;
  readonly variant: "primary" | "secondary" | "ghost";
}

export type IconActionLabel = "Live Demo" | "GitHub";

export interface HardSkillCarouselIcon {
  readonly id: string;
  readonly label: string;
  readonly icon: StaticImageData;
  readonly toneClass: string;
  readonly description: string;
  readonly whyItMatters: string;
}

export interface HardSkillModalContent {
  role: string;
  how: string;
  impact: string;
}
