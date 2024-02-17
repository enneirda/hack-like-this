import { getBlogPosts } from "@/app/utilities/blog";
import { CustomMDX } from "@/app/ui/mdx";
import { notFound } from "next/navigation";
import Link from "next/link";
import { fetchViewsBySlug } from "@/app/db/data";
import { incrementViews } from "@/app/db/actions";
import { cache } from "react";

const increment = cache(incrementViews);

const BlogPost = async ({ params }: { params: { slug: string } }) => {
  const allPosts = getBlogPosts();
  const postIndex = allPosts.findIndex((post) => post.slug === params.slug);

  if (postIndex === -1) {
    notFound();
  }

  const post = allPosts[postIndex];
  let prevPost;
  let nextPost;

  if (postIndex > 0) {
    prevPost = allPosts[postIndex - 1];
  }

  if (postIndex !== allPosts.length - 1) {
    nextPost = allPosts[postIndex + 1];
  }

  const { title, publishedAt, summary } = post.metadata;

  const views = await fetchViewsBySlug(post.slug);
  increment(post.slug);

  return (
    <section>
      <script
        type="application/ld+json"
        suppressHydrationWarning
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "BlogPosting",
            headline: title,
            dateCreated: publishedAt,
            datePublished: publishedAt,
            dateModified: publishedAt,
            description: summary,
            author: {
              "@type": "Person",
              name: "Adrienne Bailey",
            },
          }),
        }}
      />
      <h1 className="title font-medium text-2xl text-dark-pink-1 tracking-tigher max-w-[650px]">
        {title}
      </h1>
      <div className="flex justify-between items-center mt-2 mb-8 text-sm max-w-[650px]">
        <p>{publishedAt}</p>
        <p>{views} views</p>
      </div>

      <article className="prose dark:prose-invert">
        <CustomMDX source={post.content} />
      </article>
      <div className="flex justify-between items-center mt-8 mb-8 max-w-[650px] font-bold">
        {prevPost && (
          <Link
            className="hover:text-pink-300"
            href={`/blog/${prevPost.slug}`}
          >{`<< Previous Post: ${prevPost.metadata.title}`}</Link>
        )}

        {nextPost && (
          <Link
            className="hover:text-pink-300"
            href={`/blog/${nextPost.slug}`}
          >{`Next Post: ${nextPost.metadata.title} >>`}</Link>
        )}
      </div>
    </section>
  );
};

export default BlogPost;
