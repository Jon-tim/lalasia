import "../../../styles/components/large/hero/hero.scss";
import CTA_btn from "../../small/CTA_btn";
import hero from "../../../assets/images/hero.jpg";

export default function Hero() {
	return (
		<section>
			<div className="contain">
				<div className="hero_text">
					<header>
						<h1>
							discover furniture with <br /> high quality wood
						</h1>
					</header>
					<p>
						We offer a wide range of furniture made from high
						quality wood, sourced from sustainable forests and
						crafted with care. Browse our collection and find your
						perfect match today.
					</p>

					<div className="search_contain">
						<div className="search">
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
									d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z"
								/>
							</svg>

							<input
								type="text"
								placeholder="search property"
							/>
						</div>
						<CTA_btn>search</CTA_btn>
					</div>
				</div>
				<div className="img_holder">
					<img
						src={hero}
						alt=""
					/>
				</div>
			</div>
		</section>
	);
}
