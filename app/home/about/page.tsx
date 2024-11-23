const aboutGtg: string =
    `Gather The Geeks is an open-source platform for software developers of call kinds (whether that be web, systems, games, you name it) ` +
    `to organise meetups, socialise, network and generally just help each other to achieve their goals in this difficult job market we find ourselves in.`

const whyDoesThisExist: string =
    `During my job search as a web engineer, I realised that surrounding yourself with others in your niche really helps your own growth. ` +
    `If we think of a platform that allows us to network as developers, we will all think of LinkedIn. However, I find LinkedIn ` +
    `frustrating because it's hard to find genuine conversations that actually help people. So I decided to build Gather The Geeks ` +
    `as a space for developers specifically to connect. The focus of Gather The Geeks is real life meetups, because I think this ` +
    `creates more meaningful connections and leads to more opportunities.`

const aboutTheDeveloper: string =
    `My name is Rhys and I'm a full stack engineer based in the south of England. I really love working with languages like ` +
    `TypeScript and PHP. If I'm not coding or tinkering with a new project, I'm often gaming, reading a book or watching some of my favourite content creators.`

const techStack: string =
    `Gather The Geeks has been built using React (via Next.js), TailwindCSS with components from shadcn on the client. On the server, ` +
    `it uses Express with PostgreSQL.`

export default function Page() {
    return (
        <main className={"space-y-12 lg:w-1/2 md:w-[75%] mx-auto mt-6"}>
            <article className={"space-y-4"}>
                <h2 className={"text-lightning_yellow font-bold text-3xl text-center"}>What is Gather The Geeks?</h2>
                <section>
                    <p className={"opacity-75"}>{aboutGtg}</p>
                </section>
            </article>
            <article className={"space-y-4"}>
                <h2 className={"text-lightning_yellow font-bold text-3xl text-center"}>Why does this exist?</h2>
                <section>
                    <p className={"opacity-75"}>{whyDoesThisExist}</p>
                </section>
            </article>
            <article className={"space-y-4"}>
                <h2 className={"text-lightning_yellow font-bold text-3xl text-center"}>About the developer</h2>
                <section>
                    <p className={"opacity-75"}>{aboutTheDeveloper}</p>
                </section>
            </article>
            <article className={"space-y-4"}>
                <h2 className={"text-lightning_yellow font-bold text-3xl text-center"}>What tech stack does GTG use?</h2>
                <section>
                    <p className={"opacity-75"}>{techStack}</p>
                </section>
            </article>
        </main>
    )
}