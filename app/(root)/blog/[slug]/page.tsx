import MaxLimitWrapper from "@/components/elements/MaxLimitWrapper";
import Options from "@/components/header/Options";
import Hero from "@/components/hero/Hero";
import { getPostBySlug } from "@/controllers/postController";
import { IPost } from "@/lib/interface";
import { formatDate } from "@/lib/utils";
import { CalendarDays, FilePenLine } from "lucide-react";
import { notFound } from "next/navigation";

const BlogPage = async ({ params }: any) => {
  const { slug } = params;
  const res = await getPostBySlug(slug);

  if (res.status == 404) {
    notFound();
  }

  const post: IPost = res;

  return (
    <>
      <Options />
      <MaxLimitWrapper>
        {post && (
          <div className="blog py-20">
            <h1>{post.title}</h1>
            <h2 className="text-center">{post.subtitle}</h2>{" "}
            {/* Ensure subtitle is rendered */}
            <p className="text-sm text-gray-500 flex items-center justify-end space-x-4 mt-4">
              <span className="flex gap-1 items-center">
                <FilePenLine />
                {post.author}
              </span>
              <span className="flex gap-1 items-center">
                <CalendarDays />
                {post.createdAt && formatDate(post.createdAt)}
              </span>
            </p>
            {post.image && (
              <Hero image={post.image} className="mt-4 md:rounded-none" />
            )}
            {post.content && (
              <div
                className="text-base max-w-screen-lg mx-auto my-8"
                dangerouslySetInnerHTML={{ __html: post.content }}
              />
            )}
          </div>
        )}
      </MaxLimitWrapper>
    </>
  );
};

export default BlogPage;
