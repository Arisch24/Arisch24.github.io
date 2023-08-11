import { FaGithub, FaLinkedin, FaStackOverflow } from 'react-icons/fa';
import './Footer.scss';

import { useRef, useLayoutEffect } from 'react';
import { gsap } from 'gsap';

const styles = {
	width: '40px',
	height: '40px',
};

export default function Footer() {
	const footerComponent = useRef(null);

	useLayoutEffect(() => {
		const ctx = gsap.context(() => {
			gsap.from(
				[
					'.copyright',
					'.github-icon',
					'.linkedin-icon',
					'.stackoverflow-icon',
				],
				{
					opacity: 0,
					y: -100,
					stagger: 0.5,
					scrollTrigger: {
						trigger: '.footer-section',
						toggleActions: 'play none none none',
					},
				},
			);
		}, footerComponent);
		return () => {
			ctx.revert();
		};
	}, []);
	return (
		<footer className="footer" ref={footerComponent}>
			<section className="footer-section">
				<div className="copyright">
					Copyright &copy; Arischvaran Puvanesvaran 2023
				</div>
				<div className="socials">
					<a
						href="https://github.com/Arisch24"
						className="github-icon"
						target="_blank">
						<FaGithub style={styles}></FaGithub>
					</a>
					<a
						href="https://www.linkedin.com/in/arischvaran-puvanesvaran-634751237/"
						className="linkedin-icon"
						target="_blank">
						<FaLinkedin style={styles}></FaLinkedin>
					</a>
					<a
						href="https://stackoverflow.com/users/16695250/arischvaran"
						className="stackoverflow-icon"
						target="_blank">
						<FaStackOverflow style={styles}></FaStackOverflow>
					</a>
				</div>
			</section>
		</footer>
	);
}
