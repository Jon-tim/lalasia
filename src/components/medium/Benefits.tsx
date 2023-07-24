import "../../styles/components/medium/benefits.scss";
import { benefits } from "../../data/benefits";
import Benefit from "../small/Benefit";

export default function Benefits() {
	return (
		<section className="benefits_contain">
			<div className="benefits_header">
				<header>
					<p>Benefits</p>
					<h1>Benefits when using <br /> our services</h1>
				</header>
				<p>
					Amongst other things, you are guaranteed the following
					benefits which are of important priorities when we deal with
					our clients
				</p>
			</div>
			<div className="benefits_body">
				{benefits.map((benefit, index) => (
					<Benefit
						key={index}
						{...benefit}
					/>
				))}
			</div>
		</section>
	);
}
