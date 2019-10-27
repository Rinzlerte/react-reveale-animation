import React, { Component } from "react";
import Slider from "react-slick";

import slide1 from '../../../Resources/images/wallpapers/apple.jpg';
import slide2 from '../../../Resources/images/wallpapers/camera.jpg';
import slide3 from '../../../Resources/images/wallpapers/skate.jpg';

export default class Carrousel extends Component {
    render() {
      const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1
      };
      return (
        <div>
          <h2> Single Item</h2>
          <Slider {...settings}>
            <div>
            <div className="carrousel_image"
            style={{
                background: `url(${slide3})`,
                height:`${window.innerHeight}px`,
                backgroundSize: 'cover'
            }}></div>
            </div>
            <div>
            <div className="carrousel_image"
            style={{
                background: `url(${slide2})`,
                height:`${window.innerHeight}px`,
                backgroundSize: 'cover'
            }}></div>
            </div>
            <div>
            <div className="carrousel_image"
            style={{
                background: `url(${slide1})`,
                height:`${window.innerHeight}px`,
                backgroundSize: 'cover'
            }}></div>
            </div>
          </Slider>
        </div>
      );
    }
  }