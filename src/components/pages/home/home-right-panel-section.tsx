import {
  Button,
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@michmakow/application-platform-components";
import Image from "next/image";
import type { ReactNode } from "react";
import communicationProfilerPreview from "@/assets/cp.png";
import { ApplicationPlatformComponentsPanel } from "@/components/application-platform-components/application-platform-components-panel";
import { CommunicationProfilerPanel } from "@/components/communication-profiler/communication-profiler-panel";
import { WorkExperiencePanel } from "@/components/work-experience/work-experience-panel";
import {
  applicationPlatformComponentsCards,
  applicationPlatformComponentsDeliveryOutcomes,
  applicationPlatformComponentsOperatingCards,
  applicationPlatformComponentsProblemFraming,
  applicationPlatformComponentsSystemRole,
  applicationPlatformComponentsTechStack,
  applicationPlatformComponentsTechStackDescription,
  applicationPlatformComponentsWhyThisExists,
  communicationProfilerArchitectureDecisions,
  communicationProfilerArchitectureSummary,
  communicationProfilerFacts,
  communicationProfilerLightboxImages,
  communicationProfilerStatusPills,
  iconActionDescriptions,
  workExperience,
  workExperienceTimelineItems,
} from "@/mocks/home-page";
import type {
  IconActionLabel,
  ProjectActionButton,
  ProjectPanel,
  UtilityPanel,
} from "@/types/home-page.types";
import { HardSkillsIconCarousel } from "@/components/pages/home/hard-skills-icon-carousel";

interface HomeRightPanelSectionProps {
  activeRightPanel: ProjectPanel | UtilityPanel;
  activeProjectPanel?: ProjectPanel;
  activeWorkExperienceIndex: number;
  onWorkExperienceSelect: (index: number) => void;
  onWorkExperienceAutoActivate: (index: number) => void;
  onArchitectureDecisionOpen: (decisionId: string) => void;
}

const WORK_EXPERIENCE_SCROLL_CONTAINER_ID = "work-experience-scroll-container";

const LiveDemoActionIcon = () => (
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
    <path d="M15 3h6v6" />
    <path d="M10 14 21 3" />
    <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
  </svg>
);

const GithubActionIcon = () => (
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
    <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.2c3.26-.36 6.67-1.6 6.67-7.2a5.6 5.6 0 0 0-1.47-3.91 5.2 5.2 0 0 0-.09-3.77s-1.18-.36-3.87 1.48a13.38 13.38 0 0 0-7 0C5.53-.06 4.35.3 4.35.3A5.2 5.2 0 0 0 4.26 4a5.6 5.6 0 0 0-1.47 3.91c0 5.56 3.41 6.84 6.67 7.2A4.8 4.8 0 0 0 8.46 18v4" />
    <path d="M9 18c-4.51 2-5-2-7-2" />
  </svg>
);

const LinkedinActionIcon = () => (
  <svg
    aria-hidden
    viewBox="0 0 24 24"
    className="block h-full w-full"
    fill="currentColor"
  >
    <path d="M4.98 3.5a2.5 2.5 0 1 1 0 5 2.5 2.5 0 0 1 0-5ZM3 9.75h4v11.5H3zM9.4 9.75h3.8v1.57h.05c.53-1 1.83-2.07 3.77-2.07 4.03 0 4.78 2.66 4.78 6.12v6.38h-4v-5.66c0-1.35-.02-3.09-1.88-3.09-1.89 0-2.18 1.47-2.18 2.99v5.76h-4z" />
  </svg>
);

const EmailActionIcon = () => (
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

const iconActionIcons: Record<IconActionLabel, ReactNode> = {
  "Live Demo": <LiveDemoActionIcon />,
  GitHub: <GithubActionIcon />,
};

const isIconActionLabel = (label: string): label is IconActionLabel =>
  label === "Live Demo" || label === "GitHub";

const buildActionId = (keyPrefix: string, label: string) =>
  `${keyPrefix.toLowerCase().replace(/[^a-z0-9]+/g, "-")}-${label
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")}`;

const buildWorkExperienceEntryId = (index: number) =>
  `work-experience-entry-${index}`;

const buildWorkExperienceTitleId = (index: number) =>
  `work-experience-title-${index}`;

const scrollToWorkExperienceEntry = (entryId: string) => {
  const target = document.getElementById(entryId);
  if (!target) {
    return;
  }

  const container = document.getElementById(WORK_EXPERIENCE_SCROLL_CONTAINER_ID);
  if (container) {
    const containerRect = container.getBoundingClientRect();
    const targetRect = target.getBoundingClientRect();
    const top = container.scrollTop + (targetRect.top - containerRect.top) - 25;

    container.scrollTo({
      top,
      behavior: "smooth",
    });
    return;
  }

  target.scrollIntoView({
    behavior: "smooth",
    block: "start",
  });
};

const openProjectActionLink = (href: string) => {
  if (href.startsWith("http")) {
    window.open(href, "_blank", "noreferrer,noopener");
    return;
  }

  window.location.assign(href);
};

const renderProjectIconActionButton = (
  action: ProjectActionButton,
  keyPrefix: string,
  className = "w-5 h-5",
) => {
  if (!isIconActionLabel(action.label)) {
    return null;
  }

  const variantClass =
    action.variant === "primary"
      ? "text-amber-100"
      : action.variant === "secondary"
        ? "text-slate-100"
        : "text-sky-100/90";

  return (
    <button
      key={`${keyPrefix}-${action.label}`}
      id={buildActionId(keyPrefix, action.label)}
      type="button"
      aria-label={iconActionDescriptions[action.label]}
      title={action.label}
      className={`inline-flex cursor-pointer items-center justify-center rounded-full transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-amber-300/50 ${variantClass} ${className}`}
      onClick={() => openProjectActionLink(action.href)}
    >
      {iconActionIcons[action.label]}
    </button>
  );
};

const renderProjectActionButton = (
  action: ProjectActionButton,
  keyPrefix: string,
) => {
  const iconAction = renderProjectIconActionButton(action, keyPrefix);
  if (iconAction) {
    return iconAction;
  }

  return (
    <Button
      key={`${keyPrefix}-${action.label}`}
      href={action.href}
      variant={action.variant}
      size="sm"
      target={action.href.startsWith("http") ? "_blank" : undefined}
      rel={action.href.startsWith("http") ? "noreferrer noopener" : undefined}
    >
      {action.label}
    </Button>
  );
};

const renderContactIconActionButton = (
  action: ProjectActionButton,
  keyPrefix: string,
) => {
  const icon =
    action.label === "LinkedIn"
      ? <LinkedinActionIcon />
      : action.label === "Email"
        ? <EmailActionIcon />
        : action.label === "GitHub"
          ? <GithubActionIcon />
          : null;
  if (!icon) {
    return null;
  }

  return (
    <button
      key={`${keyPrefix}-${action.label}`}
      type="button"
      aria-label={action.label}
      title={action.label}
      className="inline-flex h-14 w-14 cursor-pointer items-center justify-center rounded-full border border-sky-300/35 bg-slate-900/80 p-3 text-sky-100 transition-colors hover:border-amber-300/55 hover:text-amber-100 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-amber-300/50"
      onClick={() => openProjectActionLink(action.href)}
    >
      <span className="block h-7 w-7 [&>svg]:h-full [&>svg]:w-full">
        {icon}
      </span>
    </button>
  );
};

export const HomeRightPanelSection = ({
  activeRightPanel,
  activeProjectPanel,
  activeWorkExperienceIndex,
  onWorkExperienceSelect,
  onWorkExperienceAutoActivate,
  onArchitectureDecisionOpen,
}: HomeRightPanelSectionProps) => {
  const communicationProfilerPanelActive =
    activeProjectPanel?.key === "communication-profiler";
  const archoraPanelActive = activeProjectPanel?.key === "archora";
  const applicationPlatformComponentsPanelActive =
    activeProjectPanel?.key === "application-platform-components";
  const contactPanelActive = activeRightPanel.key === "contact";
  const workExperiencePanelActive = activeRightPanel.key === "work-experience";

  const activeProjectPanelIconActions = (activeProjectPanel?.actions ?? []).filter(
    (action) => isIconActionLabel(action.label),
  );

  const showHeaderProjectIconPill = activeProjectPanelIconActions.length > 0;
  const footerActions = contactPanelActive
    ? []
    : showHeaderProjectIconPill
      ? activeRightPanel.actions.filter(
          (action) => !isIconActionLabel(action.label),
        )
      : activeRightPanel.actions;

  return (
    <section className="col-start-3 col-end-4 row-start-1 row-end-4 flex h-full min-h-0 flex-col py-3 pr-3">
      <Card
        border
        glow
        rounded="3xl"
        className="relative ml-7 mr-3 flex min-h-0 flex-1 flex-col overflow-hidden border-slate-700/70 bg-slate-900/80"
      >
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(56,189,248,0.16),rgba(2,6,23,0.1)_45%,rgba(2,6,23,0.92)_80%)] overflow-y-auto" />
        <CardHeader className="relative space-y-4 px-8 pt-8">
          {communicationProfilerPanelActive ? (
            <Image
              src={communicationProfilerPreview}
              alt="Communication Profiler preview"
              width={750}
              height={375}
              sizes="750px"
              className="pointer-events-none absolute right-5 -top-20 h-auto w-130 max-w-none select-none object-contain drop-shadow-[0_16px_34px_rgba(2,6,23,0.5)]"
            />
          ) : null}
          <p className="text-xs uppercase tracking-[0.24em] text-sky-200/75">
            {activeRightPanel.eyebrow}
          </p>
          <div className="relative z-10 flex flex-wrap items-center gap-3">
            <CardTitle className="text-3xl text-slate-50">
              {activeRightPanel.title}
            </CardTitle>
            {showHeaderProjectIconPill ? (
              <div className="flex w-auto justify-center gap-1 rounded-full border border-amber-300/40 bg-slate-950/85">
                {activeProjectPanelIconActions.map((action) =>
                  renderProjectIconActionButton(
                    action,
                    activeProjectPanel?.key ?? activeRightPanel.key,
                    "h-12 w-12 p-3 border-none hover:bg-amber-300/20",
                  ),
                )}
              </div>
            ) : null}
          </div>
          <CardDescription className="relative z-10 text-base leading-7 text-slate-300/90">
            {activeRightPanel.subtitle}
          </CardDescription>
          {applicationPlatformComponentsPanelActive ? (
            <div className="relative z-10 space-y-1">
              <p className="max-w-4xl text-sm leading-7 text-amber-100/90">
                {applicationPlatformComponentsWhyThisExists}
              </p>
              <p className="max-w-4xl text-sm leading-7 text-slate-200/90">
                {applicationPlatformComponentsProblemFraming}
              </p>
            </div>
          ) : null}
        </CardHeader>
        <CardContent
          id={WORK_EXPERIENCE_SCROLL_CONTAINER_ID}
          className="relative flex min-h-0 flex-1 flex-col overflow-y-auto px-8 pb-7 pt-2 text-sm text-slate-100/90 sm:text-base"
        >
          <p className="leading-8">{activeRightPanel.description}</p>
          {workExperiencePanelActive ? (
            <WorkExperiencePanel
              workExperience={workExperience}
              workExperienceTimelineItems={workExperienceTimelineItems}
              activeWorkExperienceIndex={activeWorkExperienceIndex}
              onWorkExperienceSelect={(index) => {
                onWorkExperienceSelect(index);
                scrollToWorkExperienceEntry(buildWorkExperienceTitleId(index));
              }}
              onWorkExperienceAutoActivate={onWorkExperienceAutoActivate}
              buildWorkExperienceEntryId={buildWorkExperienceEntryId}
              buildWorkExperienceTitleId={buildWorkExperienceTitleId}
            />
          ) : null}
          {!workExperiencePanelActive ? (
            <>
              {applicationPlatformComponentsPanelActive ? (
                <ApplicationPlatformComponentsPanel
                  systemRole={applicationPlatformComponentsSystemRole}
                  capabilityCards={applicationPlatformComponentsCards}
                  operatingCards={applicationPlatformComponentsOperatingCards}
                  deliveryOutcomes={applicationPlatformComponentsDeliveryOutcomes}
                  techStackDescription={applicationPlatformComponentsTechStackDescription}
                  techStack={applicationPlatformComponentsTechStack}
                />
              ) : contactPanelActive ? (
                <section className="mt-6 space-y-3">
                  <div className="flex flex-wrap items-center gap-3">
                    {activeRightPanel.actions.map((action) =>
                      renderContactIconActionButton(action, activeRightPanel.key),
                    )}
                  </div>
                </section>
              ) : (
                <ul className="mt-6 space-y-3">
                  {activeRightPanel.highlights.map((highlight) => (
                    <li
                      key={`${activeRightPanel.key}-${highlight}`}
                      className="flex items-start gap-3 rounded-xl border border-slate-700/70 bg-slate-950/60 px-4 py-3 leading-7"
                    >
                      <span className="mt-[0.6rem] h-2 w-2 shrink-0 rounded-full bg-amber-300/85" />
                      <span>{highlight}</span>
                    </li>
                  ))}
                </ul>
              )}
              {archoraPanelActive ? (
                <div className="mt-6 flex min-h-32 items-center justify-center">
                  <div className="w-full rounded-full border border-amber-100/30 text-center bg-[linear-gradient(135deg,rgba(245,208,115,0.98),rgba(229,184,88,0.92),rgba(194,143,43,0.95))] px-6 py-2 text-xs font-semibold uppercase tracking-[0.16em] text-[#2b1b04] shadow-[0_10px_24px_rgba(229,184,88,0.32),inset_0_0_0_1px_rgba(255,244,214,0.42)]">
                    Comming soon !
                  </div>
                </div>
              ) : null}
              {communicationProfilerPanelActive ? (
                <CommunicationProfilerPanel
                  statusPills={communicationProfilerStatusPills}
                  facts={communicationProfilerFacts}
                  architectureSummary={communicationProfilerArchitectureSummary}
                  architectureDecisions={communicationProfilerArchitectureDecisions}
                  lightboxImages={communicationProfilerLightboxImages}
                  onArchitectureDecisionOpen={onArchitectureDecisionOpen}
                />
              ) : null}
            </>
          ) : null}
        </CardContent>
        <CardFooter className="relative flex flex-wrap gap-3 px-8 pb-8 pt-0">
          {footerActions.map((action) =>
            renderProjectActionButton(action, activeRightPanel.key),
          )}
        </CardFooter>
      </Card>
      <div className="mx-24 mt-3 shrink-0">
        <HardSkillsIconCarousel />
      </div>
    </section>
  );
};

