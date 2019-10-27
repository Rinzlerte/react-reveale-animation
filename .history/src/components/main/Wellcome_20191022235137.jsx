import React from 'react';
import Fade from 'react-reveal/Fade';

const Wellcome = () => {
    return (
        <div className="wellcome-box box">
            <Fade bottom opposite>
                <div className="wellcome-wrapper">
                    <h1>WELLCOME GUYS</h1>
                    <h2>TO OUR WEBSITE</h2>
                </div>
            </Fade>
        </div>
    );
};

export default Wellcome;