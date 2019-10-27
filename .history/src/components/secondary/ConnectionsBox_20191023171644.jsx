import React from 'react';
import { useState } from 'react';
import {CrossBtn} from '../ui/CrossBtn';
import Spin from 'react-reveal/Spin';

const ConnectionsBox = ()=> {

    const [state, setState] = useState(false);

        return (
            <div className="connetcion-box" onMouseEnter={() => setState(state => !state)} onMouseLeave={() => setState(state => state)}>
                <img src="https://images.wallpaperscraft.ru/image/mokryj_kapli_bliki_149805_2160x3840.jpg" alt="Connections"/>
                <figcaption>
                    <h2>I think <span>secondary</span> is magic</h2>
                    <p>We just like to create WOW effects</p>
                    <Spin top when={state}>
                        <CrossBtn  width="50px" height="50px" link="true" linkTo="/inform"/>
                    </Spin>
                </figcaption>
            </div>
        );
}

export default ConnectionsBox;