"use client";

import { motion } from "motion/react";
import type { LucideIcon } from "lucide-react";
import { Github, Twitter } from "lucide-react";
import type { ReactNode } from "react";
import Link from "next/link";

type ParagraphConfig = {
  id: string;
  content: ReactNode;
  delay: number;
  className?: string;
};

const bioParagraphs: ParagraphConfig[] = [
  {
    id: "intro",
    delay: 0,
    className: "drop-cap",
    content: (
      <>
        <span className="font-semibold">I&apos;m yadav -</span> building digital
        software at &nbsp;
        <Link href="https://missing.studio" className="link-muted">
          Missing Studio
        </Link>
      </>
    ),
  },
  {
    id: "current",
    delay: 0.1,

    content: (
      <>
        I am running a dev studio working with AI teams to build interfaces,
        systems, and marketing sites. I care about beautiful interfaces,
        scalable systems, and thoughtful product experiences.
      </>
    ),
  },
];

type InlineNode =
  | { type: "text"; value: string }
  | { type: "link"; label: string; href: string };

const infoParagraphs: Array<{ id: string; nodes: InlineNode[] }> = [
  {
    id: "updates",
    nodes: [
      { type: "text", value: "I share notes and updates on " },
      {
        type: "link",
        label: "X",
        href: "https://x.com/iamya6av",
      },
      { type: "text", value: ", and open-source code on " },
      {
        type: "link",
        label: "Github",
        href: "https://github.com/pyadav",
      },
      { type: "text", value: "." },
    ],
  },
  {
    id: "contact",
    nodes: [
      { type: "text", value: "For collaborations, reach me at " },
      {
        type: "link",
        label: "praveen.yadav@missing.studio",
        href: "mailto:praveen.yadav@missing.studio",
      },
      { type: "text", value: "." },
    ],
  },
];

const socials: Array<{
  id: string;
  label: string;
  href: string;
  icon: LucideIcon;
  delay: number;
}> = [
  {
    id: "x",
    label: "X (Twitter)",
    href: "https://x.com/iamya6av",
    icon: Twitter,
    delay: 0.3,
  },
  {
    id: "github",
    label: "GitHub",
    href: "https://github.com/pyadav",
    icon: Github,
    delay: 0.35,
  },
];

const fadeIn = {
  initial: { opacity: 0, y: 20 },
  whileInView: { opacity: 1, y: 0 },
};

export function BioSection() {
  return (
    <motion.section
      id="bio"
      className="flex w-full justify-center px-6 pt-40 pb-[200px] sm:px-10"
      initial="initial"
      whileInView="whileInView"
      viewport={{ once: true, amount: 0.4 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      aria-labelledby="bio-heading"
    >
      <div className="flex w-full max-w-[560px] flex-col items-start space-y-[18px] text-left text-[16px] leading-[150%] text-[#555555]">
        <h1 id="bio-heading" className="sr-only">
          Developer bio
        </h1>

        {bioParagraphs.map((paragraph) => (
          <motion.p
            key={paragraph.id}
            className={`text-balance ${paragraph.className ?? ""}`}
            initial={fadeIn.initial}
            whileInView={fadeIn.whileInView}
            viewport={{ once: true }}
            transition={{
              duration: 0.6,
              ease: "easeOut",
              delay: paragraph.delay,
            }}
          >
            {paragraph.content}
          </motion.p>
        ))}

        <motion.div
          className="space-y-3 text-[#555555]"
          initial={fadeIn.initial}
          whileInView={fadeIn.whileInView}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: "easeOut", delay: 0.3 }}
        >
          {infoParagraphs.map((paragraph) => (
            <p key={paragraph.id}>
              {paragraph.nodes.map((node, index) =>
                node.type === "text" ? (
                  <span key={`${paragraph.id}-text-${index}`}>
                    {node.value}
                  </span>
                ) : (
                  <Link
                    key={`${paragraph.id}-link-${node.label}`}
                    href={node.href}
                    className="link-muted"
                  >
                    {node.label}
                  </Link>
                ),
              )}
            </p>
          ))}
        </motion.div>

        <motion.nav
          aria-label="Social links"
          className="pt-6"
          initial={fadeIn.initial}
          whileInView={fadeIn.whileInView}
          transition={{
            duration: 0.6,
            ease: "easeOut",
            delay: 0.35,
          }}
          viewport={{ once: true }}
        >
          <ul className="flex items-center gap-4 text-[#C7C7C7]">
            {socials.map((social) => (
              <li key={social.id}>
                <motion.a
                  href={social.href}
                  target="_blank"
                  rel="noreferrer"
                  aria-label={social.label}
                  className="inline-flex items-center text-inherit"
                  initial={{ opacity: 0, y: 12 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  whileHover={{ y: -2, color: "#9A9A9A" }}
                  transition={{
                    duration: 0.5,
                    ease: "easeOut",
                    delay: social.delay,
                  }}
                  viewport={{ once: true }}
                >
                  <social.icon size={20} strokeWidth={1.5} />
                </motion.a>
              </li>
            ))}
          </ul>
        </motion.nav>
      </div>
    </motion.section>
  );
}
