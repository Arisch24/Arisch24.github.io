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
	let aboutComponent = useRef(null);

	useLayoutEffect(() => {
		let ctx = gsap.context(() => {
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
						Lorem ipsum dolor sit amet consectetur adipisicing elit.
						Maiores aliquid necessitatibus atque perferendis eos
						voluptates qui, laborum error ut distinctio temporibus
						praesentium velit officia{' '}
						<a href="#" className="text-light">
							omg so good
						</a>{' '}
						eius earum adipisci. Suscipit doloribus earum in beatae
						molestiae? Laudantium pariatur qui, sunt eligendi eius,
						dolorem, optio cupiditate veritatis ratione nihil
						aperiam labore rem beatae officia odio quisquam
						veniam!empore enim distinctio nam tempora et quisquam{' '}
						<b>obcaecati</b> id. In placeat nemo quaerat sapiente
						qui rem. Iste, odio. Rem corporis repellendus quibusdam
						enim iusto consequuntur repellat temporibus blanditiis
						vitae expedita harum recusandae eaque voluptates ea
						excepturi delectus, debitis accusamus impedit eligendi
						veritatis eum.
					</p>
					<p>
						<b>Qui rem reiciendis</b> iste, fuga provident voluptate
						iure aspernatur! Accusamus ab voluptatem nostrum soluta
						sed minus saepe inventore hic sequi voluptatum rerum
						perspiciatis dolorem maxime modi aliquid animi, culpa
						sit dignissimos illum tempore magnam eum unde adipisci
						doloribus! Voluptatibus, sapiente explicabo! Nesciunt,
						dolorum iste doloribus minus officiis maxime incidunt
						asperiores, dolore dicta qui voluptatum saepe quos
						corrupti, et eos. Doloribus doloremque cupiditate quae
						voluptas adipisci incidunt qui. Maiores sapiente
						consequuntur nostrum molestias? Pariatur modi deserunt
						aut sit rem natus error magnam dignissimos, sed minima
						deleniti! Neque hic provident quo sapiente officia,
						necessitatibus quidem mollitia, sit aliquid, expedita
						totam ex beatae fuga impedit.
					</p>
				</div>
			</div>
		</section>
	);
}
