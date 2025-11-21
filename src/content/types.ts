import type { ComponentType } from "react";

export type BaseContentMetadata = {
  title: string;
  summary: string;
  publishedAt: string;
  externalUrl?: string;
};

export type ContentEntry<
  TMeta extends BaseContentMetadata = BaseContentMetadata,
> = {
  slug: string;
  href: string;
  metadata: TMeta;
  Content: ComponentType;
};
