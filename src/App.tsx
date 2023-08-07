import { useEffect, useState } from 'react';
import Header from './components/Header/Header';
import Hero from './components/Hero/Hero';
import Languages from './components/Languages/Languages';
import AboutMe from './components/About_Me/About_Me';
import Experiences from './components/Experiences/Experiences';
import Projects from './components/Projects/Projects';
import Footer from './components/Footer/Footer';
import './App.scss';

function App() {
    // const [active, setActive] = useState(false);

    // useEffect(() => {
    //     const handleScroll = () => {
    //         // console.log('scroll', event);
    //         console.log('here')
            
    //     }

    //     document.addEventListener('scroll', handleScroll);

    //     return () => {
    //         document.removeEventListener('scroll', handleScroll);
    //     }
    // }, []);
    
  return (
    <>
        <Header></Header>
        <Hero></Hero>
        <Languages></Languages>
        <AboutMe></AboutMe>
        <Experiences></Experiences>
        <Projects></Projects>
        <Footer></Footer>
    </>
  )
}

export default App
