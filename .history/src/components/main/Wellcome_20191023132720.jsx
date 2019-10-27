import React from 'react';
import { useState } from 'react';
import Flip from 'react-reveal/Flip';

const Wellcome = () => {

    const [state, setState] = useState(false);

    return (
        <div className="wellcome-box box">
            <Flip right when={this.state}>
                <div className="wellcome-wrapper" onMouseOver={() => setState(state => !state)} onMouseLeave={() => setState(state => !state)}>
                    <h1>WELLCOME GUYS</h1>
                    <h2>TO OUR WEBSITE</h2>
                </div>
            </Flip>
        </div>
    );
};

export default Wellcome;