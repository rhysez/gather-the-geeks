import PrimaryNav from "@/components/layout/PrimaryNav";

export default function HomeLayout({children}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <section>
            <PrimaryNav />
            {children}
        </section>
    );
}