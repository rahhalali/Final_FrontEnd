import React from 'react';
import Navbar from "../Navbar/Navbar";
import Footer from "../Footer/Footer";
import './Home.css'
import Sliders from "../Slider/Slider";
const Home =(props)=> {
    return (
        <div className="home">
            <Navbar />
            <Sliders />
            <Footer/>

        </div>
    );
}

export default Home;