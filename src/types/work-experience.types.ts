import type { StaticImageData } from "next/image";

export type WorkExperienceTechnologyGroupLabel =
  | "PLATFORM"
  | "APPLICATION"
  | "ARCHITECTURE";

export interface WorkExperienceTechnologyIcon {
  label: string;
  icon: StaticImageData;
}

export interface WorkExperienceTechnologyGroup {
  label: WorkExperienceTechnologyGroupLabel;
  icons: readonly WorkExperienceTechnologyIcon[];
}

export interface WorkExperienceRole {
  title: string;
  period: string;
  scope: string;
  context: readonly string[];
  impact: readonly string[];
  points: readonly string[];
  technologyGroups: readonly WorkExperienceTechnologyGroup[];
}

export interface WorkExperienceTimelineItem {
  company: string;
  shortLabel: string;
  badgeClassName: string;
}
