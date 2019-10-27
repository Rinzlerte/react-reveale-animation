import React, { Component } from 'react';
import Slide from 'react-reveal/Slide';
import {ArrowBtn} from '../ui/ArrowBtn';

import ConnectionsBox from './ConnectionsBox';
import InnovateBox from './InnovateBox';
import EnterBox from './EnterBox';
import './Secondary.css';

import Third from '../third/Third';

export default class Secondary extends Component {
    constructor(props) {
        super(props);
        this.state = {
            show: true,
            secondaryCounter : 0,
        }
        //  this.state = { show: this.props.show };
        // this.handleClick = this.handleClick.bind(this);
        this.handleEvent = this.handleEvent.bind(this);
    }

    handleEvent = (event) => {
        // var y = event.deltaY;
        // if (y > 0) {
        //     this.setState({ 
        //         show: true,
        //         secondaryCounter : this.state.secondaryCounter + 1,
        //     });
        //     console.log("scrolled down in secondary");
        // } else if (y < 0) {
        //     this.setState({ show: false });
        //     console.log('scrolled up in secondary');
        // }
    }
    
    toogleThird(){
		this.setState({
			thirdIsShown : true
		})
    }
    
    render() {
        return (
            <div className="secondary" style={{ display: `flex`, height: `${window.innerHeight}px`, position: `absulute`, zIndex: `6` }} onWheel={(event) => this.handleEvent(event)}>
                <div className="container" style={{display:`flex`, position:`releative`}}>
                    <Slide top>
                        <div className="connections">
                            <ConnectionsBox />
                        </div>
                    </Slide>
                    <div className="side-wrapper">
                        <Slide right>
                            <div className="item">
                                <InnovateBox />
                            </div>
                        </Slide>
                        <Slide bottom>
                            <div className="item">
                                <EnterBox />
                            </div>
                        </Slide>
                    </div>
                    <div className="footer" onClick={(e)=>this.toogleThird()}>
                        <ArrowBtn 
                            width="56px" height="56px" 
                        />
                    </div>
                </div>    
                {this.state.thirdIsShown?
                    <Third />
                    :null
                }
            </div>
        );
    }
}
