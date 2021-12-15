import React from 'react';
import './Complaint.css';
import {Link} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import ComplaintForm from "./ComplaintForm";
import {toggle} from '../Redux/Complaint';
function Complaint(props) {
    const dispatch = useDispatch();
    const trigger=useSelector(state=>state.complaint);
    const Toggle = () =>{
        dispatch(toggle());
    }
    return (
        <div>
            <section className="container" onClick={Toggle}>
                <Link to="" className="click-to-chat--btn message-1">
                    <div className="click-text">
                        <div className="message-1-text"><span>Click me?</span><span>To Complaint</span></div>
                    </div>
                    <div className="svg-container">
                        <svg version="1.1" id="chat-icon" className="chat-icon" xmlns="http://www.w3.org/2000/svg"
                             xmlnsXlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 32.5 29.4"
                             style={{enableBackground: 'new 0 0 32.5 29.4'}} xmlSpace="preserve">
                            <path className="st0" d="M2.6,2.8v20h4.9v5.9l6.9-5.9H31v-20H2.6z M23.3,18.6H9.9c-1,0-1.8-0.5-1.8-1.2s0.8-1.2,1.8-1.2h13.5
				c1,0,1.8,0.5,1.8,1.2S24.3,18.6,23.3,18.6z M23.3,14.1H9.9c-1,0-1.8-0.5-1.8-1.2s0.8-1.2,1.8-1.2h13.5c1,0,1.8,0.5,1.8,1.2
				S24.3,14.1,23.3,14.1z M23.3,9.6H9.9c-1,0-1.8-0.5-1.8-1.2s0.8-1.2,1.8-1.2h13.5c1,0,1.8,0.5,1.8,1.2S24.3,9.6,23.3,9.6z"/>
                        </svg>
                        <svg version="1.1" id="crc-icon" className="crc-icon" xmlns="http://www.w3.org/2000/svg"
                             xmlnsXlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 32.5 29.4"
                             enableBackground="new 0 0 32.5 29.4" xmlSpace="preserve">
                            <path fill="#FFFFFF" d="M2.6,2.8v20h4.9v5.9l6.9-5.9H31v-20H2.6z M18.5,19.3c0,0.4-0.3,0.7-0.7,0.7h-1.8c-0.4,0-0.7-0.3-0.7-0.7
	v-1.1c0-0.4,0.3-0.7,0.7-0.7h1.8c0.4,0,0.7,0.3,0.7,0.7V19.3z M21.3,12.6c-0.5,0.6-1.1,1.1-1.8,1.5c-0.4,0.3-0.7,0.5-0.8,0.8
	c-0.1,0.2-0.2,0.5-0.2,0.8c0,0.3-0.3,0.4-0.5,0.4h-2.1c-0.3,0-0.5-0.2-0.5-0.5c0-0.6,0.2-1.1,0.4-1.4c0.3-0.5,0.9-1,1.7-1.5
	c0.4-0.3,0.7-0.6,1-1c0.3-0.4,0.4-0.8,0.4-1.3c0-0.5-0.1-1-0.4-1.3c-0.3-0.3-0.7-0.5-1.2-0.5c-0.4,0-0.8,0.1-1.1,0.4
	c-0.2,0.2-0.3,0.4-0.4,0.6c-0.1,0.3-0.4,0.5-0.7,0.5l-2,0c-0.3,0-0.4-0.2-0.4-0.5v0v0l0,0c0.1-1.1,0.5-1.9,1.2-2.4
	c0.8-0.6,1.9-1,3.3-1c1.5,0,2.7,0.4,3.5,1.1c0.8,0.8,1.3,1.8,1.3,3C22,11.2,21.8,12,21.3,12.6z"/>
                        </svg>
                    </div>
                </Link>
            </section>
            {
                trigger.complaint ?  <div className='Complaint'>
                    <ComplaintForm />
                </div> : ""
            }
        </div>
    );
}

export default Complaint;