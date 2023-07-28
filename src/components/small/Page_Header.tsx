import "../../styles/components/small/page_header.scss";
import { motion } from "framer-motion";

type props = {
	title: string;
	description: string;
};

export default function Page_Header({ title, description }: props) {
	return (
		<motion.div
			initial={{ opacity: 0, y: -30 }}
			animate={{ opacity: 1, y: 0 }}
			transition={{ duration: 0.7 }}
			className="page_header"
		>
			<h1>{title}</h1>
			<p>{description}</p>
		</motion.div>
	);
}
