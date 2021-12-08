import React, {useEffect} from 'react';
import "./News.css"
import AOS from 'aos';
import 'aos/dist/aos.css';
function NewsTitle() {
    useEffect(()=>{
        AOS.init({duration:1500})
    },[])
    return (
        <div className="head-news" data-aos="zoom-in">
            <h1 className="header-news">News</h1>
        </div>
    );
}

export default NewsTitle;