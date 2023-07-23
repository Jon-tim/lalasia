// import logo from "../assets/logo.svg";
import "../../styles/components/large/navbar.scss";
import MenuLinks from "../medium/MenuLinks";
import NavIcons from "../medium/NavIcons";
import Hamburger from "../small/Hamburger";
import Logo from "../small/Logo";

export default function Navbar() {
	return (
		<nav>
			<div className="contain">
				<Logo />
				<MenuLinks />
				<NavIcons/>
				<Hamburger />
			</div>
		</nav>
	);
}
