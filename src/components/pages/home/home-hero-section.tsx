import Image from "next/image";
import myPhoto from "@/assets/my_photo.png";

export const HomeHeroSection = () => (
  <section
    id="hero"
    className="overflow-x-hidden overflow-y-auto relative m-3 rounded-3xl border border-sky-900/60 bg-slate-950/80 shadow-[0_30px_120px_rgba(3,8,20,0.65)] lg:col-start-1 lg:col-end-2 lg:row-start-1 lg:row-end-2"
  >
    <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(135deg,rgba(56,189,248,0.08),rgba(2,6,23,0.68),rgba(229,184,88,0.08))]" />
    <div className="relative min-h-full grid items-start gap-6 p-5 lg:grid-cols-[1.2fr_0.8fr]">
      <div className="max-w-2xl">
        <p className="text-xs uppercase tracking-[0.28em] text-sky-200/70">
          DESIGNING SCALABLE SYSTEMS
        </p>
        <h1 className="mt-3 text-3xl font-semibold leading-tight text-slate-50">
          Michał Makowski
        </h1>
        <p className="mt-2 text-base font-medium text-sky-100/85">
          Platform Engineer | Distributed Systems | AI Integration
        </p>
        <p className="mt-4 text-base leading-6 text-slate-200/85">
          I design scalable cloud platforms, enabling reliable event-driven
          systems and AI-powered workflows for production-grade,
          high-throughput environments.
        </p>
        <ul className="mt-4 text-sm leading-5 text-slate-100/90">
          <li>
            • Designed event-driven AI processing architecture for asynchronous
            workloads improving scalability and resilience (Azure Service Bus,
            background workers)
          </li>
          <li>
            • Built multi-service cloud platform for production-grade, scalable
            systems with reliable deployment and maintainability (.NET 9, Clean
            Architecture, CI/CD, Bicep)
          </li>
          <li>
            • Implemented real-time LLM-based evaluation pipelines for automated
            data processing and system feedback
          </li>
        </ul>
      </div>
      <div className="relative z-10 overflow-hidden rounded-[26px] border border-amber-300/30 shadow-[0_18px_55px_rgba(2,6,23,0.55),0_0_18px_rgba(229,184,88,0.24),inset_0_0_0_1px_rgba(229,184,88,0.19)] h-150 w-full sm:h-96 lg:h-full">
        <Image
          src={myPhoto}
          alt="Michał Makowski portrait"
          fill
          preload
          sizes="(max-width: 640px) 90vw, (max-width: 1024px) 65vw, 248px"
          className="object-cover object-[52%_20%]"
        />
        <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(180deg,rgba(2,6,23,0)_62%,rgba(2,6,23,0.42)_100%)]" />
      </div>
    </div>
  </section>
);
