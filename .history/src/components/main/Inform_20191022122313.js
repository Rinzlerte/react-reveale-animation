import React from 'react';
import { CrossBtn} from '../ui/Crossbtn';
import styled from 'styled-components';



const HoverText = styled.p`
	color: #000;
	:hover {
		color: #ed1212;
		cursor: pointer;
    };
    

const Inform = () => {

    
 



    return (
        <div className="inform-box">
            <CrossBtn  width="50px" height="50px" link="true" linkTo="/inform" />
        </div>
    );
};

export default Inform;