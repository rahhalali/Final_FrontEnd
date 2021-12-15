import React, {useEffect} from 'react';
import './ComplaintForm.css';
import Image from './Images/location.png';
import Image2 from './Images/email.png';
import Image3 from './Images/phone.png';
import Image4 from './Images/shape.png';
import {Link} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import {complainschema} from "../Schema/Schema";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import {EmailAsync, MakeComplaint, toggle} from "../Redux/Complaint";
function ComplaintForm(props) {

    const dispatch = useDispatch();


    const Toggle = () =>{
        dispatch(toggle());
    }
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm({
        resolver: yupResolver(complainschema),
    });
    const submitForm = (data) => {
        console.log('data',data);dispatch(MakeComplaint(data));
        dispatch(EmailAsync(data));

    };

    useEffect(()=>{

    },[]);

    return (
        <div className="container-form">
            <span className="big-circle">
            </span>
            <img src={Image4} className="square" alt=""/>
            <div className="form-container">
                <div className="contact-info">
                    <h3 className="title-contact-us">Let's get in touch</h3>
                    <p className="text">
                       Fill up the form and our Team will get back to you within 15 minutes or will going to call you.
                    </p>

                    <div className="info">
                        <div className="information">
                            <img src={Image} className="icon" alt=""/>
                            <p>Zaytuna Bay /Beirut</p>
                        </div>
                        <div className="information">
                            <img src={Image2} className="icon" alt=""/>
                            <p>Le Royal@royal.com</p>
                        </div>
                        <div className="information">
                            <img src={Image3} className="icon" alt=""/>
                            <p>+961 1 300 911</p>
                        </div>
                    </div>

                    <div className="social-media">
                        <p>Connect with us :</p>
                        <div className="social-icons">
                            <a href="#">
                                <i className="fab fa-facebook-f"/>
                            </a>
                            <Link to="#">
                                <i className="fab fa-twitter"/>
                            </Link>
                            <Link to="#">
                                <i className="fab fa-instagram"></i>
                            </Link>
                            <Link to="#">
                                <i className="fab fa-linkedin-in"/>
                            </Link>
                        </div>
                    </div>
                </div>

                <div className="contact-form">
                    <span className="circle one">

                    </span>
                    <span className="circle two">
                    </span>
                    <form className='form-fill' onSubmit={handleSubmit(submitForm)}>
                        <h3 className="title-contactus">Complaint Form</h3>
                        <div className="input-container">
                            <input type="text" {...register('username')} className="input" placeholder='Username'/>
                            <p>{errors.username?.message}</p>
                        </div>
                        <div className="input-container">
                            <input type="number" {...register("room_id")} className="input" placeholder='number id'/>
                            <p>{errors.room_id?.message}</p>
                        </div>
                        <div className="input-container">
                            <input type="number" {...register("complaint_rating")} className="input" placeholder='Complaint Rating'/>
                            <p>{errors.complaint_rate?.message}</p>
                        </div>
                        <div className="input-container textarea">
                            <textarea {...register("description")} className="input" placeholder='Message'>
                            </textarea>
                            <p>{errors.description?.message}</p>
                        </div>
                        <input type="submit" value="Send" className="btn-submit"/>
                        <input type="button" value="back" className="btn-submit" onClick={Toggle}/>
                    </form>
                </div>
            </div>
        </div>

    );
}

export default ComplaintForm;