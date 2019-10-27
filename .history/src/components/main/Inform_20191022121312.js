import React from 'react';
import { CrossBtn} from '../ui/Crossbtn';

const Inform = () => {


    const onMouseEnter =event =>{
		console.log("mouse enter");

	}
	 const onMouseLeave= event =>{
		console.log("mouse enter");
	}



    return (
        <div className="inform-box">
            <CrossBtn  width="50px" height="50px" link="true" linkTo="/inform" />
        </div>
    );
};

export default Inform;