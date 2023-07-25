import "../../../styles/components/large/hero/hero.scss";
import CTA_btn from "../../small/CTA_btn";
import hero from "../../../assets/images/hero.jpg";
import { motion } from "framer-motion";

export default function Hero() {
	return (
		<section>
			<div className="contain">
				<div className="hero_text">
					<motion.header
						initial={{ opacity: 0, translateY: -30 }}
						animate={{ opacity: 1, translateY: 0 }}
						transition={{ duration: 1 }}
					>
						<h1>
							discover furniture with <br /> high quality wood
						</h1>
					</motion.header>
					<motion.p
						initial={{ opacity: 0, translateY: -30 }}
						animate={{ opacity: 1, translateY: 0 }}
						transition={{ duration: 1, delay: 0.5 }}
					>
						We offer a wide range of furniture made from high
						quality wood, sourced from sustainable forests and
						crafted with care. Browse our collection and find your
						perfect match today.
					</motion.p>

					<motion.div
						initial={{ opacity: 0, translateY: 20 }}
						animate={{ opacity: 1, translateY: 0 }}
						transition={{ duration: 1, delay: 0.7 }}
						className="search_contain"
					>
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
					</motion.div>
				</div>
				<motion.div
					initial={{ opacity: 0 }}
					animate={{ opacity: 1 }}
					transition={{ duration: 1, delay: 0.8 }}
					className="img_holder"
				>
					<img
						src={hero}
						alt=""
					/>
				</motion.div>
			</div>
		</section>
	);
}
