import React from 'react';
import Navbar from "../Navbar/Navbar";
import Footer from "../Footer/Footer";
import Header from "./Header/Header";
import Slider from "./Slider/Slider";
import Rooms from "./Rooms/Rooms";

function RoomsSuites(props) {
    return (
        <div className='rooms-suites'>
            <Navbar/>
            <Header/>
            <Slider/>
            <Rooms/>
            <Footer/>
        </div>
    );
}

export default RoomsSuites;