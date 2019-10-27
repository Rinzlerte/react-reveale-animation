import React, { Component } from 'react'
import Carousel from 're-carousel';

import slide1 from '../../Resources/images/wallpapers/camera.jpg'
import slide2 from '../../Resources/images/wallpapers/apple.jpg'
import slide3 from '../../Resources/images/wallpapers/skate.jpg'

export default class Featured extends Component {


    magic(){
        table.onmouseover = function(event) {
            let target = event.target;
            target.style.background = 'pink';
          };
    }
    

    return (
        <Carousel auto loop interval={4000} duration={550}>
            <div style={{
                background: `url(${slide1})`,
                height:`${window.innerHeight}px`,
                backgroundSize: 'cover'
            }}>
            </div>
            <div style={{
                background: `url(${slide2})`,
                height:`${window.innerHeight}px`,
                backgroundSize: 'cover'
            }}></div>
            <div style={{
                background: `url(${slide3})`,
                height:`${window.innerHeight}px`,
                backgroundSize: 'cover'
            }}></div>
        </Carousel>
    );
};

export default Featured;


import React, { Component } from 'react'

export default class Featured extends Component {
    render() {
        return (
            <div>
                
            </div>
        )
    }
}
