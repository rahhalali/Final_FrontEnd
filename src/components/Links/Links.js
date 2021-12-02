import React from 'react';
import {Link} from "react-router-dom";
import './Links.css'
function Links(props) {
    return (
        <div className='links'>
            <div className="inner-links">
                <ul className="ul-links">
                    <li>
                        <Link  to="/" >Home</Link>
                    </li>
                    <li>
                        <Link  to="/thehotel" >The Hotel</Link>
                    </li>
                    <li>
                        <Link  to="/news" >News</Link>
                    </li>
                </ul>
            </div>
        </div>
    );
}

export default Links;