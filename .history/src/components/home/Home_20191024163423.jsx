import React, { Component } from 'react';
import Promoslider from './Promoslider';
import Header from './Header.jsx';
import {ArrowBtn} from '../ui/ArrowBtn';


import Main from '../main/Main';

export default class Home extends Component {
    constructor(props){
        super(props);
        this.state={
            whellCounter : 0,
            showFirst: false,
            showSecondary: false,
            showThird : false
      }
      this.toogleSecondary = this.toogleSecondary.bind(this);
      this.handleEvent = this.handleEvent.bind(this);
    }

    handleEvent = (event) =>{
      var y = event.deltaY;
      if (y > 0) {
        this.setState({
            count : this.state.count + 1
        });
        this.props.history.push('/main');
        console.log("scroll down in main");
        } else if (y < 0){
            console.log("scroll up in main");
            return;
        } 
        console.log("actual counter", this.state.whellCounter)
    }

    toogleSecondary() {
        this.setState({
            showFirst: true,
        });
	}

    render() {
        return (
            <div className="home" style={{ height:`${window.innerHeight}px` ,position: `releative`}} onWheel={(event)=>this.handleEvent(event)}>
                <div className="container" style={{position: `releative`}}>
                    <Header />
                    <Promoslider />
                    <div className="arrow-btn" onClick={(e)=>this.toogleSecondary()}> 
                        
                    </div>
                </div>
                {this.state.showFirst?
                    <Main />
                    :null
                }
            </div>
        )
    }
}
