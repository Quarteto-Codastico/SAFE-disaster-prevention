import Header from "@/components/user-dashboard-components/Header";
import Footer from "@/components/user-dashboard-components/Footer";

export default function AdminLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<main className="relative h-screen w-screen flex overflow-hidden">
			<Header />
            <Footer/>
			<section className="flex-1 overflow-auto">{children}</section>
		</main>
	);
}
