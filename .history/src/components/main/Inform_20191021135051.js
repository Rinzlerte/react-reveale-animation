import React from 'react';
import { CrossBtn} from '../ui/Crossbtn';

const Inform = () => {
    return (
        <div className="inform" style={{backgroundColor: `red`}}>
            <CrossBtn  width="50px" height="50px" link="true" linkTo="/inform" />
        </div>
    );
};

export default Inform;