import Link from "next/link";
import {CommandLineIcon} from "@heroicons/react/24/solid";

export default function PrimaryNav() {
    return (
        <nav className={"bg-lighter_background px-2 gap-4 md:gap-0 md:px-24 py-4 flex flex-col md:flex-row justify-between items-center"}>
            <Link className={"hover:opacity-50 transition-all"} href={"/"}>
                <section className={"flex items-center gap-2"}>
                    <h2 className={"text-sea_mist font-bold text-2xl"}>gather the geeks.</h2>
                    <CommandLineIcon className={"w-8 h-8 text-[#ef4444]"} />
                </section>
            </Link>
            <section className={"space-x-6"}>
                <Link className={"text-sea_mist font-bold hover:opacity-50 transition-all"} href="/meetups">Meet ups</Link>
                <Link className={"text-sea_mist font-bold hover:opacity-50 transition-all"} href="/about">About GTG</Link>
            </section>
        </nav>
    )
}