import React from 'react';
import MainSlider from './Featured';
import Header from './Header.jsx';
import {ArrowBtn} from '../ui/ArrowBtn';
import { positions, flexbox } from '@material-ui/system';


// style={{ height:`${window.innerHeight}px`}} 
const Home = () => {
    return (
       <div className="container" style={{display: "flex", flexDirection:"column", justifyContent: "space-between", alignItems: "center"}}>
            <Header />
            
            <ArrowBtn 
            
            width="70px" height="70px" link="true" linkTo="/"
            />
       </div>
    );
};

export default Home;