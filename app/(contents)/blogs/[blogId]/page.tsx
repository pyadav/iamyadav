import { Avatar } from "@/components/Avatar";
import { Label } from "@/components/Label";
import { Tooltip, TooltipContent, TooltipTrigger } from "@/components/Tooltip";
import { Link } from "@/components/primitive/Link";
import { CategoryColors } from "@/config/blog";
import { formatDate } from "@/utils";
import { allBlogs } from "contentlayer/generated";
import { useMDXComponent } from "next-contentlayer/hooks";
import NextImage from "next/image";
import { FaArrowLeft } from "react-icons/fa";

const getBlogBySlug = (slug: string) => {
  const blog = allBlogs.find((blog) => blog.slug === slug);
  if (!blog) throw new Error(`Blog not found for slug: ${slug}`);
  return blog;
};

interface BlogPageParams {
  blogId: string;
}

interface BlogPageProps {
  params: BlogPageParams;
}

export default function BlogPage({ params }: BlogPageProps) {
  const blog = getBlogBySlug(params.blogId);
  const MDXContent = useMDXComponent(blog.body.code);

  return (
    <main className="px-container pb-24">
      <article className="relative mx-auto max-w-2xl pb-16 pt-6 md:pb-32 md:pt-12">
        <Tooltip placement="top">
          <TooltipTrigger asChild>
            <Link
              href="/blogs"
              role="button"
              aria-label="View all blogs"
              className="a-reset hover:bg-white-200 absolute -left-16 top-[46px] hidden p-1 opacity-50 hover:bg-black-100 dark:hover:bg-black-900 md:block"
            >
              <span className="sr-only">View all blogs</span>
              <FaArrowLeft size={24} />
            </Link>
          </TooltipTrigger>
          <TooltipContent>View all blogs</TooltipContent>
        </Tooltip>
        <div className="md:mb-16">
          {blog.category && (
            <Label
              color={CategoryColors[blog.category]}
              className="inline-block"
            >
              {blog.category}
            </Label>
          )}
          <h1 className="my-5 font-accent text-4xl font-bold md:text-5xl md:leading-tight">
            {blog.title}
          </h1>
          <p className="text-lg">{blog.summary}</p>
          <div className="mt-8 flex items-center justify-start gap-6">
            <div className="flex items-center gap-2">
              <Avatar size={28} />
              <span className="text-sm font-medium opacity-75">
                Praveen Yadav
              </span>
            </div>
            <time dateTime={blog.publishedAt} className="text-sm opacity-75">
              {formatDate(blog.publishedAt, "LLLL d, yyyy")}
            </time>
          </div>
          {blog.cover && (
            <div className="my-8">
              <NextImage
                src={blog.cover.src}
                alt={blog.cover.alt}
                width={1200}
                height={800}
                className="mb-4 max-h-[400px] rounded-lg bg-black-50 object-cover ring-4 ring-sun ring-offset-2 ring-offset-white dark:bg-black-950 dark:ring-offset-black"
              />
              {blog.cover.caption?.html && (
                <div
                  className="text-center text-sm opacity-50"
                  dangerouslySetInnerHTML={{ __html: blog.cover.caption.html }}
                />
              )}
            </div>
          )}
        </div>

        <div className="prose-custom">
          <MDXContent components={{}} />
        </div>
        <div className="mt-12 flex flex-wrap items-center justify-start gap-2">
          {blog.tags?.map((tag, i) => {
            return (
              <Label
                key={i}
                color="gray"
                className="select-none transition-all hover:ring-2 hover:ring-violet/50 hover:ring-offset-2 hover:ring-offset-white dark:hover:ring-offset-black"
              >
                {tag}
              </Label>
            );
          })}
        </div>
      </article>
    </main>
  );
}

export async function generateStaticParams() {
  return allBlogs
    .filter((blog) => blog.publishedAt)
    .map((blog) => ({ slug: blog.slug }));
}

type GenerateMetadataParams = { params: { blogId: string } };
export const generateMetadata = (props: GenerateMetadataParams): Metadata => {
  const blog = getBlogBySlug(props.params.blogId);
  return {
    title: {
      absolute: blog.title,
    },
    description: blog.summary,
    keywords: blog.tags,
    twitter: {
      title: blog.title,
      description: blog.summary,
      site: "@iamya6av",
    },
    alternates: {
      canonical: `https://iamyadav.com/blogs/${blog.slug}`,
    },
    openGraph: {
      type: "article",
      title: blog.title,
      description: blog.summary,
      url: `https://iamyadav.com/blogs/${blog.slug}`,
      tags: blog.tags,
      publishedTime: blog.publishedAt,
      authors: "Praveen Yadav",
    },
  };
};
