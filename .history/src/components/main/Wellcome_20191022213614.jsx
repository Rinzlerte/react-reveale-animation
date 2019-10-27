import React from 'react';
import Fade from 'react-reveal/Fade';

const Wellcome = () => {
    return (
        <div className="wellcome-box box">
            <Fade bottom opposite>
                <div className="wellcome-wrapper">
                    <h1>WELLCOME GUYS</h1>
                    <p>Here is our Site</p>
                </div>
            </Fade>
        </div>
    );
};

export default Wellcome;