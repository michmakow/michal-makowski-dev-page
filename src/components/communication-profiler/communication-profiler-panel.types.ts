import type {
  CommunicationProfilerArchitectureDecision,
  CommunicationProfilerFact,
  CommunicationProfilerLightboxImage,
} from "@/types/home-page.types";

export interface CommunicationProfilerPanelProps {
  statusPills: readonly string[];
  facts: readonly CommunicationProfilerFact[];
  architectureSummary: readonly string[];
  architectureDecisions: readonly CommunicationProfilerArchitectureDecision[];
  lightboxImages: readonly CommunicationProfilerLightboxImage[];
  onArchitectureDecisionOpen: (decisionId: string) => void;
}
