import React from 'react';
import Slider from 'react-slick';

import slide1 from '../../resources/img/Ariana1.jpg';
import slide2 from '../../resources/img/Ariana2.jpg';
import slide3 from '../../resources/img/Ariana3.jpg';

const Carrousel = () => {
    const settings = {
        dots: false,
        infinite: true,
        autoplay: true,
        speed:  450
    }

    return(
        <div className="carrousel_wrapper" 
            style={{ 
                height:`${window.innerHeight}px`,
                overflow: 'hidden'
            }}>
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