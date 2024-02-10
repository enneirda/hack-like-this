import Link from "next/link";
import { YoutubeVideo } from "./components/YTVid";
import { getBlogPosts } from "./utilities/blog";

export default function Home() {
  const allBlogs = getBlogPosts();

  const sortedBlogs =  allBlogs
    .sort((a, b) => {
      if (
        new Date(a.metadata.publishedAt) > new Date(b.metadata.publishedAt)
      ) {
        return -1;
      }
      return 1;
    })

  
  return (<div>
    <p className="my-8">
      Welcome to Hack Like This, name inspired by Muni Long's "Black Like This." This blog was created by a black woman who is in love with solving problems through programming. Much like being black feels magical, so does being able to "hack" things together... like this
    </p>


<YoutubeVideo/>

<p className="mt-8">
    Feel free to look around, sign the guestbook, and leave feedback if you have any :)
    </p>
    <div className="mb-32 mt-8 grid text-center lg:max-w-5xl lg:w-full lg:mb-0 lg:grid-cols-2 lg:text-left gap-8">

    <Link
          href={`/blog/${sortedBlogs[0].slug}`}
          className="group rounded-lg border border-gray-600  px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
        >
          <h2 className={`mb-3 text-xl font-bold text-center`}>
            Latest Blog Post
            
          </h2>
          <p className={`m-0 max-w-[30ch] text-lg font-bold text-center opacity-50`}>
           {sortedBlogs[0].metadata.title}
          </p>
          
        </Link>

    <Link
          href={`/demos`}
          className="group rounded-lg border border-gray-600  px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
        >
          <h2 className={`mb-3 text-xl font-bold text-center`}>
            Latest Demo
            
          </h2>
          <p className={`m-0 max-w-[30ch] text-lg font-bold text-center opacity-50`}>
           Typewriter Animation With Tailwind
          </p>
          
        </Link>




      </div>




  </div>




  );
}
