import React from 'react';
import Header from './header/Header';
import { AroowBtn } from '../ui/Icon';
import Carrousel from './carusel/Carrousel';
import { positions } from '@material-ui/system';

const Home = () => {
    return (
        <div className="container"   style={{ height:`${window.innerHeight}px`}}>
            <Header />
            <Carrousel />
            <AroowBtn width="60px" height="60px" style={{postion :"fixed", bottom : "0"}} />
        </div>
    );
};

export default Home;