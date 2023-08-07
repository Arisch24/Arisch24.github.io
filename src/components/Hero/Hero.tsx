import MeInCafe from "../../assets/me-in-cafe.jpg";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import './Hero.scss';

const linkStyles = { width: '40px', height: '40px'}

export default function Hero() {
    return (
        <section className='hero-section'>
            <div>
                <h2 className='text-5'>Hi👋, I'm</h2>
                <h1>Arischvaran.</h1>
                <p className='text-8'>An aspiring and passionate Software/Web Developer 
                based in Malaysia.</p>
                <div className='links-container'>
                    <a target='_blank' href="https://github.com/Arisch24/" className='github'>
                        <FaGithub style={linkStyles}></FaGithub>
                    </a>
                    <a target='_blank' href="#" className='linkedin'>
                        <FaLinkedin style={linkStyles}></FaLinkedin>
                    </a>
                </div>
            </div>
            <div className='img-container'>
                <img src={MeInCafe} alt="Photo of me (Arischvaran) in a cafe" />
            </div>
        </section>
    )
}