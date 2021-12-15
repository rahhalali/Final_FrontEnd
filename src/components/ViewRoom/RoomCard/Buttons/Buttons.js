import React from 'react';
import './Buttons.css'
function Buttons(props) {
    return (
        <div className='add-to-card'>
            <div>
                <button >Add To Card</button>
            </div>
            <div>
                <button >Buy Now</button>
            </div>
        </div>
    );
}

export default Buttons;