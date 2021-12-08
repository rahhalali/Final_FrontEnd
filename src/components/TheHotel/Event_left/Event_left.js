import React, {useEffect} from 'react';
import './Event_left.css'
import AOS from "aos";
import 'aos/dist/aos.css';
function EventLeft(props) {
    useEffect(() => {
        AOS.init({duration: 1500})
    }, []);
    return (
        <div className='event_left' data-aos="fade">
            <div className='events-both'>
                <div className='left' data-aos="fade-right">
                    <div className='Image-container'>
                        <img src={`http://localhost:8000/${props.picture}`} alt='' />
                    </div>
                </div>
                <div className='right' data-aos="fade-left">
                    <div className='right-inner'>
                        <h2>
                            {props.title}
                        </h2>
                        <p>{props.description}</p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default EventLeft;