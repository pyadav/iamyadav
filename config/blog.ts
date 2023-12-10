import { Blog } from "contentlayer/generated";

export const CategoryColors: Record<
  NonNullable<Blog["category"]>,
  "mint" | "violet" | "sun"
> = {
  Engineering: "mint",
  Product: "violet",
  Careers: "sun",
} as const;
