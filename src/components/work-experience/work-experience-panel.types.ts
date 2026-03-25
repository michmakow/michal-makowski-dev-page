import type {
  WorkExperienceRole,
  WorkExperienceTimelineItem,
} from "@/types/work-experience.types";

export interface WorkExperiencePanelProps {
  workExperience: readonly WorkExperienceRole[];
  workExperienceTimelineItems: readonly WorkExperienceTimelineItem[];
  activeWorkExperienceIndex: number;
  onWorkExperienceSelect: (index: number) => void;
  onWorkExperienceAutoActivate: (index: number) => void;
  buildWorkExperienceEntryId: (index: number) => string;
  buildWorkExperienceTitleId: (index: number) => string;
}
