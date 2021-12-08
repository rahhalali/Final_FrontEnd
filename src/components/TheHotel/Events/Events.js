import React, { useEffect} from 'react';
import './Events.css'
import Empty from "../Empty/Empty";
import EventLeft from "../Event_left/Event_left";
import EventRight from "../Event_right/Event_right";
import Date from "../Date/Date";
import {useDispatch, useSelector} from "react-redux";
import {eventAsync} from "../../Redux/thehoteldescription";


function Events() {
    const dispatch = useDispatch();
    const GetEvents = useSelector(state=>state.description);
    useEffect(()=>{
        dispatch(eventAsync());
    },[dispatch]);
    console.log('events',GetEvents.events);
    return (
        <div className='events'>
            <Empty/>
            {
              GetEvents.events && GetEvents.events.map((item,index) => {
                    return (
                        <div className='events-event' key={index}>
                            <Date day={item.day} month={item.month}/>
                            {index % 2 === 0 ? <EventLeft description={item.description} title={item.title}
                                                           picture={item.picture}/> :
                                <EventRight description={item.description} title={item.title} picture={item.picture}/>}
                        </div>
                    );
                })
            }
        </div>
    );
}

export default Events;