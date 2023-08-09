import Header from './components/Header/Header';
import Hero from './components/Hero/Hero';
import Languages from './components/Languages/Languages';
import AboutMe from './components/About_Me/About_Me';
import Experiences from './components/Experiences/Experiences';
import Projects from './components/Projects/Projects';
import Footer from './components/Footer/Footer';
import './App.scss';

import { useEffect, useState } from 'react';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { gsap } from 'gsap';
gsap.registerPlugin(ScrollTrigger);

const App: React.FC = () => {
	// scrolling window
	const [scroll, setScroll] = useState(false);

	useEffect(() => {
		const handleScroll = () => {
			window.scrollY >= 100 ? setScroll(true) : setScroll(false);
		};
		document.addEventListener('scroll', handleScroll);

		return () => {
			document.removeEventListener('scroll', handleScroll);
		};
	}, [scroll, setScroll]);
	// ============================================================

	return (
		<>
			<Header toggleClass={scroll ? 'header scroll' : 'header'}></Header>
			<Hero></Hero>
			<Languages></Languages>
			<AboutMe></AboutMe>
			<Experiences></Experiences>
			<Projects></Projects>
			<Footer></Footer>
		</>
	);
};

export default App;
