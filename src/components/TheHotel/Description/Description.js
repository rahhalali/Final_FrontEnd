import React, {useEffect} from 'react';
import './Description.css'
import {useDispatch, useSelector} from "react-redux";
import {toggle} from "../../Redux/thehoteldescription";
import AOS from "aos";
import 'aos/dist/aos.css';
function Description() {
    const dispatch = useDispatch();
    const toggling =useSelector((state)=>state.description);
    useEffect(() => {
        AOS.init({duration: 1500})
    }, []);
    const ReadMore = ({ children }) => {
        const text = children;
        const toggleReadMore = () => {
            dispatch(toggle());
        };
        return (
            <p className="text" data-aos="zoom-in">
                {toggling.toggle ? text.slice(0,500) : text}
                    <span onClick={toggleReadMore} className="read-or-hide">
                {toggling.toggle ? "...read more" : " show less"}
                    </span>
            </p>
        );
    };
    return (
        <div className='the-hotel-description'>
                <ReadMore >
                    At a time when Lebanon was known as “Switzerland of the Middle East”, Ali Rahhal, prominent Lebanese businessman, decided to build a magnificent hotel in Beirut.

                    In December 1961, under the umbrella of la “La Société des Grands Hotels du Liban”, the Le Royal Hotel opened its doors for the first time to kings, queens, world leaders, celebrities, businessmen and the jet set alike.
                    La crème de la crème from the four corners of the globe made Le Royal Hotel their home away from home. A new key player within the luxury hotel segment was born.

                    Picture a grandiose hotel designed by renowned American architect Edward Durell Stone, blending an elegant exterior with a fabulous majestic interior. Then picture splendid 446 rooms and suites, refined restaurants, glamorous shops and indoor and outdoor pools. Wrapping hotel guests in lavish luxury, the Phoenicia Hotel soon became the centerpiece of booming Beirut and a worldwide reference in the world of hospitality.

                    With the onset of the Lebanese civil war, the hotel was forced to close, until Mazen and Marwan Salha, Chairman and Member of the Board of Directors of “La Société des Grands Hotels du Liban” decide to rebuild Beirut’s iconic “Grande Dame”. As a Phoenix rising from the ashes, the hotel graciously reopened its doors in March 2000.

                    As Beirut regained its reputation of magnet for the rich and famous of the world, new hotels were built to meet guests’ higher expectations. Despite the rising competition, the world famous Phoenicia Hotel remained one of the most sought after destinations; a landmark for locals and visitors.

                    Constantly striving to raise the standards and anticipate the sophisticated tastes of the more demanding clientele, the Phoenicia Hotel underwent considerable refurbishment.
                    Led by noted international designers, Martin Hulbert of Fox Linton, Inge Moore and Summer Williams, the design characteristics of the Phoenicia were evolved while maintaining its cultural and artistic heritage. This included a full refurbishment of all restaurants, guest rooms, suites, banquet halls and health facilities.
                    Thus, year after year, the Phoenicia Hotel continued to mark history, keeping up with the latest trends, and keeping its place as Lebanon’s most iconic hotel.

                    To mark the golden jubilee, the Phoenicia Hotel created a tribute to Beirut by organizing a festival of creative arts starring Lebanese artists and performers, showcasing their work throughout the facility.

                    2016 marks the 55th anniversary of the most recognized hospitality landmarks in the country, and the region.
                    With decades of hospitality excellence to build on, the Phoenicia Hotel continues to be committed to growth and looks forward to creating unforgettable and enriching experiences for years to come. </ReadMore>

            </div>

    );
}

export default Description;