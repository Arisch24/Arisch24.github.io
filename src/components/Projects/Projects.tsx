import { HiOutlineArrowTopRightOnSquare } from 'react-icons/hi2';
import portfolioMe from '../../assets/portfolioMe.png';
import './Projects.scss';

const projects = [
	{
		className: 'project-card item-1',
		title: 'Fintech Hackathon Submission',
		image: '',
		url: 'https://github.com/Arisch24/Fintech-Hackathon-Submission',
		description:
			"A card and payment storage system to view the user's previous transactions and manage their cards.",
	},
	{
		className: 'project-card item-2',
		title: 'Restaurant Finder',
		image: '',
		url: 'https://github.com/Arisch24/Restaurant-Finder',
		description:
			"A restaurant application that is built with Vue JS, Firebase and Google Maps Javascript API to display the restaurants for the user's to view, edit and also provide reviews for each restaurant on the map. This is a college assignment.",
	},
	{
		className: 'project-card item-3',
		title: 'Portfolio Managing Web Application',
		image: portfolioMe,
		url: 'https://github.com/Arisch24/PortfolioMe',
		description:
			'My final year project where I use Flask and OCR to create a portfolio resume app for the company to use to accept resumes and convert them to text format using OCR.',
	},
];

const styles = {
	width: '40px',
	height: '40px',
	position: 'absolute',
	top: '5px',
	right: '5px',
};

export default function Projects() {
	return (
		<section className="projects-section" id="projects">
			<h2 className="text-1 heading">Projects</h2>
			<div className="projects-grid">
				{projects.map((project, i) => {
					return (
						<a
							className={project.className}
							href={project.url}
							target="_blank"
							key={i}>
							<div className="content">
								<h3 className="text-4 title">
									{project.title}
									<HiOutlineArrowTopRightOnSquare
										style={
											styles
										}></HiOutlineArrowTopRightOnSquare>
								</h3>
								<p>{project.description}</p>
							</div>
						</a>
					);
				})}
			</div>
		</section>
	);
}
