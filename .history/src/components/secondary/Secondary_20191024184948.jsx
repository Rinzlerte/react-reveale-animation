import React, { Component } from 'react';
import Slide from 'react-reveal/Slide';
import {ArrowBtn} from '../ui/ArrowBtn';

import ConnectionsBox from './ConnectionsBox';
import InnovateBox from './InnovateBox';
import EnterBox from './EnterBox';
import './Secondary.css';

export default class Secondary extends Component {
    constructor(props) {
        super(props);
        this.state = {
            thirdIsShown : false
        }
        //  this.state = { show: this.props.show };
        // this.handleClick = this.handleClick.bind(this);
        this.toogleThird = this.toogleThird.bind(this);
    }

    
    toogleThird(){
        alert("alert");
		this.setState({
			thirdIsShown : true
		})
    }
    
    render() {
        return (
            <div className="secondary" style={{ height: `${window.innerHeight}px`}}>
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
                    <ArrowBtn 
                        width="56px" height="56px" onClick={(e)=>this.toogleThird()}
                    />
                </div>  
            </div>
        );
    }
}
