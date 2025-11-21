import type { LucideIcon } from "lucide-react";

export type TextNode = {
  kind: "text";
  value: string;
  className?: string;
};

export type LinkNode = {
  kind: "link";
  label: string;
  href: string;
  external?: boolean;
};

export type InlineNode = TextNode | LinkNode;
export type BioParagraph = {
  id: string;
  delay?: number;
  className?: string;
  nodes: readonly InlineNode[];
};

export type InfoParagraph = {
  id: string;
  nodes: readonly InlineNode[];
};
