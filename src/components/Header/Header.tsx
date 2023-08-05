
import './Header.scss';

export default function Header() {
    return (
        <header className='header'>
            <nav className='nav-container'>
                <a href='#'>Arischvaran.dev</a>
                <ul>
                    <li><a href="#">Projects</a></li>
                    <a className='contact-btn' href="#">Contact Me</a>
                </ul>
            </nav>
        </header>
    )
}