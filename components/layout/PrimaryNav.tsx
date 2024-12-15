import Link from "next/link";
import {CommandLineIcon} from "@heroicons/react/24/solid";

export default function PrimaryNav() {
    return (
        <nav className={"bg-lighter_background px-2 gap-4 md:gap-0 md:px-24 py-4 flex flex-col md:flex-row justify-between items-center fixed z-10 w-screen"}>
            <Link href={"/"}>
                <section className={"flex items-center px-2 py-1 gap-2 shadow-md shadow-slate-900 rounded-md transition-all hover:bg-slate-900"}>
                    <h2 className={"text-sea_mist font-bold text-2xl"}>gather the geeks</h2>
                    <CommandLineIcon className={"w-7 h-7 text-[#ef4444]"} />
                </section>
            </Link>
            <section className={"space-x-6"}>
                <Link className={"text-sea_mist font-bold hover:opacity-50 transition-all"} href="/meetups">meet ups<span className="text-cherry_red">.</span></Link>
                <Link className={"text-sea_mist font-bold hover:opacity-50 transition-all"} href="/about">about gtg<span className="text-cherry_red">.</span></Link>
            </section>
        </nav>
    )
}