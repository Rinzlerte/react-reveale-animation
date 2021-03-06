// import React from 'react';
// import {ArrowBtn} from '../ui/ArrowBtn';
// import Company from './Company'; 
// import Wellcome from './Wellcome';
// import Inform from './Inform';

//   export default class Main extends React.Component {
//       constructor(props){
//           super(props);
//           this.state={
//             checked: false,
//             setChecked: false
//         }
//       }
//       <div className="footer">
//       <ArrowBtn 
//           width="56px" height="56px" link="true" linkTo="/"
//       />
//   </div>
//     render(){
//         return (
//             <div className="main" style={{ height:`${window.innerHeight}px`, backgroundColor: `red`}}>

//             </div>
//         );
//     }
// }
import React, { Component } from "react";
import { TimelineLite, CSSPlugin } from "gsap/all";

import './Main.css';
import Company from "./Company";

// icons will be animated using a stagger method
const iconsArray = [
	{ src: "https://www.greensock.com/_img/codepen/icon_robust.png", width: "83", height: "59" },
	{ src: "https://www.greensock.com/_img/codepen/icon_overwrite.png", width: "43", height: "59" },
	{ src: "https://www.greensock.com/_img/codepen/icon_compatible.png", width: "73", height: "59" },
	{ src: "https://www.greensock.com/_img/codepen/icon_support.png", width: "83", height: "59" },
	{ src: "https://www.greensock.com/_img/codepen/icon_plugin.png", width: "76", height: "59" }
];

class TimelineSequence extends Component {
	constructor(props){
		super(props);

		this.logoTl = new TimelineLite({ paused:true });
		this.content = null;
		this.head = null;
		this.subhead = null;
		this.feature = null;
		this.description = null;
		this.icons = [];
	}

	// add instances to the timeline
	componentDidMount(){
		this.logoTl
			.set(this.content, { autoAlpha: 1 })// show content div
			.from(this.company, 0.5, { left: 5000, autoAlpha: 0 })
			.from(this.welcome, 0.5, { left: -100, autoAlpha: 0 }, "-=0.25") // added -0.25 seconds prior to end this.of timeline
			.from(this.info, 0.5, { scale: .5, autoAlpha: 0 }, "feature") // added 0.5 seconds after end of timeline
			.from(this.description, 0.5, { left: 100, autoAlpha: 0 }, "feature+=0.25")
			.staggerFrom(this.icons, 0.2, { scale: 0, autoAlpha: 0 }, 0.1); //animate all icons with 0.1 second stagger
	}

	render(){
		return <div className="container">
					<p className="lead">Uses the <strong>ref</strong> callback to create references for a group of elements in the app. Then using the <strong>componentDidMount</strong> method, creates a timeline sequence that can be controlled using the buttons.</p>
					
					{/* DEMO WRAPPER */}
					<div className="demoWrapper">
						<div className="bg"></div>

						<div className="content" ref={ div => this.content = div }>

                            <div className="company" ref={ company => this.company = company }>Company</div>
                            <div>
                                <div ref={ h2 => this.welcome = h2 }></div>
                                <div className="info">
                                    <img
                                        src="https://www.greensock.com/_img/codepen/feature_robust.png"
                                        width="240"
                                        height="151"
                                        className="feature"
                                        ref={ img => this.feature = img }
                                    />
                                    <p className="description" ref={ p => this.description = p }>
                                        Animate colors, beziers, css properties, arrays, scrolls and lots more. Round values, smoothly reverse() on the fly, use relative values, employ virtually any easing equation, and manage conflicting tweens like a pro. GSAP does all this and much more with ease.
                                    </p>
                                </div>
                            </div>
						</div>
					</div>

                    {/* BUTTONS */}
					<div className="my-3 btn-group">
						<button
							className="btn gsap-btn"
							onClick={() => this.logoTl.play()}
						>Play</button>
						<button
							className="btn gsap-btn"
							onClick={() => this.logoTl.pause()}
						>Pause</button>
						<button
							className="btn gsap-btn"
							onClick={() => this.logoTl.reverse()}
						>Reverse</button>
						<button
							className="btn gsap-btn"
							onClick={() => this.logoTl.restart()}
						>Restart</button>
					</div>
		</div>
	}

}

export default TimelineSequence;
