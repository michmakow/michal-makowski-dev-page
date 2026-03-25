"use client";

import Image from "next/image";
import { createPortal } from "react-dom";
import { useEffect } from "react";
import roleSectionIcon from "@/assets/modal-icons/brain.png";
import howIUseItSectionIcon from "@/assets/modal-icons/gear.png";
import impactSectionIcon from "@/assets/modal-icons/rocket.png";
import decisionSectionIcon from "@/assets/modal-icons/decision.png";
import modalPuzzleIcon from "@/assets/modal-icons/puzzle.png";
import modalScalesIcon from "@/assets/modal-icons/scales.png";
import type { ArchitectureDecisionModalProps } from "@/components/communication-profiler/architecture-decision-modal.types";

export const ArchitectureDecisionModal = ({
  decision,
  onClose,
}: ArchitectureDecisionModalProps) => {
  useEffect(() => {
    if (!decision) {
      return;
    }

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        onClose();
      }
    };

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", onKeyDown);

    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener("keydown", onKeyDown);
    };
  }, [decision, onClose]);

  if (!decision || typeof document === "undefined") {
    return null;
  }

  return createPortal(
    <div
      className="fixed inset-0 z-[280] grid place-items-center bg-slate-950/85 p-4 backdrop-blur-sm"
      onClick={onClose}
    >
      <article
        role="dialog"
        aria-modal="true"
        aria-labelledby={`adr-title-${decision.id}`}
        className="relative h-fit w-full max-w-3xl rounded-3xl border border-slate-600/80 bg-slate-950/95 p-6 shadow-[0_30px_90px_rgba(2,6,23,0.8)]"
        onClick={(event) => event.stopPropagation()}
      >
        <button
          type="button"
          onClick={onClose}
          aria-label="Close ADR modal"
          className="absolute right-4 top-4 inline-flex h-8 w-8 cursor-pointer items-center justify-center rounded-full border border-slate-500/70 bg-slate-900/85 text-xs font-semibold text-slate-100 hover:border-slate-200/80"
        >
          X
        </button>

        <div className="flex flex-wrap gap-2 pr-14">
          {decision.tags.map((tag) => (
            <span
              key={`modal-tag-${decision.id}-${tag}`}
              className="rounded-full border border-amber-300/35 bg-amber-300/12 px-2 py-1 text-[10px] font-semibold uppercase tracking-[0.1em] text-amber-100/90"
            >
              {tag}
            </span>
          ))}
        </div>

        <div className="mt-5 space-y-4">
          <section className="rounded-2xl border border-sky-300/25 bg-slate-900/75 p-4">
            <div className="flex items-center gap-2">
              <Image
                src={roleSectionIcon}
                alt="Title icon"
                width={16}
                height={16}
                unoptimized
                sizes="16px"
                className="object-contain"
              />
              <p className="text-xs font-semibold uppercase tracking-[0.12em] text-sky-200/85">
                Title
              </p>
            </div>
            <p
              id={`adr-title-${decision.id}`}
              className="mt-2 text-sm leading-6 text-slate-200/90"
            >
              {decision.modalTitle}
            </p>
          </section>

          <section className="rounded-2xl border border-violet-300/25 bg-slate-900/75 p-4">
            <div className="flex items-center gap-2">
              <Image
                src={modalPuzzleIcon}
                alt="Context icon"
                width={16}
                height={16}
                unoptimized
                sizes="16px"
                className="object-contain"
              />
              <p className="text-xs font-semibold uppercase tracking-[0.12em] text-violet-200/85">
                Context
              </p>
            </div>
            <p className="mt-2 text-sm leading-6 text-slate-200/90">
              {decision.modalContext}
            </p>
          </section>

          <section className="rounded-2xl border border-slate-700/75 bg-slate-900/75 p-4">
            <div className="flex items-center gap-2">
              <Image
                src={decisionSectionIcon}
                alt="Decision icon"
                width={16}
                height={16}
                unoptimized
                sizes="16px"
                className="object-contain"
              />
              <p className="text-xs font-semibold uppercase tracking-[0.12em] text-slate-100/90">
                Decision
              </p>
            </div>
            <p className="mt-2 text-sm leading-6 text-slate-200/90">
              {decision.modalDecision}
            </p>
          </section>

          <section className="rounded-2xl border border-cyan-300/30 bg-slate-900/80 p-4">
            <div className="flex items-center gap-2">
              <Image
                src={howIUseItSectionIcon}
                alt="Implemented with icon"
                width={16}
                height={16}
                unoptimized
                sizes="16px"
                className="object-contain"
              />
              <p className="text-xs font-semibold uppercase tracking-[0.12em] text-cyan-200/90">
                Implemented with
              </p>
            </div>
            <p className="mt-2 text-sm leading-6 text-slate-200/90">
              {decision.modalImplementedWith.join(" · ")}
            </p>
          </section>

          <section className="rounded-2xl border border-amber-300/30 bg-slate-900/80 p-4">
            <div className="flex items-center gap-2">
              <Image
                src={modalScalesIcon}
                alt="Trade-offs icon"
                width={16}
                height={16}
                unoptimized
                sizes="16px"
                className="object-contain"
              />
              <p className="text-xs font-semibold uppercase tracking-[0.12em] text-amber-200/90">
                Trade-offs
              </p>
            </div>
            <ul className="mt-2 space-y-1 text-sm leading-6 text-slate-200/90">
              {decision.modalTradeOffs.map((item) => (
                <li key={`${decision.id}-${item}`}>{item}</li>
              ))}
            </ul>
          </section>

          <section className="rounded-2xl border border-emerald-300/30 bg-slate-900/80 p-4">
            <div className="flex items-center gap-2">
              <Image
                src={impactSectionIcon}
                alt="Impact icon"
                width={16}
                height={16}
                unoptimized
                sizes="16px"
                className="object-contain"
              />
              <p className="text-xs font-semibold uppercase tracking-[0.12em] text-emerald-200/90">
                Impact
              </p>
            </div>
            <p className="mt-2 text-sm leading-6 text-slate-200/90">
              {decision.modalImpact}
            </p>
          </section>
        </div>
      </article>
    </div>,
    document.body,
  );
};
