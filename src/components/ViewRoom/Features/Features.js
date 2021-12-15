import React from 'react';
import './Feature.css';
import Buttons from "../../RoomsSuites/Rooms/RoomCard/Buttons/Buttons";
function Features(props) {
    return (
        <div className='info-features'>

            <table className='info-feature-table'>
                <tr>
                    <td className='td-width'>size</td>
                    <td className='td-height'>{props.size}</td>
                </tr>
                <tr>
                    <td className='td-width'>bed</td>
                    <td className='td-height'>{props.bed_number}</td>
                </tr>
                <tr>
                    <td className='td-width heading'><span className='fb'>features</span></td>
                    <td className='td-height'>{
                        props.features.map(items=>(
                            <tr>~{items.description}</tr>
                        ))
                    }</td>
                </tr>
                <tr>
                    <td className='td-width'>price</td>
                    <td className='td-height'>{props.price} $</td>
                </tr>
                <tr>
                    <td colSpan={2}>
                        <div className='span-buttons'>
                            <div className='btn-left'>
                            <button>Add To Card</button>
                            </div>
                            <div className='btn-right'>
                                <button>Buy Now</button>
                            </div>
                        </div>
                    </td>
                </tr>
            </table>
        </div>
    );
}

export default Features;