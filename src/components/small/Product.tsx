import { Link } from "react-router-dom";
import "../../styles/components/small/product.scss";

type props = {
	id: string;
	image: string;
	name: string;
	price: number;
	description: string;
	category: string;
};

export default function Product({
	id,
	image,
	name,
	price,
	description,
	category,
}: props) {
	return (
		<Link to={`/products/${id}`} className="product-card">
			<div className="product-image">
				<img
					src={image}
					alt={name}
				/>
			</div>
			<div className="product-info">
				<p className="product-category">{category}</p>
				<h2 className="product-name">{name}</h2>
				<p className="product-description">{description}</p>
				<p className="product-price">${price}</p>
			</div>
		</Link>
	);
}
