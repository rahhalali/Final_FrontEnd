import React, {useEffect} from 'react';
import Slider from "react-slick";
import './Slider.css'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css"
import AOS from 'aos';
import 'aos/dist/aos.css';
import Hotel1 from '../Images/hotel1.jpg'
import Hotel2 from '../Images/hotel2.jpg'
import Hotel3 from '../Images/hotel3.jpg'
import Hotel4 from '../Images/hotel4.jpg'
import Hotel5 from '../Images/front.jpeg'

function Sliders() {
    useEffect(()=>{
        AOS.init({duration:1000})
    },[])
    const settings = {
        dots: true,
        infinite: true,
        autoplay:true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplaySpeed: 5000,
        cssEase: "linear",
        initialSlide: 0,
    };
    return (
        <div data-aos="zoom-in">
            <Slider {...settings} className="slider">
                <div className='Images'>
                    <img src={Hotel5} alt='Image' />
                </div>
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