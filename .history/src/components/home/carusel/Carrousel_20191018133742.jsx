import React from 'react';
import Slider from 'react-slick';

import slide1 from '../../../Resources/images/wallpapers/apple.jpg';
import slide2 from '../../../Resources/images/wallpapers/camera.jpg';
import slide3 from '../../../Resources/images/wallpapers/skate.jpg';
import { relative } from 'path';

const Carrousel = () => {
    const settings = {
        dots: false,
        infinite: true,
        autoplay: true,
        speed:  500
    }

    return(
        <div className="carrousel_wrapper" 
            style={{  height:`${window.innerHeight}px`, position: "relative" }}>
            <Slider {...settings}>
                <div>
                    <div className="carrousel_image"
                    style={{
                        background: `url(${slide1})`,
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
                        background: `url(${slide3})`,
                        height:`${window.innerHeight}px`,
                        backgroundSize: 'cover'
                    }}></div>
                </div>
            </Slider>
        </div>
    );
}
export default Carrousel;