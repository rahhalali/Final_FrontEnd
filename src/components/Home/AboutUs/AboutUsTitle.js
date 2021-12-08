import React, {useEffect} from 'react';
import AOS from "aos";
import 'aos/dist/aos.css';
function AboutUsTitle(props) {
    useEffect(()=>{
        AOS.init({duration:2000})
    },[])
    return (
        <div className="head" data-aos="zoom-in">
            <h1 className="header">About Us</h1>
        </div>
    );
}

export default AboutUsTitle;