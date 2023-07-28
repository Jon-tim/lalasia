import Page_Header from "../components/small/Page_Header";
import img from "../assets/images/product_landing.jpg";
import "../styles/pages/products.scss";
import ProductDisplay from "../components/medium/ProductDisplay";


export default function Products() {
	return (
		<>
			<section className="products_page">
				<Page_Header
					title="Products"
					description="We display products based on the latest products we have, if you want to see our old products please enter the name of the item"
				/>

				<div className="products_page_img_holder">
					<img
						src={img}
						alt="interior decoration"
					/>
				</div>
				<ProductDisplay />
			</section>
		</>
	);
}
