import React from 'react';
import {NavLink} from "react-router-dom";
import './Links.css'
function Links(props) {
    return (
        <div className='links'>
            <div className="inner-links">
                <ul className="ul-links">
                    <li>
                        <NavLink exact to="/" activeClassName="active">Home</NavLink>
                    </li>
                    <li>
                        <NavLink exact to="/thehotel" activeClassName="active">The Hotel</NavLink>
                    </li>
                    <li>
                        <NavLink exact to="/news" aactiveClassName="active">News</NavLink>
                    </li>
                </ul>
            </div>
        </div>
    );
}

export default Links;