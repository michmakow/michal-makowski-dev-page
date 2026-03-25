import type { CommunicationProfilerArchitectureDecision } from "@/types/home-page.types";

export interface ArchitectureDecisionModalProps {
  decision: CommunicationProfilerArchitectureDecision | null;
  onClose: () => void;
}
