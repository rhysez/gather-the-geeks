import SiteStats from "@/components/misc/SiteStats";
import BlogCard from "@/components/blogs/BlogCard";

export default function Home() {
  return (
      <main className={"flex flex-col lg:flex-row justify-between space-y-12 lg:space-y-0"}>
          <article>
              <SiteStats/>
          </article>

          <section className={"space-y-4 flex flex-col lg:items-end"}>
              <h2 className={"text-2xl font-bold underline"}>Recent blogs</h2>
              <BlogCard
                  title={"I decided to finally try TypeScript!"}
                  author={"Jim Dobbins"}
                  timestamp={"13:52 on Friday, 15th November"}
              />
              <BlogCard
                  title={"How to dockerize Express apps"}
                  author={"Jim Dobbins"}
                  timestamp={"13:52 on Friday, 15th November"}
              />
              <BlogCard
                  title={"Why I think a good network wins over any resume"}
                  author={"Jim Dobbins"}
                  timestamp={"13:52 on Friday, 15th November"}
              />
          </section>

      </main>
  );
}
