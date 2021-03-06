import React, { Component } from 'react';
import Slide from 'react-reveal/Slide';
import { CrossBtn} from '../ui/Crossbtn';
import './Secondary.css';

export default class Secondary extends Component {
    constructor(props) {
        super(props);
        this.state = { show: this.props.show };
        // this.handleClick = this.handleClick.bind(this);
      }

    render() {
        return (
            <div className="secondary" style={{display:`flex`, height:`${window.innerHeight}px`, position: `absulute`, zIndex: `1`}}>
                <Slide left collapse when={this.state.show}>
                    <div className="connections">
                        <CrossBtn  width="50px" height="50px" link="true" linkTo="/connections"/>
                    </div>
                </Slide>
                <div className="secondary-box">
                    <Slide top collapse when={this.state.show}>
                        <div className="box" style={{backgroundColor: `grey`}}></div>
                    </Slide>
                    <Slide right collapse when={this.state.show}>
                        <div className="box" style={{backgroundColor: `orange`}}></div>
                    </Slide>
                </div>
            </div>
        );
    }
}
