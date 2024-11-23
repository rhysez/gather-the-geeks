

export default function BlogCard({title, author, timestamp}: {title: string; author: string, timestamp: string}) {
    return (
        <div className={"flex flex-col items-start space-y-4 p-4 bg-lighter_background rounded-sm lg:w-1/2 md:w-[75%]"}>
            <h4 className={"text-lightning_yellow font-bold underline text-2xl"}>{title}</h4>
            <p className={"italic text-lg opacity-65"}>Showing a small snippet of the blog post...</p>
            <p>by {author} on {timestamp}</p>
        </div>
    )
}