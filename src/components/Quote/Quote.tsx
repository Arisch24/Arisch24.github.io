import './Quote.scss';
import myImg from '../../assets/high-school-me.jpg';

export default function Quote() {
    return (
      <section className='quote-section'>
        <div className='quote-container'>
            <img src={myImg} alt="Image of me in highschool" />
            <div>
                <pre className='heading-3'>"Programming is part of an art of ajdoedhjaoeduhaoifnsakja
                dejaodihaeoduhaeoudhaoiuedh".</pre>
                <pre className='author'>~ Arischvaran Puvanesvaran (2023)</pre>
            </div>
        </div>
      </section>
    )
  }
