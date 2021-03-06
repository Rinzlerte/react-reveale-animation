import React from 'react';
import {ArrowBtn} from '../ui/ArrowBtn';
import Slide from 'react-reveal/Slide';
import './Main.css';
import Wellcome from './Wellcome';
import Inform from './Inform';
import {ClrossBtn, CrossBtn} from '../ui/Crossbtn';

  export default class Main extends React.Component {
      constructor(props){
          super(props);
          this.state={
            checked: false,
            setChecked: false
        }
      }

    render(){
        return (
			<div className="main" style={{ height:`${window.innerHeight}px`, backgroundColor: `red`}}>
				<div className="container">
					<Slide left>
						<div style={{width:`50%`, backgroundColor:`yellow`}}>
							<CrossBtn  width="" height="" link="" linkTo=""/>
						</div>
					</Slide>
					<Slide right>
						<div clasName="intro" style={{width:`50%`, backgroundColor:`green`}}>
							<Wellcome />
							<Inform />
						</div>
					</Slide>
				</div>
				<div className="footer">
				    <ArrowBtn 
				        width="56px" height="56px" link="true" linkTo="/"
				    />
				</div>
            </div>
        );
    }
}
