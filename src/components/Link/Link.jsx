import './Link.css';

export const Link = ({text, href}) => {
	return (
		<a className='linkItem' href={href}>
			{text}
		</a>
	);
};
