import "../../styles/components/medium/navicons.scss";
import NavIcon from "../small/NavIcon";

export default function NavIcons() {
	const icons = [
		{
			id: 1,
			src: "/src/assets/icons/bag-2.svg",
		},
		{
			id: 2,
			src: "/src/assets/icons/user.svg",
		},
	];

	return (
		<div className="nav-icons">
			{icons.map((icon) => (
				<NavIcon
					src={icon.src}
					key={icon.id}
				/>
			))}
		</div>
	);
}
