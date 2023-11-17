import React from 'react';
import './OurOfice.css'
import tochka from '../../../assets/images/Frame.png'
import Group_97 from '../../../assets/images/Group 97.png'

const OurOfice = () => {
    return (
        <section className='Ofice'>
            <h2 className='Our_ofice contsiner'>Наши офисы</h2>
            <div className="backphoto">
                <img className='tochka_odin' src={tochka} alt="logo" />
                <img className='tochka_dva' src={tochka} alt="logo" />
                <img className='tochka_three' src={tochka} alt="logo" />
                <img className='tochka_chet' src={tochka} alt="logo" />
                <img className='tochka_pyat' src={Group_97} alt="logo" />
            </div>
        </section>

    );
};

export default OurOfice;