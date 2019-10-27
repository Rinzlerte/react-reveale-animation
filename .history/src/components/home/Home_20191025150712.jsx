import React, { Component } from 'react';
import Slide from 'react-reveal/Slide';
import Fade from 'react-reveal/Fade';
import Promoslider from './Promoslider';
import Header from './Header.jsx';


import AboutBox from '../main/AboutBox';
import Wellcome from '../main/Wellcome';
import InformationBox from '../main/InformationBox';

import InnovateBox from '../secondary/InnovateBox';
import EnterBox from '../secondary/EnterBox';
import ConnectionsBox from '../secondary/ConnectionsBox';

export default class Home extends Component {
    constructor(props){
        super(props);
        this.state={
            whellCounter : 0,
            showFirst: false,
            showSecondary: false,
            showThird : false,
        }
        this.toogleFirst = this.toogleFirst.bind(this);
        this.handleEvent = this.handleEvent.bind(this);
    }

    handleEvent = (event) =>{
      var y = event.deltaY;
        if (y > 0) {
            if (this.state.whellCounter === 0){
                this.setState({
                    showFirst : true,
                    whellCounter : this.state.whellCounter + 1,
                });
            }else if (this.state.whellCounter === 1){
                this.setState({
                    showSecondary: true,
                    whellCounter : this.state.whellCounter + 1,
                })
            }else if (this.state.whellCounter === 2){
                this.setState({
                    showThird: true,
                    whellCounter : this.state.whellCounter + 1,
                })
            }

            console.log("scroll down in HOME");
        } else if (y < 0){
            // this.props.history.push('/contacts');
            if (this.state.whellCounter === 0){
                return;
            } else if (this.state.whellCounter === 3){
                this.setState({
                    showThird: false,
                    whellCounter : this.state.whellCounter - 1
                });
            } else if (this.state.whellCounter === 2){
                this.setState({
                    showSecondary: false,
                    whellCounter : this.state.whellCounter - 1
                });
            }else if (this.state.whellCounter === 1){
                this.setState({
                    showFirst : false,
                    whellCounter : this.state.whellCounter - 1
                });
            }
            console.log("scroll up in HOME");
        }
    }

    toogleFirst() {
        this.setState({
            showFirst: true,
        });
    }

    componentDidUpdate(){
        console.log("actual whellCounter", this.state.whellCounter);
        console.log("actual showFirst", this.state.showFirst);
        console.log("actual showSecondary", this.state.showSecondary);
        console.log("actual showThirdr", this.state.showThird);
    }

    render() {
        return (
            <div className="home" style={{ height:`${window.innerHeight}px`, position:`releative`}} onWheel={(event)=>this.handleEvent(event)}>
                <div className="container" style={{display:`flex`, position:`releative`}}>
                    <div className="container" style={{position:`releative`, overflow: `hiiden`}}>
                        <Header />
                        <Promoslider />
                        <div className="arrow-btn ts" onClick={(e)=>this.toogleFirst()}> 
                        </div>
                    </div>
                    <Slide left when={this.state.showFirst}>
						<div className="side-wrapper m" >
							<AboutBox />
						</div>
                    </Slide>
                    <Slide right when={this.state.showFirst}>
                        <div className="side-wrapper m">
                            <Slide top>
                                <div className="item">
                                    <Wellcome />
                                </div>
                            </Slide>
                            <Slide>
                                <div className="item">
                                    <InformationBox />
                                </div>
                            </Slide>
                        </div> 
                    </Slide>

                    <Slide top when={this.state.showSecondary}>
                        <div className="side-wrapper s" style={{left: `0`}}>
                            <ConnectionsBox />
                        </div>
                    </Slide>
                    <Fade when={this.state.showSecondary}>
                        <div className="side-wrapper s" style={{right: `0`}}>
                            <Slide top when={this.state.showSecondary}>
                                <div className="item">
                                    <InnovateBox />
                                </div>
                            </Slide>
                            <Slide bottom when={this.state.showSecondary}>
                                <div className="item">
                                    <EnterBox />
                                </div>
                            </Slide>
                        </div>
                    </Fade>
                    <Slide right when={this.state.showThird}>
                        <div className="container t" style={{display:`flex`}}>
                            <Slide right when={this.state.showThird}>
                                <div className="side-wrapper">
                                    <ImamaginationBox/>
                                </div>
                            </Slide>
                            <Zoom when={this.state.showThird}>
                                <div className="side-wrapper">
                                    <ProectsBox />
                                </div>
                            </Zoom>
                        </div>
                    </Slide>
                </div>
            </div>
        )
    }
}