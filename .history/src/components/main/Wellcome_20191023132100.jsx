import React from 'react';
import Flip from 'react-reveal/Flip';

const Wellcome = () => {
    return (
        <div className="wellcome-box box">
            <Flip>
                <div className="wellcome-wrapper">
                    <h1>WELLCOME GUYS</h1>
                    <h2>TO OUR WEBSITE</h2>
                </div>
            </Flip>
        </div>
    );
};

export default Wellcome;