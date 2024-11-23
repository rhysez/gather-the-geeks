import Link from "next/link";
import {CommandLineIcon} from "@heroicons/react/24/solid";

export default function PrimaryNav() {
    return (
        <nav className={"bg-lighter_background px-2 gap-4 md:gap-0 md:px-24 py-4 flex flex-col md:flex-row justify-between items-center"}>
            <Link className={"hover:animate-bounce"} href={"/home"}>
                <section className={"flex items-center gap-2"}>
                    <h2 className={"text-lightning_yellow font-bold text-2xl"}>GATHER THE GEEKS!</h2>
                    <CommandLineIcon className={"w-8 h-8 text-lightning_yellow"} />
                </section>
            </Link>
            <section className={"space-x-6"}>
            <Link className={"text-lightning_yellow font-bold hover:underline"} href="/home/about">Meet ups</Link>
                <Link className={"text-lightning_yellow font-bold hover:underline"} href="/home/about">Ask a dev</Link>
                <Link className={"text-lightning_yellow font-bold hover:underline"} href="/home/about">Blogs</Link>
                <Link className={"text-lightning_yellow font-bold hover:underline"} href="/home/about">About GTG</Link>
            </section>
        </nav>
    )
}