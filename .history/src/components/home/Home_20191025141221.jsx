import React, { Component } from 'react';
import Slide from 'react-reveal/Slide';
import Promoslider from './Promoslider';
import Header from './Header.jsx';


import AboutBox from '../main/AboutBox';
import Wellcome from '../main/Wellcome';
import InformationBox from '../main/InformationBox';

export default class Home extends Component {
    constructor(props){
        super(props);
        this.state={
            whellCounter : 0,
            showFirst: false,
            firstEffects: false,
            showSecondary: false,
            secondaryEffects: false,
            showThird : false,
            thirdEffects: false
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
            }else if (this.state.whellCounter ===1){
                this.setState({
                    secondaryIsShown: true,
                    whellCounter : this.state.whellCounter + 1,
                })
            }else if (this.state.whellCounter ===2){
                this.setState({
                    showThird: true,
                    whellCounter : this.state.whellCounter + 1,
                })
            }

            console.log("scroll down in HOME");
        } else if (y < 0){
            // this.props.history.push('/contacts');
            if (this.state.whellCounter ===0){
                return;
            } 
            if (this.state.whellCounter === 3){
                this.setState({
                    showThird: false,
                });
            }
            if (this.state.whellCounter === 2){
                this.setState({
                    secondaryIsShown: false
                });
            }
            if (this.state.whellCounter === 1){
                this.setState({
                    showFirst : false
                });
            }

            else {
            this.setState({
                whellCounter : this.state.whellCounter - 1
            });
            console.log("scroll up in HOME");
            }
        }
    }

    toogleFirst() {
        this.setState({
            showFirst: true,
        });
    }

    componentDidUpdate(){
        console.log("actual whellCounter", this.state.whellCounter);
    }

    render() {
        return (
            <div className="home" style={{ height:`${window.innerHeight}px`, position:`releative`}} onWheel={(event)=>this.handleEvent(event)}>
                <div className="container" style={{display:`flex`}}>
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

                    <Slide top when={this.state.secondaryIsShown}>
                        <div className="side-wrapper s">
                            <ConnectionsBox />
                        </div>
                    </Slide>
                    <Fade when={this.state.secondaryIsShown}>
                        <div className="side-wrapper s">
                            <Slide top when={this.state.secondaryIsShown}>
                                <div className="item">
                                    <InnovateBox />
                                </div>
                            </Slide>
                            <Slide bottom when={this.state.secondaryIsShown}>
                                <div className="item">
                                    <EnterBox />
                                </div>
                            </Slide>
                        </div>
                    </Fade>


                </div>
            </div>
        )
    }
}