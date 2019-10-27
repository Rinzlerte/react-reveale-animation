import React from 'react';
import { useState } from 'react';
import Flip from 'react-reveal/Flip';
import Zoom from 'react-reveal/Zoom';

const Wellcome = () => {

    const [state, setState] = useState(false);

    return (
        <div className="wellcome-box box" onMouseEnter={() => setState(state => !state)} onMouseLeave={() => setState(state => !state)}>
            <Flip right>
                <Zoom when={state}>
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