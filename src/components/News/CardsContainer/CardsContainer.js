import React from 'react';
import Cards from '../Cards/Cards'
import './CardsContainer.css'
const CardsContainer = (props) => (
    <div className="cards-container">
        {props.cards && props.cards.map((card) => (
            <Cards title={card.title} content={card.description} imgUrl={card.picture} />
        ))}
    </div>
);

export default CardsContainer;