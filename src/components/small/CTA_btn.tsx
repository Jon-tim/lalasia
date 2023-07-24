import "../../styles/components/small/cta_btn.scss";

type props = {
	children: string;
};
export default function CTA_btn({ children }: props) {
	return <button>{children}</button>;
}
