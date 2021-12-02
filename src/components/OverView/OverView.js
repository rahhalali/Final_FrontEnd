import React, {useEffect} from 'react';
import OverViewTitle from "./OverViewTitle";
import {Link} from "react-router-dom";
import './OverView.css'
import AOS from 'aos';
import 'aos/dist/aos.css';
function OverView(props) {
    useEffect(()=>{
        AOS.init({duration:1500})
    },[])
    return (
        <>
            <OverViewTitle />
        <div className='overview'>
            <div className="overview-content">
                <div className="map"  data-aos="fade-right">
                    <div className="mapouter" >
                        <div className="gmap_canvas">
                            <iframe width="580" height="357" id="gmap_canvas"
    src="https://maps.google.com/maps?q=LE%20Royal&t=&z=13&ie=UTF8&iwloc=&output=embed"
    frameBorder="0" scrolling="no" marginHeight="0" marginWidth="0"/>
                            <Link to="https://fmovies-online.net" /><br/>
                                <Link to="https://www.embedgooglemap.net">google map location for website</Link>

                        </div>
                    </div>
                </div>
                <div className="info">
                    <h3 className='beirut' data-aos="fade-down">Styled rooms and suites, restaurants and spa, 6-star luxury in Beirut</h3>
                    <p className='info-about'  data-aos="fade-down">A Beirut landmark, LE ROYAL Hotel is within walking distance to a host of art,
                        shopping, dining and entertainment spaces.</p>
                    <p className="overlooking"  data-aos="fade-down">
                        Overlooking the Mediterranean, next to trendy
                        Zaitunay Bay marina and Beirut’s famous Corniche,
                        it is only ten minutes from the airport. Close by ,
                        Beirut Souks and Downtown are a hive of characterful bars,
                        cafes and restaurants.
                    </p>
                    <div className="direction"  data-aos="fade-left">
                        <h3>
                            DIRECTIONS
                        </h3>
                        <p>Beirut Rafic Hariri International Airport (BEY)</p>
                        <p>Travel time 20 minutes</p>
                        <p className='email'>LE-Royal@royal.com</p>
                        <p className='number'>+961 1 369100</p>
                        <div className='weather'>
                           <h3>NOW IN BEIRUT  16.41°c Clear 9:40 pm</h3>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        </>
    );
}

export default OverView;