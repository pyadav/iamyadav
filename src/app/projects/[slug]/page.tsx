import type { Metadata } from "next";
import { notFound } from "next/navigation";

import { projects } from "~/content/projects";

type Params = {
  slug: string;
};

export function generateStaticParams() {
  return projects.map((project) => ({ slug: project.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<Params>;
}): Promise<Metadata> {
  const { slug } = await params;
  const project = projects.find((item) => item.slug === slug);
  if (!project) {
    return {};
  }

  return {
    title: project.metadata.title,
    description: project.metadata.summary,
  };
}

export default async function ProjectPage({
  params,
}: {
  params: Promise<Params>;
}) {
  const { slug } = await params;
  const project = projects.find((item) => item.slug === slug);
  if (!project) {
    notFound();
  }

  const Content = project.Content;
  const formatter = new Intl.DateTimeFormat("en-US", {
    month: "long",
    day: "numeric",
    year: "numeric",
  });

  return (
    <article className="mx-auto w-full max-w-3xl px-6 py-16 text-neutral-800">
      <header className="space-y-2 pb-8">
        <p className="text-xs font-semibold uppercase tracking-[0.2em] text-neutral-400">
          Project
        </p>
        <h1 className="text-3xl font-semibold text-neutral-900">
          {project.metadata.title}
        </h1>
        <p className="text-neutral-500">{project.metadata.summary}</p>
        <time
          dateTime={project.metadata.publishedAt}
          className="block text-sm text-neutral-400"
        >
          {formatter.format(new Date(project.metadata.publishedAt))}
        </time>
        {project.metadata.externalUrl ? (
          <a
            href={project.metadata.externalUrl}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center text-sm font-medium text-neutral-700 underline decoration-dotted underline-offset-4 transition hover:text-neutral-900"
          >
            View live
          </a>
        ) : null}
      </header>
      <div className="space-y-6 text-[15px] leading-relaxed text-neutral-800">
        <Content />
      </div>
    </article>
  );
}
