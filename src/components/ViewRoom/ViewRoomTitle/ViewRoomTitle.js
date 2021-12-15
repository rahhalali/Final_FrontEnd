import React, {useEffect} from 'react';
import AOS from "aos";
import './ViewRoomTitle.css';
function ViewRoomTitle(props) {
    useEffect(()=>{
        AOS.init({duration:2000})
    },[])
    return (
        <div className="view-room-title" data-aos="zoom-in">
            <h1 className="header">{props.title.room_type}</h1>
        </div>
    );
}

export default ViewRoomTitle;