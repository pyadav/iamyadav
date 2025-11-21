import { loadContentEntries, loadContentEntry } from "~/content/loaders";
import type { BaseContentMetadata, ContentEntry } from "~/content/types";

export type BlogMetadata = BaseContentMetadata & {
  thumbnail?: {
    src: string;
    alt: string;
    accent?: string;
  };
};

export type BlogEntry = ContentEntry<BlogMetadata>;

export async function getBlogPosts() {
  return loadContentEntries<BlogMetadata>("blogs");
}

export async function getBlogPost(slug: string) {
  return loadContentEntry<BlogMetadata>("blogs", slug);
}

export type BlogPost = Awaited<ReturnType<typeof getBlogPost>>;
export type BlogPostList = Awaited<ReturnType<typeof getBlogPosts>>;
