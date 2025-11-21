import type { BioParagraph, InfoParagraph } from "~/lib/bio/types";

export const BIO_PARAGRAPHS: readonly BioParagraph[] = [
  {
    id: "intro",
    delay: 0,
    className: "drop-cap",
    nodes: [
      { kind: "text", value: "I'm yadav -", className: "font-semibold" },
      { kind: "text", value: " building digital software at " },
      {
        kind: "link",
        label: "Missing Studio",
        href: "https://missing.studio",
        external: true,
      },
      { kind: "text", value: "." },
    ],
  },
  {
    id: "current",
    delay: 0.1,
    nodes: [
      {
        kind: "text",
        value:
          "I am running a dev studio working with AI teams to build interfaces, systems, and marketing sites. I care about beautiful interfaces, scalable systems, and thoughtful product experiences.",
      },
    ],
  },
];

export const INFO_PARAGRAPHS: readonly InfoParagraph[] = [
  {
    id: "updates",
    nodes: [
      { kind: "text", value: "I share notes and updates on " },
      {
        kind: "link",
        label: "X",
        href: "https://x.com/iamya6av",
        external: true,
      },
      { kind: "text", value: ", and open-source code on " },
      {
        kind: "link",
        label: "Github",
        href: "https://github.com/pyadav",
        external: true,
      },
      { kind: "text", value: "." },
    ],
  },
  {
    id: "contact",
    nodes: [
      { kind: "text", value: "For collaborations, reach me at " },
      {
        kind: "link",
        label: "praveen.yadav@missing.studio",
        href: "mailto:praveen.yadav@missing.studio",
        external: true,
      },
      { kind: "text", value: "." },
    ],
  },
];
