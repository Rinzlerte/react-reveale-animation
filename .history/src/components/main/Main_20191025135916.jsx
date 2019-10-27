import React from 'react';
import Slide from 'react-reveal/Slide';
import AboutBox from './AboutBox';
import Wellcome from './Wellcome';
import InformationBox from './InformationBox';


import './Main.css';

export default class Main extends React.Component {
      constructor(props){
          super(props);
          this.state={
			secondaryIsShown: false,
		}
		this.toogleSecondary = this.toogleSecondary.bind(this);
		this.handleEvent = this.handleEvent.bind(this);
    }

	handleEvent = (event) => {
		// var y = event.deltaY;
		// 	if (y > 0) {
		// 		if (this.state.counter === 3){
		// 			return;
		// 		} 
		// 		else {
		// 			this.setState({
		// 				counter : this.state.counter + 1,

		// 		});
		// 		console.log("scroll down in main");
		// 	}
		// }
		// else if (y < 0){
		// 	if (this.state.counter === 0){
		// 		return;
		// 	} else {
		// 		console.log("scroll up in main");
		// 		this.setState({
		// 			counter : this.state.counter - 1,
		// 			secondaryIsShown: true,
		// 		});
		// 	}
		// }
	}

	componentDidUpdate(){
		console.log("state counter", this.state.counter);
		console.log("state second", this.state.secondaryIsShown);
		console.log("state counter", this.state.thirdIsShown);
	}


	toogleSecondary(){
		this.setState({
			secondaryIsShown : true
		})
	}
	
	// onWheel={(event)=>this.handleEvent(event)}
    render(){
        return (
			<div className="main" style={{ height:`${window.innerHeight}px`}} >
					<Slide left>
						<div className="side-wrapper">
							<AboutBox />
						</div>
					</Slide>
					<div className="side-wrapper">
						<Slide top>
							<div className="item">
								<Wellcome />
							</div>
						</Slide>
						<Slide right>
							<div className="item">
								<InformationBox />
							</div>
						</Slide>
					</div>
				<div className="arrow-btn ts" onClick={(e)=>this.toogleSecondary()}></div>
			</div>
        );
    }
}