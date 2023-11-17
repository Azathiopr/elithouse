import React from 'react';
import './Partners.css'
import barter from '../../../assets/images/barter.png'
const Partners = () => {
    return (
        <section className='partners contsiner'>
            <h4>Партнёры</h4>
            <div className="all_barter">
                <div className="barter"><img src={barter} alt="logo" /></div>
                <div className="barter"><img src={barter} alt="logo" /></div>
                <div className="barter"><img src={barter} alt="logo" /></div>
                <div className="barter"><img src={barter} alt="logo" /></div>
                <div className="barter"><img src={barter} alt="logo" /></div>
            </div>

        </section>
    );
};

export default Partners;