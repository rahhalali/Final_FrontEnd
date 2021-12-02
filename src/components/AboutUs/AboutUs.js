import React, {useEffect} from 'react';
import './AboutUs.css'
import Ali from '../Images/Ali.jpeg';
import Back from '../Images/background.jpeg'
import AboutUsTitle from "./AboutUsTitle";
import ReactStars from "react-rating-stars-component";
import AOS from "aos";
import 'aos/dist/aos.css';
function AboutUs() {
    useEffect(()=>{
        AOS.init({duration:1500})
    },[])
    const starts = {
        size: 30,
        value: 6,
        count:6,
        edit: false
    };
    return (
        <>
            <AboutUsTitle/>
        <div className='about-us'>
            <div className='about-us-inner'>
                <div className='inner'>
                        <div className='description' data-aos="fade-up" data-aos-duration="3000">
                            <p className='about-desc'>ABOUT US</p>
                            <h1>The Best Hotel Ever</h1>
                            <p className='whole-desc'>Having an in-house team of expert medical writers and editors makes all the difference
                                in terms of getting your message, the way you want it, out into the marketplace.
                                Our medical content team knows what it takes to craft the right messages to the right audiences.
                                They are experts at securing accurate.</p>
                            <div className='stars'><ReactStars {...starts} classNames="Stars"/></div>
                            <div className='owner'>
                                <div className='desc'>
                                    <h3>
                                        Ali Rahhal
                                    </h3>
                                    <p>Founder</p>
                                </div>

                                <div className='new'>
                                    <img src={Ali} alt=''/>
                                </div>

                            </div>

                        </div>
                        <div className='image' data-aos="fade-down"
                             data-aos-easing="linear" data-aos-duration="1500">
                            <img src={Back} alt='img' />
                        </div>
                </div>
            </div>
        </div>
        </>
    );
}

export default AboutUs;