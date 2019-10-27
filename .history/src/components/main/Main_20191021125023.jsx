import React from 'react';
import {ArrowBtn} from '../ui/ArrowBtn';
import Slide from 'react-reveal/Slide';
import './Main.css';

import Company from './Company'; 
import Wellcome from './Wellcome';
import Inform from './Inform';

  export default class Main extends React.Component {
      constructor(props){
          super(props);
          this.state={
            checked: false,
            setChecked: false
        }
      }
//       <div className="footer">
//       <ArrowBtn 
//           width="56px" height="56px" link="true" linkTo="/"
//       />
//   </div>
// <div style={{width:`50%`, backgroundColor:`yellow`}}><h3>Реєстрація до 16го Жовтня</h3></div>
    render(){
        return (
			<div className="main" style={{ height:`${window.innerHeight}px`, backgroundColor: `red`}}>
				<div className="container">
					<Slide left>
						<Company />
					</Slide>
					<Slide right>
						<div style={{width:`50%`, backgroundColor:`green`}}><h3>Info</h3></div>
					</Slide>
				</div>
            </div>
        );
    }
}
