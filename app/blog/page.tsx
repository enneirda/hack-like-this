import Link from "next/link";
import { getBlogPosts } from "../utilities/blog";

const Blog = () => {
    const allBlogs = getBlogPosts();

    return (<section>
        {allBlogs
          .sort((a, b) => {
            if (
              new Date(a.metadata.publishedAt) > new Date(b.metadata.publishedAt)
            ) {
              return -1;
            }
            return 1;
          })
          .map((post, index) => (
            <Link
              key={post.slug}
              className="flex flex-col space-y-1 mb-4"
              href={`/blog/${post.slug}`}
            >
              <div className="w-full flex flex-col">
                <p className="tracking-tight">
                <span className="text-stone-400	">{index + 1}</span> {post.metadata.title}
                </p>
            
              </div>
            </Link>
          ))}
      </section>)

}

export default Blog;