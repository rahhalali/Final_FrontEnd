import React from 'react';
import './Header.css'
import {useParams} from "react-router";
function Header(props) {
    const {name}=useParams();
    return (
        <div className='rooms-suites-header'>
            <h1>ROOMS & SUITES</h1>
            {name ? <h1>BOOKING</h1> : ""}
            <p className='rooms-suites-description'>With 446 guestrooms and luxurious suites,
                and a residence with 33 suites and a penthouse, the hotel’s rich heritage has been kept skillfully intact,
                blending modern with traditional and creating luxury in a tasteful, timeless interpretation.</p>
        </div>

    );
}

export default Header;