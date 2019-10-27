import React from 'react';
import MainSlider from './Featured';
import Header from './Header.jsx';
import {ArrowBtn} from '../ui/ArrowBtn';
import { positions, flexbox } from '@material-ui/system';


// style={{ height:`${window.innerHeight}px`}} 
const Home = () => {
    return (
       <div className="container home">
            <Header />
            
            <ArrowBtn 
                width="56px" height="56px" link="true" linkTo="/"
            />
       </div>
    );
};

export default Home;