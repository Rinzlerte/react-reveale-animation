import React from 'react';
import {Backbtn} from '../ui/BackBtn';

const Proects = () =>  {
    return(
    <div className="container"  style={{ height:`${window.innerHeight}px`}}>
        <h1>Proects Page</h1>
        <Backbtn  width="50px" height="50px" link="true" linkTo="/proects" />
    </div>
    );
}

export default Proects;