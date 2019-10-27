import React from 'react';

const Wellcome = () => {


    onMouseEnter(){
		console.log("mouse enter");

	}
	onMouseLeave(){
		console.log("mouse enter");
	}


    return (
        <div className="wellcome-box">
         <div className="wellcome-wrapper">
            <h1>WELLCOME GUYS</h1>
            <p>INTO OUR ANIMATION SITE</p>
         </div>
        </div>
    );
};

export default Wellcome;