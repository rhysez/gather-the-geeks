const aboutGtg: string =
    `Gather The Geeks is an open-source platform for software developers of call kinds (whether that be web, systems, games, you name it) ` +
    `to organise meetups for any purpose. This could be to simply have fun at a hackathon, broaden your network with a talk, or anything else.`

const whyDoesThisExist: string =
    `I wanted to create something specifically for developers that can serve a similar purpose to Meetup.com. ` +
    `At the same time, I really wanted to start an open-source project. So I put the two together and created Gather The Geeks.`

const aboutTheDeveloper: string =
    `My name is Rhys and I'm a full stack engineer based in the south of England. I really love working with languages like ` +
    `TypeScript and PHP. If I'm not coding or tinkering with a new project, I'm often gaming, hitting the gym or reading a book.`

const techStack: string =
    `Gather The Geeks has been built using React (via Next.js) with TypeScript, and TailwindCSS with components from shadcn. On the server, ` +
    `it uses Express with PostgreSQL. Icons are sourced from Heroicons, the developers behind Tailwind.`

export default function Page() {
    return (
        <main className={"space-y-12 lg:w-1/2 md:w-[75%] mx-auto mt-24"}>
            <article className={"space-y-4"}>
                <h2 className={"text-sea_mist font-bold text-3xl text-center"}>What is Gather The Geeks?</h2>
                <section>
                    <p className={"opacity-75"}>{aboutGtg}</p>
                </section>
            </article>
            <article className={"space-y-4"}>
                <h2 className={"text-sea_mist font-bold text-3xl text-center"}>Why does this exist?</h2>
                <section>
                    <p className={"opacity-75"}>{whyDoesThisExist}</p>
                </section>
            </article>
            <article className={"space-y-4"}>
                <h2 className={"text-sea_mist font-bold text-3xl text-center"}>About the developer</h2>
                <section>
                    <p className={"opacity-75"}>{aboutTheDeveloper}</p>
                </section>
            </article>
            <article className={"space-y-4"}>
                <h2 className={"text-sea_mist font-bold text-3xl text-center"}>What tech stack does GTG use?</h2>
                <section>
                    <p className={"opacity-75"}>{techStack}</p>
                </section>
            </article>
        </main>
    )
}