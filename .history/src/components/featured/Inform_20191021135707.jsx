import React from 'react';
import {Backbtn} from '../ui/Backbtn';

const Inform = () => {
    return (
        <div style={{width: `100%`, height :`100vh`, backgroundColor: `red`}}>
            <Backbtn  width="50px" height="50px" link="true" linkTo="/" border="1px solid black"/>
        </div>
    );
};

export default Inform;