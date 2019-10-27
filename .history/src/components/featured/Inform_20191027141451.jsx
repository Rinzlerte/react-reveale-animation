import React from 'react';
import {Backbtn} from '../ui/BackBtn';

const Information = (props) =>  {
    return(
    <div className="container"  style={{ height:`${window.innerHeight}px`}}>
        <h1>{props.title}</h1>
        <Backbtn  width="50px" height="50px" link="true" linkTo="/" />
    </div>
    );
}

export default Information;