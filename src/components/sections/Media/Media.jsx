import React from 'react';
import './Media.css'
import cardbir from '../../../assets/images/cardbir.png'
import cardeki from '../../../assets/images/cardeki.png'
import cartuch from '../../../assets/images/cartuch.png'

const Media = () => {
    return (
        <section className='contsiner'>
            <h2>Медиа</h2>
            <div className="cards">
                <div className="card">
                    <img src={cardbir} alt="logo" />

                    <h3>Новые офисы </h3>
                    <span className='span'> </span>
                    <p className='opis'>Сайт рыбатекст поможет дизайнеру, верстальщику, вебмастеру сгенерировать несколько абзацев более...</p>
                    <span className='date'>22.10.2020</span>

                </div>
                <div className="card">
                    <img src={cardeki} alt="logo" />

                    <h3>Новые офисы</h3>
                    <span className='span'> </span>
                    <p className='opis'> Сайт рыбатекст поможет дизайнеру, верстальщику, вебмастеру сгенерировать несколько абзацев более...</p>
                    <span className='date'> 22.10.2020</span>

                </div>
                <div className="card">
                    <img src={cartuch} alt="logo" />

                    <h3>Новые офисы</h3>
                    <span className='span'> </span>
                    <p className='opis'>Сайт рыбатекст поможет дизайнеру, верстальщику, вебмастеру сгенерировать несколько абзацев более...</p>
                    <span className='date'>22.10.2020</span>

                </div>
            </div>
        </section>
    );
};

export default Media;