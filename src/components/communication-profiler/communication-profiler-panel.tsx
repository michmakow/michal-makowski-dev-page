import { PortalImageLightbox } from "@/components/portal-image-lightbox/portal-image-lightbox";
import type { CommunicationProfilerPanelProps } from "@/components/communication-profiler/communication-profiler-panel.types";

export const CommunicationProfilerPanel = ({
  statusPills,
  facts,
  architectureSummary,
  architectureDecisions,
  lightboxImages,
  onArchitectureDecisionOpen,
}: CommunicationProfilerPanelProps) => {
  return (
    <>
      <div className="mt-6 space-y-4 rounded-2xl border border-sky-300/30 bg-slate-950/70 p-4">
        <div className="flex flex-wrap gap-2">
          {statusPills.map((status) => (
            <span
              key={status}
              className="rounded-full border border-sky-300/35 bg-sky-500/10 px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.12em] text-sky-100"
            >
              {status}
            </span>
          ))}
        </div>

        <div className="grid gap-3 sm:grid-cols-2">
          {facts.map((fact) => (
            <div
              key={fact.label}
              className="rounded-xl border border-slate-700/70 bg-slate-900/80 px-3 py-3"
            >
              <p className="text-[11px] font-semibold uppercase tracking-[0.12em] text-amber-200/90">
                {fact.label}
              </p>
              <p className="mt-1 text-sm leading-6 text-slate-200/90">{fact.value}</p>
            </div>
          ))}
        </div>

        <ul className="space-y-2 p-3">
          {architectureSummary.map((item) => (
            <li key={item} className="flex items-start gap-3">
              <span className="mt-[0.45rem] h-2 w-2 shrink-0 rounded-full bg-amber-300/80" />
              <span className="text-sm leading-6 text-slate-200/90">{item}</span>
            </li>
          ))}
        </ul>
      </div>

      <section className="mt-6 space-y-3">
        <h4 className="text-xs font-semibold uppercase tracking-[0.14em] text-sky-200/85">
          Architecture Decisions
        </h4>
        <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-3">
          {architectureDecisions.map((decision) => (
            <button
              key={decision.id}
              type="button"
              onClick={() => onArchitectureDecisionOpen(decision.id)}
              className="flex h-full w-full cursor-pointer flex-col rounded-2xl border border-slate-700/70 bg-slate-950/65 px-4 py-4 text-left transition-colors hover:border-amber-300/45 hover:bg-slate-900/80"
            >
              <p className="text-sm font-semibold leading-6 text-slate-50">
                {decision.title}
              </p>
              <div className="mt-2 flex flex-1 items-center">
                <p className="text-sm leading-6 text-slate-200/85">
                  {decision.description}
                </p>
              </div>
              <div className="mt-3 flex flex-wrap gap-1.5 border-t border-slate-700/60 pt-2">
                {decision.tags.map((tag) => (
                  <span
                    key={`${decision.id}-${tag}`}
                    className="rounded-full border border-amber-300/35 bg-amber-300/12 px-1.5 py-0.5 text-[9px] font-semibold uppercase tracking-[0.08em] text-amber-100/90"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </button>
          ))}
        </div>
      </section>

      <section className="mt-6 space-y-3">
        <h4 className="text-xs font-semibold uppercase tracking-[0.14em] text-sky-200/85">
          Application previews
        </h4>
        <div className="grid w-full grid-cols-2 gap-3 lg:grid-cols-3">
          {lightboxImages.map((image) => (
            <PortalImageLightbox
              key={image.id}
              src={image.src}
              alt={image.alt}
              hint={image.hint}
              className="h-48 w-full object-cover"
              thumbnailSizes="(max-width: 1024px) 45vw, 360px"
            />
          ))}
        </div>
      </section>
    </>
  );
};
