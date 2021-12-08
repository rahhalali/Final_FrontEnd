import React, {useEffect} from 'react';
import './Date.css'
import AOS from "aos";
import 'aos/dist/aos.css';
function Date(props) {
    useEffect(()=>{
        AOS.init({duration:1500})
    },[])
    return (
        <div className='date'>
            <p data-aos="fade-up">{props.day}</p>
            <h3 data-aos="fade-down">{props.month}</h3>
        </div>
    );
}

export default Date;