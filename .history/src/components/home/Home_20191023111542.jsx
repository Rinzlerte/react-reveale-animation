import React, { Component } from 'react';
import Promoslider from './Promoslider';
import Header from './Header.jsx';
import {ArrowBtn} from '../ui/ArrowBtn';

import Main from '../main/Main';
import Secondary from '../secondary/Secondary';
import Third from '../third/Third';
//animation
import {Animated} from "react-animated-css";

export default class Home extends Component {
    constructor(props){
        super(props);
        this.state={
            whellCounter : 0,
            showMain: false,
            showSecondary: false,
            showThird : false
      }
    //   this.toogleSecondary = this.toogleSecondary.bind(this);
      this.handleEvent = this.handleEvent.bind(this);
    }

    // closeSecondary(){
    //     this.setState({
    //         secondary: false
    //     });
    // }

    handleEvent = (event) =>{
        var y = event.deltaY;
        if (y > 0) {
        this.setState({
            count : this.state.count + 1,
            showMain: true,
        });
        console.log("scroll down in Home");
    }
      
    else if (y < 0){
            console.log("scroll up in main");
            this.setState({
                  count : this.state.count - 1
                });
            } 
        }
    }



    render() {
        return (
            <div className="home" style={{ height:`${window.innerHeight}px`}}>
            <Header />
            <Promoslider />
            <div className="footer">
                <ArrowBtn 
                    width="56px" height="56px" onClick={(e)=>this.toogleSecondary(true)}
                />
            </div>
            {   this.state.showMain?
                <Animated>
                    <Main />
                </Animated>
                :null
            }
       </div>
        )
    }
}
