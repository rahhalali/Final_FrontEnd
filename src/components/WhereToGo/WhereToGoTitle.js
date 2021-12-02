import React, {useEffect} from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
function WhereToGoTitle(props) {
    useEffect(()=>{
        AOS.init({duration:1500})
    },[])
    return (
        <div className="head" data-aos="zoom-in">
            <h1 className="header">Where To Go</h1>
        </div>
    );
}

export default WhereToGoTitle;