import Donate from "@/components/Donate";
import Features from "@/components/Features";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Image from "next/image";

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
