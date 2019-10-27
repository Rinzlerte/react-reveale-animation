import React from 'react';
import { CrossBtn} from '../ui/Crossbtn';

const Inform = () => {

    
    const Inform = styled.div`
	:hover + a{
        border: 1px solid black;
        display: block;
        scale: 	1.5;
    }
    :hover{
        cursor: pointer;
    }
`


    return (
           
    );
};


export default Inform;


import React, { Component } from 'react'

export default class Inform extends Component {
    render() {
        return (
            <Inform className="inform-box">
                <CrossBtn  width="50px" height="50px" link="true" linkTo="/inform" />
            </Inform>
        )
    }
}
