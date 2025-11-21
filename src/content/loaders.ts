"use server";

import { cacheLife, cacheTag } from "next/cache";
import { readdir } from "node:fs/promises";
import path from "node:path";
import type { ComponentType } from "react";

import type { BaseContentMetadata, ContentEntry } from "~/content/types";

const CONTENT_ROOT = path.join(process.cwd(), "src/content");

const BASE_HREF = {
  blogs: "/blogs",
  projects: "/projects",
} as const;

type ContentKind = keyof typeof BASE_HREF;

type ContentModule<TMeta extends BaseContentMetadata> = {
  default: ComponentType;
  metadata: TMeta;
};

function getDirectory(kind: ContentKind) {
  return path.join(CONTENT_ROOT, kind);
}

async function readSlugs(kind: ContentKind) {
  const directory = getDirectory(kind);
  const entries = await readdir(directory);
  return entries
    .filter((file) => file.endsWith(".mdx"))
    .map((file) => file.replace(/\.mdx$/, ""));
}

function moduleToEntry<TMeta extends BaseContentMetadata>(
  kind: ContentKind,
  slug: string,
  module: ContentModule<TMeta>,
): ContentEntry<TMeta> {
  return {
    slug,
    href: `${BASE_HREF[kind]}/${slug}`,
    metadata: module.metadata,
    Content: module.default,
  };
}

async function importContentModule<TMeta extends BaseContentMetadata>(
  kind: ContentKind,
  slug: string,
) {
  const module = (await import(
    `~/content/${kind}/${slug}.mdx`
  )) as ContentModule<TMeta>;

  return moduleToEntry(kind, slug, module);
}

function sortByPublishedAt<TMeta extends BaseContentMetadata>(
  entries: ContentEntry<TMeta>[],
) {
  return entries.toSorted((a, b) => {
    const aTime = Date.parse(a.metadata.publishedAt ?? "");
    const bTime = Date.parse(b.metadata.publishedAt ?? "");
    return Number.isNaN(bTime) || Number.isNaN(aTime) ? 0 : bTime - aTime;
  });
}

export async function loadContentEntries<TMeta extends BaseContentMetadata>(
  kind: ContentKind,
) {
  cacheLife("max");
  cacheTag(`${kind}:list`);

  const slugs = await readSlugs(kind);
  const entries = await Promise.all(
    slugs.map((slug) => importContentModule<TMeta>(kind, slug)),
  );

  return sortByPublishedAt(entries);
}

export async function loadContentEntry<TMeta extends BaseContentMetadata>(
  kind: ContentKind,
  slug: string,
) {
  cacheLife("max");
  cacheTag(`${kind}:${slug}`);

  try {
    return await importContentModule<TMeta>(kind, slug);
  } catch {
    return null;
  }
}
