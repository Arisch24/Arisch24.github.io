import python from '../../assets/icons8-python.svg';
import html from '../../assets/icons8-html-5.svg';
import css from '../../assets/icons8-css3.svg';
import sass from '../../assets/icons8-sass.svg';
import bootstrap from '../../assets/icons8-bootstrap.svg';
import tailwind from '../../assets/icons8-tailwind-css.svg';
import js from '../../assets/icons8-javascript.svg';
import typescript from '../../assets/icons8-typescript.svg';
import mysql from '../../assets/icons8-mysql-logo.svg';
import './Languages.scss';

import { useLayoutEffect, useRef } from 'react';
import { gsap } from 'gsap';

const triggerOptions = {
	start: 'top 90%',
	end: 'top 30%',
	scrub: 1,
};

const langList = [
	{
		icon: python,
		text: 'Python',
	},
	{
		icon: html,
		text: 'HTML',
	},
	{
		icon: css,
		text: 'CSS',
	},
	{
		icon: sass,
		text: 'SASS',
	},
	{
		icon: bootstrap,
		text: 'Bootstrap',
	},
	{
		icon: tailwind,
		text: 'Tailwind CSS',
	},
	{
		icon: js,
		text: 'Javascript',
	},
	{
		icon: typescript,
		text: 'Typescript',
	},
	{
		icon: mysql,
		text: 'MySQL',
	},
];

export default function Languages() {
	const languageComponent = useRef(null);

	useLayoutEffect(() => {
		let ctx = gsap.context(() => {
			gsap.timeline()
				.from('h2', {
					opacity: 0,
					y: -50,
					scrollTrigger: {
						...triggerOptions,
						trigger: '.c-item',
					},
				})
				.from('.c-item', {
					opacity: 0,
					y: -50,
					scrollTrigger: {
						...triggerOptions,
						trigger: '.c-item',
					},
					stagger: 0.1,
				});
		}, languageComponent);
		return () => {
			ctx.revert();
		};
	}, []);

	return (
		<section className="lang-section" ref={languageComponent}>
			<h2 className="text-1 heading">Technologies &amp; Languages</h2>
			<div className="carousel">
				{langList.map((lang, i) => {
					return (
						<div className="c-item" key={i}>
							<img src={lang.icon} alt={lang.text} />
							<p>{lang.text}</p>
						</div>
					);
				})}
			</div>
			{/* <hr /> */}
		</section>
	);
}
