import React from 'react';
import './AboutUs.css'
import up from '../../../assets/images/up.png'
import sr from '../../../assets/images/sr.png'
import niz from '../../../assets/images/niz.png'

const AboutUs = () => {
    return (
        <section className='about_us contsiner'>
            <div className="aboutus">
                <h2>О нас</h2>
                <p>Строительная компания Elite House была основана в 2013 году и является одним из лидеров строительной отрасли Кыргызстана. Компания Elite House не привлекает займы и работает исключительно на собственные средства.</p>
                <p> По итогам 2019 года компания Elite House была признана «Лучшей компанией по строительству многоэтажных домов премиум-класса в Кыргызстане».</p>
            </div>

            <div className="percent">
                <div className="perc">
                    <img src={up} alt="logo" />
                    <div className="inscrip"> <h3>1000</h3>
                        <p>и более дольщиков</p></div>



                </div>
                <div className="perc">
                    <img src={sr} alt="logo" />
                    <div className="inscrip"><h3>#1</h3>
                        <p>выбор года 2019</p></div>

                </div>
                <div className="perc">
                    <img src={niz} alt="logo" />
                    <div className="inscrip"><h3>7</h3>
                        <p>лет на рынке</p></div>

                </div>



            </div>
        </section >
    );
};

export default AboutUs;