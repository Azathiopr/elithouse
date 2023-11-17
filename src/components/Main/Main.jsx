import React from 'react';
import './Main.css'
import AboutUs from '../sections/AboutUs/AboutUs';
import Object from '../sections/Objecs/Object';
import Actions from '../sections/Actions/Actions';
import Media from '../sections/Media/Media';
import OurOfice from '../sections/OurOfice/OurOfice';
import Partners from '../sections/Partners/Partners';



const Main = () => {
    return (
        <main>

            <AboutUs />
            <Object />
            <Actions />
            <Media />
            <OurOfice />
            <Partners />


        </main>
    );
};

export default Main;