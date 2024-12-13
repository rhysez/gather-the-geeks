import Link from "next/link";

export default function BlogCard({id, title, author}: {id: string; title: string; author: string}) {
    return (
        <div className={"flex flex-col items-start space-y-4 p-4 bg-lighter_background rounded-sm lg:w-1/2 md:w-[75%]"}>
            <Link href={`/blogs/${id}`}>
                <h4 className={"text-lightning_yellow font-bold underline text-2xl"}>{title}</h4>
            </Link>
            <p className={"italic text-lg opacity-65"}>Showing a small snippet of the blog post...</p>
            <p>by {author}</p>
        </div>
    )
}