import React from 'react';
import './Cards.css'
const Cards = (props) => (

    <div className="Card">
        <div className="flip-card">
            <div className="flip-card-inner">
                <div className="flip-card-back">
                    <img src={`http://localhost:8000/${props.imgUrl}`} alt="Avatar" />
                </div>
                <div className="flip-card-front">
                    <h1>{props.title}</h1>
                    <p>{props.content.slice(0,150)}...</p>
                </div>
            </div>
        </div>

    </div>
);

export default Cards;