import Heading from "../small/Heading";
import "../../styles/components/medium/ourproducts.scss";
import CTA_btn from "../small/CTA_btn";
import image_1 from "../../assets/images/our_products1.jpg";
import image_2 from "../../assets/images/our_products2.jpg";

export default function OurProducts() {
	const stats = [
		{
			figure: "20+",
			label: "years experience",
		},
		{
			figure: "483",
			label: "happy client",
		},
		{
			figure: "150+",
			label: "projects finished",
		},
	];
	return (
		<section className="our_products">
			<div className="our_products_header">
				<Heading
					topic="Our Product"
					title="Crafted by talented and <br/> high quality material"
					details="Indulge in our meticulously handcrafted treasures, brought to life by skilled artisans and elevated with top-notch materials, ensuring timeless elegance and unmatched durability for your utmost satisfaction."
				/>
				<CTA_btn>learn more</CTA_btn>
			</div>
			<div className="img_holder1">
				<img
					src={image_1}
					alt="furniture Image"
				/>
			</div>
			<div className="img_holder2">
				<img
					src={image_2}
					alt="furniture Image"
				/>
			</div>
			<div className="stats">
				{stats.map((stat, index) => (
					<span key={index}>
						<h1>{stat.figure}</h1>
						<p>{stat.label}</p>
					</span>
				))}
			</div>
		</section>
	);
}
