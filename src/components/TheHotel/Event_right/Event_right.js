import React, {useEffect} from 'react';
import './Event_right.css'
import AOS from "aos";
import 'aos/dist/aos.css';

function EventRight(props) {
    useEffect(() => {
        AOS.init({duration: 1500})
    }, []);
    return (
        <div className='event_right' data-aos="fade">
            <div className='events-both-left-right' >
                <div className='event-left-left' data-aos="fade-right">
                    <div className='left_event'>
                        <h2>{props.title}</h2>
                        <p>{props.description}</p>
                    </div>
                </div>
                <div className='event-right-right' data-aos="fade-left">
                    <div className='right-event-Image-container'>
                        <img src={`http://localhost:8000/${props.picture}`} alt='' />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default EventRight;