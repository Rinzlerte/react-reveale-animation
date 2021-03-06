import React, { Component } from 'react'
import Slide from 'react-reveal/Slide'
import Zoom from 'react-reveal/Zoom'

import ImamaginationBox from './ImmaginationBox';
import ProectsBox from './ProectsBox';
 
import './Third.css';

export default class Third extends Component {
    render() {
        return (
            <div className="third" style={{height: `${window.innerHeight}px`}}>
                <Slide right>
                    <div className="container" style={{display:`flex`}}>
                        <Zoom right>
                            <div className="side-wrapper">
                                <ImamaginationBox/>
                            </div>
                        </Zoom>
                        <Slide>
                            <div className="side-wrapper">
                                <ProectsBox />
                            </div>
                        </Slide>
                    </div>
                </Slide>
            </div>
        );
    }
}
