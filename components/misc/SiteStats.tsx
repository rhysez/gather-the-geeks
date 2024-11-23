export default function SiteStats() {
    return (
        <main className={""}>
            <p>In the last week, we've had...</p>
            <article className={"text-4xl text-left"}>
                <div>
                    <span className={"text-lightning_yellow font-bold text-6xl"}>12</span> meet ups created.
                </div>
                <div>
                    <span className={"text-lightning_yellow font-bold text-6xl"}>18</span> questions asked.
                </div>
                <div>
                    <span className={"text-lightning_yellow font-bold text-6xl"}>8</span> new blog posts.
                </div>
            </article>
        </main>
    )
}