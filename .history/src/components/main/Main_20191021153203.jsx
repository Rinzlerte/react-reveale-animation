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
		alert('fdffdfddf');
		this.setState({
			secondaryNotShown: false
		})
	}

	handleEvent = (event) =>{
  	var y = event.deltaY;
 	 var currentSize = event.target.style.width;
  	if (y > 0) {
    newSize = parseInt(currentSize) + 10;
  	} else {
    newSize = parseInt(currentSize) - 10;
  	}
  	event.target.style.width = newSize + "px";
  	event.target.style.height = newSize + "px";
}	
	

    render(){
        return (
			<div className="main" style={{ height:`${window.innerHeight}px`}} onWheel={(event)=>this.handleEvent(event)}>
			{ this.state.secondaryNotShown?
				<div className="container">
				<Slide left>
					<div className="about">
						<CrossBtn  width="50px" height="50px" link="true" linkTo="/about"/>
					</div>
				</Slide>
				<Slide right>
					<div className="intro" style={{width:`50%`, backgroundColor:`green`}}>
						<Wellcome 
						/>
						<Inform />
					</div>
				</Slide>
				</div>
				
			: <div className="container">
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
