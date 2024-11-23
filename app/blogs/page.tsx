import BlogCard from "@/components/blogs/BlogCard";
import {Button} from "@/components/ui/button";
import Link from "next/link";

export default function Page() {
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
                </article>
            </section>
        </main>
    )
}