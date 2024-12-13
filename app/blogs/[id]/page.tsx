import { getPost } from "@/lib/data"
import { Post } from "@/lib/types"

export default async function Page({params}: {params: {id: string}}) {
    const post: Post = await getPost(params.id)

    return (
        <main className={"space-y-12 lg:w-1/2 md:w-[75%] mx-auto mt-6"}>
            <article className={"space-y-4"}>
                <h2 className={"text-lightning_yellow font-bold text-3xl text-center"}>{post.title}</h2>
                <section>
                    <p className={"opacity-75"}>{post.content}</p>
                </section>
            </article>
        </main>
    )
}