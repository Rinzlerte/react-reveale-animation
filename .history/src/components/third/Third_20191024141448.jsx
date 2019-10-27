import React, { Component } from 'react'
import Slide from 'react-reveal/Slide'

import ImamaginationBox from './ImmaginationBox';
import ProectsBox from './ProectsBox';
 
import './Third.css';

export default class Third extends Component {
    render() {
        return (
            <div className="third" style={{height: `${window.innerHeight}px`}}>
                <Slide right>
                    <div className="container" style={{display:`flex`}}>
                        <Slide right>
                            <div className="side-wrapper">
                                <ImamaginationBox/>
                            </div>
                        </Slide>
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
