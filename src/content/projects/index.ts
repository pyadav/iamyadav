import { loadContentEntries, loadContentEntry } from "~/content/loaders";
import type { BaseContentMetadata, ContentEntry } from "~/content/types";

export type ProjectMetadata = BaseContentMetadata & {
  preview?: {
    src: string;
    alt: string;
    caption?: string;
    accent?: string;
  };
  badges?: string[];
};

export type ProjectEntry = ContentEntry<ProjectMetadata>;

export async function getProjects() {
  return loadContentEntries<ProjectMetadata>("projects");
}

export async function getProject(slug: string) {
  return loadContentEntry<ProjectMetadata>("projects", slug);
}

export type Project = Awaited<ReturnType<typeof getProject>>;
export type ProjectList = Awaited<ReturnType<typeof getProjects>>;
