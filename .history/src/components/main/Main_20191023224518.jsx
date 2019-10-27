import React from 'react';
import {ArrowBtn} from '../ui/ArrowBtn';
// import {BackBtn} from '../ui/BackBtn';
import Slide from 'react-reveal/Slide';
import Fade from 'react-reveal/Fade';
import AboutBox from './AboutBox';
import Wellcome from './Wellcome';
import Information from './Information';


// test
import ConnectionsBox from '../secondary/ConnectionsBox';
import InnovateBox from '../secondary/InnovateBox';
import EnterBox from '../secondary/EnterBox';

import ImamaginationBox from '../third/ImmaginationBox';

import './Main.css';

export default class Main extends React.Component {
      constructor(props){
          super(props);
          this.state={
			counter : 0,
			secondaryIsShown: false,
			thirdIsShown : false
		}
		this.toogleSecondary = this.toogleSecondary.bind(this);
		this.handleEvent = this.handleEvent.bind(this);
      }

	handleEvent = (event) => {
		var y = event.deltaY;
			if (y > 0) {
				if (this.state.counter === 3){
					return;
				} else {
					this.setState({
						counter : this.state.counter + 1,
				});
				if (this.state.counter === 1){
						this.setState({
							secondaryIsShown: !this.state.secondaryIsShown,
						})
					}
				console.log("scroll down in main");
			}
		}
		else if (y < 0){
			if (this.state.counter === 0){
				return;
			} else {
				console.log("scroll up in main");
				this.setState({
					counter : this.state.counter - 1
				});
			}
		}
	}

	componentDidUpdate(){
		console.log("actual counter", this.state.counter);
		this.renderAttention();
	}

	toogleSecondary = (value) => {
		console.log(value);
		this.setState({
			secondary : value
		});
	}
	

	renderAttention(){
		if (this.state.count === 1) {
			this.setState({
				secondaryIsShown : !this.state.secondaryIsShown
			})
		}
		if (this.state.count === 2) {
			this.setState({
				thirdIsShown : !this.state.thirdIsShown
			})
		}
	}
	
	

    render(){
        return (
				<div className="main" style={{ height:`${window.innerHeight}px`}} onWheel={(event)=>this.handleEvent(event)}>
					<div className="container" style={{display:`flex`, position:`releative`}}>
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
					{this.state.counter === 1 &&
						<Fade bottom when={this.state.counter === 1}>
							<div className="container" style={{position:`absolute`, display:`flex`}}>
								<Slide top>
									<div className="connections">
										<ConnectionsBox />
									</div>
								</Slide>
								<div className="side-wrapper">
									<Slide right >
											<div className="item">
												<EnterBox />
											</div>
									</Slide>
									<Slide bottom>
										<div className="item">
											<InnovateBox />
										</div>
									</Slide>
								</div>
							</div>
						</Fade>
					}
					{this.state.counter === 2 &&
						<Fade bottom when={this.state.counter === 2}>
							<div className="container" style={{position:`absolute`, display:`flex`}}>
								<Slide right>
									<div className="container" style={{display:`flex`}}>
										<div className="side-wrapper">
											<Slide right>
												<ImamaginationBox/>
											</Slide>
										</div>
										<div className="side-wrapper">
											<Slide right>
												<div className="item">
													<EnterBox />
												</div>
											</Slide>
										</div>
									</div>
								</Slide>
							</div>
						</Fade>
					}
					<div className="footer">
						<ArrowBtn 
							width="56px" height="56px" 
						/>
					</div>
				</div>
        );
    }
}