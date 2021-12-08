import React from 'react';
import Navbar from "../Navbar/Navbar";
import Footer from "../Footer/Footer";
import TheHotelTitle from "./TheHotelTitle/TheHotelTitle";
import './TheHotel.css';
import Image from "./Image/Image";
import Description from "./Description/Description";
import Events from "./Events/Events";
function TheHotel() {
    return (
        <div className='TheHotel'>
            <Navbar/>
                <TheHotelTitle />
                <Image/>
            <div className='TheHotel-container'>
                <Description/>
                <Events/>
            </div>

            <Footer/>
        </div>
    );
}

export default TheHotel;