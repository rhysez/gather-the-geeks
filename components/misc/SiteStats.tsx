export default function SiteStats({mu_count, q_count, b_count}: {mu_count: number, q_count: number, b_count: number}) {
    return (
        <main className={""}>
            <p>In the last week, we've had...</p>
            <article className={"text-4xl text-left"}>
                <div>
                    <span className={"text-lightning_yellow font-bold text-6xl"}>{mu_count}</span> meet ups created.
                </div>
                <div>
                    <span className={"text-lightning_yellow font-bold text-6xl"}>{q_count}</span> questions asked.
                </div>
                <div>
                    <span className={"text-lightning_yellow font-bold text-6xl"}>{b_count}</span> new blog posts.
                </div>
            </article>
        </main>
    )
}