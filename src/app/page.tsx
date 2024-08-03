import Donate from "@/components/landingpage-components/Donate";
import Features from "@/components/landingpage-components/Features";
import Footer from "@/components/landingpage-components/Footer";
import Header from "@/components/landingpage-components/Header";
import Hero from "@/components/landingpage-components/Hero";

export default function Home() {
	return (
		<>
			<Header />
			<Hero />
			<Features />
			<Donate />
			<Footer />
		</>
	);
}
