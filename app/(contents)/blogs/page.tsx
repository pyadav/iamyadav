import { lexendDeca } from "@/app/fonts";
import { Hero } from "@/components/Hero";
import { Feed } from "@/components/layouts/Feed";
import clsx from "clsx";
import { allBlogs } from "contentlayer/generated";

export default function Home() {
  return (
    <main className="px-container mx-auto max-w-container pb-24">
      <Hero
        className="py-16 md:py-20"
        minHeight={false}
        title={HeroTitle}
        description="I regularly share my learnings on how to build distributed system."
      />
      <Feed>
        {allBlogs.map(({ summary, publishedAt, slug, title }) => (
          <Feed.Item
            key={slug}
            link={`/blogs/${slug}`}
            title={title}
            summary={summary}
            publishedAt={publishedAt}
          />
        ))}
      </Feed>
    </main>
  );
}

const HeroTitle = (
  <div className={clsx(lexendDeca.className)}>
    <span>Writing Code </span>
    <span className="text-violet-400">and Content.</span>
  </div>
);
