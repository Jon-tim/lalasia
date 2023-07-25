import Footer from "../components/large/Footer";
import Navbar from "../components/large/Navbar";
import Hero from "../components/large/homepage/Hero";
import Benefits from "../components/medium/Benefits";
import Discount_CTA from "../components/medium/Discount_CTA";
import OurProducts from "../components/medium/OurProducts";

export default function Home() {
	return (
		<>
			<Navbar />
			<Hero />
			<Benefits />
			<OurProducts />
			<Discount_CTA />
			<Footer />
		</>
	);
}
