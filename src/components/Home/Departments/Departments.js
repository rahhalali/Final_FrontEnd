import React, {useEffect} from 'react';
import Restaurant from '../Images/restaurant.jpeg';
import Suites from '../Images/suites.jpeg';
import Art from '../Images/art.jpeg';
import Meeting from '../Images/meeting.jpeg';
import Spa from '../Images/spa.jpeg';
import './Departments.css';
import DepartmentsTitle from "./DepartmentsTitle";
import {useNavigate} from "react-router";
import AOS from "aos";
import 'aos/dist/aos.css';
function Departments(props) {
    const navigate=useNavigate();
    useEffect(()=>{
        AOS.init({duration:2000})
    },[])
    return (
        <>
        <DepartmentsTitle />
            <div className="boxes">
                <div className='div div1' data-aos="zoom-in-right" onClick={()=>navigate('/rooms-suites')}>
                    <img src={Suites} alt="img" />
                        <p className="overlay">
                        <span>
                            SUITES & ROOMS
                        </span>
                        </p>
                </div>


                <div className='div div2' data-aos="zoom-in-down">
                    <img src={Restaurant} alt="img" />
                        <p className="overlay">
                        <span>
                            RESTAURANTS
                        </span>
                        </p>
                </div>


                <div className='div div3' data-aos="zoom-in-up">
                    <img src={Art} alt="img" />
                        <p className="overlay" >
                        <span>
                           ARTS
                        </span>
                        </p>
                </div>


                <div className='div div4' data-aos="zoom-in-left">
                    <img src={Meeting} alt="img" />
                        <p className="overlay" >
                        <span>
                            MEETING ROOMS
                        </span>
                        </p>
                </div>

                <div className='div div5' data-aos="zoom-in-left">
                    <img src={Spa} alt="img" />
                        <p className="overlay" >
                        <span>
                            SPA & WELLNESS
                        </span>
                        </p>
                </div>

            </div>
        </>

    );
}

export default Departments;