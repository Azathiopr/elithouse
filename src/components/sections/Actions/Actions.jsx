import React from 'react';
import './Actions.css'
import group from '../../../assets/images/Group 95.png'
const Actions = () => {
    return (
        <section className='actions contsiner'>
            <h3>Акции</h3>
            <div className="photo">  <img src={group} alt="photo" /></div>

        </section>
    );
};

export default Actions;