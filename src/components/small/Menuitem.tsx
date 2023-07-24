import { NavLink } from "react-router-dom";
import "../../styles/components/small/menuitem.scss";

type props = {
	title: string;
	href: string;
};
export default function Menuitem({ title, href }: props) {
	return (
		<>
			<li className="menuitem">
				<NavLink to={href}>
					<p>{title}</p>
				</NavLink>
			</li>
		</>
	);
}
