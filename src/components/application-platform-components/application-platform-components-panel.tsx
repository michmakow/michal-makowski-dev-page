import Image from "next/image";
import type { ApplicationPlatformComponentsPanelProps } from "@/components/application-platform-components/application-platform-components-panel.types";

export const ApplicationPlatformComponentsPanel = ({
  systemRole,
  capabilityCards,
  operatingCards,
  deliveryOutcomes,
  techStackDescription,
  techStack,
}: ApplicationPlatformComponentsPanelProps) => {
  return (
    <section className="mt-6 space-y-3">
      <article className="rounded-2xl border border-sky-300/35 bg-slate-950/75 px-4 py-4">
        <p className="text-[10px] font-semibold uppercase tracking-[0.16em] text-sky-200/90">
          Platform Role in System
        </p>
        <p className="mt-2 text-sm leading-7 text-slate-100/90">{systemRole}</p>
      </article>

      <p className="text-[10px] font-semibold uppercase tracking-[0.16em] text-sky-200/90">
        PLATFORM CAPABILITIES
      </p>

      <div className="grid gap-3 lg:grid-cols-2">
        {capabilityCards.map((card) => (
          <article
            key={card.title}
            className="relative overflow-hidden rounded-2xl border border-slate-700/70 bg-slate-950/70 px-4 py-4"
          >
            <div
              className={`pointer-events-none absolute inset-0 ${card.glowClassName}`}
            />
            <p className="relative text-[10px] font-semibold uppercase tracking-[0.16em] text-slate-300/85">
              {card.label}
            </p>
            <h4
              className={`relative mt-2 text-sm font-semibold uppercase tracking-[0.08em] ${card.titleClassName}`}
            >
              {card.title}
            </h4>
            <p className="relative mt-3 text-sm leading-6 text-slate-200/90">
              {card.description}
            </p>
          </article>
        ))}
      </div>

      <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
        {operatingCards.map((card) => (
          <article
            key={card.title}
            className={`rounded-2xl border px-4 py-4 ${card.className}`}
          >
            <h4 className="text-xs font-semibold uppercase tracking-[0.14em]">
              {card.title}
            </h4>
            <p className="mt-3 text-sm leading-6 text-slate-100/90">
              {card.description}
            </p>
          </article>
        ))}
      </div>

      <article className="rounded-2xl border border-amber-300/40 bg-amber-300/10 px-4 py-4 shadow-[0_10px_24px_rgba(229,184,88,0.2)]">
        <p className="text-[10px] font-semibold uppercase tracking-[0.16em] text-amber-100/90">
          BUSINESS IMPACT
        </p>
        <p className="mt-2 text-sm leading-7 text-slate-100/95">
          {deliveryOutcomes}
        </p>
      </article>

      <div className="rounded-2xl border border-amber-300/35 bg-[linear-gradient(180deg,rgba(15,23,42,0.92),rgba(2,6,23,0.88))] px-4 py-3 shadow-[0_10px_28px_rgba(2,6,23,0.35)]">
        <h4 className="text-xs font-semibold uppercase tracking-[0.16em] text-amber-100/90">
          TECH STACK
        </h4>
        <p className="mt-2 text-sm leading-6 text-slate-300/90">
          {techStackDescription}
        </p>
        <p className="mt-2 text-[10px] font-semibold uppercase tracking-[0.16em] text-sky-200/85">
          Stack role hint
        </p>
        <div className="mt-3 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
          {techStack.map((group) => (
            <section
              key={group.group}
              className="rounded-xl border border-slate-700/70 bg-slate-950/70 px-3 py-3"
            >
              <h5 className="text-[10px] font-semibold uppercase tracking-[0.16em] text-amber-100/90">
                {group.group}
              </h5>
              <div className="mt-2 space-y-2">
                {group.items.map((item) => (
                  <article
                    key={item.label}
                    className="flex items-start gap-2 rounded-lg border border-slate-700/70 bg-slate-900/85 px-2.5 py-2 shadow-[0_4px_10px_rgba(2,6,23,0.35)]"
                  >
                    <Image
                      src={item.icon}
                      alt={`${item.label} icon`}
                      width={16}
                      height={16}
                      className="mt-0.5 h-10 w-10 shrink-0 rounded-sm object-contain"
                    />
                    <div className="min-w-0 text-[11px] leading-5 text-slate-100">
                      <p className="font-semibold">{item.label}</p>
                      <p className="text-slate-300/90">{item.hint}</p>
                    </div>
                  </article>
                ))}
              </div>
            </section>
          ))}
        </div>
      </div>
    </section>
  );
};
