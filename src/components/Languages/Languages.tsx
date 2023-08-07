import python from '../../assets/icons8-python.svg';
import html from '../../assets/icons8-html-5.svg';
import css from '../../assets/icons8-css3.svg';
import sass from '../../assets/icons8-sass.svg';
import bootstrap from '../../assets/icons8-bootstrap.svg';
import tailwind from '../../assets/icons8-tailwind-css.svg'
import js from '../../assets/icons8-javascript.svg';
import typescript from '../../assets/icons8-typescript.svg';
import mysql from '../../assets/icons8-mysql-logo.svg';
import './Languages.scss';

const langList = [
    { 
        icon: python,
        text: 'Python'
    },
    {

        icon: html,
        text: 'HTML' 
    },
    {
        icon: css,
        text: 'CSS' 
    },
    {
        icon: sass, 
        text: 'SASS'
    },
    {
        icon: bootstrap,
        text: 'Bootstrap'
    },
    {
        icon: tailwind,
        text: 'Tailwind CSS'
    },
    {
        icon: js,
        text: 'Javascript'
    },
    {
        icon: typescript,
        text: 'Typescript'
    },
    {
        icon: mysql,
        text: 'MySQL'
    }
]

export default function Languages() {

    return (
      <section className='lang-section'>
        <h2 className='text-1 heading'>Technologies &amp; Languages</h2>
        <div className='carousel'>
            {langList.map((lang, i) => {
                return (
                    <div className='c-item' key={i}>
                        <img src={lang.icon} alt={lang.text} />
                        <p>{lang.text}</p>
                    </div>
                )
            })}
        </div>
        {/* <hr /> */}
      </section>
    )
  }
