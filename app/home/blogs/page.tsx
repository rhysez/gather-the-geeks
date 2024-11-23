import BlogCard from "@/components/blogs/BlogCard";

export default function Page() {
    return (
        <main>
            <section>
                <h2 className={"text-lightning_yellow font-bold text-4xl"}>
                    Discover Blogs from other geeks.
                </h2>
                <p className={"opacity-75 italic text-2xl"}>...or write your own!</p>
            </section>

            <section className={"mt-8"}>
                <h4 className={"text-2xl my-2 font-bold"}>Latest blogs...</h4>
                <article className={"space-y-4"}>
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
                        title={"Why I think a good networks wins over any resume"}
                        author={"Jim Dobbins"}
                        timestamp={"13:52 on Friday, 15th November"}
                    />
                </article>
            </section>
        </main>
    )
}