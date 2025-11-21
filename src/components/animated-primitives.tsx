"use client";

import { motion, type HTMLMotionProps } from "motion/react";

const baseTransition = {
  duration: 0.6,
  ease: "easeOut" as const,
};

type SectionProps = HTMLMotionProps<"section"> & { delay?: number };
export function AnimatedSection({
  children,
  delay = 0,
  ...props
}: SectionProps) {
  return (
    <motion.section
      {...props}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.4 }}
      transition={{ ...baseTransition, delay }}
    >
      {children}
    </motion.section>
  );
}

type ParagraphProps = HTMLMotionProps<"p"> & { delay?: number };
export function AnimatedParagraph({
  children,
  delay = 0,
  ...props
}: ParagraphProps) {
  return (
    <motion.p
      {...props}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ ...baseTransition, delay }}
    >
      {children}
    </motion.p>
  );
}

type InfoGroupProps = HTMLMotionProps<"div"> & { delay?: number };
export function AnimatedInfoGroup({
  children,
  delay = 0,
  ...props
}: InfoGroupProps) {
  return (
    <motion.div
      {...props}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ ...baseTransition, delay }}
    >
      {children}
    </motion.div>
  );
}

type NavProps = HTMLMotionProps<"nav"> & { delay?: number };
export function AnimatedNav({ children, delay = 0, ...props }: NavProps) {
  return (
    <motion.nav
      {...props}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ ...baseTransition, delay }}
    >
      {children}
    </motion.nav>
  );
}

type SocialLinkProps = HTMLMotionProps<"a"> & { delay?: number };
export function AnimatedSocialLink({
  children,
  delay = 0,
  ...props
}: SocialLinkProps) {
  return (
    <motion.a
      {...props}
      initial={{ opacity: 0, y: 12 }}
      whileInView={{ opacity: 1, y: 0 }}
      whileHover={{ y: -2, color: "#9A9A9A" }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, ease: "easeOut", delay }}
    >
      {children}
    </motion.a>
  );
}
