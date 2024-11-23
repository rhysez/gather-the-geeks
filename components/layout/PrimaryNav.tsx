import {Button} from "@/components/ui/button";
import Link from "next/link";
import {Bars3Icon} from "@heroicons/react/24/solid";

export default function PrimaryNav() {
    return (
        <nav className={"bg-lighter_background px-6 py-4 flex justify-between items-center"}>
            <Button className={"bg-background text-white border-2 hover:bg-lighter_background"}>
                <Bars3Icon className={"text-white h-8 w-8"} />
            </Button>
            <Link href={"/home"}>
                <h2 className={"text-lightning_yellow font-bold text-2xl"}>GATHER THE GEEKS</h2>
            </Link>
            <section>
                <Link className={"text-lightning_yellow hover:underline"} href="/home/about">About GTG</Link>
            </section>
        </nav>
    )
}