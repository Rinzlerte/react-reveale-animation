import React from 'react';
import { CrossBtn} from '../ui/Crossbtn';
import styled from 'styled-components';

const Inform = () => {

    
    const Hover = styled.CrossBtn`
	display: none;
	:hover {
		color: #ed1212;
        cursor: pointer;
        display: block;
	}
`


    return (
        <Hover>
            <div className="inform-box">
                <CrossBtn  width="50px" height="50px" link="true" linkTo="/inform" />
            </div>
        </Hover>
    );
};


export default Inform;