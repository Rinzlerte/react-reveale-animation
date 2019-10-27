import React from 'react';
import Zoom from 'react-reveal/Zoom';

const Wellcome = () => {
    return (
        <div className="wellcome-box box">
            <Zoom bottom opposite>
                <div className="wellcome-wrapper">
                    <h1>WELLCOME GUYS</h1>
                    <h2>TO OUR WEBSITE</h2>
                </div>
            </Zoom>
        </div>
    );
};

export default Wellcome;