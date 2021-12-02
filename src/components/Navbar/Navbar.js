import React from 'react';
import './Navbar.css'
import Image from '../Images/NewRoyal.png'
import Links from "../Links/Links";
import {Link} from "react-router-dom";
function Navbar() {
    return (
        <div className="navbar" >
        <nav>
            <div className="logo">
                <Link to='/'><img  src={Image}
                                   alt="Logo"
                /></Link>
            </div>
            <div className="Btns">
                <div className="Btn-inner">
                    <div className="btn1">
                        <button className="contact-us"> CONTACT US
                        </button>
                    </div>

                   <div className="btn2">
                       <button className="booking">
                           BOOKING AT LE ROYAL
                       </button> </div>
                </div>
            </div>
        </nav>
        <Links />
    </div>
    );
}

export default Navbar;