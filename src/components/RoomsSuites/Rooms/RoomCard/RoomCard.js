import React from 'react';
import './RoomCard.css';
import {URL_IMG} from "../../../Api/Api";
import Buttons from "./Buttons/Buttons";
import {useParams} from "react-router";

function RoomCard(props) {
    const {name}=useParams();
    return (
        <div className='room-card'>
            <div className='room-card-inner'>
                <div className='room-image'>
                    <img src={`${URL_IMG}${props.picture}`} alt=''/>
                </div>
                <h3>{props.title.room_type}</h3>
                <div className='room-table'>
                    <table>
                        <tr>
                            <td className='table-color'>Size</td>
                            <td>{props.size}</td>
                        </tr>
                        <tr>
                            <td className='table-color'>Bed Number</td>
                            <td>{props.bed}</td>
                        </tr>
                        <tr className='tr-description'>
                            <td className='flex table-color'>Features</td>
                            <td className='feature-desc'>
                                {
                                    props.features.map(items => (
                                        <tr >~{items.description}</tr>
                                    ))
                                }

                            </td>
                        </tr>
                    </table>
                    {name ? <Buttons />: ""}
                </div>

            </div>
        </div>
    );
}

export default RoomCard;