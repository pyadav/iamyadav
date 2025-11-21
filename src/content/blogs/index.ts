import FounderFridays, {
  metadata as founderFridaysMeta,
} from "./founder-fridays.mdx";
import type { ContentEntry } from "~/content/types";

export const blogPosts = [
  {
    slug: "founder-fridays-notes",
    href: "/blogs/founder-fridays-notes",
    metadata: founderFridaysMeta,
    Content: FounderFridays,
  },
] satisfies ContentEntry[];

export const blogPostMap = Object.fromEntries(
  blogPosts.map((post) => [post.slug, post]),
);
