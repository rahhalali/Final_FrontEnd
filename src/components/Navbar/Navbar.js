import React from 'react';
import './Navbar.css'
import Image from '../Home/Images/NewRoyal.png'
import Links from "../Links/Links";
import {Link} from "react-router-dom";
function Navbar() {
    return (
        <div className="navbar" >
        <nav>
            <div className="logo">
                <Link to='/'><img  src={Image} alt="Logo"/></Link>
            </div>
            <div className="Btns">
                <div className="Btn-inner">
                    <div className="btn1">
                        <button className="contact-us"> CONTACT US
                        </button>
                    </div>

                   <div className="btn2">
                       <Link to='/rooms-suites/booking'><button className="booking">
                           BOOKING AT LE ROYAL
                       </button></Link> </div>

                </div>
            </div>
        </nav>
        <Links />
    </div>
    );
}

export default Navbar;