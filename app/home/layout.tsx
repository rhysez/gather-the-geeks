import PrimaryNav from "@/components/layout/PrimaryNav";

export default function HomeLayout({children}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <section>
            <PrimaryNav />
            <main className={"px-2 md:px-24 py-8"}>
                {children}
            </main>
        </section>
    );
}