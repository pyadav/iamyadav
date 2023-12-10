import type { MDXOptions } from "contentlayer/core";
import rehypeAutolinkHeadings from "rehype-autolink-headings";
import rehypeExternalLinks from "rehype-external-links";
import rehypeSlug from "rehype-slug";
import remarkGfm from "remark-gfm";

const mdx: MDXOptions = {
  remarkPlugins: [remarkGfm],
  rehypePlugins: [
    [
      rehypeExternalLinks,
      { target: "_blank", rel: ["noopener", "noreferrer", "nofollow"] },
    ],
    rehypeSlug,
    rehypeAutolinkHeadings,
  ],
};
export default mdx;
