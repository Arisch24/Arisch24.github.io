import { FaGithub, FaLinkedin, FaStackOverflow } from 'react-icons/fa';
import './Footer.scss';

const styles = {
	width: '40px',
	height: '40px',
};

export default function Footer() {
	return (
		<footer className="footer">
			<section className="footer-section">
				<div className="copyright">
					Copyright &copy; Arischvaran Puvanesvaran 2023
				</div>
				<div className="socials">
					<a href="https://github.com/Arisch24" target="_blank">
						<FaGithub style={styles}></FaGithub>
					</a>
					<a
						href="https://www.linkedin.com/in/arischvaran-puvanesvaran-634751237/"
						target="_blank">
						<FaLinkedin style={styles}></FaLinkedin>
					</a>
					<a
						href="https://stackoverflow.com/users/16695250/arischvaran"
						target="_blank">
						<FaStackOverflow style={styles}></FaStackOverflow>
					</a>
				</div>
			</section>
		</footer>
	);
}
