import React from 'react';
import Header from './header/Header';
import { AroowBtn } from '../ui/Icon';
import Carrousel from './carusel/Carrousel';


const Home = () => {
    return (
        <div nclassName="container" style={{ position: 'relative' }}>
            <Header />
            <Carrousel />
            <AroowBtn width="60px" height="60px" />
        </div>
    );
};

export default Home;