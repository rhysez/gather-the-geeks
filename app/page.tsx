import SiteStats from "@/components/misc/SiteStats";
import BlogCard from "@/components/blogs/BlogCard";
import { getPosts } from "@/lib/data";
import { Post } from "@/lib/types";

export default async function Home() {
    const posts: Post[] = await getPosts()

  return (
      <main className={"flex flex-col lg:flex-row justify-between space-y-12 lg:space-y-0"}>
          <article>
              <SiteStats mu_count={10} q_count={14} b_count={posts.length} />
          </article>

          <section className={"space-y-4 flex flex-col lg:items-end"}>
              <h2 className={"text-2xl font-bold underline"}>Recent blogs</h2>
              {
                posts.map((post: Post) => {
                    return (
                        <BlogCard
                            id={post.id}
                            title={post.title}
                            author={post.author}
                         />
                    )
                })
              }
          </section>

      </main>
  );
}
