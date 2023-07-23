import "../../styles/components/small/navicon.scss";

type props = {
	src: string;
};

export default function NavIcon({ src }: props) {
	return (
		<div className="navicon">
			<img
				src={src}
				alt="icon"
			/>
		</div>
	);
}
