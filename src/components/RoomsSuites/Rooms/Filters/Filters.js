import React, {useEffect} from 'react';
import {useDispatch} from "react-redux";
import {useSelector} from "react-redux";
import './Filters.css'
import {filterByType, filterByView, getTypesAsync, getViewsAsync} from "../../../Redux/RoomSlice";
function Filters(props) {
    const dispatch=useDispatch();
    const filter =useSelector(state=>state.room);

    const handleChange =(event)=>{
        const index = event.target.selectedIndex;
        const optionElement = event.target.childNodes[index];
        const optionElementId = optionElement.getAttribute("id");
        dispatch(filterByView(optionElementId));
    }
    const handleChange2 =(event)=>{
        const index = event.target.selectedIndex;
        const optionElement = event.target.childNodes[index];
        const optionElementId = optionElement.getAttribute("id");
        dispatch(filterByType(optionElementId));
    }
    useEffect(()=>{
    dispatch(getTypesAsync());
    dispatch(getViewsAsync());
    },[dispatch])

    return (
        <div className='filters'>
            <div className='filters-search'>
                <label className='label'>Select By View: </label>
                <select className='select' onChange={handleChange}>
                    <option id={0} >---</option>
                    {
                        filter.views && filter.views.map(item => {
                            return (
                                <option key={item.id} id={item.id}>{item.view_statu}</option>
                            )
                        })
                    }

                </select>
            </div>
            <div className='filters-search'>
                <label className='label'>Select By Type: </label>
                <select className='select' onChange={handleChange2}>
                    <option id={0}>---</option>
                    {
                        filter.types && filter.types.map(item => {
                            return (
                                <option key={item.id} id={item.id}>{item.room_type}</option>
                            )
                        })
                    }
                </select>
            </div>
        </div>
    );
}

export default Filters;