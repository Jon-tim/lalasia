import Navbar from "../components/large/Navbar";
import Hero from "../components/large/homepage/Hero";
import Benefits from "../components/medium/Benefits";
import OurProducts from "../components/medium/OurProducts";

export default function Home() {
	return (
		<>
			<Navbar />
			<Hero />
			<Benefits />
			<OurProducts />
		</>
	);
}
