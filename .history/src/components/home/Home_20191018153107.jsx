import React from 'react';
import MainSlider from './Featured';
import Header from './Header.jsx';
import {ArrowBtn} from '../ui/ArrowBtn';
import { positions } from '@material-ui/system';


// style={{ height:`${window.innerHeight}px`}} 
const Home = () => {
    return (
       <div className="container">
            <Header />
            <MainSlider />
            <ArrowBtn style={{position :"fixed"}}
                width="60px" height="60px" link="false" linkTo="#"
            />
       </div>
    );
};

export default Home;