import React from 'react';
import './RoomCard.css';
import {URL_IMG} from "../../Api/Api";
import Buttons from "./Buttons/Buttons";
import {useNavigate} from "react-router";
import {remainingRooms, viewRoomById} from "../../Redux/RoomSlice";
import {useDispatch} from "react-redux";
function RoomCard(props) {
    const navigate =useNavigate();
    const dispatch=useDispatch();
    return (
        <div className='room-card'
             onClick={()=> {navigate(`/rooms/details/${props.id}/type/${props.view_id}`);
        dispatch(viewRoomById(props.id));
        dispatch(remainingRooms({id:props.id,Id:props.view_id}));
        window.location.reload();
        }}
        >
            <div className='room-card-inner'>
                <div className='room-image'>
                    <img src={`${URL_IMG}${props.picture}`} alt=''/>
                </div>
                <h3>{props.title.room_type}</h3>
                <div className='room-table'>
                    <table>
                        <tr className='tr'>
                            <td className='table-color td'>Size</td>
                            <td>{props.size}</td>
                        </tr>
                        <tr className='tr'>
                            <td className='table-color td'>Bed Number</td>
                            <td className='td'>{props.bed}</td>
                        </tr>
                        <tr className='tr-description tr'>
                            <td className='flex table-color td'>Features</td>
                            <td className='feature-desc td'>
                                {
                                    props.features.map(items => (
                                        <tr className='tr'>~{items.description}</tr>
                                    ))
                                }

                            </td>
                        </tr>
                    </table>
                     <Buttons />
                </div>

            </div>
        </div>
    );
}

export default RoomCard;