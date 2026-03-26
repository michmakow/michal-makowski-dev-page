"use client";

import { Card, CardContent } from "@michmakow/application-platform-components";
import Image from "next/image";
import { useEffect, useState } from "react";
import { createPortal } from "react-dom";
import roleSectionIcon from "@/assets/modal-icons/brain.png";
import howIUseItSectionIcon from "@/assets/modal-icons/gear.png";
import impactSectionIcon from "@/assets/modal-icons/rocket.png";
import {
  HARD_SKILLS_CAROUSEL_GAP_PX,
  HARD_SKILLS_CAROUSEL_ICON_INNER_SIZE_PX,
  HARD_SKILLS_CAROUSEL_ICON_SIZE_PX,
  hardSkillCarouselIcons,
  hardSkillModalContentById,
  toolingSkillIds,
} from "@/mocks/home-page";
import type {
  HardSkillCarouselIcon,
  HardSkillModalContent,
} from "@/types/home-page.types";

const getHardSkillModalContent = (
  skill: HardSkillCarouselIcon,
): HardSkillModalContent =>
  hardSkillModalContentById[skill.id] ?? {
    role: `${skill.label} is a core part of my stack architecture and delivery model.`,
    how: `I use ${skill.label} operationally in production-oriented workflows with explicit technical standards.`,
    impact:
      "It improves delivery reliability, lowers execution risk, and supports faster iteration.",
  };

export const HardSkillsIconCarousel = () => {
  const [activeSkill, setActiveSkill] = useState<HardSkillCarouselIcon | null>(
    null,
  );
  const carouselItems: HardSkillCarouselIcon[] = [
    ...hardSkillCarouselIcons,
    ...hardSkillCarouselIcons,
  ];
  const activeSkillModalContent = activeSkill
    ? getHardSkillModalContent(activeSkill)
    : null;
  const activeSkillTypeLabel =
    activeSkill && toolingSkillIds.has(activeSkill.id) ? "Tool" : "Technology";
  const activeSkillModalSections = activeSkill
    ? [
        {
          key: "role",
          title: "1. ROLE",
          icon: roleSectionIcon,
          content: activeSkillModalContent?.role ?? "",
          containerClassName: "border-sky-300/25 bg-slate-900/75",
          titleClassName: "text-sky-200/85",
        },
        {
          key: "how-i-use-it",
          title: "2. HOW I USE IT",
          icon: howIUseItSectionIcon,
          content: activeSkillModalContent?.how ?? "",
          containerClassName: "border-slate-700/75 bg-slate-900/75",
          titleClassName: "text-slate-100/90",
        },
        {
          key: "impact",
          title: "3. IMPACT",
          icon: impactSectionIcon,
          content: activeSkillModalContent?.impact ?? "",
          containerClassName: "border-amber-300/30 bg-slate-900/80",
          titleClassName: "text-amber-200/90",
        },
      ]
    : [];

  useEffect(() => {
    if (!activeSkill) {
      return;
    }

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setActiveSkill(null);
      }
    };

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", onKeyDown);

    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener("keydown", onKeyDown);
    };
  }, [activeSkill]);

  return (
    <>
      <Card
        border
        rounded="2xl"
        className="relative overflow-hidden border-none bg-slate-950/40 my-5"
      >
        <CardContent className="relative px-3 py-3">
          <div
            className={`hard-skills-carousel-track relative z-10 flex w-max items-center ${
              activeSkill ? "hard-skills-carousel-track--paused" : ""
            }`}
            style={{
              gap: `${HARD_SKILLS_CAROUSEL_GAP_PX}px`,
            }}
          >
            {carouselItems.map((skill, index) => (
              <div
                key={`${skill.id}-${index}`}
                className="shrink-0"
                style={{
                  width: `${HARD_SKILLS_CAROUSEL_ICON_SIZE_PX}px`,
                  height: `${HARD_SKILLS_CAROUSEL_ICON_SIZE_PX}px`,
                }}
              >
                <button
                  id={`hard-skill-${skill.id}-${index}`}
                  type="button"
                  aria-label={`Open ${skill.label} details`}
                  title={skill.label}
                  className={`inline-flex h-full w-full cursor-pointer items-center justify-center rounded-full border-none shadow-[0_0_18px_rgba(2,6,23,0.35)] transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-amber-300/50 ${skill.toneClass}`}
                  onClick={() => setActiveSkill(skill)}
                >
                  <Image
                    src={skill.icon}
                    alt={`${skill.label} icon`}
                    width={HARD_SKILLS_CAROUSEL_ICON_INNER_SIZE_PX}
                    height={HARD_SKILLS_CAROUSEL_ICON_INNER_SIZE_PX}
                    loading="eager"
                    unoptimized
                    sizes={`${HARD_SKILLS_CAROUSEL_ICON_INNER_SIZE_PX}px`}
                    className="h-[38px] w-[38px] object-contain"
                  />
                </button>
              </div>
            ))}
          </div>
          <div className="pointer-events-none absolute inset-y-0 left-0 z-20 w-20 bg-gradient-to-r from-slate-950/95 via-slate-950/70 to-transparent backdrop-blur-[2px]" />
          <div className="pointer-events-none absolute inset-y-0 right-0 z-20 w-20 bg-gradient-to-l from-slate-950/95 via-slate-950/70 to-transparent backdrop-blur-[2px]" />
        </CardContent>
      </Card>

      {activeSkill && typeof document !== "undefined"
        ? createPortal(
            <div
              className="fixed inset-0 z-[260] grid place-items-center bg-slate-950/75 p-4 backdrop-blur-sm"
              onClick={() => setActiveSkill(null)}
            >
              <article
                role="dialog"
                aria-modal="true"
                aria-labelledby={`hard-skill-title-${activeSkill.id}`}
                className="relative h-fit w-full max-w-[95vw] overflow-y-auto rounded-3xl border border-slate-600/80 bg-slate-950/95 p-4 shadow-[0_30px_90px_rgba(2,6,23,0.75)] md:max-w-2xl md:p-6"
                onClick={(event) => event.stopPropagation()}
              >
                <button
                  type="button"
                  onClick={() => setActiveSkill(null)}
                  aria-label="Close technology modal"
                  className="absolute right-4 top-4 inline-flex h-8 w-8 cursor-pointer items-center justify-center rounded-full border border-slate-500/70 bg-slate-900/85 text-xs font-semibold text-slate-100 hover:border-slate-200/80"
                >
                  X
                </button>

                <div className="flex items-center gap-4 pr-14">
                  <div
                    className={`flex h-20 w-20 shrink-0 items-center justify-center rounded-2xl border ${activeSkill.toneClass}`}
                  >
                    <Image
                      src={activeSkill.icon}
                      alt={`${activeSkill.label} icon`}
                      width={48}
                      height={48}
                      loading="eager"
                      unoptimized
                      sizes="48px"
                      className="object-contain"
                    />
                  </div>
                  <div className="min-w-0">
                    <p className="text-xs uppercase tracking-[0.2em] text-sky-200/70">
                      {activeSkillTypeLabel}
                    </p>
                    <h3
                      id={`hard-skill-title-${activeSkill.id}`}
                      className="mt-1 text-3xl font-semibold text-slate-50"
                    >
                      {activeSkill.label}
                    </h3>
                  </div>
                </div>

                <div className="mt-6 space-y-4">
                  {activeSkillModalSections.map((section) => (
                    <div
                      key={section.key}
                      className={`rounded-2xl border p-4 ${section.containerClassName}`}
                    >
                      <div className="flex items-center gap-3">
                        <div className="flex shrink-0 items-center justify-center">
                          <Image
                            src={section.icon}
                            alt=""
                            width={18}
                            height={18}
                            unoptimized
                            sizes="18px"
                            className="object-contain"
                          />
                        </div>
                        <div className="min-w-0">
                          <p
                            className={`text-xs font-semibold uppercase tracking-[0.14em] ${section.titleClassName}`}
                          >
                            {section.title}
                          </p>
                        </div>
                      </div>
                      <p className="mt-3 text-base leading-8 text-slate-200/90">
                        {section.content}
                      </p>
                    </div>
                  ))}
                </div>
              </article>
            </div>,
            document.body,
          )
        : null}
    </>
  );
};
