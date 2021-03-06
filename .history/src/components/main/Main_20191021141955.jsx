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
      }

    render(){
        return (
			<div className="main" style={{ height:`${window.innerHeight}px`, backgroundColor: `red`}}>
			{ this.state.secondary?
				<div className="container">
				<Slide left>
					<div className="about">
						<CrossBtn  width="50px" height="50px" link="true" linkTo="/about"/>
					</div>
				</Slide>
				<Slide right>
					<div clasName="intro" style={{width:`50%`, backgroundColor:`green`}}>
						<Wellcome 
						/>
						<Inform />
					</div>
				</Slide>
			</div>
			: <div className="container"></div>
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
