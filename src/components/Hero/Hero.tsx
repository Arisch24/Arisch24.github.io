import MeInCafe from "../../assets/me-in-cafe.jpg";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import './Hero.scss';

const linkStyles = { width: '50px', height: '50px'}

export default function Hero() {
    return (
        <section className='hero-section'>
            <div>
                <h1 className='heading-1'>Hi👋, <span>I'm <span>Arischvaran.</span></span></h1>
                <pre className='heading-4'>An aspiring and passionate Software/Web Developer that is based in Malaysia.</pre>
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