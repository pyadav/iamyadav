import type { Route } from "next";
import { cacheLife } from "next/cache";
import Link from "next/link";
import { ArrowUpRight, type LucideIcon } from "lucide-react";
import type { ReactNode } from "react";

import { AnimatedSection } from "~/components/animated-primitives";
import { getBlogPosts } from "~/content/blogs";
import { getProjects } from "~/content/projects";

export async function ProjectsSection() {
  "use cache";
  cacheLife("max");
  const projects = await getProjects();

  return (
    <AnimatedSection
      id="projects"
      aria-labelledby="projects-heading"
      className="flex justify-center px-6 sm:px-10"
    >
      <div className="w-full text-[15px] leading-relaxed text-neutral-700">
        <SectionHeading id="projects-heading">Projects</SectionHeading>
        <ul className="m-0 list-none space-y-2 pt-4 pl-0">
          {projects.map((project) => (
            <li key={project.slug} className="rounded-xl">
              <Link
                href={project.href as Route}
                className="group relative flex w-full items-start justify-between gap-4 rounded-xl py-4 transition duration-200 focus-visible:outline  focus-visible:outline-offset-2 focus-visible:outline-[#d9d9d9]"
              >
                <span
                  aria-hidden="true"
                  className="pointer-events-none absolute inset-y-0 -left-4 -right-4 rounded-xl bg-transparent transition duration-200 group-hover:bg-[#f5f5f5] group-focus-visible:bg-[#f5f5f5]"
                />

                <div className="relative z-10 space-y-1">
                  <span className="font-medium text-[#2f2f2f] transition group-hover:text-[#4a4a4a]">
                    {project.metadata.title}
                  </span>
                  <p className="text-sm text-[#7d7d7d]">
                    {project.metadata.summary}
                  </p>
                </div>
                {project.metadata?.externalUrl ? (
                  <div className="relative z-10">
                    <ExternalIndicator icon={ArrowUpRight} />
                  </div>
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
  const blogPosts = await getBlogPosts();

  const formatter = new Intl.DateTimeFormat("en-US", {
    month: "short",
    year: "2-digit",
  });

  return (
    <AnimatedSection
      id="blog"
      aria-labelledby="blog-heading"
      className="flex justify-center px-6 pb-8 sm:px-10"
    >
      <div className="w-full text-[15px] leading-relaxed text-neutral-700">
        <SectionHeading id="blog-heading">Latest writing</SectionHeading>
        <ul className="m-0 list-none space-y-2 pt-4 pl-0">
          {blogPosts.map((post) => (
            <li key={post.slug} className="rounded-xl">
              <Link
                href={post.href as Route}
                className="group relative flex w-full items-center justify-between gap-4 rounded-xl py-4 transition duration-200 focus-visible:outline  focus-visible:outline-offset-2 focus-visible:outline-neutral-300"
              >
                <span
                  aria-hidden="true"
                  className="pointer-events-none absolute inset-y-0 -left-4 -right-4 rounded-xl bg-transparent transition duration-200 group-hover:bg-neutral-100 group-focus-visible:bg-neutral-100"
                />

                <div className="relative z-10 space-y-1 text-left">
                  <span className="font-medium text-neutral-900 transition group-hover:text-neutral-950">
                    {post.metadata.title}
                  </span>
                  <p className="text-sm text-neutral-500">
                    {post.metadata.summary}
                  </p>
                </div>
                <time
                  dateTime={post.metadata.publishedAt}
                  className="relative z-10 text-xs uppercase tracking-[0.16em] text-neutral-400 transition group-hover:text-neutral-600"
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
    <div className="text-xs font-semibold uppercase tracking-[0.22em] text-neutral-500">
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
