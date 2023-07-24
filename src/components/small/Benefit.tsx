import "../../styles/components/small/benefit.scss";

type props = {
	src: string;
	title: string;
	description: string;
};

export default function Benefit({ src, title, description }: props) {
	return (
		<div className="benefit_contain">
			<div className="icon">
				<img
					src={src}
					alt=""
				/>
			</div>
			<h3>{title}</h3>
			<p>{description}</p>
		</div>
	);
}
