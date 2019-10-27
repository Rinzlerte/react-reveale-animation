import React from 'react';

const Wellcome = () => {
    const mouseEnter= event =>{

    }

    const mouseLeave= event =>{

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


mouseEnter() {
    this.setState({show: true})
}
  
mouseLeave() {
    this.setState({
        show: false
    })
}