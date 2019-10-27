import React from 'react';

import {ArrowBtn} from '../ui/ArrowBtn';
import Slide from 'react-reveal/Slide';
import Fade from 'react-reveal/Fade';

import AboutBox from './AboutBox';
import Wellcome from './Wellcome';
import Information from './Information';

import './Main.css';

export default class Main extends React.Component {
      constructor(props){
          super(props);
          this.state={
			counter : 0,
			secondaryIsShown: false,
			thirdIsShown : false
		}
		// this.toogleSecondary = this.toogleSecondary.bind(this);
		this.handleEvent = this.handleEvent.bind(this);
      }

	handleEvent = (event) => {
		var y = event.deltaY;
			if (y > 0) {
				if (this.state.counter === 3){
					return;
				} 
				else {
					this.setState({
						counter : this.state.counter + 1,

				});
				this.renderAttention();
				console.log("scroll down in main");
			}
		}
		else if (y < 0){
			if (this.state.counter === 0){
				return;
			} else {
				console.log("scroll up in main");
				this.setState({
					counter : this.state.counter - 1,
					secondaryIsShown: true,
				});
				this.renderAttention();
			}
		}
	}

	componentDidUpdate(){
		console.log("state counter", this.state.counter);
		console.log("state second", this.state.secondaryIsShown);
		console.log("state counter", this.state.thirdIsShown);
	}


	// toogleSecondary = (value) => {
	// 	console.log(value);
	// 	this.setState({
	// 		secondary : value
	// 	});
	// }
	

    render(){
        return (
				<div className="main" style={{ height:`${window.innerHeight}px`}} onWheel={(event)=>this.handleEvent(event)}>
					<div className="container" style={{display:`flex`, position:`releative`, overflow: `hidden`}}>
						<Slide left>
							<div className="side-wrapper">
								<AboutBox />
							</div>
						</Slide>
						<div className="side-wrapper">
							<Wellcome />
							<Slide right>
								<div className="item">
									<Information />
								</div>
							</Slide>
						</div>
					</div>
					<div className="footer">
						<ArrowBtn 
							width="56px" height="56px" 
						/>
					</div>
				</div>
        );
    }
}