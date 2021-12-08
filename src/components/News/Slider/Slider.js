import React, {useEffect} from 'react';
import './Slider.css'
import CardsContainer from "../CardsContainer/CardsContainer";
import {useDispatch, useSelector} from "react-redux";
import {NewsAddAsync} from "../../Redux/NewsSlice";

function News_Slider() {
    const dispatch =useDispatch();
    const news=useSelector(state=>state.news);
    useEffect(()=>{
    dispatch(NewsAddAsync())
    },[dispatch])
    return (
        <div className='News-Slider'>
            <CardsContainer cards={news.news} />
        </div>
    );
}

export default News_Slider;