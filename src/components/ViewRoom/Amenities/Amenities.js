import React from 'react';
import './Amenities.css';
function Amenities(props) {
    return (
        <div className='all-amenities'>
            <h1>Amenities & Services</h1>
            {
                props.amenities.map(item=>(
                    <p className='all-amenities-description'>
                        ~{item.description}
                    </p>
                ))
            }

        </div>
    );
}

export default Amenities;