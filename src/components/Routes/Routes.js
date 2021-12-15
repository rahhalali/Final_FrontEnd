import React from 'react';
import { Route } from "react-router-dom";
import { Routes } from "react-router-dom";
import Login from "../Login/Login";
// import ProtectedRoute from "./ProtectedRoutes";
import Home from "../Home/Home";
import News from "../News/News";
import TheHotel from "../TheHotel/TheHotel";
import RoomsSuites from "../RoomsSuites/RoomsSuites";
import ViewRoom from "../ViewRoom/ViewRoom";


function Routers(props) {
    // const login=useSelector((state)=>state.login);
    return (
        <div>
            <Routes>
                <Route path="/login" element={<Login/>}/>
                <Route path="/" element={<Home/>}/>
                <Route path="/news" element={<News />} />
                <Route path="/thehotel" element={<TheHotel />} />
                <Route path="/rooms-suites" element={<RoomsSuites />} />
                <Route path="/rooms-suites/:name" element={<RoomsSuites />} />
                {/*<Route path="/rooms/details/:id" element={<ViewRoom />} />*/}
                <Route path="/rooms/details/:id/type/:Id" element={<ViewRoom />} />
            </Routes>
        </div>
    )
}
export default Routers;
