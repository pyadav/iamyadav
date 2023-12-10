import { Feed } from "@/components/layouts/Feed";
import { allBlogs } from "contentlayer/generated";

export default function Home() {
  return (
    <Feed>
      {allBlogs.map(({ description, date, slug, title }) => (
        <Feed.Item
          date={date}
          description={description}
          key={slug}
          link={`/posts/${slug}`}
          title={title}
        />
      ))}
    </Feed>
  );
}
