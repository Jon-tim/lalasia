import { Link } from "react-router-dom";
import '../../styles/components/small/menuitem.scss'

type props = {
	title: string;
	href: string;
};
export default function Menuitem({ title, href }: props) {
	return (
		<>
			<li className="menuitem">
				<Link to={href}>{title}</Link>
			</li>
		</>
	);
}
