import React from 'react';
import './Footer.css'
import Facebook from '../../assets/images/fb.png'
import instagram from '../../assets/images/insta.png'
import youtube from '../../assets/images/yt.png'
import ftr from '../../assets/images/ftr logo.png'



const Footer = () => {
    return (
        <footer className='footer'>
            <ul className='info_about_us'>
                <li>О нас</li>
                <li>Объекты</li>
                <li>Онлайн-камеры</li>
                <li>Новости</li>
                <li>Медиа</li>
                <li>Вакансии</li>
                <li>Забота о клиентах</li>
            </ul>
            <ul className='info_about_comp'>
                <li>Управляющая компания</li>
                <li>Агентская программа</li>
                <li>Способы оплаты</li>
                <li>Barter.kg</li>
                <li>Контакты</li>
                <li>Офисы продаж</li>
            </ul>
            <div className="footer_three">
                <p>Адрес:
                    г.Бишкек, ул. Абдрахманова, 170/1, бизнес-центр «Ордо»,
                    7 этаж</p>
                <div className="ikons">
                    <img src={Facebook} alt="logo" />
                    <img src={instagram} alt="logo" />
                    <img src={youtube} alt="logo" />
                </div>
            </div>
            <div className="adress">
                <p>Телефон:
                    0 (555) 555 - 555
                    0 (312) 463 - 434</p>
                <p>E-mail:
                    elithouse@gmail.com</p>
            </div>
            <img className='ftr_logo' src={ftr} alt="logo" />
        </footer>
    );
};

export default Footer;