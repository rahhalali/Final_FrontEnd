import React, {useEffect} from 'react';
import Filters from "./Filters/Filters";
import RoomCard from "./RoomCard/RoomCard";
import './Rooms.css'
import {useDispatch, useSelector} from "react-redux";
import {getRoomsAsync} from "../../Redux/RoomSlice";
function Rooms(props) {
    const dispatch=useDispatch();
    const rooms=useSelector(state=>state.room);

    useEffect(()=>{
        dispatch(getRoomsAsync())
    },[dispatch])
    console.log('rooms',rooms);
    return (
        <div className='rooms'>
            <Filters />
            <div className='rooms-room'>
                {
                    rooms.rooms && rooms.rooms.map(room=>{
                        return (
                            <RoomCard size={room.size}
                                      bed={room.bed_number}
                                      price={room.price}
                                      features={room.features}
                                      views={room.views}
                                      picture={room.picture}
                                      title={room.types}
                                      id={room.id}
                                      view_id={room.view_id}
                            />
                        )
                    })
                }

            </div>

        </div>
    );
}

export default Rooms;