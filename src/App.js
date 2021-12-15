import React from "react";
import "./App.css";
import Routers from "./components/Routes/Routes";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Complaint from "./components/Complaint/Complaint";
import {ToastContainer} from "react-toastify";
function App() {
  return (
    <div className="App">
        <Routers />
        <Complaint/>
        <ToastContainer
            position="top-left"
            autoClose={5000}
            hideProgressBar={false}
            newestOnTop={false}
            closeOnClick
            rtl
            pauseOnFocusLoss
            draggable
            pauseOnHover
        />
    </div>
  );
}

export default App;
