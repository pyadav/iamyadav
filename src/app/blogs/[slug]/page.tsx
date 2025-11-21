import type { Metadata } from "next";
import { cacheLife } from "next/cache";
import { notFound } from "next/navigation";

import { BackButton } from "~/components/back-button";
import { getBlogPost, getBlogPosts } from "~/content/blogs";

type Params = {
  slug: string;
};

export async function generateStaticParams() {
  "use cache";
  cacheLife("max");

  const posts = await getBlogPosts();
  return posts.map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<Params>;
}): Promise<Metadata> {
  "use cache";
  cacheLife("max");

  const { slug } = await params;
  const post = await getBlogPost(slug);
  if (!post) return {};

  return {
    title: post.metadata.title,
    description: post.metadata.summary,
  };
}

export default async function BlogPostPage({
  params,
}: {
  params: Promise<Params>;
}) {
  "use cache";
  cacheLife("max");

  const { slug } = await params;
  const post = await getBlogPost(slug);
  if (!post) notFound();

  const Content = post.Content;

  return (
    <main className="min-h-screen bg-white text-neutral-800">
      <div className="mx-auto w-full max-w-3xl min-h-screen border-x border-neutral-400/20 flex flex-col justify-center">
        <article className="prose duration-500">
          <div className="px-8 py-12">
            <BackButton className="mb-6" />
            <header className="space-y-2 pb-8">
              <p className="text-xs font-semibold uppercase tracking-wider text-neutral-400">
                Notes
              </p>
              <h1 className="text-3xl font-semibold text-neutral-900">
                {post.metadata.title}
              </h1>
              <p className="text-neutral-500">{post.metadata.summary}</p>
              <time
                dateTime={post.metadata.publishedAt}
                className="block text-sm text-neutral-400"
              >
                {new Intl.DateTimeFormat("en-US", {
                  month: "long",
                  day: "numeric",
                  year: "numeric",
                }).format(new Date(post.metadata.publishedAt))}
              </time>
            </header>
            <Content />
          </div>
        </article>
      </div>
    </main>
  );
}
