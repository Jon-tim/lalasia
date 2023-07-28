import "../../styles/components/medium/productDisplay.scss";
import { fetchData } from "../../config/firebase";
import { useEffect, useState } from "react";
import Product from "../small/Product";
import { motion } from "framer-motion";

type dataType = {
	id: string;
	name: string;
	price: number;
	description: string;
	image: string;
	category: string;
};

export default function ProductDisplay() {
	const [products, setProducts] = useState<dataType[]>([]);
	useEffect(() => {
		fetchData().then((data) => {
			setProducts(data);
			// console.log(data);
		});
	}, []);

	return (
		<motion.section
			initial={{ opacity: 0 }}
			whileInView={{ opacity: 1 }}
			transition={{ duration: 0.5 }}
			viewport={{ once: true }}
			className="product_display"
		>
			<header>
				<h1>
					total products <span>{products.length}</span>
				</h1>
				<div className="filter">
					<svg
						xmlns="http://www.w3.org/2000/svg"
						fill="none"
						viewBox="0 0 24 24"
						strokeWidth="1.5"
						stroke="currentColor"
						width={24}
						height={24}
					>
						<path
							strokeLinecap="round"
							strokeLinejoin="round"
							d="M12 3c2.755 0 5.455.232 8.083.678.533.09.917.556.917 1.096v1.044a2.25 2.25 0 01-.659 1.591l-5.432 5.432a2.25 2.25 0 00-.659 1.591v2.927a2.25 2.25 0 01-1.244 2.013L9.75 21v-6.568a2.25 2.25 0 00-.659-1.591L3.659 7.409A2.25 2.25 0 013 5.818V4.774c0-.54.384-1.006.917-1.096A48.32 48.32 0 0112 3z"
						/>
					</svg>
					<p>filter</p>
				</div>
			</header>
			<section className="products_container">
				{products.map((product) => (
					<Product
						key={product.id}
						id={product.id}
						name={product.name}
						price={product.price}
						description={product.description}
						image={product.image}
						category={product.category}
					/>
				))}
			</section>
		</motion.section>
	);
}
