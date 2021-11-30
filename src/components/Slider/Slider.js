import React from 'react';
import Slider from "react-slick";
import './Slider.css'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css"
import Hotel1 from '../Images/hotel1.jpg'
import Hotel2 from '../Images/hotel2.jpg'
import Hotel3 from '../Images/hotel3.jpg'
import Hotel4 from '../Images/hotel4.jpg'

function Sliders() {
    const settings = {
        dots: true,
        infinite: true,
        autoplay:true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplaySpeed: 2000,
        cssEase: "linear",
        initialSlide: 0,
    };
    return (
        <div>
            <h2>Auto Play</h2>
            <Slider {...settings} className="slider">
                <div className='Images'>
                    <img src={Hotel1} alt='Image' />
                </div>
                <div className='Images'>
                    <img src={Hotel2} alt='Image' />
                </div>
                <div className='Images'>
                    <img src={Hotel3} alt='Image' />
                </div>
                <div className='Images'>
                    <img src={Hotel4} alt='Image' />
                </div>
            </Slider>
        </div>
    );

}

export default Sliders;