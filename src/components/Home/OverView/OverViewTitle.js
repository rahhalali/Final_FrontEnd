import React, {useEffect} from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
function OverViewTitle(props) {
    useEffect(()=>{
        AOS.init({duration:1500})
    },[])
    return (
        <div className="head" data-aos="zoom-in">
            <h1 className="header">OverView</h1>
        </div>
    );
}

export default OverViewTitle;