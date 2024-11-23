import PrimaryNav from "@/components/layout/PrimaryNav";

export default function HomeLayout({children}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <section>
            <PrimaryNav />
            <main className={"p-4"}>
                {children}
            </main>
        </section>
    );
}