import Hyperlist, { metadata as hyperlistMeta } from "./hyperlist.mdx";
import Stackfolio, { metadata as stackfolioMeta } from "./stackfolio.mdx";
import type { ContentEntry } from "~/content/types";

export const projects: ContentEntry[] = [
  {
    slug: "hyperlist",
    href: "/projects/hyperlist",
    metadata: hyperlistMeta,
    Content: Hyperlist,
  },
  {
    slug: "stackfolio",
    href: "/projects/stackfolio",
    metadata: stackfolioMeta,
    Content: Stackfolio,
  },
];

export const projectMap = Object.fromEntries(
  projects.map((project) => [project.slug, project]),
);
