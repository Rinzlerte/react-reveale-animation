import React, { Component } from 'react';
import Promoslider from './Promoslider';
import Header from './Header.jsx';
import {ArrowBtn} from '../ui/ArrowBtn';

export default class Home extends Component {
    constructor(props){
        super(props);
        this.state={
            whellCounter : 0,
            showMain: false,
            showSecondary: false,
            showThird : false
      }
      this.toogleSecondary = this.toogleSecondary.bind(this);
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
        console.log("scroll down in main");
        this.setState({
            count : this.state.count + 1
        });
      }
      
    else if (y < 0){
        if (this.state.count === 0){
            return;
        } else {
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
                    width="56px" height="56px" link="true" linkTo="/main"
                />
            </div>
            {this.state.showSecondary?
                <Secondary />
                :null
            }
       </div>
        )
    }
}
