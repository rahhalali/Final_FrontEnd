import React, {useEffect} from 'react';
import Navbar from "../Navbar/Navbar";
import Footer from "../Footer/Footer";
import NewsTitle from "./NewsTitle";

import AOS from "aos";
import News_Slider from "./Slider/Slider";
import 'aos/dist/aos.css';
function News(props) {
        useEffect(()=>{
            AOS.init({duration:1000})
        },[])

    return (
        <div className='news'>
            <Navbar/>
            <NewsTitle/>
            <div className='news-container' data-aos="fade">
                <div className='press-info' data-aos='fade-left'>
                    <h1>Press Contact</h1>
                    <p>Press@royal.com<br/>
                        +961 01 557799</p>
                </div>
                <div className='news-support' data-aos='fade-right'>
                    <h3>Supporter Contact</h3>
                    <p>Support@royal.com<br/>
                        +44 207 637 3220</p>
                </div>

                <div className='news-slider'>
                    <h1 data-aos='fade-down'>PRESS RELEASES</h1>
                    <div className='news-slider-inner' data-aos='zoom-out'>
                    <News_Slider/>
                    </div>
                </div>
            </div>
            <Footer/>
        </div>
    );
}

export default News;