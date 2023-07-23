import logo from "../../assets/Frame 1logo.svg";
import '../../styles/components/small/logo.scss'
export default function Logo() {
	return (
		<a
			href="/"
			className="logo"
		>
			<img
				src={logo}
				alt="logo"
			/>
		</a>
	);
}
