import React from 'react';
import { Route } from "react-router-dom";
import { Routes } from "react-router-dom";
import Login from "../Login/Login";
// import ProtectedRoute from "./ProtectedRoutes";
import Home from "../Home/Home";
import News from "../News/News";
import TheHotel from "../TheHotel/TheHotel";


function Routers(props) {
    // const login=useSelector((state)=>state.login);
    return (
        <div>
            <Routes>
                <Route path="/login" element={<Login/>}/>
                <Route path="/" element={<Home/>}/>
                <Route path="/news" element={<News />} />
                <Route path="/thehotel" element={<TheHotel />} />
            </Routes>
        </div>
    )
}
export default Routers;
