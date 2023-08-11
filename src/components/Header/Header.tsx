import './Header.scss';

const links = [
	{
		name: 'About Me',
		href: '#aboutMe',
	},
	{
		name: 'Experiences',
		href: '#experiences',
	},
	{
		name: 'Projects',
		href: '#projects',
	},
];

export default function Header({ toggleClass }: { toggleClass: string }) {
	return (
		<header className={toggleClass}>
			<nav className="nav-container">
				<a href="#">Arischvaran.dev</a>
				<ul>
					{links.map((link, index) => {
						return (
							<li key={index}>
								<a href={link.href}>{link.name}</a>
							</li>
						);
					})}
					<a
						className="contact-btn"
						href="mailto:arischvaran00@gmail.com">
						Contact Me
					</a>
				</ul>
			</nav>
		</header>
	);
}
