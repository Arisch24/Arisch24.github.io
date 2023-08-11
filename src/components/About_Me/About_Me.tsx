import './About_Me.scss';
import myImg from '../../assets/high-school-me.jpg';

import { useLayoutEffect, useRef } from 'react';
import { gsap } from 'gsap';

const triggerOptions = {
	start: 'top 90%',
	end: 'top 30%',
	scrub: 1,
};

export default function AboutMe() {
	const aboutComponent = useRef(null);

	useLayoutEffect(() => {
		const ctx = gsap.context(() => {
			gsap.timeline().from(['h2', '.about-container'], {
				opacity: 0,
				y: -100,
				scrollTrigger: {
					...triggerOptions,
					trigger: 'h2',
				},
				stagger: 0.5,
			});
		}, aboutComponent);
		return () => {
			ctx.revert();
		};
	}, []);

	return (
		<section className="about-section" id="aboutMe" ref={aboutComponent}>
			<h2 className="text-1 heading">About Me</h2>
			<div className="about-container">
				<div className="image-container">
					<img src={myImg} alt="Image of me in highschool" />
				</div>
				<div className="about-content">
					<p>
						I'm a 23 year old fresh graduate that is currently
						expanding my knowledge in many areas of Computer
						Science/Information Technology which consists of{' '}
						<b className="text-light">Software/Web development</b>{' '}
						and{' '}
						<b className="text-light">Artificial Intelligence</b>{' '}
						and <b className="text-light">Cyber Security</b>. I'm
						currently working on some{' '}
						<b className="text-light">open source projects</b> and
						I'm also looking for a job in the software industry. I
						love building complex applications and have a knack for
						problem solving.
					</p>
					<p>
						During my free time, I love playing some video games as
						well as working out or playing football from time to
						time. I love to travel as well and have a taste bud for
						all types of foods from various cultures during my
						travels.
					</p>
				</div>
			</div>
		</section>
	);
}
