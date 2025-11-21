import type { Route } from "next";
import { cacheLife } from "next/cache";
import Link from "next/link";
import { ArrowUpRight, type LucideIcon } from "lucide-react";
import type { ReactNode } from "react";

import { AnimatedSection } from "~/components/animated-primitives";
import { blogPosts } from "~/content/blogs";
import { projects } from "~/content/projects";

export async function ProjectsSection() {
  "use cache";
  cacheLife("max");

  return (
    <AnimatedSection
      id="projects"
      aria-labelledby="projects-heading"
      className="flex w-full justify-center px-6 pb-16 sm:px-10"
    >
      <div className="w-full max-w-[560px] text-[15px] leading-[150%] text-[#555555]">
        <SectionHeading id="projects-heading">Projects</SectionHeading>
        <ul className="space-y-2 pt-4">
          {projects.map((project) => (
            <li key={project.slug} className="rounded-xl">
              <Link
                href={project.href as Route}
                className="group flex w-full items-start justify-between gap-4 rounded-xl px-4 py-4 transition duration-200 hover:bg-[#f5f5f5] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#d9d9d9]"
              >
                <div className="space-y-1">
                  <span className="font-medium text-[#2f2f2f] transition group-hover:text-[#4a4a4a]">
                    {project.metadata.title}
                  </span>
                  <p className="text-sm text-[#7d7d7d]">
                    {project.metadata.summary}
                  </p>
                </div>
                {project.metadata?.externalUrl ? (
                  <ExternalIndicator icon={ArrowUpRight} />
                ) : null}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </AnimatedSection>
  );
}

export async function BlogSection() {
  "use cache";
  cacheLife("max");

  const formatter = new Intl.DateTimeFormat("en-US", {
    month: "short",
    year: "2-digit",
  });

  return (
    <AnimatedSection
      id="blog"
      aria-labelledby="blog-heading"
      className="flex w-full justify-center px-6 pb-16 sm:px-10"
    >
      <div className="w-full max-w-[560px] text-[15px] leading-[150%] text-[#555555]">
        <SectionHeading id="blog-heading">Latest writing</SectionHeading>
        <ul className="space-y-2 pt-4">
          {blogPosts.map((post) => (
            <li key={post.slug} className="rounded-xl">
              <Link
                href={post.href as Route}
                className="group flex w-full items-center justify-between gap-4 rounded-xl px-4 py-4 transition duration-200 hover:bg-[#f5f5f5] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#d9d9d9]"
              >
                <div className="space-y-1 text-left">
                  <span className="font-medium text-[#2f2f2f] transition group-hover:text-[#4a4a4a]">
                    {post.metadata.title}
                  </span>
                  <p className="text-sm text-[#7d7d7d]">
                    {post.metadata.summary}
                  </p>
                </div>
                <time
                  dateTime={post.metadata.publishedAt}
                  className="text-xs uppercase tracking-[0.16em] text-[#a4a4a4] transition group-hover:text-[#7c7c7c]"
                >
                  {formatter.format(new Date(post.metadata.publishedAt))}
                </time>
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </AnimatedSection>
  );
}

type SectionHeadingProps = {
  id: string;
  children: ReactNode;
};

function SectionHeading({ id, children }: SectionHeadingProps) {
  return (
    <div className="text-xs font-semibold uppercase tracking-[0.22em] text-[#4f4e4e]">
      <h2 id={id}>{children}</h2>
    </div>
  );
}

type ExternalIndicatorProps = {
  icon: LucideIcon;
};

function ExternalIndicator({ icon: Icon }: ExternalIndicatorProps) {
  return (
    <span
      aria-hidden="true"
      className="text-[#c0c0c0] transition group-hover:text-[#8d8d8d]"
    >
      <Icon size={16} strokeWidth={1.25} />
    </span>
  );
}
