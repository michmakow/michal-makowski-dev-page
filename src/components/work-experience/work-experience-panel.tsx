"use client";

import { Separator } from "@michmakow/application-platform-components";
import Image from "next/image";
import { useEffect, useRef } from "react";
import type { WorkExperiencePanelProps } from "@/components/work-experience/work-experience-panel.types";

export const WorkExperiencePanel = ({
  workExperience,
  workExperienceTimelineItems,
  activeWorkExperienceIndex,
  onWorkExperienceSelect,
  onWorkExperienceAutoActivate,
  buildWorkExperienceEntryId,
  buildWorkExperienceTitleId,
}: WorkExperiencePanelProps) => {
  const lastAutoActivatedIndexRef = useRef<number>(activeWorkExperienceIndex);

  useEffect(() => {
    lastAutoActivatedIndexRef.current = activeWorkExperienceIndex;
  }, [activeWorkExperienceIndex]);

  useEffect(() => {
    const container = document.getElementById("work-experience-scroll-container");
    if (!container) {
      return;
    }

    const resolveClosestEntryIndex = () => {
      const containerTop = container.getBoundingClientRect().top;
      const anchorOffset = 140;
      let closestIndex = 0;
      let closestDistance = Number.POSITIVE_INFINITY;

      workExperience.forEach((_, index) => {
        const entry = document.getElementById(buildWorkExperienceEntryId(index));
        if (!entry) {
          return;
        }

        const entryTop = entry.getBoundingClientRect().top - containerTop;
        const distance = Math.abs(entryTop - anchorOffset);

        if (distance < closestDistance) {
          closestDistance = distance;
          closestIndex = index;
        }
      });

      return closestIndex;
    };

    const syncActiveEntry = () => {
      const nextIndex = resolveClosestEntryIndex();
      if (lastAutoActivatedIndexRef.current === nextIndex) {
        return;
      }

      lastAutoActivatedIndexRef.current = nextIndex;
      onWorkExperienceAutoActivate(nextIndex);
    };

    let frameId = 0;
    const handleScroll = () => {
      cancelAnimationFrame(frameId);
      frameId = window.requestAnimationFrame(syncActiveEntry);
    };

    container.addEventListener("scroll", handleScroll, { passive: true });
    window.addEventListener("resize", handleScroll);

    handleScroll();

    return () => {
      cancelAnimationFrame(frameId);
      container.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", handleScroll);
    };
  }, [
    buildWorkExperienceEntryId,
    onWorkExperienceAutoActivate,
    workExperience,
  ]);

  return (
    <div className="mt-6 grid h-fit w-full grid-cols-[48px_minmax(0,1fr)] items-start gap-4 md:grid-cols-[76px_minmax(0,1fr)]">
      <div className="sticky top-14 self-start">
        <Separator
          className="h-200 px-1"
          variant="icon"
          color="rgba(88,116,168,0.72)"
          centerColor="rgba(229,184,88,0.78)"
          thickness={3}
          trackExtent="3.4rem"
          fadeEnds
          orientation="vertical"
          icons={workExperience.map((role, index) => {
            const timelineItem = workExperienceTimelineItems[index];
            const company = timelineItem?.company ?? role.title;
            const shortLabel = timelineItem?.shortLabel ?? `${index + 1}`;
            const badgeClassName =
              timelineItem?.badgeClassName ??
              "border-slate-300/45 bg-slate-500/20 text-slate-100";
            const active = index === activeWorkExperienceIndex;

            return {
              kind: "icon-button" as const,
              id: `work-experience-timeline-${index}`,
              icon: (
                <span
                  aria-hidden
                  className={`inline-flex h-12 w-12 items-center justify-center rounded-full border text-[20px] font-semibold uppercase tracking-[0.08em] transition-shadow ${
                    active
                      ? "shadow-[0_0_14px_rgba(229,184,88,0.55),0_0_28px_rgba(229,184,88,0.35)]"
                      : "hover:shadow-[0_0_12px_rgba(229,184,88,0.45),0_0_22px_rgba(229,184,88,0.28)]"
                  } ${badgeClassName}`}
                >
                  {shortLabel}
                </span>
              ),
              alt: `${company} timeline marker`,
              title: company,
              description: `Scroll to ${company} experience details`,
              active,
              variant: active ? "solid" : "outline",
              size: "lg" as const,
              className: active
                ? "text-amber-200 h-12 w-12 shadow-[0_0_14px_rgba(229,184,88,0.55),0_0_28px_rgba(229,184,88,0.35)]"
                : "text-sky-100/85 hover:text-sky-100 hover:shadow-[0_0_12px_rgba(229,184,88,0.45),0_0_22px_rgba(229,184,88,0.28)] cursor-pointer h-12 w-12 transition-shadow",
              onClick: () => onWorkExperienceSelect(index),
            };
          })}
        />
      </div>

      <div className="h-fit space-y-4">
        {workExperience.map((role, index) => (
          <article
            key={`${role.title}-${role.period}`}
            id={buildWorkExperienceEntryId(index)}
            className="mb-4 h-fit w-full rounded-2xl border border-slate-700/70 bg-slate-950/65 px-5 py-5 last:mb-0"
          >
            <div className="flex w-full flex-wrap items-start justify-between gap-3">
              <h4
                id={buildWorkExperienceTitleId(index)}
                className="text-[1.265625rem] font-semibold leading-tight text-slate-50"
              >
                {role.title}
              </h4>
              <span className="ml-auto rounded-full border border-amber-300/45 bg-amber-300/12 px-3 py-1 text-[0.84375rem] font-semibold uppercase tracking-[0.12em] text-amber-100">
                {role.period}
              </span>
            </div>

            <p className="mt-2 text-base text-sky-100/85">{role.scope}</p>

            <section className="mt-4 h-fit w-full rounded-2xl border border-slate-700/65 bg-slate-950/55 px-4 py-4">
              <p className="text-xs font-semibold uppercase tracking-[0.14em] text-amber-200/90">
                CONTEXT
              </p>
              <div className="mt-3 space-y-2">
                {role.context.map((item) => (
                  <p
                    key={`${role.title}-context-${item}`}
                    className="text-base leading-7 text-slate-200/90"
                  >
                    {item}
                  </p>
                ))}
              </div>
            </section>

            <section className="mt-4 h-fit w-full rounded-2xl border border-slate-700/65 bg-slate-950/55 px-4 py-4">
              <p className="text-xs font-semibold uppercase tracking-[0.14em] text-amber-200/90">
                IMPACT
              </p>
              <div className="mt-3 space-y-2">
                {role.impact.map((item) => (
                  <p
                    key={`${role.title}-impact-${item}`}
                    className="text-base leading-7 text-slate-200/90"
                  >
                    {item}
                  </p>
                ))}
              </div>
            </section>

            <section className="mt-4 h-fit w-full rounded-2xl border border-slate-700/65 bg-slate-950/55 px-4 py-4">
              <p className="text-xs font-semibold uppercase tracking-[0.14em] text-amber-200/90">
                TECH OVERVIEW
              </p>
              <div className="mt-3 flex flex-col gap-3">
                {role.technologyGroups
                  .filter((group) => group.icons.length > 0)
                  .map((group) => (
                    <div
                      key={`${role.title}-${group.label}`}
                      className="flex items-center gap-3"
                    >
                      <span className="min-w-[146px] text-xs font-semibold uppercase tracking-[0.14em] text-sky-200/85">
                        {group.label}:
                      </span>
                      <div className="flex flex-wrap items-center gap-3">
                        {group.icons.map((item) => (
                          <Image
                            key={`${role.title}-${group.label}-${item.label}`}
                            src={item.icon}
                            alt={`${item.label} icon`}
                            width={30}
                            height={30}
                            unoptimized
                            sizes="30px"
                            className="h-[30px] w-[30px] object-contain opacity-[0.78] saturate-[0.72] brightness-[0.95] contrast-[0.9]"
                            title={item.label}
                          />
                        ))}
                      </div>
                    </div>
                  ))}
              </div>
            </section>

            <section className="mt-4 h-fit w-full rounded-2xl border border-slate-700/65 bg-slate-950/55 px-4 py-4">
              <p className="text-xs font-semibold uppercase tracking-[0.14em] text-amber-200/90">
                KEY CONTRIBUTIONS
              </p>
              <ul className="mt-3 space-y-2 text-base leading-7 text-slate-200/90">
                {role.points.map((point) => (
                  <li key={`${role.title}-${point}`} className="flex gap-3">
                    <span className="mt-[0.55rem] h-2.5 w-2.5 shrink-0 rounded-full bg-amber-300/80" />
                    <span>{point}</span>
                  </li>
                ))}
              </ul>
            </section>
          </article>
        ))}
      </div>
    </div>
  );
};







