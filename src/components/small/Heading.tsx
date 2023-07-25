import '../../styles/components/small/heading.scss'

type props = {
	title: string;
	details: string;
	topic: string;
};

export default function Heading({ title, details, topic }: props) {
	return (
		<>
			<header className='header'>
				<p>{topic}</p>
				<h1 dangerouslySetInnerHTML={{ __html: title }} />
			</header>
			<p className='details'>{details}</p>
		</>
	);
}
