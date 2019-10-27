import React from 'react';
import {ArrowBtn} from '../ui/ArrowBtn';
import Slide from 'react-reveal/Slide';
import './Main.css';
import Wellcome from './Wellcome';
import Inform from './Inform';
import { CrossBtn} from '../ui/Crossbtn';

  export default class Main extends React.Component {
      constructor(props){
          super(props);
          this.state={
            secondaryNotShown: true,
		}
		this.toogle = this.toogle.bind(this);
      }

	toogle(){
		this.setState({
			secondaryNotShown: !this.state.secondaryNotShown,
		})
	}

	handleEvent = (event) =>{
  	var y = event.deltaY;
  	if (y > 0) {
    this.setState({
		secondaryNotShown : false
	})
  	} else {
		this.setState({
			secondaryNotShown : true
		})
  	}
}	
/* <Wellcome />
<Inform /> */

    render(){
        return (
			<div className="main container" style={{ height:`${window.innerHeight}px`}} onWheel={(event)=>this.handleEvent(event)}>
			{ this.state.secondaryNotShown?
				<div className="container">
					<Slide left>
						<div style={{width: `50%`, height:`100%`,backgroundColor:`yellow`}}>
							<CrossBtn  width="50px" height="50px" link="true" linkTo="/about"/>
						</div>
					</Slide>
					<Slide top>
						<div style={{width:`50%`, height:`100%`, backgroundColor:`red`}}>
							
						</div>
					</Slide>
				</div>
				
			: <div className="container" style={{backgroundColor:`blue`}}>
				second rending
			</div>
			}
				<div className="footer" onClick={this.toogle}>
				    <ArrowBtn 
						width="56px" height="56px" link="false" linkTo="#"
				    />
				</div>
            </div>
        );
    }
}
