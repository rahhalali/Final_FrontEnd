import {createSlice ,createAsyncThunk} from "@reduxjs/toolkit";
import {URL} from '../Api/Api';
import { toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';

export const EmailAsync = createAsyncThunk(
    "complain/EmailAsync",
    async (payload) => {
        const response = await fetch(`${URL}/send-email`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body:JSON.stringify({
                room_id:payload.room_id,
                description:payload.description
            })
        });
        const result = await response.json();
        return { result: result };
    }
);

export const MakeComplaint= createAsyncThunk(
    "complain/MakeComplaint",
    async (payload) => {
        const response = await fetch(`${URL}/add/complaint`, {
            method: "POST",
            headers: {
                Authorization: `Bearer ${localStorage.getItem("access_token")}`,
                "Content-Type": "application/json",
                Accept: "application/json",
            },
            body:JSON.stringify({
                complaint_rating:payload.complaint_rating,
                room_id:payload.room_id,
                description:payload.description
            })
        });
        const result = await response.json();
        console.log('result',result);
        return { result: result };
    }
);


const Complaint = createSlice({
    name: "news",
    initialState: {
        complaint: false
    },
    reducers:{
        toggle:(state,action)=>{
            state.complaint=!state.complaint
        }
    },
    extraReducers: {
        [EmailAsync.fulfilled]:(state,action)=>{
            if(action.payload.result.status === 200){
                toast.success(action.payload.result.message, {
                    position: "top-left",
                    autoClose: 5000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                });
            }
            },
        [MakeComplaint.fulfilled]:(state,action)=>{
            if(action.payload.result.status === 200){
                toast.success(action.payload.result.message, {
                    position: "top-left",
                    autoClose: 5000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                });
            }
        },

    }
});
export const {toggle} = Complaint.actions;
export default Complaint.reducer;
