import React, {useEffect} from 'react';
import './Image.css'
import AOS from "aos";
import 'aos/dist/aos.css';
function Image(props) {
    useEffect(()=>{
        AOS.init({duration:2000})
    },[])
    return (
        <div className='image-container' data-aos="zoom-in"></div>
    );
}

export default Image;