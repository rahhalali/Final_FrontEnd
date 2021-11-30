import React from 'react';
import './Footer.css'
import {AiFillInstagram, FaFacebookF, IoLogoWhatsapp, AiFillLinkedin} from "react-icons/all";
import {Link} from "react-router-dom";

function Footer(props) {
    return (
        <footer >
            <div className='footer-inner'>
            <div className='facebook-icons'>
                <div className="icons-inner">
                    <Link to ="" ><FaFacebookF className='icon facebook'/></Link>
                    <Link to ="" > <AiFillInstagram className='icon instagram'/></Link>
                    <Link to ="" > <IoLogoWhatsapp className="icon whatapp"/></Link>
                    <Link to ="" ><AiFillLinkedin className="icon linkedin"/></Link>
                </div>
            </div>
                <div className="contain">
                    <div className="scrolling">
                      <div className="scrolling-inner"></div>
                </div>
                    <p>SCROLL DOWN</p>
                </div>
            <div className='events'>
               <div className="events-inner">
                   <div className='news'>
                       <Link to='/news'>News</Link>
                   </div>
                   <div className='ihg'>
                       <Link to='https://www.ihg.com/rewardsclub/content/us/en/home'>IHG Rewards Club</Link>
                   </div>
               </div>
            </div>
            </div>
        </footer>
    );
}

export default Footer;