import React from 'react';
import { CrossBtn} from '../ui/Crossbtn';
import styled from 'styled-components';

const Inform = () => {

    
    const Inform = styled.div`
	:hover + Inform a{
        cursor: pointer;
        display: block;
	}
`


    return (
            <Inform className="inform-box">
                <CrossBtn  width="50px" height="50px" link="true" linkTo="/inform" />
            </Inform>
    );
};


export default Inform;