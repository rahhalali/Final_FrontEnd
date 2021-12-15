import React, {Fragment, useEffect} from 'react';
import ViewRoomTitle from "./ViewRoomTitle/ViewRoomTitle";
import {useParams} from "react-router";
import {useDispatch, useSelector} from "react-redux";
import Navbar from "../Navbar/Navbar";
import Footer from "../Footer/Footer";
import './ViewRoom.css';
import Features from "./Features/Features";
import {remainingRooms, viewRoomById} from "../Redux/RoomSlice";
import Amenities from "./Amenities/Amenities";
import {URL_IMG} from "../Api/Api";
import RoomCard from "./RoomCard/RoomCard";
function ViewRoom() {
    const {id,Id} =useParams();
    const dispatch=useDispatch();
    const viewroom=useSelector(state=>state.room);

    useEffect(()=>{
        dispatch(viewRoomById(id));
        dispatch(remainingRooms({id:id,Id:Id}))
    },[dispatch])
    return (
        <Fragment>
            <div className='viewroom'>
                <Navbar/>
                {
                    viewroom.viewroom && viewroom.viewroom.map(item => {
                        return (
                            <Fragment key={item.id}>
                                <ViewRoomTitle title={item.types}/>
                                <div className='viewroom-slider'>
                                    <img src={`${URL_IMG}${item.picture}`} alt=''/>
                                </div>
                                <div className='viewroom-info'>
                                    <div className='viewroom-info-left'>
                                       <Amenities
                                        amenities={item.amenities}
                                       />
                                    </div>
                                    <div className='viewroom-info-right'>
                                        <Features
                                            features={item.features}
                                            size={item.size}
                                            price={item.price}
                                            bed_number={item.bed_number}
                                        />
                                    </div>

                                </div>
                                <h3 className='other-option'>Other Option</h3>
                                <div className='viewroom-remain'>
                                    {
                                        viewroom.remainingrooms && viewroom.remainingrooms.map(room=>{
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
                            </Fragment>
                        )
                    })
                }
            </div>
            <Footer/>
        </Fragment>
    );
}

export default ViewRoom;