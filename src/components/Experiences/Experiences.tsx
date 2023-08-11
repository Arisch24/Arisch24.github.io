import { FaDownload } from 'react-icons/fa';
import myResume from '../../assets/Arischvaran_Puvanesvaran_Resume.pdf';
import './Experiences.scss';

import { useLayoutEffect, useRef } from 'react';
import { gsap } from 'gsap';

const triggerOptions = {
	start: 'top 90%',
	end: 'top 10%',
	scrub: 1,
};

export default function Experiences() {
	const experiencesComponent = useRef(null);

	useLayoutEffect(() => {
		const ctx = gsap.context(() => {
			gsap.from(['h2', '.showcase', '.resume-btn'], {
				opacity: 0,
				y: -100,
				scrollTrigger: {
					...triggerOptions,
					trigger: ['h2'],
				},
				stagger: 0.5,
			});
		}, experiencesComponent);
		return () => {
			ctx.revert();
		};
	}, []);
	return (
		<section
			className="experiences-section"
			id="experiences"
			ref={experiencesComponent}>
			<h2 className="text-1 heading">Experiences</h2>
			<div className="showcase">
				<div className="row">
					<div className="date">
						<p>Nov 2022 - May 2023</p>
					</div>
					<div className="description">
						<h3 className="text-7">TMS Lite Sdn Bhd</h3>
						<p className="text-light">
							Software Engineering Intern
						</p>
						<ul role="list">
							<li>
								Maintain/Update company software and website
							</li>
							<li>Use Arduino to rotate stepper motor</li>
							<li>
								Create sole desktop software that integrates
								with ESP32 microcontroller, industry grade
								camera, LED lighting and stepper motor
							</li>
						</ul>
					</div>
				</div>
				<div className="row">
					<div className="date">
						<p>June 2021 - Oct 2021</p>
					</div>
					<div className="description">
						<h3 className="text-7">MM Century Sdn Bhd</h3>
						<p className="text-light">IT Technician</p>
						<ul role="list">
							<li>
								Conduct day-to-day server tampering, inspecting
								specs and wipe hard disk data
							</li>
							<li>
								Create excel sheets for each server
								specifications Inspected server hardware and
								software
							</li>
						</ul>
					</div>
				</div>
			</div>
			<a className="resume-btn" href={myResume} download="resume">
				<FaDownload style={{ marginRight: '.5em' }}></FaDownload>My
				Resume
			</a>
		</section>
	);
}
