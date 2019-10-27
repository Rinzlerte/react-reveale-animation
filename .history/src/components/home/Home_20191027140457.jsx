import React, { Component } from 'react';
import Slide from 'react-reveal/Slide';

import Zoom from 'react-reveal/Zoom';

import Promoslider from './Promoslider';
import Header from './Header.jsx';
// first
import AboutBox from '../boxes/AboutBox';
import Wellcome from '../boxes/WellcomeBox';
import InformationBox from '../boxes//InformationBox';
// second
import InnovateBox from '../boxes/InnovateBox';
import EnterBox from '../boxes/EnterBox';
import ConnectionsBox from '../boxes/ConnectionsBox';
// third
import SecondWellcomeBox from '../boxes/SecondWellcomeBox';
import SecondAboutBox from '../boxes/SeconAboutBox';
//fourth
import ProectsBox from '../boxes/ProectsBox';
import ImamaginationBox from '../boxes/ImmaginationBox';


export default class Home extends Component {
    constructor(props){
        super(props);
        this.state={
            wheellCounter : 0,
            clickCounter: 0,
            showFirst: false,
            firstZIndex: 1,
            showSecondary: false,
            secondaryZIndex: 1,
            showThird : false,
            thirdZIndex: 1,
            showFourth: false,
            fourthZIndex: 1,
            zIndex : 110
        }
        this.scrollDown = this.scrollDown.bind(this);
        this.handleEvent = this.handleEvent.bind(this);
    }

    handleEvent = (event) =>{
      var y = event.deltaY;
        if (y > 0) {
            if (this.state.wheellCounter === 0){
                this.setState({
                    showFirst : true,
                    wheellCounter : this.state.wheellCounter + 1,
                    firstZIndex: this.state.zIndex,
                });
            }else if (this.state.wheellCounter === 1){
                this.setState({
                    showSecondary: true,
                    wheellCounter : this.state.wheellCounter + 1,
                    secondaryZIndex : this.state.zIndex + 10
                })
            }else if (this.state.wheellCounter === 2){
                this.setState({
                    showThird: true,
                    wheellCounter : this.state.wheellCounter + 1,
                    thirdZIndex : this.state.zIndex + 10
                })
            }else if (this.state.wheellCounter === 3){
                this.setState({
                    showFourth: true,
                    wheellCounter : this.state.wheellCounter + 1,
                    fourthZIndex : this.state.zIndex + 10
                })
            }else {
                this.props.history.push('/menu');
            }

            console.log("scroll down in HOME"); 
        } else if (y < 0){
            if (this.state.wheellCounter === 0){
                return;
            } else if (this.state.wheellCounter === 4){
                this.setState({
                    showFourth: false,
                    wheellCounter : this.state.wheellCounter- 1,
                    fourthZIndex : this.state.zIndex -10
                });
            } else if (this.state.wheellCounter === 3){
                this.setState({
                    showThird: false,
                    wheellCounter : this.state.wheellCounter- 1,
                    thirdZIndex : this.state.zIndex -10
                });
            } else if (this.state.wheellCounter === 2){
                this.setState({
                    showSecondary: false,
                    wheellCounter : this.state.wheellCounter - 1,
                    secondaryZIndex : this.state.zIndex - 10
                });
            }else if (this.state.wheellCounter === 1){
                this.setState({
                    showFirst : false,
                    wheellCounter : this.state.wheellCounter - 1,
                    firstZIndex: 1,
                    zIndex: 110
                });
            } 
            console.log("scroll up in HOME");
        }
    }

    scrollDown() {
        if (this.state.wheellCounter === 0){
            this.setState({
                showFirst : true,
                wheellCounter : this.state.wheellCounter + 1,
                firstZIndex: this.state.zIndex,
            });
        }else if (this.state.wheellCounter === 1){
            this.setState({
                showSecondary: true,
                wheellCounter : this.state.wheellCounter + 1,
                secondaryZIndex : this.state.zIndex + 10

            })
        }else if (this.state.wheellCounter === 2){
            this.setState({
                showThird: true,
                wheellCounter : this.state.wheellCounter + 1,
                thirdZIndex : this.state.zIndex + 10
            })
        } else {
            this.props.history.push('/menu');
        }
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
                        <div className="arrow-btn ts" onClick={(e)=>this.scrollDown()}> 
                        </div>
                    </div>

                    <Slide left when={this.state.showFirst}>
						<div className="side-wrapper abs" style={{zIndex: `${this.state.firstZIndex}`, left: `0`}}>
							<AboutBox />
						</div>
                    </Slide>
                    <Slide right when={this.state.showFirst}>
                        <div className="side-wrapper abs" style={{zIndex: `${this.state.firstZIndex}`,right:`0`}}>
                            <Slide>
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
                        <div className="side-wrapper abs" style={{zIndex: `${this.state.secondaryZIndex}`, left: `0`}}>
                            <ConnectionsBox />
                        </div>
                    </Slide>
                    <Slide bottom when={this.state.showSecondary}>
                        <div className="side-wrapper abs" style={{zIndex: `${this.state.secondaryZIndex}`, right:`0`}}>
                            <Slide right opposite when={this.state.showSecondary}>
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
                    </Slide>


                   
                    <Slide bottom when={this.state.showThird}>
                            <div className="side-wraper abs" style={{zIndex: `${this.state.thirdZIndex}`, left: `0`}}>
                                <SecondAboutBox />
                            </div>
                    </Slide>
                    <Slide right when={this.state.showThird}>
                        <div className="abs" style={{zIndex: `${this.state.thirdZIndex}`, right:`0`, top:`0`}}>
                            <SecondWellcomeBox />
                        </div>
                    </Slide>


                    <Slide right when={this.state.showFourth}>
                        <div className="container abs" style={{zIndex: `${this.state.fourthZIndex}`, right:`0`, display:`flex`}}>
                            <Slide right when={this.state.showFourth}>
                                <div className="side-wrapper">
                                    <ImamaginationBox/>
                                </div>
                            </Slide>
                            <Zoom when={this.state.showFourth}>
                                <div className="side-wrapper">
                                    <ProectsBox />
                                </div>
                            </Zoom>
                        </div>
                    </Slide>
                </div>
            </div>
        );
    }
}