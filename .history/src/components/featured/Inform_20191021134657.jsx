import React from 'react';
import {Backbtn} from '../ui/Backbtn';

const Inform = () => {
    return (
        <div style={{backgroundColor: `red`, width: `100%`, height :`100vh`}}>
            Inform
            <Backbtn  width="50px" height="50px" link="true" linkTo="/Home" border="1px solid black"/>
        </div>
    );
};

export default Inform;