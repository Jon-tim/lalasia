import "../../styles/components/medium/benefits.scss";
import { benefits } from "../../data/benefits";
import Benefit from "../small/Benefit";
import Heading from "../small/Heading";
import { motion } from "framer-motion";

export default function Benefits() {
	const container = {
		hidden: { opacity: 0, y: 50 },
		show: {
			opacity: 1,
			y: 0,
			transition: {
				staggerChildren: 0.5,
				duration: 0.7,
				delay: 0.3,
			},
		},
	};

	// const item = {
	// 	hidden: { opacity: 0 },
	// 	show: { opacity: 1 },
	// };
	return (
		<section className="benefits_contain">
			<motion.div className="benefits_header">
				<Heading
					topic="Benefits"
					title="Benefits when using <br /> our services"
					details="Enjoy the benefits of our services which are of important priorities when we deal with
					our clients"
				/>
			</motion.div>
			<motion.div
				variants={container}
				initial="hidden"
				whileInView="show"
				viewport={{ once: true }}
				className="benefits_body"
			>
				{benefits.map((benefit, index) => (
					<Benefit
						key={index}
						{...benefit}
					/>
				))}
			</motion.div>
		</section>
	);
}
