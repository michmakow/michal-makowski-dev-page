import type { Metadata } from "next";
import type { FC } from "react";
import { getCanonicalUrl, siteConfig } from "@/lib/site";

const focusAreas = [
  "Distributed systems and scalable APIs",
  "Cloud-native architecture",
  "Production-grade AI delivery",
];

export const metadata: Metadata = {
  alternates: {
    canonical: "/",
  },
  openGraph: {
    url: "/",
  },
};

const HomePage: FC = () => {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: siteConfig.name,
    description: siteConfig.description,
    url: getCanonicalUrl("/"),
    inLanguage: "en-US",
  };

  return (
    <main className="flex min-h-screen w-full items-center justify-center bg-zinc-950 px-6 py-16 text-zinc-100">
      <div className="w-full max-w-3xl rounded-3xl border border-zinc-800 bg-zinc-900/80 p-8 shadow-2xl shadow-black/40 sm:p-12">
        <p className="text-sm uppercase tracking-[0.22em] text-zinc-400">
          michalmakowski.dev
        </p>
        <h1 className="mt-5 text-4xl font-bold tracking-tight sm:text-5xl">
          Software Engineer Portfolio
        </h1>
        <p className="mt-5 max-w-2xl text-lg leading-8 text-zinc-300">
          I build web products with Next.js, React, distributed systems, and AI. This
          template is ready for further portfolio development with strong SEO
          fundamentals.
        </p>
        <ul className="mt-8 grid gap-3 text-zinc-200 sm:grid-cols-2">
          {focusAreas.map((item) => (
            <li
              key={item}
              className="rounded-xl border border-zinc-800 bg-zinc-900 px-4 py-3"
            >
              {item}
            </li>
          ))}
        </ul>
        <div className="mt-10 flex flex-wrap gap-4">
          <a
            href={`mailto:${siteConfig.contactEmail}`}
            className="rounded-full bg-zinc-100 px-6 py-3 text-sm font-semibold text-zinc-900 transition hover:bg-white"
          >
            Contact me
          </a>
          <a
            href={siteConfig.githubUrl}
            className="rounded-full border border-zinc-700 px-6 py-3 text-sm font-semibold text-zinc-100 transition hover:border-zinc-500"
            target="_blank"
            rel="noreferrer noopener"
          >
            View projects
          </a>
        </div>
      </div>
      <script
        type="application/ld+json"
        // JSON-LD improves understanding of site context by search engines.
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
    </main>
  );
};

export default HomePage;
