import React, {useEffect} from 'react';
import './Empty.css'
import AOS from "aos";
import 'aos/dist/aos.css';

function Empty(props) {
    useEffect(() => {
        AOS.init({duration: 1500})
    }, []);
    return (
        <div className='empty' data-aos="fade">
            <div className='first'></div>
            <div className='second'></div>
        </div>
    );
}

export default Empty;