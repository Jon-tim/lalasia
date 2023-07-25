import "../../styles/components/medium/benefits.scss";
import { benefits } from "../../data/benefits";
import Benefit from "../small/Benefit";
import Heading from "../small/Heading";

export default function Benefits() {
	return (
		<section className="benefits_contain">
			<div className="benefits_header">
				<Heading
					topic="Benefits"
					title="Benefits when using <br /> our services"
					details="Enjoy the benefits of our services which are of important priorities when we deal with
					our clients"
				/>
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
