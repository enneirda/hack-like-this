import { getBlogPosts } from "@/app/utilities/blog";
import { CustomMDX } from "@/app/ui/mdx";
import { constants } from "fs/promises";
import { notFound } from 'next/navigation';


const BlogPost = ({params}: {params: {slug: string}}) => {
    const post = getBlogPosts().find((post) => post.slug === params.slug);

    if (!post) {
        notFound();
    }

    return <section><article className="prose dark:prose-invert">
    <CustomMDX source={post.content} />
  </article>
  </section>
}

export default BlogPost;