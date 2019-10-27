import React from 'react';
import Globalslider from './Globalslider';
import {ArrowBtn} from '../ui/ArrowBtn';

const Global = () => {
    return (
       <div className="home" style={{ height:`${window.innerHeight}px`}}>
            <Globalslider />
            <div className="footer">
                <ArrowBtn 
                    width="56px" height="56px" link="true" linkTo="/main"
                />
            </div>
       </div>
    );
};

export default Global;