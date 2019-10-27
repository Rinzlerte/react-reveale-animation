import React from 'react';
import Fade from 'react-reveal/Fade';

const Wellcome = () => {
    return (
        <div className="wellcome-box">
            <Fade bottom>
                <div className="wellcome-wrapper">
                    <h1>WELLCOME GUYS</h1>
                    <p>INTO OUR ANIMATION SITE</p>
                </div>
            </Fade>
        </div>
    );
};

export default Wellcome;