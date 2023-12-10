import { MDXContent } from "@/components/MDXContent";
import { allBlogs } from "contentlayer/generated";
import { notFound } from "next/navigation";

export async function generateStaticParams() {
  return allBlogs
    .filter((post) => post.date)
    .map((post) => ({ slug: post.slug }));
}

interface PostPageParams {
  postId: string;
}

interface PostPageProps {
  params: PostPageParams;
}

export default function PostPage({ params }: PostPageProps) {
  const post = allBlogs.find(({ slug }) => slug === params.postId);
  if (!post?.body.code) return notFound();

  return (
    <div className="max-w-3xl mb-8 prose dark:prose-invert">
      <MDXContent code={post.body.code} />
    </div>
  );
}
