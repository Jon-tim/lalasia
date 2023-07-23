import Menuitem from "../small/Menuitem";
import { links } from "../../data/navs";
import "../../styles/components/medium/menulinks.scss";

export default function MenuLinks() {
	return (
		<div className="menu-links">
			<ul>
				{links.map((link) => (
					<Menuitem
						key={link.id}
						title={link.title}
						href={link.href}
					/>
				))}
			</ul>
		</div>
	);
}
