import React, { Component } from 'react';
import Promoslider from './Promoslider';
import Header from './Header.jsx';

import Main from '../main/Main';
import Secondary from '../secondary/Secondary';
import Third from '../third/Third';

export default class Home extends Component {
    constructor(props){
        super(props);
        this.state={
            whellCounter : 0,
            showFirst: false,
            showSecondary: false,
            showThird : false
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
                <div className="container">
                    <div className="container" style={{position:`releative`, overflow: `hiiden`}}>
                        <Header />
                        <Promoslider />
                        <div className="arrow-btn ts" onClick={(e)=>this.toogleFirst()}> 
                        </div>
                    </div>  
                </div>
                {this.state.showFirst && <Main />}
                {this.state.secondaryIsShown && <Secondary />}
                {this.state.showThird && <Third/>}
            </div>
        )
    }
}