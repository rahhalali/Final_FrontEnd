import React, {useEffect} from 'react';
import AOS from "aos";
import 'aos/dist/aos.css';
import './TheHotelTitle.css'
function AboutUsTitle(props) {
    useEffect(()=>{
        AOS.init({duration:2000})
    },[])
    return (
        <div className="title-head" data-aos="zoom-in">
            <h1 className="header">The Hotel</h1>
        </div>
    );
}

export default AboutUsTitle;