import React from 'react';
import { useState } from 'react';
import Flip from 'react-reveal/Flip';
import Jump from 'react-reveal/Jump';

const Wellcome = () => {

    const [state, setState] = useState(false);

    return (
        <div className="wellcome-box box" onMouseOver={() => setState(state => !state)} onMouseLeave={() => setState(state => !state)}>
            <Flip right when={state}>
                <Jump>
                    <div className="wellcome-wrapper" >
                    <h1>WELLCOME GUYS</h1>
                    <h2>TO OUR WEBSITE</h2>
                    </div>
                </Jump>
            </Flip>
        </div>
    );
};

export default Wellcome;