import type {
  ApplicationPlatformComponentsCapabilityCard,
  ApplicationPlatformComponentsOperatingCard,
  ApplicationPlatformComponentsTechStackGroup,
} from "@/types/home-page.types";

export interface ApplicationPlatformComponentsPanelProps {
  systemRole: string;
  capabilityCards: readonly ApplicationPlatformComponentsCapabilityCard[];
  operatingCards: readonly ApplicationPlatformComponentsOperatingCard[];
  deliveryOutcomes: string;
  techStackDescription: string;
  techStack: readonly ApplicationPlatformComponentsTechStackGroup[];
}
