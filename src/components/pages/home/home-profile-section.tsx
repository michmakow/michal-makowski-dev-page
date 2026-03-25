import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@michmakow/application-platform-components";
import { profilePills } from "@/mocks/home-page";

export const HomeProfileSection = () => (
  <section id="profile" className="col-start-1 col-end-2 min-h-0">
    <Card
      border
      glow
      rounded="3xl"
      className="relative flex h-full min-h-0 flex-col overflow-hidden border-slate-700/70 bg-slate-950/80"
    >
      <div className="pointer-events-none absolute inset-x-0 top-0 h-24 bg-[linear-gradient(180deg,rgba(56,189,248,0.14),rgba(56,189,248,0))]" />
      <CardHeader className="relative space-y-5 pb-3">
        <p className="text-xs uppercase tracking-[0.24em] text-sky-200/75 pt-8 px-2">
          Profile
        </p>
        <CardTitle className="text-2xl text-slate-50 px-2">
          Platform-first engineering
        </CardTitle>
        <CardDescription className="max-w-xl text-base leading-7 text-slate-300/90 px-2">
          I design and own resilient cloud systems with clear architectural
          boundaries, reliable operations, and measurable impact.
        </CardDescription>
      </CardHeader>
      <CardContent className="relative flex-1 space-y-6 overflow-hidden p-6 pt-0 text-sm text-slate-100/90 sm:p-8 sm:pt-0 sm:text-base">
        <p>
          I operate at the intersection of platform engineering and product
          delivery, designing systems that remain stable under real production
          load.
        </p>
        <p>
          I take end-to-end ownership — from architecture and infrastructure to
          implementation and rollout — ensuring technical decisions directly
          impact reliability, performance, and delivery speed.
        </p>
        <TooltipProvider delayDuration={90}>
          <div className="flex flex-wrap gap-2">
            {profilePills.map((pill) => (
              <Tooltip key={pill.label}>
                <TooltipTrigger asChild>
                  <span tabIndex={0} className={`${pill.className} cursor-help`}>
                    {pill.label}
                  </span>
                </TooltipTrigger>
                <TooltipContent
                  side="right"
                  sideOffset={5}
                  className="max-w-[280px] border border-slate-700/80 bg-slate-950/95 text-xs leading-5 text-slate-100"
                >
                  {pill.description}
                </TooltipContent>
              </Tooltip>
            ))}
          </div>
        </TooltipProvider>
        <ul className="space-y-2">
          <li className="flex items-start gap-3">
            <span className="mt-[0.6rem] h-2 w-2 shrink-0 rounded-full bg-amber-300/80" />
            <span>
              Design systems around asynchronous, queue-driven processing to
              improve scalability and fault isolation
            </span>
          </li>
          <li className="flex items-start gap-3">
            <span className="mt-[0.6rem] h-2 w-2 shrink-0 rounded-full bg-amber-300/80" />
            <span>
              Apply reliability patterns (retries, idempotency, observability)
              as first-class design concerns
            </span>
          </li>
          <li className="flex items-start gap-3">
            <span className="mt-[0.6rem] h-2 w-2 shrink-0 rounded-full bg-amber-300/80" />
            <span>
              Own systems end-to-end, ensuring they operate effectively in
              production, not just in development
            </span>
          </li>
        </ul>
      </CardContent>
    </Card>
  </section>
);
