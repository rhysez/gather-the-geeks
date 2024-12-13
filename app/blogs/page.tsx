import BlogCard from "@/components/blogs/BlogCard";
import {Button} from "@/components/ui/button";
import Link from "next/link";
import { getPosts } from "@/lib/data";
import { Post } from "@/lib/types";

export default async function Page() {
    const posts: Post[] = await getPosts();
    console.log(posts)

    return (
        <main>
            <section className={"flex justify-between"}>
                <div>
                    <h2 className={"text-lightning_yellow font-bold text-4xl"}>
                        Discover blogs from other geeks.
                    </h2>
                    <p className={"opacity-75 italic text-2xl"}>...or write your own!</p>
                </div>
                <Link href={"/blogs/create"}>
                    <Button className={"bg-lighter_background text-foreground border-2 " +
                                        "border-neutral-600 font-bold text-lg hover:border-lightning_yellow"}>
                        Create a post
                    </Button>
                </Link>
            </section>

            <section className={"mt-12"}>
                <h4 className={"text-2xl my-2 font-bold"}>Latest blogs...</h4>
                <article className={"space-y-4"}>
                    {
                        posts.length ? posts.slice(0, 6).map((post: Post) => {
                            return (
                                <BlogCard
                                    title={post.title}
                                    author={post.author}
                                    key={post.id}
                                />
                            )
                        }) : <p>No posts to display</p>
                    }
                </article>
            </section>
        </main>
    )
}