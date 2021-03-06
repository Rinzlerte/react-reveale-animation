import React, { Component } from 'react';
import Slide from 'react-reveal/Slide';
import { CrossBtn } from '../ui/CrossBtn';

import ConnectionsBox from './ConnectionsBox';
import './Secondary.css';

export default class Secondary extends Component {
    constructor(props) {
        super(props);
        this.state = {
            show: true,
            secondaryCounter : 0,
            global: true,
        }
        //  this.state = { show: this.props.show };
        // this.handleClick = this.handleClick.bind(this);
        this.handleEvent = this.handleEvent.bind(this);
    }

    handleEvent = (event) => {
        var y = event.deltaY;
        if (y > 0) {
            this.setState({ 
                show: true,
                secondaryCounter : this.state.secondaryCounter + 1,
            });
            console.log("scrolled down in secondary");
        } else if (y < 0) {
            this.setState({ show: false });
            console.log('scrolled up in secondary');
        }
    }
    

    render() {
        return (
            <div className="secondary" style={{ display: `flex`, height: `${window.innerHeight}px`, position: `absulute`, zIndex: `1` }} onWheel={(event) => this.handleEvent(event)}>
                <Slide top when={this.state.show}>
                    <div className="connections">
                        <ConnectionsBox />
                    </div>
                </Slide>
                <div className="side-wrapper">
                    <Slide right when={this.state.show}>
                        <div className="item box" style={{ backgroundColor: `grey` }}>
                            <CrossBtn width="50px" height="50px" link="true" linkTo="/news" />
                        </div>
                    </Slide>
                    <Slide bottom  when={this.state.show}>
                        <div className="item box" style={{ backgroundColor: `orange` }}>
                            <CrossBtn width="50px" height="50px" link="true" linkTo="/events" />
                        </div>
                    </Slide>
                </div>
            </div>
        );
    }
}
