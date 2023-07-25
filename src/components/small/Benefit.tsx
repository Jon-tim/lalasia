import "../../styles/components/small/benefit.scss";
import { motion } from "framer-motion";

type props = {
	src: string;
	title: string;
	description: string;
};

const item = {
	hidden: { opacity: 0 },
	show: { opacity: 1 },
};

export default function Benefit({ src, title, description }: props) {
	return (
		<motion.div
			variants={item}
			className="benefit_contain"
		>
			<div className="icon">
				<img
					src={src}
					alt=""
				/>
			</div>
			<h3>{title}</h3>
			<p>{description}</p>
		</motion.div>
	);
}
