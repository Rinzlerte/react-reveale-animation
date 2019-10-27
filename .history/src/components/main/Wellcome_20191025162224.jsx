import React from 'react';
import Flip from 'react-reveal/Flip';
import Zoom from 'react-reveal/Zoom';

const Wellcome = () => {

    return (
        <div className="wellcome-box box">
            <Flip right>
                <Zoom >
                    <div className="wellcome-wrapper">
                    <h1>WELLCOME GUYS</h1>
                    <h2>TO OUR WEBSITE</h2>
                    </div>
                </Zoom>
            </Flip>
        </div>
    );
};

export default Wellcome;