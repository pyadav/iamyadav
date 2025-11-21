import { cacheLife } from "next/cache";
import Link from "next/link";
import type { Route } from "next";
import { Fragment } from "react";

import {
  AnimatedInfoGroup,
  AnimatedParagraph,
  AnimatedSection,
} from "~/components/animated-primitives";
import { BIO_PARAGRAPHS, INFO_PARAGRAPHS } from "~/lib/bio/content";
import type { InlineNode } from "~/lib/bio/types";

export async function BioSection() {
  "use cache";
  cacheLife("max");

  return (
    <AnimatedSection
      id="bio"
      className="flex w-full justify-center px-6 pt-40 pb-[60px] sm:px-10"
      aria-labelledby="bio-heading"
    >
      <div className="flex w-full max-w-[560px] flex-col items-start space-y-[18px] text-left text-[16px] leading-[150%] text-[#555555]">
        <h1 id="bio-heading" className="sr-only">
          Developer bio
        </h1>

        {BIO_PARAGRAPHS.map((paragraph) => (
          <AnimatedParagraph
            key={paragraph.id}
            delay={paragraph.delay}
            className={`text-balance ${paragraph.className ?? ""}`}
          >
            {renderInlineNodes(paragraph.nodes)}
          </AnimatedParagraph>
        ))}

        <AnimatedInfoGroup delay={0.3} className="space-y-3 text-[#555555]">
          {INFO_PARAGRAPHS.map((paragraph) => (
            <p key={paragraph.id}>{renderInlineNodes(paragraph.nodes)}</p>
          ))}
        </AnimatedInfoGroup>
      </div>
    </AnimatedSection>
  );
}

function renderInlineNodes(nodes: readonly InlineNode[]) {
  return nodes.map((node, index) => {
    if (node.kind === "text") {
      if (node.className) {
        return (
          <span key={`text-${index}`} className={node.className}>
            {node.value}
          </span>
        );
      }

      return <Fragment key={`text-${index}`}>{node.value}</Fragment>;
    }

    const key = `link-${node.label}-${index}`;
    if (node.external ?? isExternalHref(node.href)) {
      return (
        <a
          key={key}
          href={node.href}
          className="link-muted"
          target="_blank"
          rel="noreferrer"
        >
          {node.label}
        </a>
      );
    }

    return (
      <Link key={key} href={node.href as Route} className="link-muted">
        {node.label}
      </Link>
    );
  });
}

function isExternalHref(href: string) {
  return /^(https?:\/\/|mailto:|tel:)/.test(href);
}
