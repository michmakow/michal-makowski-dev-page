import type { NextConfig } from "next";

const repository = process.env.GITHUB_REPOSITORY ?? "";
const [repositoryOwner = "", repositoryName = ""] = repository.split("/");
const isGithubPagesBuild = process.env.GITHUB_PAGES === "true";
const configuredBasePath = process.env.NEXT_PUBLIC_BASE_PATH?.trim();

const normalizeBasePath = (value: string | undefined): string | undefined => {
  if (!value || value === "/") {
    return undefined;
  }

  return value.startsWith("/") ? value : `/${value}`;
};

const isUserOrOrgPagesRepo =
  repositoryOwner.length > 0 &&
  repositoryName.toLowerCase() === `${repositoryOwner.toLowerCase()}.github.io`;

const inferredBasePath =
  repositoryName.length > 0 && !isUserOrOrgPagesRepo
    ? `/${repositoryName}`
    : undefined;

const basePath = isGithubPagesBuild
  ? normalizeBasePath(configuredBasePath) ?? inferredBasePath
  : undefined;

const nextConfig: NextConfig = {
  output: isGithubPagesBuild ? "export" : undefined,
  basePath,
  assetPrefix: basePath,
  trailingSlash: isGithubPagesBuild,
  images: {
    unoptimized: isGithubPagesBuild,
  },
};

export default nextConfig;
