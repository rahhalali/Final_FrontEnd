import React from "react";
import Navbar from "../Navbar/Navbar";
import Footer from "../Footer/Footer";
import "./Home.css";
import Sliders from "../Slider/Slider";
import Departments from "../Departments/Departments";
import AboutUs from "../AboutUs/AboutUs";
import WhereToGo from "../WhereToGo/WhereToGo";
import OverView from "../OverView/OverView";
const Home = () => {
  return (
    <div className="home">
      <Navbar />
      <Sliders />
        <Departments/>
        <AboutUs/>
        <WhereToGo/>
        <OverView/>
      <Footer />
    </div>
  );
};

export default Home;
