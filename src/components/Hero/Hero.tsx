import MeInCafe from '../../assets/me-in-cafe.jpg';
import './Hero.scss';

import { useRef, useLayoutEffect } from 'react';
import { gsap } from 'gsap';

export default function Hero() {
	const heroComponent = useRef(null);

	useLayoutEffect(() => {
		let ctx = gsap.context(() => {
			gsap.timeline()
				.from(['h2', 'h1', 'p'], {
					opacity: 0,
					x: -100,
					stagger: 0.5,
				})
				.fromTo(
					'.img-container',
					{
						scale: 0.8,
						opacity: 0,
						x: 100,
						ease: 'expo',
					},
					{
						scale: 1,
						opacity: 1,
						x: 0,
						ease: 'expo',
					},
				);
		}, heroComponent);
		return () => {
			ctx.revert();
		};
	}, []);

	return (
		<section className="hero-section" ref={heroComponent}>
			<div className="hero-cta">
				<h2 className="text-5">Hi👋, I'm</h2>
				<h1>
					Arischvaran<span className="underscore">_</span>
				</h1>
				<p>
					An aspiring and passionate Software/Web Developer based in
					Malaysia.
				</p>
			</div>
			<div className="img-container">
				<img src={MeInCafe} alt="Photo of me (Arischvaran) in a cafe" />
			</div>
		</section>
	);
}
