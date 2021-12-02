import React, {useEffect} from 'react';
import "./Departments.css"
import AOS from 'aos';
import 'aos/dist/aos.css';
function DepartmentsTitle() {
    useEffect(()=>{
        AOS.init({duration:1500})
    },[])
    return (
        <div className="head" data-aos="zoom-in">
            <h1 className="header">Departments</h1>
        </div>
    );
}

export default DepartmentsTitle;