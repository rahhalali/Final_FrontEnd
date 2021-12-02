import React, {useEffect} from 'react';
import './WhereToGo.css'
import {Link} from "react-router-dom";
import WhereToGoTitle from "./WhereToGoTitle";
import AOS from 'aos';
import 'aos/dist/aos.css';
function WhereToGo(props) {
    useEffect(()=>{
        AOS.init();
    },[])
    return (
        <>
            <WhereToGoTitle />
            <div className='where-to-go'>
                <div className="card" data-aos="flip-left"
                     data-aos-easing="ease-out-cubic"
                     data-aos-duration="2000">
                    <div className="card-content">
                        <h2 className="card-title">
                        Something awesome
                        </h2>
                        <p className="card-body">
                        Having an in-house team of expert medical writers and
                        editors makes all the difference in terms of getting your message,
                        </p>
                        <Link to="" className="button">Show More</Link>
                    </div>
                </div>
                    <div className="card" data-aos="flip-left"
                         data-aos-easing="ease-out-cubic"
                         data-aos-duration="2000">
                        <div className="card-content">
                            <h2 className="card-title">
                        Something awesome
                            </h2>
                            <p className="card-body">
                        Having an in-house team of expert medical writers and
                        editors makes all the difference in terms of getting your message,
                            </p>
                            <Link to="" className="button">Show More</Link>
                        </div>
                    </div>
            <div className="card" data-aos="flip-left"
                 data-aos-easing="ease-out-cubic"
                 data-aos-duration="2000">
                <div className="card-content">
                    <h2 className="card-title">
                        Something awesome
                    </h2>
                    <p className="card-body">
                        Having an in-house team of expert medical writers and
                        editors makes all the difference in terms of getting your message,
                    </p>
                    <Link to="" className="button">Show More</Link>
                </div>
            </div>
                <div className="card" data-aos="flip-left"
                     data-aos-easing="ease-out-cubic"
                     data-aos-duration="2000">
                    <div className="card-content">
                        <h2 className="card-title">
                            Something awesome
                        </h2>
                        <p className="card-body">
                            Having an in-house team of expert medical writers and
                            editors makes all the difference in terms of getting your message,
                        </p>
                        <Link to="" className="button">Show More</Link>
                    </div>
                </div>
        </div>
        </>
    );
}

export default WhereToGo;