import type { NextConfig } from "next";

const repository = process.env.GITHUB_REPOSITORY ?? "";
const [repositoryOwner = "", repositoryName = ""] = repository.split("/");

const isGithubPagesBuild = process.env.GITHUB_PAGES === "true";
const rawConfiguredBasePath = process.env.NEXT_PUBLIC_BASE_PATH;
const hasExplicitBasePath = rawConfiguredBasePath !== undefined;
const hasCustomDomain = Boolean(process.env.CUSTOM_DOMAIN?.trim());

const normalizeBasePath = (value?: string): string | undefined => {
  const trimmed = value?.trim();

  if (!trimmed || trimmed === "/") {
    return undefined;
  }

  return trimmed.startsWith("/") ? trimmed : `/${trimmed}`;
};

const isUserOrOrgPagesRepo =
  repositoryOwner.length > 0 &&
  repositoryName.toLowerCase() === `${repositoryOwner.toLowerCase()}.github.io`;

const inferredBasePath =
  repositoryName.length > 0 && !isUserOrOrgPagesRepo
    ? `/${repositoryName}`
    : undefined;

const basePath = isGithubPagesBuild
  ? hasCustomDomain
    ? undefined
    : hasExplicitBasePath
      ? normalizeBasePath(rawConfiguredBasePath)
      : inferredBasePath
  : undefined;

const nextConfig: NextConfig = {
  output: isGithubPagesBuild ? "export" : undefined,
  basePath,
  trailingSlash: isGithubPagesBuild,
  images: {
    unoptimized: isGithubPagesBuild,
  },
};

export default nextConfig;
