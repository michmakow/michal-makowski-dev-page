import roleFitExample from "@/assets/role_fit_example.png";
import roleProfileExample from "@/assets/role_profile_example.png";
import standardExample from "@/assets/standard_example.png";
import csharpIcon from "@/assets/skill-icons/csharp.svg";
import dotnetIcon from "@/assets/skill-icons/dotnet.svg";
import reactIcon from "@/assets/skill-icons/react.svg";
import typescriptIcon from "@/assets/skill-icons/typescript.svg";
import azureIcon from "@/assets/skill-icons/microsoftazure.svg";
import dockerIcon from "@/assets/skill-icons/docker.svg";
import kubernetesIcon from "@/assets/skill-icons/kubernetes.svg";
import postgresqlIcon from "@/assets/skill-icons/postgresql.svg";
import kafkaIcon from "@/assets/skill-icons/apachekafka.svg";
import githubIcon from "@/assets/skill-icons/github.svg";
import gitIcon from "@/assets/skill-icons/git.svg";
import webApiIcon from "@/assets/skill-icons/webapi.svg";
import html5Icon from "@/assets/skill-icons/html5.svg";
import cssIcon from "@/assets/skill-icons/css.svg";
import cssModulesIcon from "@/assets/skill-icons/cssmodules.svg";
import reduxIcon from "@/assets/skill-icons/redux.svg";
import reduxSagaIcon from "@/assets/skill-icons/reduxsaga.svg";
import reactRouterIcon from "@/assets/skill-icons/reactrouter.svg";
import jestIcon from "@/assets/skill-icons/jest.svg";
import jenkinsIcon from "@/assets/skill-icons/jenkins.svg";
import teamCityIcon from "@/assets/skill-icons/teamcity.svg";
import azureDevOpsIcon from "@/assets/skill-icons/azuredevops.svg";
import openShiftIcon from "@/assets/skill-icons/openshift.svg";
import gitlabIcon from "@/assets/skill-icons/gitlab.svg";
import msSqlIcon from "@/assets/skill-icons/mssql.svg";
import cosmosDbIcon from "@/assets/skill-icons/cosmosdb.svg";
import visualStudioIcon from "@/assets/skill-icons/visualstudio.svg";
import vscodeIcon from "@/assets/skill-icons/vscode.svg";
import windowsIcon from "@/assets/skill-icons/windows.svg";
import systemDesignMicroservicesIcon from "@/assets/skill-icons/system-design-microservices.svg";
import systemDesignMonolithIcon from "@/assets/skill-icons/system-design-monolith.svg";
import systemDesignEventDrivenIcon from "@/assets/skill-icons/system-design-event-driven.svg";
import systemDesignDistributedIcon from "@/assets/skill-icons/system-design-distributed.svg";
import rxjsIcon from "@/assets/skill-icons/rxjs.svg";
import storybookIcon from "@/assets/skill-icons/storybook.svg";
import shadcnUiIcon from "@/assets/skill-icons/shadcnui.png";
import tailwindCssIcon from "@/assets/skill-icons/tailwindcss.png";
import type {
  ApplicationPlatformComponentsCapabilityCard,
  ApplicationPlatformComponentsOperatingCard,
  ApplicationPlatformComponentsTechStackGroup,
  CommunicationProfilerArchitectureDecision,
  CommunicationProfilerFact,
  CommunicationProfilerLightboxImage,
  HardSkillCarouselIcon,
  HardSkillModalContent,
  IconActionLabel,
  ProfileHighlightCard,
  ProfilePill,
  ProjectPanel,
  UtilityPanel,
} from "@/types/home-page.types";
import type {
  WorkExperienceRole,
  WorkExperienceTimelineItem,
} from "@/types/work-experience.types";

export const profilePills: readonly ProfilePill[] = [
  {
    label: "Event-driven systems",
    description:
      "Asynchronous queues, decoupled workflows, and scalable message processing.",
    className:
      "rounded-full border border-cyan-300/45 bg-cyan-500/12 px-3 py-1 text-xs font-medium uppercase tracking-[0.12em] text-cyan-100",
  },
  {
    label: "Cloud platform design",
    description:
      "Service boundaries, deployment patterns, and production-oriented cloud architecture.",
    className:
      "rounded-full border border-indigo-300/45 bg-indigo-500/12 px-3 py-1 text-xs font-medium uppercase tracking-[0.12em] text-indigo-100",
  },
  {
    label: "AI integration",
    description:
      "LLM-based workflows embedded into real platform and data processing pipelines.",
    className:
      "rounded-full border border-emerald-300/45 bg-emerald-500/12 px-3 py-1 text-xs font-medium uppercase tracking-[0.12em] text-emerald-100",
  },
  {
    label: "SYSTEM RELIABILITY",
    description: "Retries, idempotency, observability, failure handling.",
    className:
      "rounded-full border border-amber-300/60 bg-amber-300/18 px-3 py-1 text-xs font-semibold uppercase tracking-[0.12em] text-amber-50 shadow-[0_0_16px_rgba(229,184,88,0.24)]",
  },
  {
    label: "DISTRIBUTED ARCHITECTURE",
    description:
      "Clear separation across APIs, workers, and services with explicit communication contracts.",
    className:
      "rounded-full border border-sky-300/45 bg-sky-500/12 px-3 py-1 text-xs font-medium uppercase tracking-[0.12em] text-sky-100",
  },
  {
    label: "PLATFORM ENABLEMENT",
    description:
      "Reusable foundations, standards, and tooling that accelerate delivery for teams.",
    className:
      "rounded-full border border-teal-300/45 bg-teal-500/12 px-3 py-1 text-xs font-medium uppercase tracking-[0.12em] text-teal-100",
  },
] as const;

export const profileHighlightCards: readonly ProfileHighlightCard[] = [
  {
    title: "Reliability-first",
    description:
      "Systems are designed to operate under real-world conditions, with explicit handling of failure, observability, and long-term operational stability.",
    className:
      "border-amber-300/45 bg-amber-300/35 shadow-[0_0_18px_rgba(229,184,88,0.14)] py-5 px-5",
  },
  {
    title: "Event-driven thinking",
    description:
      "I design systems around asynchronous, event-driven architectures and decoupled components to improve scalability, fault isolation, and system resilience.",
    className:
      "border-sky-300/45 bg-sky-500/35 shadow-[0_0_18px_rgba(56,189,248,0.14)] py-5 px-5",
  },
  {
    title: "End-to-end ownership",
    description:
      "From architecture to deployment and production support, I ensure systems are designed, delivered, and operated effectively in real-world environments.",
    className:
      "border-emerald-300/45 bg-emerald-500/35 shadow-[0_0_18px_rgba(16,185,129,0.12)] py-5 px-5",
  },
  {
    title: "Platform enablement",
    description:
      "I build platforms and tooling that enable teams to deliver faster, reduce operational friction, and scale systems consistently across the organization.",
    className:
      "border-purple-300/45 bg-purple-500/35 shadow-[0_0_18px_rgba(16,185,129,0.12)] py-5 px-5",
  },
] as const;

export const workExperience: readonly WorkExperienceRole[] = [
  {
    title: "Nexi / Netaxept — Software Engineer",
    period: "07.2023 – Present",
    scope: "Payments Platform · AI Integrations · Azure · React · .NET",
    points: [
      "Contribute to a high-scale payment platform supporting merchant integrations and high-volume transaction flows.",
      "Design and implement AI-driven capabilities (RAG, LLM workflows) to enhance internal systems and platform processes.",
      "Shape cloud-native architecture on Azure with focus on scalability, reliability, and operational resilience.",
      "Build frontend applications in React for product-facing platform features, including Click to Pay flows.",
      "Develop backend services in .NET, contributing to robust, production-grade platform functionality.",
      "Improve service communication patterns and system boundaries across distributed integration flows.",
      "Support data and operational workflows with focus on diagnostics, performance, and system reliability.",
      "Collaborate across teams to drive technical delivery, solution design, and adoption of new platform capabilities.",
    ],
    context: [
      "Working on a high-scale payment platform supporting merchant integrations and real-time transaction processing.",
      "The system operates in a distributed, cloud-native environment with strict requirements for reliability, performance, and security.",
      "A significant focus is placed on integrating AI-driven capabilities into internal platform workflows and operational processes.",
      "The platform supports complex integration flows across multiple services and external systems.",
      "Development takes place in a cross-functional environment with strong emphasis on scalability and production stability.",
    ],
    impact: [
      "Improves reliability and scalability of payment processing while enabling integration of AI-driven capabilities into core platform workflows.",
      "Supports high-volume transaction systems with stable, production-ready architecture.",
    ],
    technologyGroups: [
      {
        label: "PLATFORM",
        icons: [
          { label: "Azure", icon: azureIcon },
          { label: "Docker", icon: dockerIcon },
          { label: "Azure DevOps", icon: azureDevOpsIcon },
        ],
      },
      {
        label: "APPLICATION",
        icons: [
          { label: ".NET", icon: dotnetIcon },
          { label: "C#", icon: csharpIcon },
          { label: "Web API", icon: webApiIcon },
          { label: "React", icon: reactIcon },
          { label: "TypeScript", icon: typescriptIcon },
          { label: "CSS", icon: cssIcon },
          { label: "Tailwind CSS", icon: tailwindCssIcon },
          { label: "shadcn/ui", icon: shadcnUiIcon },
          { label: "MS SQL", icon: msSqlIcon },
          { label: "Cosmos DB", icon: cosmosDbIcon },
        ],
      },
      {
        label: "ARCHITECTURE",
        icons: [
          { label: "Microservices", icon: systemDesignMicroservicesIcon },
          {
            label: "Monolith (legacy / modular)",
            icon: systemDesignMonolithIcon,
          },
          { label: "Distributed systems", icon: systemDesignDistributedIcon },
        ],
      },
    ],
  },
  {
    period: "Independent SaaS Product",
    title: "CommunicationProfiler — Founder & System Architect",
    scope:
      "Cloud-native architecture · AI workflows · Azure · Event-driven systems",
    points: [
      "Designed and built an AI-driven communication intelligence platform as a cloud-native SaaS product.",
      "Architected an event-driven system on Azure using asynchronous processing and background workers.",
      "Isolated LLM-heavy workloads from user-facing APIs via queue-based processing to prevent latency propagation.",
      "Built multi-service .NET backend enabling scalable processing, real-time feedback, and extensibility.",
      "Implemented LLM-based evaluation and reporting workflows for automated analysis.",
      "Defined end-to-end system architecture, infrastructure, deployment model, and service boundaries.",
      "Established observability, deployment automation, and foundations for long-term scalability.",
      "Independently delivered and launched a live Open Beta product, owning full lifecycle from design to production.",
    ],
    context: [
      "An independent SaaS platform designed to analyze and structure human communication using AI.",
      "Built as a cloud-native, event-driven system to handle asynchronous processing and LLM-based workloads.",
      "The platform focuses on separating user-facing APIs from heavy evaluation pipelines to ensure performance and responsiveness.",
      "It combines real-time feedback mechanisms with scalable background processing and modular service architecture.",
      "Developed end-to-end, covering system design, infrastructure, implementation, and product delivery.",
    ],
    impact: [
      "Transforms complex communication analysis into a scalable, AI-driven platform with real-time feedback and structured insights.",
      "Demonstrates end-to-end system ownership, from architecture to production delivery.",
    ],
    technologyGroups: [
      {
        label: "PLATFORM",
        icons: [
          { label: "Azure", icon: azureIcon },
          { label: "Docker", icon: dockerIcon },
        ],
      },
      {
        label: "APPLICATION",
        icons: [
          { label: ".NET", icon: dotnetIcon },
          { label: "C#", icon: csharpIcon },
          { label: "Web API", icon: webApiIcon },
          { label: "React", icon: reactIcon },
          { label: "TypeScript", icon: typescriptIcon },
          { label: "CSS", icon: cssIcon },
          { label: "Tailwind CSS", icon: tailwindCssIcon },
          { label: "MS SQL", icon: msSqlIcon },
        ],
      },
      {
        label: "ARCHITECTURE",
        icons: [
          { label: "Microservices", icon: systemDesignMicroservicesIcon },
          {
            label: "Event-driven architecture",
            icon: systemDesignEventDrivenIcon,
          },
          { label: "Distributed systems", icon: systemDesignDistributedIcon },
        ],
      },
    ],
  },
  {
    title: "Millennium Bank — Full Stack Developer",
    period: "10.2022 – 06.2023",
    scope: "Enterprise Banking Platform · .NET · React",
    points: [
      "Contributed to development of an enterprise banking platform supporting complex internal workflows.",
      "Enabled scalable feature delivery across microservices-based systems using .NET and React.",
      "Designed backend services improving domain separation and service scalability.",
      "Contributed to micro-frontend architecture enabling parallel team delivery and independent deployments.",
      "Improved reliability of critical banking workflows through automated testing and engineering practices.",
      "Supported delivery standards, CI/CD processes, and code quality in a regulated environment.",
      "Delivered production enhancements and fixes under strict security and compliance constraints.",
    ],
    context: [
      "Internal enterprise banking platform supporting complex employee workflows across customer service and account operations.",
      "The system enables execution of critical processes such as card issuance, account management, and client data updates.",
      "Built using microservices and micro-frontend architecture to support scalability and parallel team delivery.",
      "Operates in a regulated environment with strong emphasis on security, reliability, and compliance.",
      "Development required maintaining consistency across distributed services and high-impact business workflows.",
    ],
    impact: [
      "Enables scalable delivery of internal banking workflows while maintaining reliability and compliance in a regulated environment.",
      "Improves development efficiency through modular architecture and parallel team workflows.",
    ],
    technologyGroups: [
      {
        label: "PLATFORM",
        icons: [
          { label: "Docker", icon: dockerIcon },
          { label: "Jenkins", icon: jenkinsIcon },
        ],
      },
      {
        label: "APPLICATION",
        icons: [
          { label: ".NET", icon: dotnetIcon },
          { label: "C#", icon: csharpIcon },
          { label: "Web API", icon: webApiIcon },
          { label: "React", icon: reactIcon },
          { label: "TypeScript", icon: typescriptIcon },
          { label: "HTML5", icon: html5Icon },
          { label: "MS SQL", icon: msSqlIcon },
        ],
      },
      {
        label: "ARCHITECTURE",
        icons: [{ label: "Microservices", icon: systemDesignMicroservicesIcon }],
      },
    ],
  },
  {
    title: "Alfavox — Full Stack Developer",
    period: "02.2022 – 10.2022",
    scope: "Enterprise Communication Platform · .NET · React · Angular",
    points: [
      "Contributed to development of a large-scale communication platform supporting high-volume operator workflows.",
      "Delivered features across a distributed ecosystem of microservices spanning legacy and modern systems.",
      "Operated within a complex architecture (120+ services), supporting mission-critical production environments.",
      "Improved secure communication between services using JWT-based authentication patterns.",
      "Contributed to CI/CD standardization and containerized workloads (Jenkins, Docker, Kubernetes).",
      "Maintained and optimized PostgreSQL-backed services under continuous production load.",
      "Expanded experience in event-driven architecture using Kafka and RabbitMQ for decoupled communication.",
    ],
    context: [
      "Large-scale enterprise communication platform supporting high-volume operator workflows in call center environments.",
      "The system consists of a broad distributed architecture with over 100 microservices across legacy and modern stacks.",
      "Supports real-time communication, operator dashboards, and backend processing for continuous service operations.",
      "Focus on reliability, secure service communication, and operational stability in production environments.",
      "Work involved navigating complex system dependencies and improving consistency across distributed components.",
    ],
    impact: [
      "Supports high-volume communication systems by improving reliability and consistency across a large distributed architecture.",
      "Enhances operational stability in mission-critical production environments.",
    ],
    technologyGroups: [
      {
        label: "PLATFORM",
        icons: [
          { label: "Jenkins", icon: jenkinsIcon },
          { label: "Docker", icon: dockerIcon },
          { label: "Kubernetes", icon: kubernetesIcon },
        ],
      },
      {
        label: "APPLICATION",
        icons: [
          { label: ".NET", icon: dotnetIcon },
          { label: "C#", icon: csharpIcon },
          { label: "Web API", icon: webApiIcon },
          { label: "React", icon: reactIcon },
          { label: "TypeScript", icon: typescriptIcon },
          { label: "HTML5", icon: html5Icon },
          { label: "PostgreSQL", icon: postgresqlIcon },
          { label: "Kafka", icon: kafkaIcon },
        ],
      },
      {
        label: "ARCHITECTURE",
        icons: [
          { label: "Microservices", icon: systemDesignMicroservicesIcon },
          { label: "Monolith (legacy / modular)", icon: systemDesignMonolithIcon },
        ],
      },
    ],
  },
  {
    title: "AREX — Software Developer",
    period: "01.2019 – 11.2021",
    scope: "IoT / Railway Infrastructure Platform · C# · WPF",
    points: [
      "Contributed to development of a nationwide IoT platform supporting railway infrastructure.",
      "Designed backend services for communication with distributed industrial devices.",
      "Worked on telemetry and device communication systems during transition toward modern messaging patterns.",
      "Designed and delivered a configuration tool improving provisioning and integration of field devices.",
      "Participated in system and module architecture with focus on extensibility and long-term maintainability.",
      "Improved engineering delivery through CI/CD support, containerization, and operational database maintenance.",
    ],
    context: [
      "IoT platform supporting nationwide railway infrastructure and communication with distributed industrial devices.",
      "The system handled telemetry and control of field hardware across a large-scale, geographically distributed network.",
      "Development involved backend services, device communication protocols, and system integration layers.",
      "Worked during a transition from legacy communication patterns toward more modern messaging-based architectures.",
      "Focus on reliability, maintainability, and long-term evolution of infrastructure-critical systems.",
    ],
    impact: [
      "Improves reliability and maintainability of infrastructure-critical IoT systems operating at national scale.",
      "Supports evolution from legacy communication patterns toward more scalable, modern architectures.",
    ],
    technologyGroups: [
      {
        label: "PLATFORM",
        icons: [
          { label: "Windows", icon: windowsIcon },
          { label: "Docker", icon: dockerIcon },
          { label: "TeamCity", icon: teamCityIcon },
        ],
      },
      {
        label: "APPLICATION",
        icons: [
          { label: ".NET", icon: dotnetIcon },
          { label: "C#", icon: csharpIcon },
          { label: "Web API", icon: webApiIcon },
          { label: "PostgreSQL", icon: postgresqlIcon },
        ],
      },
      {
        label: "ARCHITECTURE",
        icons: [{ label: "Monolith (legacy / modular)", icon: systemDesignMonolithIcon }],
      },
    ],
  },
] as const;
export const workExperienceTimelineItems: readonly WorkExperienceTimelineItem[] = [
  {
    company: "Nexi / Netaxept",
    shortLabel: "NX",
    badgeClassName: "border-sky-300/45 bg-sky-500/20 text-sky-100",
  },
  {
    company: "CommunicationProfiler",
    shortLabel: "CP",
    badgeClassName: "border-emerald-300/45 bg-emerald-500/20 text-emerald-100",
  },
  {
    company: "Millennium Bank",
    shortLabel: "MB",
    badgeClassName: "border-amber-300/45 bg-amber-500/20 text-amber-100",
  },
  {
    company: "Alfavox",
    shortLabel: "AV",
    badgeClassName: "border-indigo-300/45 bg-indigo-500/20 text-indigo-100",
  },
  {
    company: "AREX",
    shortLabel: "AR",
    badgeClassName: "border-violet-300/45 bg-violet-500/20 text-violet-100",
  },
] as const;

export const archoraModuleHighlights = [
  "Archora Core — Acts as the architectural source of truth for domains, service boundaries, ownership, and dependency topology.",
  "Archora Intelligence — Transforms architecture telemetry into actionable insights, exposing hotspots, coupling trends, and structural drift risks.",
  "Archora Governance — Enforces architecture guardrails, decision policies, and review workflows to keep system evolution aligned with platform strategy.",
  "Archora Flow — Coordinates cross-domain architecture change flow, ensuring dependencies and sequencing are explicit before implementation starts.",
  "Archora Risk — Quantifies architectural risk exposure, prioritizes remediation, and links risk posture directly to delivery planning.",
  "Archora Contracts — Governs API and integration contracts, detects breaking deltas early, and drives contract-safe change propagation.",
  "Archora Maps — Maintains a live architecture map of services, relationships, and ownership context to support system-wide impact analysis.",
  "Archora Tasks — Closes the architecture-to-delivery gap by generating implementation tickets from architecture analysis, enforcing contract/dependency-driven changes, and operationalizing architecture decisions in delivery backlogs.",
] as const;

export const applicationPlatformComponentsHighlights = [
  "UI platform layer standardizing frontend development across multiple internal products and teams.",
  "Reusable components, shared interaction patterns, versioned libraries, and Storybook-driven documentation.",
  "Accelerates delivery, reduces inconsistency, and improves developer onboarding and product quality across teams.",
] as const;

export const applicationPlatformComponentsWhyThisExists =
  "Designed to eliminate UI inconsistency, reduce duplication, and accelerate platform feature delivery.";

export const applicationPlatformComponentsProblemFraming =
  "Fragmented frontend development across teams leads to inconsistency, duplication, and slower delivery - this platform layer addresses those challenges at scale.";

export const applicationPlatformComponentsSystemRole =
  "Defines the frontend platform layer for internal products, enforcing consistency, shared interaction patterns, and scalable UI architecture across the system.";

export const applicationPlatformComponentsCards: readonly ApplicationPlatformComponentsCapabilityCard[] = [
  {
    label: "Platform Layer",
    title: "Standardized Frontend Foundation",
    description: applicationPlatformComponentsHighlights[0],
    glowClassName:
      "bg-[radial-gradient(circle_at_top,rgba(56,189,248,0.18),transparent_65%)]",
    titleClassName: "text-sky-100",
  },
  {
    label: "Reusable Foundation",
    title: "Versioned Components & Patterns",
    description: applicationPlatformComponentsHighlights[1],
    glowClassName:
      "bg-[radial-gradient(circle_at_top,rgba(16,185,129,0.18),transparent_65%)]",
    titleClassName: "text-emerald-100",
  },
] as const;

export const applicationPlatformComponentsOperatingCards: readonly ApplicationPlatformComponentsOperatingCard[] = [
  {
    title: "Platform Governance",
    description:
      "Component standards, usage guidelines, and review workflows to ensure consistency and prevent design drift across teams.",
    className:
      "border-violet-300/35 bg-violet-500/10 text-violet-100/90 shadow-[0_10px_28px_rgba(139,92,246,0.16)]",
  },
  {
    title: "Platform Adoption",
    description:
      "Designed for incremental adoption across teams, enabling gradual migration to shared components without disrupting delivery.",
    className:
      "border-sky-300/35 bg-sky-500/10 text-sky-100/90 shadow-[0_10px_28px_rgba(56,189,248,0.16)]",
  },
  {
    title: "Developer Experience",
    description:
      "Predictable APIs and composable patterns reduce cognitive load and speed up feature development across teams.",
    className:
      "border-emerald-300/35 bg-emerald-500/10 text-emerald-100/90 shadow-[0_10px_28px_rgba(16,185,129,0.16)]",
  },
] as const;

export const applicationPlatformComponentsDeliveryOutcomes =
  "Transforms fragmented UI development into a consistent, reusable system, accelerating delivery and improving cross-team reliability.";

export const applicationPlatformComponentsTechStackDescription =
  "Underlying technologies used to build and maintain the platform layer.";

export const applicationPlatformComponentsTechStack: readonly ApplicationPlatformComponentsTechStackGroup[] = [
  {
    group: "Core",
    items: [
      {
        label: "React",
        hint: "Composable UI architecture and rendering model",
        icon: reactIcon,
      },
      {
        label: "TypeScript",
        hint: "Type-safe contracts and scalable codebase structure",
        icon: typescriptIcon,
      },
    ],
  },
  {
    group: "UI System",
    items: [
      {
        label: "Tailwind",
        hint: "Consistent design system enforcement via utility patterns",
        icon: tailwindCssIcon,
      },
      {
        label: "shadcn/ui",
        hint: "Reusable component primitives aligned with design tokens",
        icon: shadcnUiIcon,
      },
    ],
  },
  {
    group: "Documentation",
    items: [
      {
        label: "Storybook",
        hint: "Component lifecycle, documentation, and visual QA",
        icon: storybookIcon,
      },
    ],
  },
] as const;

export const projectPanels: readonly ProjectPanel[] = [
  {
    key: "archora",
    iconLabel: "Archora",
    iconTitle: "Archora",
    iconDescription: "Architecture control platform",
    eyebrow: "Archora Platform",
    title: "Archora",
    subtitle: "Strategic control center for architecture evolution",
    description:
      "Archora is the core platform for CTOs and architects to design, govern, and evolve distributed systems. It connects architecture maps, dependency flow, API contract control, and risk visibility in one operating model.",
    highlights: archoraModuleHighlights,
    actions: [],
  },
  {
    key: "communication-profiler",
    iconLabel: "Communication Profiler",
    iconTitle: "Communication Profiler",
    iconDescription: "AI-powered communication analytics platform",
    eyebrow: "Communication Profiler",
    title: "Communication Profiler",
    subtitle:
      "Event-driven Azure platform for AI-powered communication analysis",
    description:
      "CommunicationProfiler is an independent product initiative built end-to-end as a cloud-native platform for 12D communication analysis, role and candidate profiling, and actionable feedback workflows.",
    highlights: [
      "Synchronous APIs are fully decoupled from LLM-heavy execution through Azure Service Bus and dedicated workers.",
      "Independent .NET 9 services (evaluation, authorization, messaging) scale separately and isolate failures.",
      "SignalR realtime events keep users informed during long-running evaluations in Live Open Beta.",
    ],
    actions: [
      {
        label: "Live Demo",
        href: "https://cp.unitydynamics.org/dashboard",
        variant: "ghost",
      },
      {
        label: "GitHub",
        href: "https://github.com/michmakow/communicationProfiler-architecture",
        variant: "primary",
      },
    ],
  },
  {
    key: "application-platform-components",
    iconLabel: "Application Platform Components",
    iconTitle: "Application Platform Components",
    iconDescription: "Reusable UI component system",
    eyebrow: "Application Platform Components",
    title: "Application Platform Components",
    subtitle: "Reusable UI foundations for internal platform products",
    description:
      "A UI platform layer designed to standardize frontend development, enforce consistency, and accelerate delivery across multiple internal products and teams.",
    highlights: applicationPlatformComponentsHighlights,
    actions: [
      {
        label: "Live Demo",
        href: "http://apc.michalmakowski.dev/",
        variant: "ghost",
      },
      {
        label: "GitHub",
        href: "https://github.com/michmakow/application-platform-components",
        variant: "primary",
      },
    ],
  },
] as const;

export const utilityPanels: readonly UtilityPanel[] = [
  {
    key: "work-experience",
    iconLabel: "Work Experience",
    iconTitle: "Work Experience",
    iconDescription: "Professional timeline and delivered outcomes",
    eyebrow: "Experience",
    title: "Work Experience",
    subtitle:
      "Roles and delivered outcomes across payments, banking, SaaS, and IoT",
    description:
      "Professional background focused on platform engineering, distributed systems, and cloud-native delivery in production environments.",
    highlights: workExperience.map(
      (role) => `${role.period} — ${role.title} (${role.scope})`,
    ),
    actions: [],
  },
  {
    key: "contact",
    iconLabel: "Contact",
    iconTitle: "Contact",
    iconDescription: "Professional contact channels",
    eyebrow: "Contact",
    title: "Contact",
    subtitle: "Let's build scalable systems together",
    description:
      "Open to platform engineering, distributed systems, and AI integration opportunities. Reach out through your preferred channel.",
    highlights: [
      "LinkedIn: michal-makowski",
      "Email: contact@michalmakowski.dev",
      "GitHub: michmakow",
    ],
    actions: [
      {
        label: "LinkedIn",
        href: "https://www.linkedin.com/in/michal-makowski/",
        variant: "secondary",
      },
      {
        label: "Email",
        href: "mailto:contact@michalmakowski.dev",
        variant: "primary",
      },
      {
        label: "GitHub",
        href: "https://github.com/michmakow",
        variant: "ghost",
      },
    ],
  },
] as const;

export const communicationProfilerStatusPills = [
  "Live Open Beta",
  "Architecture",
  "Cloud",
  "AI",
  "Methodology",
  "End-to-end",
] as const;

export const communicationProfilerFacts: readonly CommunicationProfilerFact[] = [
  {
    label: "Stack",
    value: ".NET 9 clean-architecture services + React/Vite/TypeScript UI",
  },
  {
    label: "Runtime",
    value: "Synchronous APIs + queue-based workers + SignalR realtime channel",
  },
  {
    label: "Infrastructure",
    value:
      "App Service, Azure SQL, Service Bus, OpenAI, Key Vault, App Config, App Insights, Storage, Front Door",
  },
  {
    label: "Delivery",
    value: "Bicep IaC, PowerShell deploy scripts, GitHub Actions per service",
  },
] as const;

export const communicationProfilerArchitectureSummary = [
  "Latency isolation for AI workloads through asynchronous queue processing.",
  "Independent scaling and failure containment via separate deployable units.",
  "Realtime status visibility from workers to UI over Service Bus + SignalR.",
  "Production-oriented operations with telemetry, logs, and managed secrets.",
] as const;

export const communicationProfilerArchitectureDecisions: readonly CommunicationProfilerArchitectureDecision[] =
  [
    {
      id: "adr-001",
      title: "ADR-001: Latency isolation using asynchronous processing",
      description:
        "Decoupled user APIs from AI processing using async queues to prevent latency propagation.",
      tags: [
        "ASYNC PROCESSING",
        "LATENCY ISOLATION",
        "WORKLOAD DECOUPLING",
        "SCALABILITY",
      ],
      modalTitle: "ADR-001: Latency isolation using asynchronous processing",
      modalContext:
        "LLM-based evaluation introduces high and unpredictable latency, which directly impacts user experience when handled synchronously.",
      modalDecision:
        "Separate user-facing APIs from AI processing by introducing asynchronous queue-based workflows using Azure Service Bus and background workers.",
      modalImplementedWith: [
        ".NET 9",
        "Azure Service Bus",
        "Background Workers",
      ],
      modalTradeOffs: [
        "+ Improved responsiveness and user experience",
        "+ Independent scaling of AI workloads",
        "- Increased architectural complexity",
        "- Eventual consistency instead of immediate results",
      ],
      modalImpact:
        "Enabled responsive UI while handling long-running AI evaluations, allowing horizontal scaling of processing workloads without affecting API performance.",
    },
    {
      id: "adr-002",
      title:
        "ADR-002: Modular service architecture for independent scaling and fault isolation",
      description:
        "Split the system into independent services to isolate failures and enable targeted scaling of high-load components.",
      tags: [
        "MODULARITY",
        "FAULT ISOLATION",
        "SCALING",
        "SERVICE BOUNDARIES",
      ],
      modalTitle:
        "ADR-002: Modular service architecture for independent scaling and fault isolation",
      modalContext:
        "AI processing, user management, and evaluation logic have different scaling and reliability requirements.",
      modalDecision:
        "Split the system into independently deployable .NET services (evaluation, authorization, messaging) with clear boundaries and communication contracts.",
      modalImplementedWith: [
        ".NET 9",
        "Service Contracts",
        "Independent Deployments",
      ],
      modalTradeOffs: [
        "+ Improved fault isolation",
        "+ Independent deployment and scaling",
        "- Increased operational overhead",
        "- Need for service coordination and observability",
      ],
      modalImpact:
        "Reduced blast radius of failures and enabled targeted scaling of high-load components without impacting the entire system.",
    },
    {
      id: "adr-003",
      title: "ADR-003: Real-time status updates using SignalR",
      description:
        "Introduced real-time updates to surface progress of long-running workflows and reduce perceived latency.",
      tags: [
        "REAL-TIME",
        "ASYNC WORKFLOWS",
        "USER FEEDBACK",
        "DISTRIBUTED SYSTEMS",
      ],
      modalTitle: "ADR-003: Real-time status updates using SignalR",
      modalContext:
        "AI evaluations can take several seconds to minutes, leading to poor user experience without feedback.",
      modalDecision:
        "Introduce a real-time communication channel using SignalR to stream status updates from background workers to the frontend.",
      modalImplementedWith: ["SignalR", ".NET 9", "Azure Service Bus"],
      modalTradeOffs: [
        "+ Improved user experience and transparency",
        "+ Reduced perceived latency",
        "- Additional infrastructure complexity",
        "- Need to manage connection lifecycle and scaling",
      ],
      modalImpact:
        "Increased user engagement and trust by providing live progress updates during long-running evaluation processes.",
    },
  ] as const;

export const communicationProfilerLightboxImages: readonly CommunicationProfilerLightboxImage[] = [
  {
    id: "standard",
    src: standardExample,
    alt: "CommunicationProfiler standard report preview",
    hint: "CommunicationProfiler standard report preview",
  },
  {
    id: "role-profile",
    src: roleProfileExample,
    alt: "CommunicationProfiler role profile preview",
    hint: "CommunicationProfiler role profile preview",
  },
  {
    id: "role-fit",
    src: roleFitExample,
    alt: "CommunicationProfiler role fit analysis preview",
    hint: "CommunicationProfiler role fit analysis preview",
  },
] as const;

export const iconActionDescriptions: Record<IconActionLabel, string> = {
  "Live Demo": "Open live project demo",
  GitHub: "Open repository on GitHub",
};


export const hardSkillCarouselIcons: readonly HardSkillCarouselIcon[] = [
  {
    id: "csharp",
    label: "C#",
    icon: csharpIcon,
    toneClass: "border-violet-300/40 bg-violet-500/15 text-violet-100",
    description:
      "Building backend capabilities, domain logic, and service foundations for production workloads in distributed environments.",
    whyItMatters:
      "Enables robust domain modeling and long-term maintainability where reliability, performance, and clear ownership boundaries are critical.",
  },
  {
    id: "dotnet",
    label: ".NET",
    icon: dotnetIcon,
    toneClass: "border-indigo-300/40 bg-indigo-500/15 text-indigo-100",
    description:
      "Designing and operating service platforms on modern .NET across APIs, workers, and cloud-native architecture.",
    whyItMatters:
      "Provides a scalable runtime and engineering baseline for high-throughput systems with predictable operational behavior.",
  },
  {
    id: "webapi",
    label: "Web API",
    icon: webApiIcon,
    toneClass: "border-lime-300/40 bg-lime-500/12 text-lime-100",
    description:
      "Defining and evolving HTTP service contracts with strong focus on consistency, observability, and consumer safety.",
    whyItMatters:
      "Stable APIs reduce integration friction, protect downstream teams, and allow independent scaling of platform capabilities.",
  },
  {
    id: "typescript",
    label: "TypeScript",
    icon: typescriptIcon,
    toneClass: "border-sky-300/40 bg-sky-500/15 text-sky-100",
    description:
      "Driving strongly typed frontend codebases with explicit contracts, safer refactors, and clearer domain representation.",
    whyItMatters:
      "Reduces production defects and accelerates team velocity by making system intent explicit at compile time.",
  },
  {
    id: "html5",
    label: "HTML5",
    icon: html5Icon,
    toneClass: "border-orange-300/40 bg-orange-500/15 text-orange-100",
    description:
      "Building semantic, accessible UI structures that remain resilient across product complexity and evolving design systems.",
    whyItMatters:
      "Correct semantics improve accessibility, SEO, and long-term UI maintainability across cross-functional teams.",
  },
  {
    id: "css3",
    label: "CSS3",
    icon: cssIcon,
    toneClass: "border-blue-300/40 bg-blue-500/15 text-blue-100",
    description:
      "Implementing responsive, production-grade UI styling with strong control over layout, interaction states, and visual hierarchy.",
    whyItMatters:
      "High-quality CSS creates consistent product behavior across devices and lowers design-to-code translation overhead.",
  },
  {
    id: "cssmodules",
    label: "CSS Modules",
    icon: cssModulesIcon,
    toneClass: "border-slate-300/40 bg-slate-500/12 text-slate-100",
    description:
      "Applying scoped styling patterns for component isolation and predictable style composition in large React codebases.",
    whyItMatters:
      "Prevents style leakage, improves component portability, and keeps UI architecture maintainable at scale.",
  },
  {
    id: "tailwindcss",
    label: "Tailwind CSS",
    icon: tailwindCssIcon,
    toneClass: "border-cyan-300/40 bg-cyan-500/15 text-cyan-100",
    description:
      "Building utility-first design systems with tokenized styling conventions and predictable component composition.",
    whyItMatters:
      "Reduces UI implementation variance, accelerates design-to-code flow, and improves consistency across product surfaces.",
  },
  {
    id: "react",
    label: "React",
    icon: reactIcon,
    toneClass: "border-cyan-300/40 bg-cyan-500/15 text-cyan-100",
    description:
      "Designing component-driven product interfaces with clear composition boundaries and maintainable state architecture.",
    whyItMatters:
      "Enables fast product iteration while preserving UI consistency and long-term engineering quality.",
  },
  {
    id: "redux",
    label: "Redux",
    icon: reduxIcon,
    toneClass: "border-violet-300/40 bg-violet-500/15 text-violet-100",
    description:
      "Managing cross-page application state with deterministic data flow and explicit update semantics.",
    whyItMatters:
      "Improves debuggability and system predictability in complex frontends with multiple integration points.",
  },
  {
    id: "reduxsaga",
    label: "Redux-Saga",
    icon: reduxSagaIcon,
    toneClass: "border-zinc-300/40 bg-zinc-500/15 text-zinc-100",
    description:
      "Coordinating side effects and async orchestration for stateful frontend workflows with explicit process control.",
    whyItMatters:
      "Supports resilient UI behavior under asynchronous complexity and reduces hidden coupling in integration flows.",
  },
  {
    id: "reactrouter",
    label: "React Router",
    icon: reactRouterIcon,
    toneClass: "border-rose-300/40 bg-rose-500/15 text-rose-100",
    description:
      "Implementing route architecture and navigation patterns for multi-module product and platform interfaces.",
    whyItMatters:
      "Clear route design improves UX coherence and enables scalable decomposition of frontend domains.",
  },
  {
    id: "rxjs",
    label: "RxJS",
    icon: rxjsIcon,
    toneClass: "border-fuchsia-300/40 bg-fuchsia-500/15 text-fuchsia-100",
    description:
      "Using reactive streams for event composition, asynchronous control flow, and deterministic handling of complex UI signals.",
    whyItMatters:
      "Helps model concurrent interactions safely and prevents fragile callback-driven logic in integration-heavy frontends.",
  },
  {
    id: "storybook",
    label: "Storybook",
    icon: storybookIcon,
    toneClass: "border-pink-300/40 bg-pink-500/15 text-pink-100",
    description:
      "Component-driven UI development and design system enablement using Storybook, supporting reusable architecture, documentation, and team scalability.",
    whyItMatters:
      "Enables consistent UI development, faster onboarding, and scalable component reuse across teams.",
  },
  {
    id: "shadcnui",
    label: "shadcn/ui",
    icon: shadcnUiIcon,
    toneClass: "border-slate-300/40 bg-slate-500/15 text-slate-100",
    description:
      "Composing product-grade UI from accessible primitives with controlled ownership over styling, behavior, and extension points.",
    whyItMatters:
      "Improves delivery speed without locking teams into opaque UI abstractions, while preserving long-term maintainability.",
  },
  {
    id: "jest",
    label: "Jest",
    icon: jestIcon,
    toneClass: "border-amber-300/40 bg-amber-500/12 text-amber-100",
    description:
      "Creating unit and component test suites that validate UI logic, state behavior, and regression-prone paths.",
    whyItMatters:
      "Raises deployment confidence and protects delivery speed by catching regressions before release.",
  },
  {
    id: "azure",
    label: "Azure",
    icon: azureIcon,
    toneClass: "border-blue-300/40 bg-blue-400/15 text-blue-100",
    description:
      "Designing cloud-native solutions on Azure with service boundaries, secure integration patterns, and operational readiness.",
    whyItMatters:
      "Connects architecture decisions with production realities such as scalability, cost control, and reliability.",
  },
  {
    id: "docker",
    label: "Docker",
    icon: dockerIcon,
    toneClass: "border-cyan-300/40 bg-cyan-400/15 text-cyan-100",
    description:
      "Containerizing services for reproducible local environments, CI pipelines, and deployable runtime artifacts.",
    whyItMatters:
      "Standardized runtime packaging reduces environment drift and improves deployment consistency across teams.",
  },
  {
    id: "kubernetes",
    label: "Kubernetes",
    icon: kubernetesIcon,
    toneClass: "border-indigo-300/40 bg-indigo-400/15 text-indigo-100",
    description:
      "Operating container orchestration workflows for deployment, scaling, and service-level platform management.",
    whyItMatters:
      "Enables resilient service operation and controlled scaling under changing production load patterns.",
  },
  {
    id: "jenkins",
    label: "Jenkins",
    icon: jenkinsIcon,
    toneClass: "border-red-300/40 bg-red-500/12 text-red-100",
    description:
      "Building and maintaining CI/CD pipelines for automated build, validation, and release orchestration.",
    whyItMatters:
      "Reliable automation shortens feedback loops and improves release quality in multi-service environments.",
  },
  {
    id: "teamcity",
    label: "TeamCity",
    icon: teamCityIcon,
    toneClass: "border-emerald-300/40 bg-emerald-500/12 text-emerald-100",
    description:
      "Managing enterprise build orchestration and release flow continuity across complex integration pipelines.",
    whyItMatters:
      "Strengthens delivery governance and keeps release processes dependable across organizational boundaries.",
  },
  {
    id: "azuredevops",
    label: "Azure DevOps",
    icon: azureDevOpsIcon,
    toneClass: "border-sky-300/40 bg-sky-500/12 text-sky-100",
    description:
      "Using Azure DevOps for pipeline authoring, delivery coordination, and traceability in product development.",
    whyItMatters:
      "Improves execution transparency and aligns engineering delivery with business planning and ownership.",
  },
  {
    id: "openshift",
    label: "OpenShift",
    icon: openShiftIcon,
    toneClass: "border-red-300/40 bg-red-500/12 text-red-100",
    description:
      "Deploying and operating applications on OpenShift across containerized platform workloads.",
    whyItMatters:
      "Provides controlled enterprise-grade deployment paths with stronger consistency in operational environments.",
  },
  {
    id: "kafka",
    label: "Kafka",
    icon: kafkaIcon,
    toneClass: "border-amber-300/40 bg-amber-400/12 text-amber-100",
    description:
      "Implementing event-stream integration patterns for decoupled communication between distributed services.",
    whyItMatters:
      "Supports scalable asynchronous architectures that improve fault isolation and throughput handling.",
  },
  {
    id: "systemdesign-microservices",
    label: "Microservices",
    icon: systemDesignMicroservicesIcon,
    toneClass: "border-sky-300/40 bg-sky-500/12 text-sky-100",
    description:
      "Decomposing systems into independently deployable services with explicit domain and integration boundaries.",
    whyItMatters:
      "Enables independent scaling, safer releases, and tighter failure isolation across high-change platform domains.",
  },
  {
    id: "systemdesign-monolith",
    label: "Monolith (legacy / modular)",
    icon: systemDesignMonolithIcon,
    toneClass: "border-amber-300/40 bg-amber-500/12 text-amber-100",
    description:
      "Designing and evolving modular monoliths with internal boundaries that allow incremental decomposition.",
    whyItMatters:
      "Preserves delivery speed in early and legacy phases while reducing migration risk toward distributed architectures.",
  },
  {
    id: "systemdesign-eventdriven",
    label: "Event-driven architecture",
    icon: systemDesignEventDrivenIcon,
    toneClass: "border-emerald-300/40 bg-emerald-500/12 text-emerald-100",
    description:
      "Building asynchronous workflows driven by domain events, queues, and loosely coupled message contracts.",
    whyItMatters:
      "Decouples workloads, improves throughput, and protects user-facing paths from latency-heavy processing.",
  },
  {
    id: "systemdesign-distributed",
    label: "Distributed systems",
    icon: systemDesignDistributedIcon,
    toneClass: "border-indigo-300/40 bg-indigo-500/12 text-indigo-100",
    description:
      "Structuring cross-service communication, reliability controls, and consistency strategies in multi-node environments.",
    whyItMatters:
      "Improves system resilience under load by designing explicitly for failures, retries, and partial availability.",
  },
  {
    id: "github",
    label: "GitHub",
    icon: githubIcon,
    toneClass: "border-slate-300/40 bg-slate-500/15 text-slate-100",
    description:
      "Managing repositories, pull requests, and review workflows as part of continuous collaborative software delivery.",
    whyItMatters:
      "High-quality review and branching discipline are foundational to team-level engineering excellence and velocity.",
  },
  {
    id: "git",
    label: "Git",
    icon: gitIcon,
    toneClass: "border-orange-300/40 bg-orange-500/15 text-orange-100",
    description:
      "Applying advanced version-control practices across feature branching, release coordination, and integration management.",
    whyItMatters:
      "Strong source-control discipline protects delivery stability and enables safe parallel work at scale.",
  },
  {
    id: "gitlab",
    label: "GitLab",
    icon: gitlabIcon,
    toneClass: "border-orange-300/40 bg-orange-500/12 text-orange-100",
    description:
      "Supporting repository and CI workflows in GitLab-centric delivery ecosystems.",
    whyItMatters:
      "Ensures teams can execute end-to-end delivery inside a unified development and deployment platform.",
  },
  {
    id: "mssql",
    label: "MS SQL",
    icon: msSqlIcon,
    toneClass: "border-red-300/40 bg-red-500/12 text-red-100",
    description:
      "Designing and tuning relational data access for transactional systems with production-scale integration needs.",
    whyItMatters:
      "Reliable SQL performance directly impacts end-user latency and platform throughput under load.",
  },
  {
    id: "postgresql",
    label: "PostgreSQL",
    icon: postgresqlIcon,
    toneClass: "border-blue-300/40 bg-blue-500/12 text-blue-100",
    description:
      "Operating PostgreSQL-backed workloads across service platforms, from schema decisions to query behavior.",
    whyItMatters:
      "Good relational design and operational hygiene prevent data bottlenecks and improve service reliability.",
  },
  {
    id: "cosmosdb",
    label: "Cosmos DB",
    icon: cosmosDbIcon,
    toneClass: "border-cyan-300/40 bg-cyan-500/12 text-cyan-100",
    description:
      "Integrating document-oriented data models in Azure architectures with practical operational usage.",
    whyItMatters:
      "Expands architectural options for high-scale, low-latency workloads where relational tradeoffs are not optimal.",
  },
  {
    id: "visualstudio",
    label: "Visual Studio",
    icon: visualStudioIcon,
    toneClass: "border-violet-300/40 bg-violet-500/12 text-violet-100",
    description:
      "Primary engineering environment for enterprise .NET development, debugging, testing, and productivity tooling.",
    whyItMatters:
      "Strong IDE mastery improves delivery speed, debugging quality, and engineering ergonomics in large codebases.",
  },
  {
    id: "vscode",
    label: "VS Code",
    icon: vscodeIcon,
    toneClass: "border-sky-300/40 bg-sky-500/12 text-sky-100",
    description:
      "Core editor for frontend engineering, scripting workflows, and cross-stack developer productivity.",
    whyItMatters:
      "Flexible tooling and extension ecosystem accelerate iteration and reduce context-switching across disciplines.",
  },
  {
    id: "windows",
    label: "Windows",
    icon: windowsIcon,
    toneClass: "border-blue-300/40 bg-blue-500/12 text-blue-100",
    description:
      "Primary operating environment for daily development, tooling orchestration, and delivery workflows.",
    whyItMatters:
      "Operational familiarity at platform level reduces setup friction and improves execution consistency across projects.",
  },
] as const;

export const HARD_SKILLS_CAROUSEL_ICON_SIZE_PX = 58;
export const HARD_SKILLS_CAROUSEL_ICON_INNER_SIZE_PX = 38;
export const HARD_SKILLS_CAROUSEL_GAP_PX = 18;

export const hardSkillModalContentById: Record<string, HardSkillModalContent> = {
  csharp: {
    role: "C# sits in the core service layer of my stack, where domain policies, business invariants, and integration contracts are implemented.",
    how: "I use C# to model aggregates and use-cases, enforce validation at boundaries, and implement resilient handlers with explicit error and retry semantics.",
    impact:
      "This reduces logic defects and rework in core services, which improves release predictability across backend-heavy deliveries.",
  },
  dotnet: {
    role: ".NET sits in the application runtime layer, hosting APIs, background workers, and cross-cutting platform capabilities.",
    how: "I use .NET to standardize DI, middleware, health checks, config/secret loading, and worker execution patterns across services.",
    impact:
      "A consistent runtime baseline cuts service onboarding time and makes multi-service releases safer and faster.",
  },
  webapi: {
    role: "Web API sits at the system boundary layer, defining how internal and external consumers interact with platform capabilities.",
    how: "I use Web API to enforce versioning, idempotency, pagination, auth policies, and predictable error envelopes with contract-first discipline.",
    impact:
      "Stable API contracts reduce integration friction and prevent downstream breakage during fast release cycles.",
  },
  typescript: {
    role: "TypeScript sits in the frontend contract layer, governing compile-time guarantees for UI modules and integration payloads.",
    how: "I use strict TypeScript typing for DTOs, discriminated unions, and state/action models so refactors fail fast before runtime.",
    impact:
      "This lowers production defect rate in UI changes and materially improves change velocity under parallel development.",
  },
  html5: {
    role: "HTML5 sits in the semantic structure layer of the frontend stack, defining accessibility and document integrity.",
    how: "I use semantic tags, landmarks, and proper form structures to preserve accessibility and predictable browser behavior under evolving UI complexity.",
    impact:
      "Clear semantics reduce UI rework, accessibility regressions, and QA churn in feature-heavy releases.",
  },
  css3: {
    role: "CSS3 sits in the presentation system layer, controlling layout, visual hierarchy, and interaction states.",
    how: "I use CSS3 with explicit layout strategy (grid/flex), responsive rules, and state styling to keep behavior deterministic across breakpoints.",
    impact:
      "This stabilizes visual delivery quality and reduces front-end regression loops late in release windows.",
  },
  cssmodules: {
    role: "CSS Modules sits in the style isolation layer, containing scope and preventing cross-module leakage.",
    how: "I use CSS Modules to keep styles co-located with components, avoid global selector collisions, and maintain predictable overrides.",
    impact:
      "Scoped styling reduces accidental UI breakage and improves confidence when teams ship in parallel.",
  },
  tailwindcss: {
    role: "Tailwind CSS sits in the design-token execution layer, standardizing how visual decisions are translated into implementation.",
    how: "I use Tailwind utility composition with shared tokens, variant patterns, and responsive conventions to keep UI implementation deterministic.",
    impact:
      "This cuts styling inconsistency and speeds feature delivery by removing repetitive CSS authoring and review overhead.",
  },
  react: {
    role: "React sits in the UI composition layer, where product features are decomposed into reusable and testable module boundaries.",
    how: "I use React to shape component ownership, isolate side effects, and structure render/state boundaries around real user workflows.",
    impact:
      "Better component boundaries reduce feature coupling and keep delivery throughput high as product surface grows.",
  },
  redux: {
    role: "Redux sits in the shared state governance layer, coordinating cross-feature application state.",
    how: "I use Redux with normalized store slices, selectors, and explicit action contracts to keep state transitions auditable and deterministic.",
    impact:
      "Deterministic state flow shortens debug cycles and lowers regression risk in multi-team frontend delivery.",
  },
  reduxsaga: {
    role: "Redux-Saga sits in the async orchestration layer, coordinating side effects and long-running UI processes.",
    how: "I use sagas for cancellation, retries, debouncing, and race control so async flows remain explicit and resilient under load.",
    impact:
      "Reliable orchestration prevents flaky user flows and protects delivery cadence when integrations get complex.",
  },
  reactrouter: {
    role: "React Router sits in the navigation architecture layer, mapping route structure to feature boundaries.",
    how: "I use React Router to implement route-level composition, guarded navigation, and deep-link-safe transitions across modules.",
    impact:
      "Consistent route architecture reduces navigation defects and enables faster delivery of multi-module features.",
  },
  rxjs: {
    role: "RxJS sits in the event-stream control layer, handling concurrency-heavy interactions and signal composition.",
    how: "I use RxJS operators to compose UI/events pipelines, control backpressure, and eliminate race conditions in reactive flows.",
    impact:
      "Stream-based orchestration hardens complex interactions and reduces production incident frequency in event-heavy UIs.",
  },
  storybook: {
    role: "Storybook sits in the UI contract and design-system layer, acting as a controlled surface for component behavior.",
    how: "I use Storybook to validate component states in isolation, document usage contracts, and run visual review before integration.",
    impact:
      "This shifts defect detection left and accelerates delivery by reducing UI integration churn.",
  },
  shadcnui: {
    role: "shadcn/ui sits in the UI tooling layer as a composable component baseline built on accessible primitives.",
    how: "I use shadcn/ui as a starting layer, tailoring component APIs, state wiring, and styling contracts to fit product-specific design system needs.",
    impact:
      "This gives teams a faster implementation baseline while keeping full control over extensibility, accessibility, and long-term UI ownership.",
  },
  jest: {
    role: "Jest sits in the automated quality gate layer, enforcing behavioral correctness before merge.",
    how: "I use Jest for unit and component tests with deterministic fixtures and targeted mocks on risk-prone logic paths.",
    impact:
      "Automated pre-merge validation cuts regression escape rate and protects release frequency.",
  },
  azure: {
    role: "Azure sits in the cloud control-plane layer, hosting services, messaging, storage, security, and observability foundations.",
    how: "I use Azure services with explicit topology and policy choices to run APIs/workers with secure configuration and production telemetry.",
    impact:
      "Cloud primitives aligned to architecture decisions reduce operational drag and improve delivery reliability at scale.",
  },
  docker: {
    role: "Docker sits in the packaging and runtime parity layer, standardizing how workloads move from dev to production.",
    how: "I use Docker with multi-stage builds, minimal base images, and consistent runtime contracts to avoid environment drift.",
    impact:
      "Container parity removes deployment surprises and shortens cycle time from commit to stable runtime.",
  },
  kubernetes: {
    role: "Kubernetes sits in the orchestration layer, managing placement, scaling, resilience, and rollout behavior for services.",
    how: "I use Kubernetes with health probes, rollout strategies, autoscaling, and config/secret separation to keep operations controlled.",
    impact:
      "Operationally safe orchestration improves uptime and allows frequent releases without destabilizing production.",
  },
  jenkins: {
    role: "Jenkins sits in the CI orchestration layer, driving build/test/release automation for multi-service systems.",
    how: "I use Jenkins pipelines with staged quality gates, parallel execution, and artifact promotion to enforce delivery standards.",
    impact:
      "Stronger automation shrinks feedback latency and increases deployment confidence across teams.",
  },
  teamcity: {
    role: "TeamCity sits in the enterprise build-governance layer, coordinating dependent pipelines and release flows.",
    how: "I use TeamCity build chains, dependency-aware triggers, and controlled agent allocation to keep enterprise delivery deterministic.",
    impact:
      "Predictable build orchestration reduces release contention and protects throughput in complex delivery environments.",
  },
  azuredevops: {
    role: "Azure DevOps sits in the delivery governance layer, connecting pipelines, environments, and planning traceability.",
    how: "I use Azure DevOps YAML pipelines with environment approvals, gated promotions, and release auditability controls.",
    impact:
      "End-to-end traceable automation reduces compliance friction while keeping delivery cadence high.",
  },
  openshift: {
    role: "OpenShift sits in the enterprise platform layer, providing policy-driven container orchestration under constrained environments.",
    how: "I use OpenShift deployment primitives and security constraints to ship workloads that satisfy strict operational governance.",
    impact:
      "Policy-compliant deployment paths reduce production risk and unblock delivery in regulated enterprise contexts.",
  },
  kafka: {
    role: "Kafka sits in the event backbone layer, decoupling producers/consumers across distributed service domains.",
    how: "I use Kafka with partitioning strategy, consumer-group control, DLQ handling, and schema evolution to run stable async workflows.",
    impact:
      "Event decoupling improves system scalability and resilience, enabling faster independent service delivery.",
  },
  "systemdesign-microservices": {
    role: "Microservices sits in the service topology layer, defining bounded-context decomposition and independent deployability across domains.",
    how: "I use microservice boundaries around business capabilities, contract-first APIs/events, and explicit ownership for deployment and runtime responsibilities.",
    impact:
      "This reduces blast radius, enables targeted scaling, and increases release parallelism across teams.",
  },
  "systemdesign-monolith": {
    role: "Monolith (legacy / modular) sits in the evolutionary architecture layer, where internal modularity governs long-term decomposition potential.",
    how: "I use modular-monolith patterns with strict module boundaries and dependency rules to keep legacy systems evolvable without premature distribution.",
    impact:
      "This preserves delivery speed while reducing migration risk and technical fragmentation.",
  },
  "systemdesign-eventdriven": {
    role: "Event-driven architecture sits in the asynchronous integration layer, decoupling producers and consumers through durable message flows.",
    how: "I use event contracts, queue/topic routing, idempotent consumers, and retry/DLQ strategies to orchestrate long-running workflows safely.",
    impact:
      "This improves throughput and resilience while protecting user-facing APIs from latency propagation.",
  },
  "systemdesign-distributed": {
    role: "Distributed systems sits in the reliability architecture layer, where consistency, failure handling, and inter-service communication are explicitly designed.",
    how: "I use timeout/retry/circuit-breaker patterns, observability-first diagnostics, and consistency tradeoff decisions aligned to domain criticality.",
    impact:
      "This reduces incident severity and keeps platform delivery predictable under real production load.",
  },
  github: {
    role: "GitHub sits in the change collaboration layer, governing code review, branch protections, and merge quality.",
    how: "I use GitHub with PR checks, CODEOWNERS, and review policy enforcement to keep change quality explicit and auditable.",
    impact:
      "Higher review discipline lowers rework and supports sustained team throughput during continuous delivery.",
  },
  git: {
    role: "Git sits in the source history and branching control layer, defining how engineering changes are isolated and integrated.",
    how: "I use Git with disciplined commit structure, rebase hygiene, and branch strategy tuned for parallel feature streams.",
    impact:
      "Strong branch hygiene reduces merge debt and keeps release trains moving under high commit velocity.",
  },
  gitlab: {
    role: "GitLab sits in the integrated SCM+CI layer for teams standardized on GitLab-native workflows.",
    how: "I use GitLab merge request policies, branch protections, and CI stages to enforce delivery quality gates in one platform.",
    impact:
      "Unified collaboration and automation reduce handoff friction and improve release consistency.",
  },
  mssql: {
    role: "MS SQL sits in the transactional persistence layer, supporting consistency-critical service operations.",
    how: "I use MS SQL with index strategy, execution plan tuning, and isolation-level controls to keep transactional paths predictable.",
    impact:
      "Stable query performance protects SLA-sensitive flows and prevents delivery slowdowns from data bottlenecks.",
  },
  postgresql: {
    role: "PostgreSQL sits in the relational data platform layer, backing service domains that require strong data integrity.",
    how: "I use PostgreSQL for schema evolution, index tuning, query optimization, and transactional safeguards on high-traffic paths.",
    impact:
      "Relational robustness reduces incident load and sustains predictable delivery under growing data volume.",
  },
  cosmosdb: {
    role: "Cosmos DB sits in the distributed document-data layer, optimized for low-latency and horizontally scalable workloads.",
    how: "I use Cosmos DB with partition-key design, RU budgeting, and TTL/change-feed patterns aligned to domain access paths.",
    impact:
      "Correct partition and throughput strategy prevents cost/performance drift and enables faster feature scaling.",
  },
  visualstudio: {
    role: "Visual Studio sits in the deep .NET engineering workstation layer for complex backend implementation and diagnostics.",
    how: "I use Visual Studio debugging/profiling and analyzer workflows to isolate runtime faults and harden service behavior quickly.",
    impact:
      "Faster root-cause isolation reduces MTTR and keeps delivery plans intact when defects emerge.",
  },
  vscode: {
    role: "VS Code sits in the cross-stack engineering workspace layer, especially for frontend and automation-heavy workflows.",
    how: "I use VS Code tasks, debug configs, and extension tooling to execute tight coding-test-debug loops across repositories.",
    impact:
      "Tooling speed and consistency raise daily engineering throughput and cut context-switch cost.",
  },
  windows: {
    role: "Windows sits in the host operating layer that underpins local toolchains, scripting, and integration workflows.",
    how: "I use Windows as the operational base for PowerShell automation, local orchestration, and environment consistency across projects.",
    impact:
      "A stable host environment reduces setup variance and removes avoidable delivery friction in day-to-day execution.",
  },
};

export const toolingSkillIds = new Set<string>([
  "shadcnui",
  "storybook",
  "jest",
  "jenkins",
  "teamcity",
  "azuredevops",
  "github",
  "git",
  "gitlab",
  "visualstudio",
  "vscode",
  "windows",
]);
