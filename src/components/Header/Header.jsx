import React from 'react';
import './Header.css'
import logo from '../../assets/images/Group 156.png'
import Facebook from '../../assets/images/Facebook.svg'
import youtube from '../../assets/images/youtube.svg'
import instagram from '../../assets/images/instagram.svg'
import whatsapp from '../../assets/images/whatsapp.svg'
import moon from '../../assets/images/moon.svg'



const Header = () => {
    return (
        <header>
            <div className='header_top'>
                <a href="#">
                    <img src={logo} alt="logo" />
                </a>
                <nav>
                    <ul className='nav'>
                        <li><a className='menu_item' href="#">О нас</a></li>
                        <li><a className='menu_item' href="#">Объекты</a></li>
                        <li><a className='menu_item' href="#">Новости</a></li>
                        <li><a className='menu_item' href="#">Забота о клиентах</a></li>
                        <li><a className='menu_item' href="#">Оплата</a></li>
                        <li><a className='menu_item' href="#">Контакты</a></li>
                    </ul>
                </nav>
                <div className='ikon'>
                    <select>
                        <option value="Ru">Ru</option>
                        <option value="En">En</option>
                    </select>
                    <img className='program' src={Facebook} alt="logo" />
                    <img className='youtube' src={youtube} alt="logo" />
                    <img className='program' src={instagram} alt="logo" />
                    <img className='whatsapp' src={whatsapp} alt="logo" />
                    <a className='num' href="tel: 0555 555 555">0555 555 555</a>
                    <img className='moon' src={moon} alt="logo" />

                </div>
            </div>
            <div className='inbtn'>
                <button className='btn'><span className='block'>
                    <span className='blockup'></span>
                    <span className='blockaver'></span>
                    <span className='blockdown'></span>
                </span>
                    <p className='applic'>Оставить заявку</p></button>

            </div>
        </header >
    );
};

export default Header;