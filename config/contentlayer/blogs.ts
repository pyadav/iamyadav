import { ComputedFields, defineDocumentType } from "contentlayer/source-files";
import readingTime from "reading-time";

import { unique } from "./utils/unique";

const getActualHeroUrl = (hero?: string) =>
  hero ? (hero.startsWith("http") ? hero : `/static/images/blog/${hero}`) : "";

const computedFields: ComputedFields = {
  readingTime: { type: "json", resolve: (doc) => readingTime(doc.body.raw) },
  slug: {
    type: "string",
    resolve: (doc) => doc._raw.sourceFileName.replace(/\.mdx$/, ""),
  },
  hero: {
    type: "string",
    resolve: (doc) => getActualHeroUrl(doc.hero),
  },
  keywords: {
    type: "list",
    resolve: (doc) => {
      const docKeywords: string = (doc?.keywords ?? "") || "";
      let filteredKeywords: Array<string> = [];
      try {
        filteredKeywords = docKeywords
          ?.split("|")
          ?.map((it: string) => it.trim())
          ?.filter((it: string) => it.length > 0);
      } catch (e) {}
      return unique([...filteredKeywords]);
    },
  },
  year: {
    type: "number",
    resolve: (doc) => {
      try {
        const date = new Date(doc.date);
        return date.getFullYear();
      } catch (e) {
        return 0;
      }
    },
  },
};

const Blog = defineDocumentType(() => ({
  name: "Blog",
  contentType: "mdx",
  filePathPattern: "posts/**/*.mdx",
  fields: {
    title: { type: "string", required: true },
    date: { type: "string", required: true },
    color: { type: "string", required: true },
    excerpt: { type: "string" },
    hero: { type: "string" },
    heroSource: { type: "string" },
    link: { type: "string" },
    inProgress: { type: "boolean" },
    devToId: { type: "number" },
    keywords: { type: "string" },
    status: {
      type: "enum",
      options: ["published", "draft", "planned"],
      default: "draft",
    },
  },
  computedFields,
}));

export default Blog;
