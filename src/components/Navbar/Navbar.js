import React from 'react';
import './Navbar.css'
import Image from '../Images/Le Royal.png'
import Links from "../Links/Links";
function Navbar(props) {
    return (
        <div className="navbar" >
        <nav>
            <div className="logo">
                <img  src={Image}
                      alt="Logo"/>
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