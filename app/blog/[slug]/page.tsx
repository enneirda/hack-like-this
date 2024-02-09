import { getBlogPosts } from "@/app/blog/blog";
import { CustomMDX } from "@/app/ui/mdx";

const BlogPost = () => {


    const post = getBlogPosts()[0];
    return <section><article className="prose dark:prose-invert">
    <CustomMDX source={post.content} />
  </article>
  </section>
}

export default BlogPost;