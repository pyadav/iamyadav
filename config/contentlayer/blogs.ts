import {
  ComputedFields,
  defineDocumentType,
  defineNestedType,
} from "contentlayer/source-files";
import readingTime from "reading-time";

const BLOGS_DIR_NAME = "blogs";

const Categories = ["Engineering", "Product", "Careers"] as const;
const Image = defineNestedType(() => ({
  name: "Image",
  fields: {
    src: { type: "string", required: true },
    alt: { type: "string", required: true },
    caption: { type: "markdown" },
  },
}));

const Externals = defineNestedType(() => ({
  name: "Externals",
  fields: {
    Medium: { type: "string" },
    ProductHunt: { type: "string" },
    Website: { type: "string" },
  },
}));

const Review = defineNestedType(() => ({
  name: "Review",
  fields: {
    biography: { type: "string" },
    summary: { type: "markdown" },
    avatar: { type: "nested", of: Image },
  },
}));

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
      return [...filteredKeywords];
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
  filePathPattern: `${BLOGS_DIR_NAME}/**/*.mdx`,
  fields: {
    title: { type: "string", required: true },
    publishedAt: { type: "string", required: true },
    summary: { type: "string" },
    color: { type: "string" },
    hero: { type: "string" },
    cover: { type: "nested", of: Image },
    externals: { type: "nested", of: Externals },
    category: { type: "enum", options: Categories },
    tags: { type: "list", of: { type: "string" } },
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
