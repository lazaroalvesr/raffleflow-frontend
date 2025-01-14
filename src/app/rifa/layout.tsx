import Footer from "../_components/home/footer";
import Header from "../_components/home/header";

export default function DashboardLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <section>
            <Header/>
            {children}
            <Footer/>
        </section>
    )
}