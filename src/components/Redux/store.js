import { configureStore } from "@reduxjs/toolkit";
import todoReducer from "./todoSlice";
import hotel_description from "./thehoteldescription";
import NewsSlice from "./NewsSlice";
import WeatherTime from './TimerWeather';
import RoomSlice from "./RoomSlice";
export default configureStore({
  reducer: {
    login: todoReducer,
    description:hotel_description,
    news:NewsSlice,
    weathertime:WeatherTime,
    room:RoomSlice
  },
});
