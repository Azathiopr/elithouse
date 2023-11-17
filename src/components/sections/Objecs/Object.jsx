import React from 'react';
import './Object.css'
import card1 from '../../../assets/images/1.png'
import card2 from '../../../assets/images/2.png'
import card3 from '../../../assets/images/3.png'
import card4 from '../../../assets/images/4.png'
import card5 from '../../../assets/images/5.png'
import card6 from '../../../assets/images/6.png'
import ashka from '../../../assets/images/ashka.png'
import arrowleft from '../../../assets/images/arrowleft.png'
import calisey from '../../../assets/images/calisey.png'
import arrowup from '../../../assets/images/arrowup.png'
import Vector from '../../../assets/images/Vector.png'


const Object = () => {
    return (
        <section className='object contsiner'>
            <div className="object_up">
                <h3>Объекты</h3>
                <ul className='ob_menu'>
                    <li><a href="#">Новые</a></li>
                    <li><a href="#">Строящиеся</a></li>
                    <li><a href="#">Завершенные</a></li>
                </ul>
            </div>
            <div className="object_gal">
                <div className="ob_card">
                    <img className='cardclass' src={card1} alt="logo" />
                    <div className='card_sr'><h4>Александрия</h4> <img src={ashka} alt="logo" /></div>
                    <span className='span'></span>
                    <div className='card_down'><img src={Vector} alt="logo" /><p>ул.Токтогула/Исанова</p></div>
                </div>
                <div className="ob_card">
                    <img className='cardclass' src={card2} alt="logo" />
                    <div className='card_sr'><h4>Эль Классик</h4> <img src={arrowleft} alt="logo" /></div>
                    <span className='span'></span>
                    <div className='card_down'><img src={Vector} alt="logo" /><p>ул. Коенкозова/ул. Чуйкова</p></div>
                </div>
                <div className="ob_card">
                    <img className='cardclass' src={card3} alt="logo" />
                    <div className='card_sr'><h4>Эль Классик Плюс</h4> <img src={arrowleft} alt="logo" /></div>
                    <span className='span'></span>
                    <div className='card_down'><img src={Vector} alt="logo" /><p>ул.Коенкозова/Чуйкова</p></div>
                </div>
                <div className="ob_card">
                    <img className='cardclass' src={card4} alt="logo" />
                    <div className='card_sr' ><h4>Итальянский квартал</h4> <img src={calisey} alt="logo" /></div>
                    <span className='span'></span>
                    <div className='card_down'><img src={Vector} alt="logo" /><p>ул.С.Батора/А.Токомбаева</p></div>
                </div>
                <div className="ob_card">
                    <img className='cardclass' src={card5} alt="logo" />
                    <div className='card_sr'><h4>Асанбай ордо</h4> <img src={arrowup} alt="logo" /></div>
                    <span className='span'></span>
                    <div className='card_down'><img src={Vector} alt="logo" /><p>ул.С.Батора/А.Токомбаева</p></div>
                </div>
                <div className="ob_card">
                    <img className='cardclass' src={card6} alt="logo" />
                    <div className='card_sr'><h4>Континенталь</h4> <img src={ashka} alt="logo" /></div>
                    <span className='span'></span>
                    <div className='card_down'><img src={Vector} alt="logo" /><p>ул. Элебаева/Кулатова</p></div>
                </div>
            </div>
        </section>
    );
};

export default Object;